import assert from 'node:assert/strict';
import { test } from 'node:test';
import { VoiceControlService, type SocketLike, type WidgetOptions } from '../../src-webcomponents/src/service';
import type { WakewordEngine, WakewordResult } from '../../src-webcomponents/src/wakeword';

const options: WidgetOptions = {
    mode: 'ptt', parakeet: 'ai-parakeet.0',
    ringBufferMs: 1000, stripWakeword: false, microphone: '',
    threshold: 0.01, minSpeechMs: 250, silenceMs: 1200, noSpeechMs: 5000, maxRecordMs: 15000,
    activationTone: false, completionTone: false, showInterim: true,
    resultState: '', statusState: '', errorState: '', forwardInstance: '', forwardCommand: '',
};

test('shared service sends no audio before activation and releases the last widget microphone', async () => {
    const tracks = [{ stopped: false, onended: null as (() => void) | null, stop() { this.stopped = true; } }];
    let node: FakeWorklet | undefined;
    class FakeWorklet {
        port = { onmessage: undefined as ((event: { data: { pcm: ArrayBuffer } }) => void) | undefined,
            postMessage(_message: string) {} };
        constructor() { node = this; }
        connect() {}
        disconnect() {}
    }
    class FakeAudioContext {
        state = 'running'; sampleRate = 16000; destination = {};
        audioWorklet = { addModule: async (_url: string) => {} };
        async resume() {}
        async close() { this.state = 'closed'; }
        createMediaStreamSource() { return { connect() {}, disconnect() {} }; }
    }
    Object.assign(globalThis, { window: globalThis, AudioContext: FakeAudioContext, AudioWorkletNode: FakeWorklet });
    Object.defineProperty(globalThis, 'isSecureContext', { configurable: true, value: true });
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: {
        mediaDevices: { getUserMedia: async () => ({ getTracks: () => tracks, getAudioTracks: () => tracks }) },
    } });
    const calls: Record<string, unknown>[] = [];
    const socket = { sendTo: async (_instance: string, _command: string, message: Record<string, unknown>) => {
        calls.push(message); return undefined;
    }, setState: async () => undefined };
    const service = new VoiceControlService();
    const first = service.subscribe(() => {});
    const second = service.subscribe(() => {});
    await service.enable(socket, options);
    assert.equal(service.state.phase, 'listening');
    node!.port.onmessage!({ data: { pcm: new Float32Array(1280).buffer } });
    assert.equal(calls.some(call => call.action === 'audio' || call.action === 'start'), false);
    first();
    assert.equal(tracks[0].stopped, false);
    second();
    await new Promise(resolve => setTimeout(resolve, 10));
    assert.equal(tracks[0].stopped, true);
    assert.equal(service.state.phase, 'disabled');
});

test('socket loss moves an active service to error and stops capture', async () => {
    const tracks = [{ stopped: false, onended: null as (() => void) | null, stop() { this.stopped = true; } }];
    class Context {
        state = 'running'; sampleRate = 16000; destination = {};
        audioWorklet = { addModule: async () => {} };
        async resume() {} async close() { this.state = 'closed'; }
        createMediaStreamSource() { return { connect() {}, disconnect() {} }; }
    }
    class Node { port = { onmessage: null, postMessage() {} }; connect() {} disconnect() {} }
    Object.assign(globalThis, { window: globalThis, AudioContext: Context, AudioWorkletNode: Node });
    Object.defineProperty(globalThis, 'isSecureContext', { configurable: true, value: true });
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: {
        mediaDevices: { getUserMedia: async () => ({ getTracks: () => tracks, getAudioTracks: () => tracks }) },
    } });
    const service = new VoiceControlService();
    const unsubscribe = service.subscribe(() => {});
    await service.enable({ sendTo: async () => undefined, setState: async () => undefined }, options);
    service.connectionLost('Connection lost');
    await new Promise(resolve => setTimeout(resolve, 10));
    assert.equal(service.state.phase, 'error');
    assert.equal(service.state.enabled, false);
    assert.equal(tracks[0].stopped, true);
    unsubscribe();
});

test('wake word mode gates Parakeet start until local detection', async () => {
    let node: { port: { onmessage?: (event: { data: { pcm: ArrayBuffer } }) => void; postMessage: (_message: string) => void } } | undefined;
    class Worklet {
        port = { onmessage: undefined as ((event: { data: { pcm: ArrayBuffer } }) => void) | undefined, postMessage(_message: string) {} };
        constructor() { node = this; } connect() {} disconnect() {}
    }
    class Context {
        state = 'running'; sampleRate = 16000; destination = {};
        audioWorklet = { addModule: async () => {} };
        async resume() {} async close() { this.state = 'closed'; }
        createMediaStreamSource() { return { connect() {}, disconnect() {} }; }
    }
    const track = { onended: null as (() => void) | null, stop() {} };
    Object.assign(globalThis, { window: globalThis, AudioContext: Context, AudioWorkletNode: Worklet });
    Object.defineProperty(globalThis, 'isSecureContext', { configurable: true, value: true });
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: {
        mediaDevices: { getUserMedia: async () => ({ getTracks: () => [track], getAudioTracks: () => [track] }) },
    } });
    let frames = 0;
    const engine: WakewordEngine = {
        async initialize() {}, reset() {}, async dispose() {},
        async processAudio(): Promise<WakewordResult> {
            frames++;
            return { detected: frames === 2, confidence: frames === 2 ? 0.9 : 0.01, timestamp: Date.now(), name: 'io_broker' };
        },
    };
    const calls: string[] = [];
    const socket: SocketLike = { sendTo: async <T,>(_instance: string, command: string, message: Record<string, unknown>) => {
        calls.push(`${command}:${message.action || ''}`);
        let response: unknown;
        if (command === 'getWakewordConfig') response = { names: ['io_broker'], threshold: 0.5 };
        else if (message.action === 'start') response = { id: 'test', sampleRate: 16000 };
        else response = { events: [] };
        return response as T;
    }, setState: async () => undefined };
    const service = new VoiceControlService(() => engine);
    const unsubscribe = service.subscribe(() => {});
    await service.enable(socket, { ...options, mode: 'wakeword' });
    node!.port.onmessage!({ data: { pcm: new Float32Array(1280).buffer } });
    await new Promise(resolve => setTimeout(resolve, 0));
    assert.equal(calls.some(call => call === 'live:start'), false);
    node!.port.onmessage!({ data: { pcm: new Float32Array(1280).buffer } });
    await new Promise(resolve => setTimeout(resolve, 10));
    assert.equal(calls.some(call => call === 'live:start'), true);
    await service.disable();
    unsubscribe();
});
