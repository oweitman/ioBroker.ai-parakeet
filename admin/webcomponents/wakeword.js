import { createRoot as e, jsx as t, jsxs as n } from "../../../lib/esm/react-19.js";
// \0rolldown/runtime.js
var r = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), i = "iob-dialog-close";
function a(e) {
	return !!e.form;
}
// ../node_modules/@iobroker/web-components/build/manifest.js
var o = [
	"header",
	"staticText",
	"divider"
];
function s(e, t) {
	return e == null ? "" : typeof e == "object" ? e[t] || e.en || Object.values(e).find((e) => !!e) || "" : String(e);
}
// ../node_modules/@iobroker/web-components/build/settings.js
function c(e) {
	let t = {};
	for (let [n, r] of Object.entries(e.items || {})) r && !o.includes(r.type) && (t[n] = r.type);
	return t;
}
function l(e) {
	return typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? e.toString() : JSON.stringify(e);
}
function u(e, t) {
	if (t != null) switch (e) {
		case "number":
		case "slider": {
			if (typeof t == "number") return Number.isFinite(t) ? t : void 0;
			let e = l(t).trim().replace(",", ".");
			if (!e) return;
			let n = Number(e);
			return Number.isFinite(n) ? n : void 0;
		}
		case "checkbox": return t === !0 || t === "true" || t === 1 || t === "1";
		default: return l(t);
	}
}
function d(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(e)) {
		let e = u(i, t[r]);
		e !== void 0 && (n[r] = e);
	}
	return n;
}
// ../node_modules/@iobroker/web-components/build/theme.js
var f = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif", p = Object.freeze({
	type: "light",
	primary: "#3399CC",
	primaryContrast: "#FFFFFF",
	secondary: "#164477",
	secondaryContrast: "#FFFFFF",
	background: "#FFFFFF",
	paper: "#FFFFFF",
	text: "rgba(0, 0, 0, 0.87)",
	textSecondary: "rgba(0, 0, 0, 0.6)",
	divider: "rgba(0, 0, 0, 0.12)",
	error: "#D32F2F",
	warning: "#ED6C02",
	info: "#0288D1",
	success: "#2E7D32",
	fontFamily: f,
	fontSize: 14,
	borderRadius: 4
}), m = Object.freeze({
	type: "dark",
	primary: "#4DABF5",
	primaryContrast: "rgba(0, 0, 0, 0.87)",
	secondary: "#436A93",
	secondaryContrast: "#FFFFFF",
	background: "#121212",
	paper: "#121212",
	text: "#FFFFFF",
	textSecondary: "rgba(255, 255, 255, 0.7)",
	divider: "rgba(255, 255, 255, 0.12)",
	error: "#F44336",
	warning: "#FFA726",
	info: "#29B6F6",
	success: "#66BB6A",
	fontFamily: f,
	fontSize: 14,
	borderRadius: 4
}), h = [
	"primary",
	"primaryContrast",
	"secondary",
	"secondaryContrast",
	"background",
	"paper",
	"text",
	"textSecondary",
	"divider",
	"error",
	"warning",
	"info",
	"success",
	"fontFamily"
], g = ["fontSize", "borderRadius"];
function _(e) {
	return { ...e === "dark" ? m : p };
}
function v(e) {
	if (!e || typeof e != "object") return _(typeof e == "string" ? e : "light");
	let t = e, n = _(typeof t.type == "string" ? t.type : "light");
	for (let e of h) {
		let r = t[e];
		typeof r == "string" && r.trim() && (n[e] = r.trim());
	}
	for (let e of g) {
		let r = t[e], i = typeof r == "string" ? parseFloat(r) : r;
		typeof i == "number" && Number.isFinite(i) && i >= 0 && (n[e] = i);
	}
	return n;
}
function y(e, t) {
	return e.type === t.type && h.every((n) => e[n] === t[n]) && g.every((n) => e[n] === t[n]);
}
function b(e) {
	return `--iob-${e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`)}`;
}
function x(e) {
	let t = {};
	for (let n of h) t[b(n)] = e[n];
	for (let n of g) t[b(n)] = `${e[n]}px`;
	return t["color-scheme"] = e.type, t;
}
// ../node_modules/@iobroker/web-components/build/nativeDialog.js
var ee = {
	ok: {
		en: "OK",
		"zh-cn": "确定"
	},
	cancel: {
		en: "Cancel",
		de: "Abbrechen",
		ru: "Отмена",
		pt: "Cancelar",
		nl: "Annuleren",
		fr: "Annuler",
		it: "Annulla",
		es: "Cancelar",
		pl: "Anuluj",
		uk: "Скасувати",
		"zh-cn": "取消"
	},
	close: {
		en: "Close",
		de: "Schließen",
		ru: "Закрыть",
		pt: "Fechar",
		nl: "Sluiten",
		fr: "Fermer",
		it: "Chiudi",
		es: "Cerrar",
		pl: "Zamknij",
		uk: "Закрити",
		"zh-cn": "关闭"
	}
}, te = "\ndialog {\n    box-sizing: border-box;\n    width: 480px;\n    max-width: calc(100vw - 32px);\n    max-height: calc(100vh - 32px);\n    padding: 0;\n    border: 0;\n    border-radius: calc(var(--iob-border-radius) * 2);\n    background: var(--iob-paper);\n    color: var(--iob-text);\n    font-family: var(--iob-font-family);\n    font-size: var(--iob-font-size);\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n}\n/* as the dialogs of MUI: a dark paper gets lighter the higher it lies */\ndialog.dark { background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)); }\ndialog::backdrop { background: rgba(0, 0, 0, 0.5); }\ndialog:focus { outline: none; }\nform { display: flex; flex-direction: column; height: 100%; max-height: inherit; margin: 0; }\nheader { display: flex; align-items: center; gap: 8px; padding: 12px 8px 12px 16px; font-size: 1.15em; font-weight: 500; }\nheader span { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.body { flex: 1; min-height: 0; padding: 0 16px 16px; overflow: auto; display: flex; flex-direction: column; gap: 12px; }\nfooter { display: flex; justify-content: flex-end; gap: 8px; padding: 0 16px 16px; }\nbutton { font: inherit; padding: 6px 16px; border-radius: var(--iob-border-radius); border: 1px solid var(--iob-primary); background: transparent; color: var(--iob-primary); cursor: pointer; }\nbutton.primary { background: var(--iob-primary); color: var(--iob-primary-contrast); }\nbutton.close { border: 0; padding: 2px 8px; font-size: 1.4em; line-height: 1; color: var(--iob-text-secondary); }\nlabel { display: flex; flex-direction: column; gap: 4px; }\nlabel.check { flex-direction: row; align-items: center; gap: 8px; }\ninput, select, textarea { font: inherit; accent-color: var(--iob-primary); }\n.help { color: var(--iob-text-secondary); font-size: 0.85em; }\nh3 { margin: 4px 0 0; font-size: 1em; }\np { margin: 0; }\nhr { width: 100%; border: 0; border-top: 1px solid var(--iob-divider); margin: 0; }\n[hidden] { display: none !important; }\n";
function S(e) {
	if (!e) return null;
	try {
		let t = Function("data", `return (${e});`);
		return (e) => {
			try {
				return !!t(e);
			} catch {
				return !1;
			}
		};
	} catch {
		return null;
	}
}
function ne(e) {
	return typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : "";
}
function re(e) {
	let { input: t, setting: n } = e;
	if (t) return t instanceof HTMLInputElement && t.type === "checkbox" ? t.checked : t instanceof HTMLSelectElement ? n.options?.[t.selectedIndex]?.value : t.value;
}
function ie(e, t, n, r, i) {
	let a = {
		name: t,
		setting: n,
		box: e.createElement("div"),
		hidden: S(n.hidden),
		disabled: S(n.disabled)
	}, o = s(n.label, i);
	switch (n.type) {
		case "header": return a.box = e.createElement("h3"), a.box.textContent = s(n.text, i) || o, a;
		case "staticText": return a.box = e.createElement("p"), a.box.textContent = s(n.text, i) || o, a;
		case "divider": return a.box = e.createElement("hr"), a;
	}
	let c = e.createElement("label");
	a.box = c;
	let l = e.createElement("span");
	if (l.textContent = o || t, n.type === "checkbox") {
		let t = e.createElement("input");
		t.type = "checkbox", t.checked = r === !0 || r === "true", c.className = "check", c.append(t, l), a.input = t;
	} else if (n.type === "select") {
		let t = e.createElement("select");
		for (let r of n.options || []) {
			let n = e.createElement("option");
			n.textContent = s(r.label, i), t.append(n);
		}
		let o = (n.options || []).findIndex((e) => String(e.value) === ne(r));
		t.selectedIndex = o === -1 ? 0 : o, c.append(l, t), a.input = t;
	} else if (n.type === "text" && (n.minRows || 1) > 1) {
		let t = e.createElement("textarea");
		t.rows = n.minRows || 2, t.value = ne(r), c.append(l, t), a.input = t;
	} else {
		let t = e.createElement("input"), i = ne(r);
		switch (n.type) {
			case "number":
			case "slider":
				t.type = n.type === "slider" ? "range" : "number", n.min !== void 0 && (t.min = String(n.min)), n.max !== void 0 && (t.max = String(n.max)), t.step = n.step === void 0 ? "any" : String(n.step);
				break;
			case "password":
				t.type = "password";
				break;
			case "color":
				t.type = !i || /^#[0-9a-f]{6}$/i.test(i) ? "color" : "text";
				break;
			default: t.type = "text";
		}
		if (t.value = i, t.type === "range") {
			let n = e.createElement("output");
			n.textContent = t.value, t.addEventListener("input", () => n.textContent = t.value), l.append(": ", n);
		}
		c.append(l, t), a.input = t;
	}
	if (n.help) {
		let t = e.createElement("span");
		t.className = "help", t.textContent = s(n.help, i), c.append(t);
	}
	return a;
}
function ae(e, t = {}) {
	let n = t.lang || "en", r = document, o = (e) => ee[e][n] || ee[e].en || e, l = r.createElement("div");
	l.setAttribute("data-iob-dialog", "");
	let u = l.attachShadow({ mode: "open" }), f = r.createElement("style");
	f.textContent = te;
	let p = r.createElement("dialog"), m = v(t.theme);
	p.className = m.type === "dark" ? "dark" : "";
	for (let [e, t] of Object.entries(x(m))) p.style.setProperty(e, t);
	e.width && (p.style.width = `${e.width}px`), e.height && (p.style.height = `${e.height}px`);
	let h = r.createElement("form"), g = r.createElement("header"), _ = r.createElement("span");
	_.textContent = s(e.title, n);
	let y = r.createElement("button");
	y.type = "button", y.className = "close", y.title = o("close"), y.setAttribute("aria-label", o("close")), y.textContent = "×", g.append(_, y);
	let b = r.createElement("div");
	return b.className = "body", h.append(g, b), p.append(h), u.append(f, p), new Promise((t) => {
		let f = !1, m = (e) => {
			f || (f = !0, p.open && p.close(), l.remove(), t(e));
		};
		if (y.addEventListener("click", () => m(null)), p.addEventListener("close", () => m(null)), h.addEventListener("submit", (e) => e.preventDefault()), a(e)) {
			let t = {}, i = [];
			for (let [t, a] of Object.entries(e.form.items || {})) {
				let o = e.data?.[t] ?? a.default, s = ie(r, t, a, o, n);
				i.push(s), b.append(s.box);
			}
			let a = () => {
				for (let e of i) e.input && (t[e.name] = re(e));
				return t;
			}, l = () => {
				let e = a();
				for (let t of i) t.box.hidden = t.hidden ? t.hidden(e) : !1, t.input && (t.input.disabled = t.disabled ? t.disabled(e) : !1);
			};
			h.addEventListener("input", l), h.addEventListener("change", l), l();
			let u = i.find((e) => e.input && !e.box.hidden && !e.input.disabled);
			u?.input && (u.input.autofocus = !0);
			let f = r.createElement("footer"), p = r.createElement("button");
			p.type = "button", p.textContent = s(e.cancel, n) || o("cancel"), p.addEventListener("click", () => m(null));
			let g = r.createElement("button");
			g.type = "submit", g.className = "primary", g.textContent = s(e.ok, n) || o("ok"), f.append(p, g), h.append(f), h.addEventListener("submit", () => m(d(c(e.form), a())));
		} else b.append(e.element), p.addEventListener(i, (e) => m(e.detail ?? null));
		r.body.append(l), p.showModal(), u.activeElement && u.activeElement !== y || (p.tabIndex = -1, p.focus());
	});
}
// ../node_modules/@iobroker/web-components/build/element.js
function oe(e) {
	return [...new Set(e.filter((e) => typeof e == "string" && !!e))];
}
var se = [
	"socket",
	"dialogs",
	"theme",
	"editMode",
	"settings",
	"value"
], ce = class extends HTMLElement {
	states = {};
	objects = {};
	#e = null;
	#t = {};
	#n = v("light");
	#r = !1;
	#i = null;
	#a = void 0;
	#o = null;
	#s = !1;
	#c = (e, t) => {
		this.#o?.states.includes(e) && (this.states[e] = t || null, this.#_());
	};
	#l = (e, t) => {
		this.#o?.objects.includes(e) && (this.objects[e] = t || null, this.#d());
	};
	get socket() {
		return this.#e;
	}
	set socket(e) {
		this.#e = e || null, this.#d();
	}
	get settings() {
		return this.#t;
	}
	set settings(e) {
		this.#t = e || {}, this.#d();
	}
	get theme() {
		return this.#n;
	}
	set theme(e) {
		let t = v(e);
		y(t, this.#n) || (this.#n = t, this.#u(), this.#_());
	}
	get editMode() {
		return this.#r;
	}
	set editMode(e) {
		let t = !!e;
		t !== this.#r && (this.#r = t, this.#_());
	}
	get dialogs() {
		return this.#i;
	}
	set dialogs(e) {
		this.#i = e || null;
	}
	get value() {
		return this.#a;
	}
	set value(e) {
		e !== this.#a && (this.#a = e, this.#_());
	}
	connectedCallback() {
		for (let e of se) if (Object.prototype.hasOwnProperty.call(this, e)) {
			let t = this[e];
			delete this[e], this[e] = t;
		}
		this.#u(), this.#d();
	}
	disconnectedCallback() {
		this.#g();
	}
	getStateIds(e) {
		return [];
	}
	getObjectIds(e) {
		return [];
	}
	get systemLang() {
		return this.#e?.systemLang || "en";
	}
	text(e) {
		return s(e, this.systemLang);
	}
	setState(e, t) {
		return this.#e && !this.#r ? this.#e.setState(e, t) : Promise.resolve();
	}
	changeValue(e) {
		return this.#r || this.emit("iob-change", e) ? !1 : (this.value = e, !0);
	}
	emit(e, t) {
		return this.dispatchEvent(new CustomEvent(e, {
			detail: t,
			bubbles: !0,
			composed: !0,
			cancelable: !0
		}));
	}
	async openDialog(e) {
		if (this.#r) return null;
		let t = this.#i ? await this.#i.open(e) : await ae(e, {
			lang: this.systemLang,
			theme: this.#n
		});
		return a(e) ? t && typeof t == "object" ? d(c(e.form), t) : null : t ?? null;
	}
	#u() {
		for (let [e, t] of Object.entries(x(this.#n))) this.style.setProperty(e, t);
	}
	#d() {
		if (!this.isConnected) return;
		let e = this.#e, t = e ? oe(this.getStateIds(this.#t)) : [], n = e ? oe(this.getObjectIds(this.#t)) : [];
		this.#o && this.#o.socket !== e && this.#g();
		let r = this.#o?.states || [], i = this.#o?.objects || [], a = r.filter((e) => !t.includes(e)), o = i.filter((e) => !n.includes(e)), s = t.filter((e) => !r.includes(e)), c = n.filter((e) => !i.includes(e));
		e && a.length && e.unsubscribeState(a, this.#c), e && o.length && this.#h(e, o);
		for (let e of a) delete this.states[e];
		for (let e of [...a, ...o]) !t.includes(e) && !n.includes(e) && delete this.objects[e];
		this.#o = e && (t.length || n.length) ? {
			socket: e,
			states: t,
			objects: n
		} : null, e && s.length && this.#p(e, s), e && c.length && this.#m(e, c), this.#_();
	}
	#f(e, t, n) {
		return this.#o?.socket === e && this.#o[t].includes(n);
	}
	#p(e, t) {
		e.subscribeState(t, this.#c).catch((e) => console.warn(`<${this.localName}>: cannot subscribe ${t.join(", ")}: ${e}`));
		for (let n of t) e.getState(n).then((t) => {
			this.#f(e, "states", n) && this.states[n] === void 0 && (this.states[n] = t || null, this.#_());
		}).catch(() => {}), e.getObject(n).then((t) => {
			this.#f(e, "states", n) && !this.#f(e, "objects", n) && (this.objects[n] = t || null, this.#_());
		}).catch(() => {});
	}
	#m(e, t) {
		e.subscribeObject(t, this.#l).catch((e) => console.warn(`<${this.localName}>: cannot subscribe the objects ${t.join(", ")}: ${e}`));
		for (let n of t) e.getObject(n).then((t) => {
			this.#f(e, "objects", n) && (this.objects[n] = t || null, this.#d());
		}).catch(() => {});
	}
	#h(e, t) {
		e.unsubscribeObject(t, this.#l).catch(() => {});
	}
	#g() {
		if (this.#o) {
			let { socket: e, states: t, objects: n } = this.#o;
			t.length && e.unsubscribeState(t, this.#c), n.length && this.#h(e, n), this.#o = null;
		}
		this.states = {}, this.objects = {};
	}
	#_() {
		this.#s || (this.#s = !0, queueMicrotask(() => {
			this.#s = !1, this.isConnected && this.render();
		}));
	}
};
function le(e, t) {
	let n = typeof e == "string" ? e : e.tag;
	customElements.get(n) || customElements.define(n, t);
}
// src/WakewordView.tsx
var ue = "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z", de = {
	de: {
		disabled: "Mikrofon aus",
		initializing: "Initialisierung…",
		listening: "Warte auf Aktivierungswort",
		activated: "Aktiviert",
		recording: "Aufnahme läuft",
		processing: "Verarbeitung…",
		result: "Ergebnis",
		error: "Fehler",
		on: "Mikrofon deaktivieren",
		off: "Mikrofon aktivieren",
		ptt: "Sprechen",
		stop: "Aufnahme beenden",
		editor: "Mikrofon im Editor deaktiviert"
	},
	en: {
		disabled: "Microphone off",
		initializing: "Initializing…",
		listening: "Waiting for wake word",
		activated: "Activated",
		recording: "Recording",
		processing: "Processing…",
		result: "Result",
		error: "Error",
		on: "Disable microphone",
		off: "Enable microphone",
		ptt: "Speak",
		stop: "Finish recording",
		editor: "Microphone disabled in editor"
	}
};
function fe(e) {
	let { snapshot: r } = e, i = de[e.language], a = r.enabled;
	return /* @__PURE__ */ n("div", {
		className: `wakeword ${e.compact ? "compact" : ""}`,
		style: {
			"--wake-accent": e.accentColor,
			fontSize: e.fontSize
		},
		children: [
			/* @__PURE__ */ n("div", {
				className: "top",
				children: [/* @__PURE__ */ t("button", {
					type: "button",
					className: `mic ${a ? "on" : ""}`,
					"aria-pressed": a,
					"aria-label": a ? i.on : i.off,
					title: a ? i.on : i.off,
					disabled: e.editMode || r.phase === "initializing",
					onClick: e.onToggle,
					children: /* @__PURE__ */ t("svg", {
						viewBox: "0 0 24 24",
						"aria-hidden": "true",
						children: /* @__PURE__ */ t("path", { d: ue })
					})
				}), /* @__PURE__ */ n("div", {
					className: "status",
					children: [/* @__PURE__ */ t("strong", { children: e.editMode ? i.editor : i[r.phase] }), r.wakeword && !e.compact ? /* @__PURE__ */ t("small", { children: r.wakeword }) : null]
				})]
			}),
			/* @__PURE__ */ t("div", {
				className: "meter",
				role: "meter",
				"aria-label": "Microphone level",
				"aria-valuenow": Math.round(r.level * 100),
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				children: /* @__PURE__ */ t("span", { style: { width: `${Math.round(r.level * 100)}%` } })
			}),
			e.showText && r.text && !e.compact ? /* @__PURE__ */ t("p", {
				className: "text",
				children: r.text
			}) : null,
			r.error && !e.compact ? /* @__PURE__ */ t("p", {
				className: "error",
				role: "alert",
				children: r.error
			}) : null,
			(e.mode === "ptt" || e.mode === "combined") && !e.editMode ? /* @__PURE__ */ n("div", {
				className: "actions",
				children: [/* @__PURE__ */ t("button", {
					type: "button",
					onClick: e.onPtt,
					disabled: r.phase === "initializing" || r.phase === "processing" || r.phase === "recording",
					children: i.ptt
				}), r.phase === "recording" ? /* @__PURE__ */ t("button", {
					type: "button",
					onClick: e.onStop,
					children: i.stop
				}) : null]
			}) : null
		]
	});
}
// src/audio.ts
var pe = 16e3;
function me(e) {
	let t = new Uint8Array(e.length * 2), n = new DataView(t.buffer);
	for (let t = 0; t < e.length; t++) {
		let r = Math.max(-1, Math.min(1, e[t]));
		n.setInt16(t * 2, Math.round(r < 0 ? r * 32768 : r * 32767), !0);
	}
	let r = "";
	for (let e = 0; e < t.length; e += 32768) r += String.fromCharCode(...t.subarray(e, e + 32768));
	return btoa(r);
}
function he(e) {
	if (!e.length) return 0;
	let t = 0;
	for (let n of e) t += n * n;
	return Math.sqrt(t / e.length);
}
var ge = class {
	maxSamples;
	chunks = [];
	count = 0;
	constructor(e) {
		this.maxSamples = e;
	}
	push(e) {
		for (this.chunks.push(e.slice()), this.count += e.length; this.count > this.maxSamples && this.chunks.length;) {
			let e = this.count - this.maxSamples, t = this.chunks[0];
			t.length <= e ? (this.chunks.shift(), this.count -= t.length) : (this.chunks[0] = t.slice(e), this.count -= e);
		}
	}
	snapshot() {
		let e = new Float32Array(this.count), t = 0;
		for (let n of this.chunks) e.set(n, t), t += n.length;
		return e;
	}
	clear() {
		this.chunks = [], this.count = 0;
	}
}, _e = class {
	options;
	elapsed = 0;
	speechMs = 0;
	silence = 0;
	constructor(e) {
		this.options = e;
	}
	push(e) {
		let t = e.length / pe * 1e3;
		return this.elapsed += t, he(e) >= this.options.threshold ? (this.speechMs += t, this.silence = 0) : this.speechMs >= this.options.minSpeechMs && (this.silence += t), this.elapsed >= this.options.maxRecordMs || this.speechMs >= this.options.minSpeechMs && this.silence >= this.options.silenceMs ? "done" : this.speechMs < this.options.minSpeechMs && this.elapsed >= this.options.noSpeechMs ? "no-speech" : "continue";
	}
}, ve = class {
	call;
	onEvent;
	onFailure;
	id = "";
	seq = 0;
	queue = [];
	queuedSamples = 0;
	timer;
	busy = !1;
	stopping = !1;
	stopSent = !1;
	finished = !1;
	lastCall = 0;
	constructor(e, t, n) {
		this.call = e, this.onEvent = t, this.onFailure = n;
	}
	get sessionId() {
		return this.id;
	}
	async start() {
		let e = await this.request({ action: "start" });
		if (!e.id || e.sampleRate !== 16e3) throw Error("Invalid Parakeet live start response");
		this.id = e.id, this.timer = window.setInterval(() => void this.tick(), 200);
	}
	push(e) {
		!this.id || this.stopping || this.finished || (this.queue.push(e.slice()), this.queuedSamples += e.length, this.queuedSamples > 128e3 && this.fail(/* @__PURE__ */ Error("Audio connection is too slow")));
	}
	stop() {
		this.stopping = !0, this.tick();
	}
	async cancel() {
		this.finished = !0, this.timer && window.clearInterval(this.timer), this.queue = [], this.id && await this.request({
			action: "cancel",
			id: this.id
		}).catch(() => {});
	}
	async request(e) {
		let t;
		try {
			let n = await Promise.race([this.call(e), new Promise((e, n) => {
				t = setTimeout(() => n(/* @__PURE__ */ Error("Parakeet timeout")), 15e3);
			})]);
			if (!n || n.error) throw Error(n?.error || "Empty Parakeet response");
			return n;
		} finally {
			t && clearTimeout(t);
		}
	}
	async tick() {
		if (!this.id || this.busy || this.finished) return;
		let e;
		if (this.queue.length) {
			let t = new Float32Array(this.queuedSamples), n = 0;
			for (let e of this.queue) t.set(e, n), n += e.length;
			this.queue = [], this.queuedSamples = 0, e = {
				action: "audio",
				id: this.id,
				seq: ++this.seq,
				pcm: me(t)
			};
		} else this.stopping && !this.stopSent ? (this.stopSent = !0, e = {
			action: "stop",
			id: this.id,
			seq: ++this.seq
		}) : Date.now() - this.lastCall >= 400 && (e = {
			action: "poll",
			id: this.id
		});
		if (e) {
			this.busy = !0;
			try {
				let t = await this.request(e);
				this.lastCall = Date.now();
				for (let e of t.events || []) if (this.onEvent(e), e.type === "done" && (this.finished = !0, this.timer && clearInterval(this.timer)), e.type === "error") throw Error(e.message || "Parakeet error");
			} catch (e) {
				this.fail(e);
			} finally {
				this.busy = !1;
			}
		}
	}
	fail(e) {
		this.finished || (this.finished = !0, this.timer && clearInterval(this.timer), this.onFailure(e), this.id && this.request({
			action: "cancel",
			id: this.id
		}).catch(() => {}));
	}
}, ye = Object.defineProperty, be = Object.getOwnPropertyDescriptor, xe = Object.getOwnPropertyNames, Se = Object.prototype.hasOwnProperty, Ce = ((e) => typeof r < "u" ? r : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof r < "u" ? r : e)[t] }) : e)(function(e) {
	if (typeof r < "u") return r.apply(this, arguments);
	throw Error("Dynamic require of \"" + e + "\" is not supported");
}), C = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, we = (e, t) => {
	for (var n in t) ye(e, n, {
		get: t[n],
		enumerable: !0
	});
}, Te = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of xe(t)) !Se.call(e, i) && i !== n && ye(e, i, {
		get: () => t[i],
		enumerable: !(r = be(t, i)) || r.enumerable
	});
	return e;
}, Ee = (e) => Te(ye({}, "__esModule", { value: !0 }), e), w, T, De, Oe, ke, Ae, je, Me = C(() => {
	w = /* @__PURE__ */ new Map(), T = [], De = /* @__PURE__ */ new WeakMap(), Oe = (e, t, n) => {
		if (t && typeof t.init == "function" && typeof t.createInferenceSessionHandler == "function") {
			let r = w.get(e);
			if (r === void 0) w.set(e, {
				backend: t,
				priority: n
			});
			else {
				if (r.priority > n) return;
				if (r.priority === n && r.backend !== t) throw Error(`cannot register backend "${e}" using priority ${n}`);
			}
			if (n >= 0) {
				let t = T.indexOf(e);
				t !== -1 && T.splice(t, 1);
				for (let t = 0; t < T.length; t++) if (w.get(T[t]).priority <= n) {
					T.splice(t, 0, e);
					return;
				}
				T.push(e);
			}
		} else throw TypeError("not a valid backend");
	}, ke = async (e) => {
		let t = w.get(e);
		if (!t) return "backend not found.";
		if (t.initialized) return t.backend;
		if (t.aborted) return t.error;
		{
			let n = !!t.initPromise;
			try {
				if (!n) {
					let n = t.backend, r = De.get(n);
					t.initPromise = r ? r.then(async () => n.init(e), async () => n.init(e)) : n.init(e), De.set(n, t.initPromise);
				}
				return await t.initPromise, t.initialized = !0, t.backend;
			} catch (e) {
				return n || (t.error = `${e}`, t.aborted = !0), t.error;
			} finally {
				delete t.initPromise;
			}
		}
	}, Ae = async (e) => {
		let t = e.executionProviders || [], n = t.map((e) => typeof e == "string" ? e : e.name), r = n.length === 0 ? T : n, i, a = [], o = /* @__PURE__ */ new Set();
		for (let e of r) {
			let t = await ke(e);
			typeof t == "string" ? a.push({
				name: e,
				err: t
			}) : (i ||= t, i === t && o.add(e));
		}
		if (!i) throw Error(`no available backend found. ERR: ${a.map((e) => `[${e.name}] ${e.err}`).join(", ")}`);
		for (let { name: e, err: t } of a) n.includes(e) && console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);
		let s = t.filter((e) => o.has(typeof e == "string" ? e : e.name));
		return [i, new Proxy(e, { get: (e, t) => t === "executionProviders" ? s : Reflect.get(e, t) })];
	}, je = async () => {
		let e = [];
		for (let t of T) {
			if (typeof w.get(t).backend.createLoraAdapterHandler != "function") continue;
			let n = await ke(t);
			if (typeof n != "string") return n;
			e.push({
				name: t,
				err: n
			});
		}
		let t = e.length === 0 ? "" : ` ERR: ${e.map((e) => `[${e.name}] ${e.err}`).join(", ")}`;
		throw Error(`no available backend supports LoRA adapters.${t}`);
	};
}), Ne = C(() => {
	Me();
}), Pe, Fe = C(() => {
	Pe = "1.31.1";
}), Ie, E, Le = C(() => {
	Fe(), Ie = "warning", E = {
		wasm: {},
		webgl: {},
		webgpu: {},
		versions: { common: Pe },
		set logLevel(e) {
			if (e !== void 0) {
				if (typeof e != "string" || [
					"verbose",
					"info",
					"warning",
					"error",
					"fatal"
				].indexOf(e) === -1) throw Error(`Unsupported logging level: ${e}`);
				Ie = e;
			}
		},
		get logLevel() {
			return Ie;
		}
	}, Object.defineProperty(E, "logLevel", { enumerable: !0 });
}), D, Re = C(() => {
	Le(), D = E;
}), ze, Be, O, k, A, j, Ve = C(() => {
	Le(), ze = (e, t) => {
		(typeof E.trace > "u" ? !E.wasm.trace : !E.trace) || console.timeStamp(`${e}::ORT::${t}`);
	}, Be = (e, t) => {
		let n = (/* @__PURE__ */ Error()).stack?.split(/\r\n|\r|\n/g) || [], r = !1;
		for (let i = 0; i < n.length; i++) {
			if (r && !n[i].includes("TRACE_FUNC")) {
				let r = `FUNC_${e}::${n[i].trim().split(" ")[1]}`;
				t && (r += `::${t}`), ze("CPU", r);
				return;
			}
			n[i].includes("TRACE_FUNC") && (r = !0);
		}
	}, O = (e) => {
		(typeof E.trace > "u" ? !E.wasm.trace : !E.trace) || Be("BEGIN", e);
	}, k = (e) => {
		(typeof E.trace > "u" ? !E.wasm.trace : !E.trace) || Be("END", e);
	}, A = (e) => {
		(typeof E.trace > "u" ? !E.wasm.trace : !E.trace) || console.time(`ORT::${e}`);
	}, j = (e) => {
		(typeof E.trace > "u" ? !E.wasm.trace : !E.trace) || console.timeEnd(`ORT::${e}`);
	};
}), He, Ue = C(() => {
	Me(), Ve(), He = class e {
		constructor(e, t) {
			this.backend = e, this.handler = t;
		}
		static async create(t) {
			if (O(), typeof t != "string" && !(t instanceof Uint8Array)) throw TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
			let n = await je(), r = await n.createLoraAdapterHandler(t);
			return k(), new e(n, r);
		}
		async release() {
			return this.handler.dispose();
		}
	};
}), We, Ge, Ke = C(() => {
	We = (e, t) => {
		let n = typeof document < "u" ? document.createElement("canvas") : new OffscreenCanvas(1, 1);
		n.width = e.dims[3], n.height = e.dims[2];
		let r = n.getContext("2d");
		if (r != null) {
			let i, a;
			t?.tensorLayout !== void 0 && t.tensorLayout === "NHWC" ? (i = e.dims[2], a = e.dims[3]) : (i = e.dims[3], a = e.dims[2]);
			let o = t?.format === void 0 ? "RGB" : t.format, s = t?.norm, c, l;
			s === void 0 || s.mean === void 0 ? c = [
				255,
				255,
				255,
				255
			] : typeof s.mean == "number" ? c = [
				s.mean,
				s.mean,
				s.mean,
				s.mean
			] : (c = [
				s.mean[0],
				s.mean[1],
				s.mean[2],
				0
			], s.mean[3] !== void 0 && (c[3] = s.mean[3])), s === void 0 || s.bias === void 0 ? l = [
				0,
				0,
				0,
				0
			] : typeof s.bias == "number" ? l = [
				s.bias,
				s.bias,
				s.bias,
				s.bias
			] : (l = [
				s.bias[0],
				s.bias[1],
				s.bias[2],
				0
			], s.bias[3] !== void 0 && (l[3] = s.bias[3]));
			let u = a * i, d = 0, f = u, p = u * 2, m = -1;
			o === "RGBA" ? (d = 0, f = u, p = u * 2, m = u * 3) : o === "RGB" ? (d = 0, f = u, p = u * 2) : o === "RBG" && (d = 0, p = u, f = u * 2);
			for (let t = 0; t < a; t++) for (let n = 0; n < i; n++) {
				let i = (e.data[d++] - l[0]) * c[0], a = (e.data[f++] - l[1]) * c[1], o = (e.data[p++] - l[2]) * c[2], s = m === -1 ? 255 : (e.data[m++] - l[3]) * c[3];
				r.fillStyle = "rgba(" + i + "," + a + "," + o + "," + s + ")", r.fillRect(n, t, 1, 1);
			}
			if ("toDataURL" in n) return n.toDataURL();
			throw Error("toDataURL is not supported");
		}
		throw Error("Can not access image data");
	}, Ge = (e, t) => {
		let n = typeof document < "u" ? document.createElement("canvas").getContext("2d") : new OffscreenCanvas(1, 1).getContext("2d"), r;
		if (n != null) {
			let i, a, o;
			t?.tensorLayout !== void 0 && t.tensorLayout === "NHWC" ? (i = e.dims[2], a = e.dims[1], o = e.dims[3]) : (i = e.dims[3], a = e.dims[2], o = e.dims[1]);
			let s = t !== void 0 && t.format !== void 0 ? t.format : "RGB", c = t?.norm, l, u;
			c === void 0 || c.mean === void 0 ? l = [
				255,
				255,
				255,
				255
			] : typeof c.mean == "number" ? l = [
				c.mean,
				c.mean,
				c.mean,
				c.mean
			] : (l = [
				c.mean[0],
				c.mean[1],
				c.mean[2],
				255
			], c.mean[3] !== void 0 && (l[3] = c.mean[3])), c === void 0 || c.bias === void 0 ? u = [
				0,
				0,
				0,
				0
			] : typeof c.bias == "number" ? u = [
				c.bias,
				c.bias,
				c.bias,
				c.bias
			] : (u = [
				c.bias[0],
				c.bias[1],
				c.bias[2],
				0
			], c.bias[3] !== void 0 && (u[3] = c.bias[3]));
			let d = a * i;
			if (t !== void 0 && (t.format !== void 0 && o === 4 && t.format !== "RGBA" || o === 3 && t.format !== "RGB" && t.format !== "BGR")) throw Error("Tensor format doesn't match input tensor dims");
			let f = 0, p = 1, m = 2, h = 3, g = 0, _ = d, v = d * 2, y = -1;
			s === "RGBA" ? (g = 0, _ = d, v = d * 2, y = d * 3) : s === "RGB" ? (g = 0, _ = d, v = d * 2) : s === "RBG" && (g = 0, v = d, _ = d * 2), r = n.createImageData(i, a);
			for (let t = 0; t < a * i; f += 4, p += 4, m += 4, h += 4, t++) r.data[f] = (e.data[g++] - u[0]) * l[0], r.data[p] = (e.data[_++] - u[1]) * l[1], r.data[m] = (e.data[v++] - u[2]) * l[2], r.data[h] = y === -1 ? 255 : (e.data[y++] - u[3]) * l[3];
		} else throw Error("Can not access image data");
		return r;
	};
}), qe, Je, Ye, Xe, Ze, Qe, $e = C(() => {
	st(), qe = (e, t) => {
		if (e === void 0) throw Error("Image buffer must be defined");
		if (t.height === void 0 || t.width === void 0) throw Error("Image height and width must be defined");
		if (t.tensorLayout === "NHWC") throw Error("NHWC Tensor layout is not supported yet");
		let { height: n, width: r } = t, i = t.norm ?? {
			mean: 255,
			bias: 0
		}, a, o;
		a = typeof i.mean == "number" ? [
			i.mean,
			i.mean,
			i.mean,
			i.mean
		] : [
			i.mean[0],
			i.mean[1],
			i.mean[2],
			i.mean[3] ?? 255
		], o = typeof i.bias == "number" ? [
			i.bias,
			i.bias,
			i.bias,
			i.bias
		] : [
			i.bias[0],
			i.bias[1],
			i.bias[2],
			i.bias[3] ?? 0
		];
		let s = t.format === void 0 ? "RGBA" : t.format, c = t.tensorFormat !== void 0 && t.tensorFormat !== void 0 ? t.tensorFormat : "RGB", l = n * r, u = c === "RGBA" ? new Float32Array(l * 4) : new Float32Array(l * 3), d = 4, f = 0, p = 1, m = 2, h = 3, g = 0, _ = l, v = l * 2, y = -1;
		s === "RGB" && (d = 3, f = 0, p = 1, m = 2, h = -1), c === "RGBA" ? y = l * 3 : c === "RBG" ? (g = 0, v = l, _ = l * 2) : c === "BGR" && (v = 0, _ = l, g = l * 2);
		for (let t = 0; t < l; t++, f += d, m += d, p += d, h += d) u[g++] = (e[f] + o[0]) / a[0], u[_++] = (e[p] + o[1]) / a[1], u[v++] = (e[m] + o[2]) / a[2], y !== -1 && h !== -1 && (u[y++] = (e[h] + o[3]) / a[3]);
		return c === "RGBA" ? new N("float32", u, [
			1,
			4,
			n,
			r
		]) : new N("float32", u, [
			1,
			3,
			n,
			r
		]);
	}, Je = async (e, t) => {
		let n = typeof HTMLImageElement < "u" && e instanceof HTMLImageElement, r = typeof ImageData < "u" && e instanceof ImageData, i = typeof ImageBitmap < "u" && e instanceof ImageBitmap, a = typeof e == "string", o, s = t ?? {}, c = () => {
			if (typeof document < "u") return document.createElement("canvas");
			if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(1, 1);
			throw Error("Canvas is not supported");
		}, l = (e) => typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || e instanceof OffscreenCanvas ? e.getContext("2d") : null;
		if (n) {
			let n = c();
			n.width = e.width, n.height = e.height;
			let r = l(n);
			if (r != null) {
				let n = e.height, i = e.width;
				if (t !== void 0 && t.resizedHeight !== void 0 && t.resizedWidth !== void 0 && (n = t.resizedHeight, i = t.resizedWidth), t !== void 0) {
					if (s = t, t.tensorFormat !== void 0) throw Error("Image input config format must be RGBA for HTMLImageElement");
					s.tensorFormat = "RGBA", s.height = n, s.width = i;
				} else s.tensorFormat = "RGBA", s.height = n, s.width = i;
				r.drawImage(e, 0, 0), o = r.getImageData(0, 0, i, n).data;
			} else throw Error("Can not access image data");
		} else if (r) {
			let n, r;
			if (t !== void 0 && t.resizedWidth !== void 0 && t.resizedHeight !== void 0 ? (n = t.resizedHeight, r = t.resizedWidth) : (n = e.height, r = e.width), t !== void 0 && (s = t), s.format = "RGBA", s.height = n, s.width = r, t !== void 0) {
				let t = c();
				t.width = r, t.height = n;
				let i = l(t);
				if (i != null) i.putImageData(e, 0, 0), o = i.getImageData(0, 0, r, n).data;
				else throw Error("Can not access image data");
			} else o = e.data;
		} else if (i) {
			if (t === void 0) throw Error("Please provide image config with format for Imagebitmap");
			let n = c();
			n.width = e.width, n.height = e.height;
			let r = l(n);
			if (r != null) {
				let t = e.height, n = e.width;
				return r.drawImage(e, 0, 0, n, t), o = r.getImageData(0, 0, n, t).data, s.height = t, s.width = n, qe(o, s);
			}
			throw Error("Can not access image data");
		} else {
			if (a) return new Promise((t, n) => {
				let r = c(), i = l(r);
				if (!e || !i) return n();
				let a = new Image();
				a.crossOrigin = "Anonymous", a.src = e, a.onload = () => {
					r.width = a.width, r.height = a.height, i.drawImage(a, 0, 0, r.width, r.height);
					let e = i.getImageData(0, 0, r.width, r.height);
					s.height = r.height, s.width = r.width, t(qe(e.data, s));
				};
			});
			throw Error("Input data provided is not supported - aborted tensor creation");
		}
		if (o !== void 0) return qe(o, s);
		throw Error("Input data provided is not supported - aborted tensor creation");
	}, Ye = (e, t) => {
		let { width: n, height: r, download: i, dispose: a } = t;
		return new N({
			location: "texture",
			type: "float32",
			texture: e,
			dims: [
				1,
				r,
				n,
				4
			],
			download: i,
			dispose: a
		});
	}, Xe = (e, t) => {
		let { dataType: n, dims: r, download: i, dispose: a } = t;
		return new N({
			location: "gpu-buffer",
			type: n ?? "float32",
			gpuBuffer: e,
			dims: r,
			download: i,
			dispose: a
		});
	}, Ze = (e, t) => {
		let { dataType: n, dims: r, download: i, dispose: a } = t;
		return new N({
			location: "ml-tensor",
			type: n ?? "float32",
			mlTensor: e,
			dims: r,
			download: i,
			dispose: a
		});
	}, Qe = (e, t, n) => new N({
		location: "cpu-pinned",
		type: e,
		data: t,
		dims: n ?? [t.length]
	});
}), M, et, tt, nt, rt = C(() => {
	M = /* @__PURE__ */ new Map([
		["float32", Float32Array],
		["uint8", Uint8Array],
		["int8", Int8Array],
		["uint16", Uint16Array],
		["int16", Int16Array],
		["int32", Int32Array],
		["bool", Uint8Array],
		["float64", Float64Array],
		["uint32", Uint32Array],
		["int4", Uint8Array],
		["uint4", Uint8Array]
	]), et = /* @__PURE__ */ new Map([
		[Float32Array, "float32"],
		[Uint8Array, "uint8"],
		[Int8Array, "int8"],
		[Uint16Array, "uint16"],
		[Int16Array, "int16"],
		[Int32Array, "int32"],
		[Float64Array, "float64"],
		[Uint32Array, "uint32"]
	]), tt = !1, nt = () => {
		if (!tt) {
			tt = !0;
			let e = typeof BigInt64Array < "u" && BigInt64Array.from, t = typeof BigUint64Array < "u" && BigUint64Array.from, n = globalThis.Float16Array, r = typeof n < "u" && n.from;
			e && (M.set("int64", BigInt64Array), et.set(BigInt64Array, "int64")), t && (M.set("uint64", BigUint64Array), et.set(BigUint64Array, "uint64")), r ? (M.set("float16", n), et.set(n, "float16")) : M.set("float16", Uint16Array);
		}
	};
}), it, at, ot = C(() => {
	st(), it = (e) => {
		let t = 1;
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r != "number" || !Number.isSafeInteger(r)) throw TypeError(`dims[${n}] must be an integer, got: ${r}`);
			if (r < 0) throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);
			t *= r;
		}
		return t;
	}, at = (e, t) => {
		switch (e.location) {
			case "cpu": return new N(e.type, e.data, t);
			case "cpu-pinned": return new N({
				location: "cpu-pinned",
				data: e.data,
				type: e.type,
				dims: t
			});
			case "texture": return new N({
				location: "texture",
				texture: e.texture,
				type: e.type,
				dims: t
			});
			case "gpu-buffer": return new N({
				location: "gpu-buffer",
				gpuBuffer: e.gpuBuffer,
				type: e.type,
				dims: t
			});
			case "ml-tensor": return new N({
				location: "ml-tensor",
				mlTensor: e.mlTensor,
				type: e.type,
				dims: t
			});
			default: throw Error(`tensorReshape: tensor location ${e.location} is not supported`);
		}
	};
}), N, st = C(() => {
	Ke(), $e(), rt(), ot(), N = class {
		constructor(e, t, n) {
			nt();
			let r, i;
			if (typeof e == "object" && "location" in e) switch (this.dataLocation = e.location, r = e.type, i = e.dims, e.location) {
				case "cpu-pinned": {
					let t = M.get(r);
					if (!t) throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);
					if (!(e.data instanceof t)) throw TypeError(`buffer should be of type ${t.name}`);
					this.cpuData = e.data;
					break;
				}
				case "texture":
					if (r !== "float32") throw TypeError(`unsupported type "${r}" to create tensor from texture`);
					this.gpuTextureData = e.texture, this.downloader = e.download, this.disposer = e.dispose;
					break;
				case "gpu-buffer":
					if (r !== "float32" && r !== "float16" && r !== "int32" && r !== "int64" && r !== "uint32" && r !== "uint8" && r !== "bool" && r !== "uint4" && r !== "int4") throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);
					this.gpuBufferData = e.gpuBuffer, this.downloader = e.download, this.disposer = e.dispose;
					break;
				case "ml-tensor":
					if (r !== "float32" && r !== "float16" && r !== "int32" && r !== "int64" && r !== "uint32" && r !== "uint64" && r !== "int8" && r !== "uint8" && r !== "bool" && r !== "uint4" && r !== "int4") throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);
					this.mlTensorData = e.mlTensor, this.downloader = e.download, this.disposer = e.dispose;
					break;
				default: throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`);
			}
			else {
				let a, o;
				if (typeof e == "string") {
					if (r = e, o = n, e === "string") {
						if (!Array.isArray(t)) throw TypeError("A string tensor's data must be a string array.");
						a = t;
					} else {
						let n = M.get(e);
						if (n === void 0) throw TypeError(`Unsupported tensor type: ${e}.`);
						if (Array.isArray(t)) {
							if (e === "float16" && n === Uint16Array || e === "uint4" || e === "int4") throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);
							a = e === "uint64" || e === "int64" ? n.from(t, BigInt) : n.from(t);
						} else if (t instanceof n) a = t;
						else if (t instanceof Uint8ClampedArray) {
							if (e === "uint8") a = Uint8Array.from(t);
							else throw TypeError("A Uint8ClampedArray tensor's data must be type of uint8");
						} else if (e === "float16" && t instanceof Uint16Array && n !== Uint16Array) a = new globalThis.Float16Array(t.buffer, t.byteOffset, t.length);
						else throw TypeError(`A ${r} tensor's data must be type of ${n}`);
					}
				} else if (o = t, Array.isArray(e)) {
					if (e.length === 0) throw TypeError("Tensor type cannot be inferred from an empty array.");
					let t = typeof e[0];
					if (t === "string") r = "string", a = e;
					else if (t === "boolean") r = "bool", a = Uint8Array.from(e);
					else throw TypeError(`Invalid element type of data array: ${t}.`);
				} else if (e instanceof Uint8ClampedArray) r = "uint8", a = Uint8Array.from(e);
				else {
					let t = et.get(e.constructor);
					if (t === void 0) throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);
					r = t, a = e;
				}
				if (o === void 0) o = [a.length];
				else if (!Array.isArray(o)) throw TypeError("A tensor's dims must be a number array");
				i = o, this.cpuData = a, this.dataLocation = "cpu";
			}
			let a = it(i);
			if (this.cpuData && a !== this.cpuData.length && (r !== "uint4" && r !== "int4" || Math.ceil(a / 2) !== this.cpuData.length)) throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);
			this.type = r, this.dims = i, this.size = a;
		}
		static async fromImage(e, t) {
			return Je(e, t);
		}
		static fromTexture(e, t) {
			return Ye(e, t);
		}
		static fromGpuBuffer(e, t) {
			return Xe(e, t);
		}
		static fromMLTensor(e, t) {
			return Ze(e, t);
		}
		static fromPinnedBuffer(e, t, n) {
			return Qe(e, t, n);
		}
		toDataURL(e) {
			return We(this, e);
		}
		toImageData(e) {
			return Ge(this, e);
		}
		get data() {
			if (this.ensureValid(), !this.cpuData) throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");
			return this.cpuData;
		}
		get location() {
			return this.dataLocation;
		}
		get texture() {
			if (this.ensureValid(), !this.gpuTextureData) throw Error("The data is not stored as a WebGL texture.");
			return this.gpuTextureData;
		}
		get gpuBuffer() {
			if (this.ensureValid(), !this.gpuBufferData) throw Error("The data is not stored as a WebGPU buffer.");
			return this.gpuBufferData;
		}
		get mlTensor() {
			if (this.ensureValid(), !this.mlTensorData) throw Error("The data is not stored as a WebNN MLTensor.");
			return this.mlTensorData;
		}
		async getData(e) {
			switch (this.ensureValid(), this.dataLocation) {
				case "cpu":
				case "cpu-pinned": return this.data;
				case "texture":
				case "gpu-buffer":
				case "ml-tensor":
					if (!this.downloader) throw Error("The current tensor is not created with a specified data downloader.");
					if (this.isDownloading) throw Error("The current tensor is being downloaded.");
					try {
						this.isDownloading = !0;
						let t = await this.downloader();
						return this.downloader = void 0, this.dataLocation = "cpu", this.cpuData = t, e && this.disposer && (this.disposer(), this.disposer = void 0), t;
					} finally {
						this.isDownloading = !1;
					}
				default: throw Error(`cannot get data from location: ${this.dataLocation}`);
			}
		}
		dispose() {
			if (this.isDownloading) throw Error("The current tensor is being downloaded.");
			this.disposer &&= (this.disposer(), void 0), this.cpuData = void 0, this.gpuTextureData = void 0, this.gpuBufferData = void 0, this.mlTensorData = void 0, this.downloader = void 0, this.isDownloading = void 0, this.dataLocation = "none";
		}
		ensureValid() {
			if (this.dataLocation === "none") throw Error("The tensor is disposed.");
		}
		reshape(e) {
			if (this.ensureValid(), this.downloader || this.disposer) throw Error("Cannot reshape a tensor that owns GPU resource.");
			return at(this, e);
		}
	};
}), P, ct = C(() => {
	st(), P = N;
}), lt, ut = C(() => {
	Me(), Ue(), ct(), Ve(), lt = class e {
		constructor(e, t) {
			this.handler = e, this.backend = t;
		}
		async run(e, t, n) {
			O(), A("InferenceSession.run");
			let r = {}, i = {};
			if (typeof e != "object" || !e || e instanceof P || Array.isArray(e)) throw TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");
			let a = !0;
			if (typeof t == "object") {
				if (t === null) throw TypeError("Unexpected argument[1]: cannot be null.");
				if (t instanceof P) throw TypeError("'fetches' cannot be a Tensor");
				if (Array.isArray(t)) {
					if (t.length === 0) throw TypeError("'fetches' cannot be an empty array.");
					a = !1;
					for (let e of t) {
						if (typeof e != "string") throw TypeError("'fetches' must be a string array or an object.");
						if (this.outputNames.indexOf(e) === -1) throw RangeError(`'fetches' contains invalid output name: ${e}.`);
						r[e] = null;
					}
					if (typeof n == "object" && n) i = n;
					else if (typeof n < "u") throw TypeError("'options' must be an object.");
				} else {
					let e = !1, o = Object.getOwnPropertyNames(t);
					for (let n of this.outputNames) if (o.indexOf(n) !== -1) {
						let i = t[n];
						(i === null || i instanceof P) && (e = !0, a = !1, r[n] = i);
					}
					if (e) {
						if (typeof n == "object" && n) i = n;
						else if (typeof n < "u") throw TypeError("'options' must be an object.");
					} else i = t;
				}
			} else if (typeof t < "u") throw TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");
			for (let t of this.inputNames) if (typeof e[t] > "u") throw Error(`input '${t}' is missing in 'feeds'.`);
			if (a) for (let e of this.outputNames) r[e] = null;
			let o;
			if (i.activeLoraAdapters !== void 0) {
				if (!Array.isArray(i.activeLoraAdapters)) throw TypeError("'activeLoraAdapters' must be an array.");
				o = i.activeLoraAdapters.map((e) => {
					if (!(e instanceof He)) throw TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");
					if (e.backend !== this.backend) throw Error("LoRA adapter was created by a different backend than the session.");
					return e.handler;
				});
			}
			let s = await this.handler.run(e, r, i, o), c = {};
			for (let e in s) if (Object.hasOwnProperty.call(s, e)) {
				let t = s[e];
				c[e] = t instanceof P ? t : new P(t.type, t.data, t.dims);
			}
			return j("InferenceSession.run"), k(), c;
		}
		async release() {
			return this.handler.dispose();
		}
		static async create(t, n, r, i) {
			O(), A("InferenceSession.create");
			let a, o = {};
			if (typeof t == "string") {
				if (a = t, typeof n == "object" && n) o = n;
				else if (typeof n < "u") throw TypeError("'options' must be an object.");
			} else if (t instanceof Uint8Array) {
				if (a = t, typeof n == "object" && n) o = n;
				else if (typeof n < "u") throw TypeError("'options' must be an object.");
			} else if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) {
				let e = t, s = 0, c = t.byteLength;
				if (typeof n == "object" && n) o = n;
				else if (typeof n == "number") {
					if (s = n, !Number.isSafeInteger(s)) throw RangeError("'byteOffset' must be an integer.");
					if (s < 0 || s >= e.byteLength) throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);
					if (c = t.byteLength - s, typeof r == "number") {
						if (c = r, !Number.isSafeInteger(c)) throw RangeError("'byteLength' must be an integer.");
						if (c <= 0 || s + c > e.byteLength) throw RangeError(`'byteLength' is out of range (0, ${e.byteLength - s}].`);
						if (typeof i == "object" && i) o = i;
						else if (typeof i < "u") throw TypeError("'options' must be an object.");
					} else if (typeof r < "u") throw TypeError("'byteLength' must be a number.");
				} else if (typeof n < "u") throw TypeError("'options' must be an object.");
				a = new Uint8Array(e, s, c);
			} else throw TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");
			let [s, c] = await Ae(o), l = await s.createInferenceSessionHandler(a, c);
			return j("InferenceSession.create"), k(), new e(l, s);
		}
		startProfiling() {
			this.handler.startProfiling();
		}
		endProfiling() {
			this.handler.endProfiling();
		}
		get inputNames() {
			return this.handler.inputNames;
		}
		get outputNames() {
			return this.handler.outputNames;
		}
		get inputMetadata() {
			return this.handler.inputMetadata;
		}
		get outputMetadata() {
			return this.handler.outputMetadata;
		}
	};
}), F, dt = C(() => {
	ut(), F = lt;
}), ft, pt = C(() => {
	Ue(), ft = He;
}), mt = C(() => {}), ht = C(() => {}), gt = C(() => {}), _t = C(() => {});
we({}, {
	InferenceSession: () => F,
	LoraAdapter: () => ft,
	TRACE: () => ze,
	TRACE_EVENT_BEGIN: () => A,
	TRACE_EVENT_END: () => j,
	TRACE_FUNC_BEGIN: () => O,
	TRACE_FUNC_END: () => k,
	Tensor: () => P,
	env: () => D,
	registerBackend: () => Oe
});
var I = C(() => {
	Ne(), Re(), dt(), pt(), ct(), mt(), ht(), Ve(), gt(), _t();
}), vt = C(() => {}), yt = {};
we(yt, { default: () => St });
var bt, xt, St, Ct = C(() => {
	On(), z(), Lt(), bt = "ort-wasm-proxy-worker", xt = globalThis.self?.name === bt, xt && (self.onmessage = (e) => {
		let { type: t, in: n } = e.data;
		try {
			switch (t) {
				case "init-wasm":
					Gt(n.wasm).then(() => {
						pn(n).then(() => {
							postMessage({ type: t });
						}, (e) => {
							postMessage({
								type: t,
								err: e
							});
						});
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				case "init-ep": {
					let { epName: e, env: r } = n;
					mn(r, e).then(() => {
						postMessage({ type: t });
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				}
				case "copy-from": {
					let { buffer: e } = n, r = _n(e);
					postMessage({
						type: t,
						out: r
					});
					break;
				}
				case "create": {
					let { model: e, options: r } = n;
					vn(e, r).then((e) => {
						postMessage({
							type: t,
							out: e
						});
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				}
				case "release":
					yn(n), postMessage({ type: t });
					break;
				case "run": {
					let { sessionId: e, inputIndices: r, inputs: i, outputIndices: a, options: o } = n;
					Tn(e, r, i, a, Array(a.length).fill(null), o).then((e) => {
						e.some((e) => e[3] !== "cpu") ? postMessage({
							type: t,
							err: "Proxy does not support non-cpu tensor location."
						}) : postMessage({
							type: t,
							out: e
						}, Dn([...i, ...e]));
					}, (e) => {
						postMessage({
							type: t,
							err: e
						});
					});
					break;
				}
				case "end-profiling": En(n), postMessage({ type: t });
			}
		} catch (e) {
			postMessage({
				type: t,
				err: e
			});
		}
	}), St = xt ? null : (e) => new Worker(e ?? L, {
		type: "module",
		name: bt
	});
}), wt, Tt, Et, L, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt = C(() => {
	vt(), wt = typeof location > "u" ? void 0 : location.origin, Tt = import.meta.url > "file:" && import.meta.url < "file;", Et = () => Tt ? new URL(new URL("ort.wasm.min.mjs", import.meta.url).href, wt).href : import.meta.url, L = Et(), Dt = () => {
		if (L && !L.startsWith("blob:")) return L.substring(0, L.lastIndexOf("/") + 1);
	}, Ot = (e, t) => {
		try {
			let n = t ?? L;
			return (n ? new URL(e, n) : new URL(e)).origin === wt;
		} catch {
			return !1;
		}
	}, kt = (e, t) => {
		let n = t ?? L;
		try {
			return (n ? new URL(e, n) : new URL(e)).href;
		} catch {
			return;
		}
	}, At = (e, t) => `${t ?? "./"}${e}`, jt = async (e) => {
		let t = await (await fetch(e, { credentials: "same-origin" })).blob();
		return URL.createObjectURL(t);
	}, Mt = async (e) => (await import(
		/*webpackIgnore:true*/
		/*@vite-ignore*/
		e
)).default, Nt = (Ct(), Ee(yt)).default, Pt = async () => {
		if (!L) throw Error("Failed to load proxy worker: cannot determine the script source URL.");
		if (Ot(L)) return [void 0, Nt()];
		let e = await jt(L);
		return [e, Nt(e)];
	}, Ft = void 0, It = async (e, t, n, r) => {
		let i = Ft && !(e || t);
		if (i) {
			if (L) i = Ot(L) || r && !n;
			else if (r && !n) i = !0;
			else throw Error("cannot determine the script source URL.");
		}
		if (i) return [void 0, Ft];
		{
			let r = "ort-wasm-simd-threaded.mjs", i = e ?? kt(r, t), a = n && i && !Ot(i, t), o = a ? await jt(i) : i ?? At(r, t);
			return [a ? o : void 0, await Mt(o)];
		}
	};
}), Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, R, z = C(() => {
	Lt(), zt = !1, Bt = !1, Vt = !1, Ht = () => {
		if (typeof SharedArrayBuffer > "u") return !1;
		try {
			return typeof MessageChannel < "u" && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				4,
				1,
				96,
				0,
				0,
				3,
				2,
				1,
				0,
				5,
				4,
				1,
				3,
				1,
				1,
				10,
				11,
				1,
				9,
				0,
				65,
				0,
				254,
				16,
				2,
				0,
				26,
				11
			]));
		} catch {
			return !1;
		}
	}, Ut = () => {
		try {
			return WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				4,
				1,
				96,
				0,
				0,
				3,
				2,
				1,
				0,
				10,
				30,
				1,
				28,
				0,
				65,
				0,
				253,
				15,
				253,
				12,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				253,
				186,
				1,
				26,
				11
			]));
		} catch {
			return !1;
		}
	}, Wt = () => {
		try {
			return WebAssembly.validate(new Uint8Array([
				0,
				97,
				115,
				109,
				1,
				0,
				0,
				0,
				1,
				5,
				1,
				96,
				0,
				1,
				123,
				3,
				2,
				1,
				0,
				10,
				19,
				1,
				17,
				0,
				65,
				1,
				253,
				15,
				65,
				2,
				253,
				15,
				65,
				3,
				253,
				15,
				253,
				147,
				2,
				11
			]));
		} catch {
			return !1;
		}
	}, Gt = async (e) => {
		if (zt) return Promise.resolve();
		if (Bt) throw Error("multiple calls to 'initializeWebAssembly()' detected.");
		if (Vt) throw Error("previous call to 'initializeWebAssembly()' failed.");
		Bt = !0;
		let t = e.initTimeout, n = e.numThreads;
		if (e.simd !== !1) {
			if (e.simd === "relaxed") {
				if (!Wt()) throw Error("Relaxed WebAssembly SIMD is not supported in the current environment.");
			} else if (!Ut()) throw Error("WebAssembly SIMD is not supported in the current environment.");
		}
		let r = Ht();
		n > 1 && !r && (typeof self < "u" && !self.crossOriginIsolated && console.warn("env.wasm.numThreads is set to " + n + ", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."), console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."), e.numThreads = n = 1);
		let i = e.wasmPaths, a = typeof i == "string" ? i : void 0, o = i?.mjs, s = o?.href ?? o, c = i?.wasm, l = c?.href ?? c, u = e.wasmBinary, [d, f] = await It(s, a, n > 1, !!u || !!l), p = !1, m = [];
		if (t > 0 && m.push(new Promise((e) => {
			setTimeout(() => {
				p = !0, e();
			}, t);
		})), m.push(new Promise((e, t) => {
			let r = { numThreads: n };
			if (u) r.wasmBinary = u, r.locateFile = (e) => e;
			else if (l || a) r.locateFile = (e) => l ?? a + e;
			else if (s && s.indexOf("blob:") !== 0) r.locateFile = (e) => new URL(e, s).href;
			else if (d) {
				let e = Dt();
				e && (r.locateFile = (t) => e + t);
			}
			f(r).then((t) => {
				Bt = !1, zt = !0, Rt = t, e(), d && URL.revokeObjectURL(d);
			}, (e) => {
				Bt = !1, Vt = !0, t(e);
			});
		})), await Promise.race(m), p) throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`);
	}, R = () => {
		if (zt && Rt) return Rt;
		throw Error("WebAssembly is not initialized yet.");
	};
}), B, Kt, V, qt = C(() => {
	z(), B = (e, t) => {
		let n = R(), r = n.lengthBytesUTF8(e) + 1, i = n._malloc(r);
		return n.stringToUTF8(e, i, r), t.push(i), i;
	}, Kt = (e, t, n, r) => {
		if (typeof e == "object" && e) {
			if (n.has(e)) throw Error("Circular reference in options");
			n.add(e);
		}
		Object.entries(e).forEach(([e, i]) => {
			let a = t ? t + e : e;
			if (typeof i == "object") Kt(i, a + ".", n, r);
			else if (typeof i == "string" || typeof i == "number") r(a, i.toString());
			else if (typeof i == "boolean") r(a, i ? "1" : "0");
			else throw Error(`Can't handle extra config type: ${typeof i}`);
		});
	}, V = (e) => {
		let t = R(), n = t.stackSave();
		try {
			let n = t.PTR_SIZE, r = t.stackAlloc(2 * n);
			t._OrtGetLastError(r, r + n);
			let i = Number(t.getValue(r, n === 4 ? "i32" : "i64")), a = t.getValue(r + n, "*"), o = a ? t.UTF8ToString(a) : "";
			throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`);
		} finally {
			t.stackRestore(n);
		}
	};
}), Jt, Yt = C(() => {
	z(), qt(), Jt = (e, t) => {
		let n = R(), r = 0, i = [], a = e || {};
		try {
			if (e?.logSeverityLevel === void 0) a.logSeverityLevel = 2;
			else if (typeof e.logSeverityLevel != "number" || !Number.isInteger(e.logSeverityLevel) || e.logSeverityLevel < 0 || e.logSeverityLevel > 4) throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);
			if (e?.logVerbosityLevel === void 0) a.logVerbosityLevel = 0;
			else if (typeof e.logVerbosityLevel != "number" || !Number.isInteger(e.logVerbosityLevel)) throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);
			e?.terminate === void 0 && (a.terminate = !1);
			let o = 0;
			e?.tag !== void 0 && (o = B(e.tag, i)), r = n._OrtCreateRunOptions(a.logSeverityLevel, a.logVerbosityLevel, !!a.terminate, o), r === 0 && V("Can't create run options."), e?.extra !== void 0 && Kt(e.extra, "", /* @__PURE__ */ new WeakSet(), (e, t) => {
				let a = B(e, i), o = B(t, i);
				n._OrtAddRunConfigEntry(r, a, o) !== 0 && V(`Can't set a run config entry: ${e} - ${t}.`);
			});
			for (let e of t) n._OrtRunOptionsAddActiveLoraAdapter(r, e) !== 0 && V("Can't add an active LoRA adapter.");
			return [r, i];
		} catch (e) {
			throw r !== 0 && n._OrtReleaseRunOptions(r), i.forEach((e) => n._free(e)), e;
		}
	};
}), Xt, Zt, Qt, H, $t, en, tn = C(() => {
	z(), qt(), Xt = (e) => {
		switch (e) {
			case "disabled": return 0;
			case "basic": return 1;
			case "extended": return 2;
			case "layout": return 3;
			case "all": return 99;
			default: throw Error(`unsupported graph optimization level: ${e}`);
		}
	}, Zt = (e) => {
		switch (e) {
			case "sequential": return 0;
			case "parallel": return 1;
			default: throw Error(`unsupported execution mode: ${e}`);
		}
	}, Qt = (e) => {
		e.extra ||= {}, e.extra.session || (e.extra.session = {});
		let t = e.extra.session;
		t.use_ort_model_bytes_directly ||= "1", e.executionProviders && e.executionProviders.some((e) => (typeof e == "string" ? e : e.name) === "webgpu") && (e.enableMemPattern = !1);
	}, H = (e, t, n, r) => {
		let i = B(t, r), a = B(n, r);
		R()._OrtAddSessionConfigEntry(e, i, a) !== 0 && V(`Can't set a session config entry: ${t} - ${n}.`);
	}, $t = async (e, t, n) => {
		let r = t.executionProviders;
		for (let t of r) {
			let r = typeof t == "string" ? t : t.name, i = [];
			switch (r) {
				case "webnn":
					if (r = "WEBNN", H(e, "session.disable_quant_qdq", "1", n), H(e, "session.disable_qdq_constant_folding", "1", n), typeof t != "string") {
						let r = t?.deviceType;
						r && H(e, "deviceType", r, n);
					}
					break;
				case "webgpu":
					if (r = "JS", typeof t != "string") {
						let r = t;
						if (r?.preferredLayout) {
							if (r.preferredLayout !== "NCHW" && r.preferredLayout !== "NHWC") throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);
							H(e, "preferredLayout", r.preferredLayout, n);
						}
					}
					break;
				case "wasm":
				case "cpu": continue;
				default: throw Error(`not supported execution provider: ${r}`);
			}
			let a = i.length, o = 0, s = 0;
			if (a > 0) {
				o = R()._malloc(a * R().PTR_SIZE), n.push(o), s = R()._malloc(a * R().PTR_SIZE), n.push(s);
				for (let e = 0; e < a; e++) R().setValue(o + e * R().PTR_SIZE, i[e][0], "*"), R().setValue(s + e * R().PTR_SIZE, i[e][1], "*");
			}
			let c;
			{
				let t = B(r, n);
				c = await R()._OrtAppendExecutionProvider(e, t, o, s, a);
			}
			c !== 0 && V(`Can't append execution provider: ${r}.`);
		}
	}, en = async (e) => {
		let t = R(), n = 0, r = [], i = e || {};
		Qt(i);
		try {
			let e = Xt(i.graphOptimizationLevel ?? "all"), a = Zt(i.executionMode ?? "sequential"), o = typeof i.logId == "string" ? B(i.logId, r) : 0, s = i.logSeverityLevel ?? 2;
			if (!Number.isInteger(s) || s < 0 || s > 4) throw Error(`log severity level is not valid: ${s}`);
			let c = i.logVerbosityLevel ?? 0;
			if (!Number.isInteger(c) || c < 0 || c > 4) throw Error(`log verbosity level is not valid: ${c}`);
			let l = typeof i.optimizedModelFilePath == "string" ? B(i.optimizedModelFilePath, r) : 0;
			if (n = t._OrtCreateSessionOptions(e, !!i.enableCpuMemArena, !!i.enableMemPattern, a, !!i.enableProfiling, 0, o, s, c, l), n === 0 && V("Can't create session options."), i.executionProviders && await $t(n, i, r), i.enableGraphCapture !== void 0) {
				if (typeof i.enableGraphCapture != "boolean") throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);
				H(n, "enableGraphCapture", i.enableGraphCapture.toString(), r);
			}
			if (i.freeDimensionOverrides) for (let [e, a] of Object.entries(i.freeDimensionOverrides)) {
				if (typeof e != "string") throw Error(`free dimension override name must be a string: ${e}`);
				if (typeof a != "number" || !Number.isInteger(a) || a < 0) throw Error(`free dimension override value must be a non-negative integer: ${a}`);
				let i = B(e, r);
				t._OrtAddFreeDimensionOverride(n, i, a) !== 0 && V(`Can't set a free dimension override: ${e} - ${a}.`);
			}
			return i.extra !== void 0 && Kt(i.extra, "", /* @__PURE__ */ new WeakSet(), (e, t) => {
				H(n, e, t, r);
			}), [n, r];
		} catch (e) {
			throw n !== 0 && t._OrtReleaseSessionOptions(n) !== 0 && V("Can't release session options."), r.forEach((e) => t._free(e)), e;
		}
	};
}), U, nn, W, rn, an, on, sn, cn, ln = C(() => {
	U = (e) => {
		switch (e) {
			case "int8": return 3;
			case "uint8": return 2;
			case "bool": return 9;
			case "int16": return 5;
			case "uint16": return 4;
			case "int32": return 6;
			case "uint32": return 12;
			case "float16": return 10;
			case "float32": return 1;
			case "float64": return 11;
			case "string": return 8;
			case "int64": return 7;
			case "uint64": return 13;
			case "int4": return 22;
			case "uint4": return 21;
			default: throw Error(`unsupported data type: ${e}`);
		}
	}, nn = (e) => {
		switch (e) {
			case 3: return "int8";
			case 2: return "uint8";
			case 9: return "bool";
			case 5: return "int16";
			case 4: return "uint16";
			case 6: return "int32";
			case 12: return "uint32";
			case 10: return "float16";
			case 1: return "float32";
			case 11: return "float64";
			case 8: return "string";
			case 7: return "int64";
			case 13: return "uint64";
			case 22: return "int4";
			case 21: return "uint4";
			default: throw Error(`unsupported data type: ${e}`);
		}
	}, W = (e, t) => {
		let n = [
			-1,
			4,
			1,
			1,
			2,
			2,
			4,
			8,
			-1,
			1,
			2,
			8,
			4,
			8,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			-1,
			.5,
			.5
		][e], r = typeof t == "number" ? t : t.reduce((e, t) => e * t, 1);
		return n > 0 ? Math.ceil(r * n) : void 0;
	}, rn = (e) => {
		switch (e) {
			case "float16": return typeof Float16Array < "u" ? Float16Array : Uint16Array;
			case "float32": return Float32Array;
			case "uint8": return Uint8Array;
			case "int8": return Int8Array;
			case "uint16": return Uint16Array;
			case "int16": return Int16Array;
			case "int32": return Int32Array;
			case "bool": return Uint8Array;
			case "float64": return Float64Array;
			case "uint32": return Uint32Array;
			case "int64": return BigInt64Array;
			case "uint64": return BigUint64Array;
			default: throw Error(`unsupported type: ${e}`);
		}
	}, an = (e) => {
		switch (e) {
			case "verbose": return 0;
			case "info": return 1;
			case "warning": return 2;
			case "error": return 3;
			case "fatal": return 4;
			default: throw Error(`unsupported logging level: ${e}`);
		}
	}, on = (e) => e === "float32" || e === "float16" || e === "int32" || e === "int64" || e === "uint32" || e === "uint8" || e === "bool" || e === "uint4" || e === "int4", sn = (e) => e === "float32" || e === "float16" || e === "int32" || e === "int64" || e === "uint32" || e === "uint64" || e === "int8" || e === "uint8" || e === "bool" || e === "uint4" || e === "int4", cn = (e) => {
		switch (e) {
			case "none": return 0;
			case "cpu": return 1;
			case "cpu-pinned": return 2;
			case "texture": return 3;
			case "gpu-buffer": return 4;
			case "ml-tensor": return 5;
			default: throw Error(`unsupported data location: ${e}`);
		}
	};
}), un, dn = C(() => {
	vt(), un = async (e) => {
		if (typeof e == "string") {
			let t = await fetch(e);
			if (!t.ok) throw Error(`failed to load external data file: ${e}`);
			let n = t.headers.get("Content-Length"), r = n ? parseInt(n, 10) : 0;
			if (r < 1073741824) return new Uint8Array(await t.arrayBuffer());
			{
				if (!t.body) throw Error(`failed to load external data file: ${e}, no response body.`);
				let n = t.body.getReader(), i;
				try {
					i = new ArrayBuffer(r);
				} catch (e) {
					if (e instanceof RangeError) {
						let e = Math.ceil(r / 65536);
						i = new WebAssembly.Memory({
							initial: e,
							maximum: e
						}).buffer;
					} else throw e;
				}
				let a = 0;
				for (;;) {
					let { done: e, value: t } = await n.read();
					if (e) break;
					let r = t.byteLength;
					new Uint8Array(i, a, r).set(t), a += r;
				}
				return new Uint8Array(i, 0, r);
			}
		}
		return e instanceof Blob ? new Uint8Array(await e.arrayBuffer()) : e instanceof Uint8Array ? e : new Uint8Array(e);
	};
}), fn, pn, mn, G, hn, gn, _n, vn, yn, bn, xn, K, Sn, Cn, wn, Tn, En, Dn, On = C(() => {
	I(), Yt(), tn(), ln(), z(), qt(), dn(), fn = (e, t) => {
		R()._OrtInit(e, t) !== 0 && V("Can't initialize onnxruntime.");
	}, pn = async (e) => {
		fn(e.wasm.numThreads, an(e.logLevel));
	}, mn = async (e, t) => {
		R().asyncInit?.();
		let n = e.webgpu.adapter;
		if (t === "webgpu") {
			if (typeof navigator > "u" || !navigator.gpu) throw Error("WebGPU is not supported in current environment");
			if (n) {
				if (typeof n.limits != "object" || typeof n.features != "object" || typeof n.requestDevice != "function") throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.");
			} else {
				let t = e.webgpu.powerPreference;
				if (t !== void 0 && t !== "low-power" && t !== "high-performance") throw Error(`Invalid powerPreference setting: "${t}"`);
				let r = e.webgpu.forceFallbackAdapter;
				if (r !== void 0 && typeof r != "boolean") throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);
				if (n = await navigator.gpu.requestAdapter({
					powerPreference: t,
					forceFallbackAdapter: r
				}), !n) throw Error("Failed to get GPU adapter. You may need to enable flag \"--enable-unsafe-webgpu\" if you are using Chrome.");
			}
		}
		if (t === "webnn" && (typeof navigator > "u" || !navigator.ml)) throw Error("WebNN is not supported in current environment");
	}, G = /* @__PURE__ */ new Map(), hn = (e) => {
		let t = R(), n = t.stackSave();
		try {
			let n = t.PTR_SIZE, r = t.stackAlloc(2 * n);
			t._OrtGetInputOutputCount(e, r, r + n) !== 0 && V("Can't get session input/output count.");
			let i = n === 4 ? "i32" : "i64";
			return [Number(t.getValue(r, i)), Number(t.getValue(r + n, i))];
		} finally {
			t.stackRestore(n);
		}
	}, gn = (e, t) => {
		let n = R(), r = n.stackSave(), i = 0;
		try {
			let r = n.PTR_SIZE, a = n.stackAlloc(2 * r);
			n._OrtGetInputOutputMetadata(e, t, a, a + r) !== 0 && V("Can't get session input/output metadata.");
			let o = Number(n.getValue(a, "*"));
			i = Number(n.getValue(a + r, "*"));
			let s = n.HEAP32[i / 4];
			if (s === 0) return [o, 0];
			let c = n.HEAPU32[i / 4 + 1], l = [];
			for (let e = 0; e < c; e++) {
				let t = Number(n.getValue(i + 8 + e * r, "*"));
				l.push(t === 0 ? Number(n.getValue(i + 8 + (e + c) * r, "*")) : n.UTF8ToString(t));
			}
			return [
				o,
				s,
				l
			];
		} finally {
			n.stackRestore(r), i !== 0 && n._OrtFree(i);
		}
	}, _n = (e) => {
		let t = R(), n = t._malloc(e.byteLength);
		if (n === 0) throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);
		return t.HEAPU8.set(e, n), [n, e.byteLength];
	}, vn = async (e, t) => {
		let n, r, i = R();
		Array.isArray(e) ? [n, r] = e : e.buffer === i.HEAPU8.buffer ? [n, r] = [e.byteOffset, e.byteLength] : [n, r] = _n(e);
		let a = 0, o = 0, s = [], c = [], l = [];
		try {
			if ([o, s] = await en(t), t?.externalData && i.mountExternalData) {
				let e = [];
				for (let n of t.externalData) {
					let t = typeof n == "string" ? n : n.path, r = typeof n == "string" ? n : n.data;
					e.push(un(r).then((e) => {
						i.mountExternalData(t, e);
					}));
				}
				await Promise.all(e);
			}
			for (let e of t?.executionProviders ?? []) if ((typeof e == "string" ? e : e.name) === "webnn") {
				if (i.shouldTransferToMLTensor = !1, typeof e != "string") {
					let t = e, n = t?.context, r = t?.gpuDevice, a = t?.deviceType, o = t?.powerPreference;
					i.currentContext = n || (r ? await i.webnnCreateMLContext(r) : await i.webnnCreateMLContext({
						deviceType: a,
						powerPreference: o
					}));
				} else i.currentContext = await i.webnnCreateMLContext();
				break;
			}
			a = await i._OrtCreateSession(n, r, o), i.webgpuOnCreateSession?.(a), a === 0 && V("Can't create a session."), i.jsepOnCreateSession?.(), i.currentContext && (i.webnnRegisterMLContext(a, i.currentContext), i.currentContext = void 0, i.shouldTransferToMLTensor = !0);
			let [e, u] = hn(a), d = !!t?.enableGraphCapture, f = [], p = [], m = [], h = [];
			for (let t = 0; t < e; t++) {
				let [e, n, r] = gn(a, t);
				e === 0 && V("Can't get an input name."), c.push(e);
				let o = i.UTF8ToString(e);
				f.push(o), m.push(n === 0 ? {
					name: o,
					isTensor: !1
				} : {
					name: o,
					isTensor: !0,
					type: nn(n),
					shape: r
				});
			}
			for (let t = 0; t < u; t++) {
				let [n, r, o] = gn(a, t + e);
				n === 0 && V("Can't get an output name."), l.push(n);
				let s = i.UTF8ToString(n);
				p.push(s), h.push(r === 0 ? {
					name: s,
					isTensor: !1
				} : {
					name: s,
					isTensor: !0,
					type: nn(r),
					shape: o
				});
			}
			return G.set(a, [
				a,
				c,
				l,
				null,
				d,
				!1
			]), [
				a,
				f,
				p,
				m,
				h
			];
		} catch (e) {
			throw c.forEach((e) => i._OrtFree(e)), l.forEach((e) => i._OrtFree(e)), a !== 0 && i._OrtReleaseSession(a) !== 0 && V("Can't release session."), e;
		} finally {
			i._free(n), o !== 0 && i._OrtReleaseSessionOptions(o) !== 0 && V("Can't release session options."), s.forEach((e) => i._free(e)), i.unmountExternalData?.();
		}
	}, yn = (e) => {
		let t = R(), n = G.get(e);
		if (!n) throw Error(`cannot release session. invalid session id: ${e}`);
		let [r, i, a, o, s] = n;
		o && (s && t._OrtClearBoundOutputs(o.handle) !== 0 && V("Can't clear bound outputs."), t._OrtReleaseBinding(o.handle) !== 0 && V("Can't release IO binding.")), t.jsepOnReleaseSession?.(e), t.webnnOnReleaseSession?.(e), t.webgpuOnReleaseSession?.(e), i.forEach((e) => t._OrtFree(e)), a.forEach((e) => t._OrtFree(e)), t._OrtReleaseSession(r) !== 0 && V("Can't release session."), G.delete(e);
	}, bn = /* @__PURE__ */ new Map(), xn = 1, K = /* @__PURE__ */ new Map(), Sn = (e) => {
		let t = R(), n = t._malloc(e.byteLength);
		if (n === 0) throw Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${e.byteLength}.`);
		try {
			t.HEAPU8.set(e, n);
			let r = t._OrtCreateLoraAdapter(n, e.byteLength);
			r === 0 && V("Can't create a LoRA adapter.");
			let i = xn++;
			return bn.set(i, r), i;
		} finally {
			t._free(n);
		}
	}, Cn = (e) => {
		let t = R(), n = bn.get(e);
		if (n === void 0) throw Error(`cannot release LoRA adapter. invalid adapter id: ${e}`);
		if (K.has(e)) throw Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${e}`);
		t._OrtReleaseLoraAdapter(n) !== 0 && V("Can't release LoRA adapter."), bn.delete(e);
	}, wn = async (e, t, n, r, i, a, o = !1) => {
		if (!e) {
			t.push(0);
			return;
		}
		let s = R(), c = s.PTR_SIZE, l = e[0], u = e[1], d = e[3], f = d, p, m;
		if (l === "string" && (d === "gpu-buffer" || d === "ml-tensor")) throw Error("String tensor is not supported on GPU.");
		if (o && d !== "gpu-buffer") throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);
		if (d === "gpu-buffer") {
			let t = e[2].gpuBuffer;
			m = W(U(l), u);
			{
				let e = s.jsepRegisterBuffer;
				if (!e) throw Error("Tensor location \"gpu-buffer\" is not supported without using WebGPU.");
				p = e(r, a, t, m);
			}
		} else if (d === "ml-tensor") {
			let t = e[2].mlTensor;
			m = W(U(l), u);
			let n = s.webnnRegisterMLTensor;
			if (!n) throw Error("Tensor location \"ml-tensor\" is not supported without using WebNN.");
			p = n(r, t, U(l), u);
		} else {
			let t = e[2];
			if (Array.isArray(t)) {
				m = c * t.length, p = s._malloc(m), n.push(p);
				for (let e = 0; e < t.length; e++) {
					if (typeof t[e] != "string") throw TypeError(`tensor data at index ${e} is not a string`);
					s.setValue(p + e * c, B(t[e], n), "*");
				}
			} else {
				let e = s.webnnIsGraphInput, a = s.webnnIsGraphOutput;
				if (l !== "string" && e && a) {
					let o = s.UTF8ToString(i);
					if (e(r, o) || a(r, o)) {
						let e = U(l);
						m = W(e, u), f = "ml-tensor";
						let n = s.webnnCreateTemporaryTensor, i = s.webnnUploadTensor;
						if (!n || !i) throw Error("Tensor location \"ml-tensor\" is not supported without using WebNN.");
						let a = await n(r, e, u);
						i(a, new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), p = a;
					} else m = t.byteLength, p = s._malloc(m), n.push(p), s.HEAPU8.set(new Uint8Array(t.buffer, t.byteOffset, m), p);
				} else m = t.byteLength, p = s._malloc(m), n.push(p), s.HEAPU8.set(new Uint8Array(t.buffer, t.byteOffset, m), p);
			}
		}
		let h = s.stackSave(), g = s.stackAlloc(4 * u.length);
		try {
			u.forEach((e, t) => s.setValue(g + t * c, e, c === 4 ? "i32" : "i64"));
			let e = s._OrtCreateTensor(U(l), p, m, g, u.length, cn(f));
			e === 0 && V(`Can't create tensor for input/output. session=${r}, index=${a}.`), t.push(e);
		} finally {
			s.stackRestore(h);
		}
	}, Tn = async (e, t, n, r, i, a, o = []) => {
		let s = R(), c = s.PTR_SIZE, l = G.get(e);
		if (!l) throw Error(`cannot run inference. invalid session id: ${e}`);
		let u = l[0], d = l[1], f = l[2], p = l[3], m = l[4];
		l[5];
		let h = [];
		if (o.length > 0) {
			if (p) throw Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");
			for (let e of o) {
				let t = bn.get(e);
				if (t === void 0) throw Error(`cannot run inference. invalid LoRA adapter id: ${e}`);
				h.push(t);
			}
		}
		let g = t.length, _ = r.length, v = 0, y = [], b = [], x = [], ee = [], te = [], S = s.stackSave(), ne = s.stackAlloc(g * c), re = s.stackAlloc(g * c), ie = s.stackAlloc(_ * c), ae = s.stackAlloc(_ * c);
		try {
			for (let e of o) K.set(e, (K.get(e) ?? 0) + 1);
			[v, y] = Jt(a, h), A("wasm prepareInputOutputTensor");
			for (let r = 0; r < g; r++) await wn(n[r], b, ee, e, d[t[r]], t[r], m);
			for (let t = 0; t < _; t++) await wn(i[t], x, ee, e, f[r[t]], g + r[t], m);
			j("wasm prepareInputOutputTensor");
			for (let e = 0; e < g; e++) s.setValue(ne + e * c, b[e], "*"), s.setValue(re + e * c, d[t[e]], "*");
			for (let e = 0; e < _; e++) s.setValue(ie + e * c, x[e], "*"), s.setValue(ae + e * c, f[r[e]], "*");
			s.jsepOnRunStart?.(u), s.webnnOnRunStart?.(u);
			let l;
			l = await s._OrtRun(u, re, ne, g, ae, _, ie, v), l !== 0 && V("failed to call OrtRun().");
			let S = [], oe = [];
			A("wasm ProcessOutputTensor");
			for (let t = 0; t < _; t++) {
				let n = Number(s.getValue(ie + t * c, "*"));
				if (n === x[t] || te.includes(x[t])) {
					S.push(i[t]), n !== x[t] && s._OrtReleaseTensor(n) !== 0 && V("Can't release tensor.");
					continue;
				}
				let a = s.stackSave(), o = s.stackAlloc(4 * c), l = !1, u, d = 0;
				try {
					s._OrtGetTensorData(n, o, o + c, o + 2 * c, o + 3 * c) !== 0 && V(`Can't access output tensor data on index ${t}.`);
					let i = c === 4 ? "i32" : "i64", a = Number(s.getValue(o, i));
					d = s.getValue(o + c, "*");
					let f = s.getValue(o + c * 2, "*"), m = Number(s.getValue(o + c * 3, i)), h = [];
					for (let e = 0; e < m; e++) h.push(Number(s.getValue(f + e * c, i)));
					s._OrtFree(f) !== 0 && V("Can't free memory for tensor dims.");
					let g = h.reduce((e, t) => e * t, 1);
					u = nn(a);
					let _ = p?.outputPreferredLocations[r[t]];
					if (u === "string") {
						if (_ === "gpu-buffer" || _ === "ml-tensor") throw Error("String tensor is not supported on GPU.");
						let e = [];
						for (let t = 0; t < g; t++) {
							let n = s.getValue(d + t * c, "*"), r = s.getValue(d + (t + 1) * c, "*"), i = t === g - 1 ? void 0 : r - n;
							e.push(s.UTF8ToString(n, i));
						}
						S.push([
							u,
							h,
							e,
							"cpu"
						]);
					} else if (_ === "gpu-buffer" && g > 0) {
						let e = s.jsepGetBuffer;
						if (!e) throw Error("preferredLocation \"gpu-buffer\" is not supported without using WebGPU.");
						let t = e(d), r = W(a, g);
						if (r === void 0 || !on(u)) throw Error(`Unsupported data type: ${u}`);
						l = !0, S.push([
							u,
							h,
							{
								gpuBuffer: t,
								download: s.jsepCreateDownloader(t, r, u),
								dispose: () => {
									s._OrtReleaseTensor(n) !== 0 && V("Can't release tensor.");
								}
							},
							"gpu-buffer"
						]);
					} else if (_ === "ml-tensor" && g > 0) {
						let t = s.webnnEnsureTensor, r = s.webnnIsGraphInputOutputTypeSupported;
						if (!t || !r) throw Error("preferredLocation \"ml-tensor\" is not supported without using WebNN.");
						if (W(a, g) === void 0 || !sn(u)) throw Error(`Unsupported data type: ${u}`);
						if (!r(e, u, !1)) throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);
						let i = await t(e, d, a, h, !1);
						l = !0, S.push([
							u,
							h,
							{
								mlTensor: i,
								download: s.webnnCreateMLTensorDownloader(d, u),
								dispose: () => {
									s.webnnReleaseTensorId(d), s._OrtReleaseTensor(n);
								}
							},
							"ml-tensor"
						]);
					} else if (_ === "ml-tensor-cpu-output" && g > 0) {
						let e = s.webnnCreateMLTensorDownloader(d, u)(), t = S.length;
						l = !0, oe.push((async () => {
							let r = [t, await e];
							return s.webnnReleaseTensorId(d), s._OrtReleaseTensor(n), r;
						})()), S.push([
							u,
							h,
							[],
							"cpu"
						]);
					} else {
						let e = new (rn(u))(g);
						new Uint8Array(e.buffer, e.byteOffset, e.byteLength).set(s.HEAPU8.subarray(d, d + e.byteLength)), S.push([
							u,
							h,
							e,
							"cpu"
						]);
					}
				} finally {
					s.stackRestore(a), u === "string" && d && s._free(d), l || s._OrtReleaseTensor(n);
				}
			}
			p && !m && (s._OrtClearBoundOutputs(p.handle) !== 0 && V("Can't clear bound outputs."), G.set(e, [
				u,
				d,
				f,
				p,
				m,
				!1
			]));
			for (let [e, t] of await Promise.all(oe)) S[e][2] = t;
			return j("wasm ProcessOutputTensor"), S;
		} finally {
			s.webnnOnRunEnd?.(u), s.stackRestore(S), b.forEach((e) => s._OrtReleaseTensor(e)), x.forEach((e) => s._OrtReleaseTensor(e)), ee.forEach((e) => s._free(e)), v !== 0 && s._OrtReleaseRunOptions(v), y.forEach((e) => s._free(e));
			for (let e of o) {
				let t = K.get(e) - 1;
				t === 0 ? K.delete(e) : K.set(e, t);
			}
		}
	}, En = (e) => {
		let t = R(), n = G.get(e);
		if (!n) throw Error("invalid session id");
		let r = n[0], i = t._OrtEndProfiling(r);
		i === 0 && V("Can't get an profile file name."), t._OrtFree(i);
	}, Dn = (e) => {
		let t = [];
		for (let n of e) {
			let e = n[2];
			!Array.isArray(e) && "buffer" in e && t.push(e.buffer);
		}
		return t;
	};
}), q, J, Y, kn, An, jn, Mn, Nn, X, Z, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn = C(() => {
	I(), On(), z(), Lt(), dn(), q = () => !!D.wasm.proxy && typeof document < "u", Y = !1, kn = !1, An = !1, Nn = /* @__PURE__ */ new Map(), X = (e, t) => {
		let n = Nn.get(e);
		n ? n.push(t) : Nn.set(e, [t]);
	}, Z = () => {
		if (Y || !kn || An || !J) throw Error("worker not ready");
	}, Pn = (e) => {
		switch (e.data.type) {
			case "init-wasm":
				Y = !1, e.data.err ? (An = !0, Mn[1](e.data.err)) : (kn = !0, Mn[0]()), jn &&= (URL.revokeObjectURL(jn), void 0);
				break;
			case "init-ep":
			case "copy-from":
			case "create":
			case "release":
			case "run":
			case "end-profiling": {
				let t = Nn.get(e.data.type);
				e.data.err ? t.shift()[1](e.data.err) : t.shift()[0](e.data.out);
				break;
			}
		}
	}, Fn = async () => {
		if (!kn) {
			if (Y) throw Error("multiple calls to 'initWasm()' detected.");
			if (An) throw Error("previous call to 'initWasm()' failed.");
			if (Y = !0, q()) return new Promise((e, t) => {
				J?.terminate(), Pt().then(([n, r]) => {
					try {
						J = r, J.onerror = (e) => t(e), J.onmessage = Pn, Mn = [e, t];
						let i = {
							type: "init-wasm",
							in: D
						};
						if (!i.in.wasm.wasmPaths && n) {
							let e = Dt();
							e && (i.in.wasm.wasmPaths = e);
						}
						J.postMessage(i), jn = n;
					} catch (e) {
						t(e);
					}
				}, t);
			});
			try {
				await Gt(D.wasm), await pn(D), kn = !0;
			} catch (e) {
				throw An = !0, e;
			} finally {
				Y = !1;
			}
		}
	}, In = async (e) => {
		if (q()) return Z(), new Promise((t, n) => {
			X("init-ep", [t, n]);
			let r = {
				type: "init-ep",
				in: {
					epName: e,
					env: D
				}
			};
			J.postMessage(r);
		});
		await mn(D, e);
	}, Ln = async (e) => q() ? (Z(), new Promise((t, n) => {
		X("copy-from", [t, n]);
		let r = {
			type: "copy-from",
			in: { buffer: e }
		};
		J.postMessage(r, [e.buffer]);
	})) : _n(e), Rn = async (e, t) => {
		if (q()) {
			if (t?.preferredOutputLocation) throw Error("session option \"preferredOutputLocation\" is not supported for proxy.");
			return Z(), new Promise((n, r) => {
				X("create", [n, r]);
				let i = {
					type: "create",
					in: {
						model: e,
						options: { ...t }
					}
				}, a = [];
				e instanceof Uint8Array && a.push(e.buffer), J.postMessage(i, a);
			});
		}
		return vn(e, t);
	}, zn = async (e) => {
		if (q()) return Z(), new Promise((t, n) => {
			X("release", [t, n]);
			let r = {
				type: "release",
				in: e
			};
			J.postMessage(r);
		});
		yn(e);
	}, Bn = async (e) => {
		if (q()) throw Error("LoRA adapter is not supported for proxy.");
		let t = typeof e == "string" ? await un(e) : e;
		return Sn(t);
	}, Vn = async (e) => {
		if (q()) throw Error("LoRA adapter is not supported for proxy.");
		Cn(e);
	}, Hn = async (e, t, n, r, i, a, o) => {
		if (q()) {
			if (o.length > 0) throw Error("LoRA adapter is not supported for proxy.");
			if (n.some((e) => e[3] !== "cpu")) throw Error("input tensor on GPU is not supported for proxy.");
			if (i.some((e) => e)) throw Error("pre-allocated output tensor is not supported for proxy.");
			return Z(), new Promise((i, o) => {
				X("run", [i, o]);
				let s = n, c = {
					type: "run",
					in: {
						sessionId: e,
						inputIndices: t,
						inputs: s,
						outputIndices: r,
						options: a
					}
				};
				J.postMessage(c, Dn(s));
			});
		}
		return Tn(e, t, n, r, i, a, o);
	}, Un = async (e) => {
		if (q()) return Z(), new Promise((t, n) => {
			X("end-profiling", [t, n]);
			let r = {
				type: "end-profiling",
				in: e
			};
			J.postMessage(r);
		});
		En(e);
	};
}), Gn, Kn = C(() => {
	I(), Wn(), Gn = class {
		async loadAdapter(e) {
			O(), this.adapterId = await Bn(e), k();
		}
		async dispose() {
			return Vn(this.adapterId);
		}
	};
}), qn, Jn, Yn, Xn = C(() => {
	I(), Kn(), Wn(), ln(), vt(), dn(), qn = (e, t) => {
		switch (e.location) {
			case "cpu": return [
				e.type,
				e.dims,
				e.data,
				"cpu"
			];
			case "gpu-buffer": return [
				e.type,
				e.dims,
				{ gpuBuffer: e.gpuBuffer },
				"gpu-buffer"
			];
			case "ml-tensor": return [
				e.type,
				e.dims,
				{ mlTensor: e.mlTensor },
				"ml-tensor"
			];
			default: throw Error(`invalid data location: ${e.location} for ${t()}`);
		}
	}, Jn = (e) => {
		switch (e[3]) {
			case "cpu": return new P(e[0], e[2], e[1]);
			case "gpu-buffer": {
				let t = e[0];
				if (!on(t)) throw Error(`not supported data type: ${t} for deserializing GPU tensor`);
				let { gpuBuffer: n, download: r, dispose: i } = e[2];
				return P.fromGpuBuffer(n, {
					dataType: t,
					dims: e[1],
					download: r,
					dispose: i
				});
			}
			case "ml-tensor": {
				let t = e[0];
				if (!sn(t)) throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);
				let { mlTensor: n, download: r, dispose: i } = e[2];
				return P.fromMLTensor(n, {
					dataType: t,
					dims: e[1],
					download: r,
					dispose: i
				});
			}
			default: throw Error(`invalid data location: ${e[3]}`);
		}
	}, Yn = class {
		async fetchModelAndCopyToWasmMemory(e) {
			return Ln(await un(e));
		}
		async loadModel(e, t) {
			O();
			let n;
			n = typeof e == "string" ? await this.fetchModelAndCopyToWasmMemory(e) : e, [this.sessionId, this.inputNames, this.outputNames, this.inputMetadata, this.outputMetadata] = await Rn(n, t), k();
		}
		async dispose() {
			return zn(this.sessionId);
		}
		async run(e, t, n, r = []) {
			O();
			let i = r.map((e) => {
				if (!(e instanceof Gn)) throw Error("LoRA adapter was not created by the WebAssembly backend.");
				return e.adapterId;
			}), a = [], o = [];
			Object.entries(e).forEach((e) => {
				let t = e[0], n = e[1], r = this.inputNames.indexOf(t);
				if (r === -1) throw Error(`invalid input '${t}'`);
				a.push(n), o.push(r);
			});
			let s = [], c = [];
			Object.entries(t).forEach((e) => {
				let t = e[0], n = e[1], r = this.outputNames.indexOf(t);
				if (r === -1) throw Error(`invalid output '${t}'`);
				s.push(n), c.push(r);
			});
			let l = a.map((e, t) => qn(e, () => `input "${this.inputNames[o[t]]}"`)), u = s.map((e, t) => e ? qn(e, () => `output "${this.outputNames[c[t]]}"`) : null), d = await Hn(this.sessionId, o, l, c, u, n, i), f = {};
			for (let e = 0; e < d.length; e++) f[this.outputNames[c[e]]] = s[e] ?? Jn(d[e]);
			return k(), f;
		}
		startProfiling() {}
		endProfiling() {
			Un(this.sessionId);
		}
	};
}), Zn, Qn = C(() => {
	Zn = (e) => {
		if (e?.epContextDataRead) throw Error("session option \"epContextDataRead\" is not supported by ONNX Runtime Web");
	};
}), $n = {};
we($n, {
	OnnxruntimeWebAssemblyBackend: () => tr,
	initializeFlags: () => er,
	wasmBackend: () => nr
});
var er, tr, nr, rr = C(() => {
	I(), Kn(), Wn(), Xn(), Qn(), er = () => {
		(typeof D.wasm.initTimeout != "number" || D.wasm.initTimeout < 0) && (D.wasm.initTimeout = 0);
		let e = D.wasm.simd;
		if (typeof e != "boolean" && e !== void 0 && e !== "fixed" && e !== "relaxed" && (console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`), D.wasm.simd = !1), typeof D.wasm.proxy != "boolean" && (D.wasm.proxy = !1), typeof D.wasm.trace != "boolean" && (D.wasm.trace = !1), typeof D.wasm.numThreads != "number" || !Number.isInteger(D.wasm.numThreads) || D.wasm.numThreads <= 0) {
			if (typeof self < "u" && !self.crossOriginIsolated) D.wasm.numThreads = 1;
			else {
				let e = typeof navigator > "u" ? Ce("node:os").cpus().length : navigator.hardwareConcurrency;
				D.wasm.numThreads = Math.min(4, Math.ceil((e || 1) / 2));
			}
		}
	}, tr = class {
		async init(e) {
			er(), await Fn(), await In(e);
		}
		async createInferenceSessionHandler(e, t) {
			Zn(t);
			let n = new Yn();
			return await n.loadModel(e, t), n;
		}
		async createLoraAdapterHandler(e) {
			let t = new Gn();
			return await t.loadAdapter(e), t;
		}
	}, nr = new tr();
});
I(), I(), I();
var ir = "1.31.1";
{
	let e = (rr(), Ee($n)).wasmBackend;
	Oe("cpu", e, 10), Oe("wasm", e, 10);
}
Object.defineProperty(D.versions, "web", {
	value: ir,
	enumerable: !0
});
// src/wakeword.ts
var ar = {
	io_broker: "io_broker.onnx",
	hey_jarvis: "hey_jarvis_v0.1.onnx",
	alexa: "alexa_v0.1.onnx",
	hey_mycroft: "hey_mycroft_v0.1.onnx",
	hey_rhasspy: "hey_rhasspy_v0.1.onnx"
}, or = 32, sr = 76, cr = 8, lr = 96, ur = 16, dr = class {
	mel;
	embedding;
	classifiers = [];
	melRows = [];
	melProcessed = 0;
	embeddings = [];
	threshold = .5;
	async initialize(e) {
		await this.dispose(), D.wasm.numThreads = 1, D.wasm.proxy = !1, D.wasm.wasmPaths = {
			mjs: new URL("wasm/ort-wasm-simd-threaded.mjs", e.assetBase).href,
			wasm: new URL("wasm/ort-wasm-simd-threaded.wasm", e.assetBase).href
		}, this.threshold = Math.max(.01, Math.min(1, e.threshold));
		let t = e.loadAsset || (async (t) => {
			let n = await fetch(new URL(`models/${t}`, e.assetBase));
			if (!n.ok) throw Error(`Could not load model ${t}: HTTP ${n.status}`);
			return new Uint8Array(await n.arrayBuffer());
		});
		try {
			this.mel = await F.create(await t("melspectrogram.onnx")), this.embedding = await F.create(await t("embedding_model.onnx"));
			for (let n of e.names) {
				let r = ar[n], i = r ? await F.create(await t(r)) : await F.create(await e.getUploadedModel(n));
				this.classifiers.push({
					name: n,
					session: i
				});
			}
			if (!this.classifiers.length) throw Error("No wake word model selected");
		} catch (e) {
			throw await this.dispose(), e;
		}
	}
	async processAudio(e) {
		if (!this.mel || !this.embedding || !this.classifiers.length) throw Error("Wake word engine not initialized");
		let t = Float32Array.from(e, (e) => Math.round(Math.max(-1, Math.min(1, e)) * 32767)), n = (await this.mel.run({ [this.mel.inputNames[0]]: new P("float32", t, [1, t.length]) }))[this.mel.outputNames[0]], r = n.data, i = Number(n.dims[2]);
		if (!Number.isInteger(i) || r.length < i * or) throw Error("Unexpected mel model output");
		for (let e = 0; e < i; e++) {
			let t = new Float32Array(or);
			for (let n = 0; n < or; n++) t[n] = r[e * or + n] / 10 + 2;
			this.melRows.push(t);
		}
		for (; this.melProcessed + sr <= this.melRows.length;) {
			let e = /* @__PURE__ */ new Float32Array(2432);
			for (let t = 0; t < sr; t++) e.set(this.melRows[this.melProcessed + t], t * or);
			let t = (await this.embedding.run({ [this.embedding.inputNames[0]]: new P("float32", e, [
				1,
				sr,
				or,
				1
			]) }))[this.embedding.outputNames[0]].data;
			if (t.length < lr) throw Error("Unexpected embedding model output");
			this.embeddings.push(t.slice(0, lr)), this.melProcessed += cr;
		}
		if (this.melProcessed > sr) {
			let e = this.melProcessed - sr;
			this.melRows.splice(0, e), this.melProcessed -= e;
		}
		if (this.embeddings.length > 64 && this.embeddings.splice(0, this.embeddings.length - 64), this.embeddings.length < ur) return {
			detected: !1,
			confidence: 0,
			timestamp: Date.now()
		};
		let a = /* @__PURE__ */ new Float32Array(1536);
		for (let e = 0; e < ur; e++) a.set(this.embeddings[this.embeddings.length - ur + e], e * lr);
		let o = {
			name: "",
			confidence: 0
		};
		for (let { name: e, session: t } of this.classifiers) {
			let n = await t.run({ [t.inputNames[0]]: new P("float32", a, [
				1,
				ur,
				lr
			]) }), r = Number(n[t.outputNames[0]].data[0]);
			r > o.confidence && (o = {
				name: e,
				confidence: r
			});
		}
		return {
			detected: o.confidence >= this.threshold,
			confidence: o.confidence,
			timestamp: Date.now(),
			name: o.name
		};
	}
	reset() {
		this.melRows = [], this.melProcessed = 0, this.embeddings = [];
	}
	async dispose() {
		let e = [
			this.mel,
			this.embedding,
			...this.classifiers.map((e) => e.session)
		];
		this.mel = void 0, this.embedding = void 0, this.classifiers = [], this.reset(), await Promise.all(e.filter((e) => !!e).map((e) => e.release()));
	}
}, Q = new class {
	createEngine;
	listeners = /* @__PURE__ */ new Set();
	snapshot = {
		phase: "disabled",
		enabled: !1,
		level: 0,
		text: "",
		error: "",
		wakeword: ""
	};
	socket;
	options;
	context;
	stream;
	source;
	node;
	engine;
	ring;
	vad;
	client;
	wakeQueue = [];
	pumping = !1;
	afterWake = [];
	generation = 0;
	segments = /* @__PURE__ */ new Map();
	lastLevelAt = 0;
	activeAt = 0;
	constructor(e = () => new dr()) {
		this.createEngine = e;
	}
	subscribe(e) {
		return this.listeners.add(e), e(this.snapshot), () => {
			this.listeners.delete(e), this.listeners.size || this.disable();
		};
	}
	get state() {
		return this.snapshot;
	}
	publish(e) {
		this.snapshot = {
			...this.snapshot,
			...e
		};
		for (let e of this.listeners) e(this.snapshot);
		e.phase && this.options?.statusState && this.writeState(this.options.statusState, e.phase), e.error && this.options?.errorState && this.writeState(this.options.errorState, e.error);
	}
	async writeState(e, t) {
		try {
			await this.socket?.setState(e, {
				val: t,
				ack: !1
			});
		} catch {}
	}
	async enable(e, t) {
		if (this.snapshot.enabled || this.snapshot.phase === "initializing") return;
		let n = ++this.generation;
		this.socket = e, this.options = t, this.publish({
			phase: "initializing",
			error: "",
			text: "",
			enabled: !1
		});
		try {
			if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia || !window.AudioWorkletNode) throw Error("A secure browser context with microphone and AudioWorklet is required");
			if (t.mode !== "ptt") {
				let r = await e.sendTo(t.parakeet, "getWakewordConfig", {});
				if (!r || r.error) throw Error(r?.error || "Parakeet adapter unavailable");
				let i = this.engine = this.createEngine(), a = import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1);
				if (await i.initialize({
					names: r.names?.length ? r.names : ["io_broker"],
					threshold: r.threshold || .5,
					assetBase: a,
					getUploadedModel: async (n) => {
						let r = await e.sendTo(t.parakeet, "getWakewordModel", { name: n });
						if (!r?.base64) throw Error(r?.error || `Could not load ${n}`);
						let i = atob(r.base64);
						return Uint8Array.from(i, (e) => e.charCodeAt(0));
					}
				}), n !== this.generation) {
					await i.dispose();
					return;
				}
			}
			if (n !== this.generation) return;
			let r = new AudioContext({ sampleRate: pe });
			this.context = r, await r.resume();
			let i = await navigator.mediaDevices.getUserMedia({ audio: {
				deviceId: t.microphone ? { ideal: t.microphone } : void 0,
				channelCount: 1,
				echoCancellation: !0,
				noiseSuppression: !0,
				autoGainControl: !0
			} });
			if (this.stream = i, n !== this.generation) {
				i.getTracks().forEach((e) => e.stop()), await r.close();
				return;
			}
			let a;
			try {
				a = r.createMediaStreamSource(i);
			} catch {
				await r.close(), r = new AudioContext(), this.context = r, await r.resume(), a = r.createMediaStreamSource(i);
			}
			if (r.sampleRate < 16e3) throw Error("Microphone sample rate below 16 kHz is unsupported");
			let o = import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1);
			if (await r.audioWorklet.addModule(new URL("wakeword-capture.js", o).href), n !== this.generation) {
				i.getTracks().forEach((e) => e.stop()), await r.close();
				return;
			}
			let s = new AudioWorkletNode(r, "wakeword-capture");
			s.port.onmessage = ({ data: e }) => {
				e.pcm && n === this.generation && this.onAudio(new Float32Array(e.pcm));
			}, a.connect(s), s.connect(r.destination), i.getAudioTracks().forEach((e) => {
				e.onended = () => void this.disable();
			}), this.context = r, this.stream = i, this.source = a, this.node = s, this.ring = new ge(Math.round(pe * t.ringBufferMs / 1e3)), this.publish({
				enabled: !0,
				phase: "listening"
			});
		} catch (e) {
			n === this.generation && (await this.release(), this.publish({
				enabled: !1,
				phase: "error",
				error: e.message
			}));
		}
	}
	async disable() {
		++this.generation, await this.release(), this.publish({
			enabled: !1,
			phase: "disabled",
			level: 0,
			wakeword: ""
		});
	}
	connectionLost(e) {
		(this.snapshot.enabled || this.snapshot.phase === "initializing") && this.fail(Error(e));
	}
	async release() {
		this.wakeQueue = [], this.afterWake = [];
		let e = this.client;
		this.client = void 0;
		let t = e?.cancel();
		this.stream?.getTracks().forEach((e) => e.stop()), this.stream = void 0, this.node?.port.postMessage("stop"), this.node?.disconnect(), this.node = void 0, this.source?.disconnect(), this.source = void 0;
		let n = this.context;
		this.context = void 0, n && n.state !== "closed" && await n.close().catch(() => {});
		let r = this.engine;
		this.engine = void 0, r && await r.dispose(), this.ring?.clear(), this.ring = void 0, this.vad = void 0, await t;
	}
	async pushToTalk(e, t) {
		this.snapshot.enabled || await this.enable(e, t), this.snapshot.phase === "listening" && this.activate("push-to-talk");
	}
	onAudio(e) {
		this.ring?.push(e);
		let t = Date.now();
		t - this.lastLevelAt >= 100 && (this.lastLevelAt = t, this.publish({ level: Math.min(1, Math.sqrt(Math.sqrt(e.reduce((e, t) => e + t * t, 0) / e.length)) * 2.5) }));
		let n = this.snapshot.phase;
		n === "listening" && this.engine ? (this.wakeQueue.push(e), this.wakeQueue.length > 12 && this.wakeQueue.shift(), this.pumpWake()) : n === "activated" ? (this.afterWake.push(e), this.afterWake.length > 100 && this.fail(/* @__PURE__ */ Error("Audio start is too slow"))) : n === "recording" && this.record(e);
	}
	async pumpWake() {
		if (!this.pumping && this.engine) {
			this.pumping = !0;
			try {
				for (; this.wakeQueue.length && this.snapshot.phase === "listening";) {
					let e = await this.engine.processAudio(this.wakeQueue.shift());
					if (e.detected) {
						this.wakeQueue = [], this.activate(e.name || "wakeword");
						break;
					}
				}
			} catch (e) {
				this.fail(e);
			} finally {
				this.pumping = !1;
			}
		}
	}
	async activate(e) {
		let t = this.socket, n = this.options;
		if (!t || !n || this.snapshot.phase !== "listening") return;
		this.publish({
			phase: "activated",
			wakeword: e,
			text: ""
		}), n.activationTone && this.tone(880), this.activeAt = Date.now(), this.segments.clear();
		let r = this.generation, i = n.stripWakeword ? /* @__PURE__ */ new Float32Array() : this.ring?.snapshot() || /* @__PURE__ */ new Float32Array(), a = this.client = new ve((e) => t.sendTo(n.parakeet, "live", e), (e) => this.onEvent(e), (e) => this.fail(e));
		try {
			if (await a.start(), r !== this.generation || this.client !== a) {
				await a.cancel();
				return;
			}
			this.vad = new _e(n), this.publish({ phase: "recording" }), i.length && a.push(i);
			let e = this.afterWake.splice(0);
			for (let t of e) this.record(t);
		} catch (e) {
			this.fail(e);
		}
	}
	record(e) {
		this.client?.push(e);
		let t = this.vad?.push(e);
		(t === "done" || t === "no-speech") && this.finishRecording();
	}
	finishRecording() {
		this.snapshot.phase === "recording" && (this.publish({ phase: "processing" }), this.options?.completionTone && this.tone(660), this.client?.stop());
	}
	tone(e) {
		let t = this.context;
		if (!t || t.state !== "running") return;
		let n = t.createOscillator(), r = t.createGain();
		n.type = "sine", n.frequency.value = e, r.gain.setValueAtTime(1e-4, t.currentTime), r.gain.exponentialRampToValueAtTime(.08, t.currentTime + .015), r.gain.exponentialRampToValueAtTime(1e-4, t.currentTime + .12), n.connect(r), r.connect(t.destination), n.onended = () => {
			n.disconnect(), r.disconnect();
		}, n.start(), n.stop(t.currentTime + .13);
	}
	onEvent(e) {
		if (e.type === "transcript" && typeof e.segment == "number") this.segments.get(e.segment)?.final || this.segments.set(e.segment, {
			text: e.correctedText || e.text || "",
			final: !!e.final
		}), (this.options?.showInterim || e.final) && this.publish({ text: this.joinText() });
		else if (e.type === "done") {
			let e = this.joinText();
			this.publish({
				phase: "result",
				text: e
			}), e && this.deliver(e, this.client?.sessionId || ""), this.client = void 0, this.vad = void 0, this.ring?.clear(), this.engine?.reset(), window.setTimeout(() => {
				this.snapshot.phase === "result" && this.publish({
					phase: "listening",
					wakeword: ""
				});
			}, 1200);
		} else e.type === "error" && this.fail(Error(e.message || "Parakeet error"));
	}
	joinText() {
		return [...this.segments].sort(([e], [t]) => e - t).map(([, e]) => e.text).filter(Boolean).join(" ").trim();
	}
	async deliver(e, t) {
		let n = this.socket, r = this.options;
		if (!n || !r) return;
		let i = {
			text: e,
			timestamp: this.activeAt,
			source: "ai-parakeet-wakeword",
			sessionId: t,
			final: !0
		};
		if (r.resultState && await this.writeState(r.resultState, e), r.forwardInstance && r.forwardCommand) try {
			await n.sendTo(r.forwardInstance, r.forwardCommand, i);
		} catch (e) {
			this.publish({ error: e.message });
		}
	}
	fail(e) {
		this.publish({
			phase: "error",
			error: e.message
		}), this.disableAfterError();
	}
	async disableAfterError() {
		++this.generation, await this.release(), this.publish({
			enabled: !1,
			level: 0
		});
	}
}(), fr = "\n:host { display:block; width:100%; height:100%; color:var(--iob-color-text, #17212f); }\n* { box-sizing:border-box; }\n.wakeword { width:100%; height:100%; padding:16px; border-radius:12px; background:transparent; color:inherit; overflow:auto; font-family:inherit; }\n.top { display:flex; align-items:center; gap:16px; }\n.mic { width:64px; height:64px; border:0; border-radius:50%; background:#e2e8f0; color:#334155; cursor:pointer; display:grid; place-items:center; flex:none; }\n.mic.on { background:var(--wake-accent); color:#fff; box-shadow:0 0 0 5px color-mix(in srgb, var(--wake-accent) 18%, transparent); }\n.mic:disabled { opacity:.55; cursor:default; }\n.mic svg { width:34px; height:34px; fill:currentColor; }\n.status { display:flex; flex-direction:column; gap:4px; min-width:0; }\n.status strong { font-weight:600; }\n.status small { opacity:.7; }\n.meter { height:5px; background:color-mix(in srgb,currentColor 15%,transparent); border-radius:99px; margin-top:16px; overflow:hidden; }\n.meter span { display:block; height:100%; background:var(--wake-accent); transition:width .1s linear; }\n.text { margin:14px 0 0; line-height:1.4; overflow-wrap:anywhere; }\n.error { color:#dc2626; margin:12px 0 0; }\n.actions { display:flex; gap:8px; margin-top:14px; }\n.actions button { border:1px solid var(--wake-accent); color:var(--wake-accent); background:transparent; border-radius:6px; padding:6px 12px; cursor:pointer; }\n.actions button:disabled { opacity:.5; }\n.compact { padding:8px; }\n.compact .mic { width:42px; height:42px; }\n.compact .mic svg { width:25px; height:25px; }\n.compact .meter { margin-top:8px; }\n@media (prefers-reduced-motion:reduce) { .meter span { transition:none; } }\n", pr = (e, t) => {
	let n = (e || `${t}.0`).replace(/^system\.adapter\./, "");
	return RegExp(`^${t.replaceAll("-", "\\-")}\\.\\d+$`).test(n) ? n : `${t}.0`;
}, $ = (e, t) => Number.isFinite(Number(e)) ? Number(e) : t;
le("iob-wakeword", class extends ce {
	#e;
	#t;
	#n = !1;
	#r = null;
	#i = Q.state;
	constructor() {
		super();
		let t = this.attachShadow({ mode: "open" }), n = document.createElement("style");
		n.textContent = fr;
		let r = document.createElement("div");
		r.style.height = "100%", t.append(n, r), this.#e = e(r);
	}
	disconnectedCallback() {
		this.#t?.(), this.#t = void 0, this.#n = !1, this.#r = null, super.disconnectedCallback();
	}
	getStateIds(e) {
		return [`system.adapter.${pr(e.parakeet, "ai-parakeet")}.alive`];
	}
	render() {
		this.#t ||= Q.subscribe((e) => {
			this.#i = e, this.#s();
		}), this.editMode && Q.state.enabled && Q.disable();
		let e = pr(this.settings.parakeet, "ai-parakeet");
		if (this.states[`system.adapter.${e}.alive`]?.val === !1 && Q.connectionLost("Adapter is not running"), this.socket !== this.#r) {
			let e = this.#r;
			if (this.#r = this.socket, this.#n = !1, e && Q.state.enabled) {
				Q.disable().then(() => {
					this.isConnected && !this.editMode && this.settings.autoStart && this.socket && (this.#n = !0, Q.enable(this.socket, this.#a()));
				}), this.#s();
				return;
			}
		}
		!this.editMode && this.settings.autoStart && !this.#n && this.socket && (this.#n = !0, Q.enable(this.socket, this.#a())), this.#s();
	}
	#a() {
		let e = this.settings;
		return {
			parakeet: pr(e.parakeet, "ai-parakeet"),
			mode: e.mode || "wakeword",
			microphone: e.microphone || "",
			ringBufferMs: $(e.ringBufferMs, 1e3),
			stripWakeword: !!e.stripWakeword,
			threshold: $(e.threshold, .015),
			minSpeechMs: $(e.minSpeechMs, 250),
			silenceMs: $(e.silenceMs, 1200),
			noSpeechMs: $(e.noSpeechMs, 5e3),
			maxRecordMs: $(e.maxRecordMs, 15e3),
			showInterim: e.showInterim !== !1,
			activationTone: !!e.activationTone,
			completionTone: !!e.completionTone,
			resultState: e.resultState || "",
			statusState: e.statusState || "",
			errorState: e.errorState || "",
			forwardInstance: e.forwardInstance || "",
			forwardCommand: e.forwardCommand || ""
		};
	}
	#o() {
		return this.settings.language === "de" || this.settings.language === "en" ? this.settings.language : (this.systemLang || navigator.language).toLowerCase().startsWith("de") ? "de" : "en";
	}
	#s() {
		this.#e.render(/* @__PURE__ */ t(fe, {
			snapshot: this.#i,
			mode: this.settings.mode || "wakeword",
			language: this.#o(),
			compact: !!this.settings.compact,
			showText: this.settings.showText !== !1,
			accentColor: this.settings.accentColor || "#2563eb",
			fontSize: $(this.settings.fontSize, 16),
			editMode: this.editMode,
			onToggle: () => {
				Q.state.enabled ? Q.disable() : this.socket && Q.enable(this.socket, this.#a());
			},
			onPtt: () => {
				this.socket && Q.pushToTalk(this.socket, this.#a());
			},
			onStop: () => Q.finishRecording()
		}));
	}
});
