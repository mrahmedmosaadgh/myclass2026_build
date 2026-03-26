import{a6 as A,r as m,z as o,A as a,S as e,N as p,a3 as B,a7 as T,i as k,F as g,$ as h,Y as v,X as x,W as q}from"./comp-section-ai-7fKxE7Nv.js";import{a4 as C,w as _,y as D}from"./comp-section-common-CAMG35ID.js";import{l as b}from"./comp-section-chat-gTjEVtvu.js";import"./vendor-xlsx-DkH2s96g.js";import"./vendor-firebase-BEwUTpjH.js";const M={class:"p-6 bg-white rounded-lg shadow"},w={class:"mb-6"},E={class:"flex gap-4"},N={key:0,class:"mt-6"},W={class:"space-y-4"},H={class:"font-medium"},L=["innerHTML"],V={class:"mt-2"},S=["innerHTML"],$={key:0,class:"text-green-600 ml-2"},F={__name:"MathQuestionsExample",setup(P){const r=m(`Sure! Here are five questions on adding fractions suitable for a 4th-grade level: 

1. **Question 1:** What is \\( \\frac{1}{4} + \\frac{2}{4} \\)? 

**A)** \\( \\frac{3}{4} \\) 
**B)** \\( \\frac{3}{8} \\) 
**C)** \\( 1 \\) 
**D)** \\( \\frac{1}{2} \\) 

2. **Question 2:** What is \\( \\frac{3}{8} + \\frac{1}{8} \\)? 

**A)** \\( \\frac{4}{8} \\) 
**B)** \\( \\frac{4}{16} \\) 
**C)** \\( \\frac{1}{2} \\) 
**D)** \\( \\frac{3}{4} \\) 

3. **Question 3:** What is \\( \\frac{2}{5} + \\frac{1}{5} \\)? 

**A)** \\( \\frac{3}{10} \\) 
**B)** \\( \\frac{3}{5} \\) 
**C)** \\( \\frac{2}{5} \\) 
**D)** \\( 1 \\) 

4. **Question 4:** What is \\( \\frac{1}{3} + \\frac{2}{3} \\)? 

**A)** \\( \\frac{3}{6} \\) 
**B)** \\( \\frac{3}{3} \\) 
**C)** \\( 1 \\) 
**D)** \\( 3 \\) 

5. **Question 5:** What is \\( \\frac{3}{10} + \\frac{4}{10} \\)? 

**A)** \\( \\frac{7}{10} \\) 
**B)** \\( \\frac{7}{20} \\) 
**C)** \\( \\frac{7}{100} \\) 
**D)** \\( \\frac{3}{5} \\)`),n=m([]),y=()=>{try{const i=/(\d+)\.\s+\*\*Question\s+\d+:\*\*(.*?)(?=\n\n\d+\.|$)/gs,s=[...r.value.matchAll(i)];n.value=[];for(const t of s){const u=t[1],c=t[2],l=c.trim(),Q=/\*\*([A-D])\)\*\*\s*(.*?)(?=\n\*\*[A-D]\)\*\*|$)/gs,d=[...c.matchAll(Q)].map(f=>({option:f[2].trim(),feedback:"",isCorrect:f[1]==="A"}));d.length>0&&n.value.push({body:l,options:d})}if(n.value.length===0){const t=D(r.value);if(t.success)n.value=[t.data];else throw new Error(t.error)}b.success(`Successfully parsed ${n.value.length} questions`)}catch(i){console.error("Error parsing questions:",i),b.error("Failed to parse questions: "+i.message)}};return(i,s)=>(a(),o("div",M,[s[4]||(s[4]=e("h2",{class:"text-xl font-semibold mb-4"},"Math Questions Example",-1)),e("div",w,[s[1]||(s[1]=e("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Enter Math Questions Text ",-1)),B(e("textarea",{"onUpdate:modelValue":s[0]||(s[0]=t=>r.value=t),class:"w-full h-48 p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm",placeholder:"Paste your formatted questions here..."},null,512),[[T,r.value]])]),e("div",E,[k(C,{questions:r.value},null,8,["questions"]),e("button",{onClick:y,class:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"}," Parse to Question Bank ")]),n.value.length>0?(a(),o("div",N,[s[3]||(s[3]=e("h3",{class:"text-lg font-medium text-gray-900 mb-2"},"Parsed Questions:",-1)),e("div",W,[(a(!0),o(g,null,h(n.value,(t,u)=>(a(),o("div",{key:u,class:"p-4 bg-gray-50 rounded-lg"},[e("div",H,"Question "+v(u+1),1),e("div",{innerHTML:x(_)(t.body),class:"mt-1"},null,8,L),e("div",V,[s[2]||(s[2]=e("div",{class:"font-medium"},"Options:",-1)),(a(!0),o(g,null,h(t.options,(c,l)=>(a(),o("div",{key:l,class:"ml-4 mt-1"},[q(v(["A","B","C","D"][l])+") ",1),e("span",{innerHTML:x(_)(c.option)},null,8,S),c.isCorrect?(a(),o("span",$,"(Correct)")):p("",!0)]))),128))])]))),128))])])):p("",!0)]))}},Y=A(F,[["__scopeId","data-v-1fa748e8"]]);export{Y as default};
