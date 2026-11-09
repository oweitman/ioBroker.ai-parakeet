import { createRoot, type Root } from 'react-dom/client';
import { defineWebComponent, IobWebComponent } from '@iobroker/web-components/element';
import type { WebComponentSocket } from '@iobroker/web-components';
import { WakewordView } from './WakewordView';
import { voiceService, type Mode, type Snapshot, type SocketLike, type WidgetOptions } from './service';
import { STYLES } from './styles';

interface Settings {
    [key: string]: string | number | boolean | undefined;
    parakeet?: string; autoStart?: boolean; mode?: Mode; microphone?: string;
    ringBufferMs?: number; stripWakeword?: boolean; threshold?: number; minSpeechMs?: number;
    silenceMs?: number; noSpeechMs?: number; maxRecordMs?: number; showText?: boolean;
    activationTone?: boolean; completionTone?: boolean;
    showInterim?: boolean; compact?: boolean; language?: 'auto' | 'de' | 'en';
    accentColor?: string; fontSize?: number; resultState?: string; statusState?: string;
    errorState?: string; forwardInstance?: string; forwardCommand?: string;
}
const instance = (value: string | undefined, adapter: string): string => {
    const id = (value || `${adapter}.0`).replace(/^system\.adapter\./, '');
    return new RegExp(`^${adapter.replaceAll('-', '\\-')}\\.\\d+$`).test(id) ? id : `${adapter}.0`;
};
const numeric = (value: number | undefined, fallback: number): number => Number.isFinite(Number(value)) ? Number(value) : fallback;

class WakewordElement extends IobWebComponent<Settings> {
    readonly #root: Root;
    #unsubscribe?: () => void;
    #autoStarted = false;
    #lastSocket: WebComponentSocket | null = null;
    #state: Snapshot = voiceService.state;
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const style = document.createElement('style'); style.textContent = STYLES;
        const mount = document.createElement('div'); mount.style.height = '100%';
        shadow.append(style, mount);
        this.#root = createRoot(mount);
    }
    override disconnectedCallback(): void {
        this.#unsubscribe?.(); this.#unsubscribe = undefined;
        this.#autoStarted = false;
        this.#lastSocket = null;
        super.disconnectedCallback();
    }
    protected override getStateIds(settings: Settings): string[] {
        return [`system.adapter.${instance(settings.parakeet, 'ai-parakeet')}.alive`];
    }
    protected override render(): void {
        if (!this.#unsubscribe) this.#unsubscribe = voiceService.subscribe(state => { this.#state = state; this.#draw(); });
        if (this.editMode && voiceService.state.enabled) void voiceService.disable();
        const parakeet = instance(this.settings.parakeet, 'ai-parakeet');
        if (this.states[`system.adapter.${parakeet}.alive`]?.val === false) {
            voiceService.connectionLost('Adapter is not running');
        }
        if (this.socket !== this.#lastSocket) {
            const oldSocket = this.#lastSocket;
            this.#lastSocket = this.socket;
            this.#autoStarted = false;
            if (oldSocket && voiceService.state.enabled) {
                void voiceService.disable().then(() => {
                    if (this.isConnected && !this.editMode && this.settings.autoStart && this.socket) {
                        this.#autoStarted = true;
                        void voiceService.enable(this.socket as unknown as SocketLike, this.#options());
                    }
                });
                this.#draw();
                return;
            }
        }
        if (!this.editMode && this.settings.autoStart && !this.#autoStarted && this.socket) {
            this.#autoStarted = true;
            void voiceService.enable(this.socket as unknown as SocketLike, this.#options());
        }
        this.#draw();
    }
    #options(): WidgetOptions {
        const s = this.settings;
        return {
            parakeet: instance(s.parakeet, 'ai-parakeet'),
            mode: s.mode || 'wakeword', microphone: s.microphone || '',
            ringBufferMs: numeric(s.ringBufferMs, 1000), stripWakeword: !!s.stripWakeword,
            threshold: numeric(s.threshold, 0.015), minSpeechMs: numeric(s.minSpeechMs, 250),
            silenceMs: numeric(s.silenceMs, 1200), noSpeechMs: numeric(s.noSpeechMs, 5000),
            maxRecordMs: numeric(s.maxRecordMs, 15000), showInterim: s.showInterim !== false,
            activationTone: !!s.activationTone, completionTone: !!s.completionTone,
            resultState: s.resultState || '', statusState: s.statusState || '', errorState: s.errorState || '',
            forwardInstance: s.forwardInstance || '', forwardCommand: s.forwardCommand || '',
        };
    }
    #language(): 'de' | 'en' {
        return this.settings.language === 'de' || this.settings.language === 'en' ? this.settings.language
            : (this.systemLang || navigator.language).toLowerCase().startsWith('de') ? 'de' : 'en';
    }
    #draw(): void {
        this.#root.render(<WakewordView
            snapshot={this.#state} mode={this.settings.mode || 'wakeword'} language={this.#language()}
            compact={!!this.settings.compact} showText={this.settings.showText !== false}
            accentColor={this.settings.accentColor || '#2563eb'} fontSize={numeric(this.settings.fontSize, 16)}
            editMode={this.editMode}
            onToggle={() => {
                if (voiceService.state.enabled) void voiceService.disable();
                else if (this.socket) void voiceService.enable(this.socket as unknown as SocketLike, this.#options());
            }}
            onPtt={() => { if (this.socket) void voiceService.pushToTalk(this.socket as unknown as SocketLike, this.#options()); }}
            onStop={() => voiceService.finishRecording()}
        />);
    }
}

defineWebComponent('iob-wakeword', WakewordElement);
