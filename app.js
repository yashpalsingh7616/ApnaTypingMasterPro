/* ══════════════════════════════════════════════════════
   STATE (Updated for Multi-Page)
══════════════════════════════════════════════════════ */
let APP = JSON.parse(localStorage.getItem('APP_STATE')) || {
  loggedIn:false, name:'', email:'', isPro:false, plan:'monthly',
  lang:'english', idx:0, running:false, timer:null, timeLeft:600,
  corr:0, err:0, total:0,
  pendingLang:null, pendingIsRule:false,
  activeExamKey:null, backspaceCount:0, isLiveMode:false, hindiLayout:null, pendingLayout:null
};

let liveResults = JSON.parse(localStorage.getItem('LIVE_RESULTS')) || [];
const ADMIN = {email:'admin@apnatyping.com', password:'admin@123'};
let admLoggedIn = localStorage.getItem('ADM_LOGGED_IN') === 'true';
let admCurrentTab = 0;
const users = JSON.parse(localStorage.getItem('USERS_DB')) || {};

function saveState() {
  localStorage.setItem('APP_STATE', JSON.stringify(APP));
  localStorage.setItem('LIVE_RESULTS', JSON.stringify(liveResults));
  localStorage.setItem('USERS_DB', JSON.stringify(users));
}

/* ══════════════════════════════════════════════════════
   PAGE SWITCHING HELPERS
══════════════════════════════════════════════════════ */
function showPage(id){
  saveState();
  if(id === 'landingPage') window.location.href = 'index.html';
  else if(id === 'dashboardPage') window.location.href = 'candidate.html';
  else if(id === 'testPageWrap') window.location.href = 'typing.html';
  else if(id === 'adminPage') window.location.href = 'admin.html';
  else if(id === 'liveTestPage') window.location.href = 'typing.html';
}

/* ══════════════════════════════════════════════════════
   AUTH
══════════════════════════════════════════════════════ */
function openAuthModal(tab='login'){
  window.location.href = tab === 'login' ? 'login.html' : 'register.html';
}

function doAuthLogin(){
  const email=document.getElementById('authLoginEmail').value.trim();
  const pass=document.getElementById('authLoginPass').value;
  const err=document.getElementById('authLoginErr');
  if(!email||!pass){err.style.display='block';err.textContent='❌ Email aur password dono likhein.';return;}
  loginSuccess(users[email]?.name||email.split('@')[0],email);
}

function doAuthSignup(){
  const name=document.getElementById('authSignupName').value.trim();
  const email=document.getElementById('authSignupEmail').value.trim();
  const pass=document.getElementById('authSignupPass').value;
  const err=document.getElementById('authSignupErr');
  if(!name||!email||!pass){err.style.display='block';err.textContent='❌ Sabhi fields bharna zaroori hai.';return;}
  if(pass.length<6){err.style.display='block';err.textContent='❌ Password min 6 characters ka hona chahiye.';return;}
  users[email]={name,email,password:pass};
  loginSuccess(name,email);
}

function loginSuccess(name,email){
  APP.loggedIn=true; APP.name=name; APP.email=email;
  saveState();
  
  if(APP.pendingLang){
    const k=APP.pendingLang,ir=APP.pendingIsRule,pl=APP.pendingLayout;
    APP.pendingLang=null;APP.pendingIsRule=false;APP.pendingLayout=null;
    saveState();
    if(pl){APP.hindiLayout=pl;setTimeout(()=>window.location.href='typing.html',150);}
    else setTimeout(()=>{ir?tryTestWithRules(k):window.location.href='typing.html';},150);
  } else {
    window.location.href = 'candidate.html';
  }
}

function updateDashStrip(){
  const strip=document.getElementById('authStrip');
  if(!strip) return;
  strip.innerHTML='<span style="color:#555;">Welcome, <b>'+APP.name+'</b></span>'+
    (APP.isPro?'<span style="background:#27ae60;color:#fff;padding:2px 10px;border-radius:3px;font-size:11px;font-weight:700;margin-left:6px;">⚡ PRO</span>':'')+
    (!APP.isPro?'<button class="auth-btn-d" onclick="openDModal(\'subModal\')">⚡ Upgrade</button>':'')+
    '<button class="auth-btn-d" style="background:#888;" onclick="doLogout()">Log Out</button>';
  const banner=document.getElementById('proBanner');
  if(banner) banner.style.display=APP.isPro?'none':'flex';
}

