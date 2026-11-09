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
element.settings = { autoStart: true, parakeet: 'ai-parakeet.0', fontSize: 16 };
const widget = document.createElement('div');
widget.className = 'vis-widget';
Object.assign(widget.style, {
    fontSize: '28px', color: 'rgb(17, 34, 51)', fontStyle: 'italic',
    fontWeight: '700', textAlign: 'right', backgroundColor: 'rgb(238, 239, 240)',
    border: '2px solid rgb(17, 34, 51)', padding: '9px',
});
widget.append(element);
document.body.append(widget);
const projectStyle = document.createElement('style');
projectStyle.textContent = 'iob-wakeword::part(microphone) { border: 3px solid rgb(90, 40, 20); }';
document.head.append(projectStyle);

setTimeout(() => {
    const button = element.shadowRoot?.querySelector('button.mic') as HTMLButtonElement | null;
    const content = element.shadowRoot?.querySelector('.wakeword') as HTMLElement | null;
    const status = element.shadowRoot?.querySelector('.status strong') as HTMLElement | null;
    const contentStyle = content && getComputedStyle(content);
    const statusStyle = status && getComputedStyle(status);
    const buttonStyle = button && getComputedStyle(button);
    const initialFontSize = contentStyle?.fontSize;
    widget.style.fontSize = '30px';
    const updatedFontSize = content && getComputedStyle(content).fontSize;
    const okay = button?.disabled && micCalls === 0 &&
        initialFontSize === '28px' && updatedFontSize === '30px' &&
        contentStyle?.color === 'rgb(17, 34, 51)' &&
        contentStyle.fontStyle === 'italic' && statusStyle?.fontWeight === '700' &&
        buttonStyle?.color === 'rgb(17, 34, 51)' && buttonStyle.borderTopWidth === '3px' &&
        getComputedStyle(widget).backgroundColor === 'rgb(238, 239, 240)';
    document.body.dataset.result = okay ? 'pass' : 'fail';
    document.querySelector('#result')!.textContent = okay
        ? 'PASS: VIS CSS reaches widget content; microphone stays off in editor'
        : `FAIL: button=${!!button}, disabled=${button?.disabled}, micCalls=${micCalls}, font=${initialFontSize}/${updatedFontSize}, color=${contentStyle?.color}, weight=${statusStyle?.fontWeight}`;
    widget.remove();
    projectStyle.remove();
}, 500);
