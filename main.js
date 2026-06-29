"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const g=require("obsidian");function tt(r){if(r instanceof Error)return r.message;if(typeof r=="string")return r;try{return JSON.stringify(r)}catch{return String(r)}}function Qt(r){return{logError(e,t){console.error(`${r} ${e}: ${tt(t)}`,t)},logWarning(e,t,n){if(n!==void 0){console.warn(`${r} ${e}: ${t}`,n);return}console.warn(`${r} ${e}: ${t}`)},getErrorMessage:tt}}var Jt=Symbol.for("preact-signals");function Ae(){if(H>1)H--;else{var r,e=!1;for((function(){var o=pe;for(pe=void 0;o!==void 0;)o.S.v===o.v&&(o.S.i=o.i),o=o.o})();oe!==void 0;){var t=oe;for(oe=void 0,he++;t!==void 0;){var n=t.u;if(t.u=void 0,t.f&=-3,!(8&t.f)&&St(t))try{t.c()}catch(o){e||(r=o,e=!0)}t=n}}if(he=0,H--,e)throw r}}var p=void 0;function bt(r){var e=p;p=void 0;try{return r()}finally{p=e}}var oe=void 0,H=0,he=0,rt=0,pe=void 0,fe=0;function wt(r){if(p!==void 0){var e=r.n;if(e===void 0||e.t!==p)return e={i:0,S:r,p:p.s,n:void 0,t:p,e:void 0,x:void 0,r:e},p.s!==void 0&&(p.s.n=e),p.s=e,r.n=e,32&p.f&&r.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=p.s,e.n=void 0,p.s.n=e,p.s=e),e}}function w(r,e){this.v=r,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}w.prototype.brand=Jt;w.prototype.h=function(){return!0};w.prototype.S=function(r){var e=this,t=this.t;t!==r&&r.e===void 0&&(r.x=t,this.t=r,t!==void 0?t.e=r:bt(function(){var n;(n=e.W)==null||n.call(e)}))};w.prototype.U=function(r){var e=this;if(this.t!==void 0){var t=r.e,n=r.x;t!==void 0&&(t.x=n,r.e=void 0),n!==void 0&&(n.e=t,r.x=void 0),r===this.t&&(this.t=n,n===void 0&&bt(function(){var o;(o=e.Z)==null||o.call(e)}))}};w.prototype.subscribe=function(r){var e=this;return Tt(function(){var t=e.value,n=p;p=void 0;try{r(t)}finally{p=n}},{name:"sub"})};w.prototype.valueOf=function(){return this.value};w.prototype.toString=function(){return this.value+""};w.prototype.toJSON=function(){return this.value};w.prototype.peek=function(){var r=p;p=void 0;try{return this.value}finally{p=r}};Object.defineProperty(w.prototype,"value",{get:function(){var r=wt(this);return r!==void 0&&(r.i=this.i),this.v},set:function(r){if(r!==this.v){if(he>100)throw new Error("Cycle detected");(function(t){H!==0&&he===0&&t.l!==rt&&(t.l=rt,pe={S:t,v:t.v,i:t.i,o:pe})})(this),this.v=r,this.i++,fe++,H++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{Ae()}}}});function er(r,e){return new w(r,e)}function St(r){for(var e=r.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function xt(r){for(var e=r.s;e!==void 0;e=e.n){var t=e.S.n;if(t!==void 0&&(e.r=t),e.S.n=e,e.i=-1,e.n===void 0){r.s=e;break}}}function Et(r){for(var e=r.s,t=void 0;e!==void 0;){var n=e.p;e.i===-1?(e.S.U(e),n!==void 0&&(n.n=e.n),e.n!==void 0&&(e.n.p=n)):t=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=n}r.s=t}function J(r,e){w.call(this,void 0),this.x=r,this.s=void 0,this.g=fe-1,this.f=4,this.W=e?.watched,this.Z=e?.unwatched,this.name=e?.name}J.prototype=new w;J.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fe))return!0;if(this.g=fe,this.f|=1,this.i>0&&!St(this))return this.f&=-2,!0;var r=p;try{xt(this),p=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return p=r,Et(this),this.f&=-2,!0};J.prototype.S=function(r){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}w.prototype.S.call(this,r)};J.prototype.U=function(r){if(this.t!==void 0&&(w.prototype.U.call(this,r),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};J.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var r=this.t;r!==void 0;r=r.x)r.t.N()}};Object.defineProperty(J.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var r=wt(this);if(this.h(),r!==void 0&&(r.i=this.i),16&this.f)throw this.v;return this.v}});function kt(r){var e=r.m;if(r.m=void 0,typeof e=="function"){H++;var t=p;p=void 0;try{e()}catch(n){throw r.f&=-2,r.f|=8,Oe(r),n}finally{p=t,Ae()}}}function Oe(r){for(var e=r.s;e!==void 0;e=e.n)e.S.U(e);r.x=void 0,r.s=void 0,kt(r)}function tr(r){if(p!==this)throw new Error("Out-of-order effect");Et(this),p=r,this.f&=-2,8&this.f&&Oe(this),Ae()}function ee(r,e){this.x=r,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=e?.name}ee.prototype.c=function(){var r=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.m=e)}finally{r()}};ee.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,kt(this),xt(this),H++;var r=p;return p=this,tr.bind(this,r)};ee.prototype.N=function(){2&this.f||(this.f|=2,this.u=oe,oe=this)};ee.prototype.d=function(){this.f|=8,1&this.f||Oe(this)};ee.prototype.dispose=function(){this.d()};function Tt(r,e){var t=new ee(r,e);try{t.c()}catch(o){throw t.d(),o}var n=t.d.bind(t);return n[Symbol.dispose]=n,n}function rr(r){const e=er(structuredClone(r));function t(i){e.value=i}function n(i){e.value={...e.value,...i}}function o(i){return Tt(i)}return{settingsSignal:e,setSettings:t,patchSettings:n,onSettingsChange:o}}const k="Docklet Word Viewer",O="docklet-word-viewer-view",y="dck-word",nr="docx",Ct=[nr];function ue(r){return Ct.includes(r.toLowerCase())}const It="file-text",F="docklet-word-viewer-bridge",or=5e3,ir=25,Pe=1,Pt=200,ar=15e3,Lt=1e3,Dt=12e4,nt="http://localhost:62869/api/documenteditor/",Nt=1,_t=.5,Rt=2,sr=.1,ot="layout",it="zoom",lr="docklet-word-viewer-open-active-word-file",cr="docklet-word-viewer-reload-active-word-file",ur=`${k}: could not open Word document`,dr=`${k}: only .docx documents are supported in the local viewer.`,hr=`${y}-root`,pr=`${y}-body`,fr=`${y}-iframe`,mr=`${y}-outline`,gr=`${y}-outline-header`,vr=`${y}-outline-list`,yr=`${y}-outline-button`,br=`${y}-outline-empty`,wr=`${y}-search`,Sr=`${y}-search-input`,xr=`${y}-search-status`,Er=`${y}-state`,kr=`${y}-state-title`,Tr=`${y}-state-msg`,Cr=`${y}-state-button`,Ir=`${y}-status`,Pr=`${y}-toolbar`,Lr=`${y}-toolbar-button`,Dr=`${y}-viewport`,Nr=`${y}-warning`;class b extends Error{constructor(e,t){super(t),this.code=e,this.name="WordViewerDomainError"}code}const _r=new Set(["services.syncfusion.com","ej2.syncfusion.com","document.syncfusion.com"]);class Rr{async convertToSfdt(e,t){const n=Mt(t.syncfusionServiceUrl);if(!t.allowRemoteConversion||!n)throw new b("REMOTE_CONVERSION_DISABLED","Remote conversion is disabled or not configured.");const o=new FormData;o.append("files",new Blob([e.data],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),e.file.name);const i=new AbortController,a=window.setTimeout(()=>i.abort(),t.remoteConversionTimeoutMs);try{const s=await fetch(n,{method:"POST",body:o,signal:i.signal});if(!s.ok)throw new b("REMOTE_CONVERSION_FAILED",`Remote conversion failed with HTTP ${s.status}.`);const l=await s.text();if(!l.trim())throw new b("REMOTE_CONVERSION_FAILED","Remote conversion returned an empty SFDT document.");return l}catch(s){throw s instanceof b?s:new b("REMOTE_CONVERSION_FAILED",`Remote conversion failed: ${String(s)}`)}finally{window.clearTimeout(a)}}}function Le(r){return r.allowRemoteConversion&&Mt(r.syncfusionServiceUrl)!==null}function Mt(r){const e=r.trim();if(!e)return null;let t;try{t=new URL(e)}catch{return null}return t.protocol!=="http:"&&t.protocol!=="https:"||_r.has(t.hostname.toLowerCase())?null:t.pathname.split("/").filter(Boolean).at(-1)?.toLowerCase()==="import"?(t.search="",t.hash="",t.toString()):(t.pathname.endsWith("/")||(t.pathname=`${t.pathname}/`),new URL("Import",t).toString())}const Mr=["docx","docm","xlsx","xlsm","pptx","pptm"];function Ar(r){const e=r.split(".").pop()?.toLowerCase();return Mr.includes(e)?e:null}var x=Uint8Array,Y=Uint16Array,Or=Int32Array,At=new x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ot=new x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fr=new x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ft=function(r,e){for(var t=new Y(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var o=new Or(t[30]),n=1;n<30;++n)for(var i=t[n];i<t[n+1];++i)o[i]=i-t[n]<<5|n;return{b:t,r:o}},Bt=Ft(At,2),$t=Bt.b,Br=Bt.r;$t[28]=258,Br[258]=28;var $r=Ft(Ot,0),Wr=$r.b,De=new Y(32768);for(var m=0;m<32768;++m){var A=(m&43690)>>1|(m&21845)<<1;A=(A&52428)>>2|(A&13107)<<2,A=(A&61680)>>4|(A&3855)<<4,De[m]=((A&65280)>>8|(A&255)<<8)>>1}var ie=(function(r,e,t){for(var n=r.length,o=0,i=new Y(e);o<n;++o)r[o]&&++i[r[o]-1];var a=new Y(e);for(o=1;o<e;++o)a[o]=a[o-1]+i[o-1]<<1;var s;if(t){s=new Y(1<<e);var l=15-e;for(o=0;o<n;++o)if(r[o])for(var d=o<<4|r[o],v=e-r[o],c=a[r[o]-1]++<<v,f=c|(1<<v)-1;c<=f;++c)s[De[c]>>l]=d}else for(s=new Y(n),o=0;o<n;++o)r[o]&&(s[o]=De[a[r[o]-1]++]>>15-r[o]);return s}),se=new x(288);for(var m=0;m<144;++m)se[m]=8;for(var m=144;m<256;++m)se[m]=9;for(var m=256;m<280;++m)se[m]=7;for(var m=280;m<288;++m)se[m]=8;var Wt=new x(32);for(var m=0;m<32;++m)Wt[m]=5;var zr=ie(se,9,1),Ur=ie(Wt,5,1),ke=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},C=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Te=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},Vr=function(r){return(r+7)/8|0},Fe=function(r,e,t){return(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length),new x(r.subarray(e,t))},Hr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(r,e,t){var n=new Error(e||Hr[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,T),!t)throw n;return n},jr=function(r,e,t,n){var o=r.length,i=n?n.length:0;if(!o||e.f&&!e.l)return t||new x(0);var a=!t,s=a||e.i!=2,l=e.i;a&&(t=new x(o*3));var d=function(Qe){var Je=t.length;if(Qe>Je){var et=new x(Math.max(Je*2,Qe));et.set(t),t=et}},v=e.f||0,c=e.p||0,f=e.b||0,P=e.l,_=e.d,z=e.m,U=e.n,R=o*8;do{if(!P){v=C(r,c,1);var ge=C(r,c+1,3);if(c+=3,ge)if(ge==1)P=zr,_=Ur,z=9,U=5;else if(ge==2){var be=C(r,c,31)+257,He=C(r,c+10,15)+4,je=be+C(r,c+5,31)+1;c+=14;for(var te=new x(je),we=new x(19),E=0;E<He;++E)we[Fr[E]]=C(r,c+E*3,7);c+=He*3;for(var Ze=ke(we),Gt=(1<<Ze)-1,Xt=ie(we,Ze,1),E=0;E<je;){var Ge=Xt[C(r,c,Gt)];c+=Ge&15;var L=Ge>>4;if(L<16)te[E++]=L;else{var j=0,le=0;for(L==16?(le=3+C(r,c,3),c+=2,j=te[E-1]):L==17?(le=3+C(r,c,7),c+=3):L==18&&(le=11+C(r,c,127),c+=7);le--;)te[E++]=j}}var Xe=te.subarray(0,be),M=te.subarray(be);z=ke(Xe),U=ke(M),P=ie(Xe,z,1),_=ie(M,U,1)}else T(1);else{var L=Vr(c)+4,ve=r[L-4]|r[L-3]<<8,ye=L+ve;if(ye>o){l&&T(0);break}s&&d(f+ve),t.set(r.subarray(L,ye),f),e.b=f+=ve,e.p=c=ye*8,e.f=v;continue}if(c>R){l&&T(0);break}}s&&d(f+131072);for(var qt=(1<<z)-1,Yt=(1<<U)-1,Se=c;;Se=c){var j=P[Te(r,c)&qt],Z=j>>4;if(c+=j&15,c>R){l&&T(0);break}if(j||T(2),Z<256)t[f++]=Z;else if(Z==256){Se=c,P=null;break}else{var qe=Z-254;if(Z>264){var E=Z-257,re=At[E];qe=C(r,c,(1<<re)-1)+$t[E],c+=re}var xe=_[Te(r,c)&Yt],Ee=xe>>4;xe||T(3),c+=xe&15;var M=Wr[Ee];if(Ee>3){var re=Ot[Ee];M+=Te(r,c)&(1<<re)-1,c+=re}if(c>R){l&&T(0);break}s&&d(f+131072);var Ye=f+qe;if(f<M){var Ke=i-M,Kt=Math.min(M,Ye);for(Ke+f<0&&T(3);f<Kt;++f)t[f]=n[Ke+f]}for(;f<Ye;++f)t[f]=t[f-M]}}e.l=P,e.p=Se,e.b=f,e.f=v,P&&(v=1,e.m=z,e.d=_,e.n=U)}while(!v);return f!=t.length&&a?Fe(t,0,f):t.subarray(0,f)},Zr=new x(0),N=function(r,e){return r[e]|r[e+1]<<8},I=function(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0},Ce=function(r,e){return I(r,e)+I(r,e+4)*4294967296};function Gr(r,e){return jr(r,{i:2},e&&e.out,e&&e.dictionary)}var Ne=typeof TextDecoder<"u"&&new TextDecoder,Xr=0;try{Ne.decode(Zr,{stream:!0}),Xr=1}catch{}var qr=function(r){for(var e="",t=0;;){var n=r[t++],o=(n>127)+(n>223)+(n>239);if(t+o>r.length)return{s:e,r:Fe(r,t-1)};o?o==3?(n=((n&15)<<18|(r[t++]&63)<<12|(r[t++]&63)<<6|r[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|r[t++]&63):e+=String.fromCharCode((n&15)<<12|(r[t++]&63)<<6|r[t++]&63):e+=String.fromCharCode(n)}};function Yr(r,e){if(e){for(var t="",n=0;n<r.length;n+=16384)t+=String.fromCharCode.apply(null,r.subarray(n,n+16384));return t}else{if(Ne)return Ne.decode(r);var o=qr(r),i=o.s,t=o.r;return t.length&&T(8),i}}var Kr=function(r,e){return e+30+N(r,e+26)+N(r,e+28)},Qr=function(r,e,t){var n=N(r,e+28),o=Yr(r.subarray(e+46,e+46+n),!(N(r,e+8)&2048)),i=e+46+n,a=I(r,e+20),s=t&&a==4294967295?Jr(r,i):[a,I(r,e+24),I(r,e+42)],l=s[0],d=s[1],v=s[2];return[N(r,e+10),l,d,o,i+N(r,e+30)+N(r,e+32),v]},Jr=function(r,e){for(;N(r,e)!=1;e+=4+N(r,e+2));return[Ce(r,e+12),Ce(r,e+4),Ce(r,e+20)]};function en(r,e){for(var t={},n=r.length-22;I(r,n)!=101010256;--n)(!n||r.length-n>65558)&&T(13);var o=N(r,n+8);if(!o)return{};var i=I(r,n+16),a=i==4294967295||o==65535;if(a){var s=I(r,n-12);a=I(r,s)==101075792,a&&(o=I(r,s+32),i=I(r,s+48))}for(var l=e&&e.filter,d=0;d<o;++d){var v=Qr(r,i,a),c=v[0],f=v[1],P=v[2],_=v[3],z=v[4],U=v[5],R=Kr(r,U);i=z,(!l||l({name:_,size:f,originalSize:P,compression:c}))&&(c?c==8?t[_]=Gr(r.subarray(R,R+f),{out:new x(P)}):T(14,"unknown compression type "+c):t[_]=Fe(r,R,R+f))}return t}const tn={maxEntries:2500,maxExpandedBytes:250*1024*1024,maxEntryBytes:50*1024*1024};function rn(r){const e=r.replace(/\\/gu,"/").replace(/^\/+/u,"");return!e||e.includes("../")||e===".."?null:e}function nn(){return{entries:0,expandedBytes:0}}function on(r,e,t=tn){return r.entries+=1,r.expandedBytes+=e,r.entries>t.maxEntries?"too-many-entries":r.expandedBytes>t.maxExpandedBytes?"too-many-expanded-bytes":e>t.maxEntryBytes?"entry-too-large":"ok"}function $(r,e){const t=new DOMParser().parseFromString(r,"application/xml");if(t.getElementsByTagName("parsererror")[0])throw new b("INVALID_PACKAGE",`Could not parse ${e}.`);return t}function W(r){return new TextDecoder().decode(r)}function u(r,e){return r?.getAttribute(`w:${e}`)??r?.getAttribute(`r:${e}`)??r?.getAttribute(e)??null}function K(r,e){return D(r,e)[0]??null}function h(r,e){return S(r,e)[0]??null}function D(r,e){if(!r)return[];const t=[],n=o=>{for(const i of S(o))i.localName===e&&t.push(i),n(i)};return n(r),t}function S(r,e){if(!r)return[];const t=Array.from(r.childNodes).filter(n=>n.nodeType===1);return e?t.filter(n=>n.localName===e):t}const de="word/document.xml",Be="word/_rels/document.xml.rels",zt="[Content_Types].xml",$e="docProps/core.xml",me="word/styles.xml",We="word/numbering.xml",_e="word/comments.xml",Re="word/footnotes.xml",Me="word/endnotes.xml",an={maxEntries:1500,maxExpandedBytes:150*1024*1024,maxEntryBytes:25*1024*1024},sn=new Set([zt,de,Be,$e,me,We,_e,Re,Me]);class ln{constructor(e=en){this.unzip=e}unzip;read(e){const t=[],n=nn();let o;try{o=this.unzip(new Uint8Array(e),{filter:s=>this.shouldExtract(s,n,t)})}catch(s){throw s instanceof b?s:new b("INVALID_PACKAGE",`Could not unzip DOCX package: ${String(s)}`)}if(!o[zt]||!o[de])throw new b("INVALID_PACKAGE","DOCX package is missing required Word document parts.");const i=$(W(o[de]),de),a=un(o,i);return o[me]||t.push("Document styles are missing; common Word style names will be inferred where possible."),a.length>0&&t.push(`Unsupported Word features detected: ${a.join(", ")}.`),{files:o,documentXml:i,warnings:t,unsupportedFeatures:a}}shouldExtract(e,t,n){const o=on(t,e.originalSize,an);if(o==="too-many-entries")throw new b("INVALID_PACKAGE",`DOCX package has too many ZIP entries (${t.entries}).`);if(o==="too-many-expanded-bytes")throw new b("INVALID_PACKAGE","DOCX package expands beyond the local safety limit.");const i=rn(e.name);return!i||!cn(i)?!1:i.startsWith("word/media/")&&o==="entry-too-large"?(n.push(`Skipped oversized embedded media: ${i}.`),!1):!0}}function cn(r){return sn.has(r)||/^word\/(?:header|footer)\d+\.xml$/.test(r)||/^word\/_rels\/(?:header|footer)\d+\.xml\.rels$/.test(r)||r.startsWith("word/media/")}function un(r,e){const t=e.documentElement;return[["text boxes",D(t,"txbxContent").length>0],["charts",D(t,"chart").length>0],["SmartArt diagrams",D(t,"diagram").length>0],["equations",D(t,"oMath").length>0||D(t,"oMathPara").length>0],["tracked changes",D(t,"ins").length>0||D(t,"del").length>0],["embedded external document parts",D(t,"altChunk").length>0],["chart parts",Object.keys(r).some(o=>o.startsWith("word/charts/"))]].filter(([,o])=>o).map(([o])=>o)}class dn{parseRelationships(e){const t=new Map;if(!e)return t;for(const n of D($(W(e),Be).documentElement,"Relationship")){const o=n.getAttribute("Id"),i=n.getAttribute("Target");o&&i&&t.set(o,{target:i,type:n.getAttribute("Type"),targetMode:n.getAttribute("TargetMode")})}return t}parseStyles(e){const t=new Map;if(!e)return t;for(const n of S($(W(e),me).documentElement,"style")){const o=u(n,"styleId");if(!o)continue;const i=u(h(n,"name"),"val");t.set(o,{styleId:o,name:i,basedOn:u(h(n,"basedOn"),"val"),headingLevel:Vt(u(K(n,"outlineLvl"),"val"))??Ht(i??o)})}return t}parseNumbering(e){const t={numToAbstract:new Map,abstractLevels:new Map};if(!e)return t;const n=$(W(e),We);for(const o of S(n.documentElement,"abstractNum")){const i=u(o,"abstractNumId");if(!i)continue;const a=new Map;for(const s of S(o,"lvl")){const l=Number(u(s,"ilvl")??"0"),d=hn(u(h(s,"numFmt"),"val"));a.set(l,{format:d,text:u(h(s,"lvlText"),"val")??(d==="bullet"?"•":`%${l+1}.`),start:jt(u(h(s,"start"),"val"))??1})}t.abstractLevels.set(i,a)}for(const o of S(n.documentElement,"num")){const i=u(o,"numId"),a=u(h(o,"abstractNumId"),"val");i&&a&&t.numToAbstract.set(i,a)}return t}parseMetadata(e){if(!e)return Ut();const t=$(W(e),$e).documentElement;return Object.fromEntries(["title","subject","creator","description","created","modified"].map(n=>[n,pn(t,n)]))}}function Ut(){return{title:null,subject:null,creator:null,description:null,created:null,modified:null}}function Vt(r){const e=Number(r);return r&&Number.isInteger(e)&&e>=0&&e<=8?e+1:null}function Ht(r){const e=/^heading([1-6])$/.exec(r.replace(/\s+/g,"").toLowerCase());return e?Number(e[1]):r.replace(/\s+/g,"").toLowerCase()==="title"?1:null}function jt(r){const e=Number(r);return r&&Number.isInteger(e)&&e>0?e:null}function hn(r){return["bullet","lowerLetter","upperLetter","lowerRoman","upperRoman","none"].includes(r)?r:"decimal"}function pn(r,e){const t=K(r,e)?.textContent?.trim()??"";return t.length>0?t:null}const at="http://schemas.openxmlformats.org/officeDocument/2006/relationships",fn=9525,mn=20;class gn{constructor(e=new ln,t=new dn){this.packageReader=e,this.partParser=t}packageReader;partParser;nextId=1;listCounters=new Map;parse(e){this.nextId=1,this.listCounters.clear();const t=this.readPackage(e),n=K(t.documentXml.documentElement,"body");if(!n)throw new b("INVALID_PACKAGE","DOCX package does not contain a Word document body.");const o=Ie();o.comments=t.comments.size,o.footnotes=t.footnotes.size,o.endnotes=t.endnotes.size;const i=this.parseBlocks(n,t,o),a=this.parseHeaderFooterParts(t,"header",o),s=this.parseHeaderFooterParts(t,"footer",o),l=ut(t.unsupportedFeatures);return o.unsupported=l.length,{title:t.metadata.title??vn(i)??"Word document",metadata:t.metadata,blocks:i,headers:a,footers:s,footnotes:[...t.footnotes.values()],endnotes:[...t.endnotes.values()],comments:[...t.comments.values()],outline:yn(i),stats:o,warnings:ut(t.warnings),unsupportedFeatures:l,plainText:bn(i,a,s,t.footnotes,t.endnotes,t.comments)}}readPackage(e){const t=this.packageReader.read(e);return{...t,relationships:this.partParser.parseRelationships(t.files[Be]),styles:this.partParser.parseStyles(t.files[me]),numbering:this.partParser.parseNumbering(t.files[We]),metadata:this.partParser.parseMetadata(t.files[$e]),footnotes:this.parseNotes(t.files[Re],"footnote"),endnotes:this.parseNotes(t.files[Me],"endnote"),comments:this.parseComments(t.files[_e])}}parseBlocks(e,t,n){const o=[];for(const i of S(e)){if(i.localName==="p"&&o.push(...this.splitParagraphOnPageBreaks(this.parseParagraph(i,t,n))),i.localName==="tbl"&&o.push(this.parseTable(i,t,n)),i.localName==="sdt"){const a=h(i,"sdtContent");a&&o.push(...this.parseBlocks(a,t,n))}i.localName==="altChunk"&&o.push({type:"unsupported",id:this.makeId("unsupported"),label:"Embedded external document",detail:"This Word altChunk content cannot be rendered locally yet."})}return o}parseParagraph(e,t,n){n.paragraphs++;const o=this.parseParagraphStyle(e,t),i=this.parseListInfo(e,t);return i&&n.lists++,{type:"paragraph",id:this.makeId("p"),styleName:o.styleName,styleLabel:o.styleLabel,headingLevel:o.headingLevel,alignment:this.parseParagraphAlignment(e),list:i,format:this.parseParagraphFormat(e),inlines:S(e).filter(a=>a.localName==="r"||a.localName==="hyperlink").flatMap(a=>this.parseInlineContainer(a,t,n))}}splitParagraphOnPageBreaks(e){if(!e.inlines.some(o=>o.type==="pageBreak"))return[e];const t=[];let n=[];for(const o of e.inlines){if(o.type!=="pageBreak"){n.push(o);continue}n.length>0&&t.push({...e,id:this.makeId("p"),inlines:n}),t.push({type:"pageBreak",id:this.makeId("page")}),n=[]}return n.length>0&&t.push({...e,id:this.makeId("p"),inlines:n}),t.length>0?t:[{type:"pageBreak",id:this.makeId("page")}]}parseParagraphStyle(e,t){const n=h(e,"pPr"),o=u(h(n,"pStyle"),"val"),i=o?t.styles.get(o)??null:null;return{styleName:o,styleLabel:i?.name??o,headingLevel:this.parseParagraphHeadingLevel(n,o,i)}}parseParagraphHeadingLevel(e,t,n){return Vt(u(h(e,"outlineLvl"),"val"))??n?.headingLevel??Ht(n?.name??t??"")}parseParagraphAlignment(e){const t=u(h(h(e,"pPr"),"jc"),"val");return t==="center"||t==="right"?t:t==="both"?"justify":t==="left"?"left":null}parseParagraphFormat(e){const t=h(e,"pPr"),n=h(t,"spacing"),o=h(t,"ind");return{marginBeforePt:q(u(n,"before")),marginAfterPt:q(u(n,"after")),indentLeftPt:q(u(o,"left")),indentHangingPt:q(u(o,"hanging")),firstLineIndentPt:q(u(o,"firstLine"))}}parseListInfo(e,t){const n=h(h(e,"pPr"),"numPr");if(!n)return null;const o=u(h(n,"numId"),"val");if(!o)return null;const i=Number(u(h(n,"ilvl"),"val")??"0"),a=t.numbering.numToAbstract.get(o),s=a?t.numbering.abstractLevels.get(a)?.get(i):void 0,l=s?.format??"decimal";return{numId:o,level:i,format:l,label:this.nextListLabel(o,i,s)}}nextListLabel(e,t,n){const o=this.listCounters.get(e)??[],i=n?.start??1;o[t]=o[t]===void 0?i:o[t]+1,o.length=t+1,this.listCounters.set(e,o);const a=n?.format??"decimal",s=a==="bullet"?n?.text??"•":`${ct(o[t]??i,a)}.`;return(n?.text??s).replace(/%([1-9])/g,(l,d)=>ct(o[Number(d)-1]??i,a))}parseInlineContainer(e,t,n){if(e.localName!=="hyperlink")return this.parseRun(e,t,n,null);const o=this.resolveHyperlink(e,t);return o&&n.links++,S(e,"r").flatMap(i=>this.parseRun(i,t,n,o))}resolveHyperlink(e,t){const n=e.getAttributeNS(at,"id")??e.getAttribute("r:id");if(n){const i=t.relationships.get(n);if(i?.target)return i.target}const o=u(e,"anchor");return o?`#${o}`:null}parseRun(e,t,n,o){const i=this.parseRunFormat(e),a=[];for(const s of S(e))if(s.localName==="t"||s.localName==="instrText"){const l=s.textContent??"";l.length>0&&a.push({type:"text",text:l,hyperlink:o,...i})}else if(s.localName==="tab")a.push({type:"text",text:"	",hyperlink:o,...i});else if(s.localName==="br"||s.localName==="cr")a.push(u(s,"type")==="page"?{type:"pageBreak"}:{type:"break"});else if(s.localName==="drawing"||s.localName==="pict"){const l=this.parseImage(s,t);l&&(n.images++,a.push(l))}else s.localName==="footnoteReference"?a.push({type:"noteReference",noteType:"footnote",noteId:u(s,"id")??""}):s.localName==="endnoteReference"?a.push({type:"noteReference",noteType:"endnote",noteId:u(s,"id")??""}):s.localName==="commentReference"&&a.push({type:"commentReference",commentId:u(s,"id")??""});return a}parseRunFormat(e){const t=h(e,"rPr"),n=u(h(t,"vertAlign"),"val");return{bold:ne(t,"b"),italic:ne(t,"i"),underline:ne(t,"u"),strikethrough:ne(t,"strike")||ne(t,"dstrike"),superscript:n==="superscript",subscript:n==="subscript",color:lt(u(h(t,"color"),"val")),highlight:In(u(h(t,"highlight"),"val")),fontSizePt:Cn(u(h(t,"sz"),"val"))}}parseImage(e,t){const n=K(e,"blip"),o=n?.getAttributeNS(at,"embed")??n?.getAttribute("r:embed")??null;if(!o)return null;const i=t.relationships.get(o);if(!i?.target||i.targetMode==="External")return null;const a=wn("word",i.target),s=t.files[a];if(!s)return null;const l=K(e,"extent"),d=K(e,"docPr");return{type:"image",src:`data:${kn(a)};base64,${En(s)}`,altText:d?.getAttribute("descr")??d?.getAttribute("title")??"Embedded image",widthPx:st(l?.getAttribute("cx")),heightPx:st(l?.getAttribute("cy"))}}parseTable(e,t,n){return n.tables++,{type:"table",id:this.makeId("table"),rows:S(e,"tr").map(o=>({cells:S(o,"tc").map(i=>{const a=h(i,"tcPr")??i;return{colSpan:jt(u(h(a,"gridSpan"),"val"))??1,rowSpan:(h(a,"vMerge"),1),shading:lt(u(h(a,"shd"),"fill")),widthPt:Tn(h(a,"tcW")),blocks:this.parseBlocks(i,t,n)}})}))}}parseHeaderFooterParts(e,t,n){const o=`word/${t}`;return Object.keys(e.files).filter(i=>i.startsWith(o)&&i.endsWith(".xml")).sort().flatMap(i=>{const a=e.files[i];if(!a)return[];const s={...e,relationships:this.partParser.parseRelationships(e.files[Sn(i)])};return[{id:this.makeId(t),kind:t,blocks:this.parseBlocks($(W(a),i).documentElement,s,n)}]})}parseNotes(e,t){const n=new Map;if(!e)return n;const o=$(W(e),t==="footnote"?Re:Me),i=this.createPartPackage(o),a=Ie();for(const s of S(o.documentElement,t)){const l=u(s,"id");if(!l||l.startsWith("-"))continue;const d=this.parseBlocks(s,i,a);n.set(l,{id:l,blocks:d,plainText:Q(d)})}return n}parseComments(e){const t=new Map;if(!e)return t;const n=$(W(e),_e),o=this.createPartPackage(n),i=Ie();for(const a of S(n.documentElement,"comment")){const s=u(a,"id");if(!s)continue;const l=this.parseBlocks(a,o,i);t.set(s,{id:s,blocks:l,plainText:Q(l),author:u(a,"author"),date:u(a,"date")})}return t}createPartPackage(e){return{files:{},documentXml:e,relationships:new Map,styles:new Map,numbering:{numToAbstract:new Map,abstractLevels:new Map},metadata:Ut(),footnotes:new Map,endnotes:new Map,comments:new Map,warnings:[],unsupportedFeatures:[]}}makeId(e){return`${e}-${this.nextId++}`}}function Ie(){return{paragraphs:0,tables:0,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0}}function vn(r){for(const e of r)if(e.type==="paragraph"){const t=ze(e.inlines).trim();if(t.length>0)return t}return null}function yn(r){return r.flatMap(e=>{if(e.type!=="paragraph"||!e.headingLevel)return[];const t=ze(e.inlines).trim();return t.length>0?[{id:e.id,title:t,level:e.headingLevel}]:[]})}function bn(r,e,t,n,o,i){return[Q(r),...e.map(a=>Q(a.blocks)),...t.map(a=>Q(a.blocks)),...[...n.values()].map(a=>a.plainText),...[...o.values()].map(a=>a.plainText),...[...i.values()].map(a=>a.plainText)].filter(a=>a.length>0).join(`
`)}function Q(r){return r.map(e=>e.type==="paragraph"?ze(e.inlines):e.type==="pageBreak"?`
--- Page break ---
`:e.type==="unsupported"?`[${e.label}]`:e.rows.map(t=>t.cells.map(n=>Q(n.blocks)).join("	")).join(`
`)).filter(e=>e.length>0).join(`
`)}function ze(r){return r.map(e=>e.type==="text"?e.text:e.type==="break"||e.type==="pageBreak"?`
`:e.type==="image"?`[Image: ${e.altText}]`:e.type==="noteReference"?`[${e.noteType} ${e.noteId}]`:`[comment ${e.commentId}]`).join("")}function ne(r,e){const t=h(r,e),n=u(t,"val");return!!t&&n!=="false"&&n!=="0"&&n!=="off"}function wn(r,e){return xn(e.startsWith("/")?e.slice(1):`${r}/${e}`)}function Sn(r){const e=r.lastIndexOf("/"),t=e>=0?r.slice(0,e):"",n=e>=0?r.slice(e+1):r;return t?`${t}/_rels/${n}.rels`:`_rels/${n}.rels`}function xn(r){const e=[];for(const t of r.split("/"))if(!(!t||t===".")){if(t===".."){e.pop();continue}e.push(t)}return e.join("/")}function st(r){const e=Number(r);return r&&Number.isFinite(e)?Math.round(e/fn):null}function En(r){let e="";for(let t=0;t<r.length;t+=32768)e+=String.fromCharCode(...r.subarray(t,t+32768));return btoa(e)}function kn(r){const e=r.split(".").pop()?.toLowerCase();return{jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",svg:"image/svg+xml",webp:"image/webp"}[e??""]??"image/png"}function q(r){const e=Number(r);return r&&Number.isFinite(e)?e/mn:null}function Tn(r){const e=u(r,"type");return e&&e!=="dxa"?null:q(u(r,"w"))}function Cn(r){const e=Number(r);return r&&Number.isFinite(e)?e/2:null}function lt(r){return r&&r!=="auto"&&/^[0-9a-fA-F]{6}$/.test(r)?`#${r}`:null}function In(r){return r&&r!=="none"?{yellow:"#fff59d",green:"#c8e6c9",cyan:"#b2ebf2",magenta:"#f8bbd0",blue:"#bbdefb",red:"#ffcdd2",darkBlue:"#90caf9",darkCyan:"#80deea",darkGreen:"#a5d6a7",darkMagenta:"#ce93d8",darkRed:"#ef9a9a",darkYellow:"#ffe082",darkGray:"#b0bec5",lightGray:"#eceff1",black:"#424242"}[r]??null:null}function ct(r,e){if(e==="lowerLetter"||e==="upperLetter"){const t=Pn(r);return e==="upperLetter"?t.toUpperCase():t}if(e==="lowerRoman"||e==="upperRoman"){const t=Ln(r);return e==="upperRoman"?t.toUpperCase():t}return e==="bullet"||e==="none"?"":String(r)}function Pn(r){let e=Math.max(1,r),t="";for(;e>0;)e--,t=String.fromCharCode(97+e%26)+t,e=Math.floor(e/26);return t}function Ln(r){const e=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]];let t=Math.max(1,Math.min(3999,r)),n="";for(const[o,i]of e)for(;t>=o;)n+=i,t-=o;return n}function ut(r){return[...new Set(r)]}const Dn={title:null,subject:null,creator:null,description:null,created:null,modified:null},Nn={marginBeforePt:null,marginAfterPt:null,indentLeftPt:null,indentHangingPt:null,firstLineIndentPt:null};class _n{nextId=1;parse(e){this.nextId=1;const t=JSON.parse(e),n=G(B(t)?t.sections:[]).flatMap(i=>B(i)?this.parseBlocks(G(i.blocks)):[]),o=Zt(n);return{title:An(n)??"Converted Word document",metadata:Dn,blocks:n,headers:[],footers:[],footnotes:[],endnotes:[],comments:[],outline:n.flatMap(i=>i.type==="paragraph"&&i.headingLevel!==null?[{id:i.id,title:Ue(i.inlines),level:i.headingLevel}]:[]),stats:{paragraphs:n.filter(i=>i.type==="paragraph").length,tables:n.filter(i=>i.type==="table").length,images:0,lists:0,links:0,comments:0,footnotes:0,endnotes:0,unsupported:0},warnings:["Rendered from self-hosted SFDT conversion; advanced editing metadata is not shown."],unsupportedFeatures:[],plainText:o}}parseBlocks(e){return e.flatMap(t=>B(t)?Array.isArray(t.rows)?[this.parseTable(t)]:[this.parseParagraph(t)]:[])}parseParagraph(e){const t=Rn(e,["paragraphFormat","styleName"]);return{type:"paragraph",id:this.makeId("sfdt-p"),styleName:t,styleLabel:t,headingLevel:Mn(t),alignment:null,list:null,format:Nn,inlines:G(e.inlines).flatMap(n=>this.parseInline(n))}}parseInline(e){if(!B(e)||typeof e.text!="string"||e.text.length===0)return[];const t=B(e.characterFormat)?e.characterFormat:{};return[{type:"text",text:e.text,bold:t.bold===!0,italic:t.italic===!0,underline:t.underline===!0,strikethrough:t.strikethrough===!0,superscript:t.baselineAlignment==="Superscript",subscript:t.baselineAlignment==="Subscript",color:typeof t.fontColor=="string"?t.fontColor:null,highlight:typeof t.highlightColor=="string"?t.highlightColor:null,fontSizePt:typeof t.fontSize=="number"?t.fontSize:null,hyperlink:null}]}parseTable(e){return{type:"table",id:this.makeId("sfdt-table"),rows:G(e.rows).map(t=>({cells:B(t)?G(t.cells).map(n=>({colSpan:1,rowSpan:1,shading:null,widthPt:null,blocks:B(n)?this.parseBlocks(G(n.blocks)):[]})):[]}))}}makeId(e){return`${e}-${this.nextId++}`}}function B(r){return typeof r=="object"&&r!==null}function G(r){return Array.isArray(r)?r:[]}function Rn(r,e){let t=r;for(const n of e){if(!B(t))return null;t=t[n]}return typeof t=="string"?t:null}function Mn(r){const e=/^heading([1-6])$/.exec((r??"").replace(/\s+/g,"").toLowerCase());return e?Number(e[1]):null}function An(r){for(const e of r){if(e.type!=="paragraph")continue;const t=Ue(e.inlines).trim();if(t.length>0)return t}return null}function Zt(r){return r.map(e=>e.type==="paragraph"?Ue(e.inlines):e.type==="pageBreak"?"":e.type==="unsupported"?e.label:e.rows.map(t=>t.cells.map(n=>Zt(n.blocks)).join("	")).join(`
`)).filter(e=>e.length>0).join(`
`)}function Ue(r){return r.map(e=>e.type==="text"?e.text:"").join("")}const{logError:ae,getErrorMessage:dt}=Qt("[docklet-word-viewer]");class On{constructor(e){this.app=e}app;resolveWordFile(e){const t=this.app.vault.getFileByPath(e);return t instanceof g.TFile?t:null}async readWordFile(e,t){this.assertWordFile(e);const n=t*1024*1024;if(e.stat.size>n)throw new b("FILE_TOO_LARGE",`Document is ${Fn(e.stat.size)}; limit is ${t} MB.`);return{file:e,data:await this.app.vault.readBinary(e),mtime:e.stat.mtime,size:e.stat.size}}assertWordFile(e){if(!ue(e.extension)||Ar(e.path)!=="docx")throw new b("INVALID_FORMAT",dr)}}function Fn(r){return r<1024*1024?`${Math.max(1,Math.round(r/1024))} KB`:`${(r/(1024*1024)).toFixed(1)} MB`}const V={defaultLayout:"paginated",maxFileSizeMb:ir,allowRemoteConversion:!1,preferRemoteConversion:!1,syncfusionServiceUrl:"",remoteConversionTimeoutMs:ar};function Ve(r){return{defaultLayout:$n(r?.defaultLayout,V.defaultLayout),maxFileSizeMb:pt(r?.maxFileSizeMb,Pe,Pt,V.maxFileSizeMb),allowRemoteConversion:ht(r?.allowRemoteConversion,V.allowRemoteConversion),preferRemoteConversion:ht(r?.preferRemoteConversion,V.preferRemoteConversion),syncfusionServiceUrl:Bn(r?.syncfusionServiceUrl,V.syncfusionServiceUrl),remoteConversionTimeoutMs:pt(r?.remoteConversionTimeoutMs,Lt,Dt,V.remoteConversionTimeoutMs)}}function ht(r,e){return typeof r=="boolean"?r:e}function Bn(r,e){return typeof r=="string"?r.trim():e}function $n(r,e){return r==="paginated"||r==="continuous"?r:e}function pt(r,e,t,n){return typeof r!="number"||!Number.isFinite(r)?n:Math.min(t,Math.max(e,Math.round(r)))}class Wn extends g.PluginSettingTab{constructor(e,t){super(e,t.settingsPlugin),this.host=t}host;display(){const{containerEl:e}=this;e.empty(),e.createEl("p",{text:"Configure Docklet Word Viewer rendering, file-size safety, and optional self-hosted remote conversion.",cls:"setting-item-description"}),zn(e,this.host,()=>this.display())}}function zn(r,e,t){const n=e.settingsSignal.value;let o=null,i=null,a=null;const s=()=>{const l=!Le(e.settingsSignal.value);i?.setDisabled(l),a?.setDisabled(l)};new g.Setting(r).setName("Default layout").setDesc("Use paginated pages for Word-like reading, or continuous for a denser Obsidian pane.").addDropdown(l=>l.addOption("paginated","Paginated").addOption("continuous","Continuous").setValue(n.defaultLayout).onChange(d=>ce(e,{defaultLayout:d==="continuous"?"continuous":"paginated"},t))),gt(r,"Maximum local file size","Block very large documents before parsing them in the Obsidian renderer process.",String(Pe),String(n.maxFileSizeMb),Pe,Pt,l=>ft(e,"maxFileSizeMb",l)),mt(r,"Allow remote conversion","Enable posting documents to a configured self-hosted Syncfusion-compatible conversion service. Leave off to keep documents local.",n.allowRemoteConversion,l=>{const d={allowRemoteConversion:l};l&&!e.settingsSignal.value.syncfusionServiceUrl.trim()&&(d.syncfusionServiceUrl=nt),ce(e,d),d.syncfusionServiceUrl&&o?.setValue(d.syncfusionServiceUrl),s()}),o=Un(r,"Syncfusion service URL","Required for remote conversion. Use a self-hosted endpoint; known public Syncfusion demo hosts are blocked.",nt,n.syncfusionServiceUrl,l=>{ce(e,{syncfusionServiceUrl:l}),s()}),i=mt(r,"Prefer remote conversion","Use the configured self-hosted converter before the local parser. Otherwise it is only used as a fallback after local parsing fails.",n.preferRemoteConversion,l=>ce(e,{preferRemoteConversion:l},t)),a=gt(r,"Remote conversion timeout","Abort self-hosted conversion requests after this many milliseconds.","15000",String(n.remoteConversionTimeoutMs),Lt,Dt,l=>ft(e,"remoteConversionTimeoutMs",l)),s()}function ce(r,e,t){r.patchSettings(Ve({...r.settingsSignal.value,...e})),t?.()}function ft(r,e,t){if(t.trim()==="")return null;const n=Number(t);if(!Number.isFinite(n))return null;const o=Ve({...r.settingsSignal.value,[e]:n});return r.patchSettings(o),o[e]}function mt(r,e,t,n,o){let i=null;return new g.Setting(r).setName(e).setDesc(t).addToggle(a=>(i=a,a.setValue(n).onChange(o))),i}function Un(r,e,t,n,o,i){let a=null;return new g.Setting(r).setName(e).setDesc(t).addText(s=>(a=s,s.setPlaceholder(n).setValue(o).onChange(i))),a}function gt(r,e,t,n,o,i,a,s){let l=null;return new g.Setting(r).setName(e).setDesc(t).addText(d=>(l=d,d.inputEl.type="number",d.inputEl.min=String(i),d.inputEl.max=String(a),d.inputEl.step="1",d.setPlaceholder(n).setValue(o).onChange(v=>{const c=s(v);c!==null&&String(c)!==v.trim()&&d.setValue(String(c))}))),l}class Vn{constructor(e,t,n,o=ae){this.parser=e,this.sfdtParser=t,this.conversionClient=n,this.logger=o}parser;sfdtParser;conversionClient;logger;async load(e,t){if(t.preferRemoteConversion&&Le(t))try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(n){this.logger("WordDocumentLoadService.remotePreferredConversion",n)}try{return this.parser.parse(e.data)}catch(n){if(!Le(t))throw n;try{return this.sfdtParser.parse(await this.conversionClient.convertToSfdt(e,t))}catch(o){throw this.logger("WordDocumentLoadService.remoteFallbackConversion",o),n}}}}let vt=0;function Hn(r,e=globalThis.crypto){const t=e?.randomUUID?.();if(t)return t;vt+=1;const n=Math.random().toString(36).slice(2,10);return`${r}-${Date.now().toString(36)}-${vt}-${n}`}function jn(r,e,t){if(typeof r!="object"||r===null)return!1;const n=r;return n.channel!==e||typeof n.bridgeId!="string"||typeof n.type!="string"?!1:t===void 0}const Zn=["allow-downloads","allow-forms","allow-modals","allow-popups","allow-scripts","allow-same-origin"];function Gn(r=Zn){return[...new Set(r)].join(" ")}const Xn=String.raw`
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
`,qn=String.raw`
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
`;function Yn(r=""){const e=qn.replace("__WORD_VIEWER_BRIDGE_ID__",JSON.stringify(r));return`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${Xn}</style></head><body><div class="document-shell"><main class="document"><article id="page" class="page"></article></main></div><script>${e}<\/script></body></html>`}function Kn(r){return!Qn(r)||!jn(r,F)?!1:r.type==="ready"||r.type==="renderError"&&typeof r.message=="string"||r.type==="searchResult"&&typeof r.total=="number"&&typeof r.active=="number"}function Qn(r){return typeof r=="object"&&r!==null}class Jn{constructor(e,t,n=Hn("word-viewer")){this.container=e,this.callbacks=t,this.bridgeId=n}container;callbacks;bridgeId;iframe=null;ready=!1;readyResolve=null;readyReject=null;readyTimer=null;onMessage=e=>this.handleMessage(e);mount(){return this.destroy(),this.iframe=document.createElement("iframe"),this.iframe.className=fr,this.iframe.setAttribute("sandbox",Gn(["allow-scripts"])),window.addEventListener("message",this.onMessage),this.iframe.srcdoc=Yn(this.bridgeId),this.container.appendChild(this.iframe),new Promise((e,t)=>{this.readyResolve=e,this.readyReject=t,this.readyTimer=setTimeout(()=>{this.readyTimer=null,this.readyResolve=null,this.readyReject=null,t(new b("BRIDGE_TIMEOUT","Word viewer iframe did not become ready."))},or)})}loadDocument(e,t,n){this.post({channel:F,bridgeId:this.bridgeId,type:"loadDocument",document:e,isDark:t,layout:n})}setTheme(e){this.post({channel:F,bridgeId:this.bridgeId,type:"themeChanged",isDark:e})}setLayout(e){this.post({channel:F,bridgeId:this.bridgeId,type:"layoutChanged",layout:e})}setZoom(e){this.post({channel:F,bridgeId:this.bridgeId,type:"zoomChanged",zoom:e})}setSearch(e){this.post({channel:F,bridgeId:this.bridgeId,type:"searchChanged",query:e})}navigateSearch(e){this.post({channel:F,bridgeId:this.bridgeId,type:"searchNavigate",direction:e})}scrollToBlock(e){this.post({channel:F,bridgeId:this.bridgeId,type:"scrollToBlock",blockId:e})}destroy(){window.removeEventListener("message",this.onMessage),this.clearReadyTimer(),this.readyReject?.(new b("BRIDGE_DESTROYED","Word viewer iframe was destroyed before it became ready.")),this.iframe?.parentElement&&this.iframe.parentElement.removeChild(this.iframe),this.iframe=null,this.ready=!1,this.readyResolve=null,this.readyReject=null}handleMessage(e){!this.iframe||e.source!==this.iframe.contentWindow||Kn(e.data)&&e.data.bridgeId===this.bridgeId&&this.dispatch(e.data)}dispatch(e){if(e.type==="ready"){this.ready=!0,this.clearReadyTimer(),this.readyResolve?.(),this.readyResolve=null,this.readyReject=null;return}e.type==="renderError"&&this.callbacks.onError(e.message),e.type==="searchResult"&&this.callbacks.onSearchResult({total:e.total,active:e.active})}post(e){!this.iframe?.contentWindow||!this.ready||this.iframe.contentWindow.postMessage(e,"*")}clearReadyTimer(){this.readyTimer!==null&&(clearTimeout(this.readyTimer),this.readyTimer=null)}}class eo{bridge=null;async mount(e,t,n,o,i,a,s){this.destroy(),e.empty(),this.bridge=new Jn(e,t),await this.bridge.mount(),this.bridge.loadDocument(n,o,i),this.bridge.setZoom(a),this.bridge.setSearch(s)}setTheme(e){this.bridge?.setTheme(e)}setLayout(e){this.bridge?.setLayout(e)}setZoom(e){this.bridge?.setZoom(e)}setSearch(e){this.bridge?.setSearch(e)}navigateSearch(e){this.bridge?.navigateSearch(e)}scrollToBlock(e){this.bridge?.scrollToBlock(e)}destroy(){this.bridge?.destroy(),this.bridge=null}}class X extends g.ItemView{constructor(e,t,n,o){super(e),this.repository=t,this.loader=n,this.settingsSignal=o,this.layout=o.value.defaultLayout}repository;loader;settingsSignal;currentFile=null;bridge=new eo;model=null;statusEl=null;warningEl=null;outlineEl=null;iframeHostEl=null;layoutButtonEl=null;searchInputEl=null;searchStatusEl=null;layout;zoom=Nt;outlineVisible=!0;loadSequence=0;getViewType(){return O}getDisplayText(){return this.currentFile?this.currentFile.basename:k}getIcon(){return It}getDocumentPath(){return this.currentFile?.path??null}async onClose(){this.invalidateCurrentLoad(),this.destroyBridge()}async reloadDocument(){await this.loadCurrentDocument()}updateTheme(e){this.bridge.setTheme(e)}async onOpen(){this.buildDom(),this.currentFile?await this.loadCurrentDocument():this.showEmpty()}async setState(e,t){await super.setState(e,t);const n=to(e[ot],this.settingsSignal.value.defaultLayout),o=ro(e[it]),i=this.layout!==n,a=this.zoom!==o;this.layout=n,this.zoom=o,this.updateLayoutButton();const s=e.file;if(typeof s!="string"){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showEmpty();return}if(this.currentFile?.path===s&&this.model){i&&this.bridge.setLayout(this.layout),a&&this.bridge.setZoom(this.zoom),this.showDocumentStatus(this.model);return}const l=this.repository.resolveWordFile(s);if(!l){this.invalidateCurrentLoad(),this.currentFile=null,this.model=null,this.showError("Word document was not found.",()=>{this.setState(e,t)});return}this.currentFile?.path!==l.path&&(this.model=null),this.currentFile=l,await this.loadCurrentDocument()}getState(){return{...super.getState(),...this.currentFile?{file:this.currentFile.path}:{},[ot]:this.layout,[it]:this.zoom}}refreshSettings(){this.model&&this.showDocumentStatus(this.model)}async loadCurrentDocument(){if(!this.currentFile){this.invalidateCurrentLoad(),this.showEmpty();return}const e=this.currentFile,t=++this.loadSequence;try{this.showLoading();const n=this.settingsSignal.value,o=await this.repository.readWordFile(e,n.maxFileSizeMb);if(!this.isCurrentLoad(t,e))return;const i=await this.loader.load(o,n);if(!this.isCurrentLoad(t,e)||(this.model=i,await this.mountBridge(this.model),!this.isCurrentLoad(t,e)))return;this.showDocumentStatus(this.model)}catch(n){if(!this.isCurrentLoad(t,e))return;ae("WordViewerView.loadCurrentDocument",n),new g.Notice(`${ur} - ${dt(n)}`),this.showError(dt(n),()=>{this.loadCurrentDocument()})}}async mountBridge(e){this.iframeHostEl&&(this.destroyBridge(),await this.bridge.mount(this.iframeHostEl,{onError:t=>this.showError(t,()=>{this.loadCurrentDocument()}),onSearchResult:t=>this.showSearchResult(t)},e,this.app.isDarkMode(),this.layout,this.zoom,this.searchInputEl?.value??""))}buildDom(){const e=this.containerEl.children[1];if(!(e instanceof HTMLElement))return;e.empty(),e.addClass(hr);const t=e.createDiv({cls:Pr});this.buildToolbar(t),this.statusEl=t.createDiv({cls:Ir}),this.warningEl=e.createDiv({cls:Nr});const n=e.createDiv({cls:pr});this.outlineEl=n.createDiv({cls:mr}),this.iframeHostEl=n.createDiv({cls:Dr})}buildToolbar(e){for(const n of this.toolbarActions()){const o=this.createToolbarButton(e,n);n.label===this.layoutButtonLabel()&&(this.layoutButtonEl=o)}const t=e.createDiv({cls:wr});this.searchInputEl=t.createEl("input",{cls:Sr,attr:{type:"search",placeholder:"Search"}}),this.searchInputEl.addEventListener("input",()=>this.bridge.setSearch(this.searchInputEl?.value??"")),this.searchInputEl.addEventListener("keydown",n=>{n.key==="Enter"&&this.bridge.navigateSearch(n.shiftKey?"previous":"next")}),this.createToolbarButton(t,{icon:"chevron-up",label:"Previous search result",onClick:()=>this.bridge.navigateSearch("previous")}),this.createToolbarButton(t,{icon:"chevron-down",label:"Next search result",onClick:()=>this.bridge.navigateSearch("next")}),this.searchStatusEl=t.createDiv({cls:xr,text:"0/0"})}toolbarActions(){return[{icon:"refresh-cw",label:"Reload document",onClick:()=>{this.reloadDocument()}},{icon:this.layoutButtonIcon(),label:this.layoutButtonLabel(),onClick:()=>this.toggleLayout()},{icon:"zoom-out",label:"Zoom out",onClick:()=>this.changeZoom(-.1)},{icon:"zoom-in",label:"Zoom in",onClick:()=>this.changeZoom(sr)},{icon:"list-tree",label:"Toggle document outline",onClick:()=>this.toggleOutline()},{icon:"copy",label:"Copy document text",onClick:()=>{this.copyDocumentText()}},{icon:"external-link",label:"Open in default app",onClick:()=>{this.openExternally()}}]}toggleLayout(){this.layout=this.layout==="paginated"?"continuous":"paginated",this.bridge.setLayout(this.layout),this.updateLayoutButton(),this.model&&this.showDocumentStatus(this.model)}changeZoom(e){this.zoom=Math.round(Math.min(Rt,Math.max(_t,this.zoom+e))*100)/100,this.bridge.setZoom(this.zoom),this.model&&this.showDocumentStatus(this.model)}toggleOutline(){this.outlineVisible=!this.outlineVisible,this.outlineEl?.toggle(this.outlineVisible)}createToolbarButton(e,t){const n=e.createEl("button",{cls:Lr});return n.type="button",yt(n,t.icon,t.label),n.addEventListener("click",t.onClick),n}updateLayoutButton(){this.layoutButtonEl&&yt(this.layoutButtonEl,this.layoutButtonIcon(),this.layoutButtonLabel())}layoutButtonIcon(){return this.layout==="paginated"?"rows-3":"files"}layoutButtonLabel(){return this.layout==="paginated"?"Switch to continuous layout":"Switch to paginated layout"}showDocumentStatus(e){if(this.statusEl?.setText(`${e.stats.paragraphs} paragraphs · ${e.stats.tables} tables · ${e.stats.images} images · ${e.stats.links} links · ${Math.round(this.zoom*100)}%`),this.warningEl){const t=[...e.warnings,...e.unsupportedFeatures.map(n=>`Unsupported: ${n}.`)];this.warningEl.empty(),t.length>0?(this.warningEl.setText(t.join(" ")),this.warningEl.show()):this.warningEl.hide()}this.renderOutline(e)}renderOutline(e){if(!this.outlineEl)return;if(this.outlineEl.empty(),this.outlineEl.toggle(this.outlineVisible),this.outlineEl.createDiv({cls:gr,text:"Outline"}),e.outline.length===0){this.outlineEl.createDiv({cls:br,text:"No headings found."});return}const t=this.outlineEl.createDiv({cls:vr});for(const n of e.outline){const o=t.createEl("button",{cls:yr,text:n.title});o.type="button",o.dataset.level=String(n.level),o.addEventListener("click",()=>this.bridge.scrollToBlock(n.id))}}showSearchResult(e){this.searchStatusEl?.setText(e.total>0?`${e.active+1}/${e.total}`:"0/0")}async copyDocumentText(){if(!this.model){new g.Notice(`${k}: no document text to copy.`);return}try{await navigator.clipboard.writeText(this.model.plainText),new g.Notice(`${k}: copied document text.`)}catch(e){ae("WordViewerView.copyDocumentText",e),new g.Notice(`${k}: could not copy document text.`)}}async openExternally(){if(!this.currentFile){new g.Notice(`${k}: no Word document open.`);return}try{const e=this.app.vault.adapter.getFullPath?.(this.currentFile.path);if(!e){new g.Notice(`${k}: cannot resolve local file path.`);return}const n=await require("electron").shell?.openPath(e);typeof n=="string"&&n.length>0&&new g.Notice(`${k}: ${n}`)}catch(e){ae("WordViewerView.openExternally",e),new g.Notice(`${k}: could not open document externally.`)}}showEmpty(){this.destroyBridge(),this.showState("No Word document open","Open a .docx file from the file explorer or command palette.")}showLoading(){this.showState("Loading Word document","Reading and rendering local DOCX content.")}showError(e,t){this.destroyBridge();const n=[{label:"Try again",onClick:t}];this.model&&n.push({label:"Copy document text",onClick:()=>{this.copyDocumentText()}}),this.currentFile&&n.push({label:"Open in default app",onClick:()=>{this.openExternally()}}),this.showState("Could not render Word document",e,n)}showState(e,t,n=[]){if(this.statusEl?.setText(""),this.warningEl?.hide(),this.outlineEl?.empty(),!this.iframeHostEl)return;this.iframeHostEl.empty();const o=this.iframeHostEl.createDiv({cls:Er});o.createDiv({cls:kr,text:e}),o.createDiv({cls:Tr,text:t});for(const i of n)o.createEl("button",{cls:Cr,text:i.label}).addEventListener("click",i.onClick)}destroyBridge(){this.bridge.destroy()}invalidateCurrentLoad(){this.loadSequence++}isCurrentLoad(e,t){return e===this.loadSequence&&this.currentFile?.path===t.path}}function yt(r,e,t){r.empty(),g.setIcon(r,e),r.setAttribute("aria-label",t),r.setAttribute("title",t)}function to(r,e){return r==="continuous"||r==="paginated"?r:e}function ro(r){return typeof r!="number"||!Number.isFinite(r)?Nt:Math.round(Math.min(Rt,Math.max(_t,r))*100)/100}class no extends g.Plugin{store=rr(V);repository=null;parser=null;sfdtParser=null;conversionClient=null;loader=null;get settingsPlugin(){return this}get settingsSignal(){return this.store.settingsSignal}patchSettings(e){this.store.patchSettings(e)}async onload(){await this.loadSettings(),this.registerSettingsPersistence(),this.registerView(O,e=>new X(e,this.getRepository(),this.getLoader(),this.settingsSignal)),this.registerExtensions([...Ct],O),this.registerCommands(),this.registerEvents(),this.addSettingTab(new Wn(this.app,this))}onunload(){this.app.workspace.detachLeavesOfType(O)}async loadSettings(){const e=await this.loadData(),t=Ve(e);this.store.setSettings(t),JSON.stringify(e??{})!==JSON.stringify(t)&&await this.saveData(t)}registerSettingsPersistence(){let e=!1;this.register(this.store.onSettingsChange(()=>{if(!e){e=!0;return}this.refreshSettingsInAllViews(),this.saveData(this.settingsSignal.value).catch(t=>ae("DockletWordViewerPlugin.saveData",t))}))}registerCommands(){this.addCommand({id:lr,name:"Docklet Word Viewer: Open active Word document",checkCallback:e=>{const t=this.app.workspace.getActiveFile();return!(t instanceof g.TFile)||!ue(t.extension)?!1:(e||this.openWordDocument(t.path),!0)}}),this.addCommand({id:cr,name:"Docklet Word Viewer: Reload active document",checkCallback:e=>{const t=this.getActiveWordView();return t?(e||t.reloadDocument(),!0):!1}})}registerEvents(){this.registerEvent(this.app.workspace.on("file-menu",(e,t)=>this.handleFileMenu(e,t))),this.registerEvent(this.app.workspace.on("css-change",()=>this.updateThemeInAllViews()))}handleFileMenu(e,t){!(t instanceof g.TFile)||!ue(t.extension)||e.addItem(n=>n.setTitle("Open in Docklet Word Viewer").setIcon(It).onClick(()=>{this.openWordDocument(t.path)}))}async openWordDocument(e){const t=this.getRepository().resolveWordFile(e);if(!t){new g.Notice(`${k}: document not found: ${e}`);return}if(!ue(t.extension)){new g.Notice(`${k}: unsupported Word document type: ${t.extension}`);return}const n=this.app.workspace.getLeavesOfType(O).find(o=>this.leafHasDocumentPath(o,e));if(n){this.app.workspace.revealLeaf(n);return}await this.app.workspace.getLeaf(!1).setViewState({type:O,state:{file:t.path},active:!0})}updateThemeInAllViews(){const e=this.app.isDarkMode();for(const t of this.app.workspace.getLeavesOfType(O))t.view instanceof X&&t.view.updateTheme(e)}refreshSettingsInAllViews(){for(const e of this.app.workspace.getLeavesOfType(O))e.view instanceof X&&e.view.refreshSettings()}getActiveWordView(){const e=this.app.workspace.getActiveViewOfType(X);return e instanceof X?e:null}leafHasDocumentPath(e,t){return e.view instanceof X?e.view.getDocumentPath()===t:e.getViewState().state?.file===t}getRepository(){return this.repository??=new On(this.app),this.repository}getLoader(){return this.loader||(this.loader=new Vn(this.getParser(),this.getSfdtParser(),this.getConversionClient())),this.loader}getParser(){return this.parser??=new gn,this.parser}getSfdtParser(){return this.sfdtParser??=new _n,this.sfdtParser}getConversionClient(){return this.conversionClient??=new Rr,this.conversionClient}}exports.default=no;