function doLogout(){
  APP.loggedIn=false;APP.isPro=false;APP.name='';APP.email='';
  clearInterval(APP.timer);APP.running=false;
  saveState();
  window.location.href = 'index.html';
}

function openDModal(id){ 
    const el = document.getElementById(id);
    if(el) el.classList.add('open'); 
}
function closeDModal(id){ 
    const el = document.getElementById(id);
    if(el) el.classList.remove('open'); 
}

/* ══════════════════════════════════════════════════════
   LIVE TEST PAGE & DASHBOARD ROUTING
══════════════════════════════════════════════════════ */
function openLiveTestPage(){
  if(!APP.loggedIn){ APP.pendingLang='english'; saveState(); window.location.href='login.html'; return;}
  // Assuming live test is also on typing.html in MPA
  window.location.href = 'typing.html';
}

function startLiveScheduledTest(testId){
  const t=LIVE_SCHEDULE.find(x=>x.id===testId);
  if(!t){alert('Test nahi mila!');return;}
  if(!APP.loggedIn){openAuthModal('login');return;}
  APP.isLiveMode=true;
  APP.lang=t.passKey;
  APP.idx=t.passIdx;
  APP.activeExamKey=null;
  APP.currentLiveTest=t;
  saveState();
  window.location.href = 'typing.html';
}

/* ══════════════════════════════════════════════════════
   TEST PAGE ENGINE
══════════════════════════════════════════════════════ */
function tryTest(lang){
  if(!APP.loggedIn){APP.pendingLang=lang; saveState(); window.location.href='login.html';return;}
  APP.activeExamKey=null;APP.isLiveMode=false;APP.hindiLayout=null; APP.lang=lang; APP.idx=0;
  saveState();
  window.location.href='typing.html';
}

function tryTestHindi(layout){
  if(!APP.loggedIn){APP.pendingLang='hindi';APP.pendingIsRule=false;APP.pendingLayout=layout; saveState(); window.location.href='login.html';return;}
  APP.hindiLayout=layout;APP.activeExamKey=null;APP.isLiveMode=false; APP.lang='hindi';
  saveState();
  window.location.href='typing.html';
}

function tryTestWithRules(ruleKey){
  if(!APP.loggedIn){APP.pendingLang=ruleKey;APP.pendingIsRule=true; saveState(); window.location.href='login.html';return;}
  const rule=EXAM_RULES[ruleKey];
  if(!rule){tryTest('english');return;}
  APP.activeExamKey=ruleKey;APP.isLiveMode=false;APP.lang=rule.lang;APP.idx=0;
  saveState();
  window.location.href='typing.html';
}

function goHome(){
  clearInterval(APP.timer);APP.running=false;
  APP.activeExamKey=null;APP.isLiveMode=false;
  saveState();
  window.location.href = 'candidate.html';
}

// Ensure elements load properly if we are on typing.html
document.addEventListener('DOMContentLoaded',()=>{
  if(document.getElementById('passageDisplay')) {
      buildDd(); loadPass(); resetTest();
      
      const layoutLabel = APP.lang==='hindi' && APP.hindiLayout ?
        (APP.hindiLayout==='krutidev'?'Hindi KrutiDev':APP.hindiLayout==='mangal_inscript'?'Hindi Mangal INSCRIPT':'Hindi Mangal GAIL') : 
        (APP.lang==='numbers'?'Number':'English');
      if(document.getElementById('testTitle')) document.getElementById('testTitle').textContent='⌨ '+layoutLabel+' Typing Test — Apna Typing Master Pro';
      
      if(APP.lang==='hindi'){
        const pd=document.getElementById('passageDisplay');
        const ta=document.getElementById('typeArea');
        const font=APP.hindiLayout==='krutidev'? "'Kruti Dev 010','KrutiDev 010','Mangal','Noto Sans Devanagari',sans-serif": "'Mangal','Noto Sans Devanagari',sans-serif";
        if(pd){pd.style.fontFamily=font;pd.style.fontSize='17px';pd.style.lineHeight='2.8';}
        if(ta){ta.style.fontFamily=font;ta.style.fontSize='16px';}
      }
      
      if(APP.activeExamKey) {
          const rule=EXAM_RULES[APP.activeExamKey];
          if(document.getElementById('activeExamDisplay')) document.getElementById('activeExamDisplay').innerHTML='<b style="color:#1a5276;">✅ '+rule.name+'</b><br><span style="font-weight:400;color:#555;">⏱ '+rule.time+' min | Min. '+rule.minWPM+' WPM</span>';
      }
  }
  
  if(document.getElementById('authStrip')) {
      updateDashStrip();
  }
});

