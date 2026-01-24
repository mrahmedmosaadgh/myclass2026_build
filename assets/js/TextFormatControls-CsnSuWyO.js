import{c as e}from"./createLucideIcon-bevK9Pnz.js";import{N as a,J as t,F as l,Q as n,R as s,I as o,V as r,am as i,U as y}from"./vendor-BWKGNkNB.js";
/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=e("bold",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]),p=e("italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]),d=e("underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]),u={class:"flex items-center gap-2"},m=["onClick"],b={class:"sr-only"},x={__name:"TextFormatControls",props:{activeFormats:{type:Array,default:()=>[]}},emits:["format"],setup(e){const x=[{type:"bold",label:"Bold",icon:c},{type:"italic",label:"Italic",icon:p},{type:"underline",label:"Underline",icon:d}];return(c,p)=>(t(),a("div",u,[(t(),a(l,null,n(x,a=>{var l;return s("button",{key:a.type,onClick:e=>c.$emit("format",a.type),class:y(["p-2 rounded hover:bg-gray-100",{"bg-gray-200":null==(l=e.activeFormats)?void 0:l.includes(a.type)}]),type:"button"},[s("span",b,r(a.label),1),(t(),o(i(a.icon),{class:"w-4 h-4"}))],10,m)}),64))]))}};
/**
 * @license lucide-vue-next v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */export{x as default};
