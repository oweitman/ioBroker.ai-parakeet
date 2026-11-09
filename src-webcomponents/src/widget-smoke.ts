import './WakewordElement';

let micCalls = 0;
Object.defineProperty(navigator, 'mediaDevices', { configurable: true, value: {
    getUserMedia: async () => { micCalls++; throw new Error('Mic must stay off in the editor'); },
} });

const element = document.createElement('iob-wakeword') as HTMLElement & {
    editMode: boolean;
    settings: Record<string, unknown>;
};
element.editMode = true;
element.settings = { autoStart: true, parakeet: 'ai-parakeet.0' };
document.body.append(element);

setTimeout(() => {
    const button = element.shadowRoot?.querySelector('button.mic') as HTMLButtonElement | null;
    const okay = button?.disabled && micCalls === 0;
    document.body.dataset.result = okay ? 'pass' : 'fail';
    document.querySelector('#result')!.textContent = okay
        ? 'PASS: component renders microphone button and does not capture in editor'
        : `FAIL: button=${!!button}, disabled=${button?.disabled}, micCalls=${micCalls}`;
    element.remove();
}, 500);