function buildDd(){
  const sel=document.getElementById('ctrlEx');
  if(!sel) return;
  sel.innerHTML='';
  const arr=APP.isLiveMode?(LIVE_PASS[APP.lang]||[]):(PASS[APP.lang]||[]);
  arr.forEach((_,i)=>{
    const locked=!APP.isLiveMode&&!APP.isPro&&i>=2;
    const o=document.createElement('option');
    o.value=i;
    o.textContent='Exercise '+(i+1)+'/'+arr.length+(locked?' 🔒 PRO':APP.isLiveMode?' 🔴':'');
    sel.appendChild(o);
  });
  sel.value=APP.idx;
}

function changeEx(){
  const i=parseInt(document.getElementById('ctrlEx').value);
  if(!APP.isLiveMode&&!APP.isPro&&i>=2){openDModal('subModal');document.getElementById('ctrlEx').value=APP.idx;return;}
  APP.idx=i; saveState(); loadPass(); resetTest();
}
function nextEx(){
  const arr=APP.isLiveMode?(LIVE_PASS[APP.lang]||[]):(PASS[APP.lang]||[]);
  const n=APP.idx+1;
  if(!APP.isLiveMode&&!APP.isPro&&n>=2){openDModal('subModal');return;}
  if(n<arr.length){APP.idx=n; document.getElementById('ctrlEx').value=n; saveState(); loadPass(); resetTest();}
}

let customPassageActive=false, customPassageText='';
function loadPass(){
  const arr=APP.isLiveMode?(LIVE_PASS[APP.lang]||[]):(PASS[APP.lang]||[]);
  const t=customPassageActive ? customPassageText : (arr[APP.idx%arr.length]||'');
  if(document.getElementById('passageSpan')) document.getElementById('passageSpan').innerHTML=renderP(t,'');
}

function renderP(p,typed){
  let h='',i=0;
  while(i<p.length){
    if(p[i]===' '){
      if(i<typed.length)h+='<span class="'+(typed[i]===' '?'ch-typed':'ch-error')+'"> </span>';
      else if(i===typed.length)h+='<span class="ch-current"> </span>';
      else h+=' ';
      i++;
    } else {
      let ws=i;while(i<p.length&&p[i]!==' ')i++;
      let wh='';
      for(let j=ws;j<i;j++){
        const c=p[j],esc=c==='<'?'&lt;':c==='>'?'&gt;':c==='&'?'&amp;':c;
        if(j<typed.length)wh+='<span class="'+(typed[j]===c?'ch-typed':'ch-error')+'">'+esc+'</span>';
        else if(j===typed.length)wh+='<span class="ch-current">'+esc+'</span>';
        else wh+='<span>'+esc+'</span>';
      }
      h+='<span class="pw">'+wh+'</span>';
    }
  }
  return h;
}

function resetTest(){
  clearInterval(APP.timer);APP.running=false;
  const durEl = document.getElementById('ctrlDur');
  const dur = durEl ? parseInt(durEl.value)*60 : 600;
  APP.timeLeft=dur; updTimer();
  const ta=document.getElementById('typeArea');
  if(ta) { ta.value=''; ta.disabled=false; }
  if(document.getElementById('startBtn')) document.getElementById('startBtn').style.display='inline-block';
  if(document.getElementById('stopBtn')) document.getElementById('stopBtn').style.display='none';
  if(document.getElementById('liveWpm')) document.getElementById('liveWpm').textContent='0';
  loadPass();
}

