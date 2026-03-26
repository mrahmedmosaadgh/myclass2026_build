import{b as Ae,c as Fe,r as Vn,n as ho,t as xt,x as bt,d as K,k as dt,$ as hl,u as fl,_ as Bs,m as Ls,w as xn,e as gn,F as dl,q as pl,s as Aa,j as at,a as Ws,o as zs,z as Mi,L as vl,D as ml}from"./comp-section-messages-BWYvTHip.js";import{H as gl}from"./feature-classroom-records-mfTBcTZ4.js";const yl=["type","disabled"],Vs={__name:"AppButton",props:{type:{type:String,default:"button"},variant:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},setup(r){return(t,e)=>(Ae(),Fe("button",{type:r.type,disabled:r.disabled,class:ho(["inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",{"bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500":r.variant==="primary","bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500":r.variant==="secondary","bg-red-600 text-white hover:bg-red-700 focus:ring-red-500":r.variant==="danger","bg-green-600 text-white hover:bg-green-700 focus:ring-green-500":r.variant==="success"}])},[Vn(t.$slots,"default")],10,yl))}},qy=Object.freeze(Object.defineProperty({__proto__:null,default:Vs},Symbol.toStringTag,{value:"Module"})),xl={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},bl={key:0,class:"px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between"},wl={key:0,class:"text-lg leading-6 font-medium text-gray-900"},Cl={key:1,class:"px-6 py-4 border-t border-gray-200 bg-gray-50"},Vr={__name:"AppCard",props:{title:String,noPadding:{type:Boolean,default:!1}},setup(r){return(t,e)=>(Ae(),Fe("div",xl,[r.title||t.$slots.header?(Ae(),Fe("div",bl,[r.title?(Ae(),Fe("h3",wl,xt(r.title),1)):bt("",!0),Vn(t.$slots,"header")])):bt("",!0),K("div",{class:ho({"p-6":!r.noPadding})},[Vn(t.$slots,"default")],2),t.$slots.footer?(Ae(),Fe("div",Cl,[Vn(t.$slots,"footer")])):bt("",!0)]))}},Ky=Object.freeze(Object.defineProperty({__proto__:null,default:Vr},Symbol.toStringTag,{value:"Module"}));function _l(){const r=hl(),t=dt(()=>{var l;return((l=r.props.auth)==null?void 0:l.current_role)||"teacher"}),e=l=>Array.isArray(l)?l.includes(t.value):t.value===l,n=dt(()=>e("super-system")),o=dt(()=>e("system-admin")),a=dt(()=>e("school-admin")),i=dt(()=>e("teacher")),s=dt(()=>e("student")),u=dt(()=>e("parent")),c=dt(()=>e("hr"));return{currentRole:t,hasRole:e,isSuperSystem:n,isSystemAdmin:o,isSchoolAdmin:a,isTeacher:i,isStudent:s,isParent:u,isHr:c}}const El={class:"min-h-screen bg-gray-100 flex flex-col"},Il={class:"bg-white border-b border-gray-200"},Rl={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},kl={class:"flex justify-between h-16"},Sl={class:"flex"},Dl={class:"flex-shrink-0 flex items-center shrink-0"},Al={class:"ml-2 px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 capitalize"},Tl={class:"flex-1 py-8"},Nl={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},Fl={key:0,class:"mb-6 flex items-center justify-between"},Pl={key:0,class:"text-2xl font-bold text-gray-900"},Ta={__name:"RoleLayout",props:{title:String},setup(r){const{currentRole:t}=_l();return(e,n)=>(Ae(),Fe("div",El,[K("nav",Il,[K("div",Rl,[K("div",kl,[K("div",Sl,[K("div",Dl,[n[0]||(n[0]=K("span",{class:"text-xl font-bold text-indigo-600"},"MyClass 2026",-1)),K("span",Al,xt(fl(t)),1)])]),n[1]||(n[1]=K("div",{class:"flex items-center space-x-4"},[K("button",{class:"text-gray-400 hover:text-gray-500"},[K("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[K("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])])],-1))])])]),K("main",Tl,[K("div",Nl,[r.title||e.$slots.header?(Ae(),Fe("div",Fl,[r.title?(Ae(),Fe("h1",Pl,xt(r.title),1)):bt("",!0),Vn(e.$slots,"header")])):bt("",!0),Vn(e.$slots,"default")])])]))}},Xy=Object.freeze(Object.defineProperty({__proto__:null,default:Ta},Symbol.toStringTag,{value:"Module"})),Ml={class:"print:hidden mb-6"},Ol={class:"grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4 print:p-0"},Bl={class:"text-center mb-6"},Ll={class:"text-2xl font-bold uppercase tracking-widest text-gray-900"},Wl={class:"text-gray-500 font-mono"},zl={class:"grid grid-cols-2 gap-6 mb-6"},Vl={class:"flex flex-col items-center"},Ul=["src"],Gl={class:"flex flex-col items-center"},Hl=["src"],jl={class:"flex flex-col items-center"},ql=["src"],Kl={class:"flex flex-col items-center"},Xl=["src"],$l={class:"border-t-2 border-dashed border-gray-300 pt-4 grid grid-cols-2 gap-4"},Yl={class:"flex flex-col items-center bg-green-50 rounded-lg p-2 border border-green-200"},Ql=["src"],Jl={class:"flex flex-col items-center bg-red-50 rounded-lg p-2 border border-red-200"},Zl=["src"],eh={__name:"QrCardGenerator",setup(r){const t=at([{id:"1001",name:"Ahmed Ali"},{id:"1002",name:"Sara Mohamed"},{id:"1003",name:"Omar Khaled"}]),e=()=>{window.print()},n=o=>`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(o)}`;return(o,a)=>(Ae(),Ls(Ta,{title:"QR Card Generator"},{header:xn(()=>[gn(Vs,{onClick:e,variant:"primary",class:"print:hidden"},{default:xn(()=>[...a[0]||(a[0]=[K("svg",{class:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[K("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"})],-1),Aa(" Print Cards ",-1)])]),_:1})]),default:xn(()=>[K("div",Ml,[gn(Vr,{title:"Instructions"},{default:xn(()=>[...a[1]||(a[1]=[K("p",{class:"text-sm text-gray-600 mb-2"}," Print this page and cut out the cards. Give one card to each student. ",-1),K("p",{class:"text-sm text-gray-600"},` Students hold the corner corresponding to their answer (A, B, C, D) towards the teacher's scanner, and use the "Confirm" or "Cancel" codes to submit or reset their choice. `,-1)])]),_:1})]),K("div",Ol,[(Ae(!0),Fe(dl,null,pl(t.value,i=>(Ae(),Fe("div",{key:i.id,class:"border-4 border-gray-800 rounded-xl p-6 bg-white shrink-0 break-inside-avoid shadow-sm print:shadow-none"},[K("div",Bl,[K("h2",Ll,xt(i.name),1),K("p",Wl,"ID: "+xt(i.id),1)]),K("div",zl,[K("div",Vl,[a[2]||(a[2]=K("span",{class:"text-2xl font-bold text-blue-600 mb-1"},"A",-1)),K("img",{src:n(`${i.id}-A`),alt:"QR A",class:"w-24 h-24 border p-1"},null,8,Ul)]),K("div",Gl,[a[3]||(a[3]=K("span",{class:"text-2xl font-bold text-red-600 mb-1"},"B",-1)),K("img",{src:n(`${i.id}-B`),alt:"QR B",class:"w-24 h-24 border p-1"},null,8,Hl)]),K("div",jl,[a[4]||(a[4]=K("span",{class:"text-2xl font-bold text-green-600 mb-1"},"C",-1)),K("img",{src:n(`${i.id}-C`),alt:"QR C",class:"w-24 h-24 border p-1"},null,8,ql)]),K("div",Kl,[a[5]||(a[5]=K("span",{class:"text-2xl font-bold text-yellow-500 mb-1"},"D",-1)),K("img",{src:n(`${i.id}-D`),alt:"QR D",class:"w-24 h-24 border p-1"},null,8,Xl)])]),K("div",$l,[K("div",Yl,[a[6]||(a[6]=K("span",{class:"font-bold text-green-700 text-sm mb-1 uppercase"},"Confirm ✅",-1)),K("img",{src:n("CMD_CONFIRM"),alt:"Confirm",class:"w-16 h-16"},null,8,Ql)]),K("div",Jl,[a[7]||(a[7]=K("span",{class:"font-bold text-red-700 text-sm mb-1 uppercase"},"Cancel ❌",-1)),K("img",{src:n("CMD_CANCEL"),alt:"Cancel",class:"w-16 h-16"},null,8,Zl)])])]))),128))])]),_:1}))}},th=Bs(eh,[["__scopeId","data-v-502f84be"]]),$y=Object.freeze(Object.defineProperty({__proto__:null,default:th},Symbol.toStringTag,{value:"Module"})),nh={class:"relative w-full h-full bg-gray-900 rounded-xl overflow-hidden shadow-inner"},rh={key:0,class:"absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"},oh={__name:"QrReader",props:{cameraId:{type:String,default:null},paused:{type:Boolean,default:!1}},emits:["decode","error","init"],setup(r,{emit:t}){const e=r,n=t,o="qr-reader-elem-"+Math.floor(Math.random()*1e6);let a=null;const i=at(!1);return Ws(()=>{a=new gl(o);const s={fps:10,qrbox:{width:300,height:300}},u=e.cameraId?e.cameraId:{facingMode:"environment"};a.start(u,s,c=>{e.paused||n("decode",c)},c=>{}).then(()=>{i.value=!0,n("init",a)}).catch(c=>{n("error",c)})}),zs(()=>{a&&a.isScanning&&a.stop().then(()=>{a.clear()})}),(s,u)=>(Ae(),Fe("div",nh,[K("div",{id:o,class:"w-full h-full"}),r.paused?(Ae(),Fe("div",rh,[...u[0]||(u[0]=[K("div",{class:"bg-white/90 text-gray-900 px-4 py-2 rounded-lg shadow font-semibold"}," Scanner Paused ",-1)])])):bt("",!0)]))}},Us=Bs(oh,[["__scopeId","data-v-c9e551f1"]]),Yy=Object.freeze(Object.defineProperty({__proto__:null,default:Us},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Gs=function(r,t){return(Gs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function _t(r,t){function e(){this.constructor=r}Gs(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function $(r,t,e,n){return new(e||(e=Promise))((function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e((function(l){l(c.value)})).then(i,s)}u((n=n.apply(r,[])).next())}))}function Y(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return(function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(h){l=[6,h],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}})([u,c])}}}var ah=(function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return ih(n,i[0],i[1]),i.join("=")})),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach((function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=(function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")})(s,u)}))}},r})();function ih(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function M(){return Hs}var Hs=null,Ur=new Map,sa=new Map;function js(r,t){var e=Ks(r,t);return Ur.get(e)}function sh(r){return sa.get(r)}function Oi(r){for(var t=Ur.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function qs(r){var t=r.kernelName,e=r.backendName,n=Ks(t,e);if(Ur.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Ur.set(n,r)}function uh(r){var t=r.kernelName;sa.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),sa.set(t,r)}function Ks(r,t){return t+"_"+r}function ua(r,t,e){return Math.max(r,Math.min(t,e))}function Xs(r){return r%2==0?r:r+1}function ch(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function xe(r,t,e){e===void 0&&(e=""),E(Ue(r,t),(function(){return e+" Shapes "+r+" and "+t+" must match"}))}function er(r){E(r!=null,(function(){return"The input to the tensor constructor must be a non-null value."}))}function Yn(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Pt(r)&&!e)for(var n=0;n<r.length;++n)Yn(r[n],t,e);else t.push(r);return t}function Q(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Ue(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Ne(r){return r%1==0}function lh(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function ca(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function Un(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Bi(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise((function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()}))}function hh(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function ze(r,t){var e=t.length;return E((r=r==null?t.map((function(n,o){return o})):[].concat(r)).every((function(n){return n>=-e&&n<e})),(function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r})),E(r.every((function(n){return Ne(n)})),(function(){return"All values in axis param must be integers but got axis "+r})),r.map((function(n){return n<0?e+n:n}))}function yn(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:ze(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function cr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function Gr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function fh(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function dh(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function ph(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Pt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function $s(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function vh(r){if(r==null)return 0;var t=0;return r.forEach((function(e){return t+=e.length})),t}function Na(r){return typeof r=="string"||r instanceof String}function mh(r){return typeof r=="boolean"}function gh(r){return typeof r=="number"}function mr(r){return Array.isArray(r)?mr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":gh(r)?"float32":Na(r)?"string":mh(r)?"bool":"float32"}function la(r){return!!(r&&r.constructor&&r.call&&r.apply)}function ha(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Mt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function Ys(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Yn(r)),e&&fh(r,t),(function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"})(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function Li(r,t){if(r.length===0)return t[0];var e=r.reduce((function(n,o){return n*o}));if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return(function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce((function(f,d){return f*d}));for(c=0;c<u;c++)s[c]=n(o+c*h,l,i)}return s})(0,r,t)}function Qs(r,t){for(var e=gr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function gr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function At(){return M().platform.now()}function Js(r){r.forEach((function(t){E(Number.isInteger(t)&&t>=0,(function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."}))}))}function yh(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.encode(r,t)}function Hr(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.decode(r,t)}function Wi(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function xh(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var bh=(function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new wh)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time((function(){o=n()}));return o.forEach((function(s){s.data().then((function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var d=c[f];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+h+"'"),!0}})(u,s.dtype,t),i.then((function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)}))}))})),o},r})(),wh=(function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?Un(o+"ms",9):o.error,u=Un(t,25),c=e.rank,l=e.size,h=Un(e.shape.toString(),14),f="";for(var d in a){var p=a[d].shape||e.shape,m=p.length;f+=d+": "+m+"D "+(m>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r})(),zi=20,nr=3,Po=7;function Ch(r,t,e,n){var o=Mt(t),a=(function(c,l,h,f){var d=Q(l),p=f[f.length-1],m=new Array(p).fill(0),v=l.length,g=h==="complex64"?or(c):c;if(v>1)for(var x=0;x<d/p;x++)for(var b=x*p,y=0;y<p;y++)m[y]=Math.max(m[y],rr(g[b+y],0,h).length);return m})(r,t,e,o),i=t.length,s=(function c(l,h,f,d,p,m){m===void 0&&(m=!0);var v=f==="complex64"?2:1,g=h[0],x=h.length;if(x===0)return f==="complex64"?[rr(or(l)[0],0,f)]:f==="bool"?[Zs(l[0])]:[l[0].toString()];if(x===1){if(g>zi){var b=nr*v,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-nr)*v,g*v));return f==="complex64"&&(y=or(y),w=or(w)),["["+y.map((function(B,V){return rr(B,p[V],f)})).join(", ")+", ..., "+w.map((function(B,V){return rr(B,p[g-nr+V],f)})).join(", ")+"]"]}return["["+(f==="complex64"?or(l):Array.from(l)).map((function(B,V){return rr(B,p[V],f)})).join(", ")+"]"]}var C=h.slice(1),S=d.slice(1),k=d[0]*v,I=[];if(g>zi){for(var R=0;R<nr;R++){var N=(A=R*k)+k;I.push.apply(I,c(l.slice(A,N),C,f,S,p,!1))}for(I.push("..."),R=g-nr;R<g;R++)N=(A=R*k)+k,I.push.apply(I,c(l.slice(A,N),C,f,S,p,R===g-1))}else for(R=0;R<g;R++){var A;N=(A=R*k)+k,I.push.apply(I,c(l.slice(A,N),C,f,S,p,R===g-1))}var L=x===2?",":"";for(I[0]="["+I[0]+L,R=1;R<I.length-1;R++)I[R]=" "+I[R]+L;var O=`,
`;for(R=2;R<x;R++)O+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(m?"":O),I})(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map((function(c){return"    "+c})).join(`
`)),u.join(`
`)}function rr(r,t,e){return Un(Array.isArray(r)?parseFloat(r[0].toFixed(Po))+" + "+parseFloat(r[1].toFixed(Po))+"j":Na(r)?"'"+r+"'":e==="bool"?Zs(r):parseFloat(r.toFixed(Po)).toString(),t)}function Zs(r){return r===0?"false":"true"}function or(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var lr=(function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=Q(t),n!=null){var a=n.length;E(a===this.size,(function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."}))}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||Gr(e,this.size),this.strides=Mt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,(function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"}));var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Tt().makeTensor(this.values,this.shape,this.dtype)},r})(),Tt=null,P=null,eu=null,Ie=(function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Q(t),this.strides=Mt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,(function(){return"The array must have only 1 element."})),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),P.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return $(this,void 0,void 0,(function(){var t;return Y(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,P.buffer(this.shape,this.dtype,t)]}}))}))},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return $(this,void 0,void 0,(function(){var t;return Y(this,(function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Li(this.shape,t)]}}))}))},r.prototype.arraySync=function(){return Li(this.shape,this.dataSync())},r.prototype.data=function(){return $(this,void 0,void 0,(function(){var t,e;return Y(this,(function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Tt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map((function(o){return Hr(o)}))]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}}))}))},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Tt().readSync(this.dataId);if(this.dtype==="string")try{return t.map((function(e){return Hr(e)}))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return $(this,void 0,void 0,(function(){var t;return Y(this,(function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Tt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}}))}))},r.prototype.dispose=function(){this.isDisposed||(Tt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),P.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),P.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),P.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),P.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),P.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),P.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),Ch(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),P.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),P.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),P.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),P.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),P.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),P.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),P.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),P.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),P.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),P.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),eu("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),P.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),P.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),P.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),P.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),P.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),P.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),P.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),P.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),P.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),P.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),P.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),P.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),P.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),P.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),P.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),P.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),P.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),P.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),P.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),P.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),P.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),P.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),P.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),P.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),P.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),P.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),P.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),P.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),P.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),P.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),P.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),P.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),P.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),P.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),P.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),P.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),P.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),P.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),P.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),P.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),P.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),P.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),P.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),P.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),P.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),P.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),P.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),P.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Tt().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),P.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),P.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),P.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r})();Object.defineProperty(Ie,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Vi,fa,da,pa,va,Qn=(function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return _t(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Ue(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Tt().disposeTensor(this),this.dataId=e.dataId,Tt().incRef(this,null)},t.prototype.dispose=function(){Tt().disposeVariable(this),this.isDisposedInternal=!0},t})(Ie);Object.defineProperty(Qn,Symbol.hasInstance,{value:function(r){return r instanceof Ie&&r.assign!=null&&r.assign instanceof Function}}),(function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"})(Vi||(Vi={})),(function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"})(fa||(fa={})),(function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"})(da||(da={})),(function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"})(pa||(pa={})),(function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"})(va||(va={}));var _h={float32:pa,int32:fa,bool:da,complex64:va};function je(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return _h[r][t]}function Mo(r){return je(r,"int32")}function ke(r,t){if(r.dtype===t.dtype)return[r,t];var e=je(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function Eh(r,t){E(r.dtype===t.dtype,(function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"}))}function tu(r){var t=[];return(function e(n,o,a){if(n!=null){if(n instanceof Ie)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}})(r,t,new Set),t}var Oo,Ui=(function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r})(),Ih=(function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ui}return r.prototype.ready=function(){return $(this,void 0,void 0,(function(){var t,e,n;return Y(this,(function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then((function(){}))];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}}))}))},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return $(this,void 0,void 0,(function(){var e,n,o;return Y(this,(function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new bh(this.backendInstance),[2,!0]}}))}))},r.prototype.setupRegisteredKernels=function(){var t=this;Oi(this.backendName).forEach((function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)}))},r.prototype.disposeRegisteredKernels=function(t){var e=this;Oi(t).forEach((function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])}))},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then((function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)})).catch((function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)}));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority}))},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun((function(){return o.startScope(a)}),(function(){return o.endScope(n)}),(function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n}))},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],(function(o){return{x:function(){return o.toFloat()}}}),[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach((function(u){a+=u.dtype==="complex64"?3:1}));var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,d=function(x){h&&(l=x.map((function(b){return c.keep(c.clone(b))})))},p=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=js(o,this.backendName);return f=g!=null?function(){var x=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map((function(C){var S=C.dataId,k=C.shape,I=C.dtype;return c.makeTensorFromDataId(S,k,I)})),w=y.filter((function(C,S){return s[S]}));return d((i||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();v=c.tidy((function(){return t(c.backend,d)}));var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun((function(){return c.state.kernelDepth++}),(function(){return c.state.kernelDepth--}),(function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,(function(){return f()})):f()})),h&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map((function(x){return e[x].shape})),outputShapes:u.map((function(x){return x.shape}))}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&Na(t[0])&&(a=t.map((function(l){return yh(l)})));var i=o.write(a,e,n),s=new Ie(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=vh(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new Ie(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new Qn(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*$s(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof Qn||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return $(this,void 0,void 0,(function(){var e,n;return Y(this,(function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map((function(a){return a.totalBytesSnapshot}))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]}))}))},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=sh(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map((function(l,h){if(l==null){var f=n[h],d=gr(f.size,f.dtype);return i.makeTensor(d,f.shape,f.dtype)}return l})),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=tu(t),o=new Set(n.map((function(u){return u.id}))),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach((function(u){u.kept||u.scopeId!==s.id||e.track(u)}))},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),E(e.length>0,(function(){return"gradients() received an empty list of xs."})),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun((function(){return a.startTape()}),(function(){return a.endTape()}),(function(){return a.tidy("forward",t)}));E(i instanceof Ie,(function(){return"The result y returned by f() must be a tensor."}));var s=(function(u,c,l){for(var h={},f={},d=0;d<c.length;d++)h[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var m in p){for(var v=p[m],g=!1,x=0;x<c.length;x++)if(h[v.id]){C.outputs.forEach((function(R){return h[R.id]=!0})),g=!0,f[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,x=0;x<C.outputs.length;x++)if(b[C.outputs[x].id]){for(var m in p)b[p[m].id]=!0,y[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(f[(C=u[d]).id]&&y[C.id]){var S={};for(var m in C.inputs){var k=C.inputs[m];h[k.id]&&(S[m]=k)}var I=Object.assign({},C);I.inputs=S,I.outputs=C.outputs,w.push(I)}}return w})(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=Qs(Q(u),"float32"),T.makeTensor(c,u,"float32")),(function(f,d,p){for(var m=function(g){var x=d[g],b=[];if(x.outputs.forEach((function(S){var k=f[S.id];k!=null?b.push(k):b.push(null)})),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var k=p((function(){return y[S]()}));if(k.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+k.dtype+"'");var I=x.inputs[S];if(!Ue(k.shape,I.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+S+"' has shape '"+k.shape+"', which does not match the shape of the input '"+I.shape+"'");if(f[I.id]==null)f[I.id]=k;else{var R=f[I.id];f[I.id]=R.add(k),R.dispose()}};for(var C in x.inputs)w(C)},v=d.length-1;v>=0;v--)m(v)})(l,s,(function(f){return a.tidy(f)}));var h=e.map((function(f){return l[f.id]}));return a.state.gradientDepth===0&&(a.state.activeTape.forEach((function(f){for(var d=0,p=f.saved;d<p.length;d++)p[d].dispose()})),a.state.activeTape=null),{value:i,grads:h}}))},r.prototype.customGrad=function(t){var e=this;return E(la(t),(function(){return"The f passed in customGrad(f) must be a function."})),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every((function(s){return s instanceof Ie})),(function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"}));var i={};return o.forEach((function(s,u){i[u]=s})),e.runKernelFunc((function(s,u){return E((n=t.apply(void 0,o.concat([u]))).value instanceof Ie,(function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"})),E(la(n.gradFunc),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."})),n.value}),i,(function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."})),E(l.every((function(f){return f instanceof Ie})),(function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."}));var h={};return l.forEach((function(f,d){h[d]=function(){return f}})),h}))}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return $(this,void 0,void 0,(function(){var e,n;return Y(this,(function(o){switch(o.label){case 0:return e=At(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=At()-e,[2,n]}}))}))},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ui,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r})(),T=(function(){var r=(function(){if(Oo==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Oo=e}return Oo})();if(r._tfengine==null){var t=new ah(r);r._tfengine=new Ih(t)}return(function(e){Hs=e})(r._tfengine.ENV),Tt=function(){return r._tfengine},r._tfengine})();function nu(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var jt=M();jt.registerFlag("DEBUG",(function(){return!1}),(function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),jt.registerFlag("IS_BROWSER",(function(){return nu()})),jt.registerFlag("IS_NODE",(function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0})),jt.registerFlag("IS_CHROME",(function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)})),jt.registerFlag("PROD",(function(){return!1})),jt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(function(){return jt.getBool("DEBUG")})),jt.registerFlag("DEPRECATION_WARNINGS_ENABLED",(function(){return!0})),jt.registerFlag("IS_TEST",(function(){return!1}));var hr,ut,st,vn={},Bo={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Rh(r,t){vn[r]=t}function Lt(r){r in vn||(vn[r]=(function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=(function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")})(e);return n.addEventListener("webglcontextlost",(function(o){o.preventDefault(),delete vn[e]}),!1),e===1?n.getContext("webgl",Bo)||n.getContext("experimental-webgl",Bo):n.getContext("webgl2",Bo)})(r));var t=vn[r];return t.isContextLost()?(delete vn[r],Lt(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),vn[r])}function fo(r,t){return[t,r]}function ir(r){var t=Q(r);return ca(Math.ceil(t/4))}function yr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function Fa(r,t){var e,n,o,a,i,s,u,c,l,h=r;return M().getNumber("WEBGL_VERSION")===2?(e=h.R32F,n=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,t,e){var n=e();return t&&(function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Ah(o,a))})(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(hr||(hr={})),(function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"})(ut||(ut={})),(function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(st||(st={}));var kh=596e-10,Sh=65504;function Dh(r){return!!(M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||kh<Math.abs(r)&&Math.abs(r)<Sh)}function Ah(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function Rr(r,t,e){return Xt(r,t,(function(){return r.getExtension(e)}),'Extension "'+e+'" not supported on this browser.')}function Th(r,t,e){var n=Xt(r,t,(function(){return r.createShader(r.VERTEX_SHADER)}),"Unable to create vertex WebGLShader.");if(J(r,t,(function(){return r.shaderSource(n,e)})),J(r,t,(function(){return r.compileShader(n)})),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Nh(r,t,e){var n=Xt(r,t,(function(){return r.createShader(r.FRAGMENT_SHADER)}),"Unable to create fragment WebGLShader.");if(J(r,t,(function(){return r.shaderSource(n,e)})),J(r,t,(function(){return r.compileShader(n)})),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw(function(o,a){var i=Fh.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map((function(v,g){return Un((g+1).toString(),c)+v})),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var d=l.slice(0,s-1),p=l.slice(s-1,s),m=l.slice(s);console.log(d.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+Un(p[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))})(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Lo,Wo,Fh=/ERROR: [0-9]+:([0-9]+):/g;function Ph(r,t){return Xt(r,t,(function(){return r.createProgram()}),"Unable to create WebGLProgram.")}function Mh(r,t,e){if(J(r,t,(function(){return r.linkProgram(e)})),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function zo(r,t,e){if(J(r,t,(function(){return r.validateProgram(e)})),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Oh(r,t,e){var n=Xt(r,t,(function(){return r.createBuffer()}),"Unable to create WebGLBuffer");return J(r,t,(function(){return r.bindBuffer(r.ARRAY_BUFFER,n)})),J(r,t,(function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)})),n}function Bh(r,t,e){var n=Xt(r,t,(function(){return r.createBuffer()}),"Unable to create WebGLBuffer");return J(r,t,(function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)})),J(r,t,(function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)})),n}function Lh(r,t){return Xt(r,t,(function(){return r.createTexture()}),"Unable to create WebGLTexture.")}function Wh(r,t){var e=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function zh(r,t){return Xt(r,t,(function(){return r.createFramebuffer()}),"Unable to create WebGLFramebuffer.")}function Gi(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(J(r,t,(function(){return r.bindBuffer(r.ARRAY_BUFFER,o)})),J(r,t,(function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)})),J(r,t,(function(){return r.enableVertexAttribArray(u)})),!0)}function Vh(r,t,e,n){qh(r,n),J(r,t,(function(){return r.activeTexture(r.TEXTURE0+n)})),J(r,t,(function(){return r.bindTexture(r.TEXTURE_2D,e)}))}function Uh(r,t,e,n){return Xt(r,t,(function(){return r.getUniformLocation(e,n)}),'uniform "'+n+'" not present in program.')}function Gh(r,t,e){return r.getUniformLocation(t,e)}function Hh(r,t,e,n,o,a){J(r,t,(function(){return Vh(r,t,n,a)})),J(r,t,(function(){return r.uniform1i(o,a)}))}function Vo(r,t,e,n){J(r,t,(function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)})),J(r,t,(function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)}))}function Hi(r,t,e){J(r,t,(function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)})),J(r,t,(function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)}))}function kr(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+jh(r,t))}function jh(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Xt(r,t,e,n){var o=J(r,t,(function(){return e()}));if(o==null)throw new Error(n);return o}function qh(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function jr(r,t){return t===void 0&&(t=2),Q(r.slice(0,r.length-t))}function qr(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Uo(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[jr(r)].concat(qr(r))),t}function Kh(r,t){var e;t===void 0&&(t=!1);var n=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map((function(c,l){return l>=r.length-2?Xs(r[l]):r[l]}))).length===1&&(r=[2,r[0]])),r.length!==2){var o=yn(r);r=o.newShape}var a=Q(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=jr(r),s=2,u=2;return r.length&&(s=(e=qr(r))[0],u=e[1]),ca(a=i*(s/2)*(u/2)).map((function(c){return 2*c}))}return ca(a)}function Sr(r){return r%2==0}function Dr(r,t){if(Ue(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||Sr(e)&&Sr(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Sr(r[0])&&Sr(t[0])}function Xh(r){if(Lo==null){var t=Lt(r);Lo=t.getParameter(t.MAX_TEXTURE_SIZE)}return Lo}function $h(r){if(Wo==null){var t=Lt(r);Wo=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Wo)}function Yh(r){if(r===0)return 0;var t=Lt(r);return mt(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:mt(t,"EXT_disjoint_timer_query")?1:0}function mt(r,t){return r.getExtension(t)!=null}function ji(r){try{if(Lt(r)!=null)return!0}catch{return!1}return!1}function Qh(r){if(r===0)return!1;var t=Lt(r);if(r===1){if(!mt(t,"OES_texture_float"))return!1}else if(!mt(t,"EXT_color_buffer_float"))return!1;return ma(t)}function Jh(r){if(r===0)return!1;var t=Lt(r);if(r!==1){if(mt(t,"EXT_color_buffer_float"))return ma(t);if(mt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return(function(n,o){var a=Fa(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u})(t,e)}return!1}return!!mt(t,"OES_texture_float")&&!!mt(t,"WEBGL_color_buffer_float")&&ma(t)}function ma(r){var t=Fa(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function Zh(r){return r===2&&Lt(r).fenceSync!=null}var re=M();function ru(r){M().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function X(r,t){return T.tidy(r,t)}function tt(r){tu(r).forEach((function(t){return t.dispose()}))}function ef(r){return T.keep(r)}function Kr(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];M().getBool("IS_TEST")||console.warn.apply(console,r)}function hn(r,t){var e=r;if(Pt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Pt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&(function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!Pt(a))return void E(i.length===0,(function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"}));E(i.length>0,(function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"})),E(a.length===i[0],(function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"}));for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))})(r,n,[]),n}function qi(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function _(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Ie)return qi(n,r.dtype,t,e),r;var o=mr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),qi(n,o,t,e),r==null||!Pt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=hn(r,o);Pt(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?Ys(r,o,M().getBool("DEBUG")):Yn(r,[],!0);return T.makeTensor(s,i,o)}function Xr(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map((function(o,a){return _(o,t+"["+a+"]",e)}),n)}function ou(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function tf(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function Ke(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map((function(a){return r[a]}))]}function nt(r,t){return tf(r,t.map((function(e){return 1})),t)}function it(r,t,e){E(ou(t,e),(function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."}))}function Wt(r,t){if(ou(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach((function(o){return e.push(o)})),e}function Pa(r){return r.map((function(t,e){return[e,t]})).sort((function(t,e){return t[1]-e[1]})).map((function(t){return t[0]}))}function zt(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function nf(r,t){var e=r[0].length;r.forEach((function(o,a){E(o.length===e,(function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"}))})),E(t>=0&&t<e,(function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."}));var n=r[0];r.forEach((function(o,a){for(var i=0;i<e;i++)E(i===t||o[i]===n[i],(function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."}))}))}function Jn(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function D(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];T.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}re.registerFlag("HAS_WEBGL",(function(){return re.getNumber("WEBGL_VERSION")>0})),re.registerFlag("WEBGL_VERSION",(function(){return ji(2)?2:ji(1)?1:0})),re.registerFlag("WEBGL_BUFFER_SUPPORTED",(function(){return re.get("WEBGL_VERSION")===2})),re.registerFlag("WEBGL_CPU_FORWARD",(function(){return!0})),re.registerFlag("WEBGL_FORCE_F16_TEXTURES",(function(){return!1})),re.registerFlag("WEBGL_PACK",(function(){return re.getBool("HAS_WEBGL")})),re.registerFlag("WEBGL_PACK_NORMALIZATION",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_PACK_CLIP",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_PACK_DEPTHWISECONV",(function(){return!1})),re.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_PACK_REDUCE",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_LAZILY_UNPACK",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_CONV_IM2COL",(function(){return re.getBool("WEBGL_PACK")})),re.registerFlag("WEBGL_MAX_TEXTURE_SIZE",(function(){return Xh(re.getNumber("WEBGL_VERSION"))})),re.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",(function(){return $h(re.getNumber("WEBGL_VERSION"))})),re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",(function(){var r=re.getNumber("WEBGL_VERSION");return r===0?0:Yh(r)})),re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",(function(){return re.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r})),re.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",(function(){return Qh(re.getNumber("WEBGL_VERSION"))})),re.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",(function(){return!re.getBool("WEBGL_FORCE_F16_TEXTURES")&&re.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")})),re.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",(function(){return Jh(re.getNumber("WEBGL_VERSION"))})),re.registerFlag("WEBGL_FENCE_API_ENABLED",(function(){return Zh(re.getNumber("WEBGL_VERSION"))})),re.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",(function(){return re.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0})),eu=ru;var He=D({complex_:function(r,t){var e=_(r,"real","complex"),n=_(t,"imag","complex");return xe(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),T.runKernelFunc((function(o){return o.complex(e,n)}),{$real:e,$imag:n})}}),vt=D({real_:function(r){var t=_(r,"input","real");return T.runKernelFunc((function(e){return e.real(t)}),{$input:t})}}),Nt=D({imag_:function(r){var t=_(r,"input","imag");return T.runKernelFunc((function(e){return e.imag(t)}),{$input:t})}});function qe(r,t,e){return fn(r,t,hn(r,e),e)}function fn(r,t,e,n){if(n==null&&(n=mr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Pt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Js(t);var o=Q(t),a=Q(e);E(o===a,(function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a}));for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==Q(t.slice(i));E(e[i]===t[i]||!u,(function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "}))}}return Pt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?Ys(r,n,M().getBool("DEBUG")):Yn(r,[],!0),T.makeTensor(r,t,n)}function j(r,t){if((Pt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Pt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return fn(r,[],[],t)}function Pe(r,t){er(r);var e=hn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return fn(r,null,e,t)}function an(r,t,e){if(er(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=hn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return fn(r,t,n,e)}function Ma(r,t,e){if(er(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=hn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return fn(r,t,n,e)}function Ze(r,t,e){if(er(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=hn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return fn(r,t,n,e)}function rf(r,t,e){if(er(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=hn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return fn(r,t,n,e)}function of(r,t,e){if(er(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=hn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return fn(r,t=t||n,n,e)}function af(r,t,e,n){return t===void 0&&(t=!0),T.makeVariable(r,t,e,n)}function tr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=tr(r,"float32"),n=Ce(r,"float32");return He(e,n)}var o=Qs(Q(r),t);return T.makeTensor(o,r,t)}function Ce(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ce(r,"float32"),n=Ce(r,"float32");return He(e,n)}var o=gr(Q(r),t);return T.makeTensor(o,r,t)}function Ot(r,t,e){return T.runKernelFunc((function(n){return n.fill(r,t,e)}),{})}function sf(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc((function(n){return n.linspace(r,t,e)}),{})}function $r(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return Ce([0],n);var o=gr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Pe(o,n)}var au=D({onesLike_:function(r){var t=_(r,"x","onesLike");if(t.dtype==="complex64"){var e=au(vt(t)),n=me(Nt(t));return He(e,n)}return T.runKernelFunc((function(o){return o.onesLike(t)}),{$x:t},(function(o,a){return{$x:function(){return me(o)}}}))}}),me=D({zerosLike_:function(r){var t=_(r,"x","zerosLike");return T.runKernelFunc((function(e){return e.zerosLike(t)}),{$x:t},(function(e,n){return{$x:function(){return me(e)}}}))}}),Oe=D({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,(function(){return"Pass at least one tensor to concat"}));var e=Xr(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach((function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")})),t=ze(t,e[0].shape)[0];var n=Jn(e.map((function(s){return s.shape})),t);if(Q(n)===0)return qe([],n);if((e=e.filter((function(s){return s.size>0}))).length===1)return e[0];var o=e.map((function(s){return s.shape}));nf(o,t);var a=e,i={axis:t};return T.runKernelFunc((function(s){return s.concat(e,t)}),a,(function(s){var u=o.map((function(c){return c[t]}));return Oa(s,u,t).map((function(c){return function(){return c}}))}),"Concat",i)}}),uf=D({concat1d_:function(r){return Oe(r,0)}}),cf=D({concat2d_:function(r,t){return Oe(r,t)}}),lf=D({concat3d_:function(r,t){return Oe(r,t)}}),hf=D({concat4d_:function(r,t){return Oe(r,t)}}),Oa=D({split_:function(r,t,e){e===void 0&&(e=0);var n,o=_(r,"x","split");return e=ze(e,o.shape)[0],typeof t=="number"?(E(o.shape[e]%t==0,(function(){return"Number of splits must evenly divide the axis."})),n=new Array(t).fill(o.shape[e]/t)):(E(o.shape[e]===t.reduce((function(a,i){return a+i})),(function(){return"The sum of sizes must match the size of the axis dimension."})),n=t),T.runKernelFunc((function(a){return a.split(o,n,e)}),{$x:o},(function(a){return{$x:function(){return Oe(a,e)}}}))}});function In(r,t){return r(t={exports:{}},t.exports),t.exports}var ff=In((function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var d=.02519603282416938*(u+=h.charCodeAt(f));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.alea=i})(0,r)})),df=In((function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xor128=i})(0,r)})),pf=In((function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xorwow=i})(0,r)})),vf=In((function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},(function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()})(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xorshift7=i})(0,r)})),mf=In((function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,d=u.i;return u.w=h=h+1640531527|0,l=f[d+34&127],c=f[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[d]=l^c,u.i=d,l+(h^h>>>16)|0},(function(c,l){var h,f,d,p,m,v=[],g=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(f^=l.charCodeAt((p+32)%l.length)),p===0&&(m=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,p>=0&&(m=m+1640531527|0,d=(h=v[127&p]^=f+m)==0?d+1:0);for(d>=128&&(v[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)f=v[d+34&127],h=v[d=d+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,v[d]=f^h;c.w=m,c.X=v,c.i=d})(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.xor4096=i})(0,r)})),gf=In((function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,d=u.d,p=u.a;return h=h<<25^h>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-d|0,u.d=d<<16^f>>>16^p,u.a=p-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}e&&e.exports?e.exports=i:this.tychei=i})(0,r)})),mn=In((function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,h=a-1;function f(g,x,b){var y=[],w=m((function k(I,R){var N,A=[],L=typeof I;if(R&&L=="object")for(N in I)try{A.push(k(I[N],R-1))}catch{}return A.length?A:L=="string"?I:I+"\0"})((x=x==1?{entropy:!0}:x||{}).entropy?[g,v(t)]:g??(function(){try{var k;return n&&(k=n.randomBytes)?k=k(a):(k=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(k)),v(k)}catch{var I=o.navigator,R=I&&I.plugins;return[+new Date,o,R,o.screen,v(t)]}})(),3),y),C=new d(y),S=function(){for(var k=C.g(i),I=u,R=0;k<c;)k=(k+R)*a,I*=a,R=C.g(1);for(;k>=l;)k/=2,I/=2,R>>>=1;return(k+R)/I};return S.int32=function(){return 0|C.g(4)},S.quick=function(){return C.g(4)/4294967296},S.double=S,m(v(C.S),t),(x.pass||b||function(k,I,R,N){return N&&(N.S&&p(N,C),k.state=function(){return p(C,{})}),R?(e[s]=k,I):k})(S,w,"global"in x?x.global:this==e,x.state)}function d(g){var x,b=g.length,y=this,w=0,C=y.i=y.j=0,S=y.S=[];for(b||(g=[b++]);w<a;)S[w]=w++;for(w=0;w<a;w++)S[w]=S[C=h&C+g[w%b]+(x=S[w])],S[C]=x;(y.g=function(k){for(var I,R=0,N=y.i,A=y.j,L=y.S;k--;)I=L[N=h&N+1],R=R*a+L[h&(L[N]=L[A=h&A+I])+(L[A]=I)];return y.i=N,y.j=A,R})(a)}function p(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function m(g,x){for(var b,y=g+"",w=0;w<y.length;)x[h&w]=h&(b^=19*x[h&w])+y.charCodeAt(w++);return v(x)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=f,m(e.random(),t),r.exports){r.exports=f;try{n=require("crypto")}catch{}}})([],Math)}));mn.alea=ff,mn.xor128=df,mn.xorwow=pf,mn.xorshift7=vf,mn.xor4096=mf,mn.tychei=gf;var po=mn.alea,Ba=(function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=po(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r})(),yf=(function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=po(a.toString()),this.randn=new Ba(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r})(),xf=(function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=po(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r})();function ae(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",Js(r),new lr(r,t,e)}function bf(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var iu=D({batchToSpaceND_:function(r,t,e){var n=_(r,"x","batchToSpaceND"),o=t.reduce((function(a,i){return a*i}));return E(n.rank>=1+t.length,(function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length})),E(e.length===t.length,(function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length})),E(n.shape[0]%o==0,(function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o})),T.runKernelFunc((function(a){return a.batchToSpaceND(n,t,e)}),{$x:n},(function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}}))}}),wf=D({broadcastTo_:function(r,t){var e=_(r,"broadcastTo","x"),n=e.shape;if(t.some((function(u){return!(u>0)||u%1!=0})))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map((function(u,c){return u>1?c:-1})).filter((function(u){return u>=0}));return s.length===0?e.clone():T.runKernelFunc((function(u){return u.tile(e,a)}),{input:e},(function(u){return{input:function(){return u.sum(s,!0)}}}))}}),Cf=D({cast_:function(r,t){var e=_(r,"x","cast");if(!dh(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return T.runKernelFunc((function(o){return o.cast(e,t)}),{x:e},(function(o){return{x:function(){return o.clone()}}}),"Cast",n)}}),_f=D({clone_:function(r){var t=_(r,"x","clone",null);return T.runKernelFunc((function(){return T.makeTensorFromDataId(t.dataId,t.shape,t.dtype)}),{$x:t},(function(e){return{$x:function(){return e.toFloat()}}}))}}),Ef=D({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=_(r,"x","cumsum"),a=Wt([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=zt(1,o.rank)[0],u=T.runKernelFunc((function(c){return c.cumsum(i,s,e,n)}),{permutedX:i},(function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}}));return a!=null&&(u=u.transpose(a)),u}}),If=D({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=_(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return E(o*t>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape})),E(a*t>=0,(function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape})),E(i%(t*t)==0,(function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape})),T.runKernelFunc((function(s){return s.depthToSpace(n,t,e)}),{$x:n})}}),pt=D({expandDims_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","expandDims",null);E(t<=e.rank,(function(){return"Axis must be <= rank of the tensor"}));var n=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,(function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"})),t=e.rank+t+1),n.splice(t,0,1),wt(e,n)}}),su=D({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=ae([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return Gn(pt(s,0),[e[0],1,1]);if(e.length===2)return Gn(pt(pt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Gn(pt(pt(pt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Rf=D({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=_(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=T.runKernelFunc((function(c){return c.multinomial(s,n,t,e)}),{logits2D:s});return i===1?u.as1D():u}}),ga=D({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=_(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),T.runKernelFunc((function(i){return i.oneHot(o,t,e,n)}),{$indices:o},(function(i){return{$indices:function(){return Ce(o.shape,"float32")}}})).reshape(a)}}),Rn=D({pad_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return T.runKernelFunc((function(a){return a.pad(n,t,e)}),{x:n},(function(a){var i=t.map((function(s){return s[0]}));return{x:function(){return a.slice(i,n.shape)}}}),"PadV2",o)}}),kf=D({pad1d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2,(function(){return"Invalid number of paddings. Must be length of 2."})),Rn(r,[t],e)}}),Sf=D({pad2d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Rn(r,t,e)}}),Df=D({pad3d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Rn(r,t,e)}}),Af=D({pad4d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,(function(){return"Invalid number of paddings. Must be length of 2 each."})),Rn(r,t,e)}}),Tf=D({rand_:function(r,t,e){var n=Q(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return T.makeTensor(o,r,e)}}),Nf=D({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Ba(t,e,n,!1,o),i=ae(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ff=D({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new yf(t,e,n,o),i=ae(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),uu=D({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=ae(r,n),i=new xf(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),wt=D({reshape_:function(r,t){var e=_(r,"x","reshape",null);t=hh(t,e.size),E(e.size===Q(t),(function(){return"new shape and old shape must have the same number of elements."}));var n={shape:t};return T.runKernelFunc((function(o){return o.reshape(e,t)}),{x:e},(function(o){return{x:function(){return o.reshape(e.shape)}}}),"Reshape",n)}}),cu=D({spaceToBatchND_:function(r,t,e){var n=_(r,"x","spaceToBatchND");return E(n.rank>=1+t.length,(function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length})),E(e.length===t.length,(function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length})),E(n.shape.reduce((function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o}),!0),(function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()})),T.runKernelFunc((function(o){return o.spaceToBatchND(n,t,e)}),{$x:n},(function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}}))}}),lu=D({squeeze_:function(r,t){var e=_(r,"x","squeeze");return wt(e,yn(e.shape,t).newShape)}}),ft=D({stack_:function(r,t){t===void 0&&(t=0);var e=Xr(r,"tensors","stack");if(E(e.length>=1,(function(){return"Pass at least one tensor to tf.stack"})),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;E(t<=n,(function(){return"Axis must be <= rank of the tensor"})),e.forEach((function(s){xe(o,s.shape,"All tensors passed to stack must have matching shapes")})),e.forEach((function(s){E(a===s.dtype,(function(){return"All tensors passed to stack must have matching dtypes"}))}));var i=e.map((function(s){return s.expandDims(t)}));return Oe(i,t)}}),Gn=D({tile_:function(r,t){var e=_(r,"x","tile",null);E(e.rank===t.length,(function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."}));var n=[e],o={reps:t};return T.runKernelFunc((function(a,i){var s=a.tile(e,t);return i([e]),s}),{x:e},(function(a,i){var s=i[0];return{x:function(){var u=me(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var h=0;h<t[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(h=0;h<t[2];++h)for(var f=0;f<t[3];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}}),"Tile",o,n)}}),Pf=D({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Ba(t,e,n,!0,o),i=ae(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Be=D({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=_(r,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,(function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"})),t<0&&(t+=e.shape.length);var n={axis:t};return T.runKernelFunc((function(o){return o.unstack(e,t)}),{x:e},(function(o){return{x:function(){return ft(o,t)}}}),"Unpack",n)}}),Mf=function(r,t){return $(this,void 0,void 0,(function(){var e,n,o,a,i,s,u,c,l,h;return Y(this,(function(f){switch(f.label){case 0:return e=_(r,"x","setdiff1d"),n=_(t,"y","setdiff1d"),E(e.dtype===n.dtype,(function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."})),E(e.rank===1,(function(){return"x should be 1D tensor, but got x ("+e.shape+")."})),E(n.rank===1,(function(){return"y should be 1D tensor, but got y ("+n.shape+")."})),[4,e.data()];case 1:return o=f.sent(),[4,n.data()];case 2:for(a=f.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new lr([s],e.dtype),c=new lr([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}}))}))};function Yr(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function Qr(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function Jr(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function hu(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function fu(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function du(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Mt(r.shape).map((function(l){return l/u})).concat([1]).slice(0,n);return[s,o,u,c]}var pu=30;function Go(r){return r<=pu?r:ha(r,Math.floor(Math.sqrt(r)))}function Of(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Bf(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Of(e,t,r)}function Zr(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Q(t.shape)/u,sliceSize:i,strides:Mt(e.slice(0,o)).concat([1]),outputSize:Q(e)}}function Lf(r,t,e){E(r.rank===t.length,(function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."})),E(r.rank===e.length,(function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."}));for(var n=function(a){E(t[a]+e[a]<=r.shape[a],(function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"}))},o=0;o<r.rank;++o)n(o)}function Ki(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function La(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function Wf(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=ua(0,a,s-1)}function zf(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?ua(0,a,s):ua(-1,a,s-1)}function vu(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function mu(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function Vf(r,t){E(la(r),(function(){return"The f passed in variableGrads(f) must be a function"})),E(t==null||Array.isArray(t)&&t.every((function(l){return l instanceof Qn})),(function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"}));var e=t!=null;if(!e)for(var n in t=[],T.registeredVariables)t.push(T.registeredVariables[n]);var o=e?t.filter((function(l){return!l.trainable})):null,a=t.length;E((t=t.filter((function(l){return l.trainable}))).length>0,(function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."}));var i=T.gradients(r,t,null,!0),s=i.value,u=i.grads;E(u.some((function(l){return l!=null})),(function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."})),E(s.rank===0,(function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"}));var c={};return t.forEach((function(l,h){u[h]!=null&&(c[l.name]=u[h])})),o!=null&&o.forEach((function(l){return c[l.name]=null})),{value:s,grads:c}}function vo(r){return T.customGrad(r)}var $t=D({softmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return T.runKernelFunc((function(n,o){var a=n.softmax(e,t);return o([a]),a}),{logits:e},(function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}}),"Softmax",{dim:t},[],[!0])}}),Uf=D({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return vo((function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}}))(e)}}),gu=(function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r})(),yu=(function(){function r(){}return r.prototype.time=function(t){return F("time")},r.prototype.read=function(t){return F("read")},r.prototype.readSync=function(t){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(t){return F("disposeData")},r.prototype.write=function(t,e,n){return F("write")},r.prototype.move=function(t,e,n,o){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return F("slice")},r.prototype.stridedSlice=function(t,e,n,o){return F("stridedSlice")},r.prototype.unstack=function(t,e){return F("unstack")},r.prototype.reverse=function(t,e){return F("reverse")},r.prototype.concat=function(t,e){return F("concat")},r.prototype.neg=function(t){return F("neg")},r.prototype.add=function(t,e){return F("add")},r.prototype.addN=function(t){return F("addN")},r.prototype.subtract=function(t,e){return F("subtract")},r.prototype.multiply=function(t,e){return F("multiply")},r.prototype.realDivide=function(t,e){return F("realDivide")},r.prototype.floorDiv=function(t,e){return F("floorDiv")},r.prototype.sum=function(t,e){return F("sum")},r.prototype.prod=function(t,e){return F("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return F("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return F("argMin")},r.prototype.argMax=function(t,e){return F("argMax")},r.prototype.equal=function(t,e){return F("equal")},r.prototype.notEqual=function(t,e){return F("notEqual")},r.prototype.less=function(t,e){return F("less")},r.prototype.lessEqual=function(t,e){return F("lessEqual")},r.prototype.greater=function(t,e){return F("greater")},r.prototype.greaterEqual=function(t,e){return F("greaterEqual")},r.prototype.logicalNot=function(t){return F("logicalNot")},r.prototype.logicalAnd=function(t,e){return F("logicalAnd")},r.prototype.logicalOr=function(t,e){return F("logicalOr")},r.prototype.where=function(t){return F("where")},r.prototype.select=function(t,e,n){return F("select")},r.prototype.topk=function(t,e,n){return F("topk")},r.prototype.min=function(t,e){return F("min")},r.prototype.minimum=function(t,e){return F("minimum")},r.prototype.mod=function(t,e){return F("mod")},r.prototype.max=function(t,e){return F("max")},r.prototype.maximum=function(t,e){return F("maximum")},r.prototype.all=function(t,e){return F("all")},r.prototype.any=function(t,e){return F("any")},r.prototype.squaredDifference=function(t,e){return F("squaredDifference")},r.prototype.ceil=function(t){return F("ceil")},r.prototype.floor=function(t){return F("floor")},r.prototype.round=function(t){return F("round")},r.prototype.sign=function(t){return F("sign")},r.prototype.isNaN=function(t){return F("isNaN")},r.prototype.isInf=function(t){return F("isInf")},r.prototype.isFinite=function(t){return F("isFinite")},r.prototype.pow=function(t,e){return F("pow")},r.prototype.exp=function(t){return F("exp")},r.prototype.expm1=function(t){return F("expm1")},r.prototype.softmax=function(t,e){return F("softmax")},r.prototype.log=function(t){return F("log")},r.prototype.log1p=function(t){return F("log1p")},r.prototype.sqrt=function(t){return F("sqrt")},r.prototype.rsqrt=function(t){return F("rsqrt")},r.prototype.square=function(t){return F("square")},r.prototype.reciprocal=function(t){return F("reciprocal")},r.prototype.relu=function(t){return F("relu")},r.prototype.relu6=function(t){return F("relu6")},r.prototype.prelu=function(t,e){return F("prelu")},r.prototype.elu=function(t){return F("elu")},r.prototype.eluDer=function(t,e){return F("eluDer")},r.prototype.selu=function(t){return F("selu")},r.prototype.int=function(t){return F("int")},r.prototype.clip=function(t,e,n){return F("clip")},r.prototype.abs=function(t){return F("abs")},r.prototype.complexAbs=function(t){return F("complexAbs")},r.prototype.sigmoid=function(t){return F("sigmoid")},r.prototype.softplus=function(t){return F("softplus")},r.prototype.sin=function(t){return F("sin")},r.prototype.cos=function(t){return F("cos")},r.prototype.tan=function(t){return F("tan")},r.prototype.asin=function(t){return F("asin")},r.prototype.acos=function(t){return F("acos")},r.prototype.atan=function(t){return F("atan")},r.prototype.atan2=function(t,e){return F("atan2")},r.prototype.sinh=function(t){return F("sinh")},r.prototype.cosh=function(t){return F("cosh")},r.prototype.tanh=function(t){return F("tanh")},r.prototype.asinh=function(t){return F("asinh")},r.prototype.acosh=function(t){return F("acosh")},r.prototype.atanh=function(t){return F("atanh")},r.prototype.erf=function(t){return F("erf")},r.prototype.step=function(t,e){return F("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return F("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return F("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return F("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return F("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return F("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return F("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return F("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return F("reshape")},r.prototype.cast=function(t,e){return F("cast")},r.prototype.tile=function(t,e){return F("tile")},r.prototype.pad=function(t,e,n){return F("pad")},r.prototype.transpose=function(t,e){return F("transpose")},r.prototype.gather=function(t,e,n){return F("gather")},r.prototype.gatherND=function(t,e){return F("gatherND")},r.prototype.scatterND=function(t,e,n){return F("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return F("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return F("multinomial")},r.prototype.oneHot=function(t,e,n,o){return F("oneHot")},r.prototype.cumsum=function(t,e,n,o){return F("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return F("nonMaxSuppression")},r.prototype.fft=function(t){return F("fft")},r.prototype.ifft=function(t){return F("ifft")},r.prototype.complex=function(t,e){return F("complex")},r.prototype.real=function(t){return F("real")},r.prototype.imag=function(t){return F("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return F("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return F("depthToSpace")},r.prototype.split=function(t,e,n){return F("split")},r.prototype.sparseToDense=function(t,e,n,o){return F("sparseToDense")},r.prototype.diag=function(t){return F("diag")},r.prototype.fill=function(t,e,n){return F("fill")},r.prototype.onesLike=function(t){return F("onesLike")},r.prototype.zerosLike=function(t){return F("zerosLike")},r.prototype.linspace=function(t,e,n){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r})();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function rn(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Le(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function he(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function fr(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=no(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return kn(r,s,e,n,o,a,!1,i)}function eo(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=ya(t),l=c[0],h=c[1],f=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return to(r,s,e,n,o,!1,u,a)}function kn(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var d,p=t[0],m=t[1],v=t[3],g=no(e),x=g[0],b=g[1],y=no(n),w=y[0],C=y[1],S=Hn(p,w),k=Hn(m,C),I=(function(O,B,V,z,W,G,H,q){var te,ne,se;if(typeof O=="number"){te={top:O,bottom:O,left:O,right:O,type:O===0?"VALID":"NUMBER"};var ue=(function(de,be,ge,Se,_e){Se==null&&(Se=xu(de,be,ge));var Ee=de[0],It=de[1],Rt=sr((Ee-be+2*Se)/ge+1,_e);E(Ne(Rt),(function(){return"The output # of rows ("+Rt+") must be an integer. Change the stride and/or zero pad parameters"}));var ot=sr((It-be+2*Se)/ge+1,_e);return E(Ne(ot),(function(){return"The output # of columns ("+ot+") must be an integer. Change the stride and/or zero pad parameters"})),[Rt,ot]})([B,V],G,z,O,q);ne=ue[0],se=ue[1]}else if(O==="same"){ne=Math.ceil(B/z),se=Math.ceil(V/W);var le=Math.max(0,(ne-1)*z+G-B),pe=Math.max(0,(se-1)*W+H-V),fe=Math.floor(le/2),ve=le-fe,Te=Math.floor(pe/2);te={top:fe,bottom:ve,left:Te,right:pe-Te,type:"SAME"}}else{if(O!=="valid")throw Error("Unknown padding parameter: "+O);te={top:0,bottom:0,left:0,right:0,type:"VALID"},ne=Math.ceil((B-G+1)/z),se=Math.ceil((V-H+1)/W)}return{padInfo:te,outHeight:ne,outWidth:se}})(o,l,h,x,b,S,k,a),R=I.padInfo,N=I.outHeight,A=I.outWidth,L=i?v*f:v;return s==="channelsFirst"?d=[c,L,N,A]:s==="channelsLast"&&(d=[c,N,A,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:N,outWidth:A,outChannels:L,padInfo:R,strideHeight:x,strideWidth:b,filterHeight:p,filterWidth:m,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:t}}function to(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],d=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],d=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],d=r[1],l=r[2],h=r[3],f=r[4]}var p,m=t[0],v=t[1],g=t[2],x=t[4],b=ya(e),y=b[0],w=b[1],C=b[2],S=ya(n),k=S[0],I=S[1],R=S[2],N=Hn(m,k),A=Hn(v,I),L=Hn(g,R),O=(function(H,q,te,ne,se,ue,le,pe,fe,ve,Te){var de,be,ge,Se;if(typeof H=="number"){de={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var _e=(function(Tn,Ht,Do,Nn,kt,Ao){kt==null&&(kt=xu(Tn,Ht,Nn));var ul=Tn[0],cl=Tn[1],ll=Tn[2],To=sr((ul-Ht+2*kt)/Nn+1,Ao);E(Ne(To),(function(){return"The output # of depths ("+To+") must be an integer. Change the stride and/or zero pad parameters"}));var No=sr((cl-Ht+2*kt)/Nn+1,Ao);E(Ne(No),(function(){return"The output # of rows ("+No+") must be an integer. Change the stride and/or zero pad parameters"}));var Fo=sr((ll-Ht+2*kt)/Nn+1,Ao);return E(Ne(Fo),(function(){return"The output # of columns ("+Fo+") must be an integer. Change the stride and/or zero pad parameters"})),[To,No,Fo,Do]})([q,te,ne,1],pe,1,se,H,Te);be=_e[0],ge=_e[1],Se=_e[2]}else if(H==="same"){be=Math.ceil(q/se),ge=Math.ceil(te/ue),Se=Math.ceil(ne/le);var Ee=(be-1)*se+pe-q,It=(ge-1)*ue+fe-te,Rt=(Se-1)*le+ve-ne,ot=Math.floor(Ee/2),An=Ee-ot,Ut=Math.floor(It/2),en=It-Ut,Gt=Math.floor(Rt/2);de={top:Ut,bottom:en,left:Gt,right:Rt-Gt,front:ot,back:An,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);de={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},be=Math.ceil((q-pe+1)/se),ge=Math.ceil((te-fe+1)/ue),Se=Math.ceil((ne-ve+1)/le)}return{padInfo:de,outDepth:be,outHeight:ge,outWidth:Se}})(o,l,h,f,y,w,C,N,A,L,s),B=O.padInfo,V=O.outDepth,z=O.outHeight,W=O.outWidth,G=a?x*d:x;return i==="channelsFirst"?p=[c,G,V,z,W]:i==="channelsLast"&&(p=[c,V,z,W,G]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:d,outDepth:V,outHeight:z,outWidth:W,outChannels:G,padInfo:B,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:N,effectiveFilterHeight:A,effectiveFilterWidth:L,dilationDepth:k,dilationHeight:I,dilationWidth:R,inShape:r,outShape:p,filterShape:t}}function xu(r,t,e,n){n===void 0&&(n=1);var o=Hn(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function no(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function ya(r){return typeof r=="number"?[r,r,r]:r}function Hn(r,t){return t<=1?r:r+(r-1)*(t-1)}function sr(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function Zn(r){var t=no(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function rt(r,t){return Zn(r)||Zn(t)}function Wa(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function bu(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ce(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!ph(r.dtype,t))return T.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=j(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function xa(r,t){return T.makeTensorFromDataId(r.dataId,t,r.dtype)}function wu(r,t,e){var n=(t-r)/(e-1),o=gr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Pe(o,"float32")}function ba(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Xi(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Gf(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function Hf(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function jf(r,t,e){var n=(function(a,i,s){return(function(u,c,l){for(var h=0,f=u.length,d=0,p=!1;h<f;){var m=l(c,u[d=h+(f-h>>>1)]);m>0?h=d+1:(f=d,p=!m)}return p?h:-h-1})(a,i,s||qf)})(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function qf(r,t){return r>t?1:r<t?-1:0}function za(r,t,e,n,o){return Cu(r,t,e,n,o,0).selectedIndices}function Va(r,t,e,n,o,a){var i=Cu(r,t,e,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Cu(r,t,e,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map((function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}})).filter((function(y){return y.score>o})).sort($i),c=a>0?-.5/a:0,l=[],h=[];l.length<e&&u.length>0;){var f=u.pop(),d=f.score,p=f.boxIndex,m=f.suppressBeginIndex;if(d<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var x=Kf(r,p,l[g]);if(x>=n){v=!0;break}if(f.score=f.score*Xf(n,c,x),f.score<=o)break}f.suppressBeginIndex=l.length,v||(f.score===d?(l.push(p),h.push(f.score)):f.score>o&&jf(u,f,$i))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Pe(l,"int32"),selectedScores:Pe(h,"float32"),numValidOutputs:j(b,"int32")}}function Kf(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),d=(s-a)*(u-i),p=(h-c)*(f-l);if(d<=0||p<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,h),x=Math.min(u,f),b=Math.max(g-m,0)*Math.max(x-v,0);return b/(d+p-b)}function Xf(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function $i(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function _u(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map((function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i}))}function Eu(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=ae(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function Iu(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=cr(e,s*n),l=cr("int32",s*n),h=0;h<s;h++){for(var f=h*u,d=r.subarray(f,f+u),p=[],m=0;m<d.length;m++)p.push({value:d[m],index:m});p.sort((function(y,w){return w.value-y.value}));var v=h*n,g=c.subarray(v,v+n),x=l.subarray(v,v+n);for(m=0;m<n;m++)g[m]=p[m].value,x[m]=p[m].index}var b=t.slice();return b[b.length-1]=n,[qe(c,b,e),qe(l,b,"int32")]}function Ua(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=ae(r,"int32"),a=ae([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var $f=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map((function(o,a){return"T"+a}));var e=[];this.variableNames.forEach((function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")}));var n=this.variableNames.map((function(o){return"v"+o})).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Yf=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map((function(o,a){return"T"+a}));var e=[];this.variableNames.forEach((function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")}));var n=this.variableNames.map((function(o){return"v"+o})).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Qf=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Ru(r,t){return["x","y","z","w","u","v"].slice(0,t).map((function(e){return r+"."+e}))}function et(r,t){return t===1?[r]:Ru(r,t)}function $e(){var r,t,e,n,o,a,i,s,u,c;return M().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function bn(r,t,e){e===void 0&&(e="index");var n=Mt(t);return n.map((function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"})).join("")}function Ga(r){var t=Mt(r).map((function(e){return e.toString()}));return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var ku=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Jf(r,t,e,n){var o=[];r.forEach((function(d){var p=Q(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))}));var a,i,s=o.join(`
`),u=r.map((function(d){return(function(p,m,v){v===void 0&&(v=!1);var g="";g+=v?Su(p):Bn(p);var x=p.shapeInfo.logicalShape,b=m.logicalShape;return x.length<=b.length&&(g+=v?(function(y,w){var C,S=y.name,k=S.charAt(0).toUpperCase()+S.slice(1),I="get"+k+"AtOutCoords",R=y.shapeInfo.logicalShape.length,N=w.logicalShape.length,A=rn(y.shapeInfo.logicalShape,w.logicalShape),L=we(N),O=N-R,B=["x","y","z","w","u","v"];C=R===0?"":N<2&&A.length>=1?"coords = 0;":A.map((function(te){return"coords."+B[te+O]+" = 0;"})).join(`
`);var V="";V=N<2&&R>0?"coords":y.shapeInfo.logicalShape.map((function(te,ne){return"coords."+B[ne+O]})).join(", ");var z="return outputValue;",W=Q(y.shapeInfo.logicalShape)===1,G=Q(w.logicalShape)===1;if(R!==1||W||G){if(W&&!G)z=N===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var H=R-2,q=R-1;A.indexOf(H)>-1&&A.indexOf(q)>-1?z="return vec4(outputValue.x);":A.indexOf(H)>-1?z="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(q)>-1&&(z="return vec4(outputValue.xx, outputValue.zz);")}}else z=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+L+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+k+"("+V+`);
      `+z+`
    }
  `})(p,m):(function(y,w){var C=y.name,S=C.charAt(0).toUpperCase()+C.slice(1),k="get"+S+"AtOutCoords",I=w.texShape,R=y.shapeInfo.texShape,N=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&N===A&&y.shapeInfo.flatOffset==null&&Ue(R,I))return`
      float `+k+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var L,O=we(A),B=rn(y.shapeInfo.logicalShape,w.logicalShape),V=A-N,z=["x","y","z","w","u","v"];L=N===0?"":A<2&&B.length>=1?"coords = 0;":B.map((function(G){return"coords."+z[G+V]+" = 0;"})).join(`
`);var W="";return W=A<2&&N>0?"coords":y.shapeInfo.logicalShape.map((function(G,H){return"coords."+z[H+V]})).join(", "),`
    float `+k+`() {
      `+O+` coords = getOutputCoords();
      `+L+`
      return get`+S+"("+W+`);
    }
  `})(p,m)),g})(d,t,n)})).join(`
`),c=t.texShape,l=$e(),h=(function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `})(l),f=(function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Zf+`
    `+ed+`
    `+td+`
  `})(l);return t.isPacked?(a=(function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return(function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `})(0,p);case 2:return(function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Ue(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `})(d,p);case 3:return m=d,v=p,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],x=Math.ceil(m[2]/2),b=x*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return(function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],S=Math.ceil(y[y.length-1]/2),k=S*Math.ceil(y[y.length-2]/2),I=k,R="",N="b, r, c",A=2;A<y.length-1;A++)I*=y[y.length-A-1],R=`
      int b`+A+" = index / "+I+`;
      index -= b`+A+" * "+I+`;
    `+R,N="b"+A+", "+N;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+N+`);
    }
  `})(d,p)}var m,v,g,x,b})(t.logicalShape,c),i=(function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `})(l)):(a=(function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return(function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `})(0,p);case 2:return(function(g,x){return Ue(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `})(d,p);case 3:return m=p,v=bn(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return(function(g,x){var b=bn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `})(d,p);case 5:return(function(g,x){var b=bn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `})(d,p);case 6:return(function(g,x){var b=bn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `})(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var m,v})(t.logicalShape,c),i=(function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `})(l)),n&&(f+=nd),[f,h,i,s,a,u,e].join(`
`)}function Bn(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return(function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],h=pn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `})(r);case 1:return(function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Fn(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=pn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `})(r);case 2:return(function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Ue(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=yn(n),l=c.newShape,h=c.keptDims,f=l;if(f.length<n.length){var d=Ln(e,f);return`
      `+Bn(d)+`
      float `+a+`(int row, int col) {
        return `+a+"("+Wn(["row","col"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Fn(e)+`
      }
    `;var p=i[0],m=i[1],v=pn(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+p+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`})(r);case 3:return(function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=yn(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var f=Ln(e,h);return`
        `+Bn(f)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+Wn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Fn(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],m=d[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=pn(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `})(r);case 4:return(function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=yn(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var f=Ln(e,l);return`
      `+Bn(f)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+Wn(["row","col","depth","depth2"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Fn(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,m=p[0],v=p[1];if(v===u&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=pn(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `})(r);case 5:return(function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=yn(n),h=l.newShape,f=l.keptDims;if(h.length<n.length){var d=Ln(e,h);return`
      `+Bn(d)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+Wn(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Fn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=pn(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `})(r);case 6:return(function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=yn(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=Ln(e,s);return`
      `+Bn(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+Wn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,f=n[3]*h,d=n[2]*f,p=n[1]*d;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Fn(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],x=v[1];if(x===p&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+f+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=pn(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `})(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function Su(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=$e(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return(function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=$e();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `})(r);case 2:return(function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=$e();if(u!=null&&Ue(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `})(r);case 3:return(function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=Ln(o,l);return`
        `+Su(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Wn(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],d=c[1],p=Math.ceil(a[2]/2),m=p*Math.ceil(a[1]/2),v=$e();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+d+", "+m+", "+p+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `})(r);default:return(function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],d=Math.ceil(a[i-1]/2),p=d*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,p*=a[i-g-1],v="b"+g+" * "+p+" + "+v;var x=$e();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `})(r)}}var Zf=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ed=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,td=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,nd=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function pn(r){return"offset"+r}function Fn(r){var t=r.name,e=Q(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function we(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Ln(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Wn(r,t){return t.map((function(e){return r[e]})).join(", ")}var rd=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,(function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."}));var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=we(c),h=et("coords",c);if(a===1){var f=we(s=c+1);i=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],m=d.map((function(k){return"int "+k})),v=et("sourceLocR",s-1).concat("inIdx.r"),g=et("sourceLocG",s-1).concat("inIdx.g"),x=et("sourceLocB",s-1).concat("inIdx.b"),b=et("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=n?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},od=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},ad=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=h-1-r.padInfo.top,m=f-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},id=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],he(r,t),he(r,e);var i="0.0";n!=null&&(he(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(he(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},sd=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],he(r,t),he(r,e);var i="vec4(0.0)";n!=null&&(he(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(he(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},ud="return areal * breal - aimag * bimag;",cd="return areal * bimag + aimag * breal;",Yi=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=he(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ho="return a + b;",jo="return a - b;",Qi="return a * b;",Du="return (a < 0.) ? b * a : a;",De=function(r,t,e){this.variableNames=["A","B"],this.outputShape=he(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},Au=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,qt=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=he(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||Q(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+we(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=et("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},ld=(function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r})(),hd=(function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r})(),fd=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},dd=function(r){this.outputShape=[],this.outputShape=Jn(r,1),this.variableNames=r.map((function(s,u){return"T"+u}));var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},pd=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Jn(r,t);var e=this.outputShape,n=e.length,o=we(n),a=et("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map((function(v,g){return"T"+g}));var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Ar(i,c,d)+`),
            vec2(`+Ar(l,c,d)+`));
        }`}var p=s.length,m=s[s.length-1];f+=`
        return getChannel(
          getT`+p+"("+Ar(i,c,m)+`),
          vec2(`+Ar(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map((function(v){return"int "+v}))+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function Ar(r,t,e){var n=r.indexOf(t);return r.map((function(o,a){return a===n?o+" - "+e:o})).join()}var vd=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},md=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},gd=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},yd=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},xd=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},bd=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ji=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",m=p?1:2,v=p?2:3,g=p?3:1,x="",b="";e&&(x=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},wd=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Zi=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,m="",v="";e&&(m=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},es=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=d,m="int xR; int xC; int xCOffset;",v=0;v<f;v++)for(var g=0;g<d;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<f;v++)for(var x=0;x<p;x++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*x)*h+`;
        `,c===1){if(g<d&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<d)){var b=s%2==0?Xs(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<d&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<d&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<d&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<d&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<d&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<f;v++)for(g=0;g<d;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",w="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},Cd=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],h=e[1];this.outputShape=[c,l,h,u];var f=n==="bilinear"?1:0,d=[i-1+".0",s-1+".0"],p=d[0],m=d[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=v[0],x=v[1],b=v[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=y[0],C=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},_d=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+we(n)+` coords = getOutputCoords();
        int end = `+ts(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+ts(n,"coords")+` = idx;
          val += getX(`+(function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")})(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function ts(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var Ed=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=hr.DENSE;var t=ir(r),e=$e();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+bn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Id=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=hr.DENSE;var t=ir(r),e=$e();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+bn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Rd=(function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r})(),kd=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Sd=function(r){this.variableNames=["A"],this.outTexUsage=ut.DOWNLOAD;var t=$e();this.outputShape=r,this.userCode=`
      `+ku+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Dd=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ut.DOWNLOAD;var t=$e();this.outputShape=r,this.userCode=`
      `+ku+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Ad=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=$e(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Ga(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Td=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=$e(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Ga(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},Nd="return real * expR - imag * expI;",Fd="return real * expI + imag * expR;",ns=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Pd=(function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r})(),Md=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=we(this.rank),a=(function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()})(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Od=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=we(t.length),o=we(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Bd(r,t){var e=$e();return Th(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Ld(r,t){return Oh(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Wd(r,t){return Bh(r,t,new Uint16Array([0,1,2,2,1,3]))}function xr(r,t,e,n,o,a,i){Wh(e,n);var s=Lh(r,t),u=r.TEXTURE_2D;return J(r,t,(function(){return r.bindTexture(u,s)})),J(r,t,(function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)})),J(r,t,(function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)})),J(r,t,(function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)})),J(r,t,(function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)})),J(r,t,(function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)})),J(r,t,(function(){return r.bindTexture(r.TEXTURE_2D,null)})),s}function zd(r,t,e,n,o){var a=fo(e,n);return xr(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Vd(r,t,e,n,o){var a=fo(e,n);return xr(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Ud(r,t,e,n,o){var a=fo(e,n);return xr(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Gd(r,t,e,n,o){var a=yr(e,n);return xr(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Hd(r,t,e,n,o){var a=yr(e,n);return xr(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function jd(r,t,e,n){return J(r,t,(function(){return r.bindBuffer(r.ARRAY_BUFFER,n)})),Gi(r,t,e,"clipSpacePos",n,3,20,0)&&Gi(r,t,e,"uv",n,2,20,12)}function qd(r,t,e,n,o,a,i){var s,u,c;J(r,t,(function(){return r.bindTexture(r.TEXTURE_2D,e)})),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),J(r,t,(function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)})),J(r,t,(function(){return r.bindTexture(r.TEXTURE_2D,null)}))}function Kd(r,t,e,n){J(r,t,(function(){return r.bindTexture(r.TEXTURE_2D,e)})),n.data instanceof Uint8Array?J(r,t,(function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)})):J(r,t,(function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)})),J(r,t,(function(){return r.bindTexture(r.TEXTURE_2D,null)}))}function Xd(r,t,e,n,o){var a=r.createBuffer();J(r,t,(function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)}));var i=16*e*n;return J(r,t,(function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)})),J(r,t,(function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)})),J(r,t,(function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)})),a}function $d(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Yd(r,t,e,n,o){var a=fo(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return J(r,t,(function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)})),new Float32Array(u.buffer)}function Qd(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array((function(l,h){var f=yr(l,h);return f[0]*f[1]*4})(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Jd(r,t,e,n){var o=new Float32Array(e*n*4);return J(r,t,(function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)})),o}var Zd=(function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=M().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Rh(e,t)):this.gl=Lt(e);var n="WEBGL_color_buffer_float";if(M().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Rr(this.gl,this.debug,"OES_texture_float"),mt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Rr(this.gl,this.debug,"OES_texture_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),mt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Rr(this.gl,this.debug,"EXT_color_buffer_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",mt(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!mt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Ld(this.gl,this.debug),this.indexBuffer=Wd(this.gl,this.debug),this.framebuffer=zh(this.gl,this.debug),this.textureConfig=Fa(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return M().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;J(e,this.debug,(function(){return e.finish()})),J(e,this.debug,(function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)})),J(e,this.debug,(function(){return e.deleteFramebuffer(t.framebuffer)})),J(e,this.debug,(function(){return e.bindBuffer(e.ARRAY_BUFFER,null)})),J(e,this.debug,(function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)})),J(e,this.debug,(function(){return e.deleteBuffer(t.indexBuffer)})),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),zd(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Vd(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Ud(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),Kd(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),qd(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Hd(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Gd(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Hi(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,(function(){return e.gl.deleteTexture(t)}))},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,(function(){return Yd(o.gl,o.debug,e,n,o.textureConfig)}))},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return Qd(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return $d(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=Xd(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(M().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,(function(){return Jd(o.gl,o.debug,e,n)}))},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Nh(e,this.debug,t),o=Bd(e,this.debug),a=Ph(e,this.debug);return J(e,this.debug,(function(){return e.attachShader(a,o)})),J(e,this.debug,(function(){return e.attachShader(a,n)})),Mh(e,this.debug,a),this.debug&&zo(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=jd(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&J(this.gl,this.debug,(function(){return e.gl.deleteProgram(t)}))},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&zo(this.gl,this.debug,this.program),J(this.gl,this.debug,(function(){return e.gl.useProgram(t)}))},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Uh(this.gl,this.debug,t,e):Gh(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,(function(){return n.gl.getAttribLocation(t,e)}))},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Hh(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=yr(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&zo(this.gl,this.debug,this.program),kr(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),J(t,this.debug,(function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}))},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),J(this.gl,this.debug,(function(){return t.gl.finish()}))},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Rr(this.gl,this.debug,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return $(this,void 0,void 0,(function(){var e=this;return Y(this,(function(n){switch(n.label){case 0:return[4,Bi((function(){return e.disposed||e.isQueryAvailable(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}))];case 1:return n.sent(),[2,this.getQueryTime(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}}))}))},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise((function(n){e.addItemToPoll((function(){return t.isFencePassed()}),(function(){return n()}))}))},r.prototype.pollItems=function(){for(var t=(function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1})(this.itemsToPoll.map((function(n){return n.isDoneFn}))),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Bi((function(){return n.pollItems(),n.itemsToPoll.length===0}))},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Vo(this.gl,this.debug,t,this.framebuffer),this.debug&&kr(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Vo(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&kr(this.gl)):Hi(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;Vo(o,this.debug,t,this.framebuffer),this.debug&&kr(o),this.outputTexture=t,J(o,this.debug,(function(){return o.viewport(0,0,e,n)})),J(o,this.debug,(function(){return o.scissor(0,0,e,n)}))},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),J(this.gl,this.debug,(function(){return a.gl.scissor(t,e,n,o)}))},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r})();function rs(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach((function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Ue(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Ue(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}}))}var ep=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,h=e.dataFormat,f=s.left,d=s.top,p=o*n,m=$e(),v=h==="channelsLast",g=v?0:1,x=v?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+m.output+` = result;
      }
    `},tp=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},np=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},rp=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},op=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ap=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},qo=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";a&&(d=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,p="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+p+`

        setOutput(result);
      }
    `},ip=(function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r})(),sp=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},up=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=et("rc",t),n=we(t),o=(function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l})(t,r,e),a=(function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `})(t,r[r.length-1],r[r.length-2],e),i=(function(s,u){var c=s.length,l=(function(h,f){for(var d=[],p=0;p<=1;p++)for(var m=0;m<=1;m++){for(var v=(p===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<h;g++)v=f[f.length-1-g]+","+v;d.push(v)}return d})(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"})(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},cp=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map((function(u,c){return u[0]+r[c]+u[1]}));var n=r.length,o=we(n),a=t.map((function(u){return u[0]})).join(","),i=t.map((function(u,c){return u[0]+r[c]})).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},lp=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((function(v,g){return v[0]+r[g]+v[1]}));for(var n=r.length,o=we(n),a=t.map((function(v){return v[0]})).join(","),i=t.map((function(v,g){return v[0]+r[g]})).join(","),s=et("rc",n),u=et("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,m=n===1?2:4;p<m;p++)d+=`
        `+h[p]+`
        if (`+f+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},Ko=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=t==="avg",d="0.0";if(f||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var m=4*Math.floor(n/4),v=n%4,g=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},Xo=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var b=4*Math.floor(n/4),y=n%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},hp=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,h=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";t==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},fp=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+bn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Ga(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},dp=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},pp=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},vp=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},mp=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,m=2*Math.ceil(d)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},gp=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},yp=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map((function(a,i){return(function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"})(i)})).join(","),o=we(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},xp=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=et("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=we(e);function s(u){var c=r.map((function(l,h){return(function(f,d){return t.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+d[f]+" - 1":""+d[f]})(h,u)}));return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+(function(u){return s(u)})(n.slice())+`;
          if(`+o+`){
            result.g = `+(function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)})(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+(function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)})(n.slice())+`;
            if(`+o+`) {
              result.a = `+(function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)})(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},os=function(r,t,e,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=we(o.length),u=we(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var f="getUpdates("+h+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},bp=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},wp=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=we(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Cp=(function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=we(this.rank),o="uniform int start["+this.rank+"];",a=(function(i){if(i===1)return"sourceLoc";if(i<=6)return $o.slice(0,i).map((function(s){return"sourceLoc."+s})).join(",");throw Error("Slicing for rank "+i+" is not yet supported")})(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map((function(i,s){return"sourceLoc."+$o[s]+" = start["+s+"] + coords."+$o[s]+";"})).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r})(),$o=["x","y","z","w","u","v"],_p=(function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=we(this.rank),n=et("coords",this.rank),o=et("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map((function(l,h){return"start["+h+"]"})).join()+");":t.map((function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"})).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r})(),Ep=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=we(e.length),a=we(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map((function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"})).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Ip=(function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=as(e,n),i=is(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===st.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===st.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===st.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===st.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===st.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=is(e,as(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach((function(n){t.gpgpu.deleteMatrixTexture(n)}));for(var e in this.usedTextures)this.usedTextures[e].forEach((function(o){t.gpgpu.deleteMatrixTexture(o)}));this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r})();function as(r,t){if(r===ut.UPLOAD)return st.PACKED_2X2_FLOAT32;if(r===ut.RENDER||r==null)return(function(e){return M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?st.PACKED_2X2_FLOAT32:st.UNPACKED_FLOAT32:e?st.PACKED_2X2_FLOAT16:st.UNPACKED_FLOAT16})(t);if(r===ut.DOWNLOAD||r===ut.PIXELS)return st.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function is(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var Rp=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=we(this.rank),a=(function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()})(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},kp=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=we(this.rank),a=(function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()})(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Sp=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=we(this.rank),a=Ru("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Ha=1.7580993408473768,ja=1.0507009873554805,ie=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Et="if (isnan(x)) return x;",Dp="return x;",ss="return abs(x);",Tu=Et+`
  return (x < 0.0) ? 0.0 : x;
`,Nu=Et+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Fu="return (x >= 0.0) ? x : (exp(x) - 1.0);",Ap=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Ha+`;
  float scale = `+ja+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,us="return -x;",cs="return ceil(x);",ls="return floor(x);",hs="return exp(x);",fs="return exp(x) - 1.0;",Tp=Et+`
  return sin(x);
`,Np=Et+`
  return cos(x);
`,Fp=Et+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Pp=Et+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Mp=Et+`
  return atan(x);
`,Op=Et+"return log(x + sqrt(x * x + 1.0));",Bp=Et+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Lp=Et+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Tr="return x;",Wp="return x;",Pu=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Mu=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ou=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ar=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},zp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=et("rc",t),n=we(t),o=(function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c})(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Nr={};function Fr(r,t){if(t===void 0&&(t=!1),r==="linear")return t?Wp:Dp;if(r==="relu")return t?Pu:Tu;if(r==="elu")return t?Ou:Fu;if(r==="relu6")return t?Mu:Nu;if(r==="prelu")return t?Au:Du;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Vp=600,Up=(function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!M().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=Lt(M().getNumber("WEBGL_VERSION"));o.binaryCache=((n=M().getNumber("WEBGL_VERSION"))in Nr||(Nr[n]={}),Nr[n]),o.gpgpu=new Zd(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Ip(o.gpgpu),o.numMBBeforeWarning=M().global.screen==null?1024:M().global.screen.height*M().global.screen.width*window.devicePixelRatio*Vp/1024/1024,o.texData=new gu(o,T),o}return _t(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(M().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:ut.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(M().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:ut.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new ar(u,Tr):new ie(u,Tr);var h=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var d,p,m=this.activeTimers!=null;return m&&(d=At()),a==="complex64"?p=ba(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=At()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return $(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h,f,d,p,m,v,g,x,b,y,w,C,S,k;return Y(this,(function(I){switch(I.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise((function(R){return n.push(R)}))];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new ar(i,Tr):new ie(i,Tr),f=this.runWebGLProgram(h,[{dataId:e,shape:i,dtype:u}],u),d=this.read(f.dataId),this.disposeData(f.dataId),[2,d];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&M().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&M().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),p=(k=this.gpgpu).createBufferFromTexture.apply(k,[v.texture].concat(ir(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=I.sent(),b=x[0],y=x[1],g=ba(b,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=Q(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),I.label=5;case 5:return m!=null&&this.disposeData(m.dataId),C=this.convertAndCacheOnCPU(e,g),S=this.pendingRead.get(e),this.pendingRead.delete(e),S.forEach((function(R){return R(C)})),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}}))}))},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!Dh(o))throw M().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=Q(a);if(M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(ir(a))).subarray(0,u);return this.disposeData(c.dataId),h}var f=M().getBool("WEBGL_PACK")&&s===!0,d=f?Uo(a):a,p=f?new Dd(d):new Sd(d),m=this.runWebGLProgram(p,[{shape:d,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return $(this,void 0,void 0,(function(){var n,o,a,i,s,u,c;return Y(this,(function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=Yn(this.activeTimers.map((function(h){return h.query}))).filter((function(h){return h!=null})),s=Yn(this.activeTimers.map((function(h){return h.name}))).filter((function(h){return h!=null})),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=ch(c),u.getExtraProfileInfo=function(){return c.map((function(h,f){return{name:s[f],ms:h}})).map((function(h){return h.name+": "+h.ms})).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}}))}))},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:At(),endMs:null}},t.prototype.endTimer=function(e){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=At(),e)},t.prototype.getQueryTime=function(e){return $(this,void 0,void 0,(function(){var n;return Y(this,(function(o){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]}))}))},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var f=this.texData.get(e);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return M().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every((function(a){return o.texData.get(a.dataId).texture==null&&a.size<n}))},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(Q(o)===0)return qe([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=vu(e.shape,n,o);if(a||!i){var s=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _p(o):new Cp(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=mu(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=La(n,o,a);if(i.some((function(u){return u===0})))return qe([],i);var s=new Ep(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xp(e.shape,n):new yp(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map((function(d){return vt(d)})),a=e.map((function(d){return Nt(d)}));return He(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>M().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new pd(e.map((function(d){return d.shape})),n);return this.compileAndRun(c,e)}var l=Jn(e.map((function(d){return d.shape})),n),h=e.map((function(d){return d.as2D(-1,Q(d.shape.slice(n)))})),f=new dd(h.map((function(d){return d.shape})));return this.compileAndRun(f,h).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,us,e.dtype);var n=new ie(e.shape,us);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),h=s===1?2:1,f=s===1?n.as3D(c,1,u):n;return this.multiply(l,f).sum(h,!0)}var d=je(e.dtype,n.dtype),p=new qo(e.shape,[c,i,s],o,a);return this.compileAndRun(p,[e,n],d)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],h=i?o.shape[1]:o.shape[2],f=n.shape[0],d=je(n.dtype,o.dtype),p=s!=null,m=c!=null,v=u?Fr(u,!0):null,g=new qo(n.shape,[f,l,h],a,i,p,v,m),x=[n,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,d)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new Yi(ud,e.shape,n.shape),s=new Yi(cd,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Qi,e.dtype);var f=new De(Qi,e.shape,n.shape);return this.compileAndRun(f,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),M().getBool("WEBGL_PACK_NORMALIZATION")){var h=new sd(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var f=new id(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=M().getBool("WEBGL_PACK_NORMALIZATION")?new rp(e.shape,n,o,a,i):new tp(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new np(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map((function(i){return Hr(i)}));return Eu(ae(e.shape,e.dtype,o),n)}var a=new Rp(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new lp(e.shape,n,o):new cp(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Sp(e.shape,n):new kp(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new Md(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){E(e.rank<=4,(function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"}));var a=n.reduce((function(h,f){return h*f})),i=Yr(e.shape,n,a),s=Qr(i.length,n.length),u=Jr(e.shape,n,a),c=hu(o,n.length),l=fu(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){E(e.rank<=4,(function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"}));var a=n.reduce((function(f,d){return f*d})),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Yr(u.shape,n,a,!1),l=Qr(c.length,n.length,!1),h=Jr(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=Go(i),u=new hp({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=Go(i),u=new Qf({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=Go(a[a.length-1]),s=new rd(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){it("sum",n,e.rank);var o=Ke(e.shape,n),a=o[0],i=Q(o[1]),s=e.as2D(-1,i),u=Mo(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=Ke(e.shape,n),a=o[0],i=Q(o[1]),s=e.as2D(-1,i),u=Mo(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=Wt([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=zt(1,e.rank)[0]);var u=(function(d,p,m){for(var v=[],g=d.length,x=0;x<g;x++)x!==p?v.push(d[x]):v.push(m);return v})(s.shape,a,o),c=Q([s.shape[a]]),l=s.as2D(-1,c),h=Mo(e.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return i!=null&&(f=f.transpose(Pa(i))),f},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=(function(f,d){var p,m=!1;for(f<=pu?(p=f,m=!0):p=ha(f,Math.floor(Math.sqrt(f)));!m;)p>d||p===f?m=!0:p=ha(f,p+1);return p})(u,i),l=new bp({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[e,o],a);return h.shape[1]===i?h:(o=$r(0,i).tile([u/c]),this.segOpCompute(h,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(it("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!M().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=Ke(e.shape,a),s=i[0],u=Q(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new _d(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new De("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new De("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new De("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new De("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new De("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new De("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ie(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new De("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new De("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new wp(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],je(n.dtype,o.dtype))},t.prototype.where=function(e){Kr("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return Ua(e.shape,n)},t.prototype.topk=function(e,n,o){return Iu(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){it("min",n,e.rank);var o=Ke(e.shape,n),a=o[0],i=Q(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);it("max",n,e.rank);var o=Ke(e.shape,n),a=o[0],i=Q(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){it("all",n,e.rank);var o=Ke(e.shape,n),a=o[0],i=Q(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){it("any",n,e.rank);var o=Ke(e.shape,n),a=o[0],i=Q(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new De(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new De(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ho);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=je(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ho,o);var a=new De(Ho,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new ar(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new qt(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map((function(f){var d=f[0],p=f[1],m=a.makeComplexComponentTensorInfo(e,d),v=a.makeComplexComponentTensorInfo(n,p),g=new De(o,e.shape,n.shape);return a.compileAndRun(g,[m,v],je(d.dtype,p.dtype))})),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>M().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map((function(c){return c.dtype})).reduce((function(c,l){return je(c,l)})),s=e.map((function(c){return c.shape})),u=M().getBool("WEBGL_PACK")?new Yf(e[0].shape,s):new $f(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,jo);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=je(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,jo,e.dtype);var a=new De(jo,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=je(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cs,e.dtype);var n=new ie(e.shape,cs);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ls,e.dtype);var n=new ie(e.shape,ls);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ie(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ie(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ie(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ie(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ie(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hs,e.dtype);var n=new ie(e.shape,hs);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fs,e.dtype);var n=new ie(e.shape,fs);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=ze([n],e.shape),a=this.max(e,o),i=nt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ie(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ie(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ie(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ie(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ie(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=M().getBool("WEBGL_PACK")?new ar(e.shape,Pu):new ie(e.shape,Tu),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=M().getBool("WEBGL_PACK")?new ar(e.shape,Mu):new ie(e.shape,Nu),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt(Au,e.shape,n.shape):new De(Du,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ou,e.dtype);var n=new ie(e.shape,Fu);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new De("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ie(e.shape,Ap);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ie(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=M().getBool("WEBGL_PACK_CLIP")?new hd(e.shape):new ld(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ss,e.dtype);var n=new ie(e.shape,ss);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new fd(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new ie(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ie(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ie(e.shape,Tp);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ie(e.shape,Np);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ie(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ie(e.shape,Fp);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ie(e.shape,Pp);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ie(e.shape,Mp);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ie(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ie(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ie(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ie(e.shape,Op);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ie(e.shape,Bp);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ie(e.shape,Lp);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ie(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ie(e.shape,(function(a){return a===void 0&&(a=0),Et+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `})(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,d=o.dataFormat==="channelsLast",p=(h===1||f===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(p||!M().getBool("WEBGL_LAZILY_UNPACK")||!M().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),x=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Dr(c.shape,y.shape),(function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"}));var C=this.reshape(n,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),k=this.texData.get(S.dataId);return E(k.isPacked,(function(){return"batchMatMul result is expected to be packed"})),c.shape=w,k.shape=o.outShape,T.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,m=f*h,v=[p,m],g=e.squeeze([0]),x=n.reshape([1,p,-1]),b=new ep(v,g.shape,o),y=this.compileAndRun(b,[g]).reshape([1,v[0],v[1]]),w=a!=null,C=s!=null,S=i?Fr(i,!0):null,k=new qo(y.shape,[1,m,o.outChannels],!0,!1,w,S,C),I=[y,x];a&&I.push(a),C&&I.push(s);var R=this.compileAndRun(k,I);return d?R.reshape([1,f,h,o.outChannels]):R.reshape([1,o.outChannels,f,h])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(M().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?Fr(s,!1):null,f=new Ji(a,c,h,l),d=[n,o];return i&&d.push(i),u&&d.push(u),this.compileAndRun(f,d)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(M().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new Ji(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new md(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new vd(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=M().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?Fr(u,l):null,f=[o,a],d=s!=null,p=c!=null;return d&&f.push(s),p&&f.push(c),l?(n=new es(i,d,h,p),this.compileAndRun(n,f)):(n=new Zi(i,d,h,p),this.compileAndRun(n,f))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return M().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new es(o),this.compileAndRun(a,[e,n])):(a=new Zi(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new bd(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new xd(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new wd(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new yd(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new gd(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new Ko(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new Ko(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new Ko(a,"max",!0),s=this.compileAndRun(i,[n]),u=new op(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new od(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return bu(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new Xo(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new ad(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new Xo(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new Xo(a,"max",!0),s=this.compileAndRun(i,[n]),u=new ap(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!Dr(e.shape,n)&&(o.texture===null||!Dr(o.shape,n))){var a=this.packedReshape(e,n);return T.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return xa(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=M().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new vp(e.shape,n,o,a):new pp(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new dp(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new gp(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new mp(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:$t(e),s=i.shape[0],u=i.shape[1],c=new ip(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new sp(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new kd(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return Kr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),za(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new Cd(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){E(n>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+n}));var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,h=u/(n*n),f=new Rd(o==="NHWC"?[a,c,l,h]:[a,h,c,l],n,o);return this.compileAndRun(f,[e])},t.prototype.split=function(e,n,o){return _u(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=Zr(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],f=e.reshape([s,i]),d=n.reshape([s,u]);if(l===0)return xa(qe([]),o);var p=j(0),m=new os(s,i,f.rank,d.rank,c,h);return this.compileAndRun(m,[d,f,p]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=Zr(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new os(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new ns(Nd,e.shape,n),i=new ns(Fd,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=du(e,n),s=i[0],u=i[1],c=i[2],l=i[3],h=n.reshape([u,a]),f=e.reshape([e.size/c,c]),d=new Od(a,l,[u,c]);return this.compileAndRun(d,[f,h]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||mr(n))==="string"){var a=Gr(o,Q(e));return a.fill(n),T.makeTensor(a,e,o,this)}var i=new Pd(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return wu(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return T.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new zp(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new up(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[jr(e.shape)].concat(qr(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[jr(n)].concat(qr(n)),s=new fp(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=Uo(i);return n=a?new Id(u):new Ed(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===hr.DENSE){var l=ir(e.outputShape);c.texShape=l.map((function(b){return 2*b}))}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Q(u.shape)===0)return c.values=cr(u.dtype,0),u;var h=[],f=n.map((function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&Q(b.shape)<=M().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!Dr(y.shape,b.shape)){var w=b,C=b.shape;b.shape=y.shape,b=s.packedReshape(b,C),h.push(b),y=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}}));this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},m=(function(b,y,w){var C="";y.concat(w).forEach((function(I){var R=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,N=I.isUniform?"uniform":I.texData.texShape;C+=I.shape+"_"+N+"_"+R}));var S=b.userCode,k=b.constructor.name;return k+="_"+C+"_"+S})(e,f,p),v=this.getAndSaveBinary(m,(function(){return(function(b,y,w,C){var S=y.userCode,k=w.map((function(W,G){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[G],shapeInfo:H}})),I=k.map((function(W){return W.shapeInfo})),R={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},N=Jf(k,R,S,y.packedInputs),A=b.createProgram(N),L=null,O=b.getUniformLocation(A,"NAN",!1);M().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(A,"INFINITY",!1));for(var B={},V=0;V<y.variableNames.length;V++){var z=y.variableNames[V];B[z]=b.getUniformLocation(A,z,!1),B["offset"+z]=b.getUniformLocation(A,"offset"+z,!1)}return{program:y,source:N,webGLProgram:A,uniformLocations:B,inShapeInfos:I,outShapeInfo:R,infLoc:L,nanLoc:O}})(s.gpgpu,e,f,p)})),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),(function(b,y,w,C,S){rs(y.inShapeInfos,w),rs([y.outShapeInfo],[C]);var k=C.texData.texture,I=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(k,I[0],I[1]):b.setOutputMatrixTexture(k,I[0],I[1]),b.setProgram(y.webGLProgram),M().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach((function(R,N){var A=y.program.variableNames[N],L=y.uniformLocations[A],O=y.uniformLocations["offset"+A];if(L!=null)if(R.isUniform)if(Q(R.shape)<2)b.gl.uniform1f(L,R.uniformValues[0]);else{var B=R.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else R.texData.slice!=null&&O!=null&&b.gl.uniform1i(O,R.texData.slice.flatOffset),b.setInputMatrixTexture(R.texData.texture,L,N)})),S!=null&&S(b,y.webGLProgram),b.executeProgram()})(this.gpgpu,v,f,p,a),h.forEach((function(b){return s.disposeData(b.dataId)})),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!M().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(M().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach((function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]})),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=X((function(){if(!M().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=M().getBool("DEBUG");M().set("DEBUG",!1);var o=e.abs(j(1e-8)).dataSync()[0];if(M().set("DEBUG",n),o>0)return 32}return 16}))),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=At());var d=o.texShape;if(d==null&&(d=Kh(a,l),o.texShape=d),s!=null){var p=Uo(a),m=void 0,v=d[1],g=d[0],x=s instanceof Uint8Array;l?(v=(n=yr(d[0],d[1]))[0],g=n[1],m=new Td(p,[g,v],x)):m=new Ad(p,[g,v],x);var b=this.makeTensorInfo([g,v],i);this.texData.get(b.dataId).usage=x?ut.PIXELS:ut.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,g,s);var y=this.runWebGLProgram(m,[b],i,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,f&&(this.uploadWaitMs+=At()-h)}else{var C=this.acquireTexture(d,c,i,l);o.texture=C}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=(function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)})(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*$s(n)},t})(yu);nu()&&T.registerBackend("webgl",(function(){return new Up}),2);var Gp=D({square_:function(r){var t=_(r,"x","square"),e=[t];return T.runKernelFunc((function(n,o){return o([t]),n.square(t)}),{x:t},null,"Square",{},e,[])}}),dr="SquaredDifference",Bu=D({squaredDifference_:function(r,t){var e,n=_(r,"a","squaredDifference"),o=_(t,"b","squaredDifference");e=ke(n,o),n=e[0],o=e[1],he(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return T.runKernelFunc((function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c}),a,(function(s,u){var c=u[0],l=u[1],h=j(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}}),dr,{},i,[])}}),Hp=D({abs_:function(r){var t=_(r,"x","abs");return t.dtype==="complex64"?T.runKernelFunc((function(e){return e.complexAbs(t)}),{$x:t}):T.runKernelFunc((function(e,n){var o=e.abs(t);return n([t]),o}),{x:t},(function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}}),"Abs")}}),jp=D({acos_:function(r){var t=_(r,"x","acos");return T.runKernelFunc((function(e,n){var o=e.acos(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.divStrict(j(1).sub(o.toFloat().square()).sqrt()).neg()}}}))}}),qp=D({acosh_:function(r){var t=_(r,"x","acosh");return T.runKernelFunc((function(e,n){var o=e.acosh(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}}))}}),Kp=D({asin_:function(r){var t=_(r,"x","asin");return T.runKernelFunc((function(e,n){var o=e.asin(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.divStrict(j(1).sub(o.toFloat().square()).sqrt())}}}))}}),Xp=D({asinh_:function(r){var t=_(r,"x","asinh");return T.runKernelFunc((function(e,n){var o=e.asinh(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.divStrict(j(1).add(o.toFloat().square()).sqrt())}}}))}}),$p=D({atan_:function(r){var t=_(r,"x","atan");return T.runKernelFunc((function(e,n){var o=e.atan(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}}))}}),Yp=D({atanh_:function(r){var t=_(r,"x","atanh");return T.runKernelFunc((function(e,n){var o=e.atanh(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.div(j(1).sub(o.toFloat().square()))}}}))}}),Qp=D({ceil_:function(r){var t=_(r,"x","ceil");return T.runKernelFunc((function(e){return e.ceil(t)}),{$x:t},(function(e){return{$x:function(){return me(e)}}}))}}),qa=D({clipByValue_:function(r,t,e){var n=_(r,"x","clipByValue");E(t<=e,(function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."}));var o=[n],a={min:t,max:e};return T.runKernelFunc((function(i,s){var u=i.clip(n,t,e);return s([n]),u}),{x:n},(function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),me(i))}}}),"ClipByValue",a,o)}}),Jp=D({cos_:function(r){var t=_(r,"x","cos"),e=[t];return T.runKernelFunc((function(n,o){var a=n.cos(t);return o([t]),a}),{x:t},(function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}}),"Cos",{},e)}}),Zp=D({cosh_:function(r){var t=_(r,"x","cosh");return T.runKernelFunc((function(e,n){var o=e.cosh(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}}))}}),ev=D({erf_:function(r){var t=_(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",(function(){return"Input dtype must be `int32` or `float32`."})),t.dtype==="int32"&&(t=t.toFloat()),T.runKernelFunc((function(e,n){var o=e.erf(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}}))}}),wa=D({exp_:function(r){var t=_(r,"x","exp");return T.runKernelFunc((function(e,n){var o=e.exp(t);return n([o]),o}),{x:t},(function(e,n){return{x:function(){return e.mulStrict(n[0])}}}),"Exp",{},[],[!0])}}),tv=D({expm1_:function(r){var t=_(r,"x","expm1");return T.runKernelFunc((function(e,n){var o=e.expm1(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}}))}}),nv=D({floor_:function(r){var t=_(r,"x","floor");return T.runKernelFunc((function(e){return e.floor(t)}),{$x:t},(function(e){return{$x:function(){return me(e)}}}))}}),rv=D({log_:function(r){var t=_(r,"x","log"),e=[t];return T.runKernelFunc((function(n,o){var a=n.log(t);return o([t]),a}),{x:t},(function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}}),"Log",{},e)}}),ov=D({log1p_:function(r){var t=_(r,"x","log1p");return T.runKernelFunc((function(e,n){var o=e.log1p(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}}))}}),av=D({logSigmoid_:function(r){var t=_(r,"x","logSigmoid");return T.runKernelFunc((function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}}))}}),ro=D({neg_:function(r){var t=_(r,"x","neg"),e=[t];return T.runKernelFunc((function(n){return n.neg(t)}),{x:t},(function(n){return{x:function(){return n.neg()}}}),"Neg",{},e)}}),iv=D({reciprocal_:function(r){var t=_(r,"x","reciprocal");return T.runKernelFunc((function(e,n){var o=e.reciprocal(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}}))}}),sv=D({round_:function(r){var t=_(r,"x","round");return T.runKernelFunc((function(e){return e.round(t)}),{$x:t},(function(e){return{$x:function(){return me(e)}}}))}}),Lu=D({rsqrt_:function(r){var t=_(r,"x","rsqrt"),e=[t];return T.runKernelFunc((function(n,o){var a=n.rsqrt(t);return o([t]),a}),{x:t},(function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}}),"Rsqrt",{},e)}}),Wu=D({sigmoid_:function(r){var t=_(r,"x","sigmoid");return T.runKernelFunc((function(e,n){var o=e.sigmoid(t);return n([o]),o}),{x:t},(function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(j(1).sub(o)))}}}),"Sigmoid")}}),uv=D({sign_:function(r){var t=_(r,"x","sign");return T.runKernelFunc((function(e){return e.sign(t)}),{$x:t},(function(e){return{$x:function(){return me(e)}}}))}}),cv=D({isNaN_:function(r){var t=_(r,"x","isNaN");return T.runKernelFunc((function(e){return e.isNaN(t)}),{$x:t},(function(e){return{$x:function(){return me(e)}}}))}}),lv=D({isInf_:function(r){var t=_(r,"x","isInf");return T.runKernelFunc((function(e){return e.isInf(t)}),{$x:t},(function(e){return{$x:function(){return me(e)}}}))}}),hv=D({isFinite_:function(r){var t=_(r,"x","isFinite");return T.runKernelFunc((function(e){return e.isFinite(t)}),{$x:t},(function(e){return{$x:function(){return me(e)}}}))}}),fv=D({sin_:function(r){var t=_(r,"x","sin"),e=[t];return T.runKernelFunc((function(n,o){var a=n.sin(t);return o([t]),a}),{x:t},(function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}}),"Sin",{},e)}}),dv=D({sinh_:function(r){var t=_(r,"x","sinh");return T.runKernelFunc((function(e,n){var o=e.sinh(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}}))}}),pv=D({softplus_:function(r){var t=_(r,"x","softplus");return T.runKernelFunc((function(e,n){var o=e.softplus(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}}))}}),vv=D({sqrt_:function(r){var t=_(r,"x","sqrt");return T.runKernelFunc((function(e,n){var o=e.sqrt(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}}))}}),mv=D({step_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","step");return T.runKernelFunc((function(n){return n.step(e,t)}),{$x:e},(function(n){return{$x:function(){return me(n)}}}))}}),gv=D({tan_:function(r){var t=_(r,"x","tan");return T.runKernelFunc((function(e,n){var o=e.tan(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}}))}}),yv=D({tanh_:function(r){var t=_(r,"x","tanh");return T.runKernelFunc((function(e,n){var o=e.tanh(t);return n([o]),o}),{x:t},(function(e,n){var o=n[0];return{x:function(){return j(1).sub(o.square()).mulStrict(e)}}}),"Tanh",{},null,[!0])}});function zu(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===2,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),E(c.rank===2||c.rank===1,(function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."})),E(l.rank===2||l.rank===1,(function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."})),i!=null&&E(i.rank===2||i.rank===1,(function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."})),s!=null&&E(s.rank===2||s.rank===1,(function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."})),br(u,c,l,s,i,a)}function Vu(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===3,(function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."})),E(c.rank===3||c.rank===1,(function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."})),E(l.rank===3||l.rank===1,(function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."})),i!=null&&E(i.rank===3||i.rank===1,(function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."})),s!=null&&E(s.rank===3||s.rank===1,(function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."})),br(u,c,l,s,i,a)}function Uu(r,t,e,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===4,(function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."})),E(c.rank===4||c.rank===1,(function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."})),E(l.rank===4||l.rank===1,(function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."})),i!=null&&E(i.rank===4||i.rank===1,(function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."})),s!=null&&E(s.rank===4||s.rank===1,(function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."})),br(u,c,l,s,i,a)}function br(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(t,"mean","batchNorm"),h=_(e,"variance","batchNorm");o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(l.rank===h.rank,(function(){return"Batch normalization gradient requires mean and variance to have equal ranks."})),E(s==null||l.rank===s.rank,(function(){return"Batch normalization gradient requires mean and offset to have equal ranks."})),E(i==null||l.rank===i.rank,(function(){return"Batch normalization gradient requires mean and scale to have equal ranks."})),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return T.runKernelFunc((function(d,p){var m=d.batchNormalization(u,Pr(l),Pr(h),a,Pr(i),Pr(s));return p([c,l,h,i]),m}),{x:c,mean:l,variance:h,scale:i,offset:s},(function(d,p){var m=p,v=m[0],g=m[1],x=m[2],b=m[3],y=b??j(1),w=Le(g.shape,u.shape),C=[];if(g.rank===1){for(var S=0;S<u.shape.length-1;++S)C.push(u.shape[S]);C.push(1)}var k=v.sub(g),I=d.mul(y),R=Lu(x.add(j(a))),N=R.mul(R).mul(R).mul(j(-.5));return{x:function(){return g.rank===1?d.mul(Gn(R.as4D(1,1,1,g.shape[0]),C)).mul(y).reshape(v.shape):d.mul(R).mul(y).reshape(v.shape)},mean:function(){var A=R.mul(j(-1)).mul(I);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},variance:function(){var A=N.mul(k).mul(I);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},scale:function(){var A=k.mul(R),L=d.mul(A);return g.rank===1&&(L=L.sum(w)),L.reshape(g.shape)},offset:function(){var A=d;return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)}}}),"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function Pr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function mo(){ru("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var xv=D({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),mo(),zu(r,t,e,a,o,n)}}),bv=D({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),mo(),Vu(r,t,e,a,o,n)}}),wv=D({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),mo(),Uu(r,t,e,a,o,n)}}),Cv=D({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),mo(),br(r,t,e,a,o,n)}}),Gu=D({batchNorm_:br}),_v=D({batchNorm2d_:zu}),Ev=D({batchNorm3d_:Vu}),Iv=D({batchNorm4d_:Uu}),go=D({logicalAnd_:function(r,t){var e=_(r,"a","logicalAnd","bool"),n=_(t,"b","logicalAnd","bool");return he(e.shape,n.shape),T.runKernelFunc((function(o){return o.logicalAnd(e,n)}),{a:e,b:n},null,"LogicalAnd")}}),Rv=D({logicalNot_:function(r){var t=_(r,"x","logicalNot","bool");return T.runKernelFunc((function(e){return e.logicalNot(t)}),{$x:t})}}),Hu=D({logicalOr_:function(r,t){var e=_(r,"a","logicalOr","bool"),n=_(t,"b","logicalOr","bool");return he(e.shape,n.shape),T.runKernelFunc((function(o){return o.logicalOr(e,n)}),{$a:e,$b:n})}}),kv=D({logicalXor_:function(r,t){var e=_(r,"a","logicalXor","bool"),n=_(t,"b","logicalXor","bool");return he(e.shape,n.shape),Hu(r,t).logicalAnd(go(r,t).logicalNot())}}),_n=D({where_:function(r,t,e){var n=_(t,"a","where"),o=_(e,"b","where"),a=_(r,"condition","where","bool");return xe(n.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===n.shape[0],(function(){return"The first dimension of `a` must match the size of `condition`."})):xe(a.shape,o.shape,"Error in where: "),T.runKernelFunc((function(i,s){var u=i.select(a,n,o);return s([a]),u}),{$condition:a,$a:n,$b:o},(function(i,s){var u=s[0];return{$condition:function(){return me(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}}))}}),ju=function(r){return $(this,void 0,void 0,(function(){var t,e,n;return Y(this,(function(o){switch(o.label){case 0:return[4,(t=_(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=Ua(t.shape,e),r!==t&&t.dispose(),[2,n]}}))}))},ce=D({add_:function(r,t){var e,n=_(r,"a","add"),o=_(t,"b","add");e=ke(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc((function(i){return i.add(n,o)}),{a:n,b:o},(function(i){return{a:function(){var s=i,u=Le(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Le(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}}),"Add")}}),Sv=D({addN_:function(r){E(Array.isArray(r),(function(){return"The argument passed to tf.addN() must be a list of tensors"})),E(r.length>=1,(function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length}));var t=r.map((function(o,a){return _(o,"tensors"+a,"addN")})),e=t[0];t.forEach((function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),t.forEach((function(o){if(!Ue(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));var n=t;return T.runKernelFunc((function(o){return o.addN(t)}),n,(function(o){var a={};return t.forEach((function(i,s){a[s]=function(){return o.clone()}})),a}),"AddN")}}),Dv=D({addStrict_:function(r,t){var e=_(r,"a","addStrict"),n=_(t,"b","addStrict");return xe(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),Av=D({atan2_:function(r,t){var e,n=_(r,"a","atan2"),o=_(t,"b","atan2");e=ke(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc((function(i,s){var u=i.atan2(n,o);return s([n,o]),u}),{$a:n,$b:o},(function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ce(u.square(),c.square()),h=i.mul(c.div(l)),f=Le(u.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=ce(u.square(),c.square()),h=ro(i.mul(u.div(l))),f=Le(c.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}}))}}),yt=D({div_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");if(e=ke(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return qu(n,o);var a=he(n.shape,o.shape);return T.runKernelFunc((function(i,s){var u=i.realDivide(n,o);return s([n,o]),u}),{a:n,b:o},(function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Le(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Le(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}}),"Div")}}),Tv=D({divNoNan_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");n=(e=ke(n,o))[0],o=e[1];var a=yt(n,o),i=me(a),s=o.equal(i);return _n(s,i,a)}}),Nv=D({divStrict_:function(r,t){var e=_(r,"a","div"),n=_(t,"b","div");return xe(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),qu=D({floorDiv_:function(r,t){var e,n=_(r,"a","floorDiv"),o=_(t,"b","floorDiv");e=ke(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc((function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u}),{a:n,b:o},(function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Le(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Le(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}}),"FloorDiv")}}),Ka=D({maximum_:function(r,t){var e,n=_(r,"a","maximum"),o=_(t,"b","maximum");return e=ke(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),he(n.shape,o.shape),T.runKernelFunc((function(a,i){var s=a.maximum(n,o);return i([n,o]),s}),{a:n,b:o},(function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}}),"Maximum")}}),Fv=D({maximumStrict_:function(r,t){var e=_(r,"a","maximumStrict"),n=_(t,"b","maximumStrict");return xe(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),Ku=D({minimum_:function(r,t){var e,n=_(r,"a","minimum"),o=_(t,"b","minimum");return e=ke(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),he(n.shape,o.shape),T.runKernelFunc((function(a,i){var s=a.minimum(n,o);return i([n,o]),s}),{a:n,b:o},(function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}}),"Minimum")}}),Pv=D({minimumStrict_:function(r,t){var e=_(r,"a","minimumStrict"),n=_(t,"b","minimumStrict");return xe(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),Mv=D({mod_:function(r,t){var e,n=_(r,"a","mod"),o=_(t,"b","mod");e=ke(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc((function(i,s){var u=i.mod(n,o);return s([n,o]),u}),{$a:n,$b:o},(function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Le(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=Le(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}}))}}),Ov=D({modStrict_:function(r,t){var e=_(r,"a","modStrict"),n=_(t,"b","modStrict");return xe(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),Qe=D({mul_:function(r,t){var e,n=_(r,"a","mul"),o=_(t,"b","mul");e=ke(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc((function(i,s){var u=i.multiply(n,o);return s([n,o]),u}),{a:n,b:o},(function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=Le(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Le(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}}),"Mul")}}),Bv=D({mulStrict_:function(r,t){var e=_(r,"a","mul"),n=_(t,"b","mul");return xe(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),oo=D({pow_:function(r,t){var e,n=_(r,"base","pow"),o=_(t,"exp","pow");e=ke(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape),i=[n,o];return T.runKernelFunc((function(s,u){var c=s.pow(n,o);return u([n,o,c]),c}),{a:n,b:o},(function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),d=s.mul(f.mul(c.pow(f.sub(j(1))))),p=Le(c.shape,a);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var f=c.greater(0),d=c.log().where(f,me(c)),p=s.mul(h.mul(d)),m=Le(l.shape,a);return m.length>0&&(p=p.sum(m)),p.reshape(l.shape)}}}),"Pow",{},i,[!0])}}),Lv=D({powStrict_:function(r,t){return xe(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),Wv=D({squaredDifferenceStrict_:function(r,t){var e=_(r,"a","squaredDifferenceStrict"),n=_(t,"b","squaredDifferenceStrict");return xe(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),We=D({sub_:function(r,t){var e,n=_(r,"a","sub"),o=_(t,"b","sub");e=ke(n,o),n=e[0],o=e[1];var a=he(n.shape,o.shape);return T.runKernelFunc((function(i){return i.subtract(n,o)}),{a:n,b:o},(function(i){return{a:function(){var s=i,u=Le(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Le(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}}),"Sub")}}),zv=D({subStrict_:function(r,t){var e=_(r,"a","subStrict"),n=_(t,"b","subStrict");return xe(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),Xu=D({equal_:function(r,t){var e,n=_(r,"a","equal"),o=_(t,"b","equal");return e=ke(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc((function(a){return a.equal(n,o)}),{$a:n,$b:o})}}),Vv=D({equalStrict_:function(r,t){var e=_(r,"a","equalStrict"),n=_(t,"b","equalStrict");return xe(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),Uv=D({greater_:function(r,t){var e,n=_(r,"a","greater"),o=_(t,"b","greater");return e=ke(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc((function(a){return a.greater(n,o)}),{a:n,b:o},null,"Greater")}}),$u=D({greaterEqual_:function(r,t){var e,n=_(r,"a","greaterEqual"),o=_(t,"b","greaterEqual");return e=ke(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc((function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s}),{a:n,b:o},(function(a,i){var s=i[0],u=i[1];return{a:function(){return me(s)},b:function(){return me(u)}}}),"GreaterEqual")}}),Gv=D({greaterEqualStrict_:function(r,t){var e=_(r,"a","greaterEqualStrict"),n=_(t,"b","greaterEqualStrict");return xe(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Hv=D({greaterStrict_:function(r,t){var e=_(r,"a","greaterStrict"),n=_(t,"b","greaterStrict");return xe(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),jv=D({less_:function(r,t){var e,n=_(r,"a","less"),o=_(t,"b","less");return e=ke(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc((function(a){return a.less(n,o)}),{a:n,b:o},null,"Less")}}),qv=D({lessEqual_:function(r,t){var e,n=_(r,"a","lessEqual"),o=_(t,"b","lessEqual");return e=ke(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc((function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s}),{a:n,b:o},null,"LessEqual")}}),Kv=D({lessEqualStrict_:function(r,t){var e=_(r,"a","lessEqualStrict"),n=_(t,"b","lessEqualStrict");return xe(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),Xv=D({lessStrict_:function(r,t){var e=_(r,"a","lessStrict"),n=_(t,"b","lessStrict");return xe(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),$v=D({notEqual_:function(r,t){var e,n=_(r,"a","notEqual"),o=_(t,"b","notEqual");return e=ke(n,o),n=e[0],o=e[1],he(n.shape,o.shape),T.runKernelFunc((function(a){return a.notEqual(n,o)}),{a:n,b:o},null,"NotEqual")}}),Yv=D({notEqualStrict_:function(r,t){var e=_(r,"a","notEqualStrict"),n=_(t,"b","notEqualStrict");return xe(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function ds(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function ps(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Xa=D({gather_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","gather"),o=_(t,"indices","gather","int32");e=ze(e,n.shape)[0];var a=(function(i,s,u){for(var c=i.shape[u],l=[],h=1,f=1,d=0;d<u;d++)l.push(i.shape[d]),h*=i.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<i.rank;d++)l.push(i.shape[d]),f*=i.shape[d];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}})(n,o,e);return T.runKernelFunc((function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u}),{x:n,indices:o},(function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,e),f=h.length,d=c.slice(e,c.length).slice(1),p=d.length,m=ds(0,f),v=ds(f+1,f+1+p),g=ps([h,[l],d]),x=i.reshape(g),b=u.reshape([l]),y=ps([[f],m,v]),w=x.transpose(y),C=Yu(w,b,n.shape[e]),S=Pa(y);return C=C.transpose(S)},indices:function(){return u}}}),"Gather",{axis:e}).reshape(a.outputShape)}}),Yu=D({unsortedSegmentSum_:function(r,t,e){var n=_(r,"x","unsortedSegmentSum"),o=_(t,"segmentIds","unsortedSegmentSum","int32");return E(Ne(e),(function(){return"numSegments must be of dtype int"})),T.runKernelFunc((function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s}),{$x:n},(function(a,i){var s=i[0];return{$x:function(){return(function(u,c){for(var l=Ka(c,me(c)),h=Xa(u,l),f=$u(c,j(0,"int32")),d=h.rank-f.rank,p=0;p<d;++p)f=pt(f,p+1);f=go(f,tr(h.shape,"bool"));var m=me(h);return _n(f,h,m)})(a,s)}}}))}}),Qv=function(r,t,e){return $(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h,f,d,p,m;return Y(this,(function(v){switch(v.label){case 0:for(n=_(r,"tensor","boolMask"),o=_(t,"mask","boolMask","bool"),a=e??0,i=o.rank,s=n.shape,E(i>0,(function(){return"mask cannot be scalar"})),xe(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=n.reshape(l),f=o.reshape([-1]),[4,ju(f)];case 1:return d=v.sent(),p=d.squeeze([1]),m=Xa(h,p,a),r!==n&&n.dispose(),t!==o&&o.dispose(),p.dispose(),h.dispose(),f.dispose(),d.dispose(),[2,m]}}))}))};function Qu(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),E(r.length===t.rank,(function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"}));var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,(function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."})),E(u.rank===4,(function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank})),E(e.rank===4,(function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank}));var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],(function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."})),E(h===e.shape[3],(function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+e.shape[3]+"."})),i!=null&&E(Ne(o),(function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var f=Wa(a),d=kn(s,e.shape,n,1,o,i,!1,f),p=T.runKernelFunc((function(m,v){var g=m.conv2dDerInput(u,e,d);return v([e,u]),g}),{dy4D:u,filter:e},(function(m,v){var g=v[0],x=v[1];return{dy4D:function(){return gt(m,g,n,o,a,1,i)},filter:function(){return $a(m,x,g.shape,n,o,a,i)}}}));return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function Yo(r){var t=(function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a})(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function Ju(r,t,e,n,o){E(r.length===t.rank,(function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"}));var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,(function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."})),E(i.rank===5,(function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank})),E(e.rank===5,(function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank})),E(u===e.shape[3],(function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."})),E(c===e.shape[4],(function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."}));var l=to(a,e.shape,n,1,o),h=T.runKernelFunc((function(f){return f.conv3dDerInput(i,e,l)}),{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var Jv=D({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=_(r,"x","conv1d"),u=_(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,(function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."})),E(u.rank===3,(function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."})),i!=null&&E(Ne(n),(function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."})),E(c.shape[2]===u.shape[1],(function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."})),E(rt(e,a),(function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"})),E(o==="NWC",(function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."}));var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=gt(f,h,[1,e],n,"NHWC",[1,a],i);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),gt=D({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=_(r,"x","conv2d"),u=_(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,(function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."})),E(u.rank===4,(function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."})),i!=null&&E(Ne(n),(function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}));var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],(function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."})),E(rt(e,a),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}));var f=Wa(o),d=kn(c.shape,u.shape,e,a,n,i,!1,f),p=[u,c],m=T.runKernelFunc((function(v,g){var x=v.conv2d(c,u,d);return g([u,c]),x}),{x:c,filter:u},(function(v,g){var x=g,b=x[0],y=x[1];return E(Zn(a),(function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"})),{x:function(){return Zu(y.shape,v,b,e,n,o)},filter:function(){return $a(y,v,b.shape,e,n,o)}}}),"Conv2D",d,p);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Zv=D({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=_(r,"x","conv3d"),s=_(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,(function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."})),E(s.rank===5,(function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."})),E(u.shape[4]===s.shape[3],(function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."})),E((function(f,d){return Yo(f)||Yo(d)})(e,a),(function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"})),E(o==="NDHWC",(function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."}));var l=to(u.shape,s.shape,e,a,n),h=T.runKernelFunc((function(f,d){var p=f.conv3d(u,s,l);return d([u,s]),p}),{x:u,$filter:s},(function(f,d){E(Yo(a),(function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}));var p=d[0],m=d[1];return{x:function(){return Ju(p.shape,f,m,e,n)},$filter:function(){return(function(v,g,x,b,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,(function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."})),E(C.rank===5,(function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."})),E(x.length===5,(function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."})),E(w.shape[4]===x[3],(function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."})),E(C.shape[4]===x[4],(function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+x[4]+")."}));var S=to(w.shape,x,b,1,y);return T.runKernelFunc((function(k){return k.conv3dDerFilter(w,C,S)}),{x5D:w,dy5D:C})})(p,f,m.shape,e,n)}}}));return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),$a=D({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,(function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."})),E(u.rank===4,(function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."})),E(e.length===4,(function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."}));var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],(function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."})),E(l===e[3],(function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."})),i!=null&&E(Ne(o),(function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."}));var h=Wa(a),f=kn(s.shape,e,n,1,o,i,!1,h);return T.runKernelFunc((function(d){return d.conv2dDerFilter(s,u,f)}),{x4D:s,dy4D:u})}}),Zu=D({conv2dDerInput_:Qu}),yo=D({depthwiseConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,(function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."})),E(u.rank===4,(function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."})),E(c.shape[3]===u.shape[2],(function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."})),a==null&&(a=[1,1]),E(rt(e,a),(function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"})),i!=null&&E(Ne(n),(function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}));var h=kn(c.shape,u.shape,e,a,n,i,!0),f=[c,u],d=T.runKernelFunc((function(p,m){var v=p.depthwiseConv2D(c,u,h);return m([c,u]),v}),{x:c,filter:u},(function(p,m){E(Zn(a),(function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"}));var v=m[0],g=m[1];return{x:function(){return ec(v.shape,p,g,h)},filter:function(){return tc(v,p,g.shape,h)}}}),"DepthwiseConv2dNative",h,f);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),ec=D({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=T.runKernelFunc((function(s){return s.depthwiseConv2DDerInput(o,e,n)}),{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),tc=D({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),T.runKernelFunc((function(i){return i.depthwiseConv2DDerFilter(o,a,n)}),{x4D:o,dy4D:a})}}),Ya=D({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(t,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,(function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."})),E(u.rank===4,(function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."})),E(c.rank===4,(function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."})),E(c.shape[0]===1,(function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."})),E(c.shape[1]===1,(function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."}));var f=u.shape[2],d=u.shape[3];E(c.shape[2]===f*d,(function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*d+", but got "+c.shape[2]+"."}));var p=yo(l,u,n,o,i,a),m=gt(p,c,1,"valid",i);return h?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),em=D({conv2dTranspose_:function(r,t,e,n,o,a){return Qu(e,_(r,"x","conv2dTranspose"),_(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),tm=D({conv3dTranspose_:function(r,t,e,n,o){return Ju(e,_(r,"x","conv3dTranspose"),_(t,"filter","conv3dTranspose"),n,o)}}),xo=D({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=_(r,"a","matMul"),i=_(t,"b","matMul");o=ke(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),d=Q(h),p=Q(f);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,(function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."})),E(Ue(h,f),(function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."})),E(s===u,(function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."}));var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(d,s,c):a.as3D(d,c,s),g=n?i.as3D(p,l,u):i.as3D(p,u,l),x={transposeA:e,transposeB:n};return T.runKernelFunc((function(b,y){var w=b.batchMatMul(v,g,e,n);return y([v,g]),w}),{a:v,b:g},(function(b,y){var w=y,C=w[0],S=w[1];return e||n?!e&&n?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:e&&!n?{a:function(){return S.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}}),"BatchMatMul",x).reshape(m)}}),nm=D({dot_:function(r,t){var e=_(r,"t1","dot"),n=_(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),(function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."}));var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return E(o===a,(function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."})),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),rm=D({outerProduct_:function(r,t){var e=_(r,"v1","outerProduct"),n=_(t,"v2","outerProduct");return E(e.rank===1&&n.rank===1,(function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."})),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),wr=D({reverse_:function(r,t){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var n=ze(t,e.shape);return T.runKernelFunc((function(o){return o.reverse(e,n)}),{$x:e},(function(o){return{$x:function(){return o.reverse(n)}}})).reshapeAs(e)}}),om=D({reverse1d_:function(r){var t=_(r,"x","reverse");return E(t.rank===1,(function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."})),wr(t,0)}}),am=D({reverse2d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===2,(function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."})),wr(e,t)}}),im=D({reverse3d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===3,(function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."})),wr(e,t)}}),sm=D({reverse4d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===4,(function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."})),wr(e,t)}});function nc(r,t,e,n,o,a){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,(function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."})),E(rt(e,n),(function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"})),a!=null&&E(Ne(o),(function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var c=fr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ue(c.inShape,c.outShape))return i.clone();var l=[s],h=T.runKernelFunc((function(f,d){var p=f.maxPool(s,c);return d([s,p]),p}),{x:s},(function(f,d){var p=d[0],m=d[1];return{x:function(){return(function(v,g,x,b,y,w,C,S){var k=_(v,"dy","maxPoolBackprop"),I=_(g,"input","maxPoolBackprop"),R=_(x,"output","maxPoolBackprop");E(I.rank===k.rank,(function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+k.rank+")"})),E(rt(y,w),(function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"})),E(k.rank===4,(function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."})),E(I.rank===4,(function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."}));var N=fr(I.shape,b,y,w,C,S);return T.runKernelFunc((function(A){return A.maxPoolBackprop(k,I,R,N)}),{$dy:k,$input:I})})(f,p,m,t,e,n,o)}}}),"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function rc(r,t,e,n,o,a){var i=_(r,"x","avgPool","float32");E(rt(e,n),(function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}));var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,(function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."})),a!=null&&E(Ne(o),(function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."}));var c=fr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ue(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc((function(h){return h.avgPool(s,c)}),{x:s},(function(h){return{x:function(){return(function(f,d,p,m,v,g){var x=_(f,"dy","avgPoolBackprop"),b=_(d,"input","avgPoolBackprop");E(b.rank===x.rank,(function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"})),E(rt(m,v),(function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"}));var y=b,w=x,C=!1;b.rank===3&&(C=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),E(w.rank===4,(function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."})),E(y.rank===4,(function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."}));var S=fr(y.shape,p,m,v,g),k=T.runKernelFunc((function(I){return I.avgPoolBackprop(w,y,S)}),{dy4D:w,input4D:y});return C?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k})(h,s,t,e,n,o)}}}),"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Ve=D({maxPool_:function(r,t,e,n,o){return nc(r,t,e,1,n,o)}}),Cr=D({avgPool_:function(r,t,e,n,o){return rc(r,t,e,1,n,o)}}),um=D({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(rt(a,o),(function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"}));var c,l=fr(s.shape,t,a,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?(function(y,w){var C=y.map((function(I,R){return I+(I-1)*(w[R]-1)})).map((function(I){return I-1})),S=C.map((function(I){return Math.floor(I/2)})),k=C.map((function(I,R){return I-S[R]}));return C.map((function(I,R){return[S[R],k[R]]}))})([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,d=(function(y,w,C){var S=C.map((function(O){return O[0]})),k=C.map((function(O){return O[1]})),I=y.concat(S,k),R=w.map((function(O,B){return(O-I[B]%O)%O})),N=k.map((function(O,B){return O+R[B]})),A=w.map((function(O,B){return[S[B],N[B]]})),L=w.map((function(O,B){return[0,R[B]]}));return[A,L]})([l.inHeight,l.inWidth],h,c),p=d[0],m=d[1],v=f?n:"valid",g=f?s:cu(s,h,p),x=(e==="avg"?function(){return rc(g,t,a,1,v)}:function(){return nc(g,t,a,1,v)})(),b=f?x:iu(x,h,m);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),cm=D({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,(function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."})),E(a==="NDHWC",(function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a})),E(rt(e,i),(function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"})),o!=null&&E(Ne(n),(function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."}));var l=eo(u.shape,t,e,i,n,o,a),h=T.runKernelFunc((function(f,d){var p=f.maxPool3d(u,l);return d([u,p]),p}),{x:u},(function(f,d){var p=d[0],m=d[1];return{x:function(){return(function(v,g,x,b,y,w,C,S){var k=_(v,"dy","maxPool3dBackprop"),I=_(g,"input","maxPool3dBackprop"),R=_(x,"output","maxPool3dBackprop"),N=k,A=I,L=R,O=!1;I.rank===4&&(O=!0,N=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),A=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),L=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),E(N.rank===5,(function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+N.rank+"."})),E(A.rank===5,(function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."})),E(L.rank===5,(function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."})),w==null&&(w=[1,1,1]),E(rt(y,w),(function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"})),S!=null&&E(Ne(C),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+C+"."}));var B=eo(A.shape,b,y,w,C,S),V=T.runKernelFunc((function(z){return z.maxPool3dBackprop(N,A,L,B)}),{dy5D:N,input5D:A});return O?V.as4D(V.shape[1],V.shape[2],V.shape[3],V.shape[4]):V})(f,p,m,t,e,i,n,o)}}}));return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),lm=D({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,(function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."})),E(a==="NDHWC",(function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a})),E(rt(e,i),(function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"})),o!=null&&E(Ne(n),(function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."}));var l=eo(u.shape,t,e,i,n,o,a),h=T.runKernelFunc((function(f){return f.avgPool3d(u,l)}),{x:u},(function(f){return{x:function(){return(function(d,p,m,v,g,x,b){var y=_(d,"dy","avgPool3dBackprop"),w=_(p,"input","avgPool3dBackprop"),C=y,S=w,k=!1;w.rank===4&&(k=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,(function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."})),E(S.rank===5,(function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."})),g==null&&(g=[1,1,1]),E(rt(v,g),(function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"})),b!=null&&E(Ne(x),(function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."}));var I=eo(S.shape,m,v,g,x,b),R=T.runKernelFunc((function(N){return N.avgPool3dBackprop(C,S,I)}),{dy5D:C,input5D:S});return k?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R})(f,u,t,e,i,n,o)}}}));return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Bt=D({slice_:function(r,t,e){var n,o,a=_(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach((function(u){E(u!==-1,(function(){return"slice() does not support negative begin indexing."}))})),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map((function(u,c){return u>=0?u:(E(u===-1,(function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."})),a.shape[c]-n[c])})),Lf(a,n,o);var i=a.shape,s={begin:n,size:o};return T.runKernelFunc((function(u){return u.slice(a,n,o)}),{x:a},(function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}}),"Slice",s)}}),hm=D({slice1d_:function(r,t,e){var n=_(r,"x","slice1d");return E(n.rank===1,(function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"})),Bt(n,[t],[e])}}),fm=D({slice2d_:function(r,t,e){var n=_(r,"x","slice2d");return E(n.rank===2,(function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"})),Bt(n,t,e)}}),oc=D({slice3d_:function(r,t,e){var n=_(r,"x","slice3d");return E(n.rank===3,(function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"})),Bt(n,t,e)}}),dm=D({slice4d_:function(r,t,e){var n=_(r,"x","slice4d");return E(n.rank===4,(function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"})),Bt(n,t,e)}});function ac(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(nt(t.shape,n))),r.rank<e.rank&&(r=r.reshape(nt(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var pm=D({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","all","bool"),o=ze(t,n.shape),a=o,i=Wt(a,n.rank);i!=null&&(n=n.transpose(i),a=zt(a.length,n.rank));var s=T.runKernelFunc((function(c){return c.all(n,a)}),{$x:n});if(e){var u=nt(s.shape,o);return s.reshape(u)}return s}}),vm=D({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","any","bool"),o=ze(t,n.shape),a=o,i=Wt(a,n.rank);i!=null&&(n=n.transpose(i),a=zt(a.length,n.rank));var s=T.runKernelFunc((function(c){return c.any(n,a)}),{$x:n});if(e){var u=nt(s.shape,o);return s.reshape(u)}return s}}),mm=D({argMax_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMax");t==null&&(t=0);var n=ze(t,e.shape),o=Wt(n,e.rank);o!=null&&(e=e.transpose(o),n=zt(n.length,e.rank));var a={axis:n[0]},i=[e];return T.runKernelFunc((function(s,u){var c=s.argMax(e,n[0]);return u([e]),c}),{x:e},(function(s,u){var c=u[0];return{x:function(){return me(c)}}}),"ArgMax",a,i)}}),gm=D({argMin_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMin");t==null&&(t=0);var n=ze(t,e.shape),o=Wt(n,e.rank);return o!=null&&(e=e.transpose(o),n=zt(n.length,e.rank)),T.runKernelFunc((function(a,i){var s=a.argMin(e,n[0]);return i([e]),s}),{$x:e},(function(a,i){var s=i[0];return{$x:function(){return me(s)}}}))}}),ym=D({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","logSumExp"),o=ze(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=nt(s.shape,o);return s.reshape(u)}return s}}),bo=D({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","max"),o=n,a=ze(t,n.shape),i=a,s=Wt(i,n.rank);s!=null&&(n=n.transpose(s),i=zt(i.length,n.rank));var u=[n],c=T.runKernelFunc((function(h,f){var d=h.max(n,i);return f([o,d]),d}),{x:n},(function(h,f){return ac(h,f[1],f[0],a,s)}),"Max",{axes:i},u,[!0]);if(e){var l=nt(c.shape,a);c=c.reshape(l)}return c}}),xm=D({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","mean"),o=ze(t,n.shape),a=Q(Ke(n.shape,o)[1]);return vo((function(i){var s=j(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach((function(l){c[l]=1})),u.reshape(c).mul(tr(i.shape,"float32")).div(a)}}}))(n)}}),bm=D({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","min"),o=n,a=ze(t,n.shape),i=a,s=Wt(i,n.rank);s!=null&&(n=n.transpose(s),i=zt(i.length,n.rank));var u=[n],c=T.runKernelFunc((function(h,f){var d=h.min(n,i);return f([o,d]),d}),{x:n},(function(h,f){return ac(h,f[1],f[0],a,s)}),"Min",{axes:i},u,[!0]);if(e){var l=nt(c.shape,a);c=c.reshape(l)}return c}}),wm=D({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=ze(t,(r=_(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=nt(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),ic=D({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=ze(t,n.shape);return vo((function(a){var i=Wt(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=zt(s.length,a.rank));var c=function(d){var p=a.shape.slice();return o.forEach((function(m){p[m]=1})),d.reshape(p).mul(tr(a.shape,"float32"))},l={axes:s},h=T.runKernelFunc((function(d){return d.sum(u,s)}),{x:u},(function(d){return{x:function(){return c(d)}}}),"Sum",l);if(e){var f=nt(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}}))(n)}}),Cm=D({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=ze(t,n.shape),a=Wt(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=zt(i.length,n.rank));var u=T.runKernelFunc((function(l){return l.prod(s,i)}),{permutedX:s});if(e){var c=nt(u.shape,o);u=u.reshape(c)}return u}}),sc=D({elu_:function(r){var t=_(r,"x","elu");return T.runKernelFunc((function(e,n){var o=e.elu(t);return n([o]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){return T.runKernelFunc((function(a){return a.eluDer(e,o)}),{dy:e,y:o})}}}))}}),_m=D({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=_(r,"x","leakyRelu");return Ka(j(t).mul(e),e)}}),uc=D({prelu_:function(r,t){var e=_(r,"x","prelu"),n=_(t,"alpha","prelu");return T.runKernelFunc((function(o,a){var i=o.prelu(e,n);return a([e,n]),i}),{x:e,alpha:n},(function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return _n(u,o,o.mul(s))},alpha:function(){var c=_n(u,me(o),o.mul(i)),l=Le(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}}),"Prelu")}}),Re=D({relu_:function(r){var t=_(r,"x","relu");return t.dtype==="bool"?t.toInt():T.runKernelFunc((function(e,n){var o=e.relu(t);return n([t]),o}),{x:t},(function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}}),"Relu")}}),cc=D({relu6_:function(r){var t=_(r,"x","relu6");return t.dtype==="bool"?t.toInt():T.runKernelFunc((function(e,n){var o=e.relu6(t);return n([t]),o}),{x:t},(function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}}),"Relu6")}}),Em=D({selu_:function(r){var t=_(r,"x","selu");return T.runKernelFunc((function(e,n){var o=e.selu(t);return n([t]),o}),{$x:t},(function(e,n){var o=n[0];return{$x:function(){var a=o.greater(j(0)),i=j(Ha),s=j(ja),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return _n(a,u,c)}}}))}}),cn=D({transpose_:function(r,t){var e=_(r,"x","transpose");if(t==null&&(t=e.shape.map((function(o,a){return a})).reverse()),E(e.rank===t.length,(function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."})),t.forEach((function(o){E(o>=0&&o<e.rank,(function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t}))})),e.rank<=1)return e.clone();var n={perm:t};return T.runKernelFunc((function(o){return o.transpose(e,t)}),{x:e},(function(o){var a=Pa(t);return{x:function(){return o.transpose(a)}}}),"Transpose",n)}}),Im=D({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=_(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,(function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."})),E(Ne(t),(function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."}));var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=T.runKernelFunc((function(c,l){var h=c.localResponseNormalization4D(i,t,e,n,o);return l([i,h]),h}),{x4D:i},(function(c,l){var h=l[0],f=l[1];return{x4D:function(){return T.runKernelFunc((function(d){return d.LRNGrad(c,h,f,t,e,n,o)}),{})}}}));return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),lc=D({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=(function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(j(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)})(r=_(r,"x","norm"),t,e),a=o.shape;if(n){var i=ze(e,r.shape);a=nt(o.shape,i)}return o.reshape(a)}}),Rm=D({basicLSTMCell_:function(r,t,e,n,o,a){var i=_(r,"forgetBias","basicLSTMCell"),s=_(t,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(n,"data","basicLSTMCell"),l=_(o,"c","basicLSTMCell"),h=_(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),d=f.shape[0],p=f.shape[1]/4,m=[d,p],v=f.slice([0,0],m),g=f.slice([0,p],m),x=f.slice([0,2*p],m),b=f.slice([0,3*p],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),km=D({multiRNNCell_:function(r,t,e,n){for(var o=_(t,"data","multiRNNCell"),a=Xr(e,"c","multiRNNCell"),i=Xr(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),Sm=D({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=_(r,"v","movingAverage"),i=_(t,"x","movingAverage"),s=_(e,"decay","movingAverage");Eh(a,i),E(Ue(a.shape,i.shape),(function(){return"Shape mismatch in v and x"}));var u=j(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(n!=null,(function(){return"When using zeroDebias: true, step is required."}));var h=_(n,"step","movingAverage");l=l.div(u.sub(oo(s,h)))}return a.add(l)}}),Dm=D({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=Ki(s),h=c.shape.slice();l.forEach((function(v){t[v]=0,e[v]=1,h.splice(v,0,1)})),c=c.reshape(h);for(var f=0;f<c.rank;f++)t[f]=Wf(o,t,n,c.shape,f),e[f]=zf(a,e,n,c.shape,f),n[f]=n[f]||1;var d=Ki(u);d.forEach((function(v){e[v]=t[v]+1,n[v]=1}));var p=La(t,e,n),m=p.filter((function(v,g){return d.indexOf(g)===-1}));return n.every((function(v){return v===1}))?Bt(c,t,p).reshape(m):T.runKernelFunc((function(v){return v.stridedSlice(c,t,e,n)}),{$x:c}).reshape(m)}}),Am=D({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=_(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=T.runKernelFunc((function(i){return i.topk(n,t,e)}),{$x:n});return{values:a[0],indices:a[1]}}}),Tm=D({scatterND_:function(r,t,e){var n=_(r,"indices","scatterND","int32"),o=_(t,"updates","scatterND");return Bf(o,n,e),T.runKernelFunc((function(a){return a.scatterND(n,o,e)}),{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),Qa=D({fft_:function(r){E(r.dtype==="complex64",(function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."}));var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc((function(o){return o.fft(n)}),{input:r}).reshape(r.shape)}}),ao=D({ifft_:function(r){E(r.dtype==="complex64",(function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."}));var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc((function(o){return o.ifft(n)}),{input:r}).reshape(r.shape)}}),Ja=D({rfft_:function(r,t){E(r.dtype==="float32",(function(){return"The dtype for rfft() must be real value but got "+r.dtype}));var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map((function(g){return 0})),i=r.shape.map((function(g){return g}));i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map((function(g){return g}));s[r.shape.length-1]=t-n,e=r.concat(Ce(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=He(e,u).as2D(o,n),l=Qa(c),h=Math.floor(n/2)+1,f=vt(l),d=Nt(l),p=f.split([h,n-h],f.shape.length-1),m=d.split([h,n-h],d.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=h,He(p[0],m[0]).reshape(v)}}),hc=D({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=ao(n);return vt(o)}var a=[e,2*(t-1)],i=vt(r).as2D(e,t),s=Nt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(j(-1)),l=i.concat(u,1),h=s.concat(c,1);return n=He(l,h).as2D(a[0],a[1]),o=ao(n),vt(o)}}),Nm=Object.freeze({fft:Qa,ifft:ao,rfft:Ja,irfft:hc}),Fm=D({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=_(r,"sparseIndices","sparseToDense","int32"),a=_(t,"sparseValues","sparseToDense"),i=_(n,"defaultValue","sparseToDense",a.dtype);return(function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")})(o,a,e,i),T.runKernelFunc((function(s){return s.sparseToDense(o,a,e,i)}),{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),Pm=D({gatherND_:function(r,t){var e=_(t,"indices","gatherND","int32"),n=_(r,"x","gatherND");return T.runKernelFunc((function(o){return o.gatherND(n,e)}),{x:n,indices:e},null,"GatherNd")}}),Mm=D({diag_:function(r){var t=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return T.runKernelFunc((function(n){return n.diag(t)}),{$x:t}).reshape(e)}}),Om=D({dropout_:function(r,t,e,n){var o=_(r,"x","dropout");if(E(o.dtype==="float32",(function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."})),E(t>=0&&t<1,(function(){return"rate must be a float in the range [0, 1), but got "+t+"."})),t===0)return r instanceof Ie?o.clone():o;var a=(function(u,c){if(c==null)return u.shape.slice();if(Ue(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c})(o,e),i=1-t,s=uu(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function fc(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return Pe(o,"float32")}var Za=D({hannWindow_:function(r){return fc(r,.5,.5)}}),dc=D({hammingWindow_:function(r){return fc(r,.54,.46)}}),ei=D({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(Bt(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=Oe([Bt(r,a,t-s),Ot([s],o)]);i.push(u),a+=e}return i.length===0?an([],[0,t]):Oe(i).as2D(i.length,t)}}),pc=D({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=Za),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=ei(r,t,e),s=Qe(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(Ja(s.slice([c,0],[1,t]),n));return Oe(u)}}),Bm=Object.freeze({hannWindow:Za,hammingWindow:dc,frame:ei,stft:pc}),Ye,Lm=function(r,t,e){return e===void 0&&(e=1),$(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h,f,d,p,m,v;return Y(this,(function(g){switch(g.label){case 0:return n=_(r,"predictions","inTopK"),o=_(t,"targets","inTopK"),E(n.rank>1,(function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank})),E(n.rank-1===o.rank,(function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank})),xe(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],E(e>0&&e<=a,(function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e})),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],h=cr("bool",c=u[0]),f=0;f<c;f++){for(d=f*l,p=i.subarray(d,d+l),m=[],v=0;v<p.length;v++)m.push({value:p[v],index:v});for(m.sort((function(x,b){return b.value-x.value})),h[f]=0,v=0;v<e;v++)if(m[v].index===s[f]){h[f]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,qe(h,o.shape,"bool")]}}))}))};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ye||(Ye={}));var Wm=D({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=Ye.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","absoluteDifference"),a=_(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=_(e,"weights","absoluteDifference")),xe(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return Yt(s,i,n)}}),Yt=D({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=Ye.SUM_BY_NONZERO_WEIGHTS);var n=_(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=_(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===Ye.NONE)return a;if(e===Ye.SUM)return a.sum();if(e===Ye.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(j(i)):s}if(e===Ye.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(j(n.size));var u=o.mul(tr(n.shape)).notEqual(j(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),zm=D({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=Ye.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","cosineDistance"),i=_(t,"predictions","cosineDistance"),s=null;n!=null&&(s=_(n,"weights","cosineDistance")),xe(a.shape,i.shape,"Error in cosineDistance: ");var u=j(1).sub(a.mul(i).sum(e,!0));return Yt(u,s,o)}}),Vm=D({hingeLoss_:function(r,t,e,n){n===void 0&&(n=Ye.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","hingeLoss"),a=_(t,"predictions","hingeLoss"),i=null;e!=null&&(i=_(e,"weights","hingeLoss")),xe(o.shape,a.shape,"Error in hingeLoss: ");var s=j(1);o=j(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return Yt(u,i,n)}}),Um=D({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=Ye.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","huberLoss"),i=_(t,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),xe(a.shape,i.shape,"Error in huberLoss: ");var u=j(n),c=i.sub(a).abs(),l=Ku(c,u),h=c.sub(l),f=j(.5).mul(l.square()).add(u.mul(h));return Yt(f,s,o)}}),Gm=D({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=Ye.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","logLoss"),i=_(t,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),xe(a.shape,i.shape,"Error in logLoss: ");var u=j(1),c=j(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return Yt(l,s,o)}}),Hm=D({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=Ye.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","meanSquaredError"),a=_(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=_(e,"weights","meanSquaredError")),xe(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return Yt(s,i,n)}}),jm=D({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Ye.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),xe(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=j(n),c=j(1),l=j(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=(function(f,d){var p=_(f,"labels","sigmoidCrossEntropyWithLogits"),m=_(d,"logits","sigmoidCrossEntropyWithLogits");xe(p.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(p),x=m.abs().neg().exp().log1p();return v.sub(g).add(x)})(a,i);return Yt(h,s,o)}}),qm=D({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Ye.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),xe(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=j(n),c=j(1),l=j(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=(function(f,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return vo((function(m,v,g){var x=v.logSumExp([p],!0),b=v.toFloat().sub(x);return g([m,b]),{value:b.mul(m).neg().sum([p]),gradFunc:function(y,w){var C=w[0],S=w[1],k=nt(y.shape,[p]);return[y.reshape(k).mul(C.toFloat().sub(S.exp())),y.reshape(k).mul(S.exp().sub(C.toFloat()))]}}}))(f,d)})(a,i);return Yt(h,s,o)}}),Km=Object.freeze({get Reduction(){return Ye},absoluteDifference:Wm,computeWeightedLoss:Yt,cosineDistance:zm,hingeLoss:Vm,huberLoss:Um,logLoss:Gm,meanSquaredError:Hm,sigmoidCrossEntropy:jm,softmaxCrossEntropy:qm});function vs(r,t){return t===void 0&&(t=!1),T.tidy((function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=su(e),a=r.clone(),i=an([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(h){var f,d=a,p=s,m=o;f=T.tidy((function(){var v=a.slice([h,h],[e-h,1]),g=v.norm(),x=a.slice([h,h],[1,1]),b=an([[-1]]).where(x.greater(0),an([[1]])),y=x.sub(b.mul(g)),w=v.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(y).div(g).neg(),S=a.slice([h,0],[e-h,n]),k=C.mul(s);if(h===0)a=S.sub(k.matMul(s.transpose().matMul(S)));else{var I=S.sub(k.matMul(s.transpose().matMul(S)));a=a.slice([0,0],[h,n]).concat(I,0)}var R=o.slice([0,h],[e,o.shape[1]-h]);if(h===0)o=R.sub(R.matMul(s).matMul(k.transpose()));else{var N=R.sub(R.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[e,h]).concat(N,1)}return[s,a,o]})),s=f[0],a=f[1],o=f[2],tt([d,p,m])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]}))}var Xm=D({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=_(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=$r(0,i,1,"int32").reshape([-1,1]),c=$r(0,s,1,"int32"),l=We(u,c),h=go(l.lessEqual(j(+t,"int32")),l.greaterEqual(j(-e,"int32"))),f=Ce([i,s],n.dtype);return ft(Be(n.reshape([-1,i,s])).map((function(d){return _n(h,d,f)}))).reshape(o)}}),$m=D({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,(function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"}));for(var e=r[0].shape[0],n=function(u){E(r[u].shape[0]===e,(function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"}))},o=1;o<r.length;++o)n(o)}else t=!0,r=Oa(r,r.shape[0],0).map((function(u){return lu(u,[0])}));E(r.length<=r[0].shape[0],(function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."}));var a=[],i=r,s=function(u){a.push(T.tidy((function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=ic(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div(lc(c,"euclidean"))})))};for(o=0;o<r.length;++o)s(o);return t?ft(a,0):a}}),Ym=D({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return vs(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce((function(i,s){return i*s})),n=Be(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach((function(i){var s=vs(i,t),u=s[0],c=s[1];o.push(u),a.push(c)})),[ft(o,0).reshape(r.shape),ft(a,0).reshape(r.shape)]}}),Qm=Object.freeze({bandPart:Xm,gramSchmidt:$m,qr:Ym});function wo(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=n&&n<=1,(function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"})),E(r.rank===2,(function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"})),E(r.shape[1]===4,(function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]})),E(t.rank===1,(function(){return"scores must be a 1D tensor"})),E(t.shape[0]===i,(function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]})),E(0<=a&&a<=1,(function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"})),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var Jm=D({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,(function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."})),E(t.length===2,(function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."}));var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc((function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)}),{x:o},(function(c,l){return{x:function(){return T.runKernelFunc((function(h){return h.resizeBilinearBackprop(c,l[0],e)}),{})}}}),"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Zm=D({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,(function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."})),E(t.length===2,(function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."})),E(n.dtype==="float32"||n.dtype==="int32",(function(){return"`images` must have `int32` or `float32` as dtype"}));var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc((function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)}),{batchImages:o},(function(c,l){return{batchImages:function(){return T.runKernelFunc((function(h){return h.resizeNearestNeighborBackprop(c,l[0],e)}),{})}}}));return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),eg=D({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=_(r,"boxes","nonMaxSuppression"),i=_(t,"scores","nonMaxSuppression"),s=wo(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return T.runKernelFunc((function(c){return c.nonMaxSuppression(a,i,e,n,o)}),{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),tg=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),$(this,void 0,void 0,(function(){var a,i,s,u,c,l,h;return Y(this,(function(f){switch(f.label){case 0:return a=_(r,"boxes","nonMaxSuppressionAsync"),i=_(t,"scores","nonMaxSuppressionAsync"),s=wo(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=za(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,h]}}))}))},ng=D({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(t,"scores","nonMaxSuppression"),u=wo(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),rg=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),$(this,void 0,void 0,(function(){var i,s,u,c,l,h,f;return Y(this,(function(d){switch(d.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(t,"scores","nonMaxSuppressionAsync"),u=wo(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=d.sent(),l=c[0],h=c[1],f=Va(l,h,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,f]}}))}))},og=D({cropAndResize_:function(r,t,e,n,o,a){var i=_(r,"image","cropAndResize"),s=_(t,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,(function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."})),E(s.rank===2&&s.shape[1]===4,(function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."})),E(u.rank===1&&u.shape[0]===c,(function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."})),E(n.length===2,(function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."})),E(n[0]>=1&&n[1]>=1,(function(){return"cropSize must be atleast [1,1], but was "+n})),E(o==="bilinear"||o==="nearest",(function(){return"method must be bilinear or nearest, but was "+o})),T.runKernelFunc((function(l,h){return l.cropAndResize(i,s,u,n,o,a)}),{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),ti=Object.freeze({resizeBilinear:Jm,resizeNearestNeighbor:Zm,nonMaxSuppression:eg,nonMaxSuppressionAsync:tg,nonMaxSuppressionWithScore:ng,nonMaxSuppressionWithScoreAsync:rg,cropAndResize:og}),ni=function(r,t){return!(r>0)||t==="linear"},ri=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},oi=function(r,t){var e=t,n=Le(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},ai=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Re(r);if(t==="elu")return sc(r);if(t==="relu6")return cc(r);if(t==="prelu")return uc(r,e);throw new Error("Unknown fused activation "+t+".")},ag=D({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(ni(T.state.gradientDepth,l)===!1){var f=xo(e,n,a,s);return u!=null&&(f=ce(f,u)),ai(f,l,h)}var d=_(e,"a","fused matMul"),p=_(n,"b","fused matMul");t=ke(d,p),d=t[0],p=t[1];var m=a?d.shape[d.rank-2]:d.shape[d.rank-1],v=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=a?d.shape[d.rank-1]:d.shape[d.rank-2],x=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=Q(b),C=Q(y);E(d.rank>=2&&p.rank>=2&&d.rank===p.rank,(function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."})),E(Ue(b,y),(function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."})),E(m===v,(function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+a+" and transposeB="+s+" must match."}));var S,k,I=d.shape.slice(0,-2).concat([g,x]),R=a?d.as3D(w,m,g):d.as3D(w,g,m),N=s?p.as3D(C,x,v):p.as3D(C,v,x);u!=null&&he(I,(S=ke(S=_(u,"bias","fused matMul"),d)[0]).shape),h!=null&&(k=_(h,"prelu weights","fused matMul"));var A={a:R,b:N};u!=null&&(A.bias=S),h!=null&&(A.preluActivationWeights=k);var L=[R,N];return T.runKernelFunc((function(O,B){var V=O.fusedBatchMatMul({a:R,b:N,transposeA:a,transposeB:s,bias:S,activation:l,preluActivationWeights:k});return B([R,N,V]),V}),A,(function(O,B){var V=B[0],z=B[1],W=B[2],G=ri(O,W,l),H={};return u!=null&&(H={bias:function(){return oi(S,G)}}),Object.assign(a||s?!a&&s?{a:function(){return G.matMul(z,!1,!1)},b:function(){return G.matMul(V,!0,!1)}}:a&&!s?{a:function(){return z.matMul(G,!1,!0)},b:function(){return V.matMul(G,!1,!1)}}:{a:function(){return z.matMul(G,!0,!0)},b:function(){return G.matMul(V,!0,!0)}}:{a:function(){return G.matMul(z,!1,!0)},b:function(){return V.matMul(G,!0,!1)}},H)}),"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(I)}}),ig=D({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(f=f||"linear",ni(T.state.gradientDepth,f)===!1){var p=gt(t,e,n,o,i,u,c);return l!=null&&(p=ce(p,l)),ai(p,f,d)}var m=_(t,"x","conv2d"),v=_(e,"filter","conv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,(function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."})),E(v.rank===4,(function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."})),c!=null&&E(Ne(o),(function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."})),E(g.shape[3]===v.shape[2],(function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."})),E(rt(n,u),(function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"})),E(i==="NHWC",(function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."}));var b,y,w=kn(g.shape,v.shape,n,u,o,c);l!=null&&(b=ke(b=_(l,"bias","fused conv2d"),m)[0],he(w.outShape,b.shape)),d!=null&&(y=_(d,"prelu weights","fused conv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=y);var S=[v,g],k=T.runKernelFunc((function(I,R){var N=I.fusedConv2d({input:g,filter:v,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return R([v,g,N]),N}),C,(function(I,R){var N=R,A=N[0],L=N[1],O=N[2],B=ri(I,O,f);E(Zn(u),(function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"}));var V={};return l!=null&&(V={bias:function(){return oi(b,B)}}),Object.assign({x:function(){return Zu(L.shape,B,A,n,o)},filter:function(){return $a(L,B,A.shape,n,o)}},V)}),"FusedConv2D",{convInfo:w,activation:f},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),sg=D({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(ni(T.state.gradientDepth,f)===!1){var p=yo(t,e,n,o,i,u,c);return l!=null&&(p=ce(p,l)),ai(p,f,d)}var m=_(t,"x","depthwiseConv2d"),v=_(e,"filter","depthwiseConv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,(function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."})),E(v.rank===4,(function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."})),E(g.shape[3]===v.shape[2],(function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."})),u==null&&(u=[1,1]),E(rt(n,u),(function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"})),c!=null&&E(Ne(o),(function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."}));var b,y,w=kn(g.shape,v.shape,n,u,o,c,!0);l!=null&&(b=ke(b=_(l,"bias","fused conv2d"),m)[0],he(w.outShape,b.shape)),d!=null&&(y=_(d,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:v};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=y);var S=[v,g],k=T.runKernelFunc((function(I,R){var N=I.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return R([v,g,N]),N}),C,(function(I,R){E(Zn(u),(function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"}));var N=R[0],A=R[1],L=R[2],O=ri(I,L,f),B={};return l!=null&&(B={bias:function(){return oi(b,O)}}),Object.assign({x:function(){return ec(A.shape,O,N,w)},filter:function(){return tc(A,O,N.shape,w)}},B)}),"FusedDepthwiseConv2D",{convInfo:w,activation:f},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),ug=Object.freeze({matMul:ag,conv2d:ig,depthwiseConv2d:sg}),cg=Object.freeze({image:ti,linalg:Qm,losses:Km,spectral:Nm,fused:ug,signal:Bm,square:Gp,squaredDifference:Bu,conv1d:Jv,conv2d:gt,conv3d:Zv,depthwiseConv2d:yo,separableConv2d:Ya,conv2dTranspose:em,conv3dTranspose:tm,op:D,batchNormalization2d:xv,batchNormalization3d:bv,batchNormalization4d:wv,batchNormalization:Cv,batchNorm:Gu,batchNorm2d:_v,batchNorm3d:Ev,batchNorm4d:Iv,booleanMaskAsync:Qv,complex:He,real:vt,imag:Nt,concat:Oe,concat1d:uf,concat2d:cf,concat3d:lf,concat4d:hf,split:Oa,matMul:xo,dot:nm,outerProduct:rm,reverse:wr,reverse1d:om,reverse2d:am,reverse3d:im,reverse4d:sm,maxPool:Ve,avgPool:Cr,pool:um,maxPool3d:cm,avgPool3d:lm,slice:Bt,slice1d:hm,slice2d:fm,slice3d:oc,slice4d:dm,abs:Hp,acos:jp,acosh:qp,asin:Kp,asinh:Xp,atan:$p,atanh:Yp,ceil:Qp,clipByValue:qa,cos:Jp,cosh:Zp,erf:ev,exp:wa,expm1:tv,floor:nv,log:rv,log1p:ov,logSigmoid:av,neg:ro,reciprocal:iv,round:sv,rsqrt:Lu,sigmoid:Wu,sign:uv,isNaN:cv,isInf:lv,isFinite:hv,sin:fv,sinh:dv,softplus:pv,sqrt:vv,step:mv,tan:gv,tanh:yv,all:pm,any:vm,argMax:mm,argMin:gm,logSumExp:ym,max:bo,mean:xm,min:bm,moments:wm,sum:ic,prod:Cm,equal:Xu,equalStrict:Vv,greater:Uv,greaterEqual:$u,greaterEqualStrict:Gv,greaterStrict:Hv,less:jv,lessEqual:qv,lessEqualStrict:Kv,lessStrict:Xv,notEqual:$v,notEqualStrict:Yv,add:ce,addN:Sv,addStrict:Dv,atan2:Av,div:yt,divNoNan:Tv,divStrict:Nv,floorDiv:qu,maximum:Ka,maximumStrict:Fv,minimum:Ku,minimumStrict:Pv,mod:Mv,modStrict:Ov,mul:Qe,mulStrict:Bv,pow:oo,powStrict:Lv,squaredDifferenceStrict:Wv,sub:We,subStrict:zv,elu:sc,leakyRelu:_m,prelu:uc,relu:Re,relu6:cc,selu:Em,logicalAnd:go,logicalNot:Rv,logicalOr:Hu,logicalXor:kv,where:_n,whereAsync:ju,buffer:ae,print:bf,batchToSpaceND:iu,broadcastTo:wf,cast:Cf,clone:_f,cumsum:Ef,depthToSpace:If,expandDims:pt,eye:su,multinomial:Rf,oneHot:ga,pad:Rn,pad1d:kf,pad2d:Sf,pad3d:Df,pad4d:Af,rand:Tf,randomNormal:Nf,randomGamma:Ff,randomUniform:uu,reshape:wt,spaceToBatchND:cu,squeeze:lu,stack:ft,tile:Gn,truncatedNormal:Pf,unstack:Be,setdiff1dAsync:Mf,fill:Ot,linspace:sf,ones:tr,range:$r,scalar:j,tensor:qe,tensor1d:Pe,tensor2d:an,tensor3d:Ma,tensor4d:Ze,tensor5d:rf,tensor6d:of,variable:af,zeros:Ce,onesLike:au,zerosLike:me,transpose:cn,softmax:$t,logSoftmax:Uf,localResponseNormalization:Im,norm:lc,gather:Xa,unsortedSegmentSum:Yu,basicLSTMCell:Rm,multiRNNCell:km,movingAverage:Sm,stridedSlice:Dm,topk:Am,scatterND:Tm,fft:Qa,ifft:ao,rfft:Ja,irfft:hc,sparseToDense:Fm,gatherND:Pm,diag:Mm,dropout:Om,hannWindow:Za,hammingWindow:dc,frame:ei,stft:pc,inTopKAsync:Lm});function U(r,t){Array.isArray(r)||(r=[r]),r.forEach((function(e){e!=null&&E(e.dtype!=="complex64",(function(){return t+" does not support complex64 tensors."}))}))}function Qo(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var lg=(function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new gu(e,T),e}return _t(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,M().get("IS_NODE")&&Kr(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return $(this,void 0,void 0,(function(){return Y(this,(function(n){return[2,this.readSync(e)]}))}))},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?ba(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map((function(a){return Hr(a)}))}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ae(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return T.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return $(this,void 0,void 0,(function(){var n;return Y(this,(function(o){return n=At(),e(),[2,{kernelMs:At()-n}]}))}))},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(U(e,"slice"),vu(e.shape,n,o)){var a=mu(n,e.strides),i=Q(o);return qe(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=ae(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map((function(h,f){return h+n[f]}));s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){U(e,"stridedSlice");var i=La(n,o,a);if(i.some((function(d){return d===0})))return qe([],i);for(var s=ae(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*a[f]+n[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=ae([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){U(e,"reverse");for(var o=ae(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach((function(h){return l[h]=e.shape[h]-1-l[h]})),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map((function(d){return vt(d)})),i=e.map((function(d){return Nt(d)}));return He(this.concat(a,n),this.concat(i,n))}var s=e.map((function(d){var p=Q(d.shape.slice(n));return d.as2D(-1,p)})),u=Jn(s.map((function(d){return d.shape})),1),c=ae(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach((function(d){c.set(o.readSync(d.dataId),l),l+=d.size}))}else{var h=0;s.forEach((function(d){for(var p=o.readSync(d.dataId),m=0,v=0;v<d.shape[0];++v)for(var g=v*u[1]+h,x=0;x<d.shape[1];++x)c[g+x]=p[m++];h+=d.shape[1]}))}var f=Jn(e.map((function(d){return d.shape})),n);return qe(c,f,e[0].dtype)},t.prototype.neg=function(e){return U(e,"neg"),this.multiply(j(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),(function(o,a,i,s){return{real:o+i,imag:a+s}})):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),(function(o,a){return o+a}))},t.prototype.addN=function(e){var n=this;U(e,"addN");for(var o=e.map((function(l){return n.readSync(l.dataId)})),a=ae(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=ze([n],e.shape),a=this.max(e,o),i=nt(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),(function(o,a,i,s){return{real:o-i,imag:a-s}})):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),(function(o,a){return o-a}))},t.prototype.pow=function(e,n){return U([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,(function(o,a){return Math.pow(o,a)}))},t.prototype.batchMatMul=function(e,n,o,a){U([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),h=this.readSync(n.dataId),f=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=f[0],p=f[1],m=f[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=v[0],x=v[1],b=v[2],y=s*u,w=ae([c,s,u],e.dtype),C=w.values,S=this.blockSize,k=0;k<c;k++)for(var I=0;I<s;I+=S)for(var R=0;R<u;R+=S)for(var N=0;N<i;N+=S)for(var A=Math.min(I+S,s),L=Math.min(R+S,u),O=Math.min(N+S,i),B=I;B<A;B++)for(var V=R;V<L;V++){for(var z=0,W=N;W<O;W++)z+=l[k*d+B*p+W*m]*h[W*g+V*x+k*b];C[k*y+(B*u+V)]+=z}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Qo(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),(function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}})):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),(function(o,a){return o*a}))},t.prototype.realDivide=function(e,n){return U([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",(function(o,a){return o/a}))},t.prototype.floorDiv=function(e,n){return U([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",(function(o,a){return Math.floor(o/a)}))},t.prototype.sum=function(e,n){U(e,"sum"),it("sum",n,e.rank);for(var o=Ke(e.shape,n),a=o[0],i=o[1],s=Ce(a,je(e.dtype,"int32")),u=Q(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=0,p=0;p<u;++p)d+=l[f+p];c[h]=d}return s},t.prototype.prod=function(e,n){U(e,"sum");for(var o=Ke(e.shape,n),a=o[0],i=o[1],s=Ce(a,je(e.dtype,"int32")),u=Q(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=1,p=0;p<u;++p)d*=l[f+p];c[h]=d}return s},t.prototype.unsortedSegmentSum=function(e,n,o){U(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=j(s,"int32"),c=Xu(u,n).asType("float32").mul(e).sum(0);a.push(c)}return ft(a)},t.prototype.argMin=function(e,n){U(e,"argMin");var o=[n];it("argMin",o,e.rank);for(var a=Ke(e.shape,o),i=a[0],s=a[1],u=Ce(i,"int32"),c=Q(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],m=0,v=0;v<c;++v){var g=h[d+v];g<p&&(p=g,m=v)}l[f]=m}return u},t.prototype.argMax=function(e,n){U(e,"argMax");var o=[n];it("argMax",o,e.rank);for(var a=Ke(e.shape,o),i=a[0],s=a[1],u=Ce(i,"int32"),c=Q(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],m=0,v=0;v<c;++v){var g=h[d+v];g>p&&(p=g,m=v)}l[f]=m}return u},t.prototype.cumsum=function(e,n,o,a){if(U(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=je(e.dtype,"int32"),s=Ce(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],h=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},f=0;f<c.length;f+=l)for(var d=0;d<l;d++){var p=h(f,d);if(d===0)u[p]=o?0:c[p];else{var m=h(f,d-1);u[p]=o?c[m]+u[m]:c[p]+u[m]}}return s},t.prototype.equal=function(e,n){return U([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o===a?1:0}))},t.prototype.notEqual=function(e,n){return U([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o!==a?1:0}))},t.prototype.less=function(e,n){return U([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o<a?1:0}))},t.prototype.lessEqual=function(e,n){return U([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o<=a?1:0}))},t.prototype.greater=function(e,n){return U([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o>a?1:0}))},t.prototype.greaterEqual=function(e,n){return U([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o>=a?1:0}))},t.prototype.logicalNot=function(e){U(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return U([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o&&a}))},t.prototype.logicalOr=function(e,n){return U([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",(function(o,a){return o||a}))},t.prototype.select=function(e,n,o){U([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ce(n.shape,je(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=e.rank===0||e.rank>1||n.rank===1?1:Q(n.shape.slice(1)),f=0;f<a.length;f++)for(var d=0;d<h;d++)a[f]===1?c[l++]=i[f]:c[l++]=s[f];return u},t.prototype.where=function(e){U([e],"where");var n=this.readSync(e.dataId);return Ua(e.shape,n)},t.prototype.topk=function(e,n,o){return U(e,"topk"),Iu(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){U(e,"min"),it("min",n,e.rank);for(var o=Ke(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Q(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var m=l[f+p];m<d&&(d=m)}c[h]=d}return s},t.prototype.minimum=function(e,n){return U([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,(function(o,a){return Math.min(o,a)}))},t.prototype.mod=function(e,n){return U([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,(function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a}))},t.prototype.max=function(e,n){U(e,"max"),it("max",n,e.rank);for(var o=Ke(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Q(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var m=l[f+p];m>d&&(d=m)}c[h]=d}return s},t.prototype.maximum=function(e,n){return U([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,(function(o,a){return Math.max(o,a)}))},t.prototype.all=function(e,n){U(e,"all"),it("all",n,e.rank);for(var o=Ke(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Q(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var m=l[f+p];d=d&&m}c[h]=d}return s},t.prototype.any=function(e,n){U(e,"any"),it("any",n,e.rank);for(var o=Ke(e.shape,n),a=o[0],i=o[1],s=Ce(a,e.dtype),u=Q(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var m=l[f+p];d=d||m}c[h]=d}return s},t.prototype.squaredDifference=function(e,n){return U([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,(function(o,a){var i=o-a;return i*i}))},t.prototype.ceil=function(e){U(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){U(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){U(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){U(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){U(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){U(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){U(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){U(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){U(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){U(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){U(e,"relu");for(var n=Ce(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){U(e,"relu");for(var n=Ce(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return U([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,(function(o,a){return o<0?a*o:o}))},t.prototype.elu=function(e){U(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){U([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){U(e,"selu");for(var n=Ha,o=ja,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){U(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){U(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){U(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){U(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){U(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){U(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){U(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){U(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){U(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){U(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return U([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,(function(o,a){return Math.atan2(o,a)}))},t.prototype.sinh=function(e){U(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){U(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){U(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=lh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){U(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){U(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){U(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){U(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),U(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Qo(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){U([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=ae(o.outShape,e.dtype),d=e.strides[0],p=h?e.strides[1]:e.strides[2],m=h?e.strides[2]:1,v=h?1:e.strides[1],g=f.strides[0],x=h?f.strides[1]:f.strides[2],b=h?f.strides[2]:1,y=h?1:f.strides[1],w=this.readSync(e.dataId),C=this.readSync(n.dataId),S=f.values,k=0;k<o.batchSize;++k)for(var I=k*d,R=k*g,N=0;N<o.outHeight;++N)for(var A=R+N*x,L=N*o.strideHeight-l,O=0;O<a;O++){var B=L+O*s;if(!(B<0||B>=o.inHeight))for(var V=O*n.strides[0],z=I+B*p,W=0;W<o.outWidth;++W)for(var G=A+W*b,H=W*o.strideWidth-c,q=0;q<i;q++){var te=H+q*u;if(!(te<0||te>=o.inWidth))for(var ne=z+te*m,se=V+q*n.strides[1],ue=0;ue<o.inChannels;++ue){for(var le=w[ne+ue*v],pe=0;pe<o.outChannels;++pe)S[G+pe*y]+=le*C[se+pe];se+=o.outChannels}}}return f.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,d=o.padInfo.top,p=ae(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(n.dataId),g=p.values,x=0;x<o.batchSize;++x)for(var b=x*e.strides[0],y=x*p.strides[0],w=0;w<o.outDepth;++w)for(var C=y+w*p.strides[1],S=w*o.strideDepth-h,k=0;k<a;k++){var I=S+k*u;if(!(I<0||I>=o.inDepth))for(var R=k*n.strides[0],N=b+I*e.strides[1],A=0;A<o.outHeight;++A)for(var L=C+A*p.strides[2],O=A*o.strideHeight-d,B=0;B<i;B++){var V=O+B*c;if(!(V<0||V>=o.inHeight))for(var z=R+B*n.strides[1],W=N+V*e.strides[2],G=0;G<o.outWidth;++G)for(var H=L+G*o.outChannels,q=G*o.strideWidth-f,te=0;te<s;te++){var ne=q+te*l;if(!(ne<0||ne>=o.inWidth))for(var se=z+te*n.strides[2],ue=W+ne*o.inChannels,le=se,pe=0;pe<o.inChannels;++pe){for(var fe=m[ue+pe],ve=0;ve<o.outChannels;++ve)g[H+ve]+=fe*v[le+ve];le+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){U([e,n],"conv2dDerInput");for(var a=ae(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],f=c[2],d=o.batchSize,p=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,C=o.strideHeight,S=o.strideWidth,k=o.dataFormat,I=p-1-o.padInfo.top,R=m-1-o.padInfo.left,N=k==="channelsLast",A=a.strides[0],L=N?a.strides[1]:a.strides[2],O=N?a.strides[2]:1,B=N?1:a.strides[1],V=e.strides[0],z=N?e.strides[1]:e.strides[2],W=N?e.strides[2]:1,G=N?1:e.strides[1],H=0;H<d;++H)for(var q=0;q<v;++q)for(var te=0;te<g;++te)for(var ne=te-I,se=Math.max(0,Math.ceil(ne/C)),ue=Math.min(y,(p+ne)/C),le=0;le<x;++le){for(var pe=le-R,fe=Math.max(0,Math.ceil(pe/S)),ve=Math.min(w,(m+pe)/S),Te=0,de=se;de<ue;++de)for(var be=de*C-ne,ge=fe;ge<ve;++ge)for(var Se=V*H+z*de+W*ge,_e=l*(p-1-be)+h*(m-1-(ge*S-pe))+f*q,Ee=0;Ee<b;++Ee)Te+=s[Se+G*Ee]*u[_e+Ee];i[A*H+L*te+O*le+B*q]=Te}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=ae(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(e.dataId),d=e.strides,p=d[0],m=d[1],v=d[2],g=d[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=o.batchSize,I=o.filterDepth,R=o.filterHeight,N=o.filterWidth,A=o.inChannels,L=o.inDepth,O=o.inHeight,B=o.inWidth,V=o.outChannels,z=o.outDepth,W=o.outHeight,G=o.outWidth,H=o.strideDepth,q=o.strideHeight,te=o.strideWidth,ne=I-1-o.padInfo.front,se=R-1-o.padInfo.top,ue=N-1-o.padInfo.left,le=0;le<k;++le)for(var pe=0;pe<A;++pe)for(var fe=0;fe<L;++fe)for(var ve=fe-ne,Te=Math.max(0,Math.ceil(ve/H)),de=Math.min(z,(I+ve)/H),be=0;be<O;++be)for(var ge=be-se,Se=Math.max(0,Math.ceil(ge/q)),_e=Math.min(W,(R+ge)/q),Ee=0;Ee<B;++Ee){for(var It=Ee-ue,Rt=Math.max(0,Math.ceil(It/te)),ot=Math.min(G,(N+It)/te),An=0,Ut=Te;Ut<de;++Ut)for(var en=Ut*H-ve,Gt=Se;Gt<_e;++Gt)for(var Tn=Gt*q-ge,Ht=Rt;Ht<ot;++Ht)for(var Do=p*le+m*Ut+v*Gt+g*Ht,Nn=y*(I-1-en)+w*(R-1-Tn)+C*(N-1-(Ht*te-It))+S*pe,kt=0;kt<V;++kt)An+=f[Do+kt]*x[Nn+kt];i[u*le+c*fe+l*be+h*Ee+pe]=An}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){U([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=ae(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((h-x)/i)),y=Math.min(o.outWidth,(o.inWidth+h-x)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var S=0,k=0;k<o.batchSize;++k)for(var I=v;I<g;++I)for(var R=m+I*a-f,N=b;N<y;++N){var A=x+N*i-h;S+=c?d.get(k,R,A,w)*p.get(k,I,N,C):d.get(k,w,R,A)*p.get(k,C,I,N)}l.set(S,m,x,w,C)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=ae(o.filterShape,"float32"),f=h.values,d=h.strides,p=d[0],m=d[1],v=d[2],g=d[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=this.readSync(e.dataId),I=e.strides,R=I[0],N=I[1],A=I[2],L=I[3],O=o.padInfo.front,B=o.padInfo.left,V=o.padInfo.top,z=0;z<u;++z)for(var W=Math.max(0,Math.ceil((O-z)/a)),G=Math.min(o.outDepth,(o.inDepth+O-z)/a),H=z*p,q=0;q<c;++q)for(var te=Math.max(0,Math.ceil((V-q)/i)),ne=Math.min(o.outHeight,(o.inHeight+V-q)/i),se=q*m+H,ue=0;ue<l;++ue)for(var le=Math.max(0,Math.ceil((B-ue)/s)),pe=Math.min(o.outWidth,(o.inWidth+B-ue)/s),fe=ue*v+se,ve=0;ve<o.inChannels;++ve)for(var Te=ve*g+fe,de=0;de<o.outChannels;++de){for(var be=0,ge=0;ge<o.batchSize;++ge)for(var Se=ge*R,_e=ge*y,Ee=W;Ee<G;++Ee)for(var It=(z+Ee*a-O)*N+Se,Rt=Ee*w+_e,ot=te;ot<ne;++ot)for(var An=(q+ot*i-V)*A+It,Ut=ot*C+Rt,en=le;en<pe;++en){var Gt=en*S+Ut;be+=k[(ue+en*s-B)*L+An+ve]*x[Gt+de]}f[Te+de]=be}return h.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Qo(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){U([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=ae(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(n.dataId),m=f.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],x=v*f.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*f.strides[1],w=b*o.strideHeight-c,C=0;C<a;++C){var S=w+C*s;if(!(S<0||S>=o.inHeight))for(var k=C*n.strides[0],I=g+S*e.strides[1],R=0;R<o.outWidth;++R)for(var N=y+R*f.strides[2],A=R*o.strideWidth-l,L=0;L<i;++L){var O=A+L*u;if(!(O<0||O>=o.inWidth))for(var B=k+L*n.strides[1],V=I+O*o.inChannels,z=N,W=B,G=0;G<o.inChannels;++G){for(var H=d[V+G],q=0;q<h;++q)m[z+q]+=H*p[W+q];z+=h,W+=h}}}return f.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){U([e,n],"depthwiseConv2DDerInput");for(var a=ae(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(e.dataId),f=e.strides,d=f[0],p=f[1],m=f[2],v=this.readSync(n.dataId),g=n.strides,x=g[0],b=g[1],y=g[2],w=o.batchSize,C=o.filterHeight,S=o.filterWidth,k=o.inChannels,I=o.inHeight,R=o.inWidth,N=o.outChannels,A=o.outHeight,L=o.outWidth,O=o.strideHeight,B=o.strideWidth,V=C-1-o.padInfo.top,z=S-1-o.padInfo.left,W=N/k,G=0;G<w;++G)for(var H=0;H<k;++H)for(var q=0;q<I;++q)for(var te=q-V,ne=Math.max(0,Math.ceil(te/O)),se=Math.min(A,(C+te)/O),ue=0;ue<R;++ue){for(var le=ue-z,pe=Math.max(0,Math.ceil(le/B)),fe=Math.min(L,(S+le)/B),ve=0,Te=ne;Te<se;++Te)for(var de=Te*O-te,be=pe;be<fe;++be)for(var ge=d*G+p*Te+m*be,Se=x*(C-1-de)+b*(S-1-(be*B-le))+y*H,_e=0;_e<W;++_e)ve+=h[ge+(H*W+_e)]*v[Se+_e];i[u*G+c*q+l*ue+H]=ve}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){U([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=ae(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((h-m)/a)),g=Math.min(o.outHeight,(o.inHeight+h-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(o.outWidth,(o.inWidth+l-x)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/f),S=w%f,k=0,I=0;I<o.batchSize;++I)for(var R=v;R<g;++R)for(var N=m+R*a-h,A=b;A<y;++A){var L=x+A*i-l;k+=d.get(I,N,L,C)*p.get(I,R,A,w)}c.set(k,m,x,C,S)}return c.toTensor()},t.prototype.tile=function(e,n){return U(e,"tile"),Eu(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){U(e,"pad");var a=n.map((function(f,d){return f[0]+e.shape[d]+f[1]})),i=n.map((function(f){return f[0]})),s=this.bufferSync(e),u=ae(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),h=l.map((function(f,d){return f+i[d]}));u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},t.prototype.transpose=function(e,n){U(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=ae(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var f=s.locToIndex(l);s.values[f]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){U([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=ae(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){U([e],"batchToSpaceND");var a=n.reduce((function(h,f){return h*f})),i=Yr(e.shape,n,a),s=Qr(i.length,n.length),u=Jr(e.shape,n,a),c=hu(o,n.length),l=fu(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){U([e],"spaceToBatchND");var a=n.reduce((function(f,d){return f*d})),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=Yr(u.shape,n,a,!1),l=Qr(c.length,n.length,!1),h=Jr(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.pool=function(e,n,o){U(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),m=ae(n.outShape,e.dtype),v=m.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],x=n.outShape[2]*n.outShape[3],b=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*g,C=y*e.strides[0],S=0;S<n.inChannels;++S)for(var k=0;k<n.outHeight;++k)for(var I=k*a-h,R=Math.max(0,I),N=Math.min(n.inHeight,c+I),A=w+k*x,L=0;L<n.outWidth;++L){for(var O=L*i-f,B=Math.max(0,O),V=Math.min(n.inWidth,l+O),z=d,W=0,G=0,H=R;H<N;H+=s){for(var q=C+H*e.strides[1],te=B;te<V;te+=u){var ne=p[q+te*e.strides[2]+S];o==="max"&&ne>z?z=ne:o==="avg"&&(W+=ne,G++)}if(isNaN(z))break}v[A+L*b+S]=o==="avg"?W/G:z}return m.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=ae(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var m=0;m<n.inChannels;++m)for(var v=0;v<n.outHeight;++v){for(var g=v*a-h,x=g;x<0;)x+=s;for(var b=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var w=y*i-f,C=w;C<0;)C+=u;for(var S=Math.min(n.inWidth,l+w),k=Number.NEGATIVE_INFINITY,I=-1,R=x;R<b;R+=s)for(var N=R-g,A=C;A<S;A+=u){var L=A-w,O=d.get(p,R,A,m);O>k&&(k=O,I=N*l+L)}o.set(I,p,v,y,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){U([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,f=a.effectiveFilterWidth,d=f-1-a.padInfo.left,p=h-1-a.padInfo.top,m=ae(n.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),x=0;x<a.batchSize;++x)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-p,S=w-d,k=0,I=0;I<h;I+=c){var R=(C+I)/s;if(!(R<0||R>=a.outHeight||Math.floor(R)!==R))for(var N=0;N<f;N+=l){var A=(S+N)/u;if(!(A<0||A>=a.outWidth||Math.floor(A)!==A)){var L=h*f-1-v.get(x,R,A,b)===I*f+N?1:0;L!==0&&(k+=g.get(x,R,A,b)*L)}}}m.set(k,x,y,w,b)}return m.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){U([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,d=f-1-o.padInfo.left,p=h-1-o.padInfo.top,m=ae(n.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-p,S=w-d,k=0,I=0;I<h;I+=c){var R=(C+I)/a;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var N=0;N<f;N+=l){var A=(S+N)/i;A<0||A>=o.outWidth||Math.floor(A)!==A||(k+=g.get(x,R,A,b))}}m.set(k*v,x,y,w,b)}return m.toTensor()},t.prototype.pool3d=function(e,n,o){U(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=ae(n.outShape,e.dtype),y=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],S=n.outShape[3]*n.outShape[4],k=n.outShape[4],I=0;I<n.batchSize;++I)for(var R=I*w,N=I*e.strides[0],A=0;A<n.inChannels;++A)for(var L=0;L<n.outDepth;++L){for(var O=L*a-p,B=O;B<0;)B+=u;for(var V=Math.min(n.inDepth,h+O),z=R+L*C,W=0;W<n.outHeight;++W){for(var G=W*i-m,H=G;H<0;)H+=c;for(var q=Math.min(n.inHeight,f+G),te=z+W*S,ne=0;ne<n.outWidth;++ne){for(var se=ne*s-v,ue=se;ue<0;)ue+=l;for(var le=Math.min(n.inWidth,d+se),pe=te+ne*k,fe=g,ve=0,Te=0,de=B;de<V;de+=u){for(var be=N+de*e.strides[1],ge=H;ge<q;ge+=c){for(var Se=be+ge*e.strides[2],_e=ue;_e<le;_e+=l){var Ee=x[Se+_e*e.strides[3]+A];if(o==="max"&&Ee>fe?fe=Ee:o==="avg"&&(ve+=Ee,Te++),isNaN(fe))break}if(isNaN(fe))break}if(isNaN(fe))break}y[pe+A]=o==="avg"?ve/Te:fe}}}return b.toTensor()},t.prototype.avgPool3d=function(e,n){return U(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){U([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=p-1-o.padInfo.front,x=v-1-o.padInfo.left,b=m-1-o.padInfo.top,y=ae(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),S=0;S<o.batchSize;++S)for(var k=0;k<o.inChannels;++k)for(var I=0;I<o.inDepth;++I)for(var R=0;R<o.inHeight;++R)for(var N=0;N<o.inWidth;++N){for(var A=I-g,L=R-b,O=N-x,B=0,V=0;V<p;V+=h){var z=(A+V)/a;if(!(z<0||z>=o.outDepth||Math.floor(z)!==z))for(var W=0;W<m;W+=f){var G=(L+W)/i;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var H=0;H<v;H+=d){var q=(O+H)/s;q<0||q>=o.outWidth||Math.floor(q)!==q||(B+=C.get(S,z,G,q,k))}}}y.set(B*w,S,I,R,N,k)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return U(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=ae(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var b=0;b<n.inChannels;++b)for(var y=0;y<n.outDepth;++y){for(var w=y*a-p,C=w;C<0;)C+=u;for(var S=Math.min(n.inDepth,h+w),k=0;k<n.outHeight;++k){for(var I=k*i-m,R=I;R<0;)R+=c;for(var N=Math.min(n.inHeight,f+I),A=0;A<n.outWidth;++A){for(var L=A*s-v,O=L;O<0;)O+=l;for(var B=Math.min(n.inWidth,d+L),V=Number.NEGATIVE_INFINITY,z=-1,W=C;W<S;W+=u)for(var G=W-w,H=R;H<N;H+=c)for(var q=H-I,te=O;te<B;te+=l){var ne=te-L,se=g.get(x,W,H,te,b);se>=V&&(V=se,z=G*f*d+q*f+ne)}o.set(z,x,y,k,A,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){U([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,f=a.dilationWidth,d=a.effectiveFilterDepth,p=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=d-1-a.padInfo.front,g=m-1-a.padInfo.left,x=p-1-a.padInfo.top,b=ae(n.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),C=0;C<a.batchSize;++C)for(var S=0;S<a.inChannels;++S)for(var k=0;k<a.inDepth;++k)for(var I=0;I<a.inHeight;++I)for(var R=0;R<a.inWidth;++R){for(var N=k-v,A=I-x,L=R-g,O=0,B=0;B<d;B+=l){var V=(N+B)/s;if(!(V<0||V>=a.outDepth||Math.floor(V)!==V))for(var z=0;z<p;z+=h){var W=(A+z)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var G=0;G<m;G+=f){var H=(L+G)/c;if(!(H<0||H>=a.outWidth||Math.floor(H)!==H)){var q=d*p*m-1-y.get(C,V,W,H,S)===B*p*m+z*m+G?1:0;q!==0&&(O+=w.get(C,V,W,H,S)*q)}}}}b.set(O,C,k,I,R,S)}return b.toTensor()},t.prototype.cast=function(e,n){return bu(e,n,this)},t.prototype.reshape=function(e,n){return xa(e,n)},t.prototype.avgPool=function(e,n){return U(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){U(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),f=new Float32Array(Q([s,n,o,l])),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=0,v=d[0]/p[0],g=d[1]/p[1],x=0;x<s;x++)for(var b=0;b<n;b++)for(var y=v*b,w=Math.floor(y),C=y-w,S=Math.min(u-1,Math.ceil(y)),k=x*e.strides[0]+w*e.strides[1],I=x*e.strides[0]+S*e.strides[1],R=0;R<o;R++)for(var N=g*R,A=Math.floor(N),L=N-A,O=Math.min(c-1,Math.ceil(N)),B=k+A*e.strides[2],V=I+A*e.strides[2],z=k+O*e.strides[2],W=I+O*e.strides[2],G=0;G<l;G++){var H=h[B+G],q=h[V+G],te=H+(h[z+G]-H)*L,ne=te+(q+(h[W+G]-q)*L-te)*C;f[m++]=ne}return qe(f,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){U([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],f=l[2],d=new Float32Array(i*s*u*c),p=[o&&h>1?s-1:s,o&&f>1?u-1:u],m=[o&&h>1?h-1:h,o&&f>1?f-1:f],v=p[0]/m[0],g=p[1]/m[1],x=this.readSync(e.dataId),b=0,y=0;y<i;y++)for(var w=y*n.strides[0],C=0;C<h;C++)for(var S=C*v,k=Math.floor(S),I=Math.min(Math.ceil(S),s-1),R=w+k*n.strides[1],N=w+I*n.strides[1],A=S-k,L=1-A,O=0;O<f;O++)for(var B=O*g,V=Math.floor(B),z=Math.min(Math.ceil(B),u-1),W=B-V,G=1-W,H=R+V*n.strides[2],q=R+z*n.strides[2],te=N+V*n.strides[2],ne=N+z*n.strides[2],se=L*G,ue=L*W,le=A*G,pe=A*W,fe=0;fe<c;fe++){var ve=x[b++];d[H+fe]+=ve*se,d[q+fe]+=ve*ue,d[te+fe]+=ve*le,d[ne+fe]+=ve*pe}return Ze(d,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){U(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),f=new Float32Array(s*n*o*l),d=[a&&n>1?u-1:u,a&&o>1?c-1:c],p=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=d[0]/p[0],v=d[1]/p[1],g=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<n;y++)for(var w=m*y,C=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],S=0;S<o;S++)for(var k=v*S,I=C+Math.min(c-1,a?Math.round(k):Math.floor(k))*e.strides[2],R=0;R<l;R++){var N=h[I+R];f[g++]=N}return qe(f,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){U([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,h=l[1],f=l[2],d=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),m=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],g=m[0]/v[0],x=m[1]/v[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,C=2*Math.ceil(y)+2,S=0;S<i;S++)for(var k=S*n.strides[0],I=0;I<s;I++)for(var R=k+I*n.strides[1],N=Math.floor(I*b),A=Math.floor(N-w/2),L=0;L<u;L++)for(var O=R+L*n.strides[2],B=Math.floor(L*y),V=Math.floor(B-C/2),z=0;z<c;z++){for(var W=0,G=0;G<w;G++){var H=G+A;if(!(H<0||H>=h)){var q=k+H*e.strides[1],te=H*g;if(I===Math.min(s-1,o?Math.round(te):Math.floor(te)))for(var ne=0;ne<C;ne++){var se=ne+V;if(!(se<0||se>=f)){var ue=q+se*e.strides[2],le=se*x;L===Math.min(u-1,o?Math.round(le):Math.floor(le))&&(W+=p[ue+z])}}}}d[O+z]=W}return Ze(d,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){U([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=f.length,m=h.length,v=l.length,g=c.length,x=0,b=0,y=0,w=0,C=0;C<u.length;++C)d[C]=f[x++]+(u[C]-c[b++])*h[y++]/Math.sqrt(l[w++]+a),x>=p&&(x=0),b>=g&&(b=0),y>=m&&(y=0),w>=v&&(w=0);return Ze(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){U(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,h=new Float32Array(l);function f(v){for(var g=v%s,x=v-g+Math.max(0,g-n),b=v-g+Math.min(g+n,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var d=0;d<l;d++){var p=f(d),m=c[d]*Math.pow(o+a*p,-i);h[d]=m}return Ze(h,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){U(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),h=this.readSync(n.dataId),f=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,m=0;m<p;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),x=m-v+Math.min(c,v+a+1),b=0,y=g;y<x;y++)b+=Math.pow(h[y],2);for(b=s*b+i,y=g;y<x;y++){var w=-2*s*u*h[y]*f[m]/b;m===y&&(w+=Math.pow(b,-u)),w*=l[m],d[y]+=w}}return Ze(d,e.shape)},t.prototype.multinomial=function(e,n,o,a){U(e,"multinomial");for(var i=n?e:$t(e),s=i.shape[0],u=i.shape[1],c=Ce([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),f=0;f<s;++f){var d=f*u,p=new Float32Array(u-1);p[0]=h[d];for(var m=1;m<p.length;++m)p[m]=p[m-1]+h[d+m];for(var v=po(a.toString()),g=f*o,x=0;x<o;++x){var b=v();l[g+x]=p.length;for(var y=0;y<p.length;y++)if(b<p[y]){l[g+x]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){U(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return an(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return U(e,"nonMaxSuppression"),za(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=ae(e.shape,"float32"),s=ae(e.shape,"float32"),u=vt(e).as2D(o,a),c=Nt(e).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),f=c.slice([l,0],[1,a]),d=He(h,f),p=this.readSync(this.fftImpl(d,n).dataId),m=0;m<a;m++){var v=Xi(p,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return He(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=He(vt(i).div(j(a)),Nt(i).div(j(a)))),i}var s=this.readSync(e.dataId),u=(function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}})(this.fourierTransformByMatmul(s,a,n));return He(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=(function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}})(a),u=He(s.real,s.imag).as1D(),c=(function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}})(a),l=He(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=(function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:b,imag:y}})(n,o),f=He(h.real,h.imag).mul(l),d=u.add(f),p=u.sub(f),m=vt(d).concat(vt(p)),v=Nt(d).concat(Nt(p));return He(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=Hf(i*c,n,o),h=Xi(e,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),Gf(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){E(o==="NHWC",(function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o})),E(n>1,(function(){return"blockSize should be > 1 for depthToSpace, but was: "+n}));for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,h=u/(n*n),f=this.readSync(e.dataId),d=new Float32Array(a*c*l*h),p=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/n),x=v%n,b=0;b<l;++b)for(var y=Math.floor(b/n),w=(x*n+b%n)*h,C=0;C<h;++C){var S=C+w+u*(y+s*(g+i*m));d[p++]=f[S]}return Ze(d,[a,c,l,h])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=he(e.shape,n.shape),s=ae(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=rn(e.shape,i),h=rn(n.shape,i),f=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;++d)f[d]=a(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),m=this.bufferSync(n),v=function(g){var x=s.indexToLoc(g),b=x.slice(-e.rank);l.forEach((function(S){return b[S]=0}));var y=p.locToIndex(b),w=x.slice(-n.rank);h.forEach((function(S){return w[S]=0}));var C=m.locToIndex(w);f[g]=a(u[y],c[C])};for(d=0;d<f.length;++d)v(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=he(e.shape,n.shape),i=ae(a,"float32"),s=ae(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=rn(e.shape,a),h=rn(n.shape,a),f=i.values,d=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;p++){var m=p%u.length,v=p%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);f[p]=g.real,d[p]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),S=C.slice(-e.rank);l.forEach((function(A){return S[A]=0}));var k=x.locToIndex(S),I=C.slice(-n.rank);h.forEach((function(A){return I[A]=0}));var R=b.locToIndex(I),N=o(u[2*k],u[2*k+1],c[2*R],c[2*R+1]);f[w]=N.real,d[w]=N.imag};for(p=0;p<f.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return _u(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],h=u[2],f=u[3],d=n.shape[0],p=a[0],m=a[1],v=ae([d,p,m,f],"float32"),g=this.readSync(n.dataId),x=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,w=v.strides,C=0;C<d;C++){var S=4*C,k=g[S],I=g[S+1],R=g[S+2],N=g[S+3],A=x[C];if(!(A>=c))for(var L=p>1?(R-k)*(l-1)/(p-1):0,O=m>1?(N-I)*(h-1)/(m-1):0,B=0;B<p;B++){var V=p>1?k*(l-1)+B*L:.5*(k+R)*(l-1);if(V<0||V>l-1)for(var z=0;z<m;z++)for(var W=0;W<f;W++){var G=W+z*w[2]+B*w[1]+C*w[0];v.values[G]=s}else if(i==="bilinear"){var H=Math.floor(V),q=Math.ceil(V),te=V-H;for(z=0;z<m;z++)if((de=m>1?I*(h-1)+z*O:.5*(I+N)*(h-1))<0||de>h-1)for(W=0;W<f;W++)G=W+z*w[2]+B*w[1]+C*w[0],v.values[G]=s;else{var ne=Math.floor(de),se=Math.ceil(de),ue=de-ne;for(W=0;W<f;W++){var le=b[G=W+ne*y[2]+H*y[1]+A*y[0]],pe=b[G=W+se*y[2]+H*y[1]+A*y[0]],fe=b[G=W+ne*y[2]+q*y[1]+A*y[0]],ve=le+(pe-le)*ue,Te=fe+(b[G=W+se*y[2]+q*y[1]+A*y[0]]-fe)*ue;G=W+z*w[2]+B*w[1]+C*w[0],v.values[G]=ve+(Te-ve)*te}}}else for(z=0;z<m;++z){var de;if((de=m>1?I*(h-1)+z*O:.5*(I+N)*(h-1))<0||de>h-1)for(W=0;W<f;W++)G=W+z*w[2]+B*w[1]+C*w[0],v.values[G]=s;else{var be=Math.round(de),ge=Math.round(V);for(W=0;W<f;W++){var Se=W+be*y[2]+ge*y[1]+A*y[0],_e=W+z*w[2]+B*w[1]+C*w[0];v.values[_e]=b[Se]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=Zr(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(e,n,o,h,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=du(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return qe([],s,e.dtype);for(var h=new lr([u,c],e.dtype),f=this.readSync(n.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var m=[],v=0,g=0;g<a;g++){var x=f[p*a+g];v+=x*l[g],m.push(x)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var b=0;b<c;b++)h.values[p*c+b]=d[v*c+b]}return h.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=Zr(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=j(0);return this.scatter(e,n,o,l,u,s,i,c,h,!0)},t.prototype.fill=function(e,n,o){var a=Gr(o=o||mr(n),Q(e));return a.fill(n),T.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=Gr(e.dtype,Q(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return wu(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,h){var f=[a/i,i],d=this.readSync(e.dataId),p=this.readSync(n.dataId);if(a===0)return qe([],o,n.dtype);var m=new lr(f,n.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],x=0,b=0;b<u;b++){var y=d[v*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)h?m.values[x*i+w]+=p[v*i+w]:m.values[x*i+w]=n.rank===0?p[0]:p[v*i+w]}return m.toTensor().reshape(o)},t})(yu);T.registerBackend("cpu",(function(){return new lg}),1);for(var Jo=0,ms=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e;U(a,"NonMaxSuppressionWithScore");var d=Va(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;U(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:dr,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;U([o,a],dr);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=(function(f,d,p,m,v,g){var x=he(f,d),b=x.length,y=Mt(x),w=cr(v,Q(x)),C=f.length,S=d.length,k=Mt(f),I=Mt(d),R=rn(f,x),N=rn(d,x);if(R.length+N.length===0)for(var A=0;A<w.length;++A)w[A]=g(p[A%p.length],m[A%m.length]);else{var L=function(O){var B=xh(O,b,y),V=B.slice(-C);R.forEach((function(H){return V[H]=0}));var z=Wi(V,C,k),W=B.slice(-S);N.forEach((function(H){return W[H]=0}));var G=Wi(W,S,I);w[O]=g(p[z],m[G])};for(A=0;A<w.length;++A)L(A)}return[w,x]})(o.shape,a.shape,s,u,o.dtype,(function(f,d){var p=f-d;return p*p})),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];Jo<ms.length;Jo++)qs(ms[Jo]);var Pn,hg=function(r){this.variableNames=["A"];var t=$e(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},fg=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=$e(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var Zo=0,gs=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,a];(s||i)&&(Pn==null&&(Pn=document.createElement("canvas").getContext("2d")),Pn.canvas.width=c,Pn.canvas.height=l,Pn.drawImage(o,0,0,c,l),o=Pn.canvas);var d=e.makeTensorInfo(h,"int32");e.texData.get(d.dataId).usage=ut.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=M().getBool("WEBGL_PACK")?new fg(f):new hg(f),m=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;Kr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e,d=Va(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new ie(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:dr,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new qt("return (a - b) * (a - b);",o.shape,a.shape):new De("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];Zo<gs.length;Zo++)qs(gs[Zo]);for(var ea=0,ys=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:dr,gradFunc:function(r,t){var e=t[0],n=t[1],o=j(2);return{a:function(){return Qe(r,Qe(o,We(e,n)))},b:function(){return Qe(r,Qe(o,We(n,e)))}}}}];ea<ys.length;ea++)uh(ys[ea]);var dg=(function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r})();M().get("IS_BROWSER")&&M().setPlatform("browser",new dg);var ta,pg=function(){return require("node-fetch")},vg=(function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return M().global.fetch!=null?M().global.fetch(t,e):(ta==null&&(ta=pg()),ta(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r})();M().get("IS_NODE")&&M().setPlatform("node",new vg);var Ca={float32:4,int32:4,uint16:2,uint8:1,bool:1},io=4;function vc(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Q(l),f=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Ca[d.dtype],m=r.slice(n,n+h*p),v=d.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")f=Float32Array.from(v,(function(C){return C*d.scale+d.min}));else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(v,(function(C){return Math.round(C*d.scale+d.min)}))}n+=h*p}else if(c==="string"){var g=Q(s.shape);f=[];for(var x=0;x<g;x++){var b=new Uint32Array(r.slice(n,n+io))[0];n+=io;var y=new Uint8Array(r.slice(n,n+b));f.push(y),n+=b}}else{var w=Ca[c];if(m=r.slice(n,n+h*w),c==="float32")f=new Float32Array(m);else if(c==="int32")f=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(m)}n+=h*w}e[u]=qe(f,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function mg(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach((function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)}));var n=new Uint8Array(t),o=0;return e.forEach((function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength})),n.buffer}var _a=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function xs(r){return _a?Buffer.byteLength(r):new Blob([r]).size}function ii(r){var t=0;r.forEach((function(o){t+=o.byteLength}));var e=new Uint8Array(t),n=0;return r.forEach((function(o){e.set(new Uint8Array(o),n),n+=o.byteLength})),e.buffer}function bs(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function _r(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:xs(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:xs(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var ct=(function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach((function(a){var i=a(t,n);i!==null&&o.push(i)})),o},r})(),jn="://",sn=(function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){E(t!=null,(function(){return"scheme must not be undefined or null."})),t.endsWith(jn)&&(t=t.slice(0,t.indexOf(jn))),E(t.length>0,(function(){return"scheme must not be an empty string."}));var n=r.getInstance();E(n.managers[t]==null,(function(){return"A model store manager is already registered for scheme '"+t+"'."})),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r})();function zr(r){if(r.indexOf(jn)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+sn.getSchemes().join(","));return{scheme:r.split(jn)[0],path:r.split(jn)[1]}}function ws(r,t,e){return e===void 0&&(e=!1),$(this,void 0,void 0,(function(){var n,o,a,i,s,u,c,l,h;return Y(this,(function(f){switch(f.label){case 0:return E(r!==t,(function(){return"Old path and new path are the same: '"+r+"'"})),E((n=ct.getLoadHandlers(r)).length>0,(function(){return"Copying failed because no load handler is found for source URL "+r+"."})),E(n.length<2,(function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."})),o=n[0],E((a=ct.getSaveHandlers(t)).length>0,(function(){return"Copying failed because no save handler is found for destination URL "+t+"."})),E(a.length<2,(function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."})),i=a[0],s=zr(r).scheme,u=zr(r).path,c=s===zr(r).scheme,[4,o.load()];case 1:return l=f.sent(),e&&c?[4,sn.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,i.save(l)];case 4:return h=f.sent(),!e||c?[3,6]:[4,sn.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}}))}))}var wn="models_store",on="model_info_store";function mc(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Ea(r){var t=r.result;t.createObjectStore(wn,{keyPath:"modelPath"}),t.createObjectStore(on,{keyPath:"modelPath"})}var qn=(function(){function r(t){if(this.indexedDB=mc(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return $(this,void 0,void 0,(function(){return Y(this,(function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]}))}))},r.prototype.load=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(t){return[2,this.databaseAction(this.modelPath)]}))}))},r.prototype.databaseAction=function(t,e){var n=this;return new Promise((function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Ea(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(wn,"readonly"),c=u.objectStore(wn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=_r(e),f=s.transaction(on,"readwrite"),d=f.objectStore(on),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:h});p.onsuccess=function(){var m=(l=s.transaction(wn,"readwrite")).objectStore(wn).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:h});m.onsuccess=function(){return o({modelArtifactsInfo:h})},m.onerror=function(v){var g=(d=f.objectStore(on)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(x){return s.close(),a(m.error)}}},p.onerror=function(m){return s.close(),a(p.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}}))},r.URL_SCHEME="indexeddb://",r})(),Cs=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(qn.URL_SCHEME)?(t=r.slice(qn.URL_SCHEME.length),new qn(t)):null;var t};ct.registerSaveRouter(Cs),ct.registerLoadRouter(Cs);var gg=(function(){function r(){this.indexedDB=mc()}return r.prototype.listModels=function(){return $(this,void 0,void 0,(function(){var t=this;return Y(this,(function(e){return[2,new Promise((function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Ea(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(on,"readonly"),u=s.objectStore(on).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}}))]}))}))},r.prototype.removeModel=function(t){return $(this,void 0,void 0,(function(){var e=this;return Y(this,(function(n){var o;return t=(o=t).startsWith(qn.URL_SCHEME)?o.slice(qn.URL_SCHEME.length):o,[2,new Promise((function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Ea(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(on,"readwrite"),h=l.objectStore(on),f=h.get(t);f.onsuccess=function(){if(f.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=h.delete(t),p=function(){var m=(u=c.transaction(wn,"readwrite")).objectStore(wn).delete(t);m.onsuccess=function(){return a(f.result.modelArtifactsInfo)},m.onerror=function(v){return i(f.error)}};d.onsuccess=p,d.onerror=function(m){return p(),c.close(),i(f.error)}},f.onerror=function(d){return c.close(),i(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}}))]}))}))},r})();if(M().getBool("IS_BROWSER"))try{sn.registerManager(qn.URL_SCHEME,new gg)}catch{}var Kt="/",zn="tensorflowjs_models",gc="info",yg="model_topology",xg="weight_specs",bg="weight_data",wg="model_metadata";function yc(r){return{info:[zn,r,gc].join(Kt),topology:[zn,r,yg].join(Kt),weightSpecs:[zn,r,xg].join(Kt),weightData:[zn,r,bg].join(Kt),modelMetadata:[zn,r,wg].join(Kt)}}function Cg(r){var t=r.split(Kt);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(Kt)}var Kn=(function(){function r(t){if(!M().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=yc(this.modelPath)}return r.prototype.save=function(t){return $(this,void 0,void 0,(function(){var e,n,o;return Y(this,(function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=_r(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,(function(i){if(_a)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)})(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]}))}))},r.prototype.load=function(){return $(this,void 0,void 0,(function(){var t,e,n,o,a,i,s;return Y(this,(function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=(function(c){if(_a){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),d=0;d<h.length;++d)f.set([h.charCodeAt(d)],d);return f.buffer})(s),[2,e]}))}))},r.URL_SCHEME="localstorage://",r})(),_s=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Kn.URL_SCHEME)?(t=r.slice(Kn.URL_SCHEME.length),new Kn(t)):null;var t};ct.registerSaveRouter(_s),ct.registerLoadRouter(_s);var _g=(function(){function r(){E(M().getBool("IS_BROWSER"),(function(){return"Current environment is not a web browser"})),E(typeof window>"u"||window.localStorage!==void 0,(function(){return"Current browser does not appear to support localStorage"})),this.LS=window.localStorage}return r.prototype.listModels=function(){return $(this,void 0,void 0,(function(){var t,e,n,o,a,i;return Y(this,(function(s){for(t={},e=zn+Kt,n=Kt+gc,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=Cg(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]}))}))},r.prototype.removeModel=function(t){return $(this,void 0,void 0,(function(){var e,n;return Y(this,(function(o){var a;if(t=(a=t).startsWith(Kn.URL_SCHEME)?a.slice(Kn.URL_SCHEME.length):a,e=yc(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]}))}))},r})();if(M().getBool("IS_BROWSER"))try{sn.registerManager(Kn.URL_SCHEME,new _g)}catch{}var Eg="model",Ig=".json",Rg=".weights.bin";function Es(r){return new Promise((function(t){return setTimeout(t)})).then(r)}var na=(function(){function r(t){if(!M().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Eg),this.modelTopologyFileName=t+Ig,this.weightDataFileName=t+Rg}return r.prototype.save=function(t){return $(this,void 0,void 0,(function(){var e,n,o,a,i,s;return Y(this,(function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Es((function(){return i.dispatchEvent(new MouseEvent("click"))}))];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Es((function(){return s.dispatchEvent(new MouseEvent("click"))}))]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:_r(t)}]}}))}))},r.URL_SCHEME="downloads://",r})(),kg=(function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return $(this,void 0,void 0,(function(){var t,e,n=this;return Y(this,(function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise((function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=n.checkManifestAndWeightFiles(h,e)}catch(v){return void i(v)}var d=[],p=[],m=[];h.forEach((function(v){v.paths.forEach((function(g){p.push(g),m.push(null)})),d.push.apply(d,v.weights)})),h.forEach((function(v){v.paths.forEach((function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=p.indexOf(g);m[w]=y,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:d,weightData:ii(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(f[g])}))}))}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)}))]}))}))},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map((function(u){return bs(u.name)})),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach((function(u){var c=bs(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]}));if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r})();function Is(r,t,e,n){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,(function(){return"promises must be a none empty array"}))})(r),(function(a,i){E(a>=0&&a<=1,(function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a})),E(i>=0&&i<=1,(function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i})),E(i>=a,(function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i}))})(e=e??0,n=n??1);var o=0;return Promise.all(r.map((function(a){return a.then((function(i){var s=e+ ++o/r.length*(n-e);return t(s),i})),a})))}function xc(r,t){return $(this,void 0,void 0,(function(){var e,n,o,a,i,s,u,c,l;return Y(this,(function(h){switch(h.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?M().platform.fetch:t.fetchFunc,n=r.map((function(f){return e(f,t.requestInit,{isBinary:!0})})),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=h.sent(),[3,4];case 2:return[4,Is(n,t.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map((function(f){return f.arrayBuffer()})),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,Is(s,t.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}}))}))}function Rs(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),$(t,void 0,void 0,(function(){var a,i,s,u,c,l,h,f,d,p;return Y(this,(function(m){switch(m.label){case 0:if(a=e.map((function(){return!1})),i={},s=o!=null?o.map((function(){return!1})):[],u=[],e.forEach((function(v,g){var x=0;v.weights.forEach((function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=Ca[y]*Q(b.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach((function(S,k){S===b.name&&(C(),s[k]=!0)})):C(),u.push(b.name),x+=w}))})),!s.every((function(v){return v})))throw c=o.filter((function(v,g){return!s[g]})),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce((function(v,g,x){return g&&v.push(x),v}),[]),h=[],l.forEach((function(v){e[v].paths.forEach((function(g){var x=n+(n.endsWith("/")?"":"/")+g;h.push(x)}))})),[4,r(h)];case 1:return f=m.sent(),d={},p=0,l.forEach((function(v){for(var g=e[v].paths.length,x=0,b=0;b<g;b++)x+=f[p+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),C=0,S=0;S<g;S++){var k=new Uint8Array(f[p+S]);w.set(k,C),C+=k.byteLength}i[v].forEach((function(I){var R=vc(y.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var N in R)d[N]=R[N]})),p+=g})),[2,d]}}))}))}}ct.registerSaveRouter((function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(na.URL_SCHEME)?(function(t){return t===void 0&&(t="model"),new na(t)})(r.slice(na.URL_SCHEME.length)):null}));var bc=(function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",(function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"})),this.fetch=e.fetchFunc):this.fetch=M().platform.fetch,E(t!=null&&t.length>0,(function(){return"URL path for http must not be null, undefined or empty."})),Array.isArray(t)&&E(t.length===2,(function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."})),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return $(this,void 0,void 0,(function(){var e,n,o,a;return Y(this,(function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:_r(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}}))}))},r.prototype.load=function(){return $(this,void 0,void 0,(function(){var t,e,n,o,a,i,s,u,c,l,h,f;return Y(this,(function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:f=d.sent(),l=f[0],h=f[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}}))}))},r.prototype.loadWeights=function(t){return $(this,void 0,void 0,(function(){var e,n,o,a,i,s,u,c,l,h,f;return Y(this,(function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=(function(p){var m=p.lastIndexOf("/"),v=p.lastIndexOf("?"),g=p.substring(0,m),x=v>m?p.substring(v):"";return[g+"/",x]})(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach((function(p){p.paths.forEach((function(m){h.push(i+m+a)}))})),[4,xc(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=d.sent(),[2,[s,ii(f)]]}}))}))},r.URL_SCHEME_REGEX=/^https?:\/\//,r})();function Ia(r){return r.match(bc.URL_SCHEME_REGEX)!=null}var ks=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every((function(e){return Ia(e)})):Ia(r))?Ra(r,{onProgress:t}):null};function Ra(r,t){return new bc(r,t)}ct.registerSaveRouter(ks),ct.registerLoadRouter(ks);var ra=(function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(t){return[2,this.modelArtifacts]}))}))},r})(),Sg=(function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return $(this,void 0,void 0,(function(){return Y(this,(function(e){return[2,this.saveHandler(t)]}))}))},r})(),wc=Object.freeze({browserFiles:function(r){return new kg(r)},browserHTTPRequest:function(r,t){return Ra(r,t)},concatenateArrayBuffers:ii,decodeWeights:vc,encodeWeights:function(r,t){return $(this,void 0,void 0,(function(){var e,n,o,a,i,s=this;return Y(this,(function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map((function(c){return c.name})):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var d=new Promise((function(p){return $(s,void 0,void 0,(function(){var m,v,g,x,b,y,w;return Y(this,(function(C){switch(C.label){case 0:return[4,h.bytes()];case 1:for(m=C.sent(),v=m.reduce((function(S,k){return S+k.length}),0)+io*m.length,g=new Uint8Array(v),x=0,b=0;b<m.length;b++)y=m[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=io,g.set(y,x),x+=y.length;return p(g),[2]}}))}))}));n.push(d)}else n.push(h.data());t!=null&&(f.group=t),e.push(f)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:mg(u.sent()),specs:e}]}}))}))},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new ra(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ra({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ra({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return ct.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:_r,getSaveHandlers:function(r){return ct.getSaveHandlers(r)},http:Ra,isHTTPScheme:Ia,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),$(this,void 0,void 0,(function(){return Y(this,(function(o){return[2,Rs((function(a){return xc(a,{requestInit:n})}))(r,t,e)]}))}))},registerLoadRouter:function(r){return ct.registerLoadRouter(r)},registerSaveRouter:function(r){return ct.registerSaveRouter(r)},weightsLoaderFactory:Rs,withSaveHandler:function(r){return new Sg(r)},copyModel:function(r,t){return $(this,void 0,void 0,(function(){return Y(this,(function(e){return[2,ws(r,t,!1)]}))}))},listModels:function(){return $(this,void 0,void 0,(function(){var r,t,e,n,o,a,i;return Y(this,(function(s){switch(s.label){case 0:r=sn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,sn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+jn+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}}))}))},moveModel:function(r,t){return $(this,void 0,void 0,(function(){return Y(this,(function(e){return[2,ws(r,t,!0)]}))}))},removeModel:function(r){return $(this,void 0,void 0,(function(){var t;return Y(this,(function(e){return t=zr(r),[2,sn.getManager(t.scheme).removeModel(t.path)]}))}))}}),Mn;D({confusionMatrix_:function(r,t,e){var n=_(r,"labels","confusionMatrix"),o=_(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),(function(){return"If provided, numClasses must be a positive integer, but got "+e})),E(n.rank===1,(function(){return"Expected the rank of labels to be 1, but got "+n.rank})),E(o.rank===1,(function(){return"Expected the rank of predictions to be 1, but got "+o.rank})),E(n.shape[0]===o.shape[0],(function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."})),E(e>0&&Number.isInteger(e),(function(){return"numClasses is required to be a positive integer, but got "+e}));var a=ga(n.asType("int32"),e),i=ga(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}});var Dg=D({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(js("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:n||e?s=r.data:(a||o)&&(Mn==null&&(Mn=document.createElement("canvas").getContext("2d")),Mn.canvas.width=l,Mn.canvas.height=h,Mn.drawImage(r,0,0,l,h),s=Mn.getImageData(0,0,l,h).data),t===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*t);for(var d=0;d<f;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return Ma(u,[h,l,t],"int32")}}),si=Object.freeze({toPixels:function(r,t){return $(this,void 0,void 0,(function(){var e,n,o,a,i,s,u,c,l,h,f,d,p,m,v,g,x,b,y,w,C,S,k;return Y(this,(function(I){switch(I.label){case 0:if(e=_(r,"img","toPixels"),r instanceof Ie||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=I.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),h=l[0],f=l[1],d=h[0],p=f[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)x=void 0,b=void 0,y=void 0,w=void 0,i===1?(x=s[g]*m,b=s[g]*m,y=s[g]*m,w=255):i===3?(x=s[3*g]*m,b=s[3*g+1]*m,y=s[3*g+2]*m,w=255):i===4&&(x=s[4*g]*m,b=s[4*g+1]*m,y=s[4*g+2]*m,w=s[4*g+3]*m),v[(C=4*g)+0]=Math.round(x),v[C+1]=Math.round(b),v[C+2]=Math.round(y),v[C+3]=Math.round(w);return t!=null&&(t.width=a,t.height=o,S=t.getContext("2d"),k=new ImageData(v,a,o),S.putImageData(k,0,0)),e!==r&&e.dispose(),[2,v]}}))}))},fromPixels:Dg}),Ag=(function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r})(),Tg=(function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r})();function Sn(r){E(r.className!=null,(function(){return"Class being registered does not have the static className property defined."})),E(typeof r.className=="string",(function(){return"className is required to be a string, but got type "+typeof r.className})),E(r.className.length>0,(function(){return"Class being registered has an empty-string as its className, which is disallowed."})),Tg.register(r)}var Dn=(function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return _t(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map((function(c){return{name:c.name,tensor:s[c.name]}}));this.applyGradients(u)}else this.applyGradients(s);return tt(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Vf(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&tt(this.iterations_)},t.prototype.saveIterations=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:j(this.iterations_,"int32")}]}))}))},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){return Y(this,(function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())}))}))},t.prototype.extractIterations=function(e){return $(this,void 0,void 0,(function(){var n;return Y(this,(function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}}))}))},t})(Ag);Object.defineProperty(Dn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Ng=(function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=T.backend.epsilon()),a}return _t(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:X((function(){return me(i).variable(!1)}))}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:X((function(){return me(i).variable(!1)}))});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;X((function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),f=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(f);var d=h.mul(-n.learningRate).add(i);i.assign(d)}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(tt(this.accumulatedGrads.map((function(e){return e.variable}))),tt(this.accumulatedUpdates.map((function(e){return e.variable}))))},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){var e;return Y(this,(function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){var n;return Y(this,(function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),this.accumulatedUpdates=e.slice(n,2*n).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t})(Dn);Sn(Ng);var Fg=(function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return _t(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:X((function(){return Ot(i.shape,n.initialAccumulatorValue).variable(!1)}))});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;X((function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&tt(this.accumulatedGrads.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map((function(n){return{name:n.originalName,tensor:n.variable}})))]}}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){return Y(this,(function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map((function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t})(Dn);Sn(Fg);var Pg=(function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],X((function(){i.accBeta1=j(n).variable(),i.accBeta2=j(o).variable()})),a==null&&(i.epsilon=T.backend.epsilon()),i}return _t(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map((function(a){return a.name})):Object.keys(e);X((function(){var a=We(1,n.accBeta1),i=We(1,n.accBeta2);o.forEach((function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:X((function(){return me(c).variable(!1)}))}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:X((function(){return me(c).variable(!1)}))});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedSecondMoment[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2).add(l.square().mul(1-n.beta2)),m=d.div(a),v=p.div(i);h.assign(d),f.assign(p);var g=m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}})),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))})),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&tt(this.accumulatedFirstMoment.map((function(e){return e.variable}))),this.accumulatedSecondMoment!=null&&tt(this.accumulatedSecondMoment.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){var e;return Y(this,(function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){var n,o=this;return Y(this,(function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),X((function(){o.accBeta1.assign(oo(o.beta1,o.iterations_+1)),o.accBeta2.assign(oo(o.beta2,o.iterations_+1))})),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),this.accumulatedSecondMoment=e.slice(n,2*n).map((function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t})(Dn);Sn(Pg);var Mg=(function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],X((function(){s.iteration=j(0).variable(),s.accBeta1=j(n).variable()})),a==null&&(s.epsilon=T.backend.epsilon()),s}return _t(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map((function(a){return a.name})):Object.keys(e);X((function(){var a=We(1,n.accBeta1),i=yt(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach((function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:me(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:me(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedWeightedInfNorm[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2),m=l.abs(),v=p.maximum(m);h.assign(d),f.assign(v);var g=i.div(a).mul(d.div(v.add(n.epsilon))).add(c);c.assign(g)}})),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))})),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&tt(this.accumulatedFirstMoment.map((function(e){return e.variable}))),this.accumulatedWeightedInfNorm!=null&&tt(this.accumulatedWeightedInfNorm.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(e){throw new Error("getWeights() is not implemented for Adamax yet.")}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){return Y(this,(function(n){throw new Error("setWeights() is not implemented for Adamax yet.")}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t})(Dn);Sn(Mg);var Cc=(function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return _t(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=T.registeredVariables[o];X((function(){var u=n.c.mul(i).add(s);s.assign(u)}))}})),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=ef(j(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){return Y(this,(function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t})(Dn);Sn(Cc);var Og=(function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=j(a.momentum),a}return _t(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,a){var i=T.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:X((function(){return me(i).variable(!1)}))});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&X((function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)}))})),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&tt(this.accumulations.map((function(e){return e.variable})))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){return Y(this,(function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map((function(n){return{name:n.originalName,tensor:n.variable}})))]}}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){return Y(this,(function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map((function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t})(Cc);Sn(Og);var Bg=(function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return _t(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map((function(o){return o.name})):Object.keys(e)).forEach((function(o,a){var i=T.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:X((function(){return me(i).variable(!1)}))}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:X((function(){return me(i).variable(!1)}))}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:X((function(){return me(i).variable(!1)}))});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;X((function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[a].variable,f=h.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(f.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(d);var p=i.sub(d);i.assign(p)}else{var m=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())),u.assign(m),c.assign(d),p=i.sub(d),i.assign(p)}}))}})),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&tt(this.accumulatedMeanSquares.map((function(e){return e.variable}))),this.accumulatedMeanGrads!=null&&this.centered&&tt(this.accumulatedMeanGrads.map((function(e){return e.variable}))),this.accumulatedMoments!=null&&tt(this.accumulatedMoments.map((function(e){return e.variable})))},t.prototype.getWeights=function(){return $(this,void 0,void 0,(function(){var e;return Y(this,(function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map((function(o){return{name:o.originalName,tensor:o.variable}})))]}}))}))},t.prototype.setWeights=function(e){return $(this,void 0,void 0,(function(){var n;return Y(this,(function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),this.accumulatedMoments=e.slice(n,2*n).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map((function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}))),[2]}}))}))},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t})(Dn);Sn(Bg);Ie.prototype.squaredDifference=function(r){return Bu(this,r)},P=cg;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ka=function(r,t){return ka=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},ka(r,t)};function oe(r,t){ka(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Xe=function(){return Xe=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},Xe.apply(this,arguments)};function Z(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(h){i(h)}}function u(l){try{c(n.throw(l))}catch(h){i(h)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function ee(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function ur(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var Xn=(function(){function r(t,e){if(!Cn(t)||!Cn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r})();function Co(r,t){return r instanceof Ie&&r.shape.length===t}function Lg(r){return Co(r,2)}function _o(r){return Co(r,3)}function un(r){return Co(r,4)}function Wg(r){return r%1!==0}function Ss(r){return r%2===0}function zg(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Ds(r){return r&&r.width&&r.height}function Vg(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new Xn(Math.round(e*o),Math.round(n*o))}function ui(r){return r.reduce(function(t,e){return t.add(e)},new ye(0,0)).div(new ye(r.length,r.length))}function pr(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function Cn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function As(r){return Cn(r)&&0<=r&&r<=1}var ye=(function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r})(),ln=(function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(Cn),a=[n.x,n.y,n.width,n.height].every(Cn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Cn)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new ye(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new ye(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new ye(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new ye(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=Ds(t)?t.width:t,n=Ds(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,h=s-c,f=Math.min(l,t-u),d=Math.min(h,e-c);return new r({x:u,y:c,width:f,height:d}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,h=this.right,f=this.bottom;return h>e&&(s=-h+e+n,h=e),f>t&&(u=-f+t+o,f=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:f,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r})(),Eo=(function(r){oe(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t})(ln),_c=(function(){function r(t,e,n,o,a){this._imageDims=new Xn(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new ln(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new ln(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r})(),Vt=(function(r){oe(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t})(_c);function Ug(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function Gg(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new Eo(n,o,a,i)}function vr(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],f=r[s],d=r[h];c.push(Ug(f,d,n))}o=o.filter(function(p,m){return c[m]<=e})};o.length>0;)i();return a}function Er(r,t){return X(function(){var e=t[0],n=t[1],o=t[2],a=Ot(ur(r.shape.slice(0,3),[1]),e),i=Ot(ur(r.shape.slice(0,3),[1]),n),s=Ot(ur(r.shape.slice(0,3),[1]),o),u=Oe([a,i,s],3);return We(r,u)})}function Hg(r,t){return t===void 0&&(t=!1),X(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Ot(p,0)},c=u(i),l=a-c.shape[s],h=t&&l?u(l):null,f=[h,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Oe(f,s)})}function oa(r){return 1/(1+Math.exp(-r))}var ci=(function(r){oe(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t})(ln),jg=.5,qg=.43,Kg=.45,so=(function(){function r(t,e,n){n===void 0&&(n=new ye(0,0));var o=e.width,a=e.height;this._imgDims=new Xn(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new ye(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new ye(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new ye(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new ye(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof Vt?t.box.floor():new ln(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(h){return o.sub(h).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/Kg),u=ui(t),c=Math.floor(Math.max(0,u.x-jg*s)),l=Math.floor(Math.max(0,u.y-qg*s));return new ci(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=Gg(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r})(),Xg=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],ui([e[3],e[4]])]},t})(so),$g=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(ui)},t})(so),Ts=(function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+zg(this.distance)+")":"")},r})(),Ns=(function(r){oe(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(ln.assertIsValidBox(e,n),!Cn(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t})(ln),Mr=(function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r})();(function(r){oe(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(Ns.assertIsValidLabeledBox(e,n),!As(e.score)||!As(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Ns);function Yg(r){return r.detection instanceof Vt}function li(r,t){var e={detection:t};return Object.assign({},r,e)}function Ec(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function Ic(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Rc(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=Ic();return Xe({Canvas:r||(function(){function i(){}return i})(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||(function(){function i(){}return i})(),Image:t||(function(){function i(){}return i})(),ImageData:global.ImageData||(function(){function i(){}return i})(),Video:global.HTMLVideoElement||(function(){function i(){}return i})(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function kc(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function Sc(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Me;function Qg(){if(!Me)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Me}function Sa(r){Me=r}function hi(){kc()&&Sa(Ec()),Sc()&&Sa(Rc())}function Jg(r){if(Me||hi(),!Me)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Me.Canvas:t,n=r.Image,o=n===void 0?Me.Image:n;Me.Canvas=e,Me.Image=o,Me.createCanvasElement=r.createCanvasElement||(function(){return new e}),Me.createImageElement=r.createImageElement||(function(){return new o}),Me.ImageData=r.ImageData||Me.ImageData,Me.Video=r.Video||Me.Video,Me.fetch=r.fetch||Me.fetch,Me.readFile=r.readFile||Me.readFile}var Je={getEnv:Qg,setEnv:Sa,initialize:hi,createBrowserEnv:Ec,createFileSystem:Ic,createNodejsEnv:Rc,monkeyPatch:Jg,isBrowser:kc,isNodejs:Sc};hi();function Dc(r){return!Je.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function En(r){var t=Je.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=Dc(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var Fs;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(Fs||(Fs={}));function Ac(r){var t=Je.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function Zg(r){return new Promise(function(t,e){if(r instanceof Je.getEnv().Canvas||Ac(r))return t();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function Tc(r){var t=Je.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new Xn(r.naturalWidth,r.naturalHeight):r instanceof n?new Xn(r.videoWidth,r.videoHeight):new Xn(r.width,r.height)}function Io(r){var t=r.width,e=r.height,n=Je.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function fi(r,t){var e=Je.getEnv().ImageData;if(!(r instanceof e)&&!Ac(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=Tc(r),o=n.width,a=n.height,i=Io({width:o,height:a});return r instanceof e?En(i).putImageData(r,0,0):En(i).drawImage(r,0,0,o,a),i}function e0(r,t){return Z(this,void 0,void 0,function(){var e,n,o,a,i,s;return ee(this,function(u){switch(u.label){case 0:return e=Je.getEnv().createCanvasElement(),n=r.shape.slice(un(r)?1:0),o=n[0],a=n[1],i=n[2],s=X(function(){return r.as3D(o,a,i).toInt()}),[4,si.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Ps(r){var t=Je.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function t0(r,t,e){e===void 0&&(e=!1);var n=Je.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=Tc(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=Io({width:t,height:t}),h=r instanceof a?r:fi(r),f=Math.abs(u-c)/2,d=e&&u<c?f:0,p=e&&c<u?f:0;return En(l).drawImage(h,d,p,u,c),l}var uo=(function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(_o(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(un(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof Je.getEnv().Canvas?o:fi(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return pr(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return Vg({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,X(function(){var o=pr(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof Ie){var u=un(s)?s:s.expandDims();return u=Hg(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=ti.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof Je.getEnv().Canvas)return si.fromPixels(t0(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=ft(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r})();function Ge(r){return Z(this,void 0,void 0,function(){var t,e,n;return ee(this,function(o){switch(o.label){case 0:if(r instanceof uo)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(Dc),n.forEach(function(a,i){if(!Ps(a)&&!_o(a)&&!un(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(un(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Ps(a)&&Zg(a)}))];case 1:return o.sent(),[2,new uo(n,Array.isArray(r))]}})})}function di(r,t){return Z(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return ee(this,function(c){switch(c.label){case 0:return e=Je.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,Ge(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,e0(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=En(n),u=t.map(function(l){return l instanceof Vt?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,f=l.y,d=l.width,p=l.height,m=Io({width:d,height:p});return En(m).putImageData(s.getImageData(h,f,d,p),0,0),m})]}})})}function pi(r,t){return Z(this,void 0,void 0,function(){return ee(this,function(e){if(!_o(r)&&!un(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(un(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,X(function(){var n=r.shape.slice(un(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof Vt?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,h=c.y,f=c.width,d=c.height;return oc(r.as3D(o,a,i),[h,l,0],[d,f,i])});return u})]})})}function n0(r,t){return Z(this,void 0,void 0,function(){var e,n;return ee(this,function(o){switch(o.label){case 0:return e=Je.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function r0(r){return Z(this,void 0,void 0,function(){return ee(this,function(t){switch(t.label){case 0:return[4,n0(r)];case 1:return[2,t.sent().json()]}})})}function Nc(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function o0(r,t){return Z(this,void 0,void 0,function(){var e,n,o,a;return ee(this,function(i){switch(i.label){case 0:return e=Nc(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,r0(n)];case 1:return a=i.sent(),[2,wc.loadWeights(a,o)]}})})}var Qt=(function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof Qn})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof Qn)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=qe(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return Z(this,void 0,void 0,function(){return ee(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return Z(this,void 0,void 0,function(){var e;return ee(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,o0(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return Z(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,h;return ee(this,function(f){switch(f.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=Je.getEnv().readFile,n=Nc(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(d){return Promise.all(d.map(function(p){return e(p).then(function(m){return m.buffer})}))},s=wc.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[f.sent().toString()]),[4,s(u,a)];case 2:return h=f.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Ie))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r})();function lt(r,t,e){return X(function(){var n=Ya(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=ce(n,t.bias),n})}function aa(r,t,e){return e===void 0&&(e=!1),X(function(){var n=Re(e?ce(gt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):lt(r,t.conv0,[2,2])),o=lt(n,t.conv1,[1,1]),a=Re(ce(n,o)),i=lt(a,t.conv2,[1,1]);return Re(ce(n,ce(o,i)))})}function Or(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),X(function(){var o=Re(e?ce(gt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):lt(r,t.conv0,n?[2,2]:[1,1])),a=lt(o,t.conv1,[1,1]),i=Re(ce(o,a)),s=lt(i,t.conv2,[1,1]),u=Re(ce(o,ce(a,s))),c=lt(u,t.conv3,[1,1]);return Re(ce(o,ce(a,ce(s,c))))})}function Ct(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),X(function(){var o=ce(gt(r,t.filters,[1,1],e),t.bias);return n?Re(o):o})}function Jt(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function Ro(r,t){return function(e,n,o,a){var i=Ze(r(e*n*o*o),[o,o,e,n]),s=Pe(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function vi(r,t){return function(e,n,o){var a=an(r(e*n),[e,n]),i=Pe(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var Fc=(function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r})();function mi(r,t){return function(e,n,o){var a=Ze(r(9*e),[3,3,e,1]),i=Ze(r(e*n),[1,1,e,n]),s=Pe(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Fc(a,i,s)}}function gi(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new Fc(e,n,o)}}function dn(r,t){return function(e,n,o){var a=r[e];if(!Co(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function Zt(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function Pc(r,t){var e=Ro(r,t),n=mi(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),h=n(s,s,u+"/conv1"),f=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:f}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),h=l.conv0,f=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:h,conv1:f,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function a0(r){var t=[],e=Zt(r),n=e.extractWeights,o=e.getRemainingWeights,a=Pc(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Mc(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Oc(r,t){var e=dn(r,t),n=Mc(e),o=gi(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),f=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:f}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function i0(r){var t=[],e=Oc(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Jt(r,t),{params:n,paramMappings:t}}var Bc=(function(r){oe(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return X(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Er(o,a).div(j(255)),s=Or(i,n.dense0,!0);return s=Or(s,n.dense1),s=Or(s,n.dense2),s=Or(s,n.dense3),s=Cr(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return i0(e)},t.prototype.extractParams=function(e){return a0(e)},t})(Qt);function Ft(r,t){return X(function(){return ce(xo(r,t.weights),t.bias)})}function s0(r,t,e){var n=[],o=Zt(r),a=o.extractWeights,i=o.getRemainingWeights,s=vi(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function u0(r){var t=[],e=dn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return Jt(r,t),{params:o,paramMappings:t}}function Lc(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var Wc=(function(r){oe(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return X(function(){var a=e instanceof uo?n.faceFeatureExtractor.forwardInput(e):e;return Ft(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return s0(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=Lc(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),u0(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t})(Qt),Ms=["neutral","happy","sad","angry","fearful","disgusted","surprised"],c0=(function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Ms.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Ms.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r})(),l0=(function(r){oe(t,r);function t(e){return e===void 0&&(e=new Bc),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return X(function(){return $t(n.runNet(e))})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return Z(this,void 0,void 0,function(){var n,o,a,i,s=this;return ee(this,function(u){switch(u.label){case 0:return[4,Ge(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Be(o).map(function(c){return Z(s,void 0,void 0,function(){var l;return ee(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new c0(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t})(Wc);function zc(r,t){var e={expressions:t};return Object.assign({},r,e)}function h0(r){return Yg(r)&&r.landmarks instanceof so&&r.unshiftedLandmarks instanceof so&&r.alignedRect instanceof Vt}function yi(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new Vt(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}function f0(r,t){var e=Ro(r,t),n=mi(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function d0(r,t){var e=[],n=Zt(r),o=n.extractWeights,a=n.getRemainingWeights,i=f0(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),f=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:h,reduction_block_0:f,reduction_block_1:d},m={};pr(t,0,1).forEach(function(b){m["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:m,exit_flow:x}}}function p0(r,t){var e=dn(r,t),n=Mc(e),o=gi(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function v0(r,t){var e=[],n=p0(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},f={};pr(t,0,1).forEach(function(v){f["main_block_"+v]=s("middle_flow/main_block_"+v)});var d=i("exit_flow/reduction_block"),p=a("exit_flow/separable_conv"),m={reduction_block:d,separable_conv:p};return Jt(r,e),{params:{entry_flow:h,middle_flow:f,exit_flow:m},paramMappings:e}}function Vc(r,t,e){return ce(gt(r,t.filters,e,"same"),t.bias)}function ia(r,t,e){e===void 0&&(e=!0);var n=e?Re(r):r;return n=lt(n,t.separable_conv0,[1,1]),n=lt(Re(n),t.separable_conv1,[1,1]),n=Ve(n,[3,3],[2,2],"same"),n=ce(n,Vc(r,t.expansion_conv,[2,2])),n}function m0(r,t){var e=lt(Re(r),t.separable_conv0,[1,1]);return e=lt(Re(e),t.separable_conv1,[1,1]),e=lt(Re(e),t.separable_conv2,[1,1]),e=ce(e,r),e}var g0=(function(r){oe(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return X(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=Er(a,i).div(j(256)),u=Re(Vc(s,o.entry_flow.conv_in,[2,2]));return u=ia(u,o.entry_flow.reduction_block_0,!1),u=ia(u,o.entry_flow.reduction_block_1),pr(n._numMainBlocks,0,1).forEach(function(c){u=m0(u,o.middle_flow["main_block_"+c])}),u=ia(u,o.exit_flow.reduction_block),u=Re(lt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return v0(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return d0(e,this._numMainBlocks)},t})(Qt);function y0(r){var t=[],e=Zt(r),n=e.extractWeights,o=e.getRemainingWeights,a=vi(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function x0(r){var t=[],e=dn(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return Jt(r,t),{params:o,paramMappings:t}}var co;(function(r){r.FEMALE="female",r.MALE="male"})(co||(co={}));var b0=(function(r){oe(t,r);function t(e){e===void 0&&(e=new g0(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return X(function(){var a=e instanceof uo?n.faceFeatureExtractor.forwardInput(e):e,i=Cr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Ft(i,o.fc.age).as1D(),u=Ft(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return X(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:$t(i)}})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Z(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return ee(this,function(l){switch(l.label){case 0:return[4,Ge(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=Be(o.age),i=Be(o.gender),s=a.map(function(h,f){return{ageTensor:h,genderTensor:i[f]}}),[4,Promise.all(s.map(function(h){var f=h.ageTensor,d=h.genderTensor;return Z(c,void 0,void 0,function(){var p,m,v,g,x;return ee(this,function(b){switch(b.label){case 0:return[4,f.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return m=b.sent()[0],v=m>.5,g=v?co.MALE:co.FEMALE,x=v?m:1-m,f.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return y0(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=Lc(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),x0(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t})(Qt),Uc=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return X(function(){var s=function(f,d){return ft([Ot([68],f),Ot([68],d)],1).as2D(1,136).as1D()},u=function(f,d){var p=a[f],m=p.width,v=p.height;return d(m,v)?Math.abs(m-v)/2:0},c=function(f){return u(f,function(d,p){return d<p})},l=function(f){return u(f,function(d,p){return p<d})},h=e.mul(Ot([i,136],n)).sub(ft(Array.from(Array(i),function(f,d){return s(c(d),l(d))}))).div(ft(Array.from(Array(i),function(f,d){return s(a[d].width,a[d].height)})));return h})},t.prototype.forwardInput=function(e){var n=this;return X(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Z(this,void 0,void 0,function(){var n,o,a,i=this;return ee(this,function(s){switch(s.label){case 0:return[4,Ge(e)];case 1:return n=s.sent(),o=X(function(){return Be(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Z(i,void 0,void 0,function(){var l,h,f,d,p;return ee(this,function(m){switch(m.label){case 0:return f=(h=Array).from,[4,u.data()];case 1:return l=f.apply(h,[m.sent()]),d=l.filter(function(v,g){return Ss(g)}),p=l.filter(function(v,g){return!Ss(g)}),[2,new $g(Array(68).fill(0).map(function(v,g){return new ye(d[g],p[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t})(Wc),Gc=(function(r){oe(t,r);function t(e){return e===void 0&&(e=new Bc),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t})(Uc);function w0(r){var t=[],e=Oc(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Jt(r,t),{params:n,paramMappings:t}}function C0(r){var t=[],e=Zt(r),n=e.extractWeights,o=e.getRemainingWeights,a=Pc(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var _0=(function(r){oe(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return X(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Er(o,a).div(j(255)),s=aa(i,n.dense0,!0);return s=aa(s,n.dense1),s=aa(s,n.dense2),s=Cr(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return w0(e)},t.prototype.extractParams=function(e){return C0(e)},t})(Qt),E0=(function(r){oe(t,r);function t(e){return e===void 0&&(e=new _0),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t})(Uc);(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Gc);function I0(r,t){return ce(Qe(r,t.weights),t.biases)}function xi(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=gt(r,i,e,o);return u=ce(u,s),u=I0(u,t.scale),n?Re(u):u}function R0(r,t){return xi(r,t,[1,1],!0)}function Hc(r,t){return xi(r,t,[1,1],!1)}function jc(r,t){return xi(r,t,[2,2],!0,"valid")}function k0(r,t){function e(s,u,c){var l=r(s),h=l.length/(u*c*c);if(Wg(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return X(function(){return cn(Ze(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=e(s,u,c),f=Pe(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:f}}function o(s,u){var c=Pe(r(s)),l=Pe(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var h=n(s,u,c,l+"/conv"),f=o(u,l+"/scale");return{conv:h,scale:f}}function i(s,u,c,l,h){h===void 0&&(h=!1);var f=a((h?.5:1)*s,u,c,l+"/conv1"),d=a(s,u,c,l+"/conv2");return{conv1:f,conv2:d}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function S0(r){var t=Zt(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=k0(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),f=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),S=X(function(){return cn(an(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:f,conv64_1:d,conv64_2:p,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:S};return{params:k,paramMappings:o}}function D0(r,t){var e=dn(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function A0(r){var t=[],e=D0(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),f=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!Lg(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:f,conv128_down:d,conv128_1:p,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return Jt(r,t),{params:w,paramMappings:t}}function St(r,t){var e=R0(r,t.conv1);return e=Hc(e,t.conv2),e=ce(e,r),e=Re(e),e}function Br(r,t){var e=jc(r,t.conv1);e=Hc(e,t.conv2);var n=Cr(r,2,2,"valid"),o=Ce(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=ur(e.shape);s[1]=1;var u=Ce(s);e=Oe([e,u],1);var c=ur(e.shape);c[2]=1;var l=Ce(c);e=Oe([e,l],2)}return n=a?Oe([n,o],3):n,e=ce(n,e),e=Re(e),e}var T0=(function(r){oe(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return X(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=Er(o,a).div(j(256)),s=jc(i,n.conv32_down);s=Ve(s,3,2,"valid"),s=St(s,n.conv32_1),s=St(s,n.conv32_2),s=St(s,n.conv32_3),s=Br(s,n.conv64_down),s=St(s,n.conv64_1),s=St(s,n.conv64_2),s=St(s,n.conv64_3),s=Br(s,n.conv128_down),s=St(s,n.conv128_1),s=St(s,n.conv128_2),s=Br(s,n.conv256_down),s=St(s,n.conv256_1),s=St(s,n.conv256_2),s=Br(s,n.conv256_down_out);var u=s.mean([1,2]),c=xo(u,n.fc);return c})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Z(this,void 0,void 0,function(){var n,o,a,i=this;return ee(this,function(s){switch(s.label){case 0:return[4,Ge(e)];case 1:return n=s.sent(),o=X(function(){return Be(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return A0(e)},t.prototype.extractParams=function(e){return S0(e)},t})(Qt);function qc(r,t){var e={descriptor:t};return Object.assign({},r,e)}function Kc(r,t){var e={age:t};return Object.assign({},r,e)}function Xc(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var $c=(function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r})();function N0(r,t){function e(u,c){var l=Ze(r(9*u),[3,3,u,1]),h=Pe(r(u)),f=Pe(r(u)),d=Pe(r(u)),p=Pe(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:f,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,h,f){var d=Ze(r(u*c*l*l),[l,l,u,c]),p=Pe(r(c));return t.push({paramPath:h+"/filters"},{paramPath:h+"/"+(f?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,h){var f=n(u,c,l,h,!0),d=f.filters,p=f.bias;return{filters:d,batch_norm_offset:p}}function a(u,c,l){var h=e(u,l+"/depthwise_conv"),f=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:f}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),h=a(128,128,"mobilenetv1/conv_3"),f=a(128,256,"mobilenetv1/conv_4"),d=a(256,256,"mobilenetv1/conv_5"),p=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),x=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:m,conv_8:v,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),f=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),N=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:v,class_predictor:g},L={box_encoding_predictor:x,class_predictor:b},O={box_encoding_predictor:y,class_predictor:w},B={box_encoding_predictor:C,class_predictor:S},V={box_encoding_predictor:k,class_predictor:I},z={box_encoding_predictor:R,class_predictor:N};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:m,box_predictor_0:A,box_predictor_1:L,box_predictor_2:O,box_predictor_3:B,box_predictor_4:V,box_predictor_5:z}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function F0(r){var t=[],e=Zt(r),n=e.extractWeights,o=e.getRemainingWeights,a=N0(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Ma(n(5118*4),[1,5118,4]),h={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:t}}function P0(r,t){var e=dn(r,t);function n(c,l,h){var f=e(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:f,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",f=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(h+"/depthwise_weights",4,f+"/filters"),m=e(h+"/BatchNorm/gamma",1,f+"/batch_norm_scale"),v=e(h+"/BatchNorm/beta",1,f+"/batch_norm_offset"),g=e(h+"/BatchNorm/moving_mean",1,f+"/batch_norm_mean"),x=e(h+"/BatchNorm/moving_variance",1,f+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:n("MobilenetV1",c,d)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var h=e(c+"/weights",4,l+"/filters"),f=e(c+"/biases",1,l+"/bias");return{filters:h,bias:f}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function M0(r){var t=[],e=P0(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!_o(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return Jt(r,t),{params:i,paramMappings:t}}function Dt(r,t,e){return X(function(){var n=gt(r,t.filters,e,"same");return n=ce(n,t.batch_norm_offset),qa(n,0,6)})}var O0=.0010000000474974513;function B0(r,t,e){return X(function(){var n=yo(r,t.filters,e,"same");return n=Gu(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,O0),qa(n,0,6)})}function L0(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function W0(r,t){return X(function(){var e=null,n=Dt(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=L0(s);n=B0(n,a.depthwise_conv,u),n=Dt(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function z0(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,f=c.length-1;f>=0;--f){var d=V0(r,l.boxIndex,c[f]);if(d!==0&&(l.score*=u(d),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function V0(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),h=Math.max(n[e][1],n[e][3]),f=(i-o)*(s-a),d=(l-u)*(h-c);if(f<=0||d<=0)return 0;var p=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,h),x=Math.max(v-p,0)*Math.max(g-m,0);return x/(f+d-x)}function U0(r){var t=Be(cn(r,[1,0])),e=[We(t[2],t[0]),We(t[3],t[1])],n=[ce(t[0],yt(e[0],j(2))),ce(t[1],yt(e[1],j(2)))];return{sizes:e,centers:n}}function G0(r,t){var e=U0(r),n=e.sizes,o=e.centers,a=Be(cn(t,[1,0])),i=yt(Qe(wa(yt(a[2],j(5))),n[0]),j(2)),s=ce(Qe(yt(a[0],j(10)),n[0]),o[0]),u=yt(Qe(wa(yt(a[3],j(5))),n[1]),j(2)),c=ce(Qe(yt(a[1],j(10)),n[1]),o[1]);return cn(ft([We(s,i),We(c,u),ce(s,i),ce(c,u)]),[1,0])}function H0(r,t,e){return X(function(){var n=r.shape[0],o=G0(wt(Gn(e.extra_dim,[n,1,1]),[-1,4]),wt(r,[-1,4]));o=wt(o,[n,o.shape[0]/n,4]);var a=Wu(Bt(t,[0,0,1],[-1,-1,-1])),i=Bt(a,[0,0,0],[-1,-1,1]);i=wt(i,[n,i.shape[1]]);var s=Be(o),u=Be(i);return{boxes:s,scores:u}})}function On(r,t){return X(function(){var e=r.shape[0],n=wt(Ct(r,t.box_encoding_predictor),[e,-1,1,4]),o=wt(Ct(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function j0(r,t,e){return X(function(){var n=Dt(r,e.conv_0,[1,1]),o=Dt(n,e.conv_1,[2,2]),a=Dt(o,e.conv_2,[1,1]),i=Dt(a,e.conv_3,[2,2]),s=Dt(i,e.conv_4,[1,1]),u=Dt(s,e.conv_5,[2,2]),c=Dt(u,e.conv_6,[1,1]),l=Dt(c,e.conv_7,[2,2]),h=On(t,e.box_predictor_0),f=On(r,e.box_predictor_1),d=On(o,e.box_predictor_2),p=On(i,e.box_predictor_3),m=On(u,e.box_predictor_4),v=On(l,e.box_predictor_5),g=Oe([h.boxPredictionEncoding,f.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),x=Oe([h.classPrediction,f.classPrediction,d.classPrediction,p.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var ko=(function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r})(),Yc=(function(r){oe(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return X(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=We(Qe(o,j(.007843137718737125)),j(1)),i=W0(a,n.mobilenetv1),s=j0(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return H0(u,c,n.output_layer)})},t.prototype.forward=function(e){return Z(this,void 0,void 0,function(){var n;return ee(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,m,v,g,x,b,y,w,C,S,k;return ee(this,function(I){switch(I.label){case 0:return o=new ko(n),a=o.maxResults,i=o.minConfidence,[4,Ge(e)];case 1:for(s=I.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],f=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return v=(m=Array).from,[4,f.data()];case 2:return p=v.apply(m,[I.sent()]),g=.5,x=z0(h,p,a,g,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,C=y/b.height,S=h.arraySync(),k=x.map(function(R){var N=[Math.max(0,S[R][0]),Math.min(1,S[R][2])].map(function(z){return z*C}),A=N[0],L=N[1],O=[Math.max(0,S[R][1]),Math.min(1,S[R][3])].map(function(z){return z*w}),B=O[0],V=O[1];return new Vt(p[R],new ci(B,A,V-B,L-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),f.dispose(),[2,k]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return M0(e)},t.prototype.extractParams=function(e){return F0(e)},t})(Qt);(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Yc);var q0=.4,K0=[new ye(.738768,.874946),new ye(2.42204,2.65704),new ye(4.30971,7.04493),new ye(10.246,4.59428),new ye(12.6868,11.8741)],X0=[new ye(1.603231,2.094468),new ye(6.041143,7.080126),new ye(2.882459,3.518061),new ye(4.266906,5.178857),new ye(9.041765,10.66308)],$0=[117.001,114.697,97.404],Y0="tiny_yolov2_model",Q0="tiny_yolov2_separable_conv_model",Lr=function(r){return typeof r=="number"};function J0(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Lr(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return Lr(t.x)&&Lr(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Lr)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function bi(r){return X(function(){var t=Qe(r,j(.10000000149011612));return ce(Re(We(r,t)),t)})}function tn(r,t){return X(function(){var e=Rn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=gt(e,t.conv.filters,[1,1],"valid"),e=We(e,t.bn.sub),e=Qe(e,t.bn.truediv),e=ce(e,t.conv.bias),bi(e)})}function nn(r,t){return X(function(){var e=Rn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Ya(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ce(e,t.bias),bi(e)})}function Z0(r,t){var e=Ro(r,t);function n(i,s){var u=Pe(r(i)),c=Pe(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=mi(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function ey(r,t,e,n){var o=Zt(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=Z0(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,f;if(t.withSeparableConvs){var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],C=t.isFirstLayerConv2d?c(d,p,3,"conv0"):h(d,p,"conv0"),S=h(p,m,"conv1"),k=h(m,v,"conv2"),I=h(v,g,"conv3"),R=h(g,x,"conv4"),N=h(x,b,"conv5"),A=y?h(b,y,"conv6"):void 0,L=w?h(y,w,"conv7"):void 0,O=c(w||y||b,5*e,1,"conv8");f={conv0:C,conv1:S,conv2:k,conv3:I,conv4:R,conv5:N,conv6:A,conv7:L,conv8:O}}else{var d=n[0],p=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],C=l(d,p,"conv0"),S=l(p,m,"conv1"),k=l(m,v,"conv2"),I=l(v,g,"conv3"),R=l(g,x,"conv4"),N=l(x,b,"conv5"),A=l(b,y,"conv6"),L=l(y,w,"conv7"),O=c(w,5*e,1,"conv8");f={conv0:C,conv1:S,conv2:k,conv3:I,conv4:R,conv5:N,conv6:A,conv7:L,conv8:O}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:f,paramMappings:s}}function ty(r,t){var e=dn(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=gi(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function ny(r,t){var e=[],n=ty(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return Jt(r,e),{params:s,paramMappings:e}}var Os;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Os||(Os={}));var wi=(function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r})(),Qc=(function(r){oe(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return J0(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=tn(e,n.conv0);return o=Ve(o,[2,2],[2,2],"same"),o=tn(o,n.conv1),o=Ve(o,[2,2],[2,2],"same"),o=tn(o,n.conv2),o=Ve(o,[2,2],[2,2],"same"),o=tn(o,n.conv3),o=Ve(o,[2,2],[2,2],"same"),o=tn(o,n.conv4),o=Ve(o,[2,2],[2,2],"same"),o=tn(o,n.conv5),o=Ve(o,[2,2],[1,1],"same"),o=tn(o,n.conv6),o=tn(o,n.conv7),Ct(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?bi(Ct(e,n.conv0,"valid",!1)):nn(e,n.conv0);return o=Ve(o,[2,2],[2,2],"same"),o=nn(o,n.conv1),o=Ve(o,[2,2],[2,2],"same"),o=nn(o,n.conv2),o=Ve(o,[2,2],[2,2],"same"),o=nn(o,n.conv3),o=Ve(o,[2,2],[2,2],"same"),o=nn(o,n.conv4),o=Ve(o,[2,2],[2,2],"same"),o=nn(o,n.conv5),o=Ve(o,[2,2],[1,1],"same"),o=n.conv6?nn(o,n.conv6):o,o=n.conv7?nn(o,n.conv7):o,Ct(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return X(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?Er(i,o.config.meanRgb):i,i=i.div(j(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return Z(this,void 0,void 0,function(){var o;return ee(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ge(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,m,v,g,x=this;return ee(this,function(b){switch(b.label){case 0:return o=new wi(n),a=o.inputSize,i=o.scoreThreshold,[4,Ge(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=X(function(){return Be(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=b.sent(),u.dispose(),c.dispose(),f=h.map(function(y){return y.box}),d=h.map(function(y){return y.score}),p=h.map(function(y){return y.classScore}),m=h.map(function(y){return x.config.classes[y.label]}),v=vr(f.map(function(y){return y.rescale(a)}),d,this.config.iouThreshold,!0),g=v.map(function(y){return new _c(d[y],p[y],m[y],f[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return ny(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return ey(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return Z(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,m,v,g,x,b,y,w,C,S,k,I,R,N,A,L,O,B,V,z,W=this;return ee(this,function(G){switch(G.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],h=this.config.anchors.length,f=X(function(){var H=e.reshape([l,l,h,W.boxEncodingSize]),q=H.slice([0,0,0,0],[l,l,h,4]),te=H.slice([0,0,0,4],[l,l,h,1]),ne=W.withClassScores?$t(H.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):j(0);return[q,te,ne]}),d=f[0],p=f[1],m=f[2],v=[],[4,p.array()];case 1:return g=G.sent(),[4,d.array()];case 2:x=G.sent(),b=0,G.label=3;case 3:if(!(b<l))return[3,12];y=0,G.label=4;case 4:if(!(y<l))return[3,11];w=0,G.label=5;case 5:return w<h?(C=oa(g[b][y][w][0]),!o||C>o?(S=(y+oa(x[b][y][w][0]))/l*u,k=(b+oa(x[b][y][w][1]))/l*c,I=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,R=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,N=S-I/2,A=k-R/2,L={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(m,L)]:[3,7]):[3,9]):[3,10];case 6:return z=G.sent(),[3,8];case 7:z={classScore:1,label:0},G.label=8;case 8:O=z,B=O.classScore,V=O.label,v.push(Xe({box:new Eo(N,A,N+I,A+R),score:C,classScore:C*B,label:V},L)),G.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),m.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return Z(this,void 0,void 0,function(){var o,a,i,s;return ee(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t})(Qt),ry=(function(r){oe(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:q0,classes:["face"]},e?{anchors:X0,meanRgb:$0}:{anchors:K0,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Z(this,void 0,void 0,function(){var o;return ee(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Vt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Q0:Y0},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t})(Qc),Jc=(function(r){oe(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t})(wi),Ir=(function(){function r(){}return r.prototype.then=function(t){return Z(this,void 0,void 0,function(){var e;return ee(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Z(this,void 0,void 0,function(){return ee(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r})();function So(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),Z(this,void 0,void 0,function(){var a,i,s,u,c;return ee(this,function(l){switch(l.label){case 0:return a=r.map(function(h){return h0(h)?o(h):h.detection}),s=n,s?[3,5]:t instanceof Ie?[4,pi(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,di(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof Ie&&h.dispose()}),[2,c]}})})}function Ci(r,t,e,n,o){return Z(this,void 0,void 0,function(){var a=this;return ee(this,function(i){return[2,So([r],t,function(s){return Z(a,void 0,void 0,function(){return ee(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function oy(r){return X(function(){return ft(Be(r,3).reverse(),3)})}var Wr=2,lo=12;function ay(r,t){var e=Ro(r,t),n=vi(r,t);function o(c,l){var h=Pe(r(c));return t.push({paramPath:l}),h}function a(c,l,h){h===void 0&&(h=!1);var f=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],h?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:d,conv2:p,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),h=e(32,4,1,"pnet/conv4_2");return Xe(Xe({},c),{conv4_1:l,conv4_2:h})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),f=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return Xe(Xe({},c),{fc1:l,prelu4_alpha:h,fc2_1:f,fc2_2:d})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),f=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),m=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return Xe(Xe({},c),{conv4:l,prelu4_alpha:h,fc1:f,prelu5_alpha:d,fc2_1:p,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function iy(r){var t=Zt(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=ay(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function sy(r,t){var e=dn(r,t);function n(l){var h=e(l+"/weights",4,l+"/filters"),f=e(l+"/bias",1);return{filters:h,bias:f}}function o(l){var h=e(l+"/weights",2),f=e(l+"/bias",1);return{weights:h,bias:f}}function a(l){return e(l,1)}function i(l){var h=n(l+"/conv1"),f=a(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=a(l+"/prelu2_alpha"),m=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:f,conv2:d,prelu2_alpha:p,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),h=n("pnet/conv4_1"),f=n("pnet/conv4_2");return Xe(Xe({},l),{conv4_1:h,conv4_2:f})}function u(){var l=i("rnet"),h=o("rnet/fc1"),f=a("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return Xe(Xe({},l),{fc1:h,prelu4_alpha:f,fc2_1:d,fc2_2:p})}function c(){var l=i("onet"),h=n("onet/conv4"),f=a("onet/prelu4_alpha"),d=o("onet/fc1"),p=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return Xe(Xe({},l),{conv4:h,prelu4_alpha:f,fc1:d,prelu5_alpha:p,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function uy(r){var t=[],e=sy(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return Jt(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function Da(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function cy(r,t,e){for(var n=e[0],o=e[1],a=lo/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var _i=(function(r){oe(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t})(ln);function Zc(r){return X(function(){return Qe(We(r,j(127.5)),j(.0078125))})}function $n(r,t){return X(function(){return ce(Re(r),Qe(t,ro(Re(ro(r)))))})}function Ei(r,t,e){return e===void 0&&(e=!1),X(function(){var n=Ct(r,t.conv1,"valid");return n=$n(n,t.prelu1_alpha),n=Ve(n,e?[2,2]:[3,3],[2,2],"same"),n=Ct(n,t.conv2,"valid"),n=$n(n,t.prelu2_alpha),n=e?n:Ve(n,[3,3],[2,2],"valid"),n=Ct(n,t.conv3,"valid"),n=$n(n,t.prelu3_alpha),n})}function ly(r,t){return X(function(){var e=Ei(r,t,!0),n=Ct(e,t.conv4_1,"valid"),o=pt(bo(n,3),3),a=$t(We(n,o),3),i=Ct(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function hy(r,t){return X(function(){var e=Da(t,r.shape.slice(1)),n=e.height,o=e.width,a=ti.resizeBilinear(r,[n,o]),i=Zc(a);return cn(i,[0,2,1,3])})}function fy(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new ye(s,i));var u=o.map(function(c){var l=new Eo(Math.round((c.y*Wr+1)/e),Math.round((c.x*Wr+1)/e),Math.round((c.y*Wr+lo)/e),Math.round((c.x*Wr+lo)/e)),h=a[c.y][c.x],f=t.arraySync(),d=new _i(f[c.y][c.x][0],f[c.y][c.x][1],f[c.y][c.x][2],f[c.y][c.x][3]);return{cell:l,score:h,region:d}});return u}function dy(r,t,e,n,o){o.stage1=[];var a=t.map(function(f){return X(function(){var d={scale:f},p=hy(r,f),m=Date.now(),v=ly(p,n),g=v.prob,x=v.regions;d.pnet=Date.now()-m;var b=Be(Be(g,3)[1])[0],y=Be(x)[0];return{scoresTensor:b,regionsTensor:y,scale:f,statsForScale:d}})}),i=a.map(function(f){var d=f.scoresTensor,p=f.regionsTensor,m=f.scale,v=f.statsForScale,g=fy(d,p,m,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(v),[];var x=Date.now(),b=vr(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-x,v.numBoxes=b.length,o.stage1.push(v),b.map(function(y){return g[y]})}),s=i.reduce(function(f,d){return f.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=vr(s.map(function(f){return f.cell}),s.map(function(f){return f.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(f){return s[f].score}),u=h.map(function(f){return s[f]}).map(function(f){var d=f.cell,p=f.region;return new Eo(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function el(r,t,e){var n=e.width,o=e.height;return Z(this,void 0,void 0,function(){var a,i,s,u=this;return ee(this,function(c){switch(c.label){case 0:return a=En(r),[4,Promise.all(t.map(function(l){return Z(u,void 0,void 0,function(){var h,f,d,p,m,v,g,x;return ee(this,function(b){return h=l.padAtBorders(r.height,r.width),f=h.y,d=h.ey,p=h.x,m=h.ex,v=p-1,g=f-1,x=a.getImageData(v,g,m-v,d-g),[2,Je.isNodejs()?fi(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=Io({width:n,height:o}),f=En(h);f.drawImage(l,0,0,n,o);for(var d=f.getImageData(0,0,n,o).data,p=[],m=0;m<d.length;m+=4)p.push(d[m+2]),p.push(d[m+1]),p.push(d[m]);s.push(p)}),[2,s.map(function(l){var h=X(function(){var f=cn(Ze(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Zc(f)});return h})]}})})}function py(r,t){return X(function(){var e=Ei(r,t),n=wt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Ft(n,t.fc1),a=$n(o,t.prelu4_alpha),i=Ft(a,t.fc2_1),s=pt(bo(i,1),1),u=$t(We(i,s),1),c=Ft(a,t.fc2_2),l=Be(u,1)[1];return{scores:l,regions:c}})}function vy(r,t,e,n,o){return Z(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,m,v,g,x;return ee(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,el(r,t,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var w=py(y,n);return y.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Oe(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),f=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=f.map(function(y){return t[y]}),p=f.map(function(y){return c[y]}),m=[],v=[],d.length>0&&(a=Date.now(),g=vr(d,p,.7),o.stage2_nms=Date.now()-a,x=g.map(function(y){var w=s[f[y]].regions.arraySync();return new _i(w[0][0],w[0][1],w[0][2],w[0][3])}),v=g.map(function(y){return p[y]}),m=g.map(function(y,w){return d[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function my(r,t){return X(function(){var e=Ei(r,t);e=Ve(e,[2,2],[2,2],"same"),e=Ct(e,t.conv4,"valid"),e=$n(e,t.prelu4_alpha);var n=wt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=Ft(n,t.fc1),a=$n(o,t.prelu5_alpha),i=Ft(a,t.fc2_1),s=pt(bo(i,1),1),u=$t(We(i,s),1),c=Ft(a,t.fc2_2),l=Ft(a,t.fc2_3),h=Be(u,1)[1];return{scores:h,regions:c,points:l}})}function gy(r,t,e,n,o){return Z(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,d,p,m,v,g,x,b;return ee(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,el(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=my(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?Oe(s.map(function(w){return w.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),f=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),d=f.map(function(w){var C=s[w].regions.arraySync();return new _i(C[0][0],C[0][1],C[0][2],C[0][3])}),p=f.map(function(w,C){return t[w].calibrate(d[C])}),m=f.map(function(w){return c[w]}),v=[],g=[],x=[],p.length>0&&(a=Date.now(),b=vr(p,m,.7,!1),o.stage3_nms=Date.now()-a,v=b.map(function(w){return p[w]}),g=b.map(function(w){return m[w]}),x=b.map(function(w,C){return Array(5).fill(0).map(function(S,k){var I=s[w].points.arraySync();return new ye(I[0][k]*(v[C].width+1)+v[C].left,I[0][k+5]*(v[C].height+1)+v[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:g,points:x}]}})})}var yy=(function(r){oe(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return Z(this,void 0,void 0,function(){return ee(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return Z(this,void 0,void 0,function(){return ee(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,d,p,m,v,g,x,b,y,w,C,S,k;return ee(this,function(I){switch(I.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=X(function(){return oy(pt(si.fromPixels(a)).toFloat())}),c=function(R){return u.dispose(),i.total=Date.now()-s,R},l=u.shape.slice(1),h=l[0],f=l[1],d=new $c(n),p=d.minFaceSize,m=d.scaleFactor,v=d.maxNumScales,g=d.scoreThresholds,x=d.scaleSteps,b=(x||cy(p,m,[h,f])).filter(function(R){var N=Da(R,[h,f]);return Math.min(N.width,N.height)>lo}).slice(0,v),i.scales=b,i.pyramid=b.map(function(R){return Da(R,[h,f])}),y=Date.now(),[4,dy(u,b,g[0],o.pnet,i)];case 1:return w=I.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,vy(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=I.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,gy(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return S=I.sent(),i.total_stage3=Date.now()-y,k=S.boxes.map(function(R,N){return yi(li({},new Vt(S.scores[N],new ci(R.left/f,R.top/h,R.width/f,R.height/h),{height:h,width:f})),new Xg(S.points[N].map(function(A){return A.sub(new ye(R.left,R.top)).div(new ye(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:k,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o;return ee(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ge(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o;return ee(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ge(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return uy(e)},t.prototype.extractParams=function(e){return iy(e)},t})(Qt),xy=.4,by=[new ye(1.603231,2.094468),new ye(6.041143,7.080126),new ye(2.882459,3.518061),new ye(4.266906,5.178857),new ye(9.041765,10.66308)],wy=[117.001,114.697,97.404],Cy=(function(r){oe(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:xy,classes:["face"],anchors:by,meanRgb:wy,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Z(this,void 0,void 0,function(){var o;return ee(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Vt(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t})(Qc),ht={ssdMobilenetv1:new Yc,tinyFaceDetector:new Cy,tinyYolov2:new ry,mtcnn:new yy,faceLandmark68Net:new Gc,faceLandmark68TinyNet:new E0,faceRecognitionNet:new T0,faceExpressionNet:new l0,ageGenderNet:new b0},tl=(function(r){oe(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t})(Ir),Ii=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n,o=this;return ee(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,So(e,this.input,function(i){return Z(o,void 0,void 0,function(){return ee(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return ht.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return zc(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Di(this,this.input)},t})(tl),Ri=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n;return ee(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Ci(e,this.input,function(a){return ht.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,zc(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new Ai(this,this.input)},t})(tl),ki=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Ti(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Fi(this,this.input)},t})(Ii),Si=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Ni(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Pi(this,this.input)},t})(Ri),nl=(function(r){oe(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t})(Ir),Di=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n,o=this;return ee(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,So(e,this.input,function(i){return Z(o,void 0,void 0,function(){return ee(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return ht.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return Kc(Xc(i,l,h),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Ii(this,this.input)},t})(nl),Ai=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n,o,a,i;return ee(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Ci(e,this.input,function(u){return ht.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,Kc(Xc(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new Ri(this,this.input)},t})(nl),Ti=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new ki(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Fi(this,this.input)},t})(Di),Ni=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Si(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Pi(this,this.input)},t})(Ai),rl=(function(r){oe(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t})(Ir),Fi=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n;return ee(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,So(e,this.input,function(a){return Promise.all(a.map(function(i){return ht.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return qc(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new ki(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ti(this,this.input)},t})(rl),Pi=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n;return ee(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Ci(e,this.input,function(a){return ht.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,qc(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new Si(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ni(this,this.input)},t})(rl),ol=(function(r){oe(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?ht.faceLandmark68TinyNet:ht.faceLandmark68Net},enumerable:!0,configurable:!0}),t})(Ir),_y=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return ee(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Ie?[4,pi(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,di(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof Ie&&c.dispose()}),[2,e.map(function(c,l){return yi(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new ki(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ti(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Fi(this,this.input)},t})(ol),Ey=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n,o,a,i;return ee(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Ie?[4,pi(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,di(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof Ie&&u.dispose()}),[2,yi(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new Si(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ni(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Pi(this,this.input)},t})(ol),al=(function(r){oe(t,r);function t(e,n){n===void 0&&(n=new ko);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t})(Ir),Iy=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n,o,a;return ee(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof $c?[4,ht.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof Jc?function(s){return ht.tinyFaceDetector.locateFaces(s,o)}:o instanceof ko?function(s){return ht.ssdMobilenetv1.locateFaces(s,o)}:o instanceof wi?function(s){return ht.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return Z(e,void 0,void 0,function(){var o;return ee(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return li({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new _y(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ii(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Di(this.runAndExtendWithFaceDetections(),this.input)},t})(al),Ry=(function(r){oe(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Z(this,void 0,void 0,function(){var e,n;return ee(this,function(o){switch(o.label){case 0:return[4,new Iy(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return Z(e,void 0,void 0,function(){var o;return ee(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?li({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Ey(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ri(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Ai(this.runAndExtendWithFaceDetection(),this.input)},t})(al);function ky(r,t){return t===void 0&&(t=new ko),new Ry(r,t)}function Sy(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof Mr)return i;if(i instanceof Float32Array)return new Mr(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Mr(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return Sy(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new Ts(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Ts("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return Mr.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();const Dy={key:0,class:"bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded inline-flex items-center"},il={__name:"FaceGuard",props:{videoElement:{type:Object,default:null},active:{type:Boolean,default:!0}},emits:["face-detected","face-lost","error","ready"],setup(r,{expose:t,emit:e}){const n=r,o=e,a=at(!1),i=at(!1),s=at(null);Ws(async()=>{try{await ht.tinyFaceDetector.loadFromUri("/models"),a.value=!0,o("ready"),n.active&&n.videoElement&&u()}catch(l){console.warn("Face-api models missing! Download weights to public/models",l),o("error","Models not found")}});const u=()=>{s.value&&clearInterval(s.value),s.value=setInterval(async()=>{if(!a.value||!n.active||!n.videoElement||n.videoElement.paused||n.videoElement.ended)return;const l=await ky(n.videoElement,new Jc);l?i.value||(i.value=!0,o("face-detected",l)):i.value&&(i.value=!1,o("face-lost"))},500)},c=()=>{s.value&&clearInterval(s.value),i.value=!1};return Mi(()=>n.active,l=>{l?u():c()}),Mi(()=>n.videoElement,l=>{l&&n.active&&u()}),t({isDetecting:i}),(l,h)=>a.value?bt("",!0):(Ae(),Fe("div",Dy,[...h[0]||(h[0]=[K("svg",{class:"animate-spin -ml-1 mr-2 h-3 w-3 text-blue-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[K("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),K("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),Aa(" Loading face detector... ",-1)])]))}},Qy=Object.freeze(Object.defineProperty({__proto__:null,default:il},Symbol.toStringTag,{value:"Module"})),Ay={key:0,class:"text-gray-500"},Ty={key:1,class:"w-full"},Ny={class:"text-4xl font-bold text-gray-900 mb-2"},Fy={class:"text-6xl font-black text-blue-600 mb-6"},Py={key:2,class:"text-green-800"},My={class:"text-xl"},Oy={key:3,class:"text-red-800"},By={class:"text-lg"},sl={__name:"ResultDisplay",props:{studentId:String,studentName:String,stagedChoice:String,status:{type:String,default:"idle"},message:String},setup(r){const t=r,e=dt(()=>t.status==="idle"),n=dt(()=>t.status==="staged"),o=dt(()=>t.status==="success"),a=dt(()=>t.status==="error");return(i,s)=>(Ae(),Fe("div",{class:ho(["h-full w-full rounded-xl flex flex-col items-center justify-center p-6 text-center transition-colors duration-300",{"bg-gray-100 border-2 border-dashed border-gray-300":e.value,"bg-blue-50 border-2 border-blue-400":n.value,"bg-green-100 border-2 border-green-500":o.value,"bg-red-50 border-2 border-red-400":a.value}])},[e.value?(Ae(),Fe("div",Ay,[...s[0]||(s[0]=[K("svg",{class:"h-16 w-16 mx-auto mb-4 opacity-50",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[K("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"})],-1),K("h3",{class:"text-xl font-semibold mb-2"},"Ready to Scan",-1),K("p",null,"Show your QR card to the camera",-1)])])):bt("",!0),n.value?(Ae(),Fe("div",Ty,[s[1]||(s[1]=K("h3",{class:"text-lg text-blue-800 mb-1"},"Staged Answer",-1)),K("div",Ny,xt(r.studentName||r.studentId),1),K("div",Fy,xt(r.stagedChoice),1),s[2]||(s[2]=vl('<div class="flex items-center justify-center space-x-4"><div class="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold flex items-center animate-pulse"><span class="mr-2">Scan ✅ to Confirm</span></div><div class="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold flex items-center"><span class="mr-2">Scan ❌ to Cancel</span></div></div>',1))])):bt("",!0),o.value?(Ae(),Fe("div",Py,[s[3]||(s[3]=K("svg",{class:"h-20 w-20 mx-auto mb-4 text-green-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[K("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),s[4]||(s[4]=K("div",{class:"text-3xl font-bold mb-2"},"Confirmed!",-1)),K("div",My,xt(r.studentName||r.studentId)+" answered "+xt(r.stagedChoice),1)])):bt("",!0),a.value?(Ae(),Fe("div",Oy,[s[5]||(s[5]=K("svg",{class:"h-16 w-16 mx-auto mb-4 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[K("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),s[6]||(s[6]=K("div",{class:"text-2xl font-bold mb-2"},"Error",-1)),K("div",By,xt(r.message),1)])):bt("",!0)],2))}},Jy=Object.freeze(Object.defineProperty({__proto__:null,default:sl},Symbol.toStringTag,{value:"Module"})),Ly={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Wy={class:"h-96 md:h-[32rem] relative bg-black rounded-b-lg overflow-hidden"},zy={key:0,class:"w-4 h-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Vy={key:1,class:"w-4 h-4 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Uy={class:"h-96 md:h-[30rem]"},Gy={__name:"ScanStation",setup(r){const t=at(null),e=at(null),n=at("idle"),o=at(""),a=at(""),i=at(""),s=at(!1),u=at(!1);let c=null;const l=m=>{t.value=m,setTimeout(()=>{const v=document.querySelector("video");v&&(e.value=v)},1e3)},h=m=>{if(u.value)return;if(m==="CMD_CANCEL"){d();return}if(m==="CMD_CONFIRM"){n.value==="staged"&&f();return}const v=m.match(/^(\d+)-([A-D])$/);if(v){if(!s.value){p("Please step closer! Face not detected.");return}const g=v[1],x=v[2];if(n.value==="staged"&&o.value===g&&a.value===x)return;o.value=g,a.value=x,n.value="staged",c&&clearTimeout(c),c=setTimeout(()=>{n.value==="staged"&&d()},1e4)}else p("Invalid QR Code")},f=async()=>{u.value=!0,c&&clearTimeout(c);let m=null;if(e.value){const v=document.createElement("canvas");v.width=e.value.videoWidth,v.height=e.value.videoHeight,v.getContext("2d").drawImage(e.value,0,0,v.width,v.height),m=v.toDataURL("image/jpeg",.6)}n.value="success";try{await ml.post("/api/scan/submit",{student_id:o.value,choice:a.value,photo:m})}catch(v){console.error("Submission failed",v),n.value="error",i.value="Failed to save to database"}setTimeout(()=>{d()},2500)},d=()=>{n.value="idle",o.value="",a.value="",i.value="",u.value=!1,c&&clearTimeout(c)},p=m=>{if(n.value==="error"&&i.value===m)return;const v=n.value;n.value="error",i.value=m,setTimeout(()=>{n.value==="error"&&(n.value=v,i.value="")},2e3)};return zs(()=>{c&&clearTimeout(c)}),(m,v)=>(Ae(),Ls(Ta,{title:"Smart Assessment Station"},{default:xn(()=>[K("div",Ly,[gn(Vr,{title:"Live Scanner","no-padding":""},{default:xn(()=>[K("div",Wy,[gn(Us,{onDecode:h,onInit:l,onError:v[0]||(v[0]=g=>console.log("QR err",g)),paused:u.value},null,8,["paused"]),gn(il,{"video-element":e.value,active:!u.value,onFaceDetected:v[1]||(v[1]=g=>s.value=!0),onFaceLost:v[2]||(v[2]=g=>s.value=!1),class:"absolute top-4 left-4 z-10"},null,8,["video-element","active"]),K("div",{class:ho(["absolute top-4 right-4 z-10 flex items-center px-3 py-1 rounded-full text-xs font-bold transition-colors shadow",s.value?"bg-green-500 text-white":"bg-yellow-500 text-white"])},[s.value?(Ae(),Fe("svg",zy,[...v[3]||(v[3]=[K("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)])])):(Ae(),Fe("svg",Vy,[...v[4]||(v[4]=[K("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1)])])),Aa(" "+xt(s.value?"Face Detected":"No Face"),1)],2)])]),_:1}),gn(Vr,{title:"Status Display"},{default:xn(()=>[K("div",Uy,[gn(sl,{"student-id":o.value,"student-name":o.value?`Student #${o.value}`:"","staged-choice":a.value,status:n.value,message:i.value},null,8,["student-id","student-name","staged-choice","status","message"])])]),_:1})])]),_:1}))}},Zy=Object.freeze(Object.defineProperty({__proto__:null,default:Gy},Symbol.toStringTag,{value:"Module"}));export{qy as A,Qy as F,$y as Q,Xy as R,Zy as S,Vr as _,Ta as a,Vs as b,Ky as c,Yy as d,Jy as e};
