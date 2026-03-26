import{_ as q,b as n,c as r,d as t,f as B,H as T,e as k,F as p,q as f,t as g,u as h,s as A,x as v,j as x}from"./comp-section-messages-BWYvTHip.js";import{x as C,r as _,p as D}from"./comp-section-common-DNo0evGc.js";import{b7 as b}from"./comp-section-chat-CAwrfKYV.js";import"./vendor-firebase-BDM1dRg5.js";import"./page-section-old_features-DL09R5QM.js";import"./feature-admin-core-C0NABfF3.js";import"./page-section-profile-CXHmblDq.js";import"./page-section-auth-BF0HrZhN.js";import"./page-section-notifications-BLI5Q4-7.js";import"./feature-teacher-portal-BwtKXwvB.js";import"./feature-bm-DDG35c6j.js";import"./role-school-admin-D9-CijqB.js";import"./feature-smart-scanner-DTGguXJQ.js";import"./feature-classroom-records-BQZp6418.js";import"./vendor-xlsx-CkFp8p6R.js";import"./page-section-weeklyplans-BIMaZqdm.js";import"./page-section-documentation-ChFkfRxm.js";import"./page-section-modules-Dwlio5iJ.js";import"./comp-section-schedule-l0sNRNKZ.js";import"./page-section-my_class-Bsic1ksB.js";import"./comp-section-quiz-BisM-gEg.js";import"./page-section-my_table_mnger-B_npAt--.js";import"./feature-quiz-engine-dCqPC_yf.js";import"./role-teacher-DoYM36LQ.js";import"./comp-section-dailytasks-BUhEvoVU.js";import"./feature-Gamification-ClsAo9co.js";import"./comp-section-ai-DaiFpqMW.js";const M={class:"p-6 bg-white rounded-lg shadow"},w={class:"mb-6"},E={class:"flex gap-4"},H={key:0,class:"mt-6"},L={class:"space-y-4"},N={class:"font-medium"},V=["innerHTML"],W={class:"mt-2"},F=["innerHTML"],P={key:0,class:"text-green-600 ml-2"},S={__name:"MathQuestionsExample",setup($){const a=x(`Sure! Here are five questions on adding fractions suitable for a 4th-grade level: 

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
**D)** \\( \\frac{3}{5} \\)`),o=x([]),y=()=>{try{const i=/(\d+)\.\s+\*\*Question\s+\d+:\*\*(.*?)(?=\n\n\d+\.|$)/gs,s=[...a.value.matchAll(i)];o.value=[];for(const e of s){const u=e[1],c=e[2],l=c.trim(),Q=/\*\*([A-D])\)\*\*\s*(.*?)(?=\n\*\*[A-D]\)\*\*|$)/gs,m=[...c.matchAll(Q)].map(d=>({option:d[2].trim(),feedback:"",isCorrect:d[1]==="A"}));m.length>0&&o.value.push({body:l,options:m})}if(o.value.length===0){const e=D(a.value);if(e.success)o.value=[e.data];else throw new Error(e.error)}b.success(`Successfully parsed ${o.value.length} questions`)}catch(i){console.error("Error parsing questions:",i),b.error("Failed to parse questions: "+i.message)}};return(i,s)=>(n(),r("div",M,[s[4]||(s[4]=t("h2",{class:"text-xl font-semibold mb-4"},"Math Questions Example",-1)),t("div",w,[s[1]||(s[1]=t("label",{class:"block text-sm font-medium text-gray-700 mb-2"}," Enter Math Questions Text ",-1)),B(t("textarea",{"onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e),class:"w-full h-48 p-3 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 font-mono text-sm",placeholder:"Paste your formatted questions here..."},null,512),[[T,a.value]])]),t("div",E,[k(C,{questions:a.value},null,8,["questions"]),t("button",{onClick:y,class:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"}," Parse to Question Bank ")]),o.value.length>0?(n(),r("div",H,[s[3]||(s[3]=t("h3",{class:"text-lg font-medium text-gray-900 mb-2"},"Parsed Questions:",-1)),t("div",L,[(n(!0),r(p,null,f(o.value,(e,u)=>(n(),r("div",{key:u,class:"p-4 bg-gray-50 rounded-lg"},[t("div",N,"Question "+g(u+1),1),t("div",{innerHTML:h(_)(e.body),class:"mt-1"},null,8,V),t("div",W,[s[2]||(s[2]=t("div",{class:"font-medium"},"Options:",-1)),(n(!0),r(p,null,f(e.options,(c,l)=>(n(),r("div",{key:l,class:"ml-4 mt-1"},[A(g(["A","B","C","D"][l])+") ",1),t("span",{innerHTML:h(_)(c.option)},null,8,F),c.isCorrect?(n(),r("span",P,"(Correct)")):v("",!0)]))),128))])]))),128))])])):v("",!0)]))}},ht=q(S,[["__scopeId","data-v-1fa748e8"]]);export{ht as default};
