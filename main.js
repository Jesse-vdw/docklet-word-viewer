Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});let e=require(`obsidian`);var t={"docklet-ai":`Docklet AI`,"docklet-quickadd":`Docklet QuickAdd`},n=[`docklet-ai`,`docklet-board`,`docklet-calendar`,`docklet-canvas`,`docklet-drawio`,`docklet-extractor`,`docklet-journal`,`docklet-quickadd`,`docklet-slides`,`docklet-tools`,`docklet-workshop`];function r(e){return`Docklet ${e.replace(/^docklet-/,``).split(`-`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}`.trim()}n.map(e=>({id:e,heading:t[e]??r(e)}));var i=Symbol.for(`preact-signals`);function a(){if(u>1)u--;else{var e,t=!1;for((function(){var e=p;for(p=void 0;e!==void 0;)e.S.v===e.v&&(e.S.i=e.i),e=e.o})();l!==void 0;){var n=l;for(l=void 0,d++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&ee(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(d=0,u--,t)throw e}}var o=void 0;function s(e){var t=o;o=void 0;try{return e()}finally{o=t}}var c,l=void 0,u=0,d=0,f=0,p=void 0,m=0;function h(e){if(o!==void 0){var t=e.n;if(t===void 0||t.t!==o)return t={i:0,S:e,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t},o.s!==void 0&&(o.s.n=t),o.s=t,e.n=t,32&o.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=o.s,t.n=void 0,o.s.n=t,o.s=t),t}}function g(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}g.prototype.brand=i,g.prototype.h=function(){return!0},g.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?s(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},g.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&s(function(){var e;(e=t.Z)==null||e.call(t)}))}},g.prototype.subscribe=function(e){var t=this;return ae(function(){var n=t.value,r=o;o=void 0;try{e(n)}finally{o=r}},{name:`sub`})},g.prototype.valueOf=function(){return this.value},g.prototype.toString=function(){return this.value+``},g.prototype.toJSON=function(){return this.value},g.prototype.peek=function(){var e=o;o=void 0;try{return this.value}finally{o=e}},Object.defineProperty(g.prototype,`value`,{get:function(){var e=h(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(d>100)throw Error(`Cycle detected`);(function(e){u!==0&&d===0&&e.l!==f&&(e.l=f,p={S:e,v:e.v,i:e.i,o:p})})(this),this.v=e,this.i++,m++,u++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{a()}}}});function _(e,t){return new g(e,t)}function ee(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function v(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function te(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function y(e,t){g.call(this,void 0),this.x=e,this.s=void 0,this.g=m-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}y.prototype=new g,y.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===m))return!0;if(this.g=m,this.f|=1,this.i>0&&!ee(this))return this.f&=-2,!0;var e=o;try{v(this),o=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return o=e,te(this),this.f&=-2,!0},y.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}g.prototype.S.call(this,e)},y.prototype.U=function(e){if(this.t!==void 0&&(g.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},y.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(y.prototype,`value`,{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=h(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function ne(e){var t=e.m;if(e.m=void 0,typeof t==`function`){u++;var n=o;o=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,re(e),t}finally{o=n,a()}}}function re(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,ne(e)}function ie(e){if(o!==this)throw Error(`Out-of-order effect`);te(this),o=e,this.f&=-2,8&this.f&&re(this),a()}function b(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,c&&c.push(this)}b.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},b.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,ne(this),v(this),u++;var e=o;return o=this,ie.bind(this,e)},b.prototype.N=function(){2&this.f||(this.f|=2,this.u=l,l=this)},b.prototype.d=function(){this.f|=8,1&this.f||re(this)},b.prototype.dispose=function(){this.d()};function ae(e,t){var n=new b(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}function x(e){let t=_(structuredClone(e));function n(e){t.value=e}function r(e){t.value={...t.value,...e}}function i(e){return ae(e)}return{settingsSignal:t,setSettings:n,patchSettings:r,onSettingsChange:i}}var S=`Docklet Word Viewer`,C=`docklet-word-viewer-view`,w=`dck-word`,oe=[`docx`];function T(e){return oe.includes(e.toLowerCase())}var E=`file-text`,D=`docklet-word-viewer-bridge`,O=5e3,se=15e3,ce=1e3,le=12e4,k=`http://localhost:62869/api/documenteditor/`,ue=.5,A=.1,de=`layout`,fe=`zoom`,pe=`docklet-word-viewer-open-active-word-file`,me=`docklet-word-viewer-reload-active-word-file`,he=`${S}: could not open Word document`,ge=`${S}: only .docx documents are supported in the local viewer.`;`${S}`;var _e=`${w}-root`,ve=`${w}-body`,ye=`${w}-iframe`,be=`${w}-outline`,xe=`${w}-outline-header`,Se=`${w}-outline-list`,Ce=`${w}-outline-button`,we=`${w}-outline-empty`,Te=`${w}-search`,Ee=`${w}-search-input`,De=`${w}-search-status`,Oe=`${w}-state`,ke=`${w}-state-title`,Ae=`${w}-state-msg`,je=`${w}-state-button`,Me=`${w}-status`,Ne=`${w}-toolbar`,Pe=`${w}-toolbar-button`,Fe=`${w}-viewport`,Ie=`${w}-warning`,j=class extends Error{constructor(e,t){super(t),this.code=e,this.name=`WordViewerDomainError`}},Le=new Set([`services.syncfusion.com`,`ej2.syncfusion.com`,`document.syncfusion.com`]),Re=class{async convertToSfdt(e,t){let n=Be(t.syncfusionServiceUrl);if(!t.allowRemoteConversion||!n)throw new j(`REMOTE_CONVERSION_DISABLED`,`Remote conversion is disabled or not configured.`);let r=new FormData;r.append(`files`,new Blob([e.data],{type:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`}),e.file.name);let i=new AbortController,a=window.setTimeout(()=>i.abort(),t.remoteConversionTimeoutMs);try{let e=await fetch(n,{method:`POST`,body:r,signal:i.signal});if(!e.ok)throw new j(`REMOTE_CONVERSION_FAILED`,`Remote conversion failed with HTTP ${e.status}.`);let t=await e.text();if(!t.trim())throw new j(`REMOTE_CONVERSION_FAILED`,`Remote conversion returned an empty SFDT document.`);return t}catch(e){throw e instanceof j?e:new j(`REMOTE_CONVERSION_FAILED`,`Remote conversion failed: ${String(e)}`)}finally{window.clearTimeout(a)}}};function ze(e){return e.allowRemoteConversion&&Be(e.syncfusionServiceUrl)!==null}function Be(e){let t=e.trim();if(!t)return null;let n;try{n=new URL(t)}catch{return null}return n.protocol!==`http:`&&n.protocol!==`https:`||Le.has(n.hostname.toLowerCase())?null:(n.pathname.endsWith(`/`)||(n.pathname=`${n.pathname}/`),new URL(`Import`,n).toString())}var M=Uint8Array,N=Uint16Array,Ve=Int32Array,He=new M([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ue=new M([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),We=new M([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ge=function(e,t){for(var n=new N(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Ve(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Ke=Ge(He,2),qe=Ke.b,Je=Ke.r;qe[28]=258,Je[258]=28;var Ye=Ge(Ue,0),Xe=Ye.b;Ye.r;for(var Ze=new N(32768),P=0;P<32768;++P){var F=(P&43690)>>1|(P&21845)<<1;F=(F&52428)>>2|(F&13107)<<2,F=(F&61680)>>4|(F&3855)<<4,Ze[P]=((F&65280)>>8|(F&255)<<8)>>1}for(var Qe=(function(e,t,n){for(var r=e.length,i=0,a=new N(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new N(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new N(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Ze[d]>>c]=l}else for(s=new N(r),i=0;i<r;++i)e[i]&&(s[i]=Ze[o[e[i]-1]++]>>15-e[i]);return s}),I=new M(288),P=0;P<144;++P)I[P]=8;for(var P=144;P<256;++P)I[P]=9;for(var P=256;P<280;++P)I[P]=7;for(var P=280;P<288;++P)I[P]=8;for(var $e=new M(32),P=0;P<32;++P)$e[P]=5;var et=Qe(I,9,1),tt=Qe($e,5,1),nt=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},L=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},rt=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},it=function(e){return(e+7)/8|0},at=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new M(e.subarray(t,n))},ot=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],R=function(e,t,n){var r=Error(t||ot[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,R),!n)throw r;return r},st=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new M(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new M(i*3));var l=function(e){var t=n.length;if(e>t){var r=new M(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=L(e,d,1);var ee=L(e,d+1,3);if(d+=3,!ee){var v=it(d)+4,te=e[v-4]|e[v-3]<<8,y=v+te;if(y>i){c&&R(0);break}s&&l(f+te),n.set(e.subarray(v,y),f),t.b=f+=te,t.p=d=y*8,t.f=u;continue}else if(ee==1)p=et,m=tt,h=9,g=5;else if(ee==2){var ne=L(e,d,31)+257,re=L(e,d+10,15)+4,ie=ne+L(e,d+5,31)+1;d+=14;for(var b=new M(ie),ae=new M(19),x=0;x<re;++x)ae[We[x]]=L(e,d+x*3,7);d+=re*3;for(var S=nt(ae),C=(1<<S)-1,w=Qe(ae,S,1),x=0;x<ie;){var oe=w[L(e,d,C)];d+=oe&15;var v=oe>>4;if(v<16)b[x++]=v;else{var T=0,E=0;for(v==16?(E=3+L(e,d,3),d+=2,T=b[x-1]):v==17?(E=3+L(e,d,7),d+=3):v==18&&(E=11+L(e,d,127),d+=7);E--;)b[x++]=T}}var D=b.subarray(0,ne),O=b.subarray(ne);h=nt(D),g=nt(O),p=Qe(D,h,1),m=Qe(O,g,1)}else R(1);if(d>_){c&&R(0);break}}s&&l(f+131072);for(var se=(1<<h)-1,ce=(1<<g)-1,le=d;;le=d){var T=p[rt(e,d)&se],k=T>>4;if(d+=T&15,d>_){c&&R(0);break}if(T||R(2),k<256)n[f++]=k;else if(k==256){le=d,p=null;break}else{var ue=k-254;if(k>264){var x=k-257,A=He[x];ue=L(e,d,(1<<A)-1)+qe[x],d+=A}var de=m[rt(e,d)&ce],fe=de>>4;de||R(3),d+=de&15;var O=Xe[fe];if(fe>3){var A=Ue[fe];O+=rt(e,d)&(1<<A)-1,d+=A}if(d>_){c&&R(0);break}s&&l(f+131072);var pe=f+ue;if(f<O){var me=a-O,he=Math.min(O,pe);for(me+f<0&&R(3);f<he;++f)n[f]=r[me+f]}for(;f<pe;++f)n[f]=n[f-O]}}t.l=p,t.p=le,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?at(n,0,f):n.subarray(0,f)},ct=new M(0),z=function(e,t){return e[t]|e[t+1]<<8},B=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},lt=function(e,t){return B(e,t)+B(e,t+4)*4294967296};function ut(e,t){return st(e,{i:2},t&&t.out,t&&t.dictionary)}var dt=typeof TextDecoder<`u`&&new TextDecoder;try{dt.decode(ct,{stream:!0})}catch{}var ft=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:at(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function pt(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(dt)return dt.decode(e);else{var i=ft(e),a=i.s,n=i.r;return n.length&&R(8),a}}var mt=function(e,t){return t+30+z(e,t+26)+z(e,t+28)},ht=function(e,t,n){var r=z(e,t+28),i=pt(e.subarray(t+46,t+46+r),!(z(e,t+8)&2048)),a=t+46+r,o=B(e,t+20),s=n&&o==4294967295?gt(e,a):[o,B(e,t+24),B(e,t+42)],c=s[0],l=s[1],u=s[2];return[z(e,t+10),c,l,i,a+z(e,t+30)+z(e,t+32),u]},gt=function(e,t){for(;z(e,t)!=1;t+=4+z(e,t+2));return[lt(e,t+12),lt(e,t+4),lt(e,t+20)]};function _t(e,t){for(var n={},r=e.length-22;B(e,r)!=101010256;--r)(!r||e.length-r>65558)&&R(13);var i=z(e,r+8);if(!i)return{};var a=B(e,r+16),o=a==4294967295||i==65535;if(o){var s=B(e,r-12);o=B(e,s)==101075792,o&&(i=B(e,s+32),a=B(e,s+48))}for(var c=t&&t.filter,l=0;l<i;++l){var u=ht(e,a,o),d=u[0],f=u[1],p=u[2],m=u[3],h=u[4],g=u[5],_=mt(e,g);a=h,(!c||c({name:m,size:f,originalSize:p,compression:d}))&&(d?d==8?n[m]=ut(e.subarray(_,_+f),{out:new M(p)}):R(14,`unknown compression type `+d):n[m]=at(e,_,_+f))}return n}function V(e,t){let n=new DOMParser().parseFromString(e,`application/xml`);if(n.getElementsByTagName(`parsererror`)[0])throw new j(`INVALID_PACKAGE`,`Could not parse ${t}.`);return n}function H(e){return new TextDecoder().decode(e)}function U(e,t){return e?.getAttribute(`w:${t}`)??e?.getAttribute(`r:${t}`)??e?.getAttribute(t)??null}function W(e,t){return K(e,t)[0]??null}function G(e,t){return q(e,t)[0]??null}function K(e,t){if(!e)return[];let n=[],r=e=>{for(let i of q(e))i.localName===t&&n.push(i),r(i)};return r(e),n}function q(e,t){if(!e)return[];let n=Array.from(e.childNodes).filter(e=>e.nodeType===1);return t?n.filter(e=>e.localName===t):n}var vt=`word/document.xml`,yt=`word/_rels/document.xml.rels`,bt=`[Content_Types].xml`,xt=`docProps/core.xml`,St=`word/styles.xml`,Ct=`word/numbering.xml`,wt=`word/comments.xml`,Tt=`word/footnotes.xml`,Et=`word/endnotes.xml`,Dt=1500,Ot=150*1024*1024,kt=25*1024*1024,At=new Set([bt,vt,yt,xt,St,Ct,wt,Tt,Et]),jt=class{constructor(e=_t){this.unzip=e}read(e){let t=[],n={entries:0,uncompressedBytes:0},r;try{r=this.unzip(new Uint8Array(e),{filter:e=>this.shouldExtract(e,n,t)})}catch(e){throw e instanceof j?e:new j(`INVALID_PACKAGE`,`Could not unzip DOCX package: ${String(e)}`)}if(!r[`[Content_Types].xml`]||!r[`word/document.xml`])throw new j(`INVALID_PACKAGE`,`DOCX package is missing required Word document parts.`);let i=V(H(r[vt]),vt),a=Nt(r,i);return r[`word/styles.xml`]||t.push(`Document styles are missing; common Word style names will be inferred where possible.`),a.length>0&&t.push(`Unsupported Word features detected: ${a.join(`, `)}.`),{files:r,documentXml:i,warnings:t,unsupportedFeatures:a}}shouldExtract(e,t,n){if(t.entries++,t.uncompressedBytes+=e.originalSize,t.entries>Dt)throw new j(`INVALID_PACKAGE`,`DOCX package has too many ZIP entries (${t.entries}).`);if(t.uncompressedBytes>Ot)throw new j(`INVALID_PACKAGE`,`DOCX package expands beyond the local safety limit.`);return Mt(e.name)?e.name.startsWith(`word/media/`)&&e.originalSize>kt?(n.push(`Skipped oversized embedded media: ${e.name}.`),!1):!0:!1}};function Mt(e){return At.has(e)||/^word\/(?:header|footer)\d+\.xml$/.test(e)||/^word\/_rels\/(?:header|footer)\d+\.xml\.rels$/.test(e)||e.startsWith(`word/media/`)}function Nt(e,t){let n=t.documentElement;return[[`text boxes`,K(n,`txbxContent`).length>0],[`charts`,K(n,`chart`).length>0],[`SmartArt diagrams`,K(n,`diagram`).length>0],[`equations`,K(n,`oMath`).length>0||K(n,`oMathPara`).length>0],[`tracked changes`,K(n,`ins`).length>0||K(n,`del`).length>0],[`embedded external document parts`,K(n,`altChunk`).length>0],[`chart parts`,Object.keys(e).some(e=>e.startsWith(`word/charts/`))]].filter(([,e])=>e).map(([e])=>e)}var Pt=class{parseRelationships(e){let t=new Map;if(!e)return t;for(let n of K(V(H(e),yt).documentElement,`Relationship`)){let e=n.getAttribute(`Id`),r=n.getAttribute(`Target`);e&&r&&t.set(e,{target:r,type:n.getAttribute(`Type`),targetMode:n.getAttribute(`TargetMode`)})}return t}parseStyles(e){let t=new Map;if(!e)return t;for(let n of q(V(H(e),St).documentElement,`style`)){let e=U(n,`styleId`);if(!e)continue;let r=U(G(n,`name`),`val`);t.set(e,{styleId:e,name:r,basedOn:U(G(n,`basedOn`),`val`),headingLevel:It(U(W(n,`outlineLvl`),`val`))??Lt(r??e)})}return t}parseNumbering(e){let t={numToAbstract:new Map,abstractLevels:new Map};if(!e)return t;let n=V(H(e),Ct);for(let e of q(n.documentElement,`abstractNum`)){let n=U(e,`abstractNumId`);if(!n)continue;let r=new Map;for(let t of q(e,`lvl`)){let e=Number(U(t,`ilvl`)??`0`),n=zt(U(G(t,`numFmt`),`val`));r.set(e,{format:n,text:U(G(t,`lvlText`),`val`)??(n===`bullet`?`•`:`%${e+1}.`),start:Rt(U(G(t,`start`),`val`))??1})}t.abstractLevels.set(n,r)}for(let e of q(n.documentElement,`num`)){let n=U(e,`numId`),r=U(G(e,`abstractNumId`),`val`);n&&r&&t.numToAbstract.set(n,r)}return t}parseMetadata(e){if(!e)return Ft();let t=V(H(e),xt).documentElement;return Object.fromEntries([`title`,`subject`,`creator`,`description`,`created`,`modified`].map(e=>[e,Bt(t,e)]))}};function Ft(){return{title:null,subject:null,creator:null,description:null,created:null,modified:null}}function It(e){let t=Number(e);return e&&Number.isInteger(t)&&t>=0&&t<=8?t+1:null}function Lt(e){let t=/^heading([1-6])$/.exec(e.replace(/\s+/g,``).toLowerCase());return t?Number(t[1]):e.replace(/\s+/g,``).toLowerCase()===`title`?1:null}function Rt(e){let t=Number(e);return e&&Number.isInteger(t)&&t>0?t:null}function zt(e){return[`bullet`,`lowerLetter`,`upperLetter`,`lowerRoman`,`upperRoman`,`none`].includes(e)?e:`decimal`}function Bt(e,t){let n=W(e,t)?.textContent?.trim()??``;return n.length>0?n:null}var Vt=`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,Ht=9525,Ut=20,Wt=class{nextId=1;listCounters=new Map;constructor(e=new jt,t=new Pt){this.packageReader=e,this.partParser=t}parse(e){this.nextId=1,this.listCounters.clear();let t=this.readPackage(e),n=W(t.documentXml.documentElement,`body`);if(!n)throw new j(`INVALID_PACKAGE`,`DOCX package does not contain a Word document body.`);let r=Gt();r.comments=t.comments.size,r.footnotes=t.footnotes.size,r.endnotes=t.endnotes.size;let i=this.parseBlocks(n,t,r),a=this.parseHeaderFooterParts(t,`header`,r),o=this.parseHeaderFooterParts(t,`footer`,r),s=dn(t.unsupportedFeatures);return r.unsupported=s.length,{title:t.metadata.title??Kt(i)??`Word document`,metadata:t.metadata,blocks:i,headers:a,footers:o,footnotes:[...t.footnotes.values()],endnotes:[...t.endnotes.values()],comments:[...t.comments.values()],outline:qt(i),stats:r,warnings:dn(t.warnings),unsupportedFeatures:s,plainText:Jt(i,a,o,t.footnotes,t.endnotes,t.comments)}}readPackage(e){let t=this.packageReader.read(e);return{...t,relationships:this.partParser.parseRelationships(t.files[yt]),styles:this.partParser.parseStyles(t.files[St]),numbering:this.partParser.parseNumbering(t.files[Ct]),metadata:this.partParser.parseMetadata(t.files[xt]),footnotes:this.parseNotes(t.files[Tt],`footnote`),endnotes:this.parseNotes(t.files[Et],`endnote`),comments:this.parseComments(t.files[wt])}}parseBlocks(e,t,n){let r=[];for(let i of q(e)){if(i.localName===`p`&&r.push(...this.splitParagraphOnPageBreaks(this.parseParagraph(i,t,n))),i.localName===`tbl`&&r.push(this.parseTable(i,t,n)),i.localName===`sdt`){let e=G(i,`sdtContent`);e&&r.push(...this.parseBlocks(e,t,n))}i.localName===`altChunk`&&r.push({type:`unsupported`,id:this.makeId(`unsupported`),label:`Embedded external document`,detail:`This Word altChunk content cannot be rendered locally yet.`})}return r}parseParagraph(e,t,n){n.paragraphs++;let r=this.parseParagraphStyle(e,t),i=this.parseListInfo(e,t);return i&&n.lists++,{type:`paragraph`,id:this.makeId(`p`),styleName:r.styleName,styleLabel:r.styleLabel,headingLevel:r.headingLevel,alignment:this.parseParagraphAlignment(e),list:i,format:this.parseParagraphFormat(e),inlines:q(e).filter(e=>e.localName===`r`||e.localName===`hyperlink`).flatMap(e=>this.parseInlineContainer(e,t,n))}}splitParagraphOnPageBreaks(e){if(!e.inlines.some(e=>e.type===`pageBreak`))return[e];let t=[],n=[];for(let r of e.inlines){if(r.type!==`pageBreak`){n.push(r);continue}n.length>0&&t.push({...e,id:this.makeId(`p`),inlines:n}),t.push({type:`pageBreak`,id:this.makeId(`page`)}),n=[]}return n.length>0&&t.push({...e,id:this.makeId(`p`),inlines:n}),t.length>0?t:[{type:`pageBreak`,id:this.makeId(`page`)}]}parseParagraphStyle(e,t){let n=G(e,`pPr`),r=U(G(n,`pStyle`),`val`),i=r?t.styles.get(r)??null:null;return{styleName:r,styleLabel:i?.name??r,headingLevel:this.parseParagraphHeadingLevel(n,r,i)}}parseParagraphHeadingLevel(e,t,n){return It(U(G(e,`outlineLvl`),`val`))??n?.headingLevel??Lt(n?.name??t??``)}parseParagraphAlignment(e){let t=U(G(G(e,`pPr`),`jc`),`val`);return t===`center`||t===`right`?t:t===`both`?`justify`:t===`left`?`left`:null}parseParagraphFormat(e){let t=G(e,`pPr`),n=G(t,`spacing`),r=G(t,`ind`);return{marginBeforePt:Y(U(n,`before`)),marginAfterPt:Y(U(n,`after`)),indentLeftPt:Y(U(r,`left`)),indentHangingPt:Y(U(r,`hanging`)),firstLineIndentPt:Y(U(r,`firstLine`))}}parseListInfo(e,t){let n=G(G(e,`pPr`),`numPr`);if(!n)return null;let r=U(G(n,`numId`),`val`);if(!r)return null;let i=Number(U(G(n,`ilvl`),`val`)??`0`),a=t.numbering.numToAbstract.get(r),o=a?t.numbering.abstractLevels.get(a)?.get(i):void 0;return{numId:r,level:i,format:o?.format??`decimal`,label:this.nextListLabel(r,i,o)}}nextListLabel(e,t,n){let r=this.listCounters.get(e)??[],i=n?.start??1;r[t]=r[t]===void 0?i:r[t]+1,r.length=t+1,this.listCounters.set(e,r);let a=n?.format??`decimal`,o=a===`bullet`?n?.text??`•`:`${cn(r[t]??i,a)}.`;return(n?.text??o).replace(/%([1-9])/g,(e,t)=>cn(r[Number(t)-1]??i,a))}parseInlineContainer(e,t,n){if(e.localName!==`hyperlink`)return this.parseRun(e,t,n,null);let r=this.resolveHyperlink(e,t);return r&&n.links++,q(e,`r`).flatMap(e=>this.parseRun(e,t,n,r))}resolveHyperlink(e,t){let n=e.getAttributeNS(Vt,`id`)??e.getAttribute(`r:id`);if(n){let e=t.relationships.get(n);if(e?.target)return e.target}let r=U(e,`anchor`);return r?`#${r}`:null}parseRun(e,t,n,r){let i=this.parseRunFormat(e),a=[];for(let o of q(e))if(o.localName===`t`||o.localName===`instrText`){let e=o.textContent??``;e.length>0&&a.push({type:`text`,text:e,hyperlink:r,...i})}else if(o.localName===`tab`)a.push({type:`text`,text:`	`,hyperlink:r,...i});else if(o.localName===`br`||o.localName===`cr`)a.push(U(o,`type`)===`page`?{type:`pageBreak`}:{type:`break`});else if(o.localName===`drawing`||o.localName===`pict`){let e=this.parseImage(o,t);e&&(n.images++,a.push(e))}else o.localName===`footnoteReference`?a.push({type:`noteReference`,noteType:`footnote`,noteId:U(o,`id`)??``}):o.localName===`endnoteReference`?a.push({type:`noteReference`,noteType:`endnote`,noteId:U(o,`id`)??``}):o.localName===`commentReference`&&a.push({type:`commentReference`,commentId:U(o,`id`)??``});return a}parseRunFormat(e){let t=G(e,`rPr`),n=U(G(t,`vertAlign`),`val`);return{bold:Xt(t,`b`),italic:Xt(t,`i`),underline:Xt(t,`u`),strikethrough:Xt(t,`strike`)||Xt(t,`dstrike`),superscript:n===`superscript`,subscript:n===`subscript`,color:on(U(G(t,`color`),`val`)),highlight:sn(U(G(t,`highlight`),`val`)),fontSizePt:an(U(G(t,`sz`),`val`))}}parseImage(e,t){let n=W(e,`blip`),r=n?.getAttributeNS(Vt,`embed`)??n?.getAttribute(`r:embed`)??null;if(!r)return null;let i=t.relationships.get(r);if(!i?.target||i.targetMode===`External`)return null;let a=Zt(`word`,i.target),o=t.files[a];if(!o)return null;let s=W(e,`extent`),c=W(e,`docPr`);return{type:`image`,src:`data:${nn(a)};base64,${tn(o)}`,altText:c?.getAttribute(`descr`)??c?.getAttribute(`title`)??`Embedded image`,widthPx:en(s?.getAttribute(`cx`)),heightPx:en(s?.getAttribute(`cy`))}}parseTable(e,t,n){return n.tables++,{type:`table`,id:this.makeId(`table`),rows:q(e,`tr`).map(e=>({cells:q(e,`tc`).map(e=>{let r=G(e,`tcPr`)??e;return{colSpan:Rt(U(G(r,`gridSpan`),`val`))??1,rowSpan:(G(r,`vMerge`),1),shading:on(U(G(r,`shd`),`fill`)),widthPt:rn(G(r,`tcW`)),blocks:this.parseBlocks(e,t,n)}})}))}}parseHeaderFooterParts(e,t,n){let r=`word/${t}`;return Object.keys(e.files).filter(e=>e.startsWith(r)&&e.endsWith(`.xml`)).sort().flatMap(r=>{let i=e.files[r];if(!i)return[];let a={...e,relationships:this.partParser.parseRelationships(e.files[Qt(r)])};return[{id:this.makeId(t),kind:t,blocks:this.parseBlocks(V(H(i),r).documentElement,a,n)}]})}parseNotes(e,t){let n=new Map;if(!e)return n;let r=V(H(e),t===`footnote`?Tt:Et),i=this.createPartPackage(r),a=Gt();for(let e of q(r.documentElement,t)){let t=U(e,`id`);if(!t||t.startsWith(`-`))continue;let r=this.parseBlocks(e,i,a);n.set(t,{id:t,blocks:r,plainText:J(r)})}return n}parseComments(e){let t=new Map;if(!e)return t;let n=V(H(e),wt),r=this.createPartPackage(n),i=Gt();for(let e of q(n.documentElement,`comment`)){let n=U(e,`id`);if(!n)continue;let a=this.parseBlocks(e,r,i);t.set(n,{id:n,blocks:a,plainText:J(a),author:U(e,`author`),date:U(e,`date`)})}return t}createPartPackage(e){return{files:{},documentXml:e,relationships:new Map,styles:new Map,numbering:{numToAbstract:new Map,abstractLevels:new Map},metadata:Ft(),footnotes:new Map,endnotes:new Map,comments:new Map,warnings:[],unsupportedFeatures:[]}}makeId(e){return`${e}-${this.nextId++}`}};function Gt(){return{paragraphs:0,tables:0,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0}}function Kt(e){for(let t of e)if(t.type===`paragraph`){let e=Yt(t.inlines).trim();if(e.length>0)return e}return null}function qt(e){return e.flatMap(e=>{if(e.type!==`paragraph`||!e.headingLevel)return[];let t=Yt(e.inlines).trim();return t.length>0?[{id:e.id,title:t,level:e.headingLevel}]:[]})}function Jt(e,t,n,r,i,a){return[J(e),...t.map(e=>J(e.blocks)),...n.map(e=>J(e.blocks)),...[...r.values()].map(e=>e.plainText),...[...i.values()].map(e=>e.plainText),...[...a.values()].map(e=>e.plainText)].filter(e=>e.length>0).join(`
`)}function J(e){return e.map(e=>e.type===`paragraph`?Yt(e.inlines):e.type===`pageBreak`?`
--- Page break ---
`:e.type===`unsupported`?`[${e.label}]`:e.rows.map(e=>e.cells.map(e=>J(e.blocks)).join(`	`)).join(`
`)).filter(e=>e.length>0).join(`
`)}function Yt(e){return e.map(e=>e.type===`text`?e.text:e.type===`break`||e.type===`pageBreak`?`
`:e.type===`image`?`[Image: ${e.altText}]`:e.type===`noteReference`?`[${e.noteType} ${e.noteId}]`:`[comment ${e.commentId}]`).join(``)}function Xt(e,t){let n=G(e,t),r=U(n,`val`);return!!n&&r!==`false`&&r!==`0`&&r!==`off`}function Zt(e,t){return $t(t.startsWith(`/`)?t.slice(1):`${e}/${t}`)}function Qt(e){let t=e.lastIndexOf(`/`),n=t>=0?e.slice(0,t):``,r=t>=0?e.slice(t+1):e;return n?`${n}/_rels/${r}.rels`:`_rels/${r}.rels`}function $t(e){let t=[];for(let n of e.split(`/`))if(!(!n||n===`.`)){if(n===`..`){t.pop();continue}t.push(n)}return t.join(`/`)}function en(e){let t=Number(e);return e&&Number.isFinite(t)?Math.round(t/Ht):null}function tn(e){let t=``;for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}function nn(e){return{jpg:`image/jpeg`,jpeg:`image/jpeg`,gif:`image/gif`,svg:`image/svg+xml`,webp:`image/webp`}[e.split(`.`).pop()?.toLowerCase()??``]??`image/png`}function Y(e){let t=Number(e);return e&&Number.isFinite(t)?t/Ut:null}function rn(e){let t=U(e,`type`);return t&&t!==`dxa`?null:Y(U(e,`w`))}function an(e){let t=Number(e);return e&&Number.isFinite(t)?t/2:null}function on(e){return e&&e!==`auto`&&/^[0-9a-fA-F]{6}$/.test(e)?`#${e}`:null}function sn(e){return e&&e!==`none`?{yellow:`#fff59d`,green:`#c8e6c9`,cyan:`#b2ebf2`,magenta:`#f8bbd0`,blue:`#bbdefb`,red:`#ffcdd2`,darkBlue:`#90caf9`,darkCyan:`#80deea`,darkGreen:`#a5d6a7`,darkMagenta:`#ce93d8`,darkRed:`#ef9a9a`,darkYellow:`#ffe082`,darkGray:`#b0bec5`,lightGray:`#eceff1`,black:`#424242`}[e]??null:null}function cn(e,t){if(t===`lowerLetter`||t===`upperLetter`){let n=ln(e);return t===`upperLetter`?n.toUpperCase():n}if(t===`lowerRoman`||t===`upperRoman`){let n=un(e);return t===`upperRoman`?n.toUpperCase():n}return t===`bullet`||t===`none`?``:String(e)}function ln(e){let t=Math.max(1,e),n=``;for(;t>0;)t--,n=String.fromCharCode(97+t%26)+n,t=Math.floor(t/26);return n}function un(e){let t=[[1e3,`m`],[900,`cm`],[500,`d`],[400,`cd`],[100,`c`],[90,`xc`],[50,`l`],[40,`xl`],[10,`x`],[9,`ix`],[5,`v`],[4,`iv`],[1,`i`]],n=Math.max(1,Math.min(3999,e)),r=``;for(let[e,i]of t)for(;n>=e;)r+=i,n-=e;return r}function dn(e){return[...new Set(e)]}var fn={title:null,subject:null,creator:null,description:null,created:null,modified:null},pn={marginBeforePt:null,marginAfterPt:null,indentLeftPt:null,indentHangingPt:null,firstLineIndentPt:null},mn=class{nextId=1;parse(e){this.nextId=1;let t=JSON.parse(e),n=Z(X(t)?t.sections:[]).flatMap(e=>X(e)?this.parseBlocks(Z(e.blocks)):[]),r=vn(n);return{title:_n(n)??`Converted Word document`,metadata:fn,blocks:n,headers:[],footers:[],footnotes:[],endnotes:[],comments:[],outline:n.flatMap(e=>e.type===`paragraph`&&e.headingLevel!==null?[{id:e.id,title:yn(e.inlines),level:e.headingLevel}]:[]),stats:{paragraphs:n.filter(e=>e.type===`paragraph`).length,tables:n.filter(e=>e.type===`table`).length,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0},warnings:[`Rendered from self-hosted SFDT conversion; advanced editing metadata is not shown.`],unsupportedFeatures:[],plainText:r}}parseBlocks(e){return e.flatMap(e=>X(e)?Array.isArray(e.rows)?[this.parseTable(e)]:[this.parseParagraph(e)]:[])}parseParagraph(e){let t=hn(e,[`paragraphFormat`,`styleName`]);return{type:`paragraph`,id:this.makeId(`sfdt-p`),styleName:t,styleLabel:t,headingLevel:gn(t),alignment:null,list:null,format:pn,inlines:Z(e.inlines).flatMap(e=>this.parseInline(e))}}parseInline(e){if(!X(e)||typeof e.text!=`string`||e.text.length===0)return[];let t=X(e.characterFormat)?e.characterFormat:{};return[{type:`text`,text:e.text,bold:t.bold===!0,italic:t.italic===!0,underline:t.underline===!0,strikethrough:t.strikethrough===!0,superscript:t.baselineAlignment===`Superscript`,subscript:t.baselineAlignment===`Subscript`,color:typeof t.fontColor==`string`?t.fontColor:null,highlight:typeof t.highlightColor==`string`?t.highlightColor:null,fontSizePt:typeof t.fontSize==`number`?t.fontSize:null,hyperlink:null}]}parseTable(e){return{type:`table`,id:this.makeId(`sfdt-table`),rows:Z(e.rows).map(e=>({cells:X(e)?Z(e.cells).map(e=>({colSpan:1,rowSpan:1,shading:null,widthPt:null,blocks:X(e)?this.parseBlocks(Z(e.blocks)):[]})):[]}))}}makeId(e){return`${e}-${this.nextId++}`}};function X(e){return typeof e==`object`&&!!e}function Z(e){return Array.isArray(e)?e:[]}function hn(e,t){let n=e;for(let e of t){if(!X(n))return null;n=n[e]}return typeof n==`string`?n:null}function gn(e){let t=/^heading([1-6])$/.exec((e??``).replace(/\s+/g,``).toLowerCase());return t?Number(t[1]):null}function _n(e){for(let t of e){if(t.type!==`paragraph`)continue;let e=yn(t.inlines).trim();if(e.length>0)return e}return null}function vn(e){return e.map(e=>e.type===`paragraph`?yn(e.inlines):e.type===`pageBreak`?``:e.type===`unsupported`?e.label:e.rows.map(e=>e.cells.map(e=>vn(e.blocks)).join(`	`)).join(`
`)).filter(e=>e.length>0).join(`
`)}function yn(e){return e.map(e=>e.type===`text`?e.text:``).join(``)}function bn(e){if(e instanceof Error)return e.message;if(typeof e==`string`)return e;try{return JSON.stringify(e)}catch{return String(e)}}function xn(e,t){console.error(`[docklet-word-viewer] ${e}: ${bn(t)}`,t)}var Sn=class{constructor(e){this.app=e}resolveWordFile(t){let n=this.app.vault.getFileByPath(t);return n instanceof e.TFile?n:null}async readWordFile(e,t){this.assertWordFile(e);let n=t*1024*1024;if(e.stat.size>n)throw new j(`FILE_TOO_LARGE`,`Document is ${Cn(e.stat.size)}; limit is ${t} MB.`);return{file:e,data:await this.app.vault.readBinary(e),mtime:e.stat.mtime,size:e.stat.size}}assertWordFile(e){if(!T(e.extension))throw new j(`INVALID_FORMAT`,ge)}};function Cn(e){return e<1024*1024?`${Math.max(1,Math.round(e/1024))} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}var Q={defaultLayout:`paginated`,maxFileSizeMb:25,allowRemoteConversion:!1,preferRemoteConversion:!1,syncfusionServiceUrl:``,remoteConversionTimeoutMs:se};function wn(e){return{defaultLayout:Dn(e?.defaultLayout,Q.defaultLayout),maxFileSizeMb:On(e?.maxFileSizeMb,1,200,Q.maxFileSizeMb),allowRemoteConversion:Tn(e?.allowRemoteConversion,Q.allowRemoteConversion),preferRemoteConversion:Tn(e?.preferRemoteConversion,Q.preferRemoteConversion),syncfusionServiceUrl:En(e?.syncfusionServiceUrl,Q.syncfusionServiceUrl),remoteConversionTimeoutMs:On(e?.remoteConversionTimeoutMs,ce,le,Q.remoteConversionTimeoutMs)}}function Tn(e,t){return typeof e==`boolean`?e:t}function En(e,t){return typeof e==`string`?e.trim():t}function Dn(e,t){return e===`paginated`||e===`continuous`?e:t}function On(e,t,n,r){return typeof e!=`number`||!Number.isFinite(e)?r:Math.min(n,Math.max(t,Math.round(e)))}var kn=class extends e.PluginSettingTab{constructor(e,t){super(e,t.settingsPlugin),this.host=t}display(){let{containerEl:e}=this;e.empty(),e.createEl(`p`,{text:`Configure Docklet Word Viewer rendering, file-size safety, and optional self-hosted remote conversion.`,cls:`setting-item-description`}),An(e,this.host,()=>this.display())}};function An(t,n,r){let i=n.settingsSignal.value,a=null,o=null,s=null,c=()=>{let e=!ze(n.settingsSignal.value);o?.setDisabled(e),s?.setDisabled(e)};new e.Setting(t).setName(`Default layout`).setDesc(`Use paginated pages for Word-like reading, or continuous for a denser Obsidian pane.`).addDropdown(e=>e.addOption(`paginated`,`Paginated`).addOption(`continuous`,`Continuous`).setValue(i.defaultLayout).onChange(e=>jn(n,{defaultLayout:e===`continuous`?`continuous`:`paginated`},r))),Fn(t,`Maximum local file size`,`Block very large documents before parsing them in the Obsidian renderer process.`,`1`,String(i.maxFileSizeMb),1,200,e=>Mn(n,`maxFileSizeMb`,e)),Nn(t,`Allow remote conversion`,`Enable posting documents to a configured self-hosted Syncfusion-compatible conversion service. Leave off to keep documents local.`,i.allowRemoteConversion,e=>{let t={allowRemoteConversion:e};e&&!n.settingsSignal.value.syncfusionServiceUrl.trim()&&(t.syncfusionServiceUrl=k),jn(n,t),t.syncfusionServiceUrl&&a?.setValue(t.syncfusionServiceUrl),c()}),a=Pn(t,`Syncfusion service URL`,`Required for remote conversion. Use a self-hosted endpoint; known public Syncfusion demo hosts are blocked.`,k,i.syncfusionServiceUrl,e=>{jn(n,{syncfusionServiceUrl:e}),c()}),o=Nn(t,`Prefer remote conversion`,`Use the configured self-hosted converter before the local parser. Otherwise it is only used as a fallback after local parsing fails.`,i.preferRemoteConversion,e=>jn(n,{preferRemoteConversion:e},r)),s=Fn(t,`Remote conversion timeout`,`Abort self-hosted conversion requests after this many milliseconds.`,`15000`,String(i.remoteConversionTimeoutMs),ce,le,e=>Mn(n,`remoteConversionTimeoutMs`,e)),c()}function jn(e,t,n){e.patchSettings(wn({...e.settingsSignal.value,...t})),n?.()}function Mn(e,t,n){if(n.trim()===``)return null;let r=Number(n);if(!Number.isFinite(r))return null;let i=wn({...e.settingsSignal.value,[t]:r});return e.patchSettings(i),i[t]}function Nn(t,n,r,i,a){let o=null;return new e.Setting(t).setName(n).setDesc(r).addToggle(e=>(o=e,e.setValue(i).onChange(a))),o}function Pn(t,n,r,i,a,o){let s=null;return new e.Setting(t).setName(n).setDesc(r).addText(e=>(s=e,e.setPlaceholder(i).setValue(a).onChange(o))),s}function Fn(t,n,r,i,a,o,s,c){let l=null;return new e.Setting(t).setName(n).setDesc(r).addText(e=>(l=e,e.inputEl.type=`number`,e.inputEl.min=String(o),e.inputEl.max=String(s),e.inputEl.step=`1`,e.setPlaceholder(i).setValue(a).onChange(t=>{let n=c(t);n!==null&&String(n)!==t.trim()&&e.setValue(String(n))}))),l}var In=class{constructor(e,t,n,r=xn){this.parser=e,this.sfdtParser=t,this.conversionClient=n,this.logger=r}async load(e,t){if(t.preferRemoteConversion&&ze(t))try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(e){this.logger(`WordDocumentLoadService.remotePreferredConversion`,e)}try{return this.parser.parse(e.data)}catch(n){if(!ze(t))throw n;try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(e){throw this.logger(`WordDocumentLoadService.remoteFallbackConversion`,e),n}}}},Ln=String.raw`
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
`,Rn=String.raw`
const CHANNEL = 'docklet-word-viewer-bridge';
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
	if (!message || message.channel !== CHANNEL) return;
	try {
		messageHandlers[message.type]?.(message);
	} catch (error) {
		post('renderError', { message: String(error && error.message ? error.message : error) });
	}
});

function post(type, payload) {
	parent.postMessage({ channel: CHANNEL, type, ...(payload || {}) }, '*');
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
`;function zn(){return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${Ln}</style></head><body><div class="document-shell"><main class="document"><article id="page" class="page"></article></main></div><script>${Rn}<\/script></body></html>`}function Bn(e){return!Vn(e)||e.channel!==`docklet-word-viewer-bridge`||typeof e.type!=`string`?!1:e.type===`ready`||e.type===`renderError`&&typeof e.message==`string`||e.type===`searchResult`&&typeof e.total==`number`&&typeof e.active==`number`}function Vn(e){return typeof e==`object`&&!!e}var Hn=class{iframe=null;ready=!1;readyResolve=null;readyReject=null;readyTimer=null;onMessage=e=>this.handleMessage(e);constructor(e,t){this.container=e,this.callbacks=t}mount(){return this.destroy(),this.iframe=document.createElement(`iframe`),this.iframe.className=ye,this.iframe.setAttribute(`sandbox`,`allow-scripts`),window.addEventListener(`message`,this.onMessage),this.iframe.srcdoc=zn(),this.container.appendChild(this.iframe),new Promise((e,t)=>{this.readyResolve=e,this.readyReject=t,this.readyTimer=setTimeout(()=>{this.readyTimer=null,this.readyResolve=null,this.readyReject=null,t(new j(`BRIDGE_TIMEOUT`,`Word viewer iframe did not become ready.`))},O)})}loadDocument(e,t,n){this.post({channel:D,type:`loadDocument`,document:e,isDark:t,layout:n})}setTheme(e){this.post({channel:D,type:`themeChanged`,isDark:e})}setLayout(e){this.post({channel:D,type:`layoutChanged`,layout:e})}setZoom(e){this.post({channel:D,type:`zoomChanged`,zoom:e})}setSearch(e){this.post({channel:D,type:`searchChanged`,query:e})}navigateSearch(e){this.post({channel:D,type:`searchNavigate`,direction:e})}scrollToBlock(e){this.post({channel:D,type:`scrollToBlock`,blockId:e})}destroy(){window.removeEventListener(`message`,this.onMessage),this.clearReadyTimer(),this.readyReject?.(new j(`BRIDGE_DESTROYED`,`Word viewer iframe was destroyed before it became ready.`)),this.iframe?.parentElement&&this.iframe.parentElement.removeChild(this.iframe),this.iframe=null,this.ready=!1,this.readyResolve=null,this.readyReject=null}handleMessage(e){!this.iframe||e.source!==this.iframe.contentWindow||Bn(e.data)&&this.dispatch(e.data)}dispatch(e){if(e.type===`ready`){this.ready=!0,this.clearReadyTimer(),this.readyResolve?.(),this.readyResolve=null,this.readyReject=null;return}e.type===`renderError`&&this.callbacks.onError(e.message),e.type===`searchResult`&&this.callbacks.onSearchResult({total:e.total,active:e.active})}post(e){!this.iframe?.contentWindow||!this.ready||this.iframe.contentWindow.postMessage(e,`*`)}clearReadyTimer(){this.readyTimer!==null&&(clearTimeout(this.readyTimer),this.readyTimer=null)}},Un=class{bridge=null;async mount(e,t,n,r,i,a,o){this.destroy(),e.empty(),this.bridge=new Hn(e,t),await this.bridge.mount(),this.bridge.loadDocument(n,r,i),this.bridge.setZoom(a),this.bridge.setSearch(o)}setTheme(e){this.bridge?.setTheme(e)}setLayout(e){this.bridge?.setLayout(e)}setZoom(e){this.bridge?.setZoom(e)}setSearch(e){this.bridge?.setSearch(e)}navigateSearch(e){this.bridge?.navigateSearch(e)}scrollToBlock(e){this.bridge?.scrollToBlock(e)}destroy(){this.bridge?.destroy(),this.bridge=null}},$=class extends e.ItemView{currentFile=null;bridge=new Un;model=null;statusEl=null;warningEl=null;outlineEl=null;iframeHostEl=null;layoutButtonEl=null;searchInputEl=null;searchStatusEl=null;layout;zoom=1;outlineVisible=!0;loadSequence=0;constructor(e,t,n,r){super(e),this.repository=t,this.loader=n,this.settingsSignal=r,this.layout=r.value.defaultLayout}getViewType(){return C}getDisplayText(){return this.currentFile?this.currentFile.basename:S}getIcon(){return E}getDocumentPath(){return this.currentFile?.path??null}async onClose(){this.invalidateCurrentLoad(),this.destroyBridge()}async reloadDocument(){await this.loadCurrentDocument()}updateTheme(e){this.bridge.setTheme(e)}async onOpen(){this.buildDom(),this.currentFile?await this.loadCurrentDocument():this.showEmpty()}async setState(e,t){await super.setState(e,t);let n=Gn(e[de],this.settingsSignal.value.defaultLayout),r=Kn(e[fe]),i=this.layout!==n,a=this.zoom!==r;this.layout=n,this.zoom=r,this.updateLayoutButton();let o=e.file;if(typeof o!=`string`){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showEmpty();return}if(this.currentFile?.path===o&&this.model){i&&this.bridge.setLayout(this.layout),a&&this.bridge.setZoom(this.zoom),this.showDocumentStatus(this.model);return}let s=this.repository.resolveWordFile(o);if(!s){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showError(`Word document was not found.`,()=>void this.setState(e,t));return}this.currentFile?.path!==s.path&&(this.model=null),this.currentFile=s,await this.loadCurrentDocument()}getState(){return{...super.getState(),...this.currentFile?{file:this.currentFile.path}:{},[de]:this.layout,[fe]:this.zoom}}refreshSettings(){this.model&&this.showDocumentStatus(this.model)}async loadCurrentDocument(){if(!this.currentFile){this.invalidateCurrentLoad(),this.showEmpty();return}let t=this.currentFile,n=++this.loadSequence;try{this.showLoading();let e=this.settingsSignal.value,r=await this.repository.readWordFile(t,e.maxFileSizeMb);if(!this.isCurrentLoad(n,t))return;let i=await this.loader.load(r,e);if(!this.isCurrentLoad(n,t)||(this.model=i,await this.mountBridge(this.model),!this.isCurrentLoad(n,t)))return;this.showDocumentStatus(this.model)}catch(r){if(!this.isCurrentLoad(n,t))return;xn(`WordViewerView.loadCurrentDocument`,r),new e.Notice(`${he} - ${bn(r)}`),this.showError(bn(r),()=>void this.loadCurrentDocument())}}async mountBridge(e){this.iframeHostEl&&(this.destroyBridge(),await this.bridge.mount(this.iframeHostEl,{onError:e=>this.showError(e,()=>void this.loadCurrentDocument()),onSearchResult:e=>this.showSearchResult(e)},e,this.app.isDarkMode(),this.layout,this.zoom,this.searchInputEl?.value??``))}buildDom(){let e=this.containerEl.children[1];if(!(e instanceof HTMLElement))return;e.empty(),e.addClass(_e);let t=e.createDiv({cls:Ne});this.buildToolbar(t),this.statusEl=t.createDiv({cls:Me}),this.warningEl=e.createDiv({cls:Ie});let n=e.createDiv({cls:ve});this.outlineEl=n.createDiv({cls:be}),this.iframeHostEl=n.createDiv({cls:Fe})}buildToolbar(e){for(let t of this.toolbarActions()){let n=this.createToolbarButton(e,t);t.label===this.layoutButtonLabel()&&(this.layoutButtonEl=n)}let t=e.createDiv({cls:Te});this.searchInputEl=t.createEl(`input`,{cls:Ee,attr:{type:`search`,placeholder:`Search`}}),this.searchInputEl.addEventListener(`input`,()=>this.bridge.setSearch(this.searchInputEl?.value??``)),this.searchInputEl.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.bridge.navigateSearch(e.shiftKey?`previous`:`next`)}),this.createToolbarButton(t,{icon:`chevron-up`,label:`Previous search result`,onClick:()=>this.bridge.navigateSearch(`previous`)}),this.createToolbarButton(t,{icon:`chevron-down`,label:`Next search result`,onClick:()=>this.bridge.navigateSearch(`next`)}),this.searchStatusEl=t.createDiv({cls:De,text:`0/0`})}toolbarActions(){return[{icon:`refresh-cw`,label:`Reload document`,onClick:()=>{this.reloadDocument()}},{icon:this.layoutButtonIcon(),label:this.layoutButtonLabel(),onClick:()=>this.toggleLayout()},{icon:`zoom-out`,label:`Zoom out`,onClick:()=>this.changeZoom(-A)},{icon:`zoom-in`,label:`Zoom in`,onClick:()=>this.changeZoom(A)},{icon:`list-tree`,label:`Toggle document outline`,onClick:()=>this.toggleOutline()},{icon:`copy`,label:`Copy document text`,onClick:()=>{this.copyDocumentText()}},{icon:`external-link`,label:`Open in default app`,onClick:()=>{this.openExternally()}}]}toggleLayout(){this.layout=this.layout===`paginated`?`continuous`:`paginated`,this.bridge.setLayout(this.layout),this.updateLayoutButton(),this.model&&this.showDocumentStatus(this.model)}changeZoom(e){this.zoom=Math.round(Math.min(2,Math.max(ue,this.zoom+e))*100)/100,this.bridge.setZoom(this.zoom),this.model&&this.showDocumentStatus(this.model)}toggleOutline(){this.outlineVisible=!this.outlineVisible,this.outlineEl?.toggle(this.outlineVisible)}createToolbarButton(e,t){let n=e.createEl(`button`,{cls:Pe});return n.type=`button`,Wn(n,t.icon,t.label),n.addEventListener(`click`,t.onClick),n}updateLayoutButton(){this.layoutButtonEl&&Wn(this.layoutButtonEl,this.layoutButtonIcon(),this.layoutButtonLabel())}layoutButtonIcon(){return this.layout===`paginated`?`rows-3`:`files`}layoutButtonLabel(){return this.layout===`paginated`?`Switch to continuous layout`:`Switch to paginated layout`}showDocumentStatus(e){if(this.statusEl?.setText(`${e.stats.paragraphs} paragraphs · ${e.stats.tables} tables · ${e.stats.images} images · ${e.stats.links} links · ${Math.round(this.zoom*100)}%`),this.warningEl){let t=[...e.warnings,...e.unsupportedFeatures.map(e=>`Unsupported: ${e}.`)];this.warningEl.empty(),t.length>0?(this.warningEl.setText(t.join(` `)),this.warningEl.show()):this.warningEl.hide()}this.renderOutline(e)}renderOutline(e){if(!this.outlineEl)return;if(this.outlineEl.empty(),this.outlineEl.toggle(this.outlineVisible),this.outlineEl.createDiv({cls:xe,text:`Outline`}),e.outline.length===0){this.outlineEl.createDiv({cls:we,text:`No headings found.`});return}let t=this.outlineEl.createDiv({cls:Se});for(let n of e.outline){let e=t.createEl(`button`,{cls:Ce,text:n.title});e.type=`button`,e.dataset.level=String(n.level),e.addEventListener(`click`,()=>this.bridge.scrollToBlock(n.id))}}showSearchResult(e){this.searchStatusEl?.setText(e.total>0?`${e.active+1}/${e.total}`:`0/0`)}async copyDocumentText(){if(!this.model){new e.Notice(`${S}: no document text to copy.`);return}try{await navigator.clipboard.writeText(this.model.plainText),new e.Notice(`${S}: copied document text.`)}catch(t){xn(`WordViewerView.copyDocumentText`,t),new e.Notice(`${S}: could not copy document text.`)}}async openExternally(){if(!this.currentFile){new e.Notice(`${S}: no Word document open.`);return}try{let t=this.app.vault.adapter.getFullPath?.(this.currentFile.path);if(!t){new e.Notice(`${S}: cannot resolve local file path.`);return}let n=await require(`electron`).shell?.openPath(t);typeof n==`string`&&n.length>0&&new e.Notice(`${S}: ${n}`)}catch(t){xn(`WordViewerView.openExternally`,t),new e.Notice(`${S}: could not open document externally.`)}}showEmpty(){this.destroyBridge(),this.showState(`No Word document open`,`Open a .docx file from the file explorer or command palette.`)}showLoading(){this.showState(`Loading Word document`,`Reading and rendering local DOCX content.`)}showError(e,t){this.destroyBridge();let n=[{label:`Try again`,onClick:t}];this.model&&n.push({label:`Copy document text`,onClick:()=>{this.copyDocumentText()}}),this.currentFile&&n.push({label:`Open in default app`,onClick:()=>{this.openExternally()}}),this.showState(`Could not render Word document`,e,n)}showState(e,t,n=[]){if(this.statusEl?.setText(``),this.warningEl?.hide(),this.outlineEl?.empty(),!this.iframeHostEl)return;this.iframeHostEl.empty();let r=this.iframeHostEl.createDiv({cls:Oe});r.createDiv({cls:ke,text:e}),r.createDiv({cls:Ae,text:t});for(let e of n)r.createEl(`button`,{cls:je,text:e.label}).addEventListener(`click`,e.onClick)}destroyBridge(){this.bridge.destroy()}invalidateCurrentLoad(){this.loadSequence++}isCurrentLoad(e,t){return e===this.loadSequence&&this.currentFile?.path===t.path}};function Wn(t,n,r){t.empty(),(0,e.setIcon)(t,n),t.setAttribute(`aria-label`,r),t.setAttribute(`title`,r)}function Gn(e,t){return e===`continuous`||e===`paginated`?e:t}function Kn(e){return typeof e!=`number`||!Number.isFinite(e)?1:Math.round(Math.min(2,Math.max(ue,e))*100)/100}var qn=class extends e.Plugin{store=x(Q);repository=null;parser=null;sfdtParser=null;conversionClient=null;loader=null;get settingsPlugin(){return this}get settingsSignal(){return this.store.settingsSignal}patchSettings(e){this.store.patchSettings(e)}async onload(){await this.loadSettings(),this.registerSettingsPersistence(),this.registerView(C,e=>new $(e,this.getRepository(),this.getLoader(),this.settingsSignal)),this.registerExtensions([...oe],C),this.registerCommands(),this.registerEvents(),this.addSettingTab(new kn(this.app,this))}onunload(){this.app.workspace.detachLeavesOfType(C)}async loadSettings(){let e=await this.loadData(),t=wn(e);this.store.setSettings(t),JSON.stringify(e??{})!==JSON.stringify(t)&&await this.saveData(t)}registerSettingsPersistence(){let e=!1;this.register(this.store.onSettingsChange(()=>{if(!e){e=!0;return}this.refreshSettingsInAllViews(),this.saveData(this.settingsSignal.value).catch(e=>xn(`DockletWordViewerPlugin.saveData`,e))}))}registerCommands(){this.addCommand({id:pe,name:`Docklet Word Viewer: Open active Word document`,checkCallback:t=>{let n=this.app.workspace.getActiveFile();return!(n instanceof e.TFile)||!T(n.extension)?!1:(t||this.openWordDocument(n.path),!0)}}),this.addCommand({id:me,name:`Docklet Word Viewer: Reload active document`,checkCallback:e=>{let t=this.getActiveWordView();return t?(e||t.reloadDocument(),!0):!1}})}registerEvents(){this.registerEvent(this.app.workspace.on(`file-menu`,(e,t)=>this.handleFileMenu(e,t))),this.registerEvent(this.app.workspace.on(`css-change`,()=>this.updateThemeInAllViews()))}handleFileMenu(t,n){!(n instanceof e.TFile)||!T(n.extension)||t.addItem(e=>e.setTitle(`Open in Docklet Word Viewer`).setIcon(E).onClick(()=>{this.openWordDocument(n.path)}))}async openWordDocument(t){let n=this.getRepository().resolveWordFile(t);if(!n){new e.Notice(`${S}: document not found: ${t}`);return}if(!T(n.extension)){new e.Notice(`${S}: unsupported Word document type: ${n.extension}`);return}let r=this.app.workspace.getLeavesOfType(C).find(e=>this.leafHasDocumentPath(e,t));if(r){this.app.workspace.revealLeaf(r);return}await this.app.workspace.getLeaf(!1).setViewState({type:C,state:{file:n.path},active:!0})}updateThemeInAllViews(){let e=this.app.isDarkMode();for(let t of this.app.workspace.getLeavesOfType(C))t.view instanceof $&&t.view.updateTheme(e)}refreshSettingsInAllViews(){for(let e of this.app.workspace.getLeavesOfType(C))e.view instanceof $&&e.view.refreshSettings()}getActiveWordView(){let e=this.app.workspace.getActiveViewOfType($);return e instanceof $?e:null}leafHasDocumentPath(e,t){return e.view instanceof $?e.view.getDocumentPath()===t:e.getViewState().state?.file===t}getRepository(){return this.repository??=new Sn(this.app),this.repository}getLoader(){return this.loader||=new In(this.getParser(),this.getSfdtParser(),this.getConversionClient()),this.loader}getParser(){return this.parser??=new Wt,this.parser}getSfdtParser(){return this.sfdtParser??=new mn,this.sfdtParser}getConversionClient(){return this.conversionClient??=new Re,this.conversionClient}};exports.default=qn;