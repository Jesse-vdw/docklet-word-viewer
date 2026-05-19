Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:`Module`}});let e=require(`obsidian`);var t={"docklet-ai":`Docklet AI`,"docklet-quickadd":`Docklet QuickAdd`},n=[`docklet-ai`,`docklet-board`,`docklet-calendar`,`docklet-canvas`,`docklet-drawio`,`docklet-extractor`,`docklet-journal`,`docklet-quickadd`,`docklet-slides`,`docklet-tools`,`docklet-workshop`];function r(e){return`Docklet ${e.replace(/^docklet-/,``).split(`-`).filter(Boolean).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `)}`.trim()}n.map(e=>({id:e,heading:t[e]??r(e)}));var i=Symbol.for(`preact-signals`);function a(){if(u>1)u--;else{var e,t=!1;for((function(){var e=p;for(p=void 0;e!==void 0;)e.S.v===e.v&&(e.S.i=e.i),e=e.o})();l!==void 0;){var n=l;for(l=void 0,d++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&v(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(d=0,u--,t)throw e}}var o=void 0;function s(e){var t=o;o=void 0;try{return e()}finally{o=t}}var c,l=void 0,u=0,d=0,f=0,p=void 0,m=0;function h(e){if(o!==void 0){var t=e.n;if(t===void 0||t.t!==o)return t={i:0,S:e,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t},o.s!==void 0&&(o.s.n=t),o.s=t,e.n=t,32&o.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=o.s,t.n=void 0,o.s.n=t,o.s=t),t}}function g(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}g.prototype.brand=i,g.prototype.h=function(){return!0},g.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?s(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},g.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&s(function(){var e;(e=t.Z)==null||e.call(t)}))}},g.prototype.subscribe=function(e){var t=this;return S(function(){var n=t.value,r=o;o=void 0;try{e(n)}finally{o=r}},{name:`sub`})},g.prototype.valueOf=function(){return this.value},g.prototype.toString=function(){return this.value+``},g.prototype.toJSON=function(){return this.value},g.prototype.peek=function(){var e=o;o=void 0;try{return this.value}finally{o=e}},Object.defineProperty(g.prototype,`value`,{get:function(){var e=h(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(d>100)throw Error(`Cycle detected`);(function(e){u!==0&&d===0&&e.l!==f&&(e.l=f,p={S:e,v:e.v,i:e.i,o:p})})(this),this.v=e,this.i++,m++,u++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{a()}}}});function _(e,t){return new g(e,t)}function v(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function y(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function ee(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function b(e,t){g.call(this,void 0),this.x=e,this.s=void 0,this.g=m-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}b.prototype=new g,b.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===m))return!0;if(this.g=m,this.f|=1,this.i>0&&!v(this))return this.f&=-2,!0;var e=o;try{y(this),o=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return o=e,ee(this),this.f&=-2,!0},b.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}g.prototype.S.call(this,e)},b.prototype.U=function(e){if(this.t!==void 0&&(g.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},b.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(b.prototype,`value`,{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=h(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function te(e){var t=e.m;if(e.m=void 0,typeof t==`function`){u++;var n=o;o=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,ne(e),t}finally{o=n,a()}}}function ne(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,te(e)}function re(e){if(o!==this)throw Error(`Out-of-order effect`);ee(this),o=e,this.f&=-2,8&this.f&&ne(this),a()}function x(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,c&&c.push(this)}x.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},x.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,te(this),y(this),u++;var e=o;return o=this,re.bind(this,e)},x.prototype.N=function(){2&this.f||(this.f|=2,this.u=l,l=this)},x.prototype.d=function(){this.f|=8,1&this.f||ne(this)},x.prototype.dispose=function(){this.d()};function S(e,t){var n=new x(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}function C(e){let t=_(structuredClone(e));function n(e){t.value=e}function r(e){t.value={...t.value,...e}}function i(e){return S(e)}return{settingsSignal:t,setSettings:n,patchSettings:r,onSettingsChange:i}}var w=`Docklet Word Viewer`,T=`docklet-word-viewer-view`,E=`dck-word`,ie=[`docx`];function D(e){return ie.includes(e.toLowerCase())}var O=`file-text`,k=`docklet-word-viewer-bridge`,A=5e3,ae=.5,oe=.1,se=`docklet-word-viewer-open-active-word-file`,j=`docklet-word-viewer-reload-active-word-file`,ce=`${w}: could not open Word document`,M=`${w}: only .docx documents are supported in the local viewer.`;`${w}`;var le=`${E}-root`,ue=`${E}-body`,de=`${E}-iframe`,fe=`${E}-outline`,pe=`${E}-outline-header`,me=`${E}-outline-list`,he=`${E}-outline-button`,ge=`${E}-outline-empty`,_e=`${E}-search`,ve=`${E}-search-input`,ye=`${E}-search-status`,be=`${E}-state`,xe=`${E}-state-title`,Se=`${E}-state-msg`,Ce=`${E}-state-button`,we=`${E}-status`,Te=`${E}-toolbar`,Ee=`${E}-toolbar-button`,De=`${E}-viewport`,Oe=`${E}-warning`,N=class extends Error{constructor(e,t){super(t),this.code=e,this.name=`WordViewerDomainError`}},ke=new Set([`services.syncfusion.com`,`ej2.syncfusion.com`,`document.syncfusion.com`]),Ae=class{async convertToSfdt(e,t){let n=Me(t.syncfusionServiceUrl);if(!t.allowRemoteConversion||!n)throw new N(`REMOTE_CONVERSION_DISABLED`,`Remote conversion is disabled or not configured.`);let r=new FormData;r.append(`files`,new Blob([e.data],{type:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`}),e.file.name);let i=new AbortController,a=window.setTimeout(()=>i.abort(),t.remoteConversionTimeoutMs);try{let e=await fetch(n,{method:`POST`,body:r,signal:i.signal});if(!e.ok)throw new N(`REMOTE_CONVERSION_FAILED`,`Remote conversion failed with HTTP ${e.status}.`);let t=await e.text();if(!t.trim())throw new N(`REMOTE_CONVERSION_FAILED`,`Remote conversion returned an empty SFDT document.`);return t}catch(e){throw e instanceof N?e:new N(`REMOTE_CONVERSION_FAILED`,`Remote conversion failed: ${String(e)}`)}finally{window.clearTimeout(a)}}};function je(e){return e.allowRemoteConversion&&Me(e.syncfusionServiceUrl)!==null}function Me(e){let t=e.trim();if(!t)return null;let n;try{n=new URL(t)}catch{return null}return n.protocol!==`http:`&&n.protocol!==`https:`||ke.has(n.hostname.toLowerCase())?null:(n.pathname.endsWith(`/`)||(n.pathname=`${n.pathname}/`),new URL(`Import`,n).toString())}var P=Uint8Array,F=Uint16Array,Ne=Int32Array,Pe=new P([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Fe=new P([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ie=new P([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Le=function(e,t){for(var n=new F(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Ne(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Re=Le(Pe,2),ze=Re.b,Be=Re.r;ze[28]=258,Be[258]=28;var Ve=Le(Fe,0),He=Ve.b;Ve.r;for(var Ue=new F(32768),I=0;I<32768;++I){var L=(I&43690)>>1|(I&21845)<<1;L=(L&52428)>>2|(L&13107)<<2,L=(L&61680)>>4|(L&3855)<<4,Ue[I]=((L&65280)>>8|(L&255)<<8)>>1}for(var R=(function(e,t,n){for(var r=e.length,i=0,a=new F(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new F(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new F(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Ue[d]>>c]=l}else for(s=new F(r),i=0;i<r;++i)e[i]&&(s[i]=Ue[o[e[i]-1]++]>>15-e[i]);return s}),z=new P(288),I=0;I<144;++I)z[I]=8;for(var I=144;I<256;++I)z[I]=9;for(var I=256;I<280;++I)z[I]=7;for(var I=280;I<288;++I)z[I]=8;for(var We=new P(32),I=0;I<32;++I)We[I]=5;var Ge=R(z,9,1),Ke=R(We,5,1),qe=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},B=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Je=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Ye=function(e){return(e+7)/8|0},Xe=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new P(e.subarray(t,n))},Ze=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],V=function(e,t,n){var r=Error(t||Ze[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,V),!n)throw r;return r},Qe=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new P(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new P(i*3));var l=function(e){var t=n.length;if(e>t){var r=new P(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=B(e,d,1);var v=B(e,d+1,3);if(d+=3,!v){var y=Ye(d)+4,ee=e[y-4]|e[y-3]<<8,b=y+ee;if(b>i){c&&V(0);break}s&&l(f+ee),n.set(e.subarray(y,b),f),t.b=f+=ee,t.p=d=b*8,t.f=u;continue}else if(v==1)p=Ge,m=Ke,h=9,g=5;else if(v==2){var te=B(e,d,31)+257,ne=B(e,d+10,15)+4,re=te+B(e,d+5,31)+1;d+=14;for(var x=new P(re),S=new P(19),C=0;C<ne;++C)S[Ie[C]]=B(e,d+C*3,7);d+=ne*3;for(var w=qe(S),T=(1<<w)-1,E=R(S,w,1),C=0;C<re;){var ie=E[B(e,d,T)];d+=ie&15;var y=ie>>4;if(y<16)x[C++]=y;else{var D=0,O=0;for(y==16?(O=3+B(e,d,3),d+=2,D=x[C-1]):y==17?(O=3+B(e,d,7),d+=3):y==18&&(O=11+B(e,d,127),d+=7);O--;)x[C++]=D}}var k=x.subarray(0,te),A=x.subarray(te);h=qe(k),g=qe(A),p=R(k,h,1),m=R(A,g,1)}else V(1);if(d>_){c&&V(0);break}}s&&l(f+131072);for(var ae=(1<<h)-1,oe=(1<<g)-1,se=d;;se=d){var D=p[Je(e,d)&ae],j=D>>4;if(d+=D&15,d>_){c&&V(0);break}if(D||V(2),j<256)n[f++]=j;else if(j==256){se=d,p=null;break}else{var ce=j-254;if(j>264){var C=j-257,M=Pe[C];ce=B(e,d,(1<<M)-1)+ze[C],d+=M}var le=m[Je(e,d)&oe],ue=le>>4;le||V(3),d+=le&15;var A=He[ue];if(ue>3){var M=Fe[ue];A+=Je(e,d)&(1<<M)-1,d+=M}if(d>_){c&&V(0);break}s&&l(f+131072);var de=f+ce;if(f<A){var fe=a-A,pe=Math.min(A,de);for(fe+f<0&&V(3);f<pe;++f)n[f]=r[fe+f]}for(;f<de;++f)n[f]=n[f-A]}}t.l=p,t.p=se,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Xe(n,0,f):n.subarray(0,f)},$e=new P(0),H=function(e,t){return e[t]|e[t+1]<<8},U=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},et=function(e,t){return U(e,t)+U(e,t+4)*4294967296};function tt(e,t){return Qe(e,{i:2},t&&t.out,t&&t.dictionary)}var nt=typeof TextDecoder<`u`&&new TextDecoder;try{nt.decode($e,{stream:!0})}catch{}var rt=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:Xe(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function it(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else if(nt)return nt.decode(e);else{var i=rt(e),a=i.s,n=i.r;return n.length&&V(8),a}}var at=function(e,t){return t+30+H(e,t+26)+H(e,t+28)},ot=function(e,t,n){var r=H(e,t+28),i=it(e.subarray(t+46,t+46+r),!(H(e,t+8)&2048)),a=t+46+r,o=U(e,t+20),s=n&&o==4294967295?st(e,a):[o,U(e,t+24),U(e,t+42)],c=s[0],l=s[1],u=s[2];return[H(e,t+10),c,l,i,a+H(e,t+30)+H(e,t+32),u]},st=function(e,t){for(;H(e,t)!=1;t+=4+H(e,t+2));return[et(e,t+12),et(e,t+4),et(e,t+20)]};function ct(e,t){for(var n={},r=e.length-22;U(e,r)!=101010256;--r)(!r||e.length-r>65558)&&V(13);var i=H(e,r+8);if(!i)return{};var a=U(e,r+16),o=a==4294967295||i==65535;if(o){var s=U(e,r-12);o=U(e,s)==101075792,o&&(i=U(e,s+32),a=U(e,s+48))}for(var c=t&&t.filter,l=0;l<i;++l){var u=ot(e,a,o),d=u[0],f=u[1],p=u[2],m=u[3],h=u[4],g=u[5],_=at(e,g);a=h,(!c||c({name:m,size:f,originalSize:p,compression:d}))&&(d?d==8?n[m]=tt(e.subarray(_,_+f),{out:new P(p)}):V(14,`unknown compression type `+d):n[m]=Xe(e,_,_+f))}return n}function W(e,t){let n=new DOMParser().parseFromString(e,`application/xml`);if(n.getElementsByTagName(`parsererror`)[0])throw new N(`INVALID_PACKAGE`,`Could not parse ${t}.`);return n}function G(e){return new TextDecoder().decode(e)}function K(e,t){return e?.getAttribute(`w:${t}`)??e?.getAttribute(`r:${t}`)??e?.getAttribute(t)??null}function q(e,t){return Y(e,t)[0]??null}function J(e,t){return X(e,t)[0]??null}function Y(e,t){if(!e)return[];let n=[],r=e=>{for(let i of X(e))i.localName===t&&n.push(i),r(i)};return r(e),n}function X(e,t){if(!e)return[];let n=Array.from(e.childNodes).filter(e=>e.nodeType===1);return t?n.filter(e=>e.localName===t):n}var lt=`word/document.xml`,ut=`word/_rels/document.xml.rels`,dt=`[Content_Types].xml`,ft=`docProps/core.xml`,pt=`word/styles.xml`,mt=`word/numbering.xml`,ht=`word/comments.xml`,gt=`word/footnotes.xml`,_t=`word/endnotes.xml`,vt=1500,yt=150*1024*1024,bt=25*1024*1024,xt=new Set([dt,lt,ut,ft,pt,mt,ht,gt,_t]),St=class{constructor(e=ct){this.unzip=e}read(e){let t=[],n={entries:0,uncompressedBytes:0},r;try{r=this.unzip(new Uint8Array(e),{filter:e=>this.shouldExtract(e,n,t)})}catch(e){throw e instanceof N?e:new N(`INVALID_PACKAGE`,`Could not unzip DOCX package: ${String(e)}`)}if(!r[`[Content_Types].xml`]||!r[`word/document.xml`])throw new N(`INVALID_PACKAGE`,`DOCX package is missing required Word document parts.`);let i=W(G(r[lt]),lt),a=wt(r,i);return r[`word/styles.xml`]||t.push(`Document styles are missing; common Word style names will be inferred where possible.`),a.length>0&&t.push(`Unsupported Word features detected: ${a.join(`, `)}.`),{files:r,documentXml:i,warnings:t,unsupportedFeatures:a}}shouldExtract(e,t,n){if(t.entries++,t.uncompressedBytes+=e.originalSize,t.entries>vt)throw new N(`INVALID_PACKAGE`,`DOCX package has too many ZIP entries (${t.entries}).`);if(t.uncompressedBytes>yt)throw new N(`INVALID_PACKAGE`,`DOCX package expands beyond the local safety limit.`);return Ct(e.name)?e.name.startsWith(`word/media/`)&&e.originalSize>bt?(n.push(`Skipped oversized embedded media: ${e.name}.`),!1):!0:!1}};function Ct(e){return xt.has(e)||/^word\/(?:header|footer)\d+\.xml$/.test(e)||e.startsWith(`word/media/`)}function wt(e,t){let n=t.documentElement;return[[`text boxes`,Y(n,`txbxContent`).length>0],[`charts`,Y(n,`chart`).length>0],[`SmartArt diagrams`,Y(n,`diagram`).length>0],[`equations`,Y(n,`oMath`).length>0||Y(n,`oMathPara`).length>0],[`tracked changes`,Y(n,`ins`).length>0||Y(n,`del`).length>0],[`embedded external document parts`,Y(n,`altChunk`).length>0],[`chart parts`,Object.keys(e).some(e=>e.startsWith(`word/charts/`))]].filter(([,e])=>e).map(([e])=>e)}var Tt=class{parseRelationships(e){let t=new Map;if(!e)return t;for(let n of Y(W(G(e),ut).documentElement,`Relationship`)){let e=n.getAttribute(`Id`),r=n.getAttribute(`Target`);e&&r&&t.set(e,{target:r,type:n.getAttribute(`Type`),targetMode:n.getAttribute(`TargetMode`)})}return t}parseStyles(e){let t=new Map;if(!e)return t;for(let n of X(W(G(e),pt).documentElement,`style`)){let e=K(n,`styleId`);if(!e)continue;let r=K(J(n,`name`),`val`);t.set(e,{styleId:e,name:r,basedOn:K(J(n,`basedOn`),`val`),headingLevel:Dt(K(q(n,`outlineLvl`),`val`))??Ot(r??e)})}return t}parseNumbering(e){let t={numToAbstract:new Map,abstractLevels:new Map};if(!e)return t;let n=W(G(e),mt);for(let e of X(n.documentElement,`abstractNum`)){let n=K(e,`abstractNumId`);if(!n)continue;let r=new Map;for(let t of X(e,`lvl`)){let e=Number(K(t,`ilvl`)??`0`),n=At(K(J(t,`numFmt`),`val`));r.set(e,{format:n,text:K(J(t,`lvlText`),`val`)??(n===`bullet`?`•`:`%${e+1}.`),start:kt(K(J(t,`start`),`val`))??1})}t.abstractLevels.set(n,r)}for(let e of X(n.documentElement,`num`)){let n=K(e,`numId`),r=K(J(e,`abstractNumId`),`val`);n&&r&&t.numToAbstract.set(n,r)}return t}parseMetadata(e){if(!e)return Et();let t=W(G(e),ft).documentElement;return Object.fromEntries([`title`,`subject`,`creator`,`description`,`created`,`modified`].map(e=>[e,jt(t,e)]))}};function Et(){return{title:null,subject:null,creator:null,description:null,created:null,modified:null}}function Dt(e){let t=Number(e);return e&&Number.isInteger(t)&&t>=0&&t<=8?t+1:null}function Ot(e){let t=/^heading([1-6])$/.exec(e.replace(/\s+/g,``).toLowerCase());return t?Number(t[1]):e.replace(/\s+/g,``).toLowerCase()===`title`?1:null}function kt(e){let t=Number(e);return e&&Number.isInteger(t)&&t>0?t:null}function At(e){return[`bullet`,`lowerLetter`,`upperLetter`,`lowerRoman`,`upperRoman`,`none`].includes(e)?e:`decimal`}function jt(e,t){let n=q(e,t)?.textContent?.trim()??``;return n.length>0?n:null}var Mt=`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,Nt=9525,Pt=20,Ft=class{nextId=1;listCounters=new Map;constructor(e=new St,t=new Tt){this.packageReader=e,this.partParser=t}parse(e){this.nextId=1,this.listCounters.clear();let t=this.readPackage(e),n=q(t.documentXml.documentElement,`body`);if(!n)throw new N(`INVALID_PACKAGE`,`DOCX package does not contain a Word document body.`);let r=It();r.comments=t.comments.size,r.footnotes=t.footnotes.size,r.endnotes=t.endnotes.size;let i=this.parseBlocks(n,t,r),a=this.parseHeaderFooterParts(t,`header`,r),o=this.parseHeaderFooterParts(t,`footer`,r),s=en(t.unsupportedFeatures);return r.unsupported=s.length,{title:t.metadata.title??Lt(i)??`Word document`,metadata:t.metadata,blocks:i,headers:a,footers:o,footnotes:[...t.footnotes.values()],endnotes:[...t.endnotes.values()],comments:[...t.comments.values()],outline:Rt(i),stats:r,warnings:en(t.warnings),unsupportedFeatures:s,plainText:zt(i)}}readPackage(e){let t=this.packageReader.read(e);return{...t,relationships:this.partParser.parseRelationships(t.files[ut]),styles:this.partParser.parseStyles(t.files[pt]),numbering:this.partParser.parseNumbering(t.files[mt]),metadata:this.partParser.parseMetadata(t.files[ft]),footnotes:this.parseNotes(t.files[gt],`footnote`),endnotes:this.parseNotes(t.files[_t],`endnote`),comments:this.parseComments(t.files[ht])}}parseBlocks(e,t,n){let r=[];for(let i of X(e)){if(i.localName===`p`&&r.push(...this.splitParagraphOnPageBreaks(this.parseParagraph(i,t,n))),i.localName===`tbl`&&r.push(this.parseTable(i,t,n)),i.localName===`sdt`){let e=J(i,`sdtContent`);e&&r.push(...this.parseBlocks(e,t,n))}i.localName===`altChunk`&&r.push({type:`unsupported`,id:this.makeId(`unsupported`),label:`Embedded external document`,detail:`This Word altChunk content cannot be rendered locally yet.`})}return r}parseParagraph(e,t,n){n.paragraphs++;let r=this.parseParagraphStyle(e,t),i=this.parseListInfo(e,t);return i&&n.lists++,{type:`paragraph`,id:this.makeId(`p`),styleName:r.styleName,styleLabel:r.styleLabel,headingLevel:r.headingLevel,alignment:this.parseParagraphAlignment(e),list:i,format:this.parseParagraphFormat(e),inlines:X(e).filter(e=>e.localName===`r`||e.localName===`hyperlink`).flatMap(e=>this.parseInlineContainer(e,t,n))}}splitParagraphOnPageBreaks(e){if(!e.inlines.some(e=>e.type===`pageBreak`))return[e];let t=[],n=[];for(let r of e.inlines){if(r.type!==`pageBreak`){n.push(r);continue}n.length>0&&t.push({...e,id:this.makeId(`p`),inlines:n}),t.push({type:`pageBreak`,id:this.makeId(`page`)}),n=[]}return n.length>0&&t.push({...e,id:this.makeId(`p`),inlines:n}),t.length>0?t:[{type:`pageBreak`,id:this.makeId(`page`)}]}parseParagraphStyle(e,t){let n=J(e,`pPr`),r=K(J(n,`pStyle`),`val`),i=r?t.styles.get(r)??null:null;return{styleName:r,styleLabel:i?.name??r,headingLevel:this.parseParagraphHeadingLevel(n,r,i)}}parseParagraphHeadingLevel(e,t,n){return Dt(K(J(e,`outlineLvl`),`val`))??n?.headingLevel??Ot(n?.name??t??``)}parseParagraphAlignment(e){let t=K(J(J(e,`pPr`),`jc`),`val`);return t===`center`||t===`right`?t:t===`both`?`justify`:t===`left`?`left`:null}parseParagraphFormat(e){let t=J(e,`pPr`),n=J(t,`spacing`),r=J(t,`ind`);return{marginBeforePt:qt(K(n,`before`)),marginAfterPt:qt(K(n,`after`)),indentLeftPt:qt(K(r,`left`)),indentHangingPt:qt(K(r,`hanging`)),firstLineIndentPt:qt(K(r,`firstLine`))}}parseListInfo(e,t){let n=J(J(e,`pPr`),`numPr`);if(!n)return null;let r=K(J(n,`numId`),`val`);if(!r)return null;let i=Number(K(J(n,`ilvl`),`val`)??`0`),a=t.numbering.numToAbstract.get(r),o=a?t.numbering.abstractLevels.get(a)?.get(i):void 0;return{numId:r,level:i,format:o?.format??`decimal`,label:this.nextListLabel(r,i,o)}}nextListLabel(e,t,n){let r=this.listCounters.get(e)??[],i=n?.start??1;r[t]=r[t]===void 0?i:r[t]+1,r.length=t+1,this.listCounters.set(e,r);let a=n?.format??`decimal`,o=a===`bullet`?n?.text??`•`:`${Zt(r[t]??i,a)}.`;return(n?.text??o).replace(/%([1-9])/g,(e,t)=>Zt(r[Number(t)-1]??i,a))}parseInlineContainer(e,t,n){if(e.localName!==`hyperlink`)return this.parseRun(e,t,n,null);let r=this.resolveHyperlink(e,t);return r&&n.links++,X(e,`r`).flatMap(e=>this.parseRun(e,t,n,r))}resolveHyperlink(e,t){let n=e.getAttributeNS(Mt,`id`)??e.getAttribute(`r:id`);if(n){let e=t.relationships.get(n);if(e?.target)return e.target}let r=K(e,`anchor`);return r?`#${r}`:null}parseRun(e,t,n,r){let i=this.parseRunFormat(e),a=[];for(let o of X(e))if(o.localName===`t`||o.localName===`instrText`){let e=o.textContent??``;e.length>0&&a.push({type:`text`,text:e,hyperlink:r,...i})}else if(o.localName===`tab`)a.push({type:`text`,text:`	`,hyperlink:r,...i});else if(o.localName===`br`||o.localName===`cr`)a.push(K(o,`type`)===`page`?{type:`pageBreak`}:{type:`break`});else if(o.localName===`drawing`||o.localName===`pict`){let e=this.parseImage(o,t);e&&(n.images++,a.push(e))}else o.localName===`footnoteReference`?a.push({type:`noteReference`,noteType:`footnote`,noteId:K(o,`id`)??``}):o.localName===`endnoteReference`?a.push({type:`noteReference`,noteType:`endnote`,noteId:K(o,`id`)??``}):o.localName===`commentReference`&&a.push({type:`commentReference`,commentId:K(o,`id`)??``});return a}parseRunFormat(e){let t=J(e,`rPr`),n=K(J(t,`vertAlign`),`val`);return{bold:Vt(t,`b`),italic:Vt(t,`i`),underline:Vt(t,`u`),strikethrough:Vt(t,`strike`)||Vt(t,`dstrike`),superscript:n===`superscript`,subscript:n===`subscript`,color:Yt(K(J(t,`color`),`val`)),highlight:Xt(K(J(t,`highlight`),`val`)),fontSizePt:Jt(K(J(t,`sz`),`val`))}}parseImage(e,t){let n=q(e,`blip`),r=n?.getAttributeNS(Mt,`embed`)??n?.getAttribute(`r:embed`)??null;if(!r)return null;let i=t.relationships.get(r);if(!i?.target||i.targetMode===`External`)return null;let a=Ht(`word`,i.target),o=t.files[a];if(!o)return null;let s=q(e,`extent`),c=q(e,`docPr`);return{type:`image`,src:`data:${Kt(a)};base64,${Gt(o)}`,altText:c?.getAttribute(`descr`)??c?.getAttribute(`title`)??`Embedded image`,widthPx:Wt(s?.getAttribute(`cx`)),heightPx:Wt(s?.getAttribute(`cy`))}}parseTable(e,t,n){return n.tables++,{type:`table`,id:this.makeId(`table`),rows:X(e,`tr`).map(e=>({cells:X(e,`tc`).map(e=>{let r=J(e,`tcPr`)??e;return{colSpan:kt(K(J(r,`gridSpan`),`val`))??1,rowSpan:(J(r,`vMerge`),1),shading:Yt(K(J(r,`shd`),`fill`)),blocks:this.parseBlocks(e,t,n)}})}))}}parseHeaderFooterParts(e,t,n){let r=`word/${t}`;return Object.keys(e.files).filter(e=>e.startsWith(r)&&e.endsWith(`.xml`)).sort().map(r=>({id:this.makeId(t),kind:t,blocks:this.parseBlocks(W(G(e.files[r]),r).documentElement,e,n)}))}parseNotes(e,t){let n=new Map;if(!e)return n;let r=W(G(e),t===`footnote`?gt:_t),i=this.createPartPackage(r),a=It();for(let e of X(r.documentElement,t)){let t=K(e,`id`);if(!t||t.startsWith(`-`))continue;let r=this.parseBlocks(e,i,a);n.set(t,{id:t,blocks:r,plainText:zt(r)})}return n}parseComments(e){let t=new Map;if(!e)return t;let n=W(G(e),ht),r=this.createPartPackage(n),i=It();for(let e of X(n.documentElement,`comment`)){let n=K(e,`id`);if(!n)continue;let a=this.parseBlocks(e,r,i);t.set(n,{id:n,blocks:a,plainText:zt(a),author:K(e,`author`),date:K(e,`date`)})}return t}createPartPackage(e){return{files:{},documentXml:e,relationships:new Map,styles:new Map,numbering:{numToAbstract:new Map,abstractLevels:new Map},metadata:Et(),footnotes:new Map,endnotes:new Map,comments:new Map,warnings:[],unsupportedFeatures:[]}}makeId(e){return`${e}-${this.nextId++}`}};function It(){return{paragraphs:0,tables:0,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0}}function Lt(e){for(let t of e)if(t.type===`paragraph`){let e=Bt(t.inlines).trim();if(e.length>0)return e}return null}function Rt(e){return e.flatMap(e=>{if(e.type!==`paragraph`||!e.headingLevel)return[];let t=Bt(e.inlines).trim();return t.length>0?[{id:e.id,title:t,level:e.headingLevel}]:[]})}function zt(e){return e.map(e=>e.type===`paragraph`?Bt(e.inlines):e.type===`pageBreak`?`
--- Page break ---
`:e.type===`unsupported`?`[${e.label}]`:e.rows.map(e=>e.cells.map(e=>zt(e.blocks)).join(`	`)).join(`
`)).filter(e=>e.length>0).join(`
`)}function Bt(e){return e.map(e=>e.type===`text`?e.text:e.type===`break`||e.type===`pageBreak`?`
`:e.type===`image`?`[Image: ${e.altText}]`:e.type===`noteReference`?`[${e.noteType} ${e.noteId}]`:`[comment ${e.commentId}]`).join(``)}function Vt(e,t){let n=J(e,t),r=K(n,`val`);return!!n&&r!==`false`&&r!==`0`&&r!==`off`}function Ht(e,t){return Ut(t.startsWith(`/`)?t.slice(1):`${e}/${t}`)}function Ut(e){let t=[];for(let n of e.split(`/`))if(!(!n||n===`.`)){if(n===`..`){t.pop();continue}t.push(n)}return t.join(`/`)}function Wt(e){let t=Number(e);return e&&Number.isFinite(t)?Math.round(t/Nt):null}function Gt(e){let t=``;for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}function Kt(e){return{jpg:`image/jpeg`,jpeg:`image/jpeg`,gif:`image/gif`,svg:`image/svg+xml`,webp:`image/webp`}[e.split(`.`).pop()?.toLowerCase()??``]??`image/png`}function qt(e){let t=Number(e);return e&&Number.isFinite(t)?t/Pt:null}function Jt(e){let t=Number(e);return e&&Number.isFinite(t)?t/2:null}function Yt(e){return e&&e!==`auto`&&/^[0-9a-fA-F]{6}$/.test(e)?`#${e}`:null}function Xt(e){return e&&e!==`none`?{yellow:`#fff59d`,green:`#c8e6c9`,cyan:`#b2ebf2`,magenta:`#f8bbd0`,blue:`#bbdefb`,red:`#ffcdd2`,darkBlue:`#90caf9`,darkCyan:`#80deea`,darkGreen:`#a5d6a7`,darkMagenta:`#ce93d8`,darkRed:`#ef9a9a`,darkYellow:`#ffe082`,darkGray:`#b0bec5`,lightGray:`#eceff1`,black:`#424242`}[e]??null:null}function Zt(e,t){if(t===`lowerLetter`||t===`upperLetter`){let n=Qt(e);return t===`upperLetter`?n.toUpperCase():n}if(t===`lowerRoman`||t===`upperRoman`){let n=$t(e);return t===`upperRoman`?n.toUpperCase():n}return t===`bullet`||t===`none`?``:String(e)}function Qt(e){let t=Math.max(1,e),n=``;for(;t>0;)t--,n=String.fromCharCode(97+t%26)+n,t=Math.floor(t/26);return n}function $t(e){let t=[[1e3,`m`],[900,`cm`],[500,`d`],[400,`cd`],[100,`c`],[90,`xc`],[50,`l`],[40,`xl`],[10,`x`],[9,`ix`],[5,`v`],[4,`iv`],[1,`i`]],n=Math.max(1,Math.min(3999,e)),r=``;for(let[e,i]of t)for(;n>=e;)r+=i,n-=e;return r}function en(e){return[...new Set(e)]}var tn={title:null,subject:null,creator:null,description:null,created:null,modified:null},nn={marginBeforePt:null,marginAfterPt:null,indentLeftPt:null,indentHangingPt:null,firstLineIndentPt:null},rn=class{nextId=1;parse(e){this.nextId=1;let t=JSON.parse(e),n=Q(Z(t)?t.sections:[]).flatMap(e=>Z(e)?this.parseBlocks(Q(e.blocks)):[]),r=cn(n);return{title:sn(n)??`Converted Word document`,metadata:tn,blocks:n,headers:[],footers:[],footnotes:[],endnotes:[],comments:[],outline:n.flatMap(e=>e.type===`paragraph`&&e.headingLevel!==null?[{id:e.id,title:ln(e.inlines),level:e.headingLevel}]:[]),stats:{paragraphs:n.filter(e=>e.type===`paragraph`).length,tables:n.filter(e=>e.type===`table`).length,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0},warnings:[`Rendered from self-hosted SFDT conversion; advanced editing metadata is not shown.`],unsupportedFeatures:[],plainText:r}}parseBlocks(e){return e.flatMap(e=>Z(e)?Array.isArray(e.rows)?[this.parseTable(e)]:[this.parseParagraph(e)]:[])}parseParagraph(e){let t=an(e,[`paragraphFormat`,`styleName`]);return{type:`paragraph`,id:this.makeId(`sfdt-p`),styleName:t,styleLabel:t,headingLevel:on(t),alignment:null,list:null,format:nn,inlines:Q(e.inlines).flatMap(e=>this.parseInline(e))}}parseInline(e){if(!Z(e)||typeof e.text!=`string`||e.text.length===0)return[];let t=Z(e.characterFormat)?e.characterFormat:{};return[{type:`text`,text:e.text,bold:t.bold===!0,italic:t.italic===!0,underline:t.underline===!0,strikethrough:t.strikethrough===!0,superscript:t.baselineAlignment===`Superscript`,subscript:t.baselineAlignment===`Subscript`,color:typeof t.fontColor==`string`?t.fontColor:null,highlight:typeof t.highlightColor==`string`?t.highlightColor:null,fontSizePt:typeof t.fontSize==`number`?t.fontSize:null,hyperlink:null}]}parseTable(e){return{type:`table`,id:this.makeId(`sfdt-table`),rows:Q(e.rows).map(e=>({cells:Z(e)?Q(e.cells).map(e=>({colSpan:1,rowSpan:1,shading:null,blocks:Z(e)?this.parseBlocks(Q(e.blocks)):[]})):[]}))}}makeId(e){return`${e}-${this.nextId++}`}};function Z(e){return typeof e==`object`&&!!e}function Q(e){return Array.isArray(e)?e:[]}function an(e,t){let n=e;for(let e of t){if(!Z(n))return null;n=n[e]}return typeof n==`string`?n:null}function on(e){let t=/^heading([1-6])$/.exec((e??``).replace(/\s+/g,``).toLowerCase());return t?Number(t[1]):null}function sn(e){for(let t of e){if(t.type!==`paragraph`)continue;let e=ln(t.inlines).trim();if(e.length>0)return e}return null}function cn(e){return e.map(e=>e.type===`paragraph`?ln(e.inlines):e.type===`pageBreak`?``:e.type===`unsupported`?e.label:e.rows.map(e=>e.cells.map(e=>cn(e.blocks)).join(`	`)).join(`
`)).filter(e=>e.length>0).join(`
`)}function ln(e){return e.map(e=>e.type===`text`?e.text:``).join(``)}function un(e){if(e instanceof Error)return e.message;if(typeof e==`string`)return e;try{return JSON.stringify(e)}catch{return String(e)}}function dn(e,t){console.error(`[docklet-word-viewer] ${e}: ${un(t)}`,t)}var fn=class{constructor(e){this.app=e}resolveWordFile(t){let n=this.app.vault.getFileByPath(t);return n instanceof e.TFile?n:null}async readWordFile(e,t){this.assertWordFile(e);let n=t*1024*1024;if(e.stat.size>n)throw new N(`FILE_TOO_LARGE`,`Document is ${pn(e.stat.size)}; limit is ${t} MB.`);return{file:e,data:await this.app.vault.readBinary(e),mtime:e.stat.mtime,size:e.stat.size}}assertWordFile(e){if(!D(e.extension))throw new N(`INVALID_FORMAT`,M)}};function pn(e){return e<1024*1024?`${Math.max(1,Math.round(e/1024))} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}var mn=class extends e.PluginSettingTab{constructor(e,t){super(e,t.settingsPlugin),this.host=t}display(){let{containerEl:e}=this;e.empty(),e.createEl(`p`,{text:`Configure Docklet Word Viewer rendering, file-size safety, and optional remote conversion for future high-fidelity engines.`,cls:`setting-item-description`}),hn(e,this.host,()=>this.display())}};function hn(t,n,r){let i=n.settingsSignal.value;new e.Setting(t).setName(`Default layout`).setDesc(`Use paginated pages for Word-like reading, or continuous for a denser Obsidian pane.`).addDropdown(e=>e.addOption(`paginated`,`Paginated`).addOption(`continuous`,`Continuous`).setValue(i.defaultLayout).onChange(e=>gn(n,{defaultLayout:e===`continuous`?`continuous`:`paginated`},r))),vn(t,`Maximum local file size`,`Block very large documents before parsing them in the Obsidian renderer process.`,`25`,String(i.maxFileSizeMb),e=>{let t=Number(e);Number.isFinite(t)&&n.patchSettings({maxFileSizeMb:t})}),_n(t,`Allow remote conversion`,`Reserved for a self-hosted Syncfusion-compatible conversion service. Leave off to keep documents local.`,i.allowRemoteConversion,e=>gn(n,{allowRemoteConversion:e},r)),_n(t,`Prefer remote conversion`,`When enabled, use the configured self-hosted converter before the local parser. Otherwise it is only used as a fallback.`,i.preferRemoteConversion,e=>gn(n,{preferRemoteConversion:e},r)),vn(t,`Syncfusion service URL`,`Optional self-hosted endpoint such as http://localhost:62869/api/documenteditor/. The public demo service should not be used for private vault files.`,`http://localhost:62869/api/documenteditor/`,i.syncfusionServiceUrl,e=>n.patchSettings({syncfusionServiceUrl:e})),vn(t,`Remote conversion timeout`,`Abort self-hosted conversion requests after this many milliseconds.`,`15000`,String(i.remoteConversionTimeoutMs),e=>{let t=Number(e);Number.isFinite(t)&&n.patchSettings({remoteConversionTimeoutMs:t})})}function gn(e,t,n){e.patchSettings(t),n?.()}function _n(t,n,r,i,a){new e.Setting(t).setName(n).setDesc(r).addToggle(e=>e.setValue(i).onChange(a))}function vn(t,n,r,i,a,o){new e.Setting(t).setName(n).setDesc(r).addText(e=>e.setPlaceholder(i).setValue(a).onChange(o))}var $={defaultLayout:`paginated`,maxFileSizeMb:25,allowRemoteConversion:!1,preferRemoteConversion:!1,syncfusionServiceUrl:``,remoteConversionTimeoutMs:15e3};function yn(e){return{defaultLayout:Sn(e?.defaultLayout,$.defaultLayout),maxFileSizeMb:Cn(e?.maxFileSizeMb,1,200,$.maxFileSizeMb),allowRemoteConversion:bn(e?.allowRemoteConversion,$.allowRemoteConversion),preferRemoteConversion:bn(e?.preferRemoteConversion,$.preferRemoteConversion),syncfusionServiceUrl:xn(e?.syncfusionServiceUrl,$.syncfusionServiceUrl),remoteConversionTimeoutMs:Cn(e?.remoteConversionTimeoutMs,1e3,12e4,$.remoteConversionTimeoutMs)}}function bn(e,t){return typeof e==`boolean`?e:t}function xn(e,t){return typeof e==`string`?e.trim():t}function Sn(e,t){return e===`paginated`||e===`continuous`?e:t}function Cn(e,t,n,r){return typeof e!=`number`||!Number.isFinite(e)?r:Math.min(n,Math.max(t,Math.round(e)))}var wn=class{constructor(e,t,n,r=dn){this.parser=e,this.sfdtParser=t,this.conversionClient=n,this.logger=r}async load(e,t){if(t.preferRemoteConversion&&je(t))try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(e){this.logger(`WordDocumentLoadService.remotePreferredConversion`,e)}try{return this.parser.parse(e.data)}catch(n){if(!je(t))throw n;try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(e){throw this.logger(`WordDocumentLoadService.remoteFallbackConversion`,e),n}}}},Tn=String.raw`
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
`,En=String.raw`
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
	const target = page.querySelector('[data-block-id="' + String(blockId).replace(/["\\]/g, '') + '"]');
	if (target) target.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
}

post('ready');
`;function Dn(){return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${Tn}</style></head><body><div class="document-shell"><main class="document"><article id="page" class="page"></article></main></div><script>${En}<\/script></body></html>`}function On(e){return!kn(e)||e.channel!==`docklet-word-viewer-bridge`||typeof e.type!=`string`?!1:e.type===`ready`||e.type===`renderError`&&typeof e.message==`string`||e.type===`searchResult`&&typeof e.total==`number`&&typeof e.active==`number`}function kn(e){return typeof e==`object`&&!!e}var An=class{iframe=null;ready=!1;readyResolve=null;readyTimer=null;onMessage=e=>this.handleMessage(e);constructor(e,t){this.container=e,this.callbacks=t}mount(){return this.destroy(),this.iframe=document.createElement(`iframe`),this.iframe.className=de,this.iframe.setAttribute(`sandbox`,`allow-scripts`),window.addEventListener(`message`,this.onMessage),this.iframe.srcdoc=Dn(),this.container.appendChild(this.iframe),new Promise((e,t)=>{this.readyResolve=e,this.readyTimer=setTimeout(()=>{this.readyTimer=null,t(new N(`BRIDGE_TIMEOUT`,`Word viewer iframe did not become ready.`))},A)})}loadDocument(e,t,n){this.post({channel:k,type:`loadDocument`,document:e,isDark:t,layout:n})}setTheme(e){this.post({channel:k,type:`themeChanged`,isDark:e})}setLayout(e){this.post({channel:k,type:`layoutChanged`,layout:e})}setZoom(e){this.post({channel:k,type:`zoomChanged`,zoom:e})}setSearch(e){this.post({channel:k,type:`searchChanged`,query:e})}navigateSearch(e){this.post({channel:k,type:`searchNavigate`,direction:e})}scrollToBlock(e){this.post({channel:k,type:`scrollToBlock`,blockId:e})}destroy(){window.removeEventListener(`message`,this.onMessage),this.clearReadyTimer(),this.iframe?.parentElement&&this.iframe.parentElement.removeChild(this.iframe),this.iframe=null,this.ready=!1,this.readyResolve=null}handleMessage(e){!this.iframe||e.source!==this.iframe.contentWindow||On(e.data)&&this.dispatch(e.data)}dispatch(e){if(e.type===`ready`){this.ready=!0,this.clearReadyTimer(),this.readyResolve?.();return}e.type===`renderError`&&this.callbacks.onError(e.message),e.type===`searchResult`&&this.callbacks.onSearchResult({total:e.total,active:e.active})}post(e){!this.iframe?.contentWindow||!this.ready||this.iframe.contentWindow.postMessage(e,`*`)}clearReadyTimer(){this.readyTimer!==null&&(clearTimeout(this.readyTimer),this.readyTimer=null)}},jn=class{bridge=null;async mount(e,t,n,r,i,a,o){this.destroy(),e.empty(),this.bridge=new An(e,t),await this.bridge.mount(),this.bridge.loadDocument(n,r,i),this.bridge.setZoom(a),this.bridge.setSearch(o)}setTheme(e){this.bridge?.setTheme(e)}setLayout(e){this.bridge?.setLayout(e)}setZoom(e){this.bridge?.setZoom(e)}setSearch(e){this.bridge?.setSearch(e)}navigateSearch(e){this.bridge?.navigateSearch(e)}scrollToBlock(e){this.bridge?.scrollToBlock(e)}destroy(){this.bridge?.destroy(),this.bridge=null}},Mn=class extends e.ItemView{currentFile=null;bridge=new jn;model=null;statusEl=null;warningEl=null;outlineEl=null;iframeHostEl=null;layoutButtonEl=null;searchInputEl=null;searchStatusEl=null;layout;zoom=1;outlineVisible=!0;constructor(e,t,n,r){super(e),this.repository=t,this.loader=n,this.settingsSignal=r,this.layout=r.value.defaultLayout}getViewType(){return T}getDisplayText(){return this.currentFile?this.currentFile.basename:w}getIcon(){return O}getDocumentPath(){return this.currentFile?.path??null}async onClose(){this.destroyBridge()}async reloadDocument(){await this.loadCurrentDocument()}updateTheme(e){this.bridge.setTheme(e)}async onOpen(){this.buildDom(),this.currentFile?await this.loadCurrentDocument():this.showEmpty()}async setState(e,t){await super.setState(e,t);let n=e.file;if(typeof n!=`string`){this.currentFile=null,this.showEmpty();return}let r=this.repository.resolveWordFile(n);if(!r){this.currentFile=null,this.showError(`Word document was not found.`,()=>void this.setState(e,t));return}this.currentFile=r,await this.loadCurrentDocument()}getState(){let e=super.getState();return this.currentFile?{...e,file:this.currentFile.path}:e}refreshSettings(){this.layout=this.settingsSignal.value.defaultLayout,this.bridge.setLayout(this.layout),this.updateLayoutButton(),this.model&&this.showDocumentStatus(this.model)}async loadCurrentDocument(){if(!this.currentFile){this.showEmpty();return}try{this.showLoading();let e=this.settingsSignal.value,t=await this.repository.readWordFile(this.currentFile,e.maxFileSizeMb);this.model=await this.loader.load(t,e),await this.mountBridge(this.model),this.showDocumentStatus(this.model)}catch(t){dn(`WordViewerView.loadCurrentDocument`,t),new e.Notice(`${ce} - ${un(t)}`),this.showError(un(t),()=>void this.loadCurrentDocument())}}async mountBridge(e){this.iframeHostEl&&(this.destroyBridge(),await this.bridge.mount(this.iframeHostEl,{onError:e=>this.showError(e,()=>void this.loadCurrentDocument()),onSearchResult:e=>this.showSearchResult(e)},e,this.app.isDarkMode(),this.layout,this.zoom,this.searchInputEl?.value??``))}buildDom(){let e=this.containerEl.children[1];e.empty(),e.addClass(le);let t=e.createDiv({cls:Te});this.buildToolbar(t),this.statusEl=t.createDiv({cls:we}),this.warningEl=e.createDiv({cls:Oe});let n=e.createDiv({cls:ue});this.outlineEl=n.createDiv({cls:fe}),this.iframeHostEl=n.createDiv({cls:De})}buildToolbar(e){for(let t of this.toolbarActions()){let n=this.createToolbarButton(e,t);t.label===this.layoutButtonLabel()&&(this.layoutButtonEl=n)}let t=e.createDiv({cls:_e});this.searchInputEl=t.createEl(`input`,{cls:ve,attr:{type:`search`,placeholder:`Search`}}),this.searchInputEl.addEventListener(`input`,()=>this.bridge.setSearch(this.searchInputEl?.value??``)),this.searchInputEl.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.bridge.navigateSearch(e.shiftKey?`previous`:`next`)}),this.createToolbarButton(t,{icon:`chevron-up`,label:`Previous search result`,onClick:()=>this.bridge.navigateSearch(`previous`)}),this.createToolbarButton(t,{icon:`chevron-down`,label:`Next search result`,onClick:()=>this.bridge.navigateSearch(`next`)}),this.searchStatusEl=t.createDiv({cls:ye,text:`0/0`})}toolbarActions(){return[{icon:`refresh-cw`,label:`Reload document`,onClick:()=>{this.reloadDocument()}},{icon:this.layoutButtonIcon(),label:this.layoutButtonLabel(),onClick:()=>this.toggleLayout()},{icon:`zoom-out`,label:`Zoom out`,onClick:()=>this.changeZoom(-oe)},{icon:`zoom-in`,label:`Zoom in`,onClick:()=>this.changeZoom(oe)},{icon:`list-tree`,label:`Toggle document outline`,onClick:()=>this.toggleOutline()},{icon:`copy`,label:`Copy document text`,onClick:()=>{this.copyDocumentText()}},{icon:`external-link`,label:`Open in default app`,onClick:()=>{this.openExternally()}}]}toggleLayout(){this.layout=this.layout===`paginated`?`continuous`:`paginated`,this.bridge.setLayout(this.layout),this.updateLayoutButton(),this.model&&this.showDocumentStatus(this.model)}changeZoom(e){this.zoom=Math.round(Math.min(2,Math.max(ae,this.zoom+e))*100)/100,this.bridge.setZoom(this.zoom),this.model&&this.showDocumentStatus(this.model)}toggleOutline(){this.outlineVisible=!this.outlineVisible,this.outlineEl?.toggle(this.outlineVisible)}createToolbarButton(e,t){let n=e.createEl(`button`,{cls:Ee});return n.type=`button`,Nn(n,t.icon,t.label),n.addEventListener(`click`,t.onClick),n}updateLayoutButton(){this.layoutButtonEl&&Nn(this.layoutButtonEl,this.layoutButtonIcon(),this.layoutButtonLabel())}layoutButtonIcon(){return this.layout===`paginated`?`rows-3`:`files`}layoutButtonLabel(){return this.layout===`paginated`?`Switch to continuous layout`:`Switch to paginated layout`}showDocumentStatus(e){if(this.clearState(),this.statusEl?.setText(`${e.stats.paragraphs} paragraphs · ${e.stats.tables} tables · ${e.stats.images} images · ${e.stats.links} links · ${Math.round(this.zoom*100)}%`),this.warningEl){let t=[...e.warnings,...e.unsupportedFeatures.map(e=>`Unsupported: ${e}.`)];this.warningEl.empty(),t.length>0?(this.warningEl.setText(t.join(` `)),this.warningEl.show()):this.warningEl.hide()}this.renderOutline(e)}renderOutline(e){if(!this.outlineEl)return;if(this.outlineEl.empty(),this.outlineEl.toggle(this.outlineVisible),this.outlineEl.createDiv({cls:pe,text:`Outline`}),e.outline.length===0){this.outlineEl.createDiv({cls:ge,text:`No headings found.`});return}let t=this.outlineEl.createDiv({cls:me});for(let n of e.outline){let e=t.createEl(`button`,{cls:he,text:n.title});e.type=`button`,e.dataset.level=String(n.level),e.addEventListener(`click`,()=>this.bridge.scrollToBlock(n.id))}}showSearchResult(e){this.searchStatusEl?.setText(e.total>0?`${e.active+1}/${e.total}`:`0/0`)}async copyDocumentText(){if(!this.model){new e.Notice(`${w}: no document text to copy.`);return}try{await navigator.clipboard.writeText(this.model.plainText),new e.Notice(`${w}: copied document text.`)}catch(t){dn(`WordViewerView.copyDocumentText`,t),new e.Notice(`${w}: could not copy document text.`)}}async openExternally(){if(!this.currentFile){new e.Notice(`${w}: no Word document open.`);return}try{let t=this.app.vault.adapter.getFullPath?.(this.currentFile.path);if(!t){new e.Notice(`${w}: cannot resolve local file path.`);return}let n=await require(`electron`).shell?.openPath(t);typeof n==`string`&&n.length>0&&new e.Notice(`${w}: ${n}`)}catch(t){dn(`WordViewerView.openExternally`,t),new e.Notice(`${w}: could not open document externally.`)}}showEmpty(){this.destroyBridge(),this.showState(`No Word document open`,`Open a .docx file from the file explorer or command palette.`)}showLoading(){this.showState(`Loading Word document`,`Reading and rendering local DOCX content.`)}showError(e,t){this.destroyBridge(),this.showState(`Could not render Word document`,e,t)}showState(e,t,n){if(this.statusEl?.setText(``),this.warningEl?.hide(),this.outlineEl?.empty(),!this.iframeHostEl)return;this.iframeHostEl.empty();let r=this.iframeHostEl.createDiv({cls:be});r.createDiv({cls:xe,text:e}),r.createDiv({cls:Se,text:t}),n&&r.createEl(`button`,{cls:Ce,text:`Try again`}).addEventListener(`click`,n)}clearState(){this.iframeHostEl&&this.iframeHostEl.empty()}destroyBridge(){this.bridge.destroy()}};function Nn(t,n,r){t.empty(),(0,e.setIcon)(t,n),t.setAttribute(`aria-label`,r),t.setAttribute(`title`,r)}var Pn=class extends e.Plugin{store=C($);repository;parser;sfdtParser;conversionClient;loader;get settingsPlugin(){return this}get settingsSignal(){return this.store.settingsSignal}patchSettings(e){this.store.patchSettings(e)}async onload(){this.repository=new fn(this.app),this.parser=new Ft,this.sfdtParser=new rn,this.conversionClient=new Ae,this.loader=new wn(this.parser,this.sfdtParser,this.conversionClient),await this.loadSettings(),this.registerSettingsPersistence(),this.registerView(T,e=>new Mn(e,this.repository,this.loader,this.settingsSignal)),this.registerExtensions([...ie],T),this.registerCommands(),this.registerEvents(),this.addSettingTab(new mn(this.app,this))}onunload(){this.app.workspace.detachLeavesOfType(T)}async loadSettings(){let e=await this.loadData(),t=yn(e);this.store.setSettings(t),JSON.stringify(e??{})!==JSON.stringify(t)&&await this.saveData(t)}registerSettingsPersistence(){let e=!1;this.register(this.store.onSettingsChange(()=>{if(!e){e=!0;return}this.refreshSettingsInAllViews(),this.saveData(this.settingsSignal.value).catch(e=>dn(`DockletWordViewerPlugin.saveData`,e))}))}registerCommands(){this.addCommand({id:se,name:`Docklet Word Viewer: Open active Word document`,checkCallback:t=>{let n=this.app.workspace.getActiveFile();return!(n instanceof e.TFile)||!D(n.extension)?!1:(t||this.openWordDocument(n.path),!0)}}),this.addCommand({id:j,name:`Docklet Word Viewer: Reload active document`,checkCallback:e=>{let t=this.getActiveWordView();return t?(e||t.reloadDocument(),!0):!1}})}registerEvents(){this.registerEvent(this.app.workspace.on(`file-menu`,(e,t)=>this.handleFileMenu(e,t))),this.registerEvent(this.app.workspace.on(`css-change`,()=>this.updateThemeInAllViews()))}handleFileMenu(t,n){!(n instanceof e.TFile)||!D(n.extension)||t.addItem(e=>e.setTitle(`Open in Docklet Word Viewer`).setIcon(O).onClick(()=>{this.openWordDocument(n.path)}))}async openWordDocument(t){let n=this.repository.resolveWordFile(t);if(!n){new e.Notice(`${w}: document not found: ${t}`);return}if(!D(n.extension)){new e.Notice(`${w}: unsupported Word document type: ${n.extension}`);return}let r=this.app.workspace.getLeavesOfType(T).find(e=>e.getViewState().state?.file===t);if(r){this.app.workspace.revealLeaf(r);return}await this.app.workspace.getLeaf(!1).setViewState({type:T,state:{file:n.path},active:!0})}updateThemeInAllViews(){let e=this.app.isDarkMode();for(let t of this.app.workspace.getLeavesOfType(T))t.view instanceof Mn&&t.view.updateTheme(e)}refreshSettingsInAllViews(){for(let e of this.app.workspace.getLeavesOfType(T))e.view instanceof Mn&&e.view.refreshSettings()}getActiveWordView(){let e=this.app.workspace.getActiveViewOfType(Mn);return e instanceof Mn?e:null}};exports.default=Pn;