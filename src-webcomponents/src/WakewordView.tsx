import type { JSX } from 'react';
import type { Mode, Snapshot } from './service';

// Same Material microphone path used by ioBroker.assistant (Apache-2.0 icon source).
const MIC = 'M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z';
const WORDS = {
    de: { disabled: 'Mikrofon aus', initializing: 'Initialisierung…', listening: 'Warte auf Aktivierungswort', activated: 'Aktiviert', recording: 'Aufnahme läuft', processing: 'Verarbeitung…', result: 'Ergebnis', error: 'Fehler', on: 'Mikrofon deaktivieren', off: 'Mikrofon aktivieren', ptt: 'Sprechen', stop: 'Aufnahme beenden', editor: 'Mikrofon im Editor deaktiviert' },
    en: { disabled: 'Microphone off', initializing: 'Initializing…', listening: 'Waiting for wake word', activated: 'Activated', recording: 'Recording', processing: 'Processing…', result: 'Result', error: 'Error', on: 'Disable microphone', off: 'Enable microphone', ptt: 'Speak', stop: 'Finish recording', editor: 'Microphone disabled in editor' },
};

export function WakewordView(props: {
    snapshot: Snapshot; mode: Mode; language: 'de' | 'en'; compact: boolean; showText: boolean;
    accentColor?: string; fontSize?: number; editMode: boolean;
    onToggle: () => void; onPtt: () => void; onStop: () => void;
}): JSX.Element {
    const { snapshot: state } = props;
    const word = WORDS[props.language];
    const active = state.enabled;
    return (
        <div part="content" className={`wakeword ${props.compact ? 'compact' : ''}`}
            style={{ ...(props.accentColor ? { '--wake-accent': props.accentColor } : {}),
                ...(props.fontSize ? { fontSize: props.fontSize } : {}) } as React.CSSProperties}>
            <div className="top">
                <button type="button" part="microphone" className={`mic ${active ? 'on' : ''}`} aria-pressed={active}
                    aria-label={active ? word.on : word.off} title={active ? word.on : word.off}
                    disabled={props.editMode || state.phase === 'initializing'} onClick={props.onToggle}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d={MIC} /></svg>
                </button>
                <div part="status" className="status"><strong>{props.editMode ? word.editor : word[state.phase]}</strong>
                    {state.wakeword && !props.compact ? <small>{state.wakeword}</small> : null}
                </div>
            </div>
            <div part="meter" className="meter" role="meter" aria-label="Microphone level" aria-valuenow={Math.round(state.level * 100)} aria-valuemin={0} aria-valuemax={100}>
                <span style={{ width: `${Math.round(state.level * 100)}%` }} />
            </div>
            {props.showText && state.text && !props.compact ? <p part="transcript" className="text">{state.text}</p> : null}
            {state.error && !props.compact ? <p className="error" role="alert">{state.error}</p> : null}
            {(props.mode === 'ptt' || props.mode === 'combined') && !props.editMode ? (
                <div className="actions">
                    <button type="button" onClick={props.onPtt} disabled={state.phase === 'initializing' || state.phase === 'processing' || state.phase === 'recording'}>{word.ptt}</button>
                    {state.phase === 'recording' ? <button type="button" onClick={props.onStop}>{word.stop}</button> : null}
                </div>
            ) : null}
        </div>
    );
}
