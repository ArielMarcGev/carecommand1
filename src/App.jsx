import { useState, useEffect } from “react”;

function useGlobalStyles() {
useEffect(() => {
if (document.getElementById(“cc-fonts”)) return;
const fl = document.createElement(“link”);
fl.id = “cc-fonts”;
fl.rel = “stylesheet”;
fl.href = “https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap”;
document.head.appendChild(fl);
const style = document.createElement(“style”);
style.id = “cc-styles”;
style.textContent = CSS;
document.head.appendChild(style);
}, []);
}

const CSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
–bg:       #F7F5F2;
–bg2:      #EFECE8;
–surface:  #FFFFFF;
–border:   #E2DDD8;
–border2:  #C8C0B8;
–text:     #1C1917;
–text2:    #6B6460;
–text3:    #A09890;
–forest:   #2D5A45;
–forest-d: #1E3D2F;
–forest-l: #EBF3EF;
–amber:    #C2830A;
–amber-l:  #FDF3E3;
–rose:     #C0444C;
–rose-l:   #FCEDEF;
–sky:      #2563A8;
–sky-l:    #EBF2FB;
–sage:     #5A7A6A;
–sage-l:   #EEF4F1;
–r:        14px;
–rs:       8px;
–sh:       0 1px 4px rgba(0,0,0,0.05),0 4px 16px rgba(0,0,0,0.05);
–sh-md:    0 4px 12px rgba(0,0,0,0.08),0 12px 36px rgba(0,0,0,0.09);
–sh-lg:    0 8px 24px rgba(0,0,0,0.10),0 24px 64px rgba(0,0,0,0.11);
}
body { background:var(–bg); font-family:‘Plus Jakarta Sans’,sans-serif; color:var(–text); min-height:100vh; }
::-webkit-scrollbar { width:5px; }
::-webkit-scrollbar-track { background:transparent; }
::-webkit-scrollbar-thumb { background:var(–border); border-radius:3px; }
@keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes scaleIn { from{opacity:0;transform:scale(0.96)} to{opacity:1;transform:scale(1)} }

.topbar {
position:sticky;top:0;z-index:200;
background:rgba(247,245,242,0.94);backdrop-filter:blur(16px);
border-bottom:1px solid var(–border);
padding:0 32px;height:58px;display:flex;align-items:center;gap:16px;
}
.logo { font-family:‘Cormorant Garamond’,serif;font-size:22px;font-weight:600;color:var(–forest);cursor:pointer;letter-spacing:-0.2px;flex-shrink:0; }
.logo em { color:var(–amber);font-style:italic; }
.breadcrumb { display:flex;align-items:center;gap:6px;font-size:13px; }
.breadcrumb-sep { color:var(–border2); }
.bc-link { cursor:pointer;color:var(–text2);font-weight:500;transition:color 0.15s; }
.bc-link:hover { color:var(–forest); }
.bc-active { color:var(–text);font-weight:700; }
.topbar-right { margin-left:auto;display:flex;gap:8px;align-items:center; }
.badge-cg { display:flex;align-items:center;gap:8px;background:var(–surface);border:1px solid var(–border);padding:6px 14px;border-radius:40px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s; }
.badge-cg:hover { border-color:var(–forest);color:var(–forest); }
.btn-admin-top { background:transparent;border:1px solid var(–border);color:var(–text2);padding:7px 14px;border-radius:var(–rs);font-size:12px;font-weight:700;cursor:pointer;transition:all 0.15s;font-family:‘Plus Jakarta Sans’,sans-serif;letter-spacing:0.04em;text-transform:uppercase; }
.btn-admin-top:hover { border-color:var(–amber);color:var(–amber); }

.screen { min-height:calc(100vh - 58px);animation:fadeIn 0.2s ease; }
.si { max-width:1160px;margin:0 auto;padding:36px 32px 72px; }
.page-title { font-family:‘Cormorant Garamond’,serif;font-size:30px;font-weight:600;letter-spacing:-0.3px;margin-bottom:6px; }
.page-sub { color:var(–text2);font-size:14px; }

.welcome-screen {
min-height:calc(100vh - 58px);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 24px;
background:radial-gradient(ellipse at 20% 30%,rgba(45,90,69,0.06) 0%,transparent 60%),radial-gradient(ellipse at 85% 75%,rgba(194,131,10,0.07) 0%,transparent 55%),var(–bg);
}
.welcome-hl { font-size:14px;color:var(–text3);margin-bottom:32px;letter-spacing:0.04em; }
.cg-grid { display:flex;gap:14px;flex-wrap:wrap;justify-content:center;max-width:720px; }
.cg-card { width:158px;background:var(–surface);border:1px solid var(–border);border-radius:var(–r);padding:24px 16px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:11px;transition:all 0.2s;animation:fadeUp 0.35s ease both;box-shadow:var(–sh); }
.cg-card:hover { border-color:var(–forest);transform:translateY(-4px);box-shadow:var(–sh-md); }
.cg-av { width:58px;height:58px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:‘Cormorant Garamond’,serif;font-size:22px;font-weight:600;flex-shrink:0; }
.cg-name { font-size:14px;font-weight:700;text-align:center; }
.cg-role { font-size:11px;color:var(–text3);text-align:center;font-weight:500; }

.pt-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px; }
.pt-card { background:var(–surface);border:1px solid var(–border);border-radius:var(–r);padding:22px;cursor:pointer;transition:all 0.2s;animation:fadeUp 0.3s ease both;display:flex;align-items:center;gap:16px;position:relative;box-shadow:var(–sh); }
.pt-card::after { content:‘→’;position:absolute;right:20px;top:50%;transform:translateY(-50%);font-size:18px;color:var(–text3);transition:all 0.2s; }
.pt-card:hover { border-color:var(–forest);box-shadow:var(–sh-md); }
.pt-card:hover::after { color:var(–forest);right:16px; }
.pt-av { width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:‘Cormorant Garamond’,serif;font-size:20px;font-weight:600;flex-shrink:0; }

.hub-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:18px; }
.mod-card { border-radius:var(–r);cursor:pointer;overflow:hidden;height:188px;position:relative;border:1px solid var(–border);box-shadow:var(–sh);transition:all 0.22s ease;animation:fadeUp 0.35s ease both; }
.mod-card:hover { transform:translateY(-5px);box-shadow:var(–sh-lg);border-color:transparent; }
.mod-card.coming { opacity:0.5;cursor:not-allowed; }
.mod-card.coming:hover { transform:none;box-shadow:var(–sh);border-color:var(–border); }
.mod-bg { position:absolute;inset:0; }
.mod-ov { position:absolute;inset:0;background:linear-gradient(160deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.2) 100%); }
.mod-ct { position:relative;z-index:1;padding:24px;height:100%;display:flex;flex-direction:column;justify-content:space-between; }
.mod-icon { font-size:28px;margin-bottom:4px; }
.mod-name { font-family:‘Cormorant Garamond’,serif;font-size:21px;font-weight:600;color:white;text-shadow:0 1px 4px rgba(0,0,0,0.3); }
.mod-desc { font-size:12px;color:rgba(255,255,255,0.82);margin-top:3px;text-shadow:0 1px 3px rgba(0,0,0,0.3); }
.mod-stat { display:inline-flex;align-items:center;background:rgba(255,255,255,0.22);backdrop-filter:blur(8px);padding:5px 12px;border-radius:20px;font-size:11px;font-weight:700;color:white;align-self:flex-start; }
.mod-soon { position:absolute;top:14px;right:14px;background:rgba(255,255,255,0.25);backdrop-filter:blur(6px);padding:4px 10px;border-radius:20px;font-size:10px;font-weight:700;color:rgba(255,255,255,0.9);letter-spacing:0.06em;text-transform:uppercase; }

