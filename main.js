"use strict";const y=require("obsidian");var Qt=Symbol.for("preact-signals");function Be(){if(H>1)H--;else{var r,e=!1;for((function(){var i=fe;for(fe=void 0;i!==void 0;){var o=i.S;if(o.v===i.v)for(var a=o.t;a!==void 0;a=a.x)a.i===i.i&&(a.i=o.i);i=i.o}})();oe!==void 0;){var t=oe;for(oe=void 0,pe++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&St(t))try{t.c()}catch(i){e||(r=i,e=!0)}t=n}}if(pe=0,H--,e)throw r}}var ie,m=void 0;function ge(r){var e=m,t=ie;m=void 0,ie=void 0;try{return r()}finally{m=e,ie=t}}var oe=void 0,H=0,pe=0,nt=0,fe=void 0,me=0;function bt(r){if(m!==void 0){var e=r.n;if(e===void 0||e.t!==m)return e={i:0,S:r,p:m.s,n:void 0,t:m,e:void 0,x:void 0,r:e},m.s!==void 0&&(m.s.n=e),m.s=e,r.n=e,32&m.f&&r.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=m.s,e.n=void 0,m.s.n=e,m.s=e),e}}function b(r,e){this.v=r,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}b.prototype.brand=Qt;b.prototype.h=function(){return!0};b.prototype.S=function(r){var e=this,t=this.t;t!==r&&r.e===void 0&&(r.x=t,this.t=r,t!==void 0?t.e=r:ge(function(){var n;(n=e.W)==null||n.call(e)}))};b.prototype.U=function(r){var e=this;if(this.t!==void 0){var t=r.e,n=r.x;t!==void 0&&(t.x=n,r.e=void 0),n!==void 0&&(n.e=t,r.x=void 0),r===this.t&&(this.t=n,n===void 0&&ge(function(){var i;(i=e.Z)==null||i.call(e)}))}};b.prototype.subscribe=function(r){var e=this;return Tt(function(){var t=e.value;ge(function(){return r(t)})},{name:"sub"})};b.prototype.valueOf=function(){return this.value};b.prototype.toString=function(){return this.value+""};b.prototype.toJSON=function(){return this.value};b.prototype.peek=function(){var r=this;return ge(function(){return r.value})};Object.defineProperty(b.prototype,"value",{get:function(){var r=bt(this);return r!==void 0&&(r.i=this.i),this.v},set:function(r){if(r!==this.v){if(pe>100)throw new Error("Cycle detected");(function(t){H!==0&&pe===0&&t.l!==nt&&(t.l=nt,fe={S:t,v:t.v,i:t.i,o:fe})})(this),this.v=r,this.i++,me++,H++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Be()}}}});function Jt(r,e){return new b(r,e)}function St(r){for(var e=r.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function xt(r){for(var e=r.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){r.s=e;break}}}function kt(r){for(var e=r.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}r.s=t}function J(r,e){b.call(this,void 0,e),this.x=r,this.s=void 0,this.g=me-1,this.f=4}J.prototype=new b;J.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===me))return!0;if(this.g=me,this.f|=1,this.i>0&&!St(this))return this.f&=-2,!0;var r=m;try{xt(this),m=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return m=r,kt(this),this.f&=-2,!0};J.prototype.S=function(r){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}b.prototype.S.call(this,r)};J.prototype.U=function(r){if(this.t!==void 0&&(b.prototype.U.call(this,r),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};J.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var r=this.t;r!==void 0;r=r.x)r.t.N()}};Object.defineProperty(J.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var r=bt(this);if(this.h(),r!==void 0&&(r.i=this.i),16&this.f)throw this.v;return this.v}});function Et(r){var e=r.m;if(r.m=void 0,typeof e=="function"){H++;var t=m;m=void 0;try{e()}catch(n){throw r.f&=-2,r.f|=8,Fe(r),n}finally{m=t,Be()}}}function Fe(r){for(var e=r.s;e!==void 0;e=e.n)e.S.U(e);r.x=void 0,r.s=void 0,Et(r)}function er(r){if(m!==this)throw new Error("Out-of-order effect");kt(this),m=r,this.f&=-2,8&this.f&&Fe(this),Be()}function ee(r,e){this.x=r,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name,ie&&ie.push(this)}ee.prototype.c=function(){var r=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{r()}};ee.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Et(this),xt(this),H++;var r=m;return m=this,er.bind(this,r)};ee.prototype.N=function(){2&this.f||(this.f|=2,this.u=oe,oe=this)};ee.prototype.d=function(){this.f|=8,1&this.f||Fe(this)};ee.prototype.dispose=function(){this.d()};function Tt(r,e){var t=new ee(r,e);try{t.c()}catch(i){throw t.d(),i}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}function tr(r){const e=Jt(structuredClone(r));return{settingsSignal:e,setSettings:t=>{e.value=t},patchSettings:t=>{e.value={...e.value,...t}},onSettingsChange:t=>Tt(t)}}const rr="docklet-word-viewer",x="Docklet Word Viewer",A="docklet-word-viewer-view",v="dck-word",nr=`${v}-o-shell`,ir=`${v}-c-view`,or="docx",Ct=[or];function de(r){return Ct.includes(r.toLowerCase())}const It="file-text",B="docklet-word-viewer-bridge",ar=5e3,sr=25,De=1,Pt=200,lr=15e3,Lt=1e3,Dt=12e4,it="http://localhost:62869/api/documenteditor/",Nt=1,_t=.5,Rt=2,cr=.1,ot="layout",at="zoom",ur="docklet-word-viewer-open-active-word-file",dr="docklet-word-viewer-reload-active-word-file",hr=`${x}: could not open Word document`,pr=`${x}: only .docx documents are supported in the local viewer.`,fr=`${v}-root`,mr=`${v}-body`,gr=`${v}-iframe`,vr=`${v}-outline`,yr=`${v}-outline-header`,wr=`${v}-outline-list`,br=`${v}-outline-button`,Sr=`${v}-outline-empty`,xr=`${v}-search`,kr=`${v}-search-input`,Er=`${v}-search-status`,Tr=`${v}-state`,Cr=`${v}-state-title`,Ir=`${v}-state-msg`,Pr=`${v}-state-button`,Lr=`${v}-status`,Dr=`${v}-toolbar`,Nr=`${v}-toolbar-button`,_r=`${v}-viewport`,Rr=`${v}-warning`;function Mr(r){const e=t=>{if(t instanceof Error)return t.message;if(typeof t=="object"&&t!==null)try{return JSON.stringify(t)}catch{return String(t)}return String(t)};return{getErrorMessage:e,logError:(t,n)=>console.error(`${r} ${t}: ${e(n)}`,n),logWarning:(t,n,i)=>{i===void 0?console.warn(`${r} ${t}: ${n}`):console.warn(`${r} ${t}: ${n}`,i)}}}const{logError:ae,getErrorMessage:st}=Mr("[docklet-word-viewer]");class w extends Error{constructor(e,t){super(t),this.code=e,this.name="WordViewerDomainError"}code}const Or=new Set(["services.syncfusion.com","ej2.syncfusion.com","document.syncfusion.com"]);class Ar{async convertToSfdt(e,t){const n=Mt(t.syncfusionServiceUrl);if(!t.allowRemoteConversion||!n)throw new w("REMOTE_CONVERSION_DISABLED","Remote conversion is disabled or not configured.");const i=new FormData;i.append("files",new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),e.file.name);const o=new AbortController,a=window.setTimeout(()=>o.abort(),t.remoteConversionTimeoutMs);try{const s=await fetch(n,{method:"POST",body:i,signal:o.signal});if(!s.ok)throw new w("REMOTE_CONVERSION_FAILED",`Remote conversion failed with HTTP ${s.status}.`);const l=await s.text();if(!l.trim())throw new w("REMOTE_CONVERSION_FAILED","Remote conversion returned an empty SFDT document.");return l}catch(s){throw s instanceof w?s:new w("REMOTE_CONVERSION_FAILED",`Remote conversion failed: ${String(s)}`)}finally{window.clearTimeout(a)}}}function Ne(r){return r.allowRemoteConversion&&Mt(r.syncfusionServiceUrl)!==null}function Mt(r){const e=r.trim();if(!e)return null;let t;try{t=new URL(e)}catch{return null}return t.protocol!=="http:"&&t.protocol!=="https:"||Or.has(t.hostname.toLowerCase())?null:t.pathname.split("/").filter(Boolean).at(-1)?.toLowerCase()==="import"?(t.search="",t.hash="",t.toString()):(t.pathname.endsWith("/")||(t.pathname=`${t.pathname}/`),new URL("Import",t).toString())}const U={defaultLayout:"paginated",maxFileSizeMb:sr,allowRemoteConversion:!1,preferRemoteConversion:!1,syncfusionServiceUrl:"",remoteConversionTimeoutMs:lr};function $e(r){return{defaultLayout:Fr(r?.defaultLayout,U.defaultLayout),maxFileSizeMb:ct(r?.maxFileSizeMb,De,Pt,U.maxFileSizeMb),allowRemoteConversion:lt(r?.allowRemoteConversion,U.allowRemoteConversion),preferRemoteConversion:lt(r?.preferRemoteConversion,U.preferRemoteConversion),syncfusionServiceUrl:Br(r?.syncfusionServiceUrl,U.syncfusionServiceUrl),remoteConversionTimeoutMs:ct(r?.remoteConversionTimeoutMs,Lt,Dt,U.remoteConversionTimeoutMs)}}function lt(r,e){return typeof r=="boolean"?r:e}function Br(r,e){return typeof r=="string"?r.trim():e}function Fr(r,e){return r==="paginated"||r==="continuous"?r:e}function ct(r,e,t,n){return typeof r!="number"||!Number.isFinite(r)?n:Math.min(t,Math.max(e,Math.round(r)))}class $r extends y.PluginSettingTab{constructor(e,t){super(e,t.settingsPlugin),this.host=t}host;display(){const{containerEl:e}=this;e.empty(),e.createEl("p",{text:"Configure Docklet Word Viewer rendering, file-size safety, and optional self-hosted remote conversion.",cls:"setting-item-description"}),Wr(e,this.host,()=>this.display())}}function Wr(r,e,t){const n=e.settingsSignal.value;let i=null,o=null,a=null;const s=()=>{const l=!Ne(e.settingsSignal.value);o?.setDisabled(l),a?.setDisabled(l)};new y.Setting(r).setName("Default layout").setDesc("Use paginated pages for Word-like reading, or continuous for a denser Obsidian pane.").addDropdown(l=>l.addOption("paginated","Paginated").addOption("continuous","Continuous").setValue(n.defaultLayout).onChange(u=>ue(e,{defaultLayout:u==="continuous"?"continuous":"paginated"},t))),ht(r,"Maximum local file size","Block very large documents before parsing them in the Obsidian renderer process.",String(De),String(n.maxFileSizeMb),De,Pt,l=>ut(e,"maxFileSizeMb",l)),dt(r,"Allow remote conversion","Enable posting documents to a configured self-hosted Syncfusion-compatible conversion service. Leave off to keep documents local.",n.allowRemoteConversion,l=>{const u={allowRemoteConversion:l};l&&!e.settingsSignal.value.syncfusionServiceUrl.trim()&&(u.syncfusionServiceUrl=it),ue(e,u),u.syncfusionServiceUrl&&i?.setValue(u.syncfusionServiceUrl),s()}),i=zr(r,"Syncfusion service URL","Required for remote conversion. Use a self-hosted endpoint; known public Syncfusion demo hosts are blocked.",it,n.syncfusionServiceUrl,l=>{ue(e,{syncfusionServiceUrl:l}),s()}),o=dt(r,"Prefer remote conversion","Use the configured self-hosted converter before the local parser. Otherwise it is only used as a fallback after local parsing fails.",n.preferRemoteConversion,l=>ue(e,{preferRemoteConversion:l},t)),a=ht(r,"Remote conversion timeout","Abort self-hosted conversion requests after this many milliseconds.","15000",String(n.remoteConversionTimeoutMs),Lt,Dt,l=>ut(e,"remoteConversionTimeoutMs",l)),s()}function ue(r,e,t){r.patchSettings($e({...r.settingsSignal.value,...e})),t?.()}function ut(r,e,t){if(t.trim()==="")return null;const n=Number(t);if(!Number.isFinite(n))return null;const i=$e({...r.settingsSignal.value,[e]:n});return r.patchSettings(i),i[e]}function dt(r,e,t,n,i){let o=null;return new y.Setting(r).setName(e).setDesc(t).addToggle(a=>(o=a,a.setValue(n).onChange(i))),o}function zr(r,e,t,n,i,o){let a=null;return new y.Setting(r).setName(e).setDesc(t).addText(s=>(a=s,s.setPlaceholder(n).setValue(i).onChange(o))),a}function ht(r,e,t,n,i,o,a,s){let l=null;return new y.Setting(r).setName(e).setDesc(t).addText(u=>(l=u,u.inputEl.type="number",u.inputEl.min=String(o),u.inputEl.max=String(a),u.inputEl.step="1",u.setPlaceholder(n).setValue(i).onChange(g=>{const c=s(g);c!==null&&String(c)!==g.trim()&&u.setValue(String(c))}))),l}const Vr=new Set(["allow-downloads","allow-forms","allow-modals","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-same-origin","allow-scripts"]);function Ur(r){const e=globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`;return`${r}-${e}`}function Hr(r){const e=[...new Set(r.map(t=>t.trim()).filter(Boolean))];for(const t of e)if(!Vr.has(t))throw new Error(`Unsupported iframe sandbox token: ${t}`);return e.sort().join(" ")}function jr(r,e){if(typeof r!="object"||r===null)return!1;const t=r;return t.channel===e&&typeof t.bridgeId=="string"&&t.bridgeId.length>0&&typeof t.type=="string"}const Zr=String.raw`
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
mark.search-match { background: var(--word-mark); color: inherit; padding: 0 1px; border-radius: 2px; }
mark.search-match.is-active { background: var(--word-mark-active); color: #111827; }
`,Gr=String.raw`
const CHANNEL = 'docklet-word-viewer-bridge';
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
	if (!message || message.channel !== CHANNEL || message.bridgeId !== BRIDGE_ID) return;
	try {
		messageHandlers[message.type]?.(message);
	} catch (error) {
		post('renderError', { message: String(error && error.message ? error.message : error) });
	}
});