function startTest(){
  APP.running=true;APP.corr=0;APP.err=0;APP.total=0;APP.backspaceCount=0;
  const ta=document.getElementById('typeArea'); ta.disabled=false; ta.value=''; ta.focus();
  document.getElementById('startBtn').style.display='none';
  document.getElementById('stopBtn').style.display='inline-block';
  APP.timer=setInterval(()=>{APP.timeLeft--; updTimer(); if(APP.timeLeft<=0) submitTest();},1000);
}

function updTimer(){
  if(!document.getElementById('ctrlTimer')) return;
  const m=String(Math.floor(APP.timeLeft/60)).padStart(2,'0'),s=String(APP.timeLeft%60).padStart(2,'0');
  document.getElementById('ctrlTimer').textContent=m+':'+s;
}

document.addEventListener('DOMContentLoaded',()=>{
  const ta=document.getElementById('typeArea');
  if(!ta) return;
  ta.addEventListener('paste',e=>{ e.preventDefault(); });
  ta.addEventListener('keydown',e=>{
    if(!APP.running) return;
    if(e.key==='Backspace'){
      const bsMode=document.querySelector('input[name="bs"]:checked')?.value||'word';
      if(bsMode==='off'){e.preventDefault();return;}
      if(bsMode==='word'){
        const val=ta.value;
        if(val.length===0||val[val.length-1]===' '){e.preventDefault();return;}
      }
      APP.backspaceCount++;
    }
  });
  ta.addEventListener('input',()=>{
    if(!APP.running) return;
    const typed=ta.value;
    const arr=APP.isLiveMode?(LIVE_PASS[APP.lang]||[]):(PASS[APP.lang]||[]);
    const pass=arr[APP.idx%arr.length]||'';
    document.getElementById('passageSpan').innerHTML=renderP(pass,typed);
    const tw=typed.trim().split(/\s+/).filter(Boolean),pw=pass.trim().split(/\s+/);
    let c=0,e=0;
    tw.forEach((w,i)=>{if(i<pw.length){if(w===pw[i])c++;else e++;}});
    const dur=parseInt(document.getElementById('ctrlDur').value)*60,el=Math.max(1,dur-APP.timeLeft);
    const wpm=Math.round(c/el*60),acc=tw.length>0?Math.round(c/tw.length*100):100;
    document.getElementById('liveWpm').textContent=wpm;
    document.getElementById('liveAcc').textContent=acc+'%';
    APP.corr=c;APP.err=e;APP.total=tw.length;
  });
});

function submitTest(){
  clearInterval(APP.timer);APP.running=false;
  saveState();
  // Redirect to result page
  window.location.href = 'result.html';
}

/* Call this inside result.html automatically */
function showResMultiPage(){
  const dur = 10; // Or fetch from state
  const elapsed = Math.max(1, dur*60 - APP.timeLeft);
  const mins = elapsed/60;
  const gross = Math.round(APP.total/mins);
  const acc = APP.total>0 ? Math.round(APP.corr/APP.total*100) : 0;
  const net = Math.max(0, Math.round(APP.corr/mins));
  
  if(document.getElementById('resBody')) {
      document.getElementById('resBody').innerHTML=`
      <div style="background:linear-gradient(135deg,#f8f9fa,#eaf2ff);border-radius:6px;padding:14px;text-align:center;margin-bottom:10px;">
        <div style="font-size:28px;font-weight:900;">Net WPM: <span style="color:#2471a3">${net}</span></div>
        <div>Accuracy: ${acc}%</div>
      </div>
      <div class="res-row">
        <div>Gross WPM: ${gross}</div>
        <div>Total Words: ${APP.total}</div>
        <div style="color:#27ae60;">Correct: ${APP.corr}</div>
        <div style="color:#e74c3c;">Wrong: ${APP.err}</div>
      </div>
      `;
  }
}
if(window.location.pathname.includes('result.html')) {
    document.addEventListener('DOMContentLoaded', showResMultiPage);
}
