import{c as t}from"./createLucideIcon-Bry4BaGt.js";import{V as a,Z as l,F as c,$ as r,a1 as n,_ as d,W as p,ag as u,a0 as g}from"./vendor-draggable-tEf0qgFD.js";/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("align-center",[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t("align-justify",[["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 18h18",key:"1h113x"}],["path",{d:"M3 6h18",key:"d0wm0j"}]]);/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("align-left",[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]);/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("align-right",[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]]),f={class:"flex items-center gap-2"},v=["onClick"],M={class:"sr-only"},j={__name:"AlignmentControls",props:{modelValue:{type:String,default:"left"}},emits:["update:model-value"],setup(s){const o=[{value:"left",label:"Align Left",icon:m},{value:"center",label:"Align Center",icon:h},{value:"right",label:"Align Right",icon:k},{value:"justify",label:"Justify",icon:y}];return(i,_)=>(a(),l("div",f,[(a(),l(c,null,r(o,e=>n("button",{key:e.value,onClick:b=>i.$emit("update:model-value",e.value),class:g(["p-2 rounded hover:bg-gray-100",{"bg-gray-200":s.modelValue===e.value}]),type:"button"},[n("span",M,d(e.label),1),(a(),p(u(e.icon),{class:"w-4 h-4"}))],10,v)),64))]))}};export{j as default};
