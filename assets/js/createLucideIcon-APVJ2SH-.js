import{h as e}from"./vendor-EI0FRBVb.js";
/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t=e=>{const o=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,t)=>t?t.toUpperCase():o.toLowerCase()))(e);return o.charAt(0).toUpperCase()+o.slice(1)},r=(...e)=>e.filter((e,o,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===o).join(" ").trim();
/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=({size:i,strokeWidth:l=2,absoluteStrokeWidth:n,color:a,iconNode:c,name:d,class:h,...u},{slots:w})=>e("svg",{...s,width:i||s.width,height:i||s.height,stroke:a||s.stroke,"stroke-width":n?24*Number(l)/Number(i):l,class:r("lucide",...d?[`lucide-${o(t(d))}-icon`,`lucide-${o(d)}`]:["lucide-icon"]),...u},[...c.map(o=>e(...o)),...w.default?[w.default()]:[]]),l=(o,t)=>(r,{slots:s})=>e(i,{...r,iconNode:t,name:o},s);
/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */export{i as I,l as c};
