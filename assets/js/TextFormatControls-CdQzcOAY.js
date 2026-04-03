import{c as t}from"./createLucideIcon-07sVmtQN.js";import{V as a,Z as l,F as r,$ as y,a1 as s,_ as d,W as p,ag as u,a0 as m}from"./vendor-draggable-DuI17jXH.js";/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t("underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]),_={class:"flex items-center gap-2"},h=["onClick"],g={class:"sr-only"},F={__name:"TextFormatControls",props:{activeFormats:{type:Array,default:()=>[]}},emits:["format"],setup(o){const c=[{type:"bold",label:"Bold",icon:k},{type:"italic",label:"Italic",icon:x},{type:"underline",label:"Underline",icon:b}];return(i,v)=>(a(),l("div",_,[(a(),l(r,null,y(c,e=>{var n;return s("button",{key:e.type,onClick:B=>i.$emit("format",e.type),class:m(["p-2 rounded hover:bg-gray-100",{"bg-gray-200":(n=o.activeFormats)==null?void 0:n.includes(e.type)}]),type:"button"},[s("span",g,d(e.label),1),(a(),p(u(e.icon),{class:"w-4 h-4"}))],10,h)}),64))]))}};export{F as default};
