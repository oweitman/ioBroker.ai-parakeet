export const STYLES = `
:host { display:block; width:100%; height:100%; color:inherit; font:inherit; }
* { box-sizing:border-box; }
.wakeword { width:100%; height:100%; padding:var(--wakeword-padding, 16px); background:transparent; color:inherit; font:inherit; text-align:inherit; overflow:auto; }
.top { display:flex; align-items:center; gap:16px; }
.mic { width:64px; height:64px; border:0; border-radius:50%; background:color-mix(in srgb, currentColor 12%, transparent); color:inherit; font:inherit; cursor:pointer; display:grid; place-items:center; flex:none; }
.mic.on { background:var(--wake-accent, var(--iob-primary, #2563eb)); color:var(--iob-primary-contrast, #fff); box-shadow:0 0 0 5px color-mix(in srgb, var(--wake-accent, var(--iob-primary, #2563eb)) 18%, transparent); }
.mic:disabled { opacity:.55; cursor:default; }
.mic svg { width:34px; height:34px; fill:currentColor; }
.status { display:flex; flex-direction:column; gap:4px; min-width:0; }
.status strong { font-weight:inherit; }
.status small { opacity:.7; }
.meter { height:5px; background:color-mix(in srgb,currentColor 15%,transparent); border-radius:99px; margin-top:16px; overflow:hidden; }
.meter span { display:block; height:100%; background:var(--wake-accent, var(--iob-primary, #2563eb)); transition:width .1s linear; }
.text { margin:14px 0 0; overflow-wrap:anywhere; }
.error { color:var(--iob-error, #dc2626); margin:12px 0 0; }
.actions { display:flex; gap:8px; margin-top:14px; }
.actions button { border:1px solid var(--wake-accent, var(--iob-primary, #2563eb)); color:var(--wake-accent, var(--iob-primary, #2563eb)); background:transparent; border-radius:var(--iob-border-radius, 6px); padding:6px 12px; cursor:pointer; font:inherit; }
.actions button:disabled { opacity:.5; }
.compact { padding:var(--wakeword-padding, 8px); }
.compact .mic { width:42px; height:42px; }
.compact .mic svg { width:25px; height:25px; }
.compact .meter { margin-top:8px; }
@media (prefers-reduced-motion:reduce) { .meter span { transition:none; } }
`;
