"use strict";const y=require("obsidian");var tr=Symbol.for("preact-signals");function Be(){if(H>1)H--;else{var r,e=!1;for((function(){var o=fe;for(fe=void 0;o!==void 0;){var i=o.S;if(i.v===o.v)for(var s=i.t;s!==void 0;s=s.x)s.i===o.i&&(s.i=i.i);o=o.o}})();ie!==void 0;){var t=ie;for(ie=void 0,pe++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&St(t))try{t.c()}catch(o){e||(r=o,e=!0)}t=n}}if(pe=0,H--,e)throw r}}var oe,m=void 0;function ge(r){var e=m,t=oe;m=void 0,oe=void 0;try{return r()}finally{m=e,oe=t}}var ie=void 0,H=0,pe=0,nt=0,fe=void 0,me=0;function bt(r){if(m!==void 0){var e=r.n;if(e===void 0||e.t!==m)return e={i:0,S:r,p:m.s,n:void 0,t:m,e:void 0,x:void 0,r:e},m.s!==void 0&&(m.s.n=e),m.s=e,r.n=e,32&m.f&&r.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=m.s,e.n=void 0,m.s.n=e,m.s=e),e}}function b(r,e){this.v=r,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}b.prototype.brand=tr;b.prototype.h=function(){return!0};b.prototype.S=function(r){var e=this,t=this.t;t!==r&&r.e===void 0&&(r.x=t,this.t=r,t!==void 0?t.e=r:ge(function(){var n;(n=e.W)==null||n.call(e)}))};b.prototype.U=function(r){var e=this;if(this.t!==void 0){var t=r.e,n=r.x;t!==void 0&&(t.x=n,r.e=void 0),n!==void 0&&(n.e=t,r.x=void 0),r===this.t&&(this.t=n,n===void 0&&ge(function(){var o;(o=e.Z)==null||o.call(e)}))}};b.prototype.subscribe=function(r){var e=this;return Tt(function(){var t=e.value;ge(function(){return r(t)})},{name:"sub"})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.toJSON=function(){return this.value};b.prototype.peek=function(){var r=this;return ge(function(){return r.value})};Object.defineProperty(b.prototype,"value",{get:function(){var r=bt(this);return r!==void 0&&(r.i=this.i),this.v},set:function(r){if(r!==this.v){if(pe>100)throw new Error("Cycle detected");(function(t){H!==0&&pe===0&&t.l!==nt&&(t.l=nt,fe={S:t,v:t.v,i:t.i,o:fe})})(this),this.v=r,this.i++,me++,H++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Be()}}}});function rr(r,e){return new b(r,e)}function St(r){for(var e=r.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function xt(r){for(var e=r.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){r.s=e;break}}}function kt(r){for(var e=r.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}r.s=t}function J(r,e){b.call(this,void 0,e),this.x=r,this.s=void 0,this.g=me-1,this.f=4}J.prototype=new b;J.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===me))return!0;if(this.g=me,this.f|=1,this.i>0&&!St(this))return this.f&=-2,!0;var r=m;try{xt(this),m=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return m=r,kt(this),this.f&=-2,!0};J.prototype.S=function(r){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}b.prototype.S.call(this,r)};J.prototype.U=function(r){if(this.t!==void 0&&(b.prototype.U.call(this,r),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};J.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var r=this.t;r!==void 0;r=r.x)r.t.N()}};Object.defineProperty(J.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var r=bt(this);if(this.h(),r!==void 0&&(r.i=this.i),16&this.f)throw this.v;return this.v}});function Et(r){var e=r.m;if(r.m=void 0,typeof e=="function"){H++;var t=m;m=void 0;try{e()}catch(n){throw r.f&=-2,r.f|=8,Fe(r),n}finally{m=t,Be()}}}function Fe(r){for(var e=r.s;e!==void 0;e=e.n)e.S.U(e);r.x=void 0,r.s=void 0,Et(r)}function nr(r){if(m!==this)throw new Error("Out-of-order effect");kt(this),m=r,this.f&=-2,8&this.f&&Fe(this),Be()}function ee(r,e){this.x=r,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,oe&&oe.push(this)}ee.prototype.c=function(){var r=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{r()}};ee.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Et(this),xt(this),H++;var r=m;return m=this,nr.bind(this,r)};ee.prototype.N=function(){2&this.f||(this.f|=2,this.u=ie,ie=this)};ee.prototype.d=function(){this.f|=8,1&this.f||Fe(this)};ee.prototype.dispose=function(){this.d()};function Tt(r,e){var t=new ee(r,e);try{t.c()}catch(o){throw t.d(),o}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}function or(r){const e=rr(structuredClone(r));return{settingsSignal:e,setSettings:t=>{e.value=t},patchSettings:t=>{e.value={...e.value,...t}},onSettingsChange:t=>Tt(t)}}const ot="docklet-word-viewer",S="Docklet Word Viewer",A="docklet-word-viewer-view",v="dck-word",ir=`${v}-o-shell`,sr=`${v}-c-view`,ar="docx",Ct=[ar];function de(r){return Ct.includes(r.toLowerCase())}const It="file-text",B="docklet-word-viewer-bridge",lr=5e3,cr=25,De=1,Pt=200,ur=15e3,Lt=1e3,Dt=12e4,it="http://localhost:62869/api/documenteditor/",Nt=1,Rt=.5,_t=2,dr=.1,st="layout",at="zoom",hr="docklet-word-viewer-open-active-word-file",pr="docklet-word-viewer-reload-active-word-file",fr=`${S}: could not open Word document`,mr=`${S}: only .docx documents are supported in the local viewer.`,gr=`${v}-root`,vr=`${v}-body`,yr=`${v}-iframe`,wr=`${v}-outline`,br=`${v}-outline-header`,Sr=`${v}-outline-list`,xr=`${v}-outline-button`,kr=`${v}-outline-empty`,Er=`${v}-search`,Tr=`${v}-search-input`,Cr=`${v}-search-status`,Ir=`${v}-state`,Pr=`${v}-state-title`,Lr=`${v}-state-msg`,Dr=`${v}-state-button`,Nr=`${v}-status`,Rr=`${v}-toolbar`,_r=`${v}-toolbar-button`,Or=`${v}-viewport`,Mr=`${v}-warning`;function Ar(r){const e=t=>{if(t instanceof Error)return t.message;if(typeof t=="object"&&t!==null)try{return JSON.stringify(t)}catch{return String(t)}return String(t)};return{getErrorMessage:e,logError:(t,n)=>console.error(`${r} ${t}: ${e(n)}`,n),logWarning:(t,n,o)=>{o===void 0?console.warn(`${r} ${t}: ${n}`):console.warn(`${r} ${t}: ${n}`,o)}}}const{logError:se,getErrorMessage:lt}=Ar("[docklet-word-viewer]");class w extends Error{constructor(e,t){super(t),this.code=e,this.name="WordViewerDomainError"}}const Br=new Set(["services.syncfusion.com","ej2.syncfusion.com","document.syncfusion.com"]);class Fr{async convertToSfdt(e,t){const n=Ot(t.syncfusionServiceUrl);if(!t.allowRemoteConversion||!n)throw new w("REMOTE_CONVERSION_DISABLED",Wr(t.syncfusionServiceUrl)??"Remote conversion is disabled.");const o=new FormData;o.append("files",new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),e.file.name);const i=new AbortController,s=window.setTimeout(()=>i.abort(),t.remoteConversionTimeoutMs);try{const a=await fetch(n,{method:"POST",body:o,signal:i.signal});if(!a.ok)throw new w("REMOTE_CONVERSION_FAILED",`Remote conversion failed with HTTP ${a.status}.`);const l=await a.text();if(!l.trim())throw new w("REMOTE_CONVERSION_FAILED","Remote conversion returned an empty SFDT document.");return l}catch(a){throw a instanceof w?a:new w("REMOTE_CONVERSION_FAILED",`Remote conversion failed: ${String(a)}`)}finally{window.clearTimeout(s)}}}function Ne(r){return r.allowRemoteConversion&&Ot(r.syncfusionServiceUrl)!==null}function Ot(r){return Mt(r).endpoint}function Wr(r){return Mt(r).error}function Mt(r){const e=r.trim();if(!e)return{endpoint:null,error:"A conversion service URL is required."};let t;try{t=new URL(e)}catch{return{endpoint:null,error:"Enter a valid HTTP or HTTPS conversion URL."}}return t.protocol!=="http:"&&t.protocol!=="https:"?{endpoint:null,error:"Conversion URLs must use HTTPS, or HTTP only for a loopback development service."}:t.username||t.password?{endpoint:null,error:"Conversion URLs must not contain embedded credentials."}:Br.has(t.hostname.toLowerCase())?{endpoint:null,error:"Known public Syncfusion service hosts are not permitted."}:t.protocol==="http:"&&!$r(t.hostname)?{endpoint:null,error:"HTTPS is required unless the conversion service is running on localhost."}:t.pathname.split("/").filter(Boolean).at(-1)?.toLowerCase()==="import"?(t.search="",t.hash="",{endpoint:t.toString(),error:null}):(t.pathname.endsWith("/")||(t.pathname=`${t.pathname}/`),{endpoint:new URL("Import",t).toString(),error:null})}function $r(r){const e=r.toLowerCase().replace(/^\[|\]$/g,"");return e==="localhost"||e==="::1"||/^127(?:\.\d{1,3}){3}$/u.test(e)}const U={defaultLayout:"paginated",maxFileSizeMb:cr,allowRemoteConversion:!1,preferRemoteConversion:!1,syncfusionServiceUrl:"",remoteConversionTimeoutMs:ur};function We(r){return{defaultLayout:zr(r?.defaultLayout,U.defaultLayout),maxFileSizeMb:ut(r?.maxFileSizeMb,De,Pt,U.maxFileSizeMb),allowRemoteConversion:ct(r?.allowRemoteConversion,U.allowRemoteConversion),preferRemoteConversion:ct(r?.preferRemoteConversion,U.preferRemoteConversion),syncfusionServiceUrl:Vr(r?.syncfusionServiceUrl,U.syncfusionServiceUrl),remoteConversionTimeoutMs:ut(r?.remoteConversionTimeoutMs,Lt,Dt,U.remoteConversionTimeoutMs)}}function ct(r,e){return typeof r=="boolean"?r:e}function Vr(r,e){return typeof r=="string"?r.trim():e}function zr(r,e){return r==="paginated"||r==="continuous"?r:e}function ut(r,e,t,n){return typeof r!="number"||!Number.isFinite(r)?n:Math.min(t,Math.max(e,Math.round(r)))}class Ur extends y.PluginSettingTab{constructor(e,t){super(e,t.settingsPlugin),this.host=t}display(){const{containerEl:e}=this;e.empty(),At(e,this.host,()=>this.display())}}function At(r,e,t){const n=e.settingsSignal.value;r.createEl("p",{text:"Configure Docklet Word Viewer rendering, file-size safety, and optional self-hosted remote conversion.",cls:"setting-item-description"});let o=null,i=null,s=null;const a=()=>{const l=!Ne(e.settingsSignal.value);i?.setDisabled(l),s?.setDisabled(l)};new y.Setting(r).setName("Default layout").setDesc("Use paginated pages for Word-like reading, or continuous for a denser Obsidian pane.").addDropdown(l=>l.addOption("paginated","Paginated").addOption("continuous","Continuous").setValue(n.defaultLayout).onChange(u=>ue(e,{defaultLayout:u==="continuous"?"continuous":"paginated"},t))),pt(r,"Maximum local file size","Block very large documents before parsing them in the Obsidian renderer process.",String(De),String(n.maxFileSizeMb),De,Pt,l=>dt(e,"maxFileSizeMb",l)),ht(r,"Allow remote conversion","Enable posting documents to a configured self-hosted Syncfusion-compatible conversion service. Leave off to keep documents local.",n.allowRemoteConversion,l=>{const u={allowRemoteConversion:l};l&&!e.settingsSignal.value.syncfusionServiceUrl.trim()&&(u.syncfusionServiceUrl=it),ue(e,u),u.syncfusionServiceUrl&&o?.setValue(u.syncfusionServiceUrl),a()}),o=Hr(r,"Syncfusion service URL","Required for remote conversion. Your document contents are uploaded to this service. Use HTTPS; HTTP is allowed only for localhost/127.0.0.0/8/::1 development services. Known public Syncfusion hosts are blocked.",it,n.syncfusionServiceUrl,l=>{ue(e,{syncfusionServiceUrl:l}),a()}),i=ht(r,"Prefer remote conversion","Use the configured self-hosted converter before the local parser. Otherwise it is only used as a fallback after local parsing fails.",n.preferRemoteConversion,l=>ue(e,{preferRemoteConversion:l},t)),s=pt(r,"Remote conversion timeout","Abort self-hosted conversion requests after this many milliseconds.","15000",String(n.remoteConversionTimeoutMs),Lt,Dt,l=>dt(e,"remoteConversionTimeoutMs",l)),a()}function ue(r,e,t){r.patchSettings(We({...r.settingsSignal.value,...e})),t?.()}function dt(r,e,t){if(t.trim()==="")return null;const n=Number(t);if(!Number.isFinite(n))return null;const o=We({...r.settingsSignal.value,[e]:n});return r.patchSettings(o),o[e]}function ht(r,e,t,n,o){let i=null;return new y.Setting(r).setName(e).setDesc(t).addToggle(s=>(i=s,s.setValue(n).onChange(o))),i}function Hr(r,e,t,n,o,i){let s=null;return new y.Setting(r).setName(e).setDesc(t).addText(a=>(s=a,a.setPlaceholder(n).setValue(o).onChange(i))),s}function pt(r,e,t,n,o,i,s,a){let l=null;return new y.Setting(r).setName(e).setDesc(t).addText(u=>(l=u,u.inputEl.type="number",u.inputEl.min=String(i),u.inputEl.max=String(s),u.inputEl.step="1",u.setPlaceholder(n).setValue(o).onChange(g=>{const c=a(g);c!==null&&String(c)!==g.trim()&&u.setValue(String(c))}))),l}const jr=new Set(["allow-downloads","allow-forms","allow-modals","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin","allow-scripts"]);function Zr(r){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`;return`${r}-${e}`}function Gr(r){const e=[...new Set(r.map(t=>t.trim()).filter(Boolean))];for(const t of e)if(!jr.has(t))throw new Error(`Unsupported iframe sandbox token: ${t}`);return e.sort().join(" ")}function Xr(r,e){if(typeof r!="object"||r===null)return!1;const t=r;return t.protocolVersion===1&&t.channel===e&&typeof t.bridgeId=="string"&&t.bridgeId.length>0&&typeof t.type=="string"}const qr=String.raw`
:root {
	color-scheme: light dark;
	--word-bg: #f4f5f7; --word-page: #fff; --word-text: #1f2328; --word-muted: #687076;
	--word-border: #d8dee4; --word-table-border: #b7bec7; --word-accent: #2563eb;
	--word-mark: #fff59d; --word-mark-active: #f59e0b; --word-zoom: 1;
}
body.is-dark {
	--word-bg: #1e1f22; --word-page: #26282d; --word-text: #e6e8eb; --word-muted: #a7adb5;
	--word-border: #3f444d; --word-table-border: #5a616c; --word-accent: #8ab4ff;
	--word-mark: #6b5f16; --word-mark-active: #b45309;
}
html, body { width: 100%; min-height: 100%; margin: 0; background: var(--word-bg); color: var(--word-text); font: 16px/1.55 ui-serif, Georgia, "Times New Roman", serif; }
body { box-sizing: border-box; padding: 24px; }
body.continuous { padding: 24px 28px; }
.document-shell { zoom: var(--word-zoom); }
.document { max-width: 816px; margin: 0 auto; }
.page { box-sizing: border-box; min-height: 1056px; padding: 72px; background: var(--word-page); border: 1px solid var(--word-border); box-shadow: 0 12px 34px rgba(15, 23, 42, 0.14); }
body.continuous .document { max-width: 920px; }
body.continuous .page { min-height: 0; padding: 34px 40px; box-shadow: none; }
.paragraph { position: relative; margin: 0 0 0.78em; white-space: pre-wrap; tab-size: 4; }
.align-center { text-align: center; } .align-right { text-align: right; } .align-justify { text-align: justify; }
.heading-1, .heading-2, .heading-3, .page-break, .unsupported, .meta-section, .section-title, .note-marker, .comment-marker {
	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.heading-1, .heading-2, .heading-3 { font-weight: 700; }
.heading-1 { margin: 0 0 0.55em; font-size: 1.9rem; line-height: 1.2; }
.heading-2 { margin: 1.2em 0 0.5em; font-size: 1.42rem; line-height: 1.25; font-weight: 650; }
.heading-3 { margin: 1em 0 0.45em; font-size: 1.15rem; line-height: 1.3; font-weight: 650; }
.list-paragraph { display: grid; grid-template-columns: minmax(1.8rem, max-content) 1fr; column-gap: 0.55rem; }
.list-marker { color: var(--word-muted); text-align: right; white-space: nowrap; }
.word-table { width: 100%; margin: 1em 0; border-collapse: collapse; }
.word-table td { min-width: 48px; padding: 7px 9px; border: 1px solid var(--word-table-border); vertical-align: top; }
.word-table .paragraph:last-child { margin-bottom: 0; }
.word-image { display: block; max-width: 100%; height: auto; margin: 0.65em 0; }
.page-break { display: flex; align-items: center; gap: 10px; margin: 30px 0; color: var(--word-muted); font-size: 12px; text-transform: uppercase; letter-spacing: 0; }
.page-break::before, .page-break::after { content: ""; flex: 1; border-top: 1px dashed var(--word-border); }
.unsupported { margin: 1em 0; padding: 10px 12px; border: 1px solid var(--word-border); border-radius: 6px; color: var(--word-muted); font-size: 13px; }
.meta-section { margin: 0 0 20px; padding: 0 0 14px; border-bottom: 1px solid var(--word-border); color: var(--word-muted); font-size: 12px; }
.header-footer, .notes, .comments { margin-top: 28px; padding-top: 18px; border-top: 1px solid var(--word-border); }
.section-title { margin: 0 0 10px; color: var(--word-muted); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0; }
.note-item, .comment-item { margin: 0 0 12px; font-size: 0.92rem; }
.note-marker, .comment-marker { color: var(--word-accent); font-size: 0.72em; font-weight: 700; vertical-align: super; }
a { color: var(--word-accent); text-decoration: underline; }
.word-authored-color { color: var(--word-authored-color); }
body.is-dark .word-authored-color.word-low-dark-contrast { color: var(--word-text); }
body.is-dark .word-light-surface .word-authored-color.word-low-dark-contrast,
body.is-dark .word-authored-color.word-low-dark-contrast.word-light-surface { color: var(--word-authored-color); }
mark.search-match { background: var(--word-mark); color: inherit; padding: 0 1px; border-radius: 2px; }
mark.search-match.is-active { background: var(--word-mark-active); color: #111827; }
`,Kr=String.raw`
const CHANNEL = 'docklet-word-viewer-bridge';
const PROTOCOL_VERSION = 1;
const BRIDGE_ID = __WORD_VIEWER_BRIDGE_ID__;
const page = document.getElementById('page');
let currentModel = null, currentQuery = '', activeSearchIndex = 0, currentSearchTotal = 0, renderSearchTotal = 0;
const messageHandlers = {
	loadDocument(message) {
		currentModel = message.document;
		applyTheme(message.isDark);
		applyLayout(message.layout);
		renderDocument();
	},
	themeChanged: (message) => applyTheme(message.isDark),
	layoutChanged: (message) => applyLayout(message.layout),
	zoomChanged: (message) => applyZoom(message.zoom),
	searchChanged(message) {
		currentQuery = String(message.query || '');
		activeSearchIndex = 0;
		renderDocument();
	},
	searchNavigate(message) {
		if (currentSearchTotal > 0) {
			activeSearchIndex = message.direction === 'previous'
				? (activeSearchIndex - 1 + currentSearchTotal) % currentSearchTotal
				: (activeSearchIndex + 1) % currentSearchTotal;
		}
		renderDocument();
	},
	scrollToBlock: (message) => scrollToBlock(message.blockId),
};

window.addEventListener('message', (event) => {
	const message = event.data;
	if (!message || message.protocolVersion !== PROTOCOL_VERSION || message.channel !== CHANNEL || message.bridgeId !== BRIDGE_ID) return;
	try {
		messageHandlers[message.type]?.(message);
	} catch (error) {
		post('renderError', { message: String(error && error.message ? error.message : error) });
	}
});

function post(type, payload) {
	parent.postMessage({ protocolVersion: PROTOCOL_VERSION, channel: CHANNEL, bridgeId: BRIDGE_ID, type, ...(payload || {}) }, '*');
}

function el(tag, className, text) {
	const element = document.createElement(tag);
	if (className) element.className = className;
	if (text !== undefined) element.textContent = text;
	return element;
}

function appendBlocks(parent, blocks) {
	for (const block of blocks || []) parent.appendChild(renderBlock(block));
}

function applyTheme(isDark) { document.body.classList.toggle('is-dark', Boolean(isDark)); }
function applyLayout(layout) { document.body.classList.toggle('continuous', layout === 'continuous'); }
function applyZoom(zoom) {
	const value = Number.isFinite(zoom) ? Math.min(2, Math.max(0.5, zoom)) : 1;
	document.documentElement.style.setProperty('--word-zoom', String(value));
}

function renderDocument() {
	page.textContent = '';
	if (!currentModel) {
		postSearchResult(0, -1);
		return;
	}
	const metadata = renderMetadata(currentModel.metadata);
	if (metadata) page.appendChild(metadata);
	renderHeaderFooter(currentModel.headers, 'Headers');
	appendBlocks(page, currentModel.blocks);
	renderHeaderFooter(currentModel.footers, 'Footers');
	renderEntries(currentModel.footnotes, 'Footnotes', 'notes', 'note-item', (note) => [note.id + ' ', 'note-marker']);
	renderEntries(currentModel.endnotes, 'Endnotes', 'notes', 'note-item', (note) => [note.id + ' ', 'note-marker']);
	renderEntries(currentModel.comments, 'Comments', 'comments', 'comment-item', (comment) => [(comment.author || 'Comment') + ' #' + comment.id + ' ', 'comment-marker']);
	finalizeSearch();
}

function renderMetadata(metadata) {
	if (!metadata) return null;
	const items = [metadata.title, metadata.creator && 'Author: ' + metadata.creator, metadata.modified && 'Modified: ' + metadata.modified].filter(Boolean);
	if (!items.length) return null;
	return el('section', 'meta-section', items.join(' · '));
}

function titledSection(className, title) {
	const section = el('section', className);
	section.appendChild(el('h2', 'section-title', title));
	return section;
}

function renderHeaderFooter(parts, title) {
	if (!parts?.length) return;
	const section = titledSection('header-footer', title);
	for (const part of parts) appendBlocks(section, part.blocks);
	page.appendChild(section);
}

function renderEntries(entries, title, sectionClass, itemClass, markerFor) {
	if (!entries?.length) return;
	const section = titledSection(sectionClass, title);
	for (const entry of entries) {
		const item = el('div', itemClass);
		const [markerText, markerClass] = markerFor(entry);
		item.appendChild(el('span', markerClass, markerText));
		appendBlocks(item, entry.blocks);
		section.appendChild(item);
	}
	page.appendChild(section);
}

function renderBlock(block) {
	if (block.type === 'table') return renderTable(block);
	if (block.type === 'pageBreak') return renderPageBreak(block);
	if (block.type === 'unsupported') return renderUnsupported(block);
	return renderParagraph(block);
}

function renderParagraph(block) {
	const paragraph = el('p', paragraphClass(block));
	paragraph.dataset.blockId = block.id;
	applyParagraphStyle(paragraph, block);
	if (block.list) {
		paragraph.appendChild(el('span', 'list-marker', block.list.label));
		const content = el('span', 'list-content');
		appendInlines(content, block.inlines);
		paragraph.appendChild(content);
	} else {
		appendInlines(paragraph, block.inlines);
	}
	if (!paragraph.hasChildNodes()) paragraph.appendChild(el('br'));
	return paragraph;
}

function appendInlines(parent, inlines) {
	for (const inline of inlines || []) parent.appendChild(renderInline(inline));
}

function renderInline(inline) {
	if (inline.type === 'break') return el('br');
	if (inline.type === 'pageBreak') return renderPageBreak({ id: '' });
	if (inline.type === 'image') return renderImage(inline);
	if (inline.type === 'noteReference') return el('sup', 'note-marker', inline.noteType === 'footnote' ? '[' + inline.noteId + ']' : '[e' + inline.noteId + ']');
	if (inline.type === 'commentReference') return el('sup', 'comment-marker', '[c' + inline.commentId + ']');
	return renderTextInline(inline);
}

function renderTextInline(inline) {
	const element = inline.hyperlink ? el('a') : el('span');
	if (inline.hyperlink) {
		element.href = inline.hyperlink;
		element.target = '_blank';
		element.rel = 'noopener noreferrer';
	}
	const style = element.style;
	if (inline.bold) style.fontWeight = '700';
	if (inline.italic) style.fontStyle = 'italic';
	if (inline.underline) style.textDecoration = 'underline';
	if (inline.strikethrough) style.textDecoration = appendDecoration(style.textDecoration, 'line-through');
	if (inline.superscript || inline.subscript) {
		style.verticalAlign = inline.superscript ? 'super' : 'sub';
		style.fontSize = '0.75em';
	}
	if (inline.color) {
		style.setProperty('--word-authored-color', inline.color);
		element.classList.add('word-authored-color');
		if (hasLowDarkContrast(inline.color)) element.classList.add('word-low-dark-contrast');
	}
	if (inline.highlight) {
		style.backgroundColor = inline.highlight;
		if (isLightSurface(inline.highlight)) element.classList.add('word-light-surface');
	}
	if (inline.fontSizePt) style.fontSize = inline.fontSizePt + 'pt';
	appendSearchText(element, inline.text || '');
	return element;
}

function appendSearchText(parent, text) {
	if (!currentQuery) {
		parent.appendChild(document.createTextNode(text));
		return;
	}
	const lowerText = text.toLocaleLowerCase(), lowerQuery = currentQuery.toLocaleLowerCase();
	let offset = 0;
	while (offset < text.length) {
		const index = lowerText.indexOf(lowerQuery, offset);
		if (index === -1) {
			parent.appendChild(document.createTextNode(text.slice(offset)));
			break;
		}
		if (index > offset) parent.appendChild(document.createTextNode(text.slice(offset, index)));
		const mark = el('mark', 'search-match', text.slice(index, index + currentQuery.length));
		mark.dataset.searchIndex = String(renderSearchTotal);
		if (renderSearchTotal === activeSearchIndex) mark.classList.add('is-active');
		parent.appendChild(mark);
		renderSearchTotal++;
		offset = index + currentQuery.length;
	}
}

function appendDecoration(current, decoration) {
	return current && current !== 'none' ? current + ' ' + decoration : decoration;
}

function relativeLuminance(color) {
	const match = /^#([0-9a-f]{6})$/i.exec(String(color || ''));
	if (!match) return null;
	const channels = [0, 2, 4].map((offset) => Number.parseInt(match[1].slice(offset, offset + 2), 16) / 255)
		.map((value) => value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4));
	return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function hasLowDarkContrast(color) {
	const foreground = relativeLuminance(color), background = relativeLuminance('#26282D');
	if (foreground === null || background === null) return false;
	return (Math.max(foreground, background) + 0.05) / (Math.min(foreground, background) + 0.05) < 4.5;
}

function isLightSurface(color) {
	const luminance = relativeLuminance(color);
	return luminance !== null && luminance >= 0.45;
}

function paragraphClass(block) {
	const classes = ['paragraph'];
	if (block.list) classes.push('list-paragraph', 'list-level-' + block.list.level);
	const level = block.headingLevel || headingLevelFromStyle(block.styleName || block.styleLabel || '');
	if (level >= 1 && level <= 3) classes.push('heading-' + level);
	if (block.alignment) classes.push('align-' + block.alignment);
	return classes.join(' ');
}

function applyParagraphStyle(paragraph, block) {
	const format = block.format || {};
	setPointStyle(paragraph, 'marginTop', format.marginBeforePt);
	setPointStyle(paragraph, 'marginBottom', format.marginAfterPt);
	if (!block.list) setPointStyle(paragraph, 'marginLeft', format.indentLeftPt);
	setPointStyle(paragraph, 'textIndent', format.firstLineIndentPt);
	if (format.indentHangingPt !== null && format.indentHangingPt !== undefined) paragraph.style.textIndent = '-' + format.indentHangingPt + 'pt';
}

function setPointStyle(element, property, value) {
	if (value !== null && value !== undefined) element.style[property] = value + 'pt';
}

function headingLevelFromStyle(styleName) {
	const match = /^heading([1-6])$/.exec(String(styleName || '').replace(/\s+/g, '').toLowerCase());
	return match ? Number(match[1]) : null;
}

function renderImage(inline) {
	const image = el('img', 'word-image');
	image.src = inline.src;
	image.alt = inline.altText || 'Embedded image';
	if (inline.widthPx) image.style.width = inline.widthPx + 'px';
	if (inline.heightPx) image.style.height = inline.heightPx + 'px';
	return image;
}

function renderTable(block) {
	const table = el('table', 'word-table');
	table.dataset.blockId = block.id;
	const body = el('tbody');
	for (const row of block.rows || []) {
		const tr = el('tr');
		for (const cell of row.cells || []) {
			const td = el('td');
			if (cell.colSpan > 1) td.colSpan = cell.colSpan;
			if (cell.rowSpan > 1) td.rowSpan = cell.rowSpan;
			if (cell.shading) {
				td.style.backgroundColor = cell.shading;
				if (isLightSurface(cell.shading)) td.classList.add('word-light-surface');
			}
			if (cell.widthPt) td.style.width = cell.widthPt + 'pt';
			appendBlocks(td, cell.blocks);
			tr.appendChild(td);
		}
		body.appendChild(tr);
	}
	table.appendChild(body);
	return table;
}

function renderPageBreak(block) {
	const element = el('div', 'page-break', 'Page break');
	if (block.id) element.dataset.blockId = block.id;
	return element;
}

function renderUnsupported(block) {
	const element = el('div', 'unsupported', block.label + ': ' + block.detail);
	element.dataset.blockId = block.id;
	return element;
}

function finalizeSearch() {
	currentSearchTotal = renderSearchTotal;
	if (currentSearchTotal === 0) {
		activeSearchIndex = 0;
		postSearchResult(0, -1);
		renderSearchTotal = 0;
		return;
	}
	if (activeSearchIndex >= currentSearchTotal) activeSearchIndex = currentSearchTotal - 1;
	const active = document.querySelector('mark.search-match.is-active');
	if (active) active.scrollIntoView({ block: 'center', inline: 'nearest' });
	postSearchResult(currentSearchTotal, activeSearchIndex);
	renderSearchTotal = 0;
}

	function postSearchResult(total, active) { post('searchResult', { total, active }); }
	function scrollToBlock(blockId) {
		const id = String(blockId || '');
		const escaped = window.CSS && typeof window.CSS.escape === 'function'
			? window.CSS.escape(id)
			: id.replace(/[^a-zA-Z0-9_-]/g, '\\$&');
		const target = page.querySelector('[data-block-id="' + escaped + '"]');
		if (target) target.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
	}

post('ready');
`;function Yr(r=""){const e=Kr.replace("__WORD_VIEWER_BRIDGE_ID__",JSON.stringify(r));return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${qr}</style></head><body><div class="document-shell"><main class="document"><article id="page" class="page"></article></main></div><script>${e}<\/script></body></html>`}function Qr(r){return!Jr(r)||!Xr(r,B)?!1:r.type==="ready"||r.type==="renderError"&&typeof r.message=="string"||r.type==="searchResult"&&typeof r.total=="number"&&typeof r.active=="number"}function Jr(r){return typeof r=="object"&&r!==null}class en{constructor(e,t,n=Zr("word-viewer")){this.container=e,this.callbacks=t,this.bridgeId=n,this.hostWindow=e.ownerDocument.defaultView??window}iframe=null;hostWindow;ready=!1;readyResolve=null;readyReject=null;readyTimer=null;onMessage=e=>this.handleMessage(e);mount(){return this.destroy(),this.iframe=this.container.ownerDocument.createElement("iframe"),this.iframe.className=yr,this.iframe.setAttribute("sandbox",Gr(["allow-scripts"])),this.hostWindow.addEventListener("message",this.onMessage),this.iframe.srcdoc=Yr(this.bridgeId),this.container.appendChild(this.iframe),new Promise((e,t)=>{this.readyResolve=e,this.readyReject=t,this.readyTimer=setTimeout(()=>{this.readyTimer=null,this.readyResolve=null,this.readyReject=null,t(new w("BRIDGE_TIMEOUT","Word viewer iframe did not become ready."))},lr)})}loadDocument(e,t,n){this.post({protocolVersion:1,channel:B,bridgeId:this.bridgeId,type:"loadDocument",document:e,isDark:t,layout:n})}setTheme(e){this.post({protocolVersion:1,channel:B,bridgeId:this.bridgeId,type:"themeChanged",isDark:e})}setLayout(e){this.post({protocolVersion:1,channel:B,bridgeId:this.bridgeId,type:"layoutChanged",layout:e})}setZoom(e){this.post({protocolVersion:1,channel:B,bridgeId:this.bridgeId,type:"zoomChanged",zoom:e})}setSearch(e){this.post({protocolVersion:1,channel:B,bridgeId:this.bridgeId,type:"searchChanged",query:e})}navigateSearch(e){this.post({protocolVersion:1,channel:B,bridgeId:this.bridgeId,type:"searchNavigate",direction:e})}scrollToBlock(e){this.post({protocolVersion:1,channel:B,bridgeId:this.bridgeId,type:"scrollToBlock",blockId:e})}destroy(){this.hostWindow.removeEventListener("message",this.onMessage),this.clearReadyTimer(),this.readyReject?.(new w("BRIDGE_DESTROYED","Word viewer iframe was destroyed before it became ready.")),this.iframe?.parentElement&&this.iframe.parentElement.removeChild(this.iframe),this.iframe=null,this.ready=!1,this.readyResolve=null,this.readyReject=null}handleMessage(e){!this.iframe||e.source!==this.iframe.contentWindow||Qr(e.data)&&e.data.bridgeId===this.bridgeId&&this.dispatch(e.data)}dispatch(e){if(e.type==="ready"){this.ready=!0,this.clearReadyTimer(),this.readyResolve?.(),this.readyResolve=null,this.readyReject=null;return}e.type==="renderError"&&this.callbacks.onError(e.message),e.type==="searchResult"&&this.callbacks.onSearchResult({total:e.total,active:e.active})}post(e){!this.iframe?.contentWindow||!this.ready||this.iframe.contentWindow.postMessage(e,"*")}clearReadyTimer(){this.readyTimer!==null&&(clearTimeout(this.readyTimer),this.readyTimer=null)}}class tn{bridge=null;async mount(e,t,n,o,i,s,a){this.destroy(),e.empty(),this.bridge=new en(e,t),await this.bridge.mount(),this.bridge.loadDocument(n,o,i),this.bridge.setZoom(s),this.bridge.setSearch(a)}setTheme(e){this.bridge?.setTheme(e)}setLayout(e){this.bridge?.setLayout(e)}setZoom(e){this.bridge?.setZoom(e)}setSearch(e){this.bridge?.setSearch(e)}navigateSearch(e){this.bridge?.navigateSearch(e)}scrollToBlock(e){this.bridge?.scrollToBlock(e)}destroy(){this.bridge?.destroy(),this.bridge=null}}function Bt(r){return r.isDarkMode?.()??document.body.classList.contains("theme-dark")}class X extends y.ItemView{constructor(e,t,n,o){super(e),this.repository=t,this.loader=n,this.settingsSignal=o,this.layout=o.value.defaultLayout}currentFile=null;bridge=new tn;model=null;statusEl=null;warningEl=null;outlineEl=null;iframeHostEl=null;layoutButtonEl=null;searchInputEl=null;searchStatusEl=null;layout;zoom=Nt;outlineVisible=!0;loadSequence=0;getViewType(){return A}getDisplayText(){return this.currentFile?this.currentFile.basename:S}getIcon(){return It}getDocumentPath(){return this.currentFile?.path??null}async onClose(){this.invalidateCurrentLoad(),this.destroyBridge()}async reloadDocument(){await this.loadCurrentDocument()}updateTheme(e){this.bridge.setTheme(e)}async onOpen(){this.buildDom(),this.currentFile?await this.loadCurrentDocument():this.showEmpty()}async setState(e,t){await super.setState(e,t);const n=rn(e[st],this.settingsSignal.value.defaultLayout),o=nn(e[at]),i=this.layout!==n,s=this.zoom!==o;this.layout=n,this.zoom=o,this.updateLayoutButton();const a=e.file;if(typeof a!="string"){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showEmpty();return}if(this.currentFile?.path===a&&this.model){i&&this.bridge.setLayout(this.layout),s&&this.bridge.setZoom(this.zoom),this.showDocumentStatus(this.model);return}const l=this.repository.resolveWordFile(a);if(!l){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showError("Word document was not found.",()=>void this.setState(e,t));return}this.currentFile?.path!==l.path&&(this.model=null),this.currentFile=l,await this.loadCurrentDocument()}getState(){return{...super.getState(),...this.currentFile?{file:this.currentFile.path}:{},[st]:this.layout,[at]:this.zoom}}refreshSettings(){this.model&&this.showDocumentStatus(this.model)}async loadCurrentDocument(){if(!this.currentFile){this.invalidateCurrentLoad(),this.showEmpty();return}const e=this.currentFile,t=++this.loadSequence;try{this.showLoading();const n=this.settingsSignal.value,o=await this.repository.readWordFile(e,n.maxFileSizeMb);if(!this.isCurrentLoad(t,e))return;const i=await this.loader.load(o,n);if(!this.isCurrentLoad(t,e)||(this.model=i,await this.mountBridge(this.model),!this.isCurrentLoad(t,e)))return;this.showDocumentStatus(this.model)}catch(n){if(!this.isCurrentLoad(t,e))return;se("WordViewerView.loadCurrentDocument",n),new y.Notice(`${fr} - ${lt(n)}`),this.showError(lt(n),()=>void this.loadCurrentDocument())}}async mountBridge(e){this.iframeHostEl&&(this.destroyBridge(),await this.bridge.mount(this.iframeHostEl,{onError:t=>this.showError(t,()=>void this.loadCurrentDocument()),onSearchResult:t=>this.showSearchResult(t)},e,Bt(this.app),this.layout,this.zoom,this.searchInputEl?.value??""))}buildDom(){const e=this.containerEl.children[1];if(!(e instanceof HTMLElement))return;e.empty(),e.addClass(gr),e.addClass(ir,sr);const t=e.createDiv({cls:Rr});this.buildToolbar(t),this.statusEl=t.createDiv({cls:Nr}),this.warningEl=e.createDiv({cls:Mr});const n=e.createDiv({cls:vr});this.outlineEl=n.createDiv({cls:wr}),this.iframeHostEl=n.createDiv({cls:Or})}buildToolbar(e){for(const n of this.toolbarActions()){const o=this.createToolbarButton(e,n);n.label===this.layoutButtonLabel()&&(this.layoutButtonEl=o)}const t=e.createDiv({cls:Er});this.searchInputEl=t.createEl("input",{cls:Tr,attr:{type:"search",placeholder:"Search"}}),this.searchInputEl.addEventListener("input",()=>this.bridge.setSearch(this.searchInputEl?.value??"")),this.searchInputEl.addEventListener("keydown",n=>{n.key==="Enter"&&this.bridge.navigateSearch(n.shiftKey?"previous":"next")}),this.createToolbarButton(t,{icon:"chevron-up",label:"Previous search result",onClick:()=>this.bridge.navigateSearch("previous")}),this.createToolbarButton(t,{icon:"chevron-down",label:"Next search result",onClick:()=>this.bridge.navigateSearch("next")}),this.searchStatusEl=t.createDiv({cls:Cr,text:"0/0"})}toolbarActions(){return[{icon:"refresh-cw",label:"Reload document",onClick:()=>{this.reloadDocument()}},{icon:this.layoutButtonIcon(),label:this.layoutButtonLabel(),onClick:()=>this.toggleLayout()},{icon:"zoom-out",label:"Zoom out",onClick:()=>this.changeZoom(-.1)},{icon:"zoom-in",label:"Zoom in",onClick:()=>this.changeZoom(dr)},{icon:"list-tree",label:"Toggle document outline",onClick:()=>this.toggleOutline()},{icon:"copy",label:"Copy document text",onClick:()=>{this.copyDocumentText()}},{icon:"external-link",label:"Open in default app",onClick:()=>{this.openExternally()}}]}toggleLayout(){this.layout=this.layout==="paginated"?"continuous":"paginated",this.bridge.setLayout(this.layout),this.updateLayoutButton(),this.model&&this.showDocumentStatus(this.model)}changeZoom(e){this.zoom=Math.round(Math.min(_t,Math.max(Rt,this.zoom+e))*100)/100,this.bridge.setZoom(this.zoom),this.model&&this.showDocumentStatus(this.model)}toggleOutline(){this.outlineVisible=!this.outlineVisible,this.outlineEl?.toggle(this.outlineVisible)}createToolbarButton(e,t){const n=e.createEl("button",{cls:_r});return n.type="button",ft(n,t.icon,t.label),n.addEventListener("click",t.onClick),n}updateLayoutButton(){this.layoutButtonEl&&ft(this.layoutButtonEl,this.layoutButtonIcon(),this.layoutButtonLabel())}layoutButtonIcon(){return this.layout==="paginated"?"rows-3":"files"}layoutButtonLabel(){return this.layout==="paginated"?"Switch to continuous layout":"Switch to paginated layout"}showDocumentStatus(e){if(this.statusEl?.setText(`${e.stats.paragraphs} paragraphs · ${e.stats.tables} tables · ${e.stats.images} images · ${e.stats.links} links · ${Math.round(this.zoom*100)}%`),this.warningEl){const t=[...e.warnings,...e.unsupportedFeatures.map(n=>`Unsupported: ${n}.`)];this.warningEl.empty(),t.length>0?(this.warningEl.setText(t.join(" ")),this.warningEl.show()):this.warningEl.hide()}this.renderOutline(e)}renderOutline(e){if(!this.outlineEl)return;if(this.outlineEl.empty(),this.outlineEl.toggle(this.outlineVisible),this.outlineEl.createDiv({cls:br,text:"Outline"}),e.outline.length===0){this.outlineEl.createDiv({cls:kr,text:"No headings found."});return}const t=this.outlineEl.createDiv({cls:Sr});for(const n of e.outline){const o=t.createEl("button",{cls:xr,text:n.title});o.type="button",o.dataset.level=String(n.level),o.addEventListener("click",()=>this.bridge.scrollToBlock(n.id))}}showSearchResult(e){this.searchStatusEl?.setText(e.total>0?`${e.active+1}/${e.total}`:"0/0")}async copyDocumentText(){if(!this.model){new y.Notice(`${S}: no document text to copy.`);return}try{await navigator.clipboard.writeText(this.model.plainText),new y.Notice(`${S}: copied document text.`)}catch(e){se("WordViewerView.copyDocumentText",e),new y.Notice(`${S}: could not copy document text.`)}}async openExternally(){if(!this.currentFile){new y.Notice(`${S}: no Word document open.`);return}try{const e=this.app.vault.adapter.getFullPath?.(this.currentFile.path);if(!e){new y.Notice(`${S}: cannot resolve local file path.`);return}const n=await require("electron").shell?.openPath(e);typeof n=="string"&&n.length>0&&new y.Notice(`${S}: ${n}`)}catch(e){se("WordViewerView.openExternally",e),new y.Notice(`${S}: could not open document externally.`)}}showEmpty(){this.destroyBridge(),this.showState("No Word document open","Open a .docx file from the file explorer or command palette.")}showLoading(){this.showState("Loading Word document","Reading and rendering local DOCX content.")}showError(e,t){this.destroyBridge();const n=[{label:"Try again",onClick:t}];this.model&&n.push({label:"Copy document text",onClick:()=>{this.copyDocumentText()}}),this.currentFile&&n.push({label:"Open in default app",onClick:()=>{this.openExternally()}}),this.showState("Could not render Word document",e,n)}showState(e,t,n=[]){if(this.statusEl?.setText(""),this.warningEl?.hide(),this.outlineEl?.empty(),!this.iframeHostEl)return;this.iframeHostEl.empty();const o=this.iframeHostEl.createDiv({cls:Ir});o.createDiv({cls:Pr,text:e}),o.createDiv({cls:Lr,text:t});for(const i of n)o.createEl("button",{cls:Dr,text:i.label}).addEventListener("click",i.onClick)}destroyBridge(){this.bridge.destroy()}invalidateCurrentLoad(){this.loadSequence++}isCurrentLoad(e,t){return e===this.loadSequence&&this.currentFile?.path===t.path}}function ft(r,e,t){r.empty(),y.setIcon(r,e),r.setAttribute("aria-label",t),r.setAttribute("title",t)}function rn(r,e){return r==="continuous"||r==="paginated"?r:e}function nn(r){return typeof r!="number"||!Number.isFinite(r)?Nt:Math.round(Math.min(_t,Math.max(Rt,r))*100)/100}function on(r){return r.trim().toLowerCase().endsWith(".docx")?"docx":null}function sn(){return{entries:0,expandedBytes:0}}function an(r,e,t){const n=Number.isFinite(e)&&e>0?e:0;return r.entries+=1,r.expandedBytes+=n,r.entries>t.maxEntries?"too-many-entries":r.expandedBytes>t.maxExpandedBytes?"too-many-expanded-bytes":n>t.maxEntryBytes?"entry-too-large":"ok"}function ln(r){const e=r.replace(/\\/gu,"/").replace(/^\.\//u,"");if(!e||e.startsWith("/")||e.includes("\0"))return null;const t=e.split("/");return t.some(n=>n===".."||n==="")?null:t.filter(n=>n!==".").join("/")}var E=Uint8Array,K=Uint16Array,cn=Int32Array,Ft=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wt=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),un=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$t=function(r,e){for(var t=new K(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var o=new cn(t[30]),n=1;n<30;++n)for(var i=t[n];i<t[n+1];++i)o[i]=i-t[n]<<5|n;return{b:t,r:o}},Vt=$t(Ft,2),zt=Vt.b,dn=Vt.r;zt[28]=258,dn[258]=28;var hn=$t(Wt,0),pn=hn.b,Re=new K(32768);for(var f=0;f<32768;++f){var M=(f&43690)>>1|(f&21845)<<1;M=(M&52428)>>2|(M&13107)<<2,M=(M&61680)>>4|(M&3855)<<4,Re[f]=((M&65280)>>8|(M&255)<<8)>>1}var ae=(function(r,e,t){for(var n=r.length,o=0,i=new K(e);o<n;++o)r[o]&&++i[r[o]-1];var s=new K(e);for(o=1;o<e;++o)s[o]=s[o-1]+i[o-1]<<1;var a;if(t){a=new K(1<<e);var l=15-e;for(o=0;o<n;++o)if(r[o])for(var u=o<<4|r[o],g=e-r[o],c=s[r[o]-1]++<<g,p=c|(1<<g)-1;c<=p;++c)a[Re[c]>>l]=u}else for(a=new K(n),o=0;o<n;++o)r[o]&&(a[o]=Re[s[r[o]-1]++]>>15-r[o]);return a}),le=new E(288);for(var f=0;f<144;++f)le[f]=8;for(var f=144;f<256;++f)le[f]=9;for(var f=256;f<280;++f)le[f]=7;for(var f=280;f<288;++f)le[f]=8;var Ut=new E(32);for(var f=0;f<32;++f)Ut[f]=5;var fn=ae(le,9,1),mn=ae(Ut,5,1),Ce=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},I=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Ie=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},gn=function(r){return(r+7)/8|0},$e=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new E(r.subarray(e,t))},vn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],k=function(r,e,t){var n=new Error(e||vn[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,k),!t)throw n;return n},yn=function(r,e,t,n){var o=r.length,i=n?n.length:0;if(!o||e.f&&!e.l)return t||new E(0);var s=!t,a=s||e.i!=2,l=e.i;s&&(t=new E(o*3));var u=function(et){var tt=t.length;if(et>tt){var rt=new E(Math.max(tt*2,et));rt.set(t),t=rt}},g=e.f||0,c=e.p||0,p=e.b||0,P=e.l,R=e.d,V=e.m,z=e.n,_=o*8;do{if(!P){g=I(r,c,1);var ye=I(r,c+1,3);if(c+=3,ye)if(ye==1)P=fn,R=mn,V=9,z=5;else if(ye==2){var Se=I(r,c,31)+257,Ze=I(r,c+10,15)+4,Ge=Se+I(r,c+5,31)+1;c+=14;for(var te=new E(Ge),xe=new E(19),T=0;T<Ze;++T)xe[un[T]]=I(r,c+T*3,7);c+=Ze*3;for(var Xe=Ce(xe),Kt=(1<<Xe)-1,Yt=ae(xe,Xe,1),T=0;T<Ge;){var qe=Yt[I(r,c,Kt)];c+=qe&15;var L=qe>>4;if(L<16)te[T++]=L;else{var j=0,ce=0;for(L==16?(ce=3+I(r,c,3),c+=2,j=te[T-1]):L==17?(ce=3+I(r,c,7),c+=3):L==18&&(ce=11+I(r,c,127),c+=7);ce--;)te[T++]=j}}var Ke=te.subarray(0,Se),O=te.subarray(Se);V=Ce(Ke),z=Ce(O),P=ae(Ke,V,1),R=ae(O,z,1)}else k(1);else{var L=gn(c)+4,we=r[L-4]|r[L-3]<<8,be=L+we;if(be>o){l&&k(0);break}a&&u(p+we),t.set(r.subarray(L,be),p),e.b=p+=we,e.p=c=be*8,e.f=g;continue}if(c>_){l&&k(0);break}}a&&u(p+131072);for(var Qt=(1<<V)-1,Jt=(1<<z)-1,ke=c;;ke=c){var j=P[Ie(r,c)&Qt],Z=j>>4;if(c+=j&15,c>_){l&&k(0);break}if(j||k(2),Z<256)t[p++]=Z;else if(Z==256){ke=c,P=null;break}else{var Ye=Z-254;if(Z>264){var T=Z-257,re=Ft[T];Ye=I(r,c,(1<<re)-1)+zt[T],c+=re}var Ee=R[Ie(r,c)&Jt],Te=Ee>>4;Ee||k(3),c+=Ee&15;var O=pn[Te];if(Te>3){var re=Wt[Te];O+=Ie(r,c)&(1<<re)-1,c+=re}if(c>_){l&&k(0);break}a&&u(p+131072);var Qe=p+Ye;if(p<O){var Je=i-O,er=Math.min(O,Qe);for(Je+p<0&&k(3);p<er;++p)t[p]=n[Je+p]}for(;p<Qe;++p)t[p]=t[p-O]}}e.l=P,e.p=ke,e.b=p,e.f=g,P&&(g=1,e.m=V,e.d=R,e.n=z)}while(!g);return p!=t.length&&s?$e(t,0,p):t.subarray(0,p)},wn=new E(0),N=function(r,e){return r[e]|r[e+1]<<8},C=function(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0},Pe=function(r,e){return C(r,e)+C(r,e+4)*4294967296};function bn(r,e){return yn(r,{i:2},e&&e.out,e&&e.dictionary)}var _e=typeof TextDecoder<"u"&&new TextDecoder,Sn=0;try{_e.decode(wn,{stream:!0}),Sn=1}catch{}var xn=function(r){for(var e="",t=0;;){var n=r[t++],o=(n>127)+(n>223)+(n>239);if(t+o>r.length)return{s:e,r:$e(r,t-1)};o?o==3?(n=((n&15)<<18|(r[t++]&63)<<12|(r[t++]&63)<<6|r[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|r[t++]&63):e+=String.fromCharCode((n&15)<<12|(r[t++]&63)<<6|r[t++]&63):e+=String.fromCharCode(n)}};function kn(r,e){if(e){for(var t="",n=0;n<r.length;n+=16384)t+=String.fromCharCode.apply(null,r.subarray(n,n+16384));return t}else{if(_e)return _e.decode(r);var o=xn(r),i=o.s,t=o.r;return t.length&&k(8),i}}var En=function(r,e){return e+30+N(r,e+26)+N(r,e+28)},Tn=function(r,e,t){var n=N(r,e+28),o=N(r,e+30),i=kn(r.subarray(e+46,e+46+n),!(N(r,e+8)&2048)),s=e+46+n,a=Cn(r,s,o,t,C(r,e+20),C(r,e+24),C(r,e+42)),l=a[0],u=a[1],g=a[2];return[N(r,e+10),l,u,i,s+o+N(r,e+32),g]},Cn=function(r,e,t,n,o,i,s){var a=o==4294967295,l=i==4294967295,u=s==4294967295,g=e+t,c=a+l+u;if(n&&c){for(;e+4<g;e+=4+N(r,e+2))if(N(r,e)==1)return[a?Pe(r,e+4+8*l):o,l?Pe(r,e+4):i,u?Pe(r,e+4+8*(l+a)):s,1];n<2&&k(13)}return[o,i,s,0]};function In(r,e){for(var t={},n=r.length-22;C(r,n)!=101010256;--n)(!n||r.length-n>65558)&&k(13);var o=N(r,n+8);if(!o)return{};var i=C(r,n+16),s=C(r,n-20)==117853008;if(s){var a=C(r,n-12);s=C(r,a)==101075792,s&&(o=C(r,a+32),i=C(r,a+48))}for(var l=e&&e.filter,u=0;u<o;++u){var g=Tn(r,i,s),c=g[0],p=g[1],P=g[2],R=g[3],V=g[4],z=g[5],_=En(r,z);i=V,(!l||l({name:R,size:p,originalSize:P,compression:c}))&&(c?c==8?t[R]=bn(r.subarray(_,_+p),{out:new E(P)}):k(14,"unknown compression type "+c):t[R]=$e(r,_,_+p))}return t}function W(r,e){const t=new DOMParser().parseFromString(r,"application/xml");if(t.getElementsByTagName("parsererror")[0])throw new w("INVALID_PACKAGE",`Could not parse ${e}.`);return t}function $(r){return new TextDecoder().decode(r)}function d(r,e){return r?.getAttribute(`w:${e}`)??r?.getAttribute(`r:${e}`)??r?.getAttribute(e)??null}function Y(r,e){return D(r,e)[0]??null}function h(r,e){return x(r,e)[0]??null}function D(r,e){if(!r)return[];const t=[],n=o=>{for(const i of x(o))i.localName===e&&t.push(i),n(i)};return n(r),t}function x(r,e){if(!r)return[];const t=Array.from(r.childNodes).filter(n=>n.nodeType===1);return e?t.filter(n=>n.localName===e):t}const he="word/document.xml",Ve="word/_rels/document.xml.rels",Ht="[Content_Types].xml",ze="docProps/core.xml",ve="word/styles.xml",Ue="word/numbering.xml",Oe="word/comments.xml",Me="word/footnotes.xml",Ae="word/endnotes.xml",Pn={maxEntries:1500,maxExpandedBytes:150*1024*1024,maxEntryBytes:25*1024*1024},Ln=new Set([Ht,he,Ve,ze,ve,Ue,Oe,Me,Ae]);class Dn{constructor(e=In){this.unzip=e}read(e){const t=[],n=sn();let o;try{o=this.unzip(new Uint8Array(e),{filter:a=>this.shouldExtract(a,n,t)})}catch(a){throw a instanceof w?a:new w("INVALID_PACKAGE",`Could not unzip DOCX package: ${String(a)}`)}if(!o[Ht]||!o[he])throw new w("INVALID_PACKAGE","DOCX package is missing required Word document parts.");const i=W($(o[he]),he),s=Rn(o,i);return o[ve]||t.push("Document styles are missing; common Word style names will be inferred where possible."),s.length>0&&t.push(`Unsupported Word features detected: ${s.join(", ")}.`),{files:o,documentXml:i,warnings:t,unsupportedFeatures:s}}shouldExtract(e,t,n){const o=an(t,e.originalSize,Pn);if(o==="too-many-entries")throw new w("INVALID_PACKAGE",`DOCX package has too many ZIP entries (${t.entries}).`);if(o==="too-many-expanded-bytes")throw new w("INVALID_PACKAGE","DOCX package expands beyond the local safety limit.");const i=ln(e.name);return!i||!Nn(i)?!1:i.startsWith("word/media/")&&o==="entry-too-large"?(n.push(`Skipped oversized embedded media: ${i}.`),!1):!0}}function Nn(r){return Ln.has(r)||/^word\/(?:header|footer)\d+\.xml$/.test(r)||/^word\/_rels\/(?:header|footer)\d+\.xml\.rels$/.test(r)||r.startsWith("word/media/")}function Rn(r,e){const t=e.documentElement;return[["text boxes",D(t,"txbxContent").length>0],["charts",D(t,"chart").length>0],["SmartArt diagrams",D(t,"diagram").length>0],["equations",D(t,"oMath").length>0||D(t,"oMathPara").length>0],["tracked changes",D(t,"ins").length>0||D(t,"del").length>0],["embedded external document parts",D(t,"altChunk").length>0],["chart parts",Object.keys(r).some(o=>o.startsWith("word/charts/"))]].filter(([,o])=>o).map(([o])=>o)}class _n{parseRelationships(e){const t=new Map;if(!e)return t;for(const n of D(W($(e),Ve).documentElement,"Relationship")){const o=n.getAttribute("Id"),i=n.getAttribute("Target");o&&i&&t.set(o,{target:i,type:n.getAttribute("Type"),targetMode:n.getAttribute("TargetMode")})}return t}parseStyles(e){const t=new Map;if(!e)return t;for(const n of x(W($(e),ve).documentElement,"style")){const o=d(n,"styleId");if(!o)continue;const i=d(h(n,"name"),"val");t.set(o,{styleId:o,name:i,basedOn:d(h(n,"basedOn"),"val"),headingLevel:Zt(d(Y(n,"outlineLvl"),"val"))??Gt(i??o)})}return t}parseNumbering(e){const t={numToAbstract:new Map,abstractLevels:new Map};if(!e)return t;const n=W($(e),Ue);for(const o of x(n.documentElement,"abstractNum")){const i=d(o,"abstractNumId");if(!i)continue;const s=new Map;for(const a of x(o,"lvl")){const l=Number(d(a,"ilvl")??"0"),u=On(d(h(a,"numFmt"),"val"));s.set(l,{format:u,text:d(h(a,"lvlText"),"val")??(u==="bullet"?"•":`%${l+1}.`),start:Xt(d(h(a,"start"),"val"))??1})}t.abstractLevels.set(i,s)}for(const o of x(n.documentElement,"num")){const i=d(o,"numId"),s=d(h(o,"abstractNumId"),"val");i&&s&&t.numToAbstract.set(i,s)}return t}parseMetadata(e){if(!e)return jt();const t=W($(e),ze).documentElement;return Object.fromEntries(["title","subject","creator","description","created","modified"].map(n=>[n,Mn(t,n)]))}}function jt(){return{title:null,subject:null,creator:null,description:null,created:null,modified:null}}function Zt(r){const e=Number(r);return r&&Number.isInteger(e)&&e>=0&&e<=8?e+1:null}function Gt(r){const e=/^heading([1-6])$/.exec(r.replace(/\s+/g,"").toLowerCase());return e?Number(e[1]):r.replace(/\s+/g,"").toLowerCase()==="title"?1:null}function Xt(r){const e=Number(r);return r&&Number.isInteger(e)&&e>0?e:null}function On(r){return["bullet","lowerLetter","upperLetter","lowerRoman","upperRoman","none"].includes(r)?r:"decimal"}function Mn(r,e){const t=Y(r,e)?.textContent?.trim()??"";return t.length>0?t:null}const mt="http://schemas.openxmlformats.org/officeDocument/2006/relationships",An=9525,Bn=20;class Fn{constructor(e=new Dn,t=new _n){this.packageReader=e,this.partParser=t}nextId=1;listCounters=new Map;parse(e){this.nextId=1,this.listCounters.clear();const t=this.readPackage(e),n=Y(t.documentXml.documentElement,"body");if(!n)throw new w("INVALID_PACKAGE","DOCX package does not contain a Word document body.");const o=Le();o.comments=t.comments.size,o.footnotes=t.footnotes.size,o.endnotes=t.endnotes.size;const i=this.parseBlocks(n,t,o),s=this.parseHeaderFooterParts(t,"header",o),a=this.parseHeaderFooterParts(t,"footer",o),l=wt(t.unsupportedFeatures);return o.unsupported=l.length,{title:t.metadata.title??Wn(i)??"Word document",metadata:t.metadata,blocks:i,headers:s,footers:a,footnotes:[...t.footnotes.values()],endnotes:[...t.endnotes.values()],comments:[...t.comments.values()],outline:$n(i),stats:o,warnings:wt(t.warnings),unsupportedFeatures:l,plainText:Vn(i,s,a,t.footnotes,t.endnotes,t.comments)}}readPackage(e){const t=this.packageReader.read(e);return{...t,relationships:this.partParser.parseRelationships(t.files[Ve]),styles:this.partParser.parseStyles(t.files[ve]),numbering:this.partParser.parseNumbering(t.files[Ue]),metadata:this.partParser.parseMetadata(t.files[ze]),footnotes:this.parseNotes(t.files[Me],"footnote"),endnotes:this.parseNotes(t.files[Ae],"endnote"),comments:this.parseComments(t.files[Oe])}}parseBlocks(e,t,n){const o=[];for(const i of x(e)){if(i.localName==="p"&&o.push(...this.splitParagraphOnPageBreaks(this.parseParagraph(i,t,n))),i.localName==="tbl"&&o.push(this.parseTable(i,t,n)),i.localName==="sdt"){const s=h(i,"sdtContent");s&&o.push(...this.parseBlocks(s,t,n))}i.localName==="altChunk"&&o.push({type:"unsupported",id:this.makeId("unsupported"),label:"Embedded external document",detail:"This Word altChunk content cannot be rendered locally yet."})}return o}parseParagraph(e,t,n){n.paragraphs++;const o=this.parseParagraphStyle(e,t),i=this.parseListInfo(e,t);return i&&n.lists++,{type:"paragraph",id:this.makeId("p"),styleName:o.styleName,styleLabel:o.styleLabel,headingLevel:o.headingLevel,alignment:this.parseParagraphAlignment(e),list:i,format:this.parseParagraphFormat(e),inlines:x(e).filter(s=>s.localName==="r"||s.localName==="hyperlink").flatMap(s=>this.parseInlineContainer(s,t,n))}}splitParagraphOnPageBreaks(e){if(!e.inlines.some(o=>o.type==="pageBreak"))return[e];const t=[];let n=[];for(const o of e.inlines){if(o.type!=="pageBreak"){n.push(o);continue}n.length>0&&t.push({...e,id:this.makeId("p"),inlines:n}),t.push({type:"pageBreak",id:this.makeId("page")}),n=[]}return n.length>0&&t.push({...e,id:this.makeId("p"),inlines:n}),t.length>0?t:[{type:"pageBreak",id:this.makeId("page")}]}parseParagraphStyle(e,t){const n=h(e,"pPr"),o=d(h(n,"pStyle"),"val"),i=o?t.styles.get(o)??null:null;return{styleName:o,styleLabel:i?.name??o,headingLevel:this.parseParagraphHeadingLevel(n,o,i)}}parseParagraphHeadingLevel(e,t,n){return Zt(d(h(e,"outlineLvl"),"val"))??n?.headingLevel??Gt(n?.name??t??"")}parseParagraphAlignment(e){const t=d(h(h(e,"pPr"),"jc"),"val");return t==="center"||t==="right"?t:t==="both"?"justify":t==="left"?"left":null}parseParagraphFormat(e){const t=h(e,"pPr"),n=h(t,"spacing"),o=h(t,"ind");return{marginBeforePt:q(d(n,"before")),marginAfterPt:q(d(n,"after")),indentLeftPt:q(d(o,"left")),indentHangingPt:q(d(o,"hanging")),firstLineIndentPt:q(d(o,"firstLine"))}}parseListInfo(e,t){const n=h(h(e,"pPr"),"numPr");if(!n)return null;const o=d(h(n,"numId"),"val");if(!o)return null;const i=Number(d(h(n,"ilvl"),"val")??"0"),s=t.numbering.numToAbstract.get(o),a=s?t.numbering.abstractLevels.get(s)?.get(i):void 0,l=a?.format??"decimal";return{numId:o,level:i,format:l,label:this.nextListLabel(o,i,a)}}nextListLabel(e,t,n){const o=this.listCounters.get(e)??[],i=n?.start??1;o[t]=o[t]===void 0?i:o[t]+1,o.length=t+1,this.listCounters.set(e,o);const s=n?.format??"decimal",a=s==="bullet"?n?.text??"•":`${yt(o[t]??i,s)}.`;return(n?.text??a).replace(/%([1-9])/g,(l,u)=>yt(o[Number(u)-1]??i,s))}parseInlineContainer(e,t,n){if(e.localName!=="hyperlink")return this.parseRun(e,t,n,null);const o=this.resolveHyperlink(e,t);return o&&n.links++,x(e,"r").flatMap(i=>this.parseRun(i,t,n,o))}resolveHyperlink(e,t){const n=e.getAttributeNS(mt,"id")??e.getAttribute("r:id");if(n){const i=t.relationships.get(n);if(i?.target)return i.target}const o=d(e,"anchor");return o?`#${o}`:null}parseRun(e,t,n,o){const i=this.parseRunFormat(e),s=[];for(const a of x(e))if(a.localName==="t"||a.localName==="instrText"){const l=a.textContent??"";l.length>0&&s.push({type:"text",text:l,hyperlink:o,...i})}else if(a.localName==="tab")s.push({type:"text",text:"	",hyperlink:o,...i});else if(a.localName==="br"||a.localName==="cr")s.push(d(a,"type")==="page"?{type:"pageBreak"}:{type:"break"});else if(a.localName==="drawing"||a.localName==="pict"){const l=this.parseImage(a,t);l&&(n.images++,s.push(l))}else a.localName==="footnoteReference"?s.push({type:"noteReference",noteType:"footnote",noteId:d(a,"id")??""}):a.localName==="endnoteReference"?s.push({type:"noteReference",noteType:"endnote",noteId:d(a,"id")??""}):a.localName==="commentReference"&&s.push({type:"commentReference",commentId:d(a,"id")??""});return s}parseRunFormat(e){const t=h(e,"rPr"),n=d(h(t,"vertAlign"),"val");return{bold:ne(t,"b"),italic:ne(t,"i"),underline:ne(t,"u"),strikethrough:ne(t,"strike")||ne(t,"dstrike"),superscript:n==="superscript",subscript:n==="subscript",color:vt(d(h(t,"color"),"val")),highlight:qn(d(h(t,"highlight"),"val")),fontSizePt:Xn(d(h(t,"sz"),"val"))}}parseImage(e,t){const n=Y(e,"blip"),o=n?.getAttributeNS(mt,"embed")??n?.getAttribute("r:embed")??null;if(!o)return null;const i=t.relationships.get(o);if(!i?.target||i.targetMode==="External")return null;const s=zn("word",i.target),a=t.files[s];if(!a)return null;const l=Y(e,"extent"),u=Y(e,"docPr");return{type:"image",src:`data:${Zn(s)};base64,${jn(a)}`,altText:u?.getAttribute("descr")??u?.getAttribute("title")??"Embedded image",widthPx:gt(l?.getAttribute("cx")),heightPx:gt(l?.getAttribute("cy"))}}parseTable(e,t,n){return n.tables++,{type:"table",id:this.makeId("table"),rows:x(e,"tr").map(o=>({cells:x(o,"tc").map(i=>{const s=h(i,"tcPr")??i;return{colSpan:Xt(d(h(s,"gridSpan"),"val"))??1,rowSpan:(h(s,"vMerge"),1),shading:vt(d(h(s,"shd"),"fill")),widthPt:Gn(h(s,"tcW")),blocks:this.parseBlocks(i,t,n)}})}))}}parseHeaderFooterParts(e,t,n){const o=`word/${t}`;return Object.keys(e.files).filter(i=>i.startsWith(o)&&i.endsWith(".xml")).sort().flatMap(i=>{const s=e.files[i];if(!s)return[];const a={...e,relationships:this.partParser.parseRelationships(e.files[Un(i)])};return[{id:this.makeId(t),kind:t,blocks:this.parseBlocks(W($(s),i).documentElement,a,n)}]})}parseNotes(e,t){const n=new Map;if(!e)return n;const o=W($(e),t==="footnote"?Me:Ae),i=this.createPartPackage(o),s=Le();for(const a of x(o.documentElement,t)){const l=d(a,"id");if(!l||l.startsWith("-"))continue;const u=this.parseBlocks(a,i,s);n.set(l,{id:l,blocks:u,plainText:Q(u)})}return n}parseComments(e){const t=new Map;if(!e)return t;const n=W($(e),Oe),o=this.createPartPackage(n),i=Le();for(const s of x(n.documentElement,"comment")){const a=d(s,"id");if(!a)continue;const l=this.parseBlocks(s,o,i);t.set(a,{id:a,blocks:l,plainText:Q(l),author:d(s,"author"),date:d(s,"date")})}return t}createPartPackage(e){return{files:{},documentXml:e,relationships:new Map,styles:new Map,numbering:{numToAbstract:new Map,abstractLevels:new Map},metadata:jt(),footnotes:new Map,endnotes:new Map,comments:new Map,warnings:[],unsupportedFeatures:[]}}makeId(e){return`${e}-${this.nextId++}`}}function Le(){return{paragraphs:0,tables:0,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0}}function Wn(r){for(const e of r)if(e.type==="paragraph"){const t=He(e.inlines).trim();if(t.length>0)return t}return null}function $n(r){return r.flatMap(e=>{if(e.type!=="paragraph"||!e.headingLevel)return[];const t=He(e.inlines).trim();return t.length>0?[{id:e.id,title:t,level:e.headingLevel}]:[]})}function Vn(r,e,t,n,o,i){return[Q(r),...e.map(s=>Q(s.blocks)),...t.map(s=>Q(s.blocks)),...[...n.values()].map(s=>s.plainText),...[...o.values()].map(s=>s.plainText),...[...i.values()].map(s=>s.plainText)].filter(s=>s.length>0).join(`
`)}function Q(r){return r.map(e=>e.type==="paragraph"?He(e.inlines):e.type==="pageBreak"?`
--- Page break ---
`:e.type==="unsupported"?`[${e.label}]`:e.rows.map(t=>t.cells.map(n=>Q(n.blocks)).join("	")).join(`
`)).filter(e=>e.length>0).join(`
`)}function He(r){return r.map(e=>e.type==="text"?e.text:e.type==="break"||e.type==="pageBreak"?`
`:e.type==="image"?`[Image: ${e.altText}]`:e.type==="noteReference"?`[${e.noteType} ${e.noteId}]`:`[comment ${e.commentId}]`).join("")}function ne(r,e){const t=h(r,e),n=d(t,"val");return!!t&&n!=="false"&&n!=="0"&&n!=="off"}function zn(r,e){return Hn(e.startsWith("/")?e.slice(1):`${r}/${e}`)}function Un(r){const e=r.lastIndexOf("/"),t=e>=0?r.slice(0,e):"",n=e>=0?r.slice(e+1):r;return t?`${t}/_rels/${n}.rels`:`_rels/${n}.rels`}function Hn(r){const e=[];for(const t of r.split("/"))if(!(!t||t===".")){if(t===".."){e.pop();continue}e.push(t)}return e.join("/")}function gt(r){const e=Number(r);return r&&Number.isFinite(e)?Math.round(e/An):null}function jn(r){let e="";for(let t=0;t<r.length;t+=32768)e+=String.fromCharCode(...r.subarray(t,t+32768));return btoa(e)}function Zn(r){const e=r.split(".").pop()?.toLowerCase();return{jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",svg:"image/svg+xml",webp:"image/webp"}[e??""]??"image/png"}function q(r){const e=Number(r);return r&&Number.isFinite(e)?e/Bn:null}function Gn(r){const e=d(r,"type");return e&&e!=="dxa"?null:q(d(r,"w"))}function Xn(r){const e=Number(r);return r&&Number.isFinite(e)?e/2:null}function vt(r){return r&&r!=="auto"&&/^[0-9a-fA-F]{6}$/.test(r)?`#${r}`:null}function qn(r){return r&&r!=="none"?{yellow:"#fff59d",green:"#c8e6c9",cyan:"#b2ebf2",magenta:"#f8bbd0",blue:"#bbdefb",red:"#ffcdd2",darkBlue:"#90caf9",darkCyan:"#80deea",darkGreen:"#a5d6a7",darkMagenta:"#ce93d8",darkRed:"#ef9a9a",darkYellow:"#ffe082",darkGray:"#b0bec5",lightGray:"#eceff1",black:"#424242"}[r]??null:null}function yt(r,e){if(e==="lowerLetter"||e==="upperLetter"){const t=Kn(r);return e==="upperLetter"?t.toUpperCase():t}if(e==="lowerRoman"||e==="upperRoman"){const t=Yn(r);return e==="upperRoman"?t.toUpperCase():t}return e==="bullet"||e==="none"?"":String(r)}function Kn(r){let e=Math.max(1,r),t="";for(;e>0;)e--,t=String.fromCharCode(97+e%26)+t,e=Math.floor(e/26);return t}function Yn(r){const e=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]];let t=Math.max(1,Math.min(3999,r)),n="";for(const[o,i]of e)for(;t>=o;)n+=i,t-=o;return n}function wt(r){return[...new Set(r)]}const Qn={title:null,subject:null,creator:null,description:null,created:null,modified:null},Jn={marginBeforePt:null,marginAfterPt:null,indentLeftPt:null,indentHangingPt:null,firstLineIndentPt:null};class eo{nextId=1;parse(e){this.nextId=1;const t=JSON.parse(e),n=G(F(t)?t.sections:[]).flatMap(i=>F(i)?this.parseBlocks(G(i.blocks)):[]),o=qt(n);return{title:no(n)??"Converted Word document",metadata:Qn,blocks:n,headers:[],footers:[],footnotes:[],endnotes:[],comments:[],outline:n.flatMap(i=>i.type==="paragraph"&&i.headingLevel!==null?[{id:i.id,title:je(i.inlines),level:i.headingLevel}]:[]),stats:{paragraphs:n.filter(i=>i.type==="paragraph").length,tables:n.filter(i=>i.type==="table").length,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0},warnings:["Rendered from self-hosted SFDT conversion; advanced editing metadata is not shown."],unsupportedFeatures:[],plainText:o}}parseBlocks(e){return e.flatMap(t=>F(t)?Array.isArray(t.rows)?[this.parseTable(t)]:[this.parseParagraph(t)]:[])}parseParagraph(e){const t=to(e,["paragraphFormat","styleName"]);return{type:"paragraph",id:this.makeId("sfdt-p"),styleName:t,styleLabel:t,headingLevel:ro(t),alignment:null,list:null,format:Jn,inlines:G(e.inlines).flatMap(n=>this.parseInline(n))}}parseInline(e){if(!F(e)||typeof e.text!="string"||e.text.length===0)return[];const t=F(e.characterFormat)?e.characterFormat:{};return[{type:"text",text:e.text,bold:t.bold===!0,italic:t.italic===!0,underline:t.underline===!0,strikethrough:t.strikethrough===!0,superscript:t.baselineAlignment==="Superscript",subscript:t.baselineAlignment==="Subscript",color:typeof t.fontColor=="string"?t.fontColor:null,highlight:typeof t.highlightColor=="string"?t.highlightColor:null,fontSizePt:typeof t.fontSize=="number"?t.fontSize:null,hyperlink:null}]}parseTable(e){return{type:"table",id:this.makeId("sfdt-table"),rows:G(e.rows).map(t=>({cells:F(t)?G(t.cells).map(n=>({colSpan:1,rowSpan:1,shading:null,widthPt:null,blocks:F(n)?this.parseBlocks(G(n.blocks)):[]})):[]}))}}makeId(e){return`${e}-${this.nextId++}`}}function F(r){return typeof r=="object"&&r!==null}function G(r){return Array.isArray(r)?r:[]}function to(r,e){let t=r;for(const n of e){if(!F(t))return null;t=t[n]}return typeof t=="string"?t:null}function ro(r){const e=/^heading([1-6])$/.exec((r??"").replace(/\s+/g,"").toLowerCase());return e?Number(e[1]):null}function no(r){for(const e of r){if(e.type!=="paragraph")continue;const t=je(e.inlines).trim();if(t.length>0)return t}return null}function qt(r){return r.map(e=>e.type==="paragraph"?je(e.inlines):e.type==="pageBreak"?"":e.type==="unsupported"?e.label:e.rows.map(t=>t.cells.map(n=>qt(n.blocks)).join("	")).join(`
`)).filter(e=>e.length>0).join(`
`)}function je(r){return r.map(e=>e.type==="text"?e.text:"").join("")}class oo{constructor(e){this.app=e}resolveWordFile(e){const t=this.app.vault.getFileByPath(e);return t instanceof y.TFile?t:null}async readWordFile(e,t){this.assertWordFile(e);const n=t*1024*1024;if(e.stat.size>n)throw new w("FILE_TOO_LARGE",`Document is ${io(e.stat.size)}; limit is ${t} MB.`);return{file:e,data:await this.app.vault.readBinary(e),mtime:e.stat.mtime,size:e.stat.size}}assertWordFile(e){if(!de(e.extension)||on(e.path)!=="docx")throw new w("INVALID_FORMAT",mr)}}function io(r){return r<1024*1024?`${Math.max(1,Math.round(r/1024))} KB`:`${(r/(1024*1024)).toFixed(1)} MB`}class so{constructor(e,t,n,o=se){this.parser=e,this.sfdtParser=t,this.conversionClient=n,this.logger=o}async load(e,t){if(t.preferRemoteConversion&&Ne(t))try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(n){this.logger("WordDocumentLoadService.remotePreferredConversion",n)}try{return this.parser.parse(e.data)}catch(n){if(!Ne(t))throw n;try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(o){throw this.logger("WordDocumentLoadService.remoteFallbackConversion",o),n}}}}class ao{constructor(e,t){this.app=e,this.settings=t,this.repository=new oo(e),this.parser=new Fn,this.sfdtParser=new eo,this.conversionClient=new Fr,this.loader=new so(this.parser,this.sfdtParser,this.conversionClient)}repository;parser;sfdtParser;conversionClient;loader;loaded=!1;load(){this.loaded=!0}createView(e){if(!this.loaded)throw new Error("Docklet Word Viewer runtime is not loaded.");return new X(e,this.repository,this.loader,this.settings)}unload(){this.loaded=!1}}class lo{constructor(e,t={}){this.write=e,this.delayMs=t.delayMs??150,this.onError=t.onError??(()=>{})}delayMs;onError;timer=null;pending=null;hasPending=!1;tail=Promise.resolve();disposed=!1;schedule(e){this.disposed||(this.pending=e,this.hasPending=!0,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.timer=null,this.flush()},this.delayMs))}flush(){if(this.timer&&clearTimeout(this.timer),this.timer=null,!this.hasPending)return this.tail;const e=this.pending;this.pending=null,this.hasPending=!1;const t=this.tail.then(()=>this.write(e));return this.tail=t.catch(n=>this.onError(n)),this.tail}dispose(){return this.disposed=!0,this.flush()}}class co extends y.Plugin{api=Object.freeze({schemaVersion:1,pluginId:ot,openDocument:e=>this.openWordDocument(e)});store=or(U);get dockletDescriptor(){return{schemaVersion:1,pluginId:ot,name:S,version:this.manifest.version,capabilities:["docx-viewing","docx-parsing","sandboxed-word-runtime","optional-document-conversion"]}}runtime=null;settingsWriter=null;active=!1;get settingsPlugin(){return this}get settingsSignal(){return this.store.settingsSignal}patchSettings(e){this.store.patchSettings(e)}renderSettingsSection(e){const t=()=>{e.empty(),At(e,this,t)};t()}async onload(){await this.loadSettings(),this.active=!0;try{this.settingsWriter=new lo(e=>this.saveData(e),{onError:e=>se("DockletWordViewerPlugin.saveData",e)}),this.runtime=new ao(this.app,this.settingsSignal),this.runtime.load(),this.registerSettingsPersistence(),this.registerView(A,e=>this.requireRuntime().createView(e)),this.registerExtensions([...Ct],A),this.registerCommands(),this.registerEvents(),this.addSettingTab(new Ur(this.app,this))}catch(e){throw this.active=!1,this.runtime?.unload(),this.runtime=null,this.settingsWriter?.dispose(),this.settingsWriter=null,e}}onunload(){this.active=!1;const e=this.settingsWriter;this.settingsWriter=null,e?.dispose(),this.app.workspace.detachLeavesOfType(A),this.runtime?.unload(),this.runtime=null}async loadSettings(){const e=await this.loadData(),t=We(e);this.store.setSettings(t),JSON.stringify(e??{})!==JSON.stringify(t)&&await this.saveData(t)}registerSettingsPersistence(){let e=!1;this.register(this.store.onSettingsChange(()=>{if(!e){e=!0;return}this.refreshSettingsInAllViews(),this.settingsWriter?.schedule(structuredClone(this.settingsSignal.value))}))}registerCommands(){this.addCommand({id:hr,name:"Docklet Word Viewer: Open active Word document",checkCallback:e=>{const t=this.getActiveWordDocumentPath();return t?(e||this.openWordDocument(t),!0):!1}}),this.addCommand({id:pr,name:"Docklet Word Viewer: Reload active document",checkCallback:e=>{const t=this.getActiveWordView();return t?(e||t.reloadDocument(),!0):!1}})}registerEvents(){this.registerEvent(this.app.workspace.on("file-menu",(e,t)=>this.handleFileMenu(e,t))),this.registerEvent(this.app.workspace.on("css-change",()=>this.updateThemeInAllViews()))}handleFileMenu(e,t){!(t instanceof y.TFile)||!de(t.extension)||e.addItem(n=>n.setTitle("Open in Docklet Word Viewer").setIcon(It).onClick(()=>{this.openWordDocument(t.path)}))}async openWordDocument(e){const t=this.requireRuntime().repository.resolveWordFile(e);if(!t){new y.Notice(`${S}: document not found: ${e}`);return}if(!de(t.extension)){new y.Notice(`${S}: unsupported Word document type: ${t.extension}`);return}const n=this.app.workspace.getLeavesOfType(A).find(o=>this.leafHasDocumentPath(o,e));if(n){this.app.workspace.revealLeaf(n);return}await this.app.workspace.getLeaf(!1).setViewState({type:A,state:{file:t.path},active:!0})}updateThemeInAllViews(){const e=Bt(this.app);for(const t of this.app.workspace.getLeavesOfType(A))t.view instanceof X&&t.view.updateTheme(e)}refreshSettingsInAllViews(){for(const e of this.app.workspace.getLeavesOfType(A))e.view instanceof X&&e.view.refreshSettings()}getActiveWordView(){const e=this.app.workspace.getActiveViewOfType(X);return e instanceof X?e:null}getActiveWordDocumentPath(){const e=this.getActiveWordView()?.getDocumentPath();if(e)return e;const t=this.app.workspace.getActiveFile();return t instanceof y.TFile&&de(t.extension)?t.path:null}leafHasDocumentPath(e,t){return e.view instanceof X?e.view.getDocumentPath()===t:e.getViewState().state?.file===t}requireRuntime(){if(!this.active||!this.runtime)throw new Error(`${S}: runtime is not active.`);return this.runtime}}module.exports=co;
