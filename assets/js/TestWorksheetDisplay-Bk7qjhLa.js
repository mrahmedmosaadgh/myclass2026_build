import{r as u}from"./questionParser-BUk53vzj.js";import{b as T}from"./app-BGMalssd.js";import{w as E,o as O,V as n,Z as i,F as b,$ as v,a1 as o,_ as m,a4 as p,a8 as D,a0 as N}from"./vendor-draggable-DuI17jXH.js";import"./purify.es-BgtpMKW3.js";import"./katex-DIdEYY6J.js";import"./vendor-firebase-BCO40ktT.js";/* empty css            */const j={key:0,class:"text-center text-gray-500 py-8"},P={key:1,class:"space-y-8"},H={class:"flex justify-between items-start mb-4"},L={class:"font-semibold text-lg text-gray-800 flex items-center"},M={class:"bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3"},F={key:0},R=["onClick"],z=["innerHTML"],B={class:"p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"},V={class:"flex items-start gap-3"},W={class:"option-marker font-medium text-gray-600 flex-shrink-0"},q=["innerHTML"],I={key:1,class:"mt-4 bg-green-50 p-4 rounded-lg border border-green-200"},Q={class:"text-green-700"},J={key:2,class:"mt-4 text-sm text-gray-600 flex items-center"},K={class:"ml-2 bg-gray-100 px-2 py-1 rounded"},X={key:3,class:"mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100"},Y=["innerHTML"],Z={__name:"TestWorksheetDisplay",props:{questions:{type:Array,required:!0,default:()=>[]},settings:{type:Object,required:!0,default:()=>({showOptions:!0,show_title:!0,showCorrectAnswers:!1,showExplanations:!1,showScore:!0,layout:"compact",showStepNumbers:!0,showNotes:!0,optionsPerRow:"1"})}},emits:["questionDeleted"],setup(a,{expose:x,emit:k}){const l=a,_=k;E(()=>l.settings,e=>{console.log("Settings changed:",e),console.log("Options per row:",e.optionsPerRow)},{deep:!0}),O(()=>{console.log("Initial settings:",l.settings),console.log("Options per row:",l.settings.optionsPerRow)});const C=()=>l.questions.map((e,s)=>`
        <div class="question-item" style="margin-bottom: 2em; page-break-inside: avoid;">
            <div style="font-weight: bold; margin-bottom: 1em;">
                <span>${s+1}. </span>
                <span>${e.title||"Question"}</span>
            </div>

            <div style="margin-bottom: 1.5em;">${f(e.body)}</div>

            ${e.options&&l.settings.showOptions?`
                <div style="
                    display: grid;
                    grid-template-columns: repeat(${Number(l.settings.optionsPerRow)||1}, minmax(0, 1fr));
                    gap: 12px;
                    width: 100%;
                    margin-bottom: 1.5em;
                ">
                    ${g(e.options).map((t,c)=>`
                        <div style="break-inside: avoid; min-width: 0;">
                            <div style="
                                border: 1px solid #ddd;
                                border-radius: 6px;
                                padding: 12px;
                                display: flex;
                                align-items: start;
                                gap: 8px;
                            ">
                                <span style="font-weight: bold; flex-shrink: 0;">
                                    ${String.fromCharCode(65+c)}.
                                </span>
                                <span style="flex-grow: 1; min-width: 0; word-wrap: break-word;">${t.option}</span>
                            </div>
                        </div>
                    `).join("")}
                </div>
            `:""}

            ${l.settings.showCorrectAnswers&&e.options?`
                <div style="
                    margin-top: 1em;
                    padding: 1em;
                    background-color: #f0fdf4;
                    border: 1px solid #bbf7d0;
                    border-radius: 6px;
                ">
                    <div style="font-weight: 500; color: #15803d;">Correct Answer:</div>
                    <div style="color: #166534;">${y(e.options)}</div>
                </div>
            `:""}

            ${l.settings.showExplanations&&e.explanation?`
                <div style="
                    margin-top: 1em;
                    padding: 1em;
                    background-color: #eff6ff;
                    border: 1px solid #bfdbfe;
                    border-radius: 6px;
                ">
                    <div style="font-weight: 500; color: #1e40af;">Explanation:</div>
                    <div style="color: #1e3a8a;">${h(e.explanation)}</div>
                </div>
            `:""}
        </div>
    `).join(""),$=()=>{const e=window.open("","_blank"),s=`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Test Worksheet</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css">
            <style>
                @page { margin: 1cm; }
                body {
                    font-family: system-ui, -apple-system, sans-serif;
                    line-height: 1.5;
                    margin: 0;
                    padding: 1cm;
                }
                * { box-sizing: border-box; }
            </style>
        </head>
        <body>
            ${C()}
        </body>
        </html>
    `;e.document.write(s),e.document.close(),setTimeout(()=>{e.print(),e.onafterprint=()=>{e.close()}},500)},g=e=>Array.isArray(e)?e.map(s=>({...s,option:u(s.option),feedback:s.feedback?u(s.feedback):""})):[],h=e=>{if(!e)return"";try{const s=typeof e=="string"?JSON.parse(e):e;return Array.isArray(s)?s.map((t,c)=>{let d="";return t.step&&(d+=`<div class="explanation-step">
                        ${l.settings.showStepNumbers?`<span class="step-number">Step ${c+1}:</span> `:""}
                        ${t.step}
                    </div>`),l.settings.showNotes&&t.note&&(d+=`<div class="explanation-note text-gray-600 text-sm mt-1 ml-4">${t.note}</div>`),d}).join('<div class="my-2"></div>'):e.toString()}catch{return(e==null?void 0:e.toString())||""}},y=e=>{const t=g(e).map((r,w)=>({letter:String.fromCharCode(65+w),text:r.option,isCorrect:r.isCorrect})).filter(r=>r.isCorrect);if(t.length===0)return"No correct answer specified";const c=t.map(r=>r.letter).join(", "),d=t.map(r=>r.text).join("; ");return`${c} - ${d}`};x({downloadPDF:async({format:e="A4",includeAnswers:s=!1})=>{try{const t=document.getElementById("worksheet-content");if(!t)throw new Error("Content element not found");const c={margin:[.5,.5,.5,.5],filename:`test_worksheet_${new Date().toISOString().slice(0,10)}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,letterRendering:!0},jsPDF:{unit:"in",format:e,orientation:"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}},d=t.cloneNode(!0),r=document.createElement("style");return r.textContent=`
            .question-item {
                page-break-inside: avoid;
                margin-bottom: 20px;
            }
            img {
                max-width: 100%;
                height: auto;
            }
            @media print {
                .question-item {
                    page-break-inside: avoid;
                }
            }
        `,d.prepend(r),s||d.querySelectorAll(".correct-answer").forEach(A=>A.style.display="none"),console.log("not working html2pdf___....."),!0}catch(t){throw console.error("PDF generation failed:",t),t}},print:$});const f=e=>e?u(e):"",S=(e,s)=>{if(confirm("Are you sure you want to delete this question?"))try{_("questionDeleted",{question:e,index:s})}catch(t){console.error("Error deleting question:",t),alert("Failed to delete question")}};return(e,s)=>(n(),i("div",{class:N(["p-6",a.settings.layout])},[!a.questions||a.questions.length===0?(n(),i("div",j," No questions available ")):(n(),i("div",P,[(n(!0),i(b,null,v(a.questions,(t,c)=>(n(),i("div",{key:c,class:"question-item bg-white rounded-lg shadow-sm border border-gray-200 p-6"},[o("div",H,[o("div",L,[o("span",M,m(c+1),1),a.settings.show_title?(n(),i("span",F,m(t.title||"Question"),1)):p("",!0)]),o("button",{onClick:d=>S(t,c),class:"text-red-600 hover:text-red-800 transition-colors",title:"Delete question"},[...s[0]||(s[0]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[o("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1)])],8,R)]),o("div",{class:"mb-6 text-gray-700 question-content",innerHTML:f(t.body)},null,8,z),a.settings.showOptions&&t.options?(n(),i("div",{key:0,class:"options-container",style:D({display:"grid",gridTemplateColumns:`repeat(${Number(a.settings.optionsPerRow)||1}, minmax(0, 1fr))`,gap:"0.75rem",width:"100%"})},[(n(!0),i(b,null,v(g(t.options),(d,r)=>(n(),i("div",{key:r,class:"option-item",style:{minWidth:"0",breakInside:"avoid"}},[o("div",B,[o("div",V,[o("span",W,m(String.fromCharCode(65+r))+". ",1),o("div",{class:"flex-grow",innerHTML:d.option},null,8,q)])])]))),128))],4)):p("",!0),a.settings.showCorrectAnswers&&t.options?(n(),i("div",I,[s[1]||(s[1]=o("div",{class:"font-medium text-green-800 mb-2"},"The Correct Answer:",-1)),o("div",Q,m(y(t.options)),1)])):p("",!0),a.settings.showScore&&t.score?(n(),i("div",J,[s[2]||(s[2]=o("span",{class:"font-medium"},"Score:",-1)),o("span",K,m(t.score),1)])):p("",!0),a.settings.showExplanations&&t.explanation?(n(),i("div",X,[s[3]||(s[3]=o("div",{class:"font-medium text-blue-800 mb-2"},"Explanation:",-1)),o("div",{class:"text-blue-700",innerHTML:h(t.explanation)},null,8,Y)])):p("",!0)]))),128))]))],2))}},ie=T(Z,[["__scopeId","data-v-edcc35a5"]]);export{ie as default};