.back-btn { width:38px;height:38px;border-radius:50%;background:var(–surface);border:1px solid var(–border);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;transition:all 0.15s;flex-shrink:0;box-shadow:var(–sh); }
.back-btn:hover { border-color:var(–forest);color:var(–forest); }

.card { background:var(–surface);border:1px solid var(–border);border-radius:var(–r);padding:24px;box-shadow:var(–sh); }
.card-title { font-size:11px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:var(–text3);margin-bottom:16px; }
.g2 { display:grid;grid-template-columns:1fr 1fr;gap:16px; }
.g3 { display:grid;grid-template-columns:repeat(3,1fr);gap:16px; }
.fc { display:flex;flex-direction:column;gap:10px; }

.stat-tile { background:var(–surface);border:1px solid var(–border);border-radius:var(–r);padding:20px 22px;display:flex;align-items:flex-start;gap:14px;box-shadow:var(–sh); }
.stat-ib { width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0; }
.stat-lbl { font-size:12px;color:var(–text2);margin-bottom:4px;font-weight:500; }
.stat-val { font-size:26px;font-weight:700;letter-spacing:-0.5px;line-height:1;font-family:‘Cormorant Garamond’,serif; }
.stat-sub { font-size:11px;color:var(–text3);margin-top:3px; }

.tag { display:inline-flex;align-items:center;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700; }
.tf  { background:var(–forest-l);color:var(–forest); }
.ta  { background:var(–amber-l);color:var(–amber); }
.tr  { background:var(–rose-l);color:var(–rose); }
.ts  { background:var(–sky-l);color:var(–sky); }
.tsg { background:var(–sage-l);color:var(–sage); }
.tg  { background:var(–bg2);color:var(–text2); }

