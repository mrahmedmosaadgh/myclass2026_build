import c from"./purify.es-BgtpMKW3.js";import D from"./EditorToolbar-BIkGg5TP.js";import E from"./EditorContent-mqU_AqlF.js";import F from"./PrintLayout-CvyRhr7T.js";import{ag as M,J as i,I as R,ac as B,ad as H,Q as p,O as b}from"./feature-classroom-records-BVzcKgo-.js";import"./TitleInput-CzG1c9fA.js";import"./TextFormatControls-CNC-V2eW.js";import"./createLucideIcon-N4zGDlmH.js";import"./LineSpacingControl-CzYubDGo.js";import"./AlignmentControls-DMbyETGQ.js";import"./ImageControls-CABtmXcS.js";import"./image-DVWWGgPK.js";import"./PrintButton-BOgcBNlw.js";import"./printer-DjGGeqRo.js";import"./vendor-firebase-CYOMVQO5.js";import"./feature-Communication-CmyvtPLQ.js";import"./feature-Gamification-B6v894k_.js";import"./vendor-draggable-CRx0L8jK.js";const L={class:"relative bg-white"},N={__name:"ReusableHtmlViewer",props:{modelValue:{type:String,required:!0},title:{type:String,default:"Document"}},emits:["update:modelValue"],setup(g,{emit:h}){const s=g,v=h,m=i(s.title),C=i(null),o=i(null),l=i(1.5),r=i("left"),f=i("inline-block"),d=i(100),u=i([]),V=[5,10,15,20,25,33,50,75,100,110,120,150,200,300],y=b(()=>c.sanitize(s.modelValue)),z=b(()=>["bold","italic","underline"].filter(e=>document.queryCommandState(e))),I=e=>{const t=e.target.innerHTML,a=c.sanitize(t);v("update:modelValue",a)},k=e=>{document.execCommand(e,!1,null)},$=e=>{e.target.tagName==="IMG"&&(u.value=[e.target])},U=()=>{u.value.length&&u.value.forEach(e=>{e.style.width=`${d.value}%`})},_=()=>{const e=window.open("","_blank"),t=`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${m.value}</title>
            <style>
                @page {
                    margin: 1cm;
                    size: A4;
                }
                body {
                    font-family: system-ui, -apple-system, sans-serif;
                    line-height: ${l.value};
                    margin: 0;
                    padding: 1cm;
                    text-align: ${r.value};
                }
                .prose {
                    max-width: none;
                }
                .prose img {
                    max-width: 100%;
                    height: auto;
                    page-break-inside: avoid;
                }
                @media print {
                    html, body {
                        width: 210mm;
                        height: 297mm;
                    }
                }
            </style>
        </head>
        <body>
            ${y.value}
        </body>
        </html>
    `;e.document.write(t),e.document.close(),e.onload=()=>{e.print(),e.onafterprint=()=>{e.close()}}},x=e=>new Promise((t,a)=>{const n=new FileReader;n.onload=()=>t(n.result),n.onerror=a,n.readAsDataURL(e)}),S=async()=>{if(!o.value)return;const e=o.value.$el||o.value,t=e.getElementsByTagName("img"),a=Array.from(t).map(async n=>{if(!n.src.startsWith("data:"))try{const T=await(await fetch(n.src)).blob(),A=await x(T);n.src=A}catch(w){console.error("Failed to convert image to base64:",w)}});await Promise.all(a),I({target:e})};return R(()=>s.modelValue,e=>{o.value&&o.value.innerHTML!==e&&(o.value.innerHTML=c.sanitize(e))}),(e,t)=>(B(),H("div",L,[p(D,{title:m.value,"onUpdate:title":t[0]||(t[0]=a=>m.value=a),"line-spacing":l.value,"onUpdate:lineSpacing":t[1]||(t[1]=a=>l.value=a),alignment:r.value,"onUpdate:alignment":t[2]||(t[2]=a=>r.value=a),"image-display-mode":f.value,"onUpdate:imageDisplayMode":t[3]||(t[3]=a=>f.value=a),"image-width":d.value,"onUpdate:imageWidth":t[4]||(t[4]=a=>d.value=a),"active-formats":z.value,"image-sizes":V,onFormat:k,onConvertImagesToBase64:S,onResizeImages:U,onPrint:_},null,8,["title","line-spacing","alignment","image-display-mode","image-width","active-formats"]),p(E,{"model-value":g.modelValue,"line-spacing":l.value,alignment:r.value,"onUpdate:modelValue":t[5]||(t[5]=a=>v("update:modelValue",a)),onImageClick:$,ref_key:"editableContent",ref:o},null,8,["model-value","line-spacing","alignment"]),p(F,{ref_key:"printContainer",ref:C,content:y.value,"line-spacing":l.value,alignment:r.value},null,8,["content","line-spacing","alignment"])]))}},le=M(N,[["__scopeId","data-v-98ba914f"]]);export{le as default};
