import{d as Q,ao as le,j as be,b as _,Q as W,n as J,c as ke}from"./feature-Communication-CmyvtPLQ.js";import{p as Pe,v as xe,d as Ce,e as se,k as ae,l as Ve,j as qe}from"./feature-Gamification-B6v894k_.js";import{Q as Te}from"./feature-weekly_system_v1-oZeBGTWu.js";import{ag as De,at as Me,I as oe,L as ze,ab as Qe,ac as u,ad as h,Q as i,ae as l,aq as f,ai as r,_ as c,ap as p,aj as C,ao as S,Y as ne,aB as re,U as F,ak as K,ah as Se,aC as Ne,y as H,J as m,O as k}from"./feature-classroom-records-BVzcKgo-.js";import{u as Ee}from"./useWeeklyPlansStore-lSqTsBmI.js";import Ie from"./WeekSelector-DAyJSCZG.js";import Le from"./WeeklyPlanEditor-CeKVkXnG.js";import je from"./WeeklyPlanClassroomList-DlgJ13hf.js";import $e from"./StatusBadge-Dr_gh5F1.js";import We from"./WeeklyPlanMenu-DZUx9xEm.js";import"./vendor-firebase-CYOMVQO5.js";import"./vendor-draggable-CRx0L8jK.js";import"./feature-focus-grid-BMtfcDp0.js";import"./schoolData-Deb9hCHu.js";import"./app-DLBYGeXG.js";import"./QEditor-ayqcAgZQ.js";import"./WeeklySystemGuide-CXf4wSmz.js";import"./MainSchoolData-Cmqsl0vH.js";import"./SchoolSettingsDialog-CZIJS23m.js";const Fe={class:"q-pa-md"},He={class:"row items-center q-mb-lg"},Ue={class:"col"},Be={class:"q-ma-none text-weight-bold"},Ae={class:"text-grey-7 q-mb-none"},Oe={class:"row q-gutter-md items-center"},Re={class:"col-12 col-sm-6 col-md-4"},Ye={class:"col-auto q-ml-auto"},Ge={class:"absolute-full flex flex-center"},Je={class:"text-caption text-weight-bold"},Ke={class:"row q-gutter-md items-center q-mt-sm"},Xe={class:"col-12 col-sm-6 col-md-4"},Ze={class:"col-12 col-sm-6 col-md-4"},et={class:"col-auto"},tt={key:0,class:"col-12 col-sm-6 col-md-auto q-gutter-sm"},lt={key:0,class:"row justify-center q-pa-xl"},st={class:"text-h6 text-grey-7 q-mt-md"},at={class:"text-grey-6"},ot={class:"plans-grid"},nt={class:"day-header"},rt=["onClick"],it={class:"period-badge"},ct={class:"subject-name"},dt={class:"flex q-gutter-xs"},ut={class:"classroom text-caption text-grey-7"},mt={class:"plan-status"},yt={key:0,class:"plan-preview text-caption"},pt={key:0,class:"preview-item"},ht={key:1,class:"preview-item"},vt={class:"preview-container q-pa-md"},wt={id:"print-area",class:"a4-page"},_t={class:"print-header q-mb-lg"},ft={class:"q-ma-none"},gt={class:"q-ma-xs text-grey-7"},bt={class:"q-ma-xs text-grey-7"},kt={class:"q-ma-xs text-grey-7"},Pt={class:"print-table"},xt={class:"text-center"},Ct=["innerHTML"],Vt=["innerHTML"],qt=["innerHTML"],Tt={class:"print-footer q-mt-lg"},Dt={class:"text-caption text-grey-6"},Mt={__name:"MyWeeklyPlans",setup(zt){const{t:n,locale:ie}=Pe(),y=Me(),N=Ee(),P=m([]),V=m(null),g=m(1),ce=m(18),U=m(1),w=m([]),E=m([]),v=m(null),I=m(null),q=m(!1),X=m(null),L=m(!1),j=m(!1),$=m("by-classroom"),B=m(!1),A=m({}),O=m(!1),Z=k(()=>[{label:n("weeklyPlans.fullDays.1"),value:1},{label:n("weeklyPlans.fullDays.2"),value:2},{label:n("weeklyPlans.fullDays.3"),value:3},{label:n("weeklyPlans.fullDays.4"),value:4},{label:n("weeklyPlans.fullDays.5"),value:5}]),ee=k(()=>{const t={};return Z.value.forEach(e=>{t[e.value]=e.label}),t}),de=k(()=>{const t=new Set;return P.value.forEach(e=>{var o,a;(a=(o=e.schedule)==null?void 0:o.cst)!=null&&a.classroom_name&&t.add(e.schedule.cst.classroom_name)}),Array.from(t).sort()}),R=k(()=>{var e,o;let t=P.value;return(e=w.value)!=null&&e.length&&(t=t.filter(a=>{var s,d;return w.value.includes((d=(s=a.schedule)==null?void 0:s.cst)==null?void 0:d.classroom_name)})),(o=E.value)!=null&&o.length&&(t=t.filter(a=>{var s;return E.value.includes((s=a.schedule)==null?void 0:s.day)})),t}),ue=k(()=>{const t={};return R.value.forEach(e=>{var a;const o=(a=e.schedule)==null?void 0:a.day;!o||o<1||o>7||(t[o]||(t[o]={dayNumber:o,dayName:n(`weeklyPlans.fullDays.${o}`)||`Day ${o}`,plans:[]}),t[o].plans.push(e))}),Object.values(t).forEach(e=>{e.plans.sort((o,a)=>{var s,d;return((s=o.schedule)==null?void 0:s.period_number)-((d=a.schedule)==null?void 0:d.period_number)})}),Object.values(t).sort((e,o)=>e.dayNumber-o.dayNumber)}),Y=k(()=>{const t=P.value.length;if(!t)return 0;const e=P.value.filter(o=>o.status==="completed").length;return Math.round(e/t*100)}),me=k(()=>{const t=Y.value;return t===100?"positive":t>=50?"warning":"negative"}),G=t=>{var a,s;const e=!!((a=t.cw)!=null&&a.trim()),o=!!((s=t.hw)!=null&&s.trim());return!e&&!o?"empty":e&&o?"completed":"partial"},ye=t=>{var e,o,a,s;return{backgroundColor:((o=(e=t.schedule)==null?void 0:e.cst)==null?void 0:o.c_bg)||"#e0e0e0",color:((s=(a=t.schedule)==null?void 0:a.cst)==null?void 0:s.c_text)||"#333"}},b=async()=>{O.value=!0;try{const t=await H.get("/weekly-system/api/teacher/my-weekly-plans",{params:{week_number:g.value,semester_number:N.semesterNumber}});P.value=(t.data.data||t.data||[]).map(e=>{var a,s,d;return{id:e.id,academic_year_id:e.academic_year_id,semester_number:e.semester_number,week_number:e.week_number,day_number:e.day_number,period_order:e.period_order,schedule_id:e.schedule_id,cw:e.cw||"",hw:e.hw||"",notes:e.notes||"",comments:e.comments,created_at:e.created_at,updated_at:e.updated_at,status:G(e),...e.schedule?{schedule:{id:e.schedule.id,cst_id:e.schedule.cst_id,day_number:e.schedule.day_number,period_order:e.schedule.period_order,cst:e.schedule.cst},classroom_id:(a=e.schedule.cst)==null?void 0:a.classroom_id,subject_id:(s=e.schedule.cst)==null?void 0:s.subject_id,teacher_id:(d=e.schedule.cst)==null?void 0:d.teacher_id}:{}}})}catch(t){console.error("Error fetching plans:",t),y.notify({type:"negative",message:"Failed to load weekly plans"})}finally{O.value=!1}},te=t=>{v.value||(X.value=t,q.value=!0)},pe=(t,e)=>{e.stopPropagation(),v.value={cw:t.cw,hw:t.hw,notes:t.notes},I.value=t.id,y.notify({message:n("weeklyPlans.teacher.copy"),color:"info",icon:"content_copy",timeout:2e3})},he=t=>{t.stopPropagation(),v.value=null,I.value=null},ve=async(t,e)=>{var o;if(console.log("Pasting plan:",t.id),console.log("Pasting plan:",t),e.stopPropagation(),!!v.value){if(!t.id||t.id<=0||t.id>1e4){y.notify({type:"negative",message:"Invalid plan ID"});return}try{await H.put(`/weekly-system/api/weekly-plans/${t.id}`,{...v.value}),t.cw=v.value.cw,t.hw=v.value.hw,t.notes=v.value.notes,t.status=G(t),y.notify({type:"positive",message:n("weeklyPlans.teacher.paste")})}catch(a){console.error("Error pasting plan:",a),((o=a.response)==null?void 0:o.status)===404?(y.notify({type:"warning",message:"Plan not found. Refreshing data...",timeout:2e3}),await b()):y.notify({type:"negative",message:"Failed to paste data"})}}},we=async t=>{var e;if(L.value=!0,!t.id||t.id<=0||t.id>1e4){y.notify({type:"negative",message:"Invalid plan ID"}),L.value=!1;return}try{await H.put(`/weekly-system/api/weekly-plans/${t.id}`,{cw:t.cw,hw:t.hw,notes:t.notes}),y.notify({type:"positive",message:"Weekly plan saved!"}),q.value=!1,await b()}catch(o){console.error("Error saving plan:",o),((e=o.response)==null?void 0:e.status)===404?(y.notify({type:"warning",message:"Plan not found. Refreshing data...",timeout:2e3}),await b(),q.value=!1):y.notify({type:"negative",message:"Failed to save plan"})}finally{L.value=!1}},_e=async t=>{var e;if(!(!t.cw&&!t.hw&&!t.notes)&&!A.value[t.id]){if(!t.id||t.id<=0||t.id>1e4){y.notify({type:"negative",message:"Invalid plan ID"});return}A.value[t.id]=!0;try{await H.put(`/weekly-system/api/weekly-plans/${t.id}`,{cw:t.cw,hw:t.hw,notes:t.notes}),t.status=G(t),y.notify({type:"positive",message:"Saved!",timeout:1e3,position:"top"})}catch(o){console.error("Error saving inline edit:",o),((e=o.response)==null?void 0:e.status)===404?(y.notify({type:"warning",message:"Plan not found. Refreshing data...",timeout:2e3}),await b()):y.notify({type:"negative",message:"Failed to save changes"})}finally{delete A.value[t.id]}}},fe=()=>{const t=document.getElementById("print-area");if(!t){y.notify({type:"negative",message:"Print area not found"});return}const e=window.open("","_blank");e.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Weekly Plans - Print</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        @page {
          size: A4;
          margin: 10mm;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: white;
          color: #333;
          line-height: 1.4;
        }
        
        .print-header {
          margin-bottom: 24px;
          border-bottom: 2px solid #1976d2;
          padding-bottom: 12px;
        }
        
        .print-header h2 {
          font-size: 24px;
          color: #1976d2;
          margin-bottom: 8px;
        }
        
        .print-header p {
          font-size: 12px;
          color: #666;
          margin: 4px 0;
        }
        
        .print-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          font-size: 11px;
        }
        
        .print-table thead {
          background-color: #f5f5f5;
          border-bottom: 2px solid #1976d2;
        }
        
        .print-table th {
          padding: 10px;
          text-align: left;
          font-weight: 600;
          color: #1976d2;
          border: 1px solid #ddd;
        }
        
        .print-table td {
          padding: 10px;
          border: 1px solid #ddd;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .print-table tbody tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        
        .print-table tbody tr:hover {
          background-color: #f0f0f0;
        }
        
        .text-center {
          text-align: center;
        }
        
        .content-cell {
          max-width: 120px;
          white-space: pre-wrap;
          line-height: 1.5;
        }
        
        .content-cell a {
          color: #1976d2;
          text-decoration: underline;
        }
        
        .content-cell p {
          margin: 4px 0;
        }
        
        .content-cell ul,
        .content-cell ol {
          margin: 4px 0;
          padding-left: 20px;
        }
        
        .content-cell li {
          margin: 2px 0;
        }
        
        .content-cell strong {
          font-weight: 600;
        }
        
        .content-cell em {
          font-style: italic;
        }
        
        
        .print-footer {
          margin-top: 20px;
          border-top: 1px solid #ddd;
          padding-top: 10px;
          text-align: right;
          font-size: 10px;
          color: #999;
        }
        
        @media print {
          body {
            background-color: white;
          }
          
          .print-table {
            page-break-inside: avoid;
          }
          
          .print-table tbody tr {
            page-break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      ${t.innerHTML}
    </body>
    </html>
  `),e.document.close(),e.onload=()=>{setTimeout(()=>{e.print(),e.close()},250)}},ge=()=>{V.value&&(V.value.openMobilePrint(),setTimeout(()=>{V.value.downloadPDF()},100))};return oe(()=>g.value,()=>{b()}),oe(()=>N.semesterNumber,()=>{b()}),ze(()=>{const t=new Date,e=new Date(t.getFullYear(),0,1),o=Math.ceil(((t.getTime()-e.getTime())/864e5+e.getDay()+1)/7);U.value=Math.min(o,18),g.value=U.value,b()}),(t,e)=>{const o=Qe("Head");return u(),h(F,null,[i(o,{title:"My Weekly Plans"}),l("div",Fe,[i(We),l("div",He,[l("div",Ue,[l("h4",Be,[i(Q,{name:"edit_note",class:"q-mr-sm",color:"primary"}),f(" "+r(c(n)("weeklyPlans.teacher.myWeeklyPlans")),1)]),l("p",Ae,r(c(n)("weeklyPlans.teacher.fillInContent")),1)])]),i(W,{flat:"",bordered:"",class:"q-pa-md q-mb-lg"},{default:p(()=>{var a;return[l("div",Oe,[l("div",Re,[i(Ie,{modelValue:g.value,"onUpdate:modelValue":e[0]||(e[0]=s=>g.value=s),"max-weeks":ce.value,"current-week":U.value},null,8,["modelValue","max-weeks","current-week"])]),l("div",Ye,[i(xe,{value:Y.value/100,size:"25px",color:me.value,"track-color":"grey-3",rounded:"",style:{width:"150px"}},{default:p(()=>[l("div",Ge,[l("span",Je,r(Y.value)+"%",1)])]),_:1},8,["value","color"])])]),l("div",Ke,[l("div",Xe,[i(le,{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=s=>w.value=s),options:de.value,label:c(n)("weeklyPlans.teacher.selectToView"),outlined:"",dense:"",multiple:"","use-chips":"",clearable:""},null,8,["modelValue","options","label"])]),l("div",Ze,[i(le,{modelValue:E.value,"onUpdate:modelValue":e[2]||(e[2]=s=>E.value=s),options:Z.value,label:c(n)("weeklyPlans.filterByDay"),outlined:"",dense:"",multiple:"","use-chips":"",clearable:"","emit-value":"","map-options":""},null,8,["modelValue","options","label"])]),l("div",et,[i(be,{modelValue:B.value,"onUpdate:modelValue":e[3]||(e[3]=s=>B.value=s),label:c(n)("weeklyPlans.teacher.inlineEditMode"),color:"primary",icon:"edit"},null,8,["modelValue","label"])]),((a=w.value)==null?void 0:a.length)>0?(u(),h("div",tt,[i(_,{color:"primary",label:c(n)("weeklyPlans.teacher.previewAndPrint"),icon:"print",onClick:e[4]||(e[4]=s=>j.value=!0),outline:""},null,8,["label"]),i(_,{color:"secondary",label:c(n)("weeklyPlans.teacher.mobilePrint"),icon:"phone_iphone",onClick:e[5]||(e[5]=s=>{var d;return(d=V.value)==null?void 0:d.openMobilePrint()}),outline:""},null,8,["label"]),i(_,{color:"red-7",label:c(n)("weeklyPlans.teacher.downloadPdf"),icon:"picture_as_pdf",onClick:ge,outline:""},null,8,["label"])])):C("",!0)])]}),_:1}),O.value?(u(),h("div",lt,[i(Te,{size:"50px",color:"primary"})])):P.value.length?(u(),S(W,{key:2,flat:"",bordered:"",class:"q-mb-lg"},{default:p(()=>[i(Ce,{modelValue:$.value,"onUpdate:modelValue":e[6]||(e[6]=a=>$.value=a),dense:"",class:"text-grey-7","active-color":"primary","indicator-color":"primary",align:"left"},{default:p(()=>[i(se,{name:"by-classroom",label:c(n)("weeklyPlans.teacher.byClassroom"),icon:"meeting_room",disable:!w.value||w.value.length===0},null,8,["label","disable"]),i(se,{name:"by-day",label:c(n)("weeklyPlans.teacher.byDay"),icon:"calendar_today"},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})):(u(),S(W,{key:1,flat:"",bordered:"",class:"text-center q-pa-xl"},{default:p(()=>[i(Q,{name:"event_note",size:"64px",color:"grey-5"}),l("p",st,r(c(n)("weeklyPlans.teacher.noPlans")),1),l("p",at,r(c(n)("weeklyPlans.teacher.waitAdminGen")),1)]),_:1})),ne(l("div",ot,[(u(!0),h(F,null,K(ue.value,a=>(u(),h("div",{key:a.dayNumber,class:"day-column"},[l("div",nt,r(a.dayName),1),(u(!0),h(F,null,K(a.plans,s=>{var d,T,D,M,z;return u(),h("div",{key:s.id,class:Se(["plan-card",{"is-completed":s.status==="completed","is-partial":s.status==="partial"}]),onClick:x=>te(s)},[l("div",{class:"plan-header",style:Ne(ye(s))},[l("span",it,"P"+r((d=s.schedule)==null?void 0:d.period_number),1),l("span",ct,r((D=(T=s.schedule)==null?void 0:T.cst)==null?void 0:D.subject_name),1),i(ae),l("div",dt,[I.value===s.id?(u(),S(_,{key:0,icon:"close",size:"xs",flat:"",round:"",color:"white",onClick:e[7]||(e[7]=x=>he(x))},{default:p(()=>[i(J,null,{default:p(()=>[f(r(c(n)("weeklyPlans.teacher.cancelCopy")),1)]),_:1})]),_:1})):v.value?C("",!0):(u(),S(_,{key:1,icon:"content_copy",size:"xs",flat:"",round:"",color:"white",onClick:x=>pe(s,x)},{default:p(()=>[i(J,null,{default:p(()=>[f(r(c(n)("weeklyPlans.teacher.copy")),1)]),_:1})]),_:1},8,["onClick"])),v.value&&I.value!==s.id?(u(),S(_,{key:2,icon:"content_paste",size:"xs",flat:"",round:"",color:"white",onClick:x=>ve(s,x)},{default:p(()=>[i(J,null,{default:p(()=>[f(r(c(n)("weeklyPlans.teacher.paste")),1)]),_:1})]),_:1},8,["onClick"])):C("",!0)])],4),l("div",ut,[i(Q,{name:"meeting_room",size:"xs"}),f(" "+r((z=(M=s.schedule)==null?void 0:M.cst)==null?void 0:z.classroom_name),1)]),l("div",mt,[i($e,{status:s.status},null,8,["status"])]),s.cw||s.hw?(u(),h("div",yt,[s.cw?(u(),h("div",pt,[i(Q,{name:"school",size:"xs",color:"blue"}),f(" "+r(c(n)("weeklyPlans.teacher.cwFilled")),1)])):C("",!0),s.hw?(u(),h("div",ht,[i(Q,{name:"home_work",size:"xs",color:"orange"}),f(" "+r(c(n)("weeklyPlans.teacher.hwFilled")),1)])):C("",!0)])):C("",!0)],10,rt)}),128))]))),128))],512),[[re,$.value==="by-day"]]),ne(l("div",null,[i(je,{ref_key:"classroomListRef",ref:V,plans:R.value,days:ee.value,"inline-edit-mode":B.value,"copied-data":v.value,"week-number":g.value,"semester-number":c(N).semesterNumber,onEdit:te,onSave:_e},null,8,["plans","days","inline-edit-mode","copied-data","week-number","semester-number"])],512),[[re,$.value==="by-classroom"]]),i(Le,{modelValue:q.value,"onUpdate:modelValue":e[8]||(e[8]=a=>q.value=a),plan:X.value,saving:L.value,onSubmit:we},null,8,["modelValue","plan","saving"]),i(ke,{modelValue:j.value,"onUpdate:modelValue":e[10]||(e[10]=a=>j.value=a),maximized:""},{default:p(()=>[i(W,{class:"full-height print-preview-card"},{default:p(()=>[i(Ve,{class:"bg-primary text-white"},{default:p(()=>[i(qe,null,{default:p(()=>[f(r(c(n)("weeklyPlans.teacher.previewAndPrint")),1)]),_:1}),i(ae),i(_,{icon:"print",label:c(n)("weeklyPlans.print"),color:"white",flat:"",onClick:fe},null,8,["label"]),i(_,{icon:"close",flat:"",round:"",dense:"",onClick:e[9]||(e[9]=a=>j.value=!1)})]),_:1}),l("div",vt,[l("div",wt,[l("div",_t,[l("h2",ft,r(c(n)("weeklyPlans.teacher.myWeeklyPlans")),1),l("p",gt,r(c(n)("weeklyPlans.week"))+" "+r(g.value)+" - "+r(c(n)("weeklyPlans.semester"))+" "+r(c(N).semesterNumber),1),l("p",bt,r(c(n)("weeklyPlans.classroom"))+": "+r(w.value.join(", ")),1),l("p",kt,r(new Date().toLocaleDateString(c(ie),{year:"numeric",month:"long",day:"numeric"})),1)]),l("table",Pt,[l("thead",null,[l("tr",null,[l("th",null,r(c(n)("weeklyPlans.day")),1),l("th",null,r(c(n)("weeklyPlans.period")),1),l("th",null,r(c(n)("weeklyPlans.subject")),1),l("th",null,r(c(n)("weeklyPlans.classroom")),1),l("th",null,r(c(n)("weeklyPlans.classwork")),1),l("th",null,r(c(n)("weeklyPlans.homework")),1),l("th",null,r(c(n)("weeklyPlans.notes")),1)])]),l("tbody",null,[(u(!0),h(F,null,K(R.value,a=>{var s,d,T,D,M,z;return u(),h("tr",{key:a.id},[l("td",null,r(ee.value[(s=a.schedule)==null?void 0:s.day]||"N/A"),1),l("td",xt,"P"+r((d=a.schedule)==null?void 0:d.period_number),1),l("td",null,r((D=(T=a.schedule)==null?void 0:T.cst)==null?void 0:D.subject_name),1),l("td",null,r((z=(M=a.schedule)==null?void 0:M.cst)==null?void 0:z.classroom_name),1),l("td",{class:"content-cell",innerHTML:a.cw||"-"},null,8,Ct),l("td",{class:"content-cell",innerHTML:a.hw||"-"},null,8,Vt),l("td",{class:"content-cell",innerHTML:a.notes||"-"},null,8,qt)])}),128))])]),l("div",Tt,[l("p",Dt,r(c(n)("weeklyPlans.teacher.generated"))+" "+r(new Date().toLocaleString()),1)])])])]),_:1})]),_:1},8,["modelValue"])])],64)}}},Kt=De(Mt,[["__scopeId","data-v-bb5bfa01"]]);export{Kt as default};
