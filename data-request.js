(()=>{
  'use strict';
  const form=document.getElementById('privacy-request-form');
  if(!form) return;
  const kind=form.querySelector('#request-kind');
  const scope=form.querySelector('#request-scope');
  const server=form.querySelector('#request-server');
  const serverOptional=form.querySelector('#server-optional');
  const ownerAck=form.querySelector('#owner-understands');
  const ownerBox=form.querySelector('#owner-confirmation');
  const result=form.querySelector('#request-result');
  const copyBtn=form.querySelector('#copy-request');
  let message='';
  function update(){
    const guildRequest=kind.value==='guild';
    if(guildRequest) scope.value='one';
    scope.disabled=guildRequest;
    ownerBox.hidden=!guildRequest; ownerAck.required=guildRequest;
    if(!guildRequest) ownerAck.checked=false;
    const needed=guildRequest||scope.value==='one';
    server.required=needed;
    serverOptional.textContent=needed?'(required)':'(optional)';
    if(!needed) server.value='';
  }
  kind.addEventListener('change',update);
  scope.addEventListener('change',update);
  update();
  form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    if(!form.reportValidity()) return;
    const kindLabel=kind.selectedOptions[0].textContent;
    message=[
      'Hello Umask support,', '',
      'I would like to submit a privacy/data request:',
      'Request: '+kindLabel,
      'Discord user ID: '+form.elements.user_id.value.trim(),
      'Scope: '+(kind.value==='guild'?'entire server':scope.value==='one'?'one server':'all servers'),
      'Discord server ID: '+(server.value.trim()||'not specified'),
      'Details: '+(form.elements.details.value.trim()||'none'),
      'Server-wide consequence acknowledged: '+(kind.value==='guild'?'yes':'not applicable'),'',
      'I understand this request is subject to identity verification and manual review.',
      'Please let me know what verification you require.', ''
    ].join('\n');
    const mailto='mailto:support@umask.app?subject='+encodeURIComponent('Umask privacy request')+'&body='+encodeURIComponent(message);
    result.hidden=false;
    window.location.href=mailto;
  });
  copyBtn.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(message);copyBtn.textContent='Copied';}
    catch{copyBtn.textContent='Copy failed — please use your email client';}
  });
})();
