(()=>{
  'use strict';
  const config=window.UMASK_CONFIG||{};
  const validHttps=(s)=>{try{const u=new URL(s);return u.protocol==='https:'?u:null}catch{return null}};
  const install=validHttps(config.botInstallUrl);
  const support=validHttps(config.supportInviteUrl);
  for(const [kind,url] of [['install',install],['support',support]]){
    document.querySelectorAll(`[data-link="${kind}"]`).forEach(a=>{
      if(url){a.href=url.href;a.target='_blank';a.rel='noopener noreferrer'}
      else{
        a.classList.add('is-unconfigured');a.setAttribute('aria-disabled','true');
        a.title=kind==='install'?'Install link will be available soon.':'Support invite will be available soon.';
        a.addEventListener('click',e=>{e.preventDefault();displayToast(kind==='install'?'Bot invite coming soon.':'Support invite coming soon.');});
      }
    });
  }
  const el=document.querySelector('#site-status');
  if(el&&(!install||!support)){
    const note=document.createElement('span');note.textContent='  ·  '+(!install?'Bot invite link is being prepared.':'Support invite is being prepared.');el.appendChild(note);
  }
  const ready=Boolean(config.legalReady&&config.contactEmail&&config.operatorName);
  document.querySelectorAll('[data-legal-banner]').forEach(el=>{el.hidden=ready});
  document.querySelectorAll('[data-operator]').forEach(el=>{el.textContent=config.operatorName||'[Operator / organisation name — required before launch]'});
  document.querySelectorAll('[data-contact]').forEach(el=>{
    const s=String(config.contactEmail||'').trim();
    if(s&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)){
      const a=document.createElement('a');a.href='mailto:'+s;a.textContent=s;el.replaceChildren(a);
    }else{el.textContent='[Contact email — required before launch]'}
  });
  document.querySelectorAll('[data-year]').forEach(el=>{el.textContent=String(new Date().getFullYear())});
  function displayToast(message){
    let toast=document.querySelector('#site-toast');
    if(!toast){toast=document.createElement('div');toast.id='site-toast';toast.setAttribute('role','status');Object.assign(toast.style,{position:'fixed',bottom:'22px',left:'50%',transform:'translateX(-50%)',zIndex:'100',padding:'12px 18px',borderRadius:'12px',background:'#242034',color:'#eee9ff',border:'1px solid #5b4e79',boxShadow:'0 15px 45px rgba(0,0,0,.3)',maxWidth:'90vw',textAlign:'center'});document.body.appendChild(toast)}
    toast.textContent=message;
  }
})();