function post(type, payload) {
	parent.postMessage({ channel: CHANNEL, bridgeId: BRIDGE_ID, type, ...(payload || {}) }, '*');
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
	if (inline.color) style.color = inline.color;
	if (inline.highlight) style.backgroundColor = inline.highlight;
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
			if (cell.shading) td.style.backgroundColor = cell.shading;
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
`;function Xr(r=""){const e=Gr.replace("__WORD_VIEWER_BRIDGE_ID__",JSON.stringify(r));return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${Zr}</style></head><body><div class="document-shell"><main class="document"><article id="page" class="page"></article></main></div><script>${e}<\/script></body></html>`}function qr(r){return!Yr(r)||!jr(r,B)?!1:r.type==="ready"||r.type==="renderError"&&typeof r.message=="string"||r.type==="searchResult"&&typeof r.total=="number"&&typeof r.active=="number"}function Yr(r){return typeof r=="object"&&r!==null}class Kr{constructor(e,t,n=Ur("word-viewer")){this.container=e,this.callbacks=t,this.bridgeId=n}container;callbacks;bridgeId;iframe=null;ready=!1;readyResolve=null;readyReject=null;readyTimer=null;onMessage=e=>this.handleMessage(e);mount(){return this.destroy(),this.iframe=document.createElement("iframe"),this.iframe.className=gr,this.iframe.setAttribute("sandbox",Hr(["allow-scripts"])),window.addEventListener("message",this.onMessage),this.iframe.srcdoc=Xr(this.bridgeId),this.container.appendChild(this.iframe),new Promise((e,t)=>{this.readyResolve=e,this.readyReject=t,this.readyTimer=setTimeout(()=>{this.readyTimer=null,this.readyResolve=null,this.readyReject=null,t(new w("BRIDGE_TIMEOUT","Word viewer iframe did not become ready."))},ar)})}loadDocument(e,t,n){this.post({channel:B,bridgeId:this.bridgeId,type:"loadDocument",document:e,isDark:t,layout:n})}setTheme(e){this.post({channel:B,bridgeId:this.bridgeId,type:"themeChanged",isDark:e})}setLayout(e){this.post({channel:B,bridgeId:this.bridgeId,type:"layoutChanged",layout:e})}setZoom(e){this.post({channel:B,bridgeId:this.bridgeId,type:"zoomChanged",zoom:e})}setSearch(e){this.post({channel:B,bridgeId:this.bridgeId,type:"searchChanged",query:e})}navigateSearch(e){this.post({channel:B,bridgeId:this.bridgeId,type:"searchNavigate",direction:e})}scrollToBlock(e){this.post({channel:B,bridgeId:this.bridgeId,type:"scrollToBlock",blockId:e})}destroy(){window.removeEventListener("message",this.onMessage),this.clearReadyTimer(),this.readyReject?.(new w("BRIDGE_DESTROYED","Word viewer iframe was destroyed before it became ready.")),this.iframe?.parentElement&&this.iframe.parentElement.removeChild(this.iframe),this.iframe=null,this.ready=!1,this.readyResolve=null,this.readyReject=null}handleMessage(e){!this.iframe||e.source!==this.iframe.contentWindow||qr(e.data)&&e.data.bridgeId===this.bridgeId&&this.dispatch(e.data)}dispatch(e){if(e.type==="ready"){this.ready=!0,this.clearReadyTimer(),this.readyResolve?.(),this.readyResolve=null,this.readyReject=null;return}e.type==="renderError"&&this.callbacks.onError(e.message),e.type==="searchResult"&&this.callbacks.onSearchResult({total:e.total,active:e.active})}post(e){!this.iframe?.contentWindow||!this.ready||this.iframe.contentWindow.postMessage(e,"*")}clearReadyTimer(){this.readyTimer!==null&&(clearTimeout(this.readyTimer),this.readyTimer=null)}}class Qr{bridge=null;async mount(e,t,n,i,o,a,s){this.destroy(),e.empty(),this.bridge=new Kr(e,t),await this.bridge.mount(),this.bridge.loadDocument(n,i,o),this.bridge.setZoom(a),this.bridge.setSearch(s)}setTheme(e){this.bridge?.setTheme(e)}setLayout(e){this.bridge?.setLayout(e)}setZoom(e){this.bridge?.setZoom(e)}setSearch(e){this.bridge?.setSearch(e)}navigateSearch(e){this.bridge?.navigateSearch(e)}scrollToBlock(e){this.bridge?.scrollToBlock(e)}destroy(){this.bridge?.destroy(),this.bridge=null}}class X extends y.ItemView{constructor(e,t,n,i){super(e),this.repository=t,this.loader=n,this.settingsSignal=i,this.layout=i.value.defaultLayout}repository;loader;settingsSignal;currentFile=null;bridge=new Qr;model=null;statusEl=null;warningEl=null;outlineEl=null;iframeHostEl=null;layoutButtonEl=null;searchInputEl=null;searchStatusEl=null;layout;zoom=Nt;outlineVisible=!0;loadSequence=0;getViewType(){return A}getDisplayText(){return this.currentFile?this.currentFile.basename:x}getIcon(){return It}getDocumentPath(){return this.currentFile?.path??null}async onClose(){this.invalidateCurrentLoad(),this.destroyBridge()}async reloadDocument(){await this.loadCurrentDocument()}updateTheme(e){this.bridge.setTheme(e)}async onOpen(){this.buildDom(),this.currentFile?await this.loadCurrentDocument():this.showEmpty()}async setState(e,t){await super.setState(e,t);const n=Jr(e[ot],this.settingsSignal.value.defaultLayout),i=en(e[at]),o=this.layout!==n,a=this.zoom!==i;this.layout=n,this.zoom=i,this.updateLayoutButton();const s=e.file;if(typeof s!="string"){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showEmpty();return}if(this.currentFile?.path===s&&this.model){o&&this.bridge.setLayout(this.layout),a&&this.bridge.setZoom(this.zoom),this.showDocumentStatus(this.model);return}const l=this.repository.resolveWordFile(s);if(!l){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showError("Word document was not found.",()=>{this.setState(e,t)});return}this.currentFile?.path!==l.path&&(this.model=null),this.currentFile=l,await this.loadCurrentDocument()}getState(){return{...super.getState(),...this.currentFile?{file:this.currentFile.path}:{},[ot]:this.layout,[at]:this.zoom}}refreshSettings(){this.model&&this.showDocumentStatus(this.model)}async loadCurrentDocument(){if(!this.currentFile){this.invalidateCurrentLoad(),this.showEmpty();return}const e=this.currentFile,t=++this.loadSequence;try{this.showLoading();const n=this.settingsSignal.value,i=await this.repository.readWordFile(e,n.maxFileSizeMb);if(!this.isCurrentLoad(t,e))return;const o=await this.loader.load(i,n);if(!this.isCurrentLoad(t,e)||(this.model=o,await this.mountBridge(this.model),!this.isCurrentLoad(t,e)))return;this.showDocumentStatus(this.model)}catch(n){if(!this.isCurrentLoad(t,e))return;ae("WordViewerView.loadCurrentDocument",n),new y.Notice(`${hr} - ${st(n)}`),this.showError(st(n),()=>{this.loadCurrentDocument()})}}async mountBridge(e){this.iframeHostEl&&(this.destroyBridge(),await this.bridge.mount(this.iframeHostEl,{onError:t=>this.showError(t,()=>{this.loadCurrentDocument()}),onSearchResult:t=>this.showSearchResult(t)},e,this.app.isDarkMode(),this.layout,this.zoom,this.searchInputEl?.value??""))}buildDom(){const e=this.containerEl.children[1];if(!(e instanceof HTMLElement))return;e.empty(),e.addClass(fr),e.addClass(nr,ir);const t=e.createDiv({cls:Dr});this.buildToolbar(t),this.statusEl=t.createDiv({cls:Lr}),this.warningEl=e.createDiv({cls:Rr});const n=e.createDiv({cls:mr});this.outlineEl=n.createDiv({cls:vr}),this.iframeHostEl=n.createDiv({cls:_r})}buildToolbar(e){for(const n of this.toolbarActions()){const i=this.createToolbarButton(e,n);n.label===this.layoutButtonLabel()&&(this.layoutButtonEl=i)}const t=e.createDiv({cls:xr});this.searchInputEl=t.createEl("input",{cls:kr,attr:{type:"search",placeholder:"Search"}}),this.searchInputEl.addEventListener("input",()=>this.bridge.setSearch(this.searchInputEl?.value??"")),this.searchInputEl.addEventListener("keydown",n=>{n.key==="Enter"&&this.bridge.navigateSearch(n.shiftKey?"previous":"next")}),this.createToolbarButton(t,{icon:"chevron-up",label:"Previous search result",onClick:()=>this.bridge.navigateSearch("previous")}),this.createToolbarButton(t,{icon:"chevron-down",label:"Next search result",onClick:()=>this.bridge.navigateSearch("next")}),this.searchStatusEl=t.createDiv({cls:Er,text:"0/0"})}toolbarActions(){return[{icon:"refresh-cw",label:"Reload document",onClick:()=>{this.reloadDocument()}},{icon:this.layoutButtonIcon(),label:this.layoutButtonLabel(),onClick:()=>this.toggleLayout()},{icon:"zoom-out",label:"Zoom out",onClick:()=>this.changeZoom(-.1)},{icon:"zoom-in",label:"Zoom in",onClick:()=>this.changeZoom(cr)},{icon:"list-tree",label:"Toggle document outline",onClick:()=>this.toggleOutline()},{icon:"copy",label:"Copy document text",onClick:()=>{this.copyDocumentText()}},{icon:"external-link",label:"Open in default app",onClick:()=>{this.openExternally()}}]}toggleLayout(){this.layout=this.layout==="paginated"?"continuous":"paginated",this.bridge.setLayout(this.layout),this.updateLayoutButton(),this.model&&this.showDocumentStatus(this.model)}changeZoom(e){this.zoom=Math.round(Math.min(Rt,Math.max(_t,this.zoom+e))*100)/100,this.bridge.setZoom(this.zoom),this.model&&this.showDocumentStatus(this.model)}toggleOutline(){this.outlineVisible=!this.outlineVisible,this.outlineEl?.toggle(this.outlineVisible)}createToolbarButton(e,t){const n=e.createEl("button",{cls:Nr});return n.type="button",pt(n,t.icon,t.label),n.addEventListener("click",t.onClick),n}updateLayoutButton(){this.layoutButtonEl&&pt(this.layoutButtonEl,this.layoutButtonIcon(),this.layoutButtonLabel())}layoutButtonIcon(){return this.layout==="paginated"?"rows-3":"files"}layoutButtonLabel(){return this.layout==="paginated"?"Switch to continuous layout":"Switch to paginated layout"}showDocumentStatus(e){if(this.statusEl?.setText(`${e.stats.paragraphs} paragraphs · ${e.stats.tables} tables · ${e.stats.images} images · ${e.stats.links} links · ${Math.round(this.zoom*100)}%`),this.warningEl){const t=[...e.warnings,...e.unsupportedFeatures.map(n=>`Unsupported: ${n}.`)];this.warningEl.empty(),t.length>0?(this.warningEl.setText(t.join(" ")),this.warningEl.show()):this.warningEl.hide()}this.renderOutline(e)}renderOutline(e){if(!this.outlineEl)return;if(this.outlineEl.empty(),this.outlineEl.toggle(this.outlineVisible),this.outlineEl.createDiv({cls:yr,text:"Outline"}),e.outline.length===0){this.outlineEl.createDiv({cls:Sr,text:"No headings found."});return}const t=this.outlineEl.createDiv({cls:wr});for(const n of e.outline){const i=t.createEl("button",{cls:br,text:n.title});i.type="button",i.dataset.level=String(n.level),i.addEventListener("click",()=>this.bridge.scrollToBlock(n.id))}}showSearchResult(e){this.searchStatusEl?.setText(e.total>0?`${e.active+1}/${e.total}`:"0/0")}async copyDocumentText(){if(!this.model){new y.Notice(`${x}: no document text to copy.`);return}try{await navigator.clipboard.writeText(this.model.plainText),new y.Notice(`${x}: copied document text.`)}catch(e){ae("WordViewerView.copyDocumentText",e),new y.Notice(`${x}: could not copy document text.`)}}async openExternally(){if(!this.currentFile){new y.Notice(`${x}: no Word document open.`);return}try{const e=this.app.vault.adapter.getFullPath?.(this.currentFile.path);if(!e){new y.Notice(`${x}: cannot resolve local file path.`);return}const n=await require("electron").shell?.openPath(e);typeof n=="string"&&n.length>0&&new y.Notice(`${x}: ${n}`)}catch(e){ae("WordViewerView.openExternally",e),new y.Notice(`${x}: could not open document externally.`)}}showEmpty(){this.destroyBridge(),this.showState("No Word document open","Open a .docx file from the file explorer or command palette.")}showLoading(){this.showState("Loading Word document","Reading and rendering local DOCX content.")}showError(e,t){this.destroyBridge();const n=[{label:"Try again",onClick:t}];this.model&&n.push({label:"Copy document text",onClick:()=>{this.copyDocumentText()}}),this.currentFile&&n.push({label:"Open in default app",onClick:()=>{this.openExternally()}}),this.showState("Could not render Word document",e,n)}showState(e,t,n=[]){if(this.statusEl?.setText(""),this.warningEl?.hide(),this.outlineEl?.empty(),!this.iframeHostEl)return;this.iframeHostEl.empty();const i=this.iframeHostEl.createDiv({cls:Tr});i.createDiv({cls:Cr,text:e}),i.createDiv({cls:Ir,text:t});for(const o of n)i.createEl("button",{cls:Pr,text:o.label}).addEventListener("click",o.onClick)}destroyBridge(){this.bridge.destroy()}invalidateCurrentLoad(){this.loadSequence++}isCurrentLoad(e,t){return e===this.loadSequence&&this.currentFile?.path===t.path}}function pt(r,e,t){r.empty(),y.setIcon(r,e),r.setAttribute("aria-label",t),r.setAttribute("title",t)}function Jr(r,e){return r==="continuous"||r==="paginated"?r:e}function en(r){return typeof r!="number"||!Number.isFinite(r)?Nt:Math.round(Math.min(Rt,Math.max(_t,r))*100)/100}function tn(r){return r.trim().toLowerCase().endsWith(".docx")?"docx":null}function rn(){return{entries:0,expandedBytes:0}}function nn(r,e,t){const n=Number.isFinite(e)&&e>0?e:0;return r.entries+=1,r.expandedBytes+=n,r.entries>t.maxEntries?"too-many-entries":r.expandedBytes>t.maxExpandedBytes?"too-many-expanded-bytes":n>t.maxEntryBytes?"entry-too-large":"ok"}function on(r){const e=r.replace(/\\/gu,"/").replace(/^\.\//u,"");if(!e||e.startsWith("/")||e.includes("\0"))return null;const t=e.split("/");return t.some(n=>n===".."||n==="")?null:t.filter(n=>n!==".").join("/")}var E=Uint8Array,Y=Uint16Array,an=Int32Array,Ot=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),At=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),sn=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bt=function(r,e){for(var t=new Y(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new an(t[30]),n=1;n<30;++n)for(var o=t[n];o<t[n+1];++o)i[o]=o-t[n]<<5|n;return{b:t,r:i}},Ft=Bt(Ot,2),$t=Ft.b,ln=Ft.r;$t[28]=258,ln[258]=28;var cn=Bt(At,0),un=cn.b,_e=new Y(32768);for(var f=0;f<32768;++f){var O=(f&43690)>>1|(f&21845)<<1;O=(O&52428)>>2|(O&13107)<<2,O=(O&61680)>>4|(O&3855)<<4,_e[f]=((O&65280)>>8|(O&255)<<8)>>1}var se=(function(r,e,t){for(var n=r.length,i=0,o=new Y(e);i<n;++i)r[i]&&++o[r[i]-1];var a=new Y(e);for(i=1;i<e;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(t){s=new Y(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var u=i<<4|r[i],g=e-r[i],c=a[r[i]-1]++<<g,p=c|(1<<g)-1;c<=p;++c)s[_e[c]>>l]=u}else for(s=new Y(n),i=0;i<n;++i)r[i]&&(s[i]=_e[a[r[i]-1]++]>>15-r[i]);return s}),le=new E(288);for(var f=0;f<144;++f)le[f]=8;for(var f=144;f<256;++f)le[f]=9;for(var f=256;f<280;++f)le[f]=7;for(var f=280;f<288;++f)le[f]=8;var Wt=new E(32);for(var f=0;f<32;++f)Wt[f]=5;var dn=se(le,9,1),hn=se(Wt,5,1),Ce=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},I=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Ie=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},pn=function(r){return(r+7)/8|0},We=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new E(r.subarray(e,t))},fn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],k=function(r,e,t){var n=new Error(e||fn[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,k),!t)throw n;return n},mn=function(r,e,t,n){var i=r.length,o=n?n.length:0;if(!i||e.f&&!e.l)return t||new E(0);var a=!t,s=a||e.i!=2,l=e.i;a&&(t=new E(i*3));var u=function(et){var tt=t.length;if(et>tt){var rt=new E(Math.max(tt*2,et));rt.set(t),t=rt}},g=e.f||0,c=e.p||0,p=e.b||0,P=e.l,_=e.d,z=e.m,V=e.n,R=i*8;do{if(!P){g=I(r,c,1);var ye=I(r,c+1,3);if(c+=3,ye)if(ye==1)P=dn,_=hn,z=9,V=5;else if(ye==2){var Se=I(r,c,31)+257,Ze=I(r,c+10,15)+4,Ge=Se+I(r,c+5,31)+1;c+=14;for(var te=new E(Ge),xe=new E(19),T=0;T<Ze;++T)xe[sn[T]]=I(r,c+T*3,7);c+=Ze*3;for(var Xe=Ce(xe),Gt=(1<<Xe)-1,Xt=se(xe,Xe,1),T=0;T<Ge;){var qe=Xt[I(r,c,Gt)];c+=qe&15;var L=qe>>4;if(L<16)te[T++]=L;else{var j=0,ce=0;for(L==16?(ce=3+I(r,c,3),c+=2,j=te[T-1]):L==17?(ce=3+I(r,c,7),c+=3):L==18&&(ce=11+I(r,c,127),c+=7);ce--;)te[T++]=j}}var Ye=te.subarray(0,Se),M=te.subarray(Se);z=Ce(Ye),V=Ce(M),P=se(Ye,z,1),_=se(M,V,1)}else k(1);else{var L=pn(c)+4,we=r[L-4]|r[L-3]<<8,be=L+we;if(be>i){l&&k(0);break}s&&u(p+we),t.set(r.subarray(L,be),p),e.b=p+=we,e.p=c=be*8,e.f=g;continue}if(c>R){l&&k(0);break}}s&&u(p+131072);for(var qt=(1<<z)-1,Yt=(1<<V)-1,ke=c;;ke=c){var j=P[Ie(r,c)&qt],Z=j>>4;if(c+=j&15,c>R){l&&k(0);break}if(j||k(2),Z<256)t[p++]=Z;else if(Z==256){ke=c,P=null;break}else{var Ke=Z-254;if(Z>264){var T=Z-257,re=Ot[T];Ke=I(r,c,(1<<re)-1)+$t[T],c+=re}var Ee=_[Ie(r,c)&Yt],Te=Ee>>4;Ee||k(3),c+=Ee&15;var M=un[Te];if(Te>3){var re=At[Te];M+=Ie(r,c)&(1<<re)-1,c+=re}if(c>R){l&&k(0);break}s&&u(p+131072);var Qe=p+Ke;if(p<M){var Je=o-M,Kt=Math.min(M,Qe);for(Je+p<0&&k(3);p<Kt;++p)t[p]=n[Je+p]}for(;p<Qe;++p)t[p]=t[p-M]}}e.l=P,e.p=ke,e.b=p,e.f=g,P&&(g=1,e.m=z,e.d=_,e.n=V)}while(!g);return p!=t.length&&a?We(t,0,p):t.subarray(0,p)},gn=new E(0),N=function(r,e){return r[e]|r[e+1]<<8},C=function(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0},Pe=function(r,e){return C(r,e)+C(r,e+4)*4294967296};function vn(r,e){return mn(r,{i:2},e&&e.out,e&&e.dictionary)}var Re=typeof TextDecoder<"u"&&new TextDecoder,yn=0;try{Re.decode(gn,{stream:!0}),yn=1}catch{}var wn=function(r){for(var e="",t=0;;){var n=r[t++],i=(n>127)+(n>223)+(n>239);if(t+i>r.length)return{s:e,r:We(r,t-1)};i?i==3?(n=((n&15)<<18|(r[t++]&63)<<12|(r[t++]&63)<<6|r[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?e+=String.fromCharCode((n&31)<<6|r[t++]&63):e+=String.fromCharCode((n&15)<<12|(r[t++]&63)<<6|r[t++]&63):e+=String.fromCharCode(n)}};function bn(r,e){if(e){for(var t="",n=0;n<r.length;n+=16384)t+=String.fromCharCode.apply(null,r.subarray(n,n+16384));return t}else{if(Re)return Re.decode(r);var i=wn(r),o=i.s,t=i.r;return t.length&&k(8),o}}var Sn=function(r,e){return e+30+N(r,e+26)+N(r,e+28)},xn=function(r,e,t){var n=N(r,e+28),i=N(r,e+30),o=bn(r.subarray(e+46,e+46+n),!(N(r,e+8)&2048)),a=e+46+n,s=kn(r,a,i,t,C(r,e+20),C(r,e+24),C(r,e+42)),l=s[0],u=s[1],g=s[2];return[N(r,e+10),l,u,o,a+i+N(r,e+32),g]},kn=function(r,e,t,n,i,o,a){var s=i==4294967295,l=o==4294967295,u=a==4294967295,g=e+t,c=s+l+u;if(n&&c){for(;e+4<g;e+=4+N(r,e+2))if(N(r,e)==1)return[s?Pe(r,e+4+8*l):i,l?Pe(r,e+4):o,u?Pe(r,e+4+8*(l+s)):a,1];n<2&&k(13)}return[i,o,a,0]};function En(r,e){for(var t={},n=r.length-22;C(r,n)!=101010256;--n)(!n||r.length-n>65558)&&k(13);var i=N(r,n+8);if(!i)return{};var o=C(r,n+16),a=C(r,n-20)==117853008;if(a){var s=C(r,n-12);a=C(r,s)==101075792,a&&(i=C(r,s+32),o=C(r,s+48))}for(var l=e&&e.filter,u=0;u<i;++u){var g=xn(r,o,a),c=g[0],p=g[1],P=g[2],_=g[3],z=g[4],V=g[5],R=Sn(r,V);o=z,(!l||l({name:_,size:p,originalSize:P,compression:c}))&&(c?c==8?t[_]=vn(r.subarray(R,R+p),{out:new E(P)}):k(14,"unknown compression type "+c):t[_]=We(r,R,R+p))}return t}function $(r,e){const t=new DOMParser().parseFromString(r,"application/xml");if(t.getElementsByTagName("parsererror")[0])throw new w("INVALID_PACKAGE",`Could not parse ${e}.`);return t}function W(r){return new TextDecoder().decode(r)}function d(r,e){return r?.getAttribute(`w:${e}`)??r?.getAttribute(`r:${e}`)??r?.getAttribute(e)??null}function K(r,e){return D(r,e)[0]??null}function h(r,e){return S(r,e)[0]??null}function D(r,e){if(!r)return[];const t=[],n=i=>{for(const o of S(i))o.localName===e&&t.push(o),n(o)};return n(r),t}function S(r,e){if(!r)return[];const t=Array.from(r.childNodes).filter(n=>n.nodeType===1);return e?t.filter(n=>n.localName===e):t}const he="word/document.xml",ze="word/_rels/document.xml.rels",zt="[Content_Types].xml",Ve="docProps/core.xml",ve="word/styles.xml",Ue="word/numbering.xml",Me="word/comments.xml",Oe="word/footnotes.xml",Ae="word/endnotes.xml",Tn={maxEntries:1500,maxExpandedBytes:150*1024*1024,maxEntryBytes:25*1024*1024},Cn=new Set([zt,he,ze,Ve,ve,Ue,Me,Oe,Ae]);class In{constructor(e=En){this.unzip=e}unzip;read(e){const t=[],n=rn();let i;try{i=this.unzip(new Uint8Array(e),{filter:s=>this.shouldExtract(s,n,t)})}catch(s){throw s instanceof w?s:new w("INVALID_PACKAGE",`Could not unzip DOCX package: ${String(s)}`)}if(!i[zt]||!i[he])throw new w("INVALID_PACKAGE","DOCX package is missing required Word document parts.");const o=$(W(i[he]),he),a=Ln(i,o);return i[ve]||t.push("Document styles are missing; common Word style names will be inferred where possible."),a.length>0&&t.push(`Unsupported Word features detected: ${a.join(", ")}.`),{files:i,documentXml:o,warnings:t,unsupportedFeatures:a}}shouldExtract(e,t,n){const i=nn(t,e.originalSize,Tn);if(i==="too-many-entries")throw new w("INVALID_PACKAGE",`DOCX package has too many ZIP entries (${t.entries}).`);if(i==="too-many-expanded-bytes")throw new w("INVALID_PACKAGE","DOCX package expands beyond the local safety limit.");const o=on(e.name);return!o||!Pn(o)?!1:o.startsWith("word/media/")&&i==="entry-too-large"?(n.push(`Skipped oversized embedded media: ${o}.`),!1):!0}}function Pn(r){return Cn.has(r)||/^word\/(?:header|footer)\d+\.xml$/.test(r)||/^word\/_rels\/(?:header|footer)\d+\.xml\.rels$/.test(r)||r.startsWith("word/media/")}function Ln(r,e){const t=e.documentElement;return[["text boxes",D(t,"txbxContent").length>0],["charts",D(t,"chart").length>0],["SmartArt diagrams",D(t,"diagram").length>0],["equations",D(t,"oMath").length>0||D(t,"oMathPara").length>0],["tracked changes",D(t,"ins").length>0||D(t,"del").length>0],["embedded external document parts",D(t,"altChunk").length>0],["chart parts",Object.keys(r).some(i=>i.startsWith("word/charts/"))]].filter(([,i])=>i).map(([i])=>i)}class Dn{parseRelationships(e){const t=new Map;if(!e)return t;for(const n of D($(W(e),ze).documentElement,"Relationship")){const i=n.getAttribute("Id"),o=n.getAttribute("Target");i&&o&&t.set(i,{target:o,type:n.getAttribute("Type"),targetMode:n.getAttribute("TargetMode")})}return t}parseStyles(e){const t=new Map;if(!e)return t;for(const n of S($(W(e),ve).documentElement,"style")){const i=d(n,"styleId");if(!i)continue;const o=d(h(n,"name"),"val");t.set(i,{styleId:i,name:o,basedOn:d(h(n,"basedOn"),"val"),headingLevel:Ut(d(K(n,"outlineLvl"),"val"))??Ht(o??i)})}return t}parseNumbering(e){const t={numToAbstract:new Map,abstractLevels:new Map};if(!e)return t;const n=$(W(e),Ue);for(const i of S(n.documentElement,"abstractNum")){const o=d(i,"abstractNumId");if(!o)continue;const a=new Map;for(const s of S(i,"lvl")){const l=Number(d(s,"ilvl")??"0"),u=Nn(d(h(s,"numFmt"),"val"));a.set(l,{format:u,text:d(h(s,"lvlText"),"val")??(u==="bullet"?"•":`%${l+1}.`),start:jt(d(h(s,"start"),"val"))??1})}t.abstractLevels.set(o,a)}for(const i of S(n.documentElement,"num")){const o=d(i,"numId"),a=d(h(i,"abstractNumId"),"val");o&&a&&t.numToAbstract.set(o,a)}return t}parseMetadata(e){if(!e)return Vt();const t=$(W(e),Ve).documentElement;return Object.fromEntries(["title","subject","creator","description","created","modified"].map(n=>[n,_n(t,n)]))}}function Vt(){return{title:null,subject:null,creator:null,description:null,created:null,modified:null}}function Ut(r){const e=Number(r);return r&&Number.isInteger(e)&&e>=0&&e<=8?e+1:null}function Ht(r){const e=/^heading([1-6])$/.exec(r.replace(/\s+/g,"").toLowerCase());return e?Number(e[1]):r.replace(/\s+/g,"").toLowerCase()==="title"?1:null}function jt(r){const e=Number(r);return r&&Number.isInteger(e)&&e>0?e:null}function Nn(r){return["bullet","lowerLetter","upperLetter","lowerRoman","upperRoman","none"].includes(r)?r:"decimal"}function _n(r,e){const t=K(r,e)?.textContent?.trim()??"";return t.length>0?t:null}const ft="http://schemas.openxmlformats.org/officeDocument/2006/relationships",Rn=9525,Mn=20;class On{constructor(e=new In,t=new Dn){this.packageReader=e,this.partParser=t}packageReader;partParser;nextId=1;listCounters=new Map;parse(e){this.nextId=1,this.listCounters.clear();const t=this.readPackage(e),n=K(t.documentXml.documentElement,"body");if(!n)throw new w("INVALID_PACKAGE","DOCX package does not contain a Word document body.");const i=Le();i.comments=t.comments.size,i.footnotes=t.footnotes.size,i.endnotes=t.endnotes.size;const o=this.parseBlocks(n,t,i),a=this.parseHeaderFooterParts(t,"header",i),s=this.parseHeaderFooterParts(t,"footer",i),l=yt(t.unsupportedFeatures);return i.unsupported=l.length,{title:t.metadata.title??An(o)??"Word document",metadata:t.metadata,blocks:o,headers:a,footers:s,footnotes:[...t.footnotes.values()],endnotes:[...t.endnotes.values()],comments:[...t.comments.values()],outline:Bn(o),stats:i,warnings:yt(t.warnings),unsupportedFeatures:l,plainText:Fn(o,a,s,t.footnotes,t.endnotes,t.comments)}}readPackage(e){const t=this.packageReader.read(e);return{...t,relationships:this.partParser.parseRelationships(t.files[ze]),styles:this.partParser.parseStyles(t.files[ve]),numbering:this.partParser.parseNumbering(t.files[Ue]),metadata:this.partParser.parseMetadata(t.files[Ve]),footnotes:this.parseNotes(t.files[Oe],"footnote"),endnotes:this.parseNotes(t.files[Ae],"endnote"),comments:this.parseComments(t.files[Me])}}parseBlocks(e,t,n){const i=[];for(const o of S(e)){if(o.localName==="p"&&i.push(...this.splitParagraphOnPageBreaks(this.parseParagraph(o,t,n))),o.localName==="tbl"&&i.push(this.parseTable(o,t,n)),o.localName==="sdt"){const a=h(o,"sdtContent");a&&i.push(...this.parseBlocks(a,t,n))}o.localName==="altChunk"&&i.push({type:"unsupported",id:this.makeId("unsupported"),label:"Embedded external document",detail:"This Word altChunk content cannot be rendered locally yet."})}return i}parseParagraph(e,t,n){n.paragraphs++;const i=this.parseParagraphStyle(e,t),o=this.parseListInfo(e,t);return o&&n.lists++,{type:"paragraph",id:this.makeId("p"),styleName:i.styleName,styleLabel:i.styleLabel,headingLevel:i.headingLevel,alignment:this.parseParagraphAlignment(e),list:o,format:this.parseParagraphFormat(e),inlines:S(e).filter(a=>a.localName==="r"||a.localName==="hyperlink").flatMap(a=>this.parseInlineContainer(a,t,n))}}splitParagraphOnPageBreaks(e){if(!e.inlines.some(i=>i.type==="pageBreak"))return[e];const t=[];let n=[];for(const i of e.inlines){if(i.type!=="pageBreak"){n.push(i);continue}n.length>0&&t.push({...e,id:this.makeId("p"),inlines:n}),t.push({type:"pageBreak",id:this.makeId("page")}),n=[]}return n.length>0&&t.push({...e,id:this.makeId("p"),inlines:n}),t.length>0?t:[{type:"pageBreak",id:this.makeId("page")}]}parseParagraphStyle(e,t){const n=h(e,"pPr"),i=d(h(n,"pStyle"),"val"),o=i?t.styles.get(i)??null:null;return{styleName:i,styleLabel:o?.name??i,headingLevel:this.parseParagraphHeadingLevel(n,i,o)}}parseParagraphHeadingLevel(e,t,n){return Ut(d(h(e,"outlineLvl"),"val"))??n?.headingLevel??Ht(n?.name??t??"")}parseParagraphAlignment(e){const t=d(h(h(e,"pPr"),"jc"),"val");return t==="center"||t==="right"?t:t==="both"?"justify":t==="left"?"left":null}parseParagraphFormat(e){const t=h(e,"pPr"),n=h(t,"spacing"),i=h(t,"ind");return{marginBeforePt:q(d(n,"before")),marginAfterPt:q(d(n,"after")),indentLeftPt:q(d(i,"left")),indentHangingPt:q(d(i,"hanging")),firstLineIndentPt:q(d(i,"firstLine"))}}parseListInfo(e,t){const n=h(h(e,"pPr"),"numPr");if(!n)return null;const i=d(h(n,"numId"),"val");if(!i)return null;const o=Number(d(h(n,"ilvl"),"val")??"0"),a=t.numbering.numToAbstract.get(i),s=a?t.numbering.abstractLevels.get(a)?.get(o):void 0,l=s?.format??"decimal";return{numId:i,level:o,format:l,label:this.nextListLabel(i,o,s)}}nextListLabel(e,t,n){const i=this.listCounters.get(e)??[],o=n?.start??1;i[t]=i[t]===void 0?o:i[t]+1,i.length=t+1,this.listCounters.set(e,i);const a=n?.format??"decimal",s=a==="bullet"?n?.text??"•":`${vt(i[t]??o,a)}.`;return(n?.text??s).replace(/%([1-9])/g,(l,u)=>vt(i[Number(u)-1]??o,a))}parseInlineContainer(e,t,n){if(e.localName!=="hyperlink")return this.parseRun(e,t,n,null);const i=this.resolveHyperlink(e,t);return i&&n.links++,S(e,"r").flatMap(o=>this.parseRun(o,t,n,i))}resolveHyperlink(e,t){const n=e.getAttributeNS(ft,"id")??e.getAttribute("r:id");if(n){const o=t.relationships.get(n);if(o?.target)return o.target}const i=d(e,"anchor");return i?`#${i}`:null}parseRun(e,t,n,i){const o=this.parseRunFormat(e),a=[];for(const s of S(e))if(s.localName==="t"||s.localName==="instrText"){const l=s.textContent??"";l.length>0&&a.push({type:"text",text:l,hyperlink:i,...o})}else if(s.localName==="tab")a.push({type:"text",text:"	",hyperlink:i,...o});else if(s.localName==="br"||s.localName==="cr")a.push(d(s,"type")==="page"?{type:"pageBreak"}:{type:"break"});else if(s.localName==="drawing"||s.localName==="pict"){const l=this.parseImage(s,t);l&&(n.images++,a.push(l))}else s.localName==="footnoteReference"?a.push({type:"noteReference",noteType:"footnote",noteId:d(s,"id")??""}):s.localName==="endnoteReference"?a.push({type:"noteReference",noteType:"endnote",noteId:d(s,"id")??""}):s.localName==="commentReference"&&a.push({type:"commentReference",commentId:d(s,"id")??""});return a}parseRunFormat(e){const t=h(e,"rPr"),n=d(h(t,"vertAlign"),"val");return{bold:ne(t,"b"),italic:ne(t,"i"),underline:ne(t,"u"),strikethrough:ne(t,"strike")||ne(t,"dstrike"),superscript:n==="superscript",subscript:n==="subscript",color:gt(d(h(t,"color"),"val")),highlight:Zn(d(h(t,"highlight"),"val")),fontSizePt:jn(d(h(t,"sz"),"val"))}}parseImage(e,t){const n=K(e,"blip"),i=n?.getAttributeNS(ft,"embed")??n?.getAttribute("r:embed")??null;if(!i)return null;const o=t.relationships.get(i);if(!o?.target||o.targetMode==="External")return null;const a=$n("word",o.target),s=t.files[a];if(!s)return null;const l=K(e,"extent"),u=K(e,"docPr");return{type:"image",src:`data:${Un(a)};base64,${Vn(s)}`,altText:u?.getAttribute("descr")??u?.getAttribute("title")??"Embedded image",widthPx:mt(l?.getAttribute("cx")),heightPx:mt(l?.getAttribute("cy"))}}parseTable(e,t,n){return n.tables++,{type:"table",id:this.makeId("table"),rows:S(e,"tr").map(i=>({cells:S(i,"tc").map(o=>{const a=h(o,"tcPr")??o;return{colSpan:jt(d(h(a,"gridSpan"),"val"))??1,rowSpan:(h(a,"vMerge"),1),shading:gt(d(h(a,"shd"),"fill")),widthPt:Hn(h(a,"tcW")),blocks:this.parseBlocks(o,t,n)}})}))}}parseHeaderFooterParts(e,t,n){const i=`word/${t}`;return Object.keys(e.files).filter(o=>o.startsWith(i)&&o.endsWith(".xml")).sort().flatMap(o=>{const a=e.files[o];if(!a)return[];const s={...e,relationships:this.partParser.parseRelationships(e.files[Wn(o)])};return[{id:this.makeId(t),kind:t,blocks:this.parseBlocks($(W(a),o).documentElement,s,n)}]})}parseNotes(e,t){const n=new Map;if(!e)return n;const i=$(W(e),t==="footnote"?Oe:Ae),o=this.createPartPackage(i),a=Le();for(const s of S(i.documentElement,t)){const l=d(s,"id");if(!l||l.startsWith("-"))continue;const u=this.parseBlocks(s,o,a);n.set(l,{id:l,blocks:u,plainText:Q(u)})}return n}parseComments(e){const t=new Map;if(!e)return t;const n=$(W(e),Me),i=this.createPartPackage(n),o=Le();for(const a of S(n.documentElement,"comment")){const s=d(a,"id");if(!s)continue;const l=this.parseBlocks(a,i,o);t.set(s,{id:s,blocks:l,plainText:Q(l),author:d(a,"author"),date:d(a,"date")})}return t}createPartPackage(e){return{files:{},documentXml:e,relationships:new Map,styles:new Map,numbering:{numToAbstract:new Map,abstractLevels:new Map},metadata:Vt(),footnotes:new Map,endnotes:new Map,comments:new Map,warnings:[],unsupportedFeatures:[]}}makeId(e){return`${e}-${this.nextId++}`}}function Le(){return{paragraphs:0,tables:0,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0}}function An(r){for(const e of r)if(e.type==="paragraph"){const t=He(e.inlines).trim();if(t.length>0)return t}return null}function Bn(r){return r.flatMap(e=>{if(e.type!=="paragraph"||!e.headingLevel)return[];const t=He(e.inlines).trim();return t.length>0?[{id:e.id,title:t,level:e.headingLevel}]:[]})}function Fn(r,e,t,n,i,o){return[Q(r),...e.map(a=>Q(a.blocks)),...t.map(a=>Q(a.blocks)),...[...n.values()].map(a=>a.plainText),...[...i.values()].map(a=>a.plainText),...[...o.values()].map(a=>a.plainText)].filter(a=>a.length>0).join(`
`)}function Q(r){return r.map(e=>e.type==="paragraph"?He(e.inlines):e.type==="pageBreak"?`
--- Page break ---
`:e.type==="unsupported"?`[${e.label}]`:e.rows.map(t=>t.cells.map(n=>Q(n.blocks)).join("	")).join(`
`)).filter(e=>e.length>0).join(`
`)}function He(r){return r.map(e=>e.type==="text"?e.text:e.type==="break"||e.type==="pageBreak"?`
`:e.type==="image"?`[Image: ${e.altText}]`:e.type==="noteReference"?`[${e.noteType} ${e.noteId}]`:`[comment ${e.commentId}]`).join("")}function ne(r,e){const t=h(r,e),n=d(t,"val");return!!t&&n!=="false"&&n!=="0"&&n!=="off"}function $n(r,e){return zn(e.startsWith("/")?e.slice(1):`${r}/${e}`)}function Wn(r){const e=r.lastIndexOf("/"),t=e>=0?r.slice(0,e):"",n=e>=0?r.slice(e+1):r;return t?`${t}/_rels/${n}.rels`:`_rels/${n}.rels`}function zn(r){const e=[];for(const t of r.split("/"))if(!(!t||t===".")){if(t===".."){e.pop();continue}e.push(t)}return e.join("/")}function mt(r){const e=Number(r);return r&&Number.isFinite(e)?Math.round(e/Rn):null}function Vn(r){let e="";for(let t=0;t<r.length;t+=32768)e+=String.fromCharCode(...r.subarray(t,t+32768));return btoa(e)}function Un(r){const e=r.split(".").pop()?.toLowerCase();return{jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",svg:"image/svg+xml",webp:"image/webp"}[e??""]??"image/png"}function q(r){const e=Number(r);return r&&Number.isFinite(e)?e/Mn:null}function Hn(r){const e=d(r,"type");return e&&e!=="dxa"?null:q(d(r,"w"))}function jn(r){const e=Number(r);return r&&Number.isFinite(e)?e/2:null}function gt(r){return r&&r!=="auto"&&/^[0-9a-fA-F]{6}$/.test(r)?`#${r}`:null}function Zn(r){return r&&r!=="none"?{yellow:"#fff59d",green:"#c8e6c9",cyan:"#b2ebf2",magenta:"#f8bbd0",blue:"#bbdefb",red:"#ffcdd2",darkBlue:"#90caf9",darkCyan:"#80deea",darkGreen:"#a5d6a7",darkMagenta:"#ce93d8",darkRed:"#ef9a9a",darkYellow:"#ffe082",darkGray:"#b0bec5",lightGray:"#eceff1",black:"#424242"}[r]??null:null}function vt(r,e){if(e==="lowerLetter"||e==="upperLetter"){const t=Gn(r);return e==="upperLetter"?t.toUpperCase():t}if(e==="lowerRoman"||e==="upperRoman"){const t=Xn(r);return e==="upperRoman"?t.toUpperCase():t}return e==="bullet"||e==="none"?"":String(r)}function Gn(r){let e=Math.max(1,r),t="";for(;e>0;)e--,t=String.fromCharCode(97+e%26)+t,e=Math.floor(e/26);return t}function Xn(r){const e=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]];let t=Math.max(1,Math.min(3999,r)),n="";for(const[i,o]of e)for(;t>=i;)n+=o,t-=i;return n}function yt(r){return[...new Set(r)]}const qn={title:null,subject:null,creator:null,description:null,created:null,modified:null},Yn={marginBeforePt:null,marginAfterPt:null,indentLeftPt:null,indentHangingPt:null,firstLineIndentPt:null};class Kn{nextId=1;parse(e){this.nextId=1;const t=JSON.parse(e),n=G(F(t)?t.sections:[]).flatMap(o=>F(o)?this.parseBlocks(G(o.blocks)):[]),i=Zt(n);return{title:ei(n)??"Converted Word document",metadata:qn,blocks:n,headers:[],footers:[],footnotes:[],endnotes:[],comments:[],outline:n.flatMap(o=>o.type==="paragraph"&&o.headingLevel!==null?[{id:o.id,title:je(o.inlines),level:o.headingLevel}]:[]),stats:{paragraphs:n.filter(o=>o.type==="paragraph").length,tables:n.filter(o=>o.type==="table").length,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0},warnings:["Rendered from self-hosted SFDT conversion; advanced editing metadata is not shown."],unsupportedFeatures:[],plainText:i}}parseBlocks(e){return e.flatMap(t=>F(t)?Array.isArray(t.rows)?[this.parseTable(t)]:[this.parseParagraph(t)]:[])}parseParagraph(e){const t=Qn(e,["paragraphFormat","styleName"]);return{type:"paragraph",id:this.makeId("sfdt-p"),styleName:t,styleLabel:t,headingLevel:Jn(t),alignment:null,list:null,format:Yn,inlines:G(e.inlines).flatMap(n=>this.parseInline(n))}}parseInline(e){if(!F(e)||typeof e.text!="string"||e.text.length===0)return[];const t=F(e.characterFormat)?e.characterFormat:{};return[{type:"text",text:e.text,bold:t.bold===!0,italic:t.italic===!0,underline:t.underline===!0,strikethrough:t.strikethrough===!0,superscript:t.baselineAlignment==="Superscript",subscript:t.baselineAlignment==="Subscript",color:typeof t.fontColor=="string"?t.fontColor:null,highlight:typeof t.highlightColor=="string"?t.highlightColor:null,fontSizePt:typeof t.fontSize=="number"?t.fontSize:null,hyperlink:null}]}parseTable(e){return{type:"table",id:this.makeId("sfdt-table"),rows:G(e.rows).map(t=>({cells:F(t)?G(t.cells).map(n=>({colSpan:1,rowSpan:1,shading:null,widthPt:null,blocks:F(n)?this.parseBlocks(G(n.blocks)):[]})):[]}))}}makeId(e){return`${e}-${this.nextId++}`}}function F(r){return typeof r=="object"&&r!==null}function G(r){return Array.isArray(r)?r:[]}function Qn(r,e){let t=r;for(const n of e){if(!F(t))return null;t=t[n]}return typeof t=="string"?t:null}function Jn(r){const e=/^heading([1-6])$/.exec((r??"").replace(/\s+/g,"").toLowerCase());return e?Number(e[1]):null}function ei(r){for(const e of r){if(e.type!=="paragraph")continue;const t=je(e.inlines).trim();if(t.length>0)return t}return null}function Zt(r){return r.map(e=>e.type==="paragraph"?je(e.inlines):e.type==="pageBreak"?"":e.type==="unsupported"?e.label:e.rows.map(t=>t.cells.map(n=>Zt(n.blocks)).join("	")).join(`
`)).filter(e=>e.length>0).join(`
`)}function je(r){return r.map(e=>e.type==="text"?e.text:"").join("")}class ti{constructor(e){this.app=e}app;resolveWordFile(e){const t=this.app.vault.getFileByPath(e);return t instanceof y.TFile?t:null}async readWordFile(e,t){this.assertWordFile(e);const n=t*1024*1024;if(e.stat.size>n)throw new w("FILE_TOO_LARGE",`Document is ${ri(e.stat.size)}; limit is ${t} MB.`);return{file:e,data:await this.app.vault.readBinary(e),mtime:e.stat.mtime,size:e.stat.size}}assertWordFile(e){if(!de(e.extension)||tn(e.path)!=="docx")throw new w("INVALID_FORMAT",pr)}}function ri(r){return r<1024*1024?`${Math.max(1,Math.round(r/1024))} KB`:`${(r/(1024*1024)).toFixed(1)} MB`}class ni{constructor(e,t,n,i=ae){this.parser=e,this.sfdtParser=t,this.conversionClient=n,this.logger=i}parser;sfdtParser;conversionClient;logger;async load(e,t){if(t.preferRemoteConversion&&Ne(t))try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(n){this.logger("WordDocumentLoadService.remotePreferredConversion",n)}try{return this.parser.parse(e.data)}catch(n){if(!Ne(t))throw n;try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(i){throw this.logger("WordDocumentLoadService.remoteFallbackConversion",i),n}}}}class wt{constructor(e,t){this.app=e,this.settings=t,this.repository=new ti(e),this.parser=new On,this.sfdtParser=new Kn,this.conversionClient=new Ar,this.loader=new ni(this.parser,this.sfdtParser,this.conversionClient)}app;settings;repository;parser;sfdtParser;conversionClient;loader;loaded=!1;load(){this.loaded=!0}createView(e){if(!this.loaded)throw new Error("Docklet Word Viewer runtime is not loaded.");return new X(e,this.repository,this.loader,this.settings)}unload(){this.loaded=!1}}class ii extends y.Plugin{store=tr(U);dockletDescriptor={schemaVersion:1,pluginId:rr,name:x,version:"1.0.1",capabilities:["docx-viewing","docx-parsing","sandboxed-word-runtime","optional-document-conversion"]};runtime=null;get settingsPlugin(){return this}get settingsSignal(){return this.store.settingsSignal}patchSettings(e){this.store.patchSettings(e)}async onload(){await this.loadSettings(),this.runtime=new wt(this.app,this.settingsSignal),this.runtime.load(),this.registerSettingsPersistence(),this.registerView(A,e=>this.requireRuntime().createView(e)),this.registerExtensions([...Ct],A),this.registerCommands(),this.registerEvents(),this.addSettingTab(new $r(this.app,this))}onunload(){this.app.workspace.detachLeavesOfType(A),this.runtime?.unload(),this.runtime=null}async loadSettings(){const e=await this.loadData(),t=$e(e);this.store.setSettings(t),JSON.stringify(e??{})!==JSON.stringify(t)&&await this.saveData(t)}registerSettingsPersistence(){let e=!1;this.register(this.store.onSettingsChange(()=>{if(!e){e=!0;return}this.refreshSettingsInAllViews(),this.saveData(this.settingsSignal.value).catch(t=>ae("DockletWordViewerPlugin.saveData",t))}))}registerCommands(){this.addCommand({id:ur,name:"Docklet Word Viewer: Open active Word document",checkCallback:e=>{const t=this.app.workspace.getActiveFile();return!(t instanceof y.TFile)||!de(t.extension)?!1:(e||this.openWordDocument(t.path),!0)}}),this.addCommand({id:dr,name:"Docklet Word Viewer: Reload active document",checkCallback:e=>{const t=this.getActiveWordView();return t?(e||t.reloadDocument(),!0):!1}})}registerEvents(){this.registerEvent(this.app.workspace.on("file-menu",(e,t)=>this.handleFileMenu(e,t))),this.registerEvent(this.app.workspace.on("css-change",()=>this.updateThemeInAllViews()))}handleFileMenu(e,t){!(t instanceof y.TFile)||!de(t.extension)||e.addItem(n=>n.setTitle("Open in Docklet Word Viewer").setIcon(It).onClick(()=>{this.openWordDocument(t.path)}))}async openWordDocument(e){const t=this.requireRuntime().repository.resolveWordFile(e);if(!t){new y.Notice(`${x}: document not found: ${e}`);return}if(!de(t.extension)){new y.Notice(`${x}: unsupported Word document type: ${t.extension}`);return}const n=this.app.workspace.getLeavesOfType(A).find(i=>this.leafHasDocumentPath(i,e));if(n){this.app.workspace.revealLeaf(n);return}await this.app.workspace.getLeaf(!1).setViewState({type:A,state:{file:t.path},active:!0})}updateThemeInAllViews(){const e=this.app.isDarkMode();for(const t of this.app.workspace.getLeavesOfType(A))t.view instanceof X&&t.view.updateTheme(e)}refreshSettingsInAllViews(){for(const e of this.app.workspace.getLeavesOfType(A))e.view instanceof X&&e.view.refreshSettings()}getActiveWordView(){const e=this.app.workspace.getActiveViewOfType(X);return e instanceof X?e:null}leafHasDocumentPath(e,t){return e.view instanceof X?e.view.getDocumentPath()===t:e.getViewState().state?.file===t}requireRuntime(){return this.runtime||(this.runtime=new wt(this.app,this.settingsSignal),this.runtime.load()),this.runtime}}module.exports=ii;
