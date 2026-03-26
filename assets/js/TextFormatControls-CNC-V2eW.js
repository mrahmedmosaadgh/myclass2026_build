import{c as t}from"./createLucideIcon-N4zGDlmH.js";import{ac as a,ad as o,U as r,ak as y,ae as l,ai as p,ao as d,aF as m,ah as u}from"./feature-classroom-records-BVzcKgo-.js";import"./vendor-firebase-CYOMVQO5.js";import"./feature-Communication-CmyvtPLQ.js";import"./feature-Gamification-B6v894k_.js";import"./vendor-draggable-CRx0L8jK.js";/**
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
 */const b=t("underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]),h={class:"flex items-center gap-2"},_=["onClick"],g={class:"sr-only"},V={__name:"TextFormatControls",props:{activeFormats:{type:Array,default:()=>[]}},emits:["format"],setup(s){const i=[{type:"bold",label:"Bold",icon:k},{type:"italic",label:"Italic",icon:x},{type:"underline",label:"Underline",icon:b}];return(c,v)=>(a(),o("div",h,[(a(),o(r,null,y(i,e=>{var n;return l("button",{key:e.type,onClick:B=>c.$emit("format",e.type),class:u(["p-2 rounded hover:bg-gray-100",{"bg-gray-200":(n=s.activeFormats)==null?void 0:n.includes(e.type)}]),type:"button"},[l("span",g,p(e.label),1),(a(),d(m(e.icon),{class:"w-4 h-4"}))],10,_)}),64))]))}};export{V as default};
