import{e as r,w as k,V as q,Z as _,B as l,X as g,a6 as v,a1 as s,I as $,a9 as R,ad as V,_ as f,W as z,a4 as B}from"./vendor-draggable-DuI17jXH.js";import{ao as i}from"./app-DNVVuKjJ.js";import L from"./Modal_99--T_ToNhF.js";import O from"./TestWorksheetSettings-C33wGnLU.js";import j from"./TestWorksheetDisplay-BhEr5iKE.js";import{_ as h}from"./LucideIcon-D6qOWObK.js";import{_ as I}from"./PrimaryButton-B1ZOSSrR.js";import{r as C}from"./questionParser-7nwJKM4p.js";import"./vendor-firebase-BCO40ktT.js";/* empty css            */import"./createLucideIcon-07sVmtQN.js";import"./printer-C0wvXS3d.js";import"./image-DuTzAFIg.js";import"./purify.es-BgtpMKW3.js";import"./katex-DQxxgI0l.js";const M={class:"flex items-center justify-between"},U={class:"flex items-center space-x-2"},Y={class:"p-0"},G={class:"min-h-[60vh] p-6"},K={class:"hidden"},X={key:1,class:"text-center text-gray-500 py-8"},H={class:"flex items-center justify-between w-full px-6 py-4 bg-gray-50"},Z={class:"flex items-center space-x-2"},J={class:"inline-flex items-center"},ve={__name:"test",props:{questions:{type:Array,required:!0,validator:y=>Array.isArray(y)}},emits:["generate","close","update:questions"],setup(y,{emit:P}){const n=y,T=r(!1),w=r(!1),a=r({showOptions:!0,showCorrectAnswers:!1,showExplanations:!1,showScore:!0,layout:"compact",showStepNumbers:!0,showNotes:!0,optionsPerRow:"2"}),c=r(null),d=r("A4"),p=r(!1),u=r([...n.questions]),D=()=>{u.value=[...n.questions].map(t=>({value:t,sort:Math.random()})).sort((t,e)=>t.sort-e.sort).map(({value:t})=>t),c.value&&c.value.$forceUpdate(),i.success("Questions randomized successfully")},S=P,F=t=>{console.log("Received settings:",t),a.value=t},x=()=>{w.value=!1},E=t=>t.map((e,o)=>`
        <div class="question-item">
            <div class=" inline-block question-content">
                <span class="question-number  pr-2 ">  ${o+1}.</span>
                ${C(e.body)}</div>
            ${e.options&&a.value.showOptions?`<div class="options-container">
                    ${e.options.map((m,b)=>`
                        <div class="option-item">
                            <div style="display: flex; align-items: start; gap: 8px;">
                                <span class="option-label">${String.fromCharCode(65+b)}.</span>
                                <span class="option-text">${C(m.option)}</span>
                                ${a.value.showCorrectAnswers&&m.isCorrect?'<span class="correct-marker" style="color: #15803d; margin-left: 8px;">(Correct)</span>':""}
                            </div>
                        </div>
                    `).join("")}
                </div>`:""}
            ${a.value.showExplanations&&e.explanation?`<div class="explanation" style="margin-top: 1em; padding: 1em; background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px;">
                    <div style="font-weight: 500; color: #1e40af;">Explanation:</div>
                    <div style="color: #1e3a8a;">${C(e.explanation)}</div>
                </div>`:""}
        </div>
    `).join(""),A=()=>{const t=window.open("","_blank"),e=`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Test Worksheet</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css">
            <style>
                @page {
                    size: ${d.value};
                    margin: 1cm;
                }
                body {
                    font-family: system-ui, -apple-system, sans-serif;
                    line-height: 1.5;
                    margin: 0;
                    padding: 1cm;
                }
                .question-item {
                    page-break-inside: avoid;
                    margin-bottom: 2em;
                }
                .options-container {
                    display: grid;
                    grid-template-columns: repeat(${a.value.optionsPerRow}, minmax(0, 1fr));
                    gap: 12px;
                    width: 100%;
                    margin-bottom: 1em;
                }
                .option-item {
                    break-inside: avoid;
                    min-width: 0;
                    padding: 12px;
                }
            </style>
        </head>
        <body>
            ${E(u.value)}
        </body>
        </html>
    `;t.document.write(e),t.document.close(),setTimeout(()=>{t.print(),t.onafterprint=()=>{t.close()}},500)},Q=async()=>{if(c.value){const t="pdf-generation";try{i.info("Generating PDF...",{autoClose:!1,toastId:t});const e=window.open("","_blank"),o=document.getElementById("worksheet-content");e.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Test Worksheet</title>
                    <style>
                        @page {
                            size: ${d.value};
                            margin: 1cm;
                        }
                        body {
                            font-family: system-ui, -apple-system, sans-serif;
                            line-height: 1.5;
                            margin: 0;
                            padding: 1cm;
                        }
                        .question-item {
                            page-break-inside: avoid;
                            margin-bottom: 2em;
                        }
                        img {
                            max-width: 100%;
                            height: auto;
                        }
                        @media print {
                            .question-item {
                                break-inside: avoid;
                            }
                        }
                        ${p.value?"":".correct-answer { display: none; }"}
                    </style>
                </head>
                <body>
                    ${o.innerHTML}
                </body>
                </html>
            `),e.document.close(),e.onload=()=>{e.document.title=`test_worksheet_${new Date().toISOString().slice(0,10)}`,e.print(),e.onafterprint=()=>{e.close(),i.update(t,{type:i.TYPE.SUCCESS,content:"PDF generated successfully",autoClose:3e3})}}}catch(e){console.error("PDF generation error:",e),i.update(t,{type:i.TYPE.ERROR,content:"Failed to generate PDF",autoClose:3e3})}}},W=async()=>{try{const t=await axios.post("/api/worksheets",{settings:a.value,format:d.value,includeAnswers:p.value,questions:n.questions});i.success("Test saved successfully"),x()}catch{i.error("Failed to save test")}},N=({question:t,index:e})=>{try{u.value=u.value.filter((m,b)=>b!==e);const o=n.questions.filter(m=>m.id!==t.id);S("update:questions",o),i.success("Question removed from worksheet")}catch(o){console.error("Error removing question:",o),i.error("Failed to remove question")}};return k(()=>n.questions,t=>{console.log("Questions updated:",t)},{immediate:!0}),k(()=>T.value,t=>{console.log("showTestPreview updated:",t)},{immediate:!0}),k(()=>a.value,t=>{console.log("testSettings updated:",t)},{immediate:!0}),(t,e)=>(q(),_("div",null,[l(I,{onClick:e[0]||(e[0]=o=>w.value=!0),class:"flex items-center"},{default:g(()=>[l(h,{name:"file-text",class:"w-4 h-4 mr-2"}),e[3]||(e[3]=v(" Generate Test/Worksheet ",-1))]),_:1}),l(L,{show:w.value,onClose:x,maxWidth:"7xl",closeable:!0},{title:g(()=>[s("div",M,[e[7]||(e[7]=s("h2",{class:"text-lg font-medium"},"Test Preview",-1)),s("div",U,[s("button",{type:"button",class:"inline-flex items-center px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 mr-2",onClick:D},[l(h,{name:"shuffle",class:"w-4 h-4 mr-1"}),e[4]||(e[4]=v(" Randomize ",-1))]),s("button",{type:"button",class:"inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700",onClick:A},[l(h,{name:"printer",class:"w-4 h-4 mr-1"}),e[5]||(e[5]=v(" Print ",-1))]),s("button",{type:"button",class:"inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700",onClick:Q},[l(h,{name:"file-down",class:"w-4 h-4 mr-1"}),e[6]||(e[6]=v(" Download PDF ",-1))])])])]),content:g(()=>{var o;return[l(O,{questions:n.questions,onGenerate:F},null,8,["questions"]),s("div",Y,[s("div",G,[s("div",K," showTestPreview: "+f(T.value)+" hasQuestions: "+f(n.questions&&n.questions.length>0)+" questionsLength: "+f((o=n.questions)==null?void 0:o.length)+" settings: "+f(a.value),1),n.questions&&n.questions.length>0?(q(),z(j,{key:0,questions:u.value,settings:a.value,ref_key:"worksheetDisplay",ref:c,onQuestionDeleted:N},null,8,["questions","settings"])):t.showSettings&&(!n.questions||!n.questions.length)?(q(),_("div",X," No questions available to display ")):B("",!0)])])]}),footer:g(()=>[s("div",H,[s("div",Z,[$(s("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o),class:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[...e[8]||(e[8]=[s("option",{value:"A4"},"A4 Format",-1),s("option",{value:"Letter"},"Letter Format",-1),s("option",{value:"Legal"},"Legal Format",-1)])],512),[[R,d.value]]),s("label",J,[$(s("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=o=>p.value=o),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[V,p.value]]),e[9]||(e[9]=s("span",{class:"ml-2 text-sm text-gray-600"},"Include Answer Key",-1))])]),s("div",{class:"flex space-x-3"},[s("button",{type:"button",class:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700",onClick:W}," Save Test "),s("button",{type:"button",class:"px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300",onClick:x}," Close ")])])]),_:1},8,["show"])]))}};export{ve as default};