.btn { display:inline-flex;align-items:center;gap:7px;padding:10px 18px;border-radius:var(–rs);font-size:13px;font-weight:700;cursor:pointer;transition:all 0.15s;border:none;font-family:‘Plus Jakarta Sans’,sans-serif; }
.btn-f { background:var(–forest);color:#fff; }
.btn-f:hover { background:var(–forest-d); }
.btn-o { background:transparent;border:1px solid var(–border);color:var(–text2); }
.btn-o:hover { border-color:var(–forest);color:var(–forest); }
.btn-d { background:var(–rose-l);color:var(–rose);border:1px solid rgba(192,68,76,0.15); }
.btn-d:hover { background:#f8d6d8; }
.btn-sm { padding:6px 12px;font-size:12px; }

.fg { display:flex;flex-direction:column;gap:6px; }
.fl { font-size:12px;font-weight:700;color:var(–text2);letter-spacing:0.03em; }
.fi,.fsel,.fta { background:var(–bg);border:1px solid var(–border);border-radius:var(–rs);padding:10px 13px;font-size:14px;font-family:‘Plus Jakarta Sans’,sans-serif;color:var(–text);transition:border-color 0.15s;width:100%; }
.fi:focus,.fsel:focus,.fta:focus { outline:none;border-color:var(–forest);box-shadow:0 0 0 3px rgba(45,90,69,0.08); }
.fsel option { background:var(–surface); }
.fta { resize:vertical;min-height:88px; }

.note-item { background:var(–surface);border:1px solid var(–border);border-radius:var(–rs);padding:16px 18px;transition:border-color 0.15s;animation:fadeUp 0.3s ease both; }
.note-item:hover { border-color:var(–border2); }
.n-author { font-size:12px;font-weight:700;color:var(–forest); }
.n-time   { font-size:11px;color:var(–text3); }
.n-text   { font-size:14px;line-height:1.65;color:var(–text); }

.tx-item { display:flex;align-items:center;gap:14px;padding:13px 16px;background:var(–surface);border:1px solid var(–border);border-radius:var(–rs);transition:all 0.15s; }
.tx-item:hover { border-color:var(–border2); }
.tx-item.done { opacity:0.42; }
.chk { width:24px;height:24px;border-radius:50%;border:2px solid var(–border2);cursor:pointer;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;transition:all 0.15s;background:transparent; }
.chk.on { background:var(–forest);border-color:var(–forest);color:white; }
.tx-n { font-size:14px;font-weight:600;margin-bottom:2px; }
.tx-m { font-size:12px;color:var(–text3); }

.doc-card { background:var(–surface);border:1px solid var(–border);border-radius:var(–r);padding:20px 22px;display:flex;flex-direction:column;gap:11px;transition:all 0.2s;animation:fadeUp 0.3s ease both;box-shadow:var(–sh); }
.doc-card:hover { border-color:var(–border2);box-shadow:var(–sh-md); }
.doc-av { width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:‘Cormorant Garamond’,serif;font-size:17px;font-weight:600;flex-shrink:0; }
.doc-name { font-size:15px;font-weight:700;margin-bottom:2px; }
.doc-spec { font-size:12px;color:var(–text2); }
.doc-row  { display:flex;gap:8px;align-items:center;font-size:12px;color:var(–text2); }

.pf { display:grid;grid-template-columns:150px 1fr;gap:12px;align-items:start;padding:11px 0;border-bottom:1px solid var(–border); }
.pk { font-size:12px;font-weight:700;color:var(–text3);padding-top:1px; }
.pv { font-size:14px;color:var(–text); }

.modal-ov { position:fixed;inset:0;background:rgba(28,25,23,0.38);display:flex;align-items:center;justify-content:center;z-index:500;backdrop-filter:blur(4px);animation:fadeIn 0.15s ease; }
.modal { background:var(–surface);border:1px solid var(–border);border-radius:var(–r);padding:28px;width:500px;max-width:94vw;max-height:90vh;overflow-y:auto;box-shadow:var(–sh-lg);display:flex;flex-direction:column;gap:16px;animation:scaleIn 0.18s ease; }
.modal-t { font-family:‘Cormorant Garamond’,serif;font-size:22px;font-weight:600; }
.modal-ft { display:flex;justify-content:flex-end;gap:8px;padding-top:4px; }

.today-banner { background:linear-gradient(135deg,var(–forest) 0%,#3a7a5e 100%);border-radius:var(–r);padding:26px 28px;margin-bottom:22px;position:relative;overflow:hidden;color:white;box-shadow:0 4px 20px rgba(45,90,69,0.22); }
.today-banner::before { content:’’;position:absolute;top:-60px;right:-60px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,0.10),transparent 65%); }
.tg-hi { font-family:‘Cormorant Garamond’,serif;font-size:26px;font-weight:600;margin-bottom:5px; }
.tg-sub { font-size:14px;opacity:0.82; }
.tg-dt  { font-size:12px;opacity:0.65;text-align:right; }

.admin-tabs { display:flex;gap:3px;margin-bottom:26px;background:var(–surface);border:1px solid var(–border);border-radius:var(–rs);padding:4px;box-shadow:var(–sh); }
.admin-tab { padding:9px 20px;border-radius:6px;font-size:13px;font-weight:700;cursor:pointer;border:none;background:transparent;color:var(–text2);font-family:‘Plus Jakarta Sans’,sans-serif;transition:all 0.15s; }
.admin-tab.on { background:var(–forest);color:white; }
.admin-row { display:flex;align-items:center;gap:14px;padding:14px 16px;background:var(–surface);border:1px solid var(–border);border-radius:var(–rs);animation:fadeUp 0.25s ease both;box-shadow:var(–sh); }
.admin-row:hover { border-color:var(–border2); }
.asgn-row { background:var(–surface);border:1px solid var(–border);border-radius:var(–r);padding:18px;animation:fadeUp 0.25s ease both;box-shadow:var(–sh); }
.asgn-cg { font-size:14px;font-weight:700;margin-bottom:12px;display:flex;align-items:center;gap:10px; }
.asgn-pts { display:flex;gap:10px;flex-wrap:wrap; }
.asgn-pt { display:flex;align-items:center;gap:7px;padding:8px 14px;border-radius:var(–rs);border:1px solid;cursor:pointer;font-size:13px;font-weight:600;transition:all 0.15s; }
.asgn-pt.on  { background:var(–forest-l);border-color:var(–forest);color:var(–forest); }
.asgn-pt.off { background:var(–bg2);border-color:var(–border);color:var(–text2); }
.asgn-pt.on:hover  { background:#d8ece4; }
.asgn-pt.off:hover { border-color:var(–border2);color:var(–text); }

.divider { height:1px;background:var(–border);margin:6px 0; }
.empty { text-align:center;padding:40px 20px;color:var(–text3); }
.empty-icon { font-size:34px;margin-bottom:10px; }
.empty-text { font-size:14px; }

@media(max-width:768px) {
.hub-grid,.g2,.g3 { grid-template-columns:1fr; }
.si { padding:16px 16px 48px; }
.topbar { padding:0 16px; }
.cg-grid { gap:10px; }
.cg-card { width:140px; }
}
`;

const PALETTE = [”#2D5A45”,”#C2830A”,”#2563A8”,”#C0444C”,”#5A7A6A”,”#7C5C2E”];
const DOC_COLORS = [”#2D5A45”,”#C2830A”,”#2563A8”,”#C0444C”,”#5A7A6A”,”#7C5C2E”];

const INIT = {
caregivers: [
{ id:“cg1”, name:“Ariel Gev”,  role:“Primary Caregiver”, color:”#2D5A45” },
{ id:“cg2”, name:“Mia Gev”,    role:“Family Member”,      color:”#C2830A” },
{ id:“cg3”, name:“Nurse Roni”, role:“Medical Nurse”,      color:”#2563A8” },
],
patients: [
{ id:“p1”, name:“Iftah Gev”, condition:“Progressive Supranuclear Palsy (PSP)”, dob:“1952-03-14”, blood_type:“A+”, allergies:“None known”, emergency_contact:“Ariel Gev · +972-546164131”, diagnosis_date:“2023-06”, notes:“Requires mobility assistance. Monitor swallowing closely.”, color:”#2D5A45” },
],
assignments: { cg1:[“p1”], cg2:[“p1”], cg3:[“p1”] },
patientData: {
p1: {
doctors: [
{ id:“d1”, name:“Dr. Sarah Cohen”,  specialty:“Neurology”,     phone:”+972-3-5551234”, hospital:“Sourasky Medical Center”, next_appt:“2026-03-28”, email:“s.cohen@tlvmc.co.il”,   notes:“Primary neurologist” },
{ id:“d2”, name:“Dr. Yossi Levi”,   specialty:“Physiotherapy”, phone:”+972-3-5559876”, hospital:“Ichilov Hospital”,        next_appt:“2026-03-20”, email:“y.levi@ichilov.co.il”,  notes:“Twice-weekly sessions” },
{ id:“d3”, name:“Dr. Miri Shapiro”, specialty:“Speech Therapy”,phone:”+972-3-5554321”, hospital:“Sheba Medical Center”,    next_appt:“2026-04-02”, email:“m.shapiro@sheba.co.il”, notes:“Swallowing focus” },
],
treatments: [
{ id:“t1”, name:“Morning Medication (Riluzole 50mg)”, time:“08:00”, freq:“Daily”,       category:“Medication”, done:false },
{ id:“t2”, name:“Physiotherapy Exercises”,            time:“10:00”, freq:“Mon/Wed/Fri”, category:“Exercise”,   done:false },
{ id:“t3”, name:“Swallowing Exercises”,               time:“12:00”, freq:“Daily”,       category:“Exercise”,   done:true  },
{ id:“t4”, name:“Evening Medication (Melatonin 5mg)”, time:“21:00”, freq:“Daily”,       category:“Medication”, done:false },
{ id:“t5”, name:“Pressure Relief & Skin Care”,        time:“09:00”, freq:“Daily”,       category:“Care”,       done:false },
],
notes: [
{ id:“n1”, text:“Dad more tired than usual. Ate only half his lunch. Swallowing noticeably slower in the evening.”, author:“Ariel Gev”, tags:[“Eating”,“Energy”],   ts:“2026-03-16T08:30:00” },
{ id:“n2”, text:“Physio session went well. Therapist noted slight improvement in neck control.”,                    author:“Ariel Gev”, tags:[“Physio”,“Progress”], ts:“2026-03-15T16:00:00” },
{ id:“n3”, text:“Rescheduled neuro appt to March 28. Flagged new difficulty with vertical eye movement.”,           author:“Mia Gev”,   tags:[“Doctor”,“Eyes”],     ts:“2026-03-14T11:00:00” },
],
}
}
};

const fmtDate = d => { try { return new Date(d).toLocaleDateString(“en-GB”,{day:“numeric”,month:“short”,year:“numeric”}); } catch(*){ return d||””; } };
const fmtTS   = d => { try { return new Date(d).toLocaleString(“en-GB”,{day:“numeric”,month:“short”,hour:“2-digit”,minute:“2-digit”}); } catch(*){ return “”; } };
const initials = n => (n||””).split(” “).filter(Boolean).slice(0,2).map(w=>w[0]).join(””).toUpperCase();
const uid = () => Math.random().toString(36).slice(2,9);
const tagCls = t => ({ Medication:“ts”,Exercise:“tf”,Care:“ta”,Nutrition:“tsg”,Monitoring:“tg”,Doctor:“ts”,Eating:“ta”,Energy:“tg”,Physio:“tf”,Progress:“tf”,Eyes:“tr”,Other:“tg” }[t]||“tg”);

function Modal({ title, onClose, onSave, children, wide }) {
return (
<div className=“modal-ov” onClick={e => e.target===e.currentTarget && onClose()}>
<div className="modal" style={wide?{width:600}:{}}>
<div className="modal-t">{title}</div>
{children}
<div className="modal-ft">
<button className="btn btn-o" onClick={onClose}>Cancel</button>
<button className="btn btn-f" onClick={onSave}>Save</button>
</div>
</div>
</div>
);
}

const MODULES = [
{ id:“dashboard”,  icon:“🏠”, name:“Dashboard”,       desc:“Today’s full overview”,         grad:“linear-gradient(135deg,#1e3d2f,#2d5a45)”, stat:d=>`${d.treatments.filter(t=>!t.done).length} tasks pending` },
{ id:“log”,        icon:“📓”, name:“Daily Log”,        desc:“Track observations & behavior”, grad:“linear-gradient(135deg,#3d2a0e,#5a3d10)”, stat:d=>`${d.notes.length} entries` },
{ id:“treatments”, icon:“💊”, name:“Treatments”,       desc:“Medications & daily tasks”,     grad:“linear-gradient(135deg,#0e2240,#1a3a6a)”, stat:d=>`${d.treatments.filter(t=>!t.done).length} remaining` },
{ id:“doctors”,    icon:“👨‍⚕️”,name:“Care Team”,        desc:“Doctors & specialists”,        grad:“linear-gradient(135deg,#2a1640,#1a2a50)”, stat:d=>`${d.doctors.length} specialists` },
{ id:“profile”,    icon:“👤”, name:“Patient Profile”, desc:“Medical info & history”,        grad:“linear-gradient(135deg,#3d1020,#102020)”, stat:()=>“Full medical record” },
{ id:“inventory”,  icon:“📦”, name:“Inventory”,        desc:“Supplies & reorder alerts”,     grad:“linear-gradient(135deg,#2a3010,#3d2a10)”, coming:true },
{ id:“insights”,   icon:“🧠”, name:“AI Insights”,      desc:“Intelligent data analysis”,     grad:“linear-gradient(135deg,#1a1040,#0e2030)”, coming:true },
{ id:“trials”,     icon:“🔬”, name:“Trials & News”,   desc:“Research & clinical trials”,    grad:“linear-gradient(135deg,#102a20,#201a00)”, coming:true },
{ id:“comms”,      icon:“✉️”, name:“Communications”,  desc:“AI-drafted doctor emails”,      grad:“linear-gradient(135deg,#2a0e0e,#0e1a2a)”, coming:true },
];

function CaregiverSelect({ caregivers, onSelect, onAdmin }) {
return (
<div className="welcome-screen">
<div style={{textAlign:“center”,marginBottom:40}}>
<div style={{fontFamily:”‘Cormorant Garamond’,serif”,fontSize:46,fontWeight:600,color:“var(–forest)”,letterSpacing:”-0.5px”,lineHeight:1}}>
Care<em style={{color:“var(–amber)”,fontStyle:“italic”}}>Command</em>
</div>
<div style={{fontSize:14,color:“var(–text3)”,marginTop:10,letterSpacing:“0.04em”}}>Coordinated care, beautifully simple</div>
</div>
<div className="welcome-hl">Who’s caring today?</div>
<div className="cg-grid">
{caregivers.map((cg,i) => (
<div key={cg.id} className=“cg-card” style={{animationDelay:`${i*0.07}s`}} onClick={() => onSelect(cg)}>
<div className=“cg-av” style={{background:`${cg.color}18`,color:cg.color}}>{initials(cg.name)}</div>
<div className="cg-name">{cg.name}</div>
<div className="cg-role">{cg.role}</div>
</div>
))}
</div>
<button className="btn btn-o" style={{marginTop:40,fontSize:12,opacity:0.65}} onClick={onAdmin}>⚙️ Admin Panel</button>
</div>
);
}

function PatientSelect({ caregiver, patients, assignments, onSelect }) {
const ids  = assignments[caregiver.id] || [];
const mine = patients.filter(p => ids.includes(p.id));
return (
<div className="screen"><div className="si">
<div style={{marginBottom:28}}>
<div className="page-title">Your Patients</div>
<div className="page-sub">Select a patient to manage their care</div>
</div>
{mine.length===0 && <div className="empty"><div className="empty-icon">🏥</div><div className="empty-text">No patients assigned yet.</div></div>}
<div className="pt-grid">
{mine.map((p,i) => (
<div key={p.id} className=“pt-card” style={{animationDelay:`${i*0.08}s`}} onClick={() => onSelect(p)}>
<div className=“pt-av” style={{background:`${p.color}18`,color:p.color}}>{initials(p.name)}</div>
<div style={{paddingRight:24}}>
<div style={{fontWeight:700,fontSize:16,marginBottom:3}}>{p.name}</div>
<div style={{fontSize:12,color:“var(–text2)”}}>{p.condition}</div>
<div style={{fontSize:11,color:“var(–text3)”,marginTop:3}}>DOB: {fmtDate(p.dob)} · {p.blood_type}</div>
</div>
</div>
))}
</div>
</div></div>
);
}

function ModuleHub({ patient, patientData, onOpen }) {
const pd = patientData[patient.id] || { doctors:[], treatments:[], notes:[] };
return (
<div className="screen"><div className="si">
<div style={{display:“flex”,alignItems:“center”,gap:14,marginBottom:30}}>
<div className=“pt-av” style={{background:`${patient.color}18`,color:patient.color}}>{initials(patient.name)}</div>
<div>
<div className="page-title" style={{marginBottom:2}}>{patient.name}</div>
<div className="page-sub">{patient.condition}</div>
</div>
</div>
<div className="hub-grid">
{MODULES.map((m,i) => (
<div key={m.id} className={`mod-card${m.coming?" coming":""}`} style={{animationDelay:`${i*0.055}s`}} onClick={() => !m.coming && onOpen(m.id)}>
<div className="mod-bg" style={{background:m.grad}} />
<div className="mod-ov" />
{m.coming && <div className="mod-soon">Coming Soon</div>}
<div className="mod-ct">
<div>
<div className="mod-icon">{m.icon}</div>
<div className="mod-name">{m.name}</div>
<div className="mod-desc">{m.desc}</div>
</div>
<div className="mod-stat">{m.stat(pd)}</div>
</div>
</div>
))}
</div>
</div></div>
);
}

function Dashboard({ patient, caregiver, pd }) {
const pending = pd.treatments.filter(t => !t.done);
const sorted  = […pd.doctors].sort((a,b) => new Date(a.next_appt)-new Date(b.next_appt));
return (
<div>
<div className="today-banner">
<div style={{display:“flex”,justifyContent:“space-between”,alignItems:“flex-start”}}>
<div>
<div className="tg-hi">Good morning, {caregiver.name.split(” “)[0]} 👋</div>
<div className="tg-sub">Managing care for <strong>{patient.name}</strong></div>
</div>
<div className="tg-dt">{new Date().toLocaleDateString(“en-GB”,{weekday:“long”,day:“numeric”,month:“long”,year:“numeric”})}</div>
</div>
</div>
<div className="g3" style={{marginBottom:20}}>
<div className="stat-tile">
<div className=“stat-ib” style={{background:“var(–forest-l)”}}>💊</div>
<div><div className="stat-lbl">Tasks Remaining</div><div className=“stat-val” style={{color:“var(–forest)”}}>{pending.length}</div><div className="stat-sub">of {pd.treatments.length} today</div></div>
</div>
<div className="stat-tile">
<div className=“stat-ib” style={{background:“var(–amber-l)”}}>📅</div>
<div><div className="stat-lbl">Next Appointment</div><div className=“stat-val” style={{color:“var(–amber)”,fontSize:16,marginTop:4,fontFamily:”‘Plus Jakarta Sans’,sans-serif”,fontWeight:700}}>{sorted[0]?.name.split(” “).slice(0,2).join(” “)||”—”}</div><div className="stat-sub">{sorted[0]?fmtDate(sorted[0].next_appt):“No appointments”}</div></div>
</div>
<div className="stat-tile">
<div className=“stat-ib” style={{background:“var(–sky-l)”}}>📓</div>
<div><div className="stat-lbl">Recent Notes</div><div className=“stat-val” style={{color:“var(–sky)”}}>{pd.notes.length}</div><div className="stat-sub">Last: {pd.notes[0]?fmtTS(pd.notes[0].ts):”—”}</div></div>
</div>
</div>
<div className="g2">
<div className="card">
<div className="card-title">Today’s Schedule</div>
<div className="fc">
{pd.treatments.slice(0,5).map(t => (
<div key={t.id} className={`tx-item${t.done?" done":""}`} style={{padding:“10px 14px”}}>
<div className={`chk${t.done?" on":""}`}>{t.done?“✓”:””}</div>
<div style={{flex:1}}><div style={{fontSize:13,fontWeight:600}}>{t.name}</div><div className="tx-m">{t.time}</div></div>
<span className={`tag ${tagCls(t.category)}`}>{t.category}</span>
</div>
))}
</div>
</div>
<div className="card">
<div className="card-title">Recent Notes</div>
<div className="fc">
{pd.notes.slice(0,3).map(n => (
<div key={n.id} style={{paddingBottom:12,borderBottom:“1px solid var(–border)”}}>
<div style={{display:“flex”,gap:8,marginBottom:4,alignItems:“center”}}>
<span className="n-author">{n.author.split(” “)[0]}</span>
<span className="n-time">{fmtTS(n.ts)}</span>
</div>
<div style={{fontSize:13,lineHeight:1.55,color:“var(–text2)”}}>{n.text.slice(0,110)}{n.text.length>110?”…”:””}</div>
</div>
))}
</div>
</div>
</div>
<div className="card" style={{marginTop:16}}>
<div className="card-title">Upcoming Appointments</div>
<div style={{display:“flex”,gap:12,flexWrap:“wrap”}}>
{sorted.map((d,i) => (
<div key={d.id} style={{display:“flex”,alignItems:“center”,gap:10,padding:“10px 14px”,border:“1px solid var(–border)”,borderRadius:“var(–rs)”,flex:“1 1 180px”,background:“var(–bg)”}}>
<div className=“doc-av” style={{width:36,height:36,fontSize:13,background:`${DOC_COLORS[i%DOC_COLORS.length]}18`,color:DOC_COLORS[i%DOC_COLORS.length]}}>{initials(d.name)}</div>
<div><div style={{fontSize:13,fontWeight:700}}>{d.name}</div><div style={{fontSize:11,color:“var(–text2)”}}>{d.specialty} · {fmtDate(d.next_appt)}</div></div>
</div>
))}
</div>
</div>
</div>
);
}

function DailyLog({ pd, updatePD, caregiver, caregivers }) {
const [showAdd,setShowAdd] = useState(false);
const [text,setText]     = useState(””);
const [tags,setTags]     = useState(””);
const [author,setAuthor] = useState(caregiver.name);
const [filter,setFilter] = useState(“All”);
const allTags  = […new Set(pd.notes.flatMap(n => n.tags))];
const filtered = filter===“All” ? pd.notes : pd.notes.filter(n => n.tags.includes(filter));
const save = () => {
if (!text.trim()) return;
updatePD({…pd,notes:[{id:uid(),text:text.trim(),author,tags:tags.split(”,”).map(t=>t.trim()).filter(Boolean),ts:new Date().toISOString()},…pd.notes]});
setText(””); setTags(””); setShowAdd(false);
};
return (
<div>
<div style={{display:“flex”,justifyContent:“space-between”,alignItems:“center”,marginBottom:20,flexWrap:“wrap”,gap:10}}>
<div style={{display:“flex”,gap:8,flexWrap:“wrap”}}>
{[“All”,…allTags].map(t => <button key={t} className={`tag ${filter===t?"tf":"tg"}`} style={{cursor:“pointer”,border:“none”,padding:“6px 13px”,fontSize:12}} onClick={()=>setFilter(t)}>{t}</button>)}
</div>
<button className=“btn btn-f” onClick={()=>setShowAdd(true)}>+ Add Note</button>
</div>
<div className="fc">
{filtered.length===0 && <div className="empty"><div className="empty-icon">📓</div><div className="empty-text">No notes yet.</div></div>}
{filtered.map((n,i) => (
<div key={n.id} className=“note-item” style={{animationDelay:`${i*0.05}s`}}>
<div style={{display:“flex”,alignItems:“center”,gap:8,marginBottom:8,flexWrap:“wrap”}}>
<span className="n-author">✍️ {n.author}</span>
<span className="n-time">{fmtTS(n.ts)}</span>
{n.tags.map(t => <span key={t} className={`tag ${tagCls(t)}`}>{t}</span>)}
</div>
<div className="n-text">{n.text}</div>
</div>
))}
</div>
{showAdd && (
<Modal title=“New Log Entry” onClose={()=>setShowAdd(false)} onSave={save}>
<div className="fg"><label className="fl">Caregiver</label>
<select className=“fsel” value={author} onChange={e=>setAuthor(e.target.value)}>
{caregivers.map(c=><option key={c.id} value={c.name}>{c.name}</option>)}
</select>
</div>
<div className="fg"><label className="fl">Observation</label><textarea className=“fta” style={{minHeight:120}} placeholder=“What did you observe today?” value={text} onChange={e=>setText(e.target.value)} /></div>
<div className="fg"><label className="fl">Tags (comma-separated)</label><input className=“fi” placeholder=“Eating, Sleep, Mood” value={tags} onChange={e=>setTags(e.target.value)} /></div>
</Modal>
)}
</div>
);
}

function Treatments({ pd, updatePD }) {
const [showAdd,setShowAdd] = useState(false);
const [draft,setDraft]     = useState({name:””,time:””,freq:“Daily”,category:“Medication”});
const toggle = id => updatePD({…pd,treatments:pd.treatments.map(t=>t.id===id?{…t,done:!t.done}:t)});
const del    = id => updatePD({…pd,treatments:pd.treatments.filter(t=>t.id!==id)});
const save   = () => { if(!draft.name)return; updatePD({…pd,treatments:[…pd.treatments,{…draft,id:uid(),done:false}]}); setDraft({name:””,time:””,freq:“Daily”,category:“Medication”}); setShowAdd(false); };
const pending = pd.treatments.filter(t=>!t.done);
const done    = pd.treatments.filter(t=>t.done);
return (
<div>
<div style={{display:“flex”,justifyContent:“flex-end”,marginBottom:20}}>
<button className=“btn btn-f” onClick={()=>setShowAdd(true)}>+ Add Task</button>
</div>
<div className="card" style={{marginBottom:16}}>
<div className="card-title">Pending · {pending.length}</div>
<div className="fc">
{pending.length===0 && <div className="empty"><div className="empty-icon">🎉</div><div className="empty-text">All done for today!</div></div>}
{pending.map(t => (
<div key={t.id} className="tx-item">
<button className=“chk” onClick={()=>toggle(t.id)} />
<div style={{flex:1}}><div className="tx-n">{t.name}</div><div className="tx-m">{t.time} · {t.freq}</div></div>
<span className={`tag ${tagCls(t.category)}`}>{t.category}</span>
<button className=“btn btn-d btn-sm” onClick={()=>del(t.id)}>×</button>
</div>
))}
</div>
</div>
{done.length>0 && (
<div className="card">
<div className="card-title">Completed · {done.length}</div>
<div className="fc">
{done.map(t => (
<div key={t.id} className="tx-item done">
<button className=“chk on” onClick={()=>toggle(t.id)}>✓</button>
<div style={{flex:1}}><div className="tx-n">{t.name}</div><div className="tx-m">{t.time} · {t.freq}</div></div>
<span className={`tag ${tagCls(t.category)}`}>{t.category}</span>
</div>
))}
</div>
</div>
)}
{showAdd && (
<Modal title=“Add Treatment / Task” onClose={()=>setShowAdd(false)} onSave={save}>
<div className="fg"><label className="fl">Task Name</label><input className=“fi” value={draft.name} onChange={e=>setDraft({…draft,name:e.target.value})} placeholder=“e.g. Morning Medication” /></div>
<div className="g2">
<div className="fg"><label className="fl">Time</label><input className=“fi” value={draft.time} onChange={e=>setDraft({…draft,time:e.target.value})} placeholder=“08:00” /></div>
<div className="fg"><label className="fl">Frequency</label>
<select className=“fsel” value={draft.freq} onChange={e=>setDraft({…draft,freq:e.target.value})}>
{[“Daily”,“Weekly”,“Mon/Wed/Fri”,“Tue/Thu”,“As needed”].map(f=><option key={f}>{f}</option>)}
</select>
</div>
</div>
<div className="fg"><label className="fl">Category</label>
<select className=“fsel” value={draft.category} onChange={e=>setDraft({…draft,category:e.target.value})}>
{[“Medication”,“Exercise”,“Care”,“Nutrition”,“Monitoring”,“Other”].map(c=><option key={c}>{c}</option>)}
</select>
</div>
</Modal>
)}
</div>
);
}

function CareTeam({ pd, updatePD }) {
const [showAdd,setShowAdd] = useState(false);
const [draft,setDraft] = useState({name:””,specialty:””,phone:””,hospital:””,next_appt:””,email:””,notes:””});
const save = () => { if(!draft.name)return; updatePD({…pd,doctors:[…pd.doctors,{…draft,id:uid()}]}); setDraft({name:””,specialty:””,phone:””,hospital:””,next_appt:””,email:””,notes:””}); setShowAdd(false); };
const del    = id => updatePD({…pd,doctors:pd.doctors.filter(d=>d.id!==id)});
const sorted = […pd.doctors].sort((a,b)=>new Date(a.next_appt)-new Date(b.next_appt));
return (
<div>
<div style={{display:“flex”,justifyContent:“flex-end”,marginBottom:20}}>
<button className=“btn btn-f” onClick={()=>setShowAdd(true)}>+ Add Doctor</button>
</div>
<div className="g2">
{sorted.map((doc,i) => (
<div key={doc.id} className=“doc-card” style={{animationDelay:`${i*0.07}s`}}>
<div style={{display:“flex”,gap:12,alignItems:“flex-start”}}>
<div className=“doc-av” style={{background:`${DOC_COLORS[i%DOC_COLORS.length]}18`,color:DOC_COLORS[i%DOC_COLORS.length]}}>{initials(doc.name)}</div>
<div style={{flex:1}}><div className="doc-name">{doc.name}</div><div className="doc-spec">{doc.specialty}</div></div>
<button className=“btn btn-d btn-sm” onClick={()=>del(doc.id)}>×</button>
</div>
<div className="divider" />
{[[“🏥”,doc.hospital],[“📞”,doc.phone],[“✉️”,doc.email],[“📅”,doc.next_appt?`Next: ${fmtDate(doc.next_appt)}`:null]].filter(([,v])=>v).map(([icon,val])=>(
<div key={icon} className="doc-row"><span>{icon}</span><span>{val}</span></div>
))}
{doc.notes && <div style={{background:“var(–bg)”,padding:“8px 12px”,borderRadius:“var(–rs)”,fontSize:12,color:“var(–text2)”,border:“1px solid var(–border)”}}>💬 {doc.notes}</div>}
</div>
))}
</div>
{showAdd && (
<Modal title=“Add Doctor / Specialist” onClose={()=>setShowAdd(false)} onSave={save} wide>
<div className="g2">
{[[“name”,“Full Name”],[“specialty”,“Specialty”],[“hospital”,“Hospital / Clinic”],[“phone”,“Phone”],[“email”,“Email”],[“next_appt”,“Next Appt (YYYY-MM-DD)”]].map(([k,l])=>(
<div key={k} className="fg"><label className="fl">{l}</label><input className=“fi” value={draft[k]} onChange={e=>setDraft({…draft,[k]:e.target.value})} /></div>
))}
</div>
<div className="fg"><label className="fl">Notes</label><textarea className=“fta” value={draft.notes} onChange={e=>setDraft({…draft,notes:e.target.value})} /></div>
</Modal>
)}
</div>
);
}

function PatientProfileModule({ patient, onUpdatePatient }) {
const [editing,setEditing] = useState(false);
const [draft,setDraft]     = useState({…patient});
const fields = [[“name”,“Full Name”],[“dob”,“Date of Birth”],[“condition”,“Primary Condition”],[“diagnosis_date”,“Diagnosis Date”],[“blood_type”,“Blood Type”],[“allergies”,“Allergies”],[“emergency_contact”,“Emergency Contact”]];
return (
<div className="g2">
<div className="card">
<div className="card-title">Personal Information</div>
{[[“Full Name”,patient.name],[“Date of Birth”,fmtDate(patient.dob)],[“Blood Type”,patient.blood_type],[“Allergies”,patient.allergies],[“Emergency Contact”,patient.emergency_contact]].map(([k,v])=>(
<div key={k} className="pf"><div className="pk">{k}</div><div className="pv">{v}</div></div>
))}
</div>
<div className="card">
<div style={{display:“flex”,justifyContent:“space-between”,alignItems:“center”,marginBottom:16}}>
<div className="card-title" style={{marginBottom:0}}>Medical Condition</div>
<button className=“btn btn-o btn-sm” onClick={()=>setEditing(true)}>✏️ Edit</button>
</div>
{[[“Primary Condition”,patient.condition],[“Diagnosis Date”,patient.diagnosis_date]].map(([k,v])=>(
<div key={k} className="pf"><div className="pk">{k}</div><div className=“pv” style={{fontWeight:k===“Primary Condition”?700:400}}>{v}</div></div>
))}
<div style={{marginTop:16}}>
<div className="pk" style={{marginBottom:8}}>Clinical Notes</div>
<div style={{background:“var(–bg)”,padding:“12px 14px”,borderRadius:“var(–rs)”,fontSize:13,lineHeight:1.7,color:“var(–text2)”,border:“1px solid var(–border)”}}>{patient.notes}</div>
</div>
</div>
{editing && (
<Modal title=“Edit Patient Profile” onClose={()=>setEditing(false)} onSave={()=>{onUpdatePatient(draft);setEditing(false);}}>
{fields.map(([k,l])=>(<div key={k} className="fg"><label className="fl">{l}</label><input className=“fi” value={draft[k]||””} onChange={e=>setDraft({…draft,[k]:e.target.value})} /></div>))}
<div className="fg"><label className="fl">Clinical Notes</label><textarea className=“fta” value={draft.notes||””} onChange={e=>setDraft({…draft,notes:e.target.value})} /></div>
</Modal>
)}
</div>
);
}

function ModuleScreen({ moduleId, patient, caregiver, caregivers, pd, updatePD, updatePatient, onBack }) {
const def = MODULES.find(m=>m.id===moduleId)||{};
return (
<div className="screen"><div className="si">
<div style={{display:“flex”,alignItems:“center”,gap:14,marginBottom:28}}>
<div className="back-btn" onClick={onBack}>←</div>
<div>
<div style={{fontFamily:”‘Cormorant Garamond’,serif”,fontSize:26,fontWeight:600}}>{def.icon} {def.name}</div>
<div style={{fontSize:13,color:“var(–text2)”,marginTop:2}}>{patient.name}</div>
</div>
</div>
{moduleId===“dashboard”   && <Dashboard patient={patient} caregiver={caregiver} pd={pd} />}
{moduleId===“log”         && <DailyLog pd={pd} updatePD={updatePD} caregiver={caregiver} caregivers={caregivers} />}
{moduleId===“treatments”  && <Treatments pd={pd} updatePD={updatePD} />}
{moduleId===“doctors”     && <CareTeam pd={pd} updatePD={updatePD} />}
{moduleId===“profile”     && <PatientProfileModule patient={patient} onUpdatePatient={updatePatient} />}
</div></div>
);
}

function AdminPanel({ state, setState }) {
const [tab,setTab]             = useState(“caregivers”);
const [showAddCg,setShowAddCg] = useState(false);
const [showAddPt,setShowAddPt] = useState(false);
const [cgD,setCgD]             = useState({name:””,role:“Family Member”,color:PALETTE[0]});
const [ptD,setPtD]             = useState({name:””,condition:””,dob:””,blood_type:””,allergies:“None known”,emergency_contact:””,notes:””,color:PALETTE[0]});

const addCg = () => { if(!cgD.name)return; const id=“cg”+uid(); setState({…state,caregivers:[…state.caregivers,{…cgD,id}],assignments:{…state.assignments,[id]:[]}}); setCgD({name:””,role:“Family Member”,color:PALETTE[0]}); setShowAddCg(false); };
const delCg = id => { const{[id]:*,…rest}=state.assignments; setState({…state,caregivers:state.caregivers.filter(c=>c.id!==id),assignments:rest}); };
const addPt = () => { if(!ptD.name)return; const id=“p”+uid(); setState({…state,patients:[…state.patients,{…ptD,id}],patientData:{…state.patientData,[id]:{doctors:[],treatments:[],notes:[]}}}); setPtD({name:””,condition:””,dob:””,blood_type:””,allergies:“None known”,emergency_contact:””,notes:””,color:PALETTE[0]}); setShowAddPt(false); };
const delPt = id => { const nA={}; Object.entries(state.assignments).forEach(([k,v])=>{nA[k]=v.filter(p=>p!==id);}); const{[id]:*,…rPD}=state.patientData; setState({…state,patients:state.patients.filter(p=>p.id!==id),assignments:nA,patientData:rPD}); };
const toggleA = (cgId,ptId) => { const cur=state.assignments[cgId]||[]; const next=cur.includes(ptId)?cur.filter(p=>p!==ptId):[…cur,ptId]; setState({…state,assignments:{…state.assignments,[cgId]:next}}); };
const AV = ({name,color,size=40}) => <div style={{width:size,height:size,borderRadius:“50%”,background:`${color}18`,color,display:“flex”,alignItems:“center”,justifyContent:“center”,fontWeight:700,fontSize:size*0.35,flexShrink:0}}>{initials(name)}</div>;

return (
<div className="screen"><div className="si">
<div style={{marginBottom:28}}>
<div className="page-title">⚙️ Admin Panel</div>
<div className="page-sub">Manage caregivers, patients and assignments</div>
</div>
<div className="admin-tabs">
{[[“caregivers”,“👤 Caregivers”],[“patients”,“🏥 Patients”],[“assignments”,“🔗 Assignments”]].map(([id,lbl])=>(
<button key={id} className={`admin-tab${tab===id?" on":""}`} onClick={()=>setTab(id)}>{lbl}</button>
))}
</div>
{tab===“caregivers” && (
<div>
<div style={{display:“flex”,justifyContent:“flex-end”,marginBottom:16}}><button className=“btn btn-f” onClick={()=>setShowAddCg(true)}>+ Add Caregiver</button></div>
<div className="fc">
{state.caregivers.map((cg,i)=>(
<div key={cg.id} className=“admin-row” style={{animationDelay:`${i*0.05}s`}}>
<AV name={cg.name} color={cg.color} />
<div style={{flex:1}}><div style={{fontWeight:700,fontSize:14}}>{cg.name}</div><div style={{fontSize:12,color:“var(–text2)”}}>{cg.role}</div></div>
<div style={{fontSize:12,color:“var(–text3)”}}>{(state.assignments[cg.id]||[]).length} patient(s)</div>
<button className=“btn btn-d btn-sm” onClick={()=>delCg(cg.id)}>Remove</button>
</div>
))}
</div>
{showAddCg && (
<Modal title=“Add Caregiver” onClose={()=>setShowAddCg(false)} onSave={addCg}>
<div className="fg"><label className="fl">Full Name</label><input className=“fi” value={cgD.name} onChange={e=>setCgD({…cgD,name:e.target.value})} /></div>
<div className="fg"><label className="fl">Role</label>
<select className=“fsel” value={cgD.role} onChange={e=>setCgD({…cgD,role:e.target.value})}>
{[“Primary Caregiver”,“Family Member”,“Medical Nurse”,“Professional Aide”,“Other”].map(r=><option key={r}>{r}</option>)}
</select>
</div>
<div className="fg"><label className="fl">Color</label>
<div style={{display:“flex”,gap:8,marginTop:4}}>
{PALETTE.map(c=><div key={c} onClick={()=>setCgD({…cgD,color:c})} style={{width:28,height:28,borderRadius:“50%”,background:c,cursor:“pointer”,outline:cgD.color===c?“3px solid #1C1917”:“none”,outlineOffset:2}} />)}
</div>
</div>
</Modal>
)}
</div>
)}
{tab===“patients” && (
<div>
<div style={{display:“flex”,justifyContent:“flex-end”,marginBottom:16}}><button className=“btn btn-f” onClick={()=>setShowAddPt(true)}>+ Add Patient</button></div>
<div className="fc">
{state.patients.map((pt,i)=>(
<div key={pt.id} className=“admin-row” style={{animationDelay:`${i*0.05}s`}}>
<AV name={pt.name} color={pt.color} />
<div style={{flex:1}}><div style={{fontWeight:700,fontSize:14}}>{pt.name}</div><div style={{fontSize:12,color:“var(–text2)”}}>{pt.condition}</div></div>
<div style={{fontSize:12,color:“var(–text3)”}}>{fmtDate(pt.dob)}</div>
<button className=“btn btn-d btn-sm” onClick={()=>delPt(pt.id)}>Remove</button>
</div>
))}
</div>
{showAddPt && (
<Modal title=“Add Patient” onClose={()=>setShowAddPt(false)} onSave={addPt} wide>
<div className="g2">
{[[“name”,“Full Name”],[“condition”,“Primary Condition”],[“dob”,“Date of Birth (YYYY-MM-DD)”],[“blood_type”,“Blood Type”],[“allergies”,“Allergies”],[“emergency_contact”,“Emergency Contact”]].map(([k,l])=>(
<div key={k} className="fg"><label className="fl">{l}</label><input className=“fi” value={ptD[k]||””} onChange={e=>setPtD({…ptD,[k]:e.target.value})} /></div>
))}
</div>
<div className="fg"><label className="fl">Clinical Notes</label><textarea className=“fta” value={ptD.notes} onChange={e=>setPtD({…ptD,notes:e.target.value})} /></div>
<div className="fg"><label className="fl">Color</label>
<div style={{display:“flex”,gap:8,marginTop:4}}>
{PALETTE.map(c=><div key={c} onClick={()=>setPtD({…ptD,color:c})} style={{width:28,height:28,borderRadius:“50%”,background:c,cursor:“pointer”,outline:ptD.color===c?“3px solid #1C1917”:“none”,outlineOffset:2}} />)}
</div>
</div>
</Modal>
)}
</div>
)}
{tab===“assignments” && (
<div>
<div style={{fontSize:13,color:“var(–text2)”,marginBottom:20}}>Click a patient’s name to toggle their assignment to each caregiver.</div>
<div className="fc">
{state.caregivers.map((cg,i)=>(
<div key={cg.id} className=“asgn-row” style={{animationDelay:`${i*0.07}s`}}>
<div className="asgn-cg">
<div style={{width:32,height:32,borderRadius:“50%”,background:`${cg.color}18`,color:cg.color,display:“flex”,alignItems:“center”,justifyContent:“center”,fontWeight:700,fontSize:12}}>{initials(cg.name)}</div>
<span style={{fontSize:14,fontWeight:700}}>{cg.name}</span>
<span style={{fontSize:12,color:“var(–text3)”}}>{cg.role}</span>
</div>
<div className="asgn-pts">
{state.patients.map(pt => {
const on=(state.assignments[cg.id]||[]).includes(pt.id);
return <div key={pt.id} className={`asgn-pt ${on?"on":"off"}`} onClick={()=>toggleA(cg.id,pt.id)}>{on?“✓”:”+”} {pt.name}</div>;
})}
{state.patients.length===0 && <div style={{fontSize:13,color:“var(–text3)”}}>No patients yet</div>}
</div>
</div>
))}
</div>
</div>
)}
</div></div>
);
}

function Topbar({ step, caregiver, patient, onLogo, onCG, onPT, onAdmin }) {
return (
<div className="topbar">
<div className="logo" onClick={onLogo}>Care<em>Command</em></div>
{step!==“caregiver-select” && step!==“admin” && (
<div className="breadcrumb">
<span className="breadcrumb-sep">›</span>
<span className={`bc-link${step==="patient-select"?" bc-active":""}`} onClick={onCG}>{caregiver?.name}</span>
{(step===“hub”||step===“module”) && patient && <>
<span className="breadcrumb-sep">›</span>
<span className={`bc-link${step==="hub"?" bc-active":""}`} onClick={onPT}>{patient.name}</span>
</>}
</div>
)}
<div className="topbar-right">
{caregiver && step!==“caregiver-select” && step!==“admin” && (
<div className="badge-cg" onClick={onCG}>
<div style={{width:24,height:24,borderRadius:“50%”,background:`${caregiver.color}20`,color:caregiver.color,display:“flex”,alignItems:“center”,justifyContent:“center”,fontSize:11,fontWeight:700}}>{initials(caregiver.name)}</div>
{caregiver.name}
</div>
)}
<button className="btn-admin-top" onClick={onAdmin}>{step===“admin”?“← Exit Admin”:“Admin”}</button>
</div>
</div>
);
}

export default function App() {
useGlobalStyles();
const [state,setState]       = useState(INIT);
const [step,setStep]         = useState(“caregiver-select”);
const [prevStep,setPrevStep] = useState(“caregiver-select”);
const [caregiver,setCG]      = useState(null);
const [patient,setPT]        = useState(null);
const [moduleId,setMod]      = useState(null);

const go = s => { setPrevStep(step); setStep(s); };
const getPD = () => state.patientData[patient?.id] || {doctors:[],treatments:[],notes:[]};
const setPD = pd => setState(s=>({…s,patientData:{…s.patientData,[patient.id]:pd}}));
const updatePT = p => { setState(s=>({…s,patients:s.patients.map(x=>x.id===p.id?p:x)})); setPT(p); };

return (
<div>
<Topbar
step={step} caregiver={caregiver} patient={patient}
onLogo={() => go(“caregiver-select”)}
onCG={()=>caregiver&&go(“patient-select”)}
onPT={()=>patient&&go(“hub”)}
onAdmin={()=>step===“admin”?go(prevStep):go(“admin”)}
/>
{step===“caregiver-select” && <CaregiverSelect caregivers={state.caregivers} onSelect={cg=>{setCG(cg);go(“patient-select”);}} onAdmin={()=>go(“admin”)} />}
{step===“patient-select”   && caregiver && <PatientSelect caregiver={caregiver} patients={state.patients} assignments={state.assignments} onSelect={pt=>{setPT(pt);go(“hub”);}} />}
{step===“hub”              && patient   && <ModuleHub patient={patient} patientData={state.patientData} onOpen={id=>{setMod(id);go(“module”);}} />}
{step===“module”           && moduleId && patient && caregiver && <ModuleScreen moduleId={moduleId} patient={patient} caregiver={caregiver} caregivers={state.caregivers} pd={getPD()} updatePD={setPD} updatePatient={updatePT} onBack={()=>go(“hub”)} />}
{step===“admin”            && <AdminPanel state={state} setState={setState} />}
</div>
);
}
