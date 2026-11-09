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
  let toastTimer;
  function displayToast(message){
    let toast=document.querySelector('#site-toast');
    if(!toast){toast=document.createElement('div');toast.id='site-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');document.body.appendChild(toast)}
    clearTimeout(toastTimer);
    toast.classList.remove('is-hiding');
    toast.textContent=message;
    toastTimer=setTimeout(()=>{toast.classList.add('is-hiding');},3500);
  }
})();
