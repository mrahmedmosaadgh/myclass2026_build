import{_ as q,b as n,c as r,d as s,f as B,H as T,e as k,F as f,q as p,t as g,u as h,s as A,x as v,j as x}from"./comp-section-messages-PXBGd6ZL.js";import{w as C,r as _,p as D}from"./comp-section-common-sXdrx-Jx.js";import{b9 as b}from"./comp-section-chat-CuoDsS00.js";import"./vendor-firebase-BDM1dRg5.js";import"./page-section-old_features-DLmWivLg.js";import"./feature-admin-core-mvqX8gHN.js";import"./page-section-profile-DsBaAs2F.js";import"./page-section-auth-8R-RWw6i.js";import"./page-section-notifications-CWLDrTx9.js";import"./feature-teacher-portal-D_BJUXI0.js";import"./feature-bm-DLdd6AF7.js";import"./page-section-documentation-CUjcLFED.js";import"./vendor-draggable-BFWZr-du.js";import"./page-section-modules-BDLjl1xe.js";import"./feature-classroom-records-BqVZsUt5.js";import"./comp-section-schedule-l0sNRNKZ.js";import"./page-section-my_class-Bn-T562N.js";import"./comp-section-quiz-j96XZPQJ.js";import"./vendor-xlsx-CkFp8p6R.js";import"./page-section-my_table_mnger-gZNE9BP6.js";import"./feature-quiz-engine-CnP2bimX.js";import"./comp-section-ai-CWtBsSwI.js";const M={class:"p-6 bg-white rounded-lg shadow"},w={class:"mb-6"},E={class:"flex gap-4"},H={key:0,class:"mt-6"},L={class:"space-y-4"},N={class:"font-medium"},V=["innerHTML"],W={class:"mt-2"},F=["innerHTML"],P={key:0,class:"text-green-600 ml-2"},S={__name:"MathQuestionsExample",setup($){const a=x(`Sure! Here are five questions on adding fractions suitable for a 4th-grade level: 

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
**D)** \\( \\frac{3}{5} \\)`),o=x([]),y=()=>{try{const i=/(\d+)\.\s+\*\*Question\s+\d+:\*\*(.*?)(?=\n\n\d+\.|$)/gs,e=[...a.value.matchAll(i)];o.value=[];for(const t of e){const u=t[1],c=t[2],l=c.trim(),Q=/\*\*([A-D])\)\*\*\s*(.*?)(?=\n\*\*[A-D]\)\*\*|$)/gs,d=[...c.matchAll(Q)].map(m=>({option:m[2].trim(),feedback:"",isCorrect:m[1]==="A"}));d.length>0&&o.value.push({body:l,options:d})}if(o.value.length===0){const t=D(a.value);if(t.success)o.value=[t.data];else throw new Error(t.error)}b.success(`Successfully parsed ${o.value.length} questions`)}catch(i){console.error("Error parsing questions:",i),b.error("Failed to parse questions: "+i.message)}};return(i,e)=>(n(),r("div",M,[e[4]||(e[4]=s("h2",{class:"text-xl font-semibold mb-4"},"Math Questions Example",-1)),s("div",w,[e[1]||(e[1]=s("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Enter Math Questions Text ",-1)),B(s("textarea",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.value=t),class:"w-full h-48 p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm",placeholder:"Paste your formatted questions here..."},null,512),[[T,a.value]])]),s("div",E,[k(C,{questions:a.value},null,8,["questions"]),s("button",{onClick:y,class:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"}," Parse to Question Bank ")]),o.value.length>0?(n(),r("div",H,[e[3]||(e[3]=s("h3",{class:"text-lg font-medium text-gray-900 mb-2"},"Parsed Questions:",-1)),s("div",L,[(n(!0),r(f,null,p(o.value,(t,u)=>(n(),r("div",{key:u,class:"p-4 bg-gray-50 rounded-lg"},[s("div",N,"Question "+g(u+1),1),s("div",{innerHTML:h(_)(t.body),class:"mt-1"},null,8,V),s("div",W,[e[2]||(e[2]=s("div",{class:"font-medium"},"Options:",-1)),(n(!0),r(f,null,p(t.options,(c,l)=>(n(),r("div",{key:l,class:"ml-4 mt-1"},[A(g(["A","B","C","D"][l])+") ",1),s("span",{innerHTML:h(_)(c.option)},null,8,F),c.isCorrect?(n(),r("span",P,"(Correct)")):v("",!0)]))),128))])]))),128))])])):v("",!0)]))}},ds=q(S,[["__scopeId","data-v-1fa748e8"]]);export{ds as default};
