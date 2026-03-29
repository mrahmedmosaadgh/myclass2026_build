import{b as be,aW as ye,a0 as fe,ae as K,i as ge,j as we,k as ve,e as F,A as xe,c as G,d as ke,ak as _e,f as ee,a1 as te,at as $e,al as ae}from"./app-DjE23g0c.js";import{Q as q}from"./QTd-e5TW3q8U.js";import{Q as Pe}from"./QTable-Ck3_wc0P.js";import{w as se,o as je,V as u,Z as m,B as i,X as d,a1 as c,J as y,a6 as L,_ as b,W as De,F as le,$ as oe,a2 as ne,a8 as Ne,e as _,i as V}from"./vendor-draggable-tEf0qgFD.js";import{u as Ce}from"./useWeeklyPlansStore-D3A3qzVV.js";import"./vendor-firebase-BCO40ktT.js";/* empty css            */import"./QMarkupTable-Bczn-73u.js";import"./QLinearProgress-BF1ciwmh.js";import"./use-fullscreen-DvX9mDOC.js";import"./schoolData-DVSdpt7O.js";const Se={class:"q-pa-md"},ze={class:"row q-gutter-md items-end"},Te={class:"col-12 col-sm-6"},Qe={class:"col-12 col-sm-4"},Ie={key:0,class:"row justify-center q-pa-xl"},qe={class:"text-h6 text-grey-7 q-mt-md"},Ve={class:"text-grey-6"},Ee={key:2,class:"classrooms-grid"},Le={class:"classroom-header bg-primary text-white q-pa-md"},Be={class:"q-ma-none flex items-center q-gutter-sm"},We={class:"plans-by-day"},Me={class:"day-header-row"},Ae={class:"day-info"},He={class:"day-name"},Fe={class:"day-meta"},Oe={class:"subject-teacher"},Ue={class:"teacher-name"},Ye=["innerHTML"],Je={key:1,class:"text-grey-5"},Re=["innerHTML"],Xe={key:1,class:"text-grey-5"},Ze=["innerHTML"],Ke={key:1,class:"text-grey-5"},Ge={__name:"WeeklyPlanClassroomView",setup(et){const{t:l,locale:B}=ye(),p=Ce(),P=fe(),$=_([]),g=_([]),E=_([]),W=_([]),M=_(!1),A=_(!1),ie=_({rowsPerPage:0}),re=V(()=>[{label:l("weeklyPlans.shortDays.1"),value:1},{label:l("weeklyPlans.shortDays.2"),value:2},{label:l("weeklyPlans.shortDays.3"),value:3},{label:l("weeklyPlans.shortDays.4"),value:4},{label:l("weeklyPlans.shortDays.5"),value:5}]),de=V(()=>[{name:"period",label:l("weeklyPlans.period"),field:"schedule.period_number",align:"center"},{name:"subject",label:l("weeklyPlans.subject"),field:"schedule.cst.subject_name",align:"left"},{name:"cw",label:l("weeklyPlans.classwork"),field:"cw",align:"left"},{name:"hw",label:l("weeklyPlans.homework"),field:"hw",align:"left"},{name:"notes",label:l("weeklyPlans.notes"),field:"notes",align:"left"}]),O=V(()=>$.value.length>0&&g.value.length===$.value.length),ce=V(()=>{var o;let s=W.value;return(o=E.value)!=null&&o.length&&(s=s.filter(e=>{var t;return E.value.includes((t=e.schedule)==null?void 0:t.day)})),s}),U=V(()=>{const s={};return ce.value.forEach(o=>{const e=o.classroom_id;if(!s[e]){const t=$.value.find(a=>a.id===e);s[e]={id:e,name:(t==null?void 0:t.name)||"Unknown",plans:[]}}s[e].plans.push(o)}),Object.values(s).forEach(o=>{o.plans.sort((e,t)=>{var r,n,w,f;const a=(((r=e.schedule)==null?void 0:r.day)||0)-(((n=t.schedule)==null?void 0:n.day)||0);return a!==0?a:(((w=e.schedule)==null?void 0:w.period_number)||0)-(((f=t.schedule)==null?void 0:f.period_number)||0)})}),Object.values(s).sort((o,e)=>o.name.localeCompare(e.name))}),pe=()=>{O.value?g.value=[]:g.value=$.value.map(s=>s.id)},Y=s=>{const o=new Date().getFullYear();let e=new Date(o,0,1),t=e.getDay()===0?0:7-e.getDay(),a=new Date(o,0,1+t);const r=new Date(a);r.setDate(a.getDate()+(p.weekNumber-1)*7);const n=new Date(r);return n.setDate(r.getDate()+(s-1)),n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},H=s=>{const o={};return s.forEach(e=>{var a;const t=(a=e.schedule)==null?void 0:a.day;o[t]||(o[t]={dayNumber:t,dayName:l(`weeklyPlans.shortDays.${t}`)||`Day ${t}`,plans:[]}),o[t].plans.push(e)}),Object.values(o).forEach(e=>{e.plans.sort((t,a)=>{var r,n;return((r=t.schedule)==null?void 0:r.period_number)-((n=a.schedule)==null?void 0:n.period_number)})}),Object.values(o).sort((e,t)=>e.dayNumber-t.dayNumber)},J=async()=>{if(p.selectedSchoolId){A.value=!0;try{const s=await ae.get(`/api/classrooms?school_id=${p.selectedSchoolId}`);$.value=s.data.data||s.data||[]}catch(s){console.error("Error fetching classrooms:",s)}finally{A.value=!1}}},ue=async()=>{if(!g.value.length){W.value=[];return}M.value=!0;try{const s=g.value.map(e=>ae.get("/weekly-system/api/weekly-plans",{params:{classroom_id:e,week_number:p.weekNumber,semester_number:p.semesterNumber,academic_year_id:p.selectedAcademicYearId}}).then(t=>({classroom_id:e,plans:t.data.data||t.data||[]}))),o=await Promise.all(s);W.value=o.flatMap(e=>e.plans.map(t=>({...t,classroom_id:e.classroom_id})))}catch(s){console.error("Error fetching plans:",s),P.notify({type:"negative",message:"Failed to load weekly plans"})}finally{M.value=!1}},me=s=>{if(!s||!s.plans||!s.plans.length){P.notify({type:"warning",message:"No plans to print for this classroom"});return}const o=H(s.plans),e=`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');
    body { font-family: 'Nunito', 'Tajawal', 'Segoe UI', sans-serif; color: #374151; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .page { max-width: 210mm; margin: 0 auto; padding: 15mm; }
    
    .header-box { 
      background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); 
      color: white; 
      padding: 20px; 
      border-radius: 12px;
      margin-bottom: 25px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .header-title { font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
    .header-meta { margin-top: 8px; font-size: 14px; opacity: 0.9; font-weight: 500; }
    
    .day-container { margin-bottom: 25px; page-break-inside: avoid; }
    .day-header { 
      display: flex; 
      align-items: center; 
      margin-bottom: 1px; /* connected to table */
    }
    .day-pill {
      background: #4f46e5;
      color: white;
      padding: 8px 16px;
      border-radius: 12px 12px 0 0;
      font-weight: 700;
      font-size: 15px;
      display: inline-block;
    }
    .date-label {
      color: #6b7280;
      font-size: 13px;
      margin-left: 12px;
      font-weight: 600;
    }

    table { width: 100%; border-collapse: collapse; border-radius: 0 8px 8px 8px; overflow: hidden; border: 1px solid #e5e7eb; }
    th { 
      background: #f3f4f6; 
      color: #374151; 
      font-weight: 700; 
      padding: 10px 12px; 
      text-align: left; 
      font-size: 13px;
      border-bottom: 2px solid #e5e7eb;
    }
    td { 
      padding: 10px 12px; 
      border-bottom: 1px solid #e5e7eb; 
      font-size: 13px; 
      vertical-align: top;
      line-height: 1.5;
    }
    tr:last-child td { border-bottom: none; }
    tr:nth-child(even) { background-color: #f9fafb; }
    
    .period-col { width: 60px; text-align: center; color: #6b7280; font-weight: 700; }
    .subject-col { width: 180px; }
    .cw-col { width: 35%; }
    .hw-col { width: 35%; }
    
    .subject-badge { 
      display: inline-block; 
      padding: 4px 10px; 
      border-radius: 6px; 
      font-weight: 700; 
      font-size: 12px;
      margin-bottom: 4px;
    }
    .teacher-name { color: #6b7280; font-size: 12px; font-style: italic; display: flex; align-items: center; gap: 4px; }
    
    .label-tag {
      display: inline-block;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-right: 6px;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .cw-tag { background: #dbeafe; color: #1e40af; }
    .hw-tag { background: #fef3c7; color: #92400e; }
    
    @media print { 
      @page { margin: 10mm; } 
      body { -webkit-print-color-adjust: exact; }
    }
  `;let t=`
    <div class="page" dir="${B.value==="ar"?"rtl":"ltr"}">
      <div class="header-box">
        <div class="header-title">${l("weeklyPlans.weeklyLearningPlan")} - ${s.name}</div>
        <div class="header-meta">${l("weeklyPlans.week")} ${p.weekNumber} • ${l("weeklyPlans.semester")} ${p.semesterNumber} • ${new Date().toLocaleDateString(B.value,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}</div>
      </div>
  `;o.forEach(r=>{t+=`
      <div class="day-container">
        <div class="day-header">
          <div class="day-pill">${r.dayName}</div>
          <div class="date-label">${Y(r.dayNumber)}</div>
        </div>
        <table>
          <thead>
            <tr>
              <th class="period-col">${l("weeklyPlans.period")}</th>
              <th class="subject-col">${l("weeklyPlans.subject")}</th>
              <th class="cw-col">${l("weeklyPlans.classwork")}</th>
              <th class="hw-col">${l("weeklyPlans.homework")}</th>
            </tr>
          </thead>
          <tbody>
    `,r.plans.forEach(n=>{var j,D,N,C,S,z,T,Q,I;const w=((D=(j=n.schedule)==null?void 0:j.cst)==null?void 0:D.subject_name)||"-",f=((C=(N=n.schedule)==null?void 0:N.cst)==null?void 0:C.c_bg)||"#e0e0e0",h=((z=(S=n.schedule)==null?void 0:S.cst)==null?void 0:z.c_text)||"#111",v=((Q=(T=n.schedule)==null?void 0:T.cst)==null?void 0:Q.teacher_name)||"",x=n.cw?n.cw:"-",k=n.hw?n.hw:"-";t+=`
        <tr>
          <td class="period-col">${((I=n.schedule)==null?void 0:I.period_number)||""}</td>
          <td class="subject-col">
            <div class="subject-badge" style="background:${f}; color:${h}">${w}</div>
            ${v?`<div class="teacher-name">👤 ${v}</div>`:""}
          </td>
          <td>${x!=="-"?'<span class="label-tag cw-tag">CW</span>'+x:'<span style="color:#9ca3af">-</span>'}</td>
          <td>${k!=="-"?'<span class="label-tag hw-tag">HW</span>'+k:'<span style="color:#9ca3af">-</span>'}</td>
        </tr>
      `}),t+="</tbody></table></div>"}),t+="</div>";const a=window.open("","_blank");if(!a){P.notify({type:"negative",message:"Popup blocked: allow popups to print"});return}a.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Plan - ${s.name}</title><style>${e}</style></head><body>${t}</body></html>`),a.document.close(),a.onload=()=>{setTimeout(()=>{a.print(),a.close()},500)}},he=s=>{if(!s||!s.plans||!s.plans.length){P.notify({type:"warning",message:"No plans to save for this classroom"});return}const o=H(s.plans),e=`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');
    body { font-family: 'Nunito', 'Tajawal', 'Segoe UI', sans-serif; color: #374151; }
    .page { width: 100%; padding: 20px; box-sizing: border-box; }
    
    .header-box { 
      background: #4f46e5; 
      color: white; 
      padding: 20px; 
      border-radius: 12px;
      margin-bottom: 25px;
    }
    .header-title { font-size: 24px; font-weight: 800; margin: 0; }
    .header-meta { margin-top: 8px; font-size: 14px; opacity: 0.9; }
    
    .day-container { margin-bottom: 20px; page-break-inside: avoid; }
    .day-header { 
      display: flex; 
      align-items: center; 
      margin-bottom: 0px;
    }
    .day-pill {
      background: #4f46e5;
      color: white;
      padding: 6px 14px;
      border-radius: 12px 12px 0 0;
      font-weight: 700;
      font-size: 14px;
      display: inline-block;
    }

    table { width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 0 8px 8px 8px; overflow: hidden; }
    th { 
      background: #f3f4f6; 
      color: #374151; 
      font-weight: 700; 
      padding: 8px 10px; 
      text-align: left; 
      font-size: 12px;
      border-bottom: 2px solid #e5e7eb;
    }
    td { 
      padding: 8px 10px; 
      border-bottom: 1px solid #e5e7eb; 
      font-size: 12px; 
      vertical-align: top;
    }
    tr:nth-child(even) { background-color: #f9fafb; }
    
    .period-col { width: 50px; text-align: center; color: #6b7280; font-weight: 700; }
    .subject-col { width: 160px; }
    
    .subject-badge { 
      display: inline-block; 
      padding: 3px 8px; 
      border-radius: 4px; 
      font-weight: 700; 
      font-size: 11px;
    }
    .teacher-name { color: #6b7280; font-size: 11px; font-style: italic; margin-top: 2px; }
    
    .label-tag {
      font-size: 9px;
      font-weight: 700;
      padding: 1px 4px;
      border-radius: 3px;
      margin-right: 4px;
    }
    .cw-tag { background: #dbeafe; color: #1e40af; }
    .hw-tag { background: #fef3c7; color: #92400e; }
  `;let t=`
    <div class="page" dir="${B.value==="ar"?"rtl":"ltr"}">
      <div class="header-box">
        <div class="header-title">${l("weeklyPlans.weeklyLearningPlan")}</div>
        <div class="header-meta">${s.name} • ${l("weeklyPlans.week")} ${p.weekNumber} • ${l("weeklyPlans.semester")} ${p.semesterNumber}</div>
      </div>
  `;o.forEach(f=>{t+=`
      <div class="day-container">
        <div class="day-header">
          <div class="day-pill">${f.dayName}</div>
        </div>
        <table>
          <thead><tr><th class="period-col">${l("weeklyPlans.period")}</th><th class="subject-col">${l("weeklyPlans.subject")}</th><th>${l("weeklyPlans.classwork")}</th><th>${l("weeklyPlans.homework")}</th></tr></thead>
          <tbody>
    `,f.plans.forEach(h=>{var C,S,z,T,Q,I,R,X,Z;const v=((S=(C=h.schedule)==null?void 0:C.cst)==null?void 0:S.subject_name)||"-",x=((T=(z=h.schedule)==null?void 0:z.cst)==null?void 0:T.c_bg)||"#e0e0e0",k=((I=(Q=h.schedule)==null?void 0:Q.cst)==null?void 0:I.c_text)||"#111",j=((X=(R=h.schedule)==null?void 0:R.cst)==null?void 0:X.teacher_name)||"",D=h.cw||"-",N=h.hw||"-";t+=`
        <tr>
          <td class="period-col">${((Z=h.schedule)==null?void 0:Z.period_number)||""}</td>
          <td class="subject-col">
            <div class="subject-badge" style="background:${x}; color:${k}">${v}</div>
            ${j?`<div class="teacher-name">${j}</div>`:""}
          </td>
          <td>${D!=="-"?'<span class="label-tag cw-tag">CW</span>'+D:"-"}</td>
          <td>${N!=="-"?'<span class="label-tag hw-tag">HW</span>'+N:"-"}</td>
        </tr>
      `}),t+="</tbody></table></div>"}),t+="</div>";const a="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js",r=`WeeklyPlans_${String(s.name).replace(/\s+/g,"_")}_Week${p.weekNumber}.pdf`,n=window.open("","_blank");if(!n){P.notify({type:"negative",message:"Popup blocked: allow popups to save PDF"});return}const w=`
    var opt = { margin:0.3, filename: '${r}', image:{type:'jpeg', quality:0.98}, html2canvas:{scale:2, useCORS:true}, jsPDF:{unit:'in', format:'a4', orientation:'portrait'} };
    function doSave(){ html2pdf().set(opt).from(document.body).save().then(function(){ setTimeout(function(){ window.close(); }, 1000); }); }
    if (typeof html2pdf === 'undefined'){
      var s = document.createElement('script'); s.src = '${a}'; s.onload = doSave; document.head.appendChild(s);
    } else { doSave(); }
  `;n.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>PDF</title><style>${e}</style></head><body>${t}<script>${w} <\/script></body></html>`),n.document.close()};return se(()=>p.selectedSchoolId,()=>{J(),g.value=[]}),se(()=>[g.value,p.weekNumber,p.semesterNumber,p.selectedAcademicYearId],()=>{ue()},{deep:!0}),je(async()=>{p.selectedSchoolId&&J()}),(s,o)=>(u(),m("div",Se,[i(F,{flat:"",bordered:"",class:"q-pa-md q-mb-lg"},{default:d(()=>[c("div",ze,[c("div",Te,[i(K,{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=e=>g.value=e),options:$.value,"option-value":"id","option-label":"name",label:y(l)("weeklyPlans.filterClassrooms"),outlined:"",dense:"",multiple:"","use-chips":"","emit-value":"","map-options":"",loading:A.value},{"before-options":d(()=>[i(ge,{clickable:"",onClick:pe},{default:d(()=>[i(we,null,{default:d(()=>[i(ve,null,{default:d(()=>[L(b(O.value?y(l)("weeklyPlans.deselectAll"):y(l)("weeklyPlans.selectAll")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","options","label","loading"])]),c("div",Qe,[i(K,{modelValue:E.value,"onUpdate:modelValue":o[1]||(o[1]=e=>E.value=e),options:re.value,label:y(l)("weeklyPlans.filterByDay"),outlined:"",dense:"",multiple:"","use-chips":"",clearable:"","emit-value":"","map-options":""},null,8,["modelValue","options","label"])])])]),_:1}),M.value?(u(),m("div",Ie,[i(xe,{size:"50px",color:"primary"})])):U.value.length?(u(),m("div",Ee,[(u(!0),m(le,null,oe(U.value,e=>(u(),m("div",{key:e.id,class:"classroom-card q-mb-lg"},[i(F,{flat:"",bordered:""},{default:d(()=>[c("div",Le,[c("h5",Be,[i(G,{name:"meeting_room"}),L(" "+b(e.name)+" ",1),i(ke,{dense:"",label:`${e.plans.length} ${y(l)("weeklyPlans.classes")}`,"text-color":"white"},null,8,["label"]),i(_e),i(ee,{flat:"",dense:"",round:"",icon:"picture_as_pdf",color:"white",onClick:ne(t=>he(e),["stop"]),disable:!e.plans||!e.plans.length},{default:d(()=>[i(te,null,{default:d(()=>[L(b(y(l)("weeklyPlans.savePdf")),1)]),_:1})]),_:1},8,["onClick","disable"]),i(ee,{flat:"",dense:"",round:"",icon:"print",color:"white",onClick:ne(t=>me(e),["stop"]),disable:!e.plans||!e.plans.length},{default:d(()=>[i(te,null,{default:d(()=>[L(b(y(l)("weeklyPlans.print")),1)]),_:1})]),_:1},8,["onClick","disable"])])]),c("div",We,[(u(!0),m(le,null,oe(H(e.plans),t=>(u(),m("div",{key:t.dayNumber,class:"day-group"},[c("div",Me,[c("div",Ae,[c("div",He,b(t.dayName),1),c("div",Fe,[c("span",null,b(y(l)("weeklyPlans.week"))+" "+b(y(p).weekNumber),1),o[2]||(o[2]=c("span",{class:"separator"},"•",-1)),c("span",null,b(Y(t.dayNumber)),1)])])]),i(Pe,{flat:"",bordered:"",rows:t.plans,columns:de.value,"row-key":"id",dense:"",class:"classroom-table day-table","hide-header":"","hide-bottom":"",pagination:ie.value,"rows-per-page-options":[]},{"body-cell-period":d(a=>[i(q,{props:a,class:"text-center period-cell"},{default:d(()=>{var r;return[i($e,{label:`P${(r=a.row.schedule)==null?void 0:r.period_number}`,color:"primary"},null,8,["label"])]}),_:2},1032,["props"])]),"body-cell-subject":d(a=>[i(q,{props:a,class:"subject-teacher-cell"},{default:d(()=>{var r,n,w,f,h,v,x,k;return[c("div",Oe,[c("div",{class:"subject-name",style:Ne({backgroundColor:(n=(r=a.row.schedule)==null?void 0:r.cst)==null?void 0:n.c_bg,color:(f=(w=a.row.schedule)==null?void 0:w.cst)==null?void 0:f.c_text})},b((v=(h=a.row.schedule)==null?void 0:h.cst)==null?void 0:v.subject_name),5),c("div",Ue,b(((k=(x=a.row.schedule)==null?void 0:x.cst)==null?void 0:k.teacher_name)||"N/A"),1)])]}),_:2},1032,["props"])]),"body-cell-cw":d(a=>[i(q,{props:a,class:"content-preview"},{default:d(()=>[a.row.cw?(u(),m("div",{key:0,class:"text-info ellipsis-2-lines",innerHTML:a.row.cw},null,8,Ye)):(u(),m("span",Je,"-"))]),_:2},1032,["props"])]),"body-cell-hw":d(a=>[i(q,{props:a,class:"content-preview"},{default:d(()=>[a.row.hw?(u(),m("div",{key:0,class:"text-warning ellipsis-2-lines",innerHTML:a.row.hw},null,8,Re)):(u(),m("span",Xe,"-"))]),_:2},1032,["props"])]),"body-cell-notes":d(a=>[i(q,{props:a,class:"content-preview"},{default:d(()=>[a.row.notes?(u(),m("div",{key:0,class:"text-info ellipsis-2-lines",innerHTML:a.row.notes},null,8,Ze)):(u(),m("span",Ke,"-"))]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination"])]))),128))])]),_:2},1024)]))),128))])):(u(),De(F,{key:1,flat:"",bordered:"",class:"text-center q-pa-xl"},{default:d(()=>[i(G,{name:"meeting_room",size:"64px",color:"grey-5"}),c("p",qe,b(y(l)("weeklyPlans.noDataAvailable")),1),c("p",Ve,b(y(l)("weeklyPlans.selectClassroomsToView")),1)]),_:1}))]))}},ut=be(Ge,[["__scopeId","data-v-09455642"]]);export{ut as default};
