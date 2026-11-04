(function(){
var PRIV=window.EG_PRIV||'/privacy-policy/';
var LS={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
var mem={};
function get(k){var v=LS.get(k);return v!==null?v:(mem[k]||null)}
function set(k,v){mem[k]=v;LS.set(k,v)}
/* ---------- cookie banner ---------- */
if(!get('eg_cookie')){
  var b=document.createElement('div');b.className='ckb';b.setAttribute('role','region');b.setAttribute('aria-label','Cookie choices');
  b.innerHTML='<p><b>Cookies on this site</b>We only use what the site needs to work and to remember your choices. We don’t use advertising or tracking cookies, and we never sell your information. <a href="'+PRIV+'">Privacy Policy</a></p><div class="ckb-btns"><button type="button" class="btn sm" data-ck="accepted">Accept</button><button type="button" class="btn sm line" data-ck="declined">Decline</button></div>';
  document.body.appendChild(b);
  b.addEventListener('click',function(e){var c=e.target.closest('[data-ck]');if(!c)return;set('eg_cookie',c.getAttribute('data-ck'));b.remove();});
}
/* ---------- accessibility ---------- */
var P;try{P=JSON.parse(get('eg_a11y')||'{}')}catch(e){P={}}
var root=document.documentElement;
function apply(){
  document.querySelectorAll('header.site,main,#app,footer,.preview').forEach(function(el){el.style.zoom=P.size&&P.size!==1?P.size:''});
  root.classList.toggle('a11y-hc',!!P.hc);root.classList.toggle('a11y-ul',!!P.ul);
  root.classList.toggle('a11y-rf',!!P.rf);root.classList.toggle('a11y-na',!!P.na);
  if(panel){panel.querySelectorAll('[data-t]').forEach(function(x){x.setAttribute('aria-pressed',P[x.getAttribute('data-t')]?'true':'false')});
    var s=panel.querySelector('.a11y-size');if(s)s.textContent=Math.round((P.size||1)*100)+'%';}
}
function save(){set('eg_a11y',JSON.stringify(P));apply()}
var ico='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2"/><path d="M4 8.5c2.6.9 5.3 1.3 8 1.3s5.4-.4 8-1.3M12 9.8V15m0 0-3 6m3-6 3 6"/></svg>';
var btn=document.createElement('button');btn.type='button';btn.className='a11y-btn';btn.setAttribute('aria-label','Accessibility options');btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-controls','a11y-panel');btn.innerHTML=ico;
var panel=document.createElement('div');panel.id='a11y-panel';panel.className='a11y-panel';panel.setAttribute('role','region');panel.setAttribute('aria-label','Accessibility options');panel.hidden=true;
panel.innerHTML='<div class="a11y-head"><b>Accessibility</b><button type="button" class="a11y-x" aria-label="Close accessibility options">×</button></div>'+
 '<div class="a11y-row"><span>Text size</span><div class="a11y-sz"><button type="button" data-s="-1" aria-label="Smaller text">A−</button><span class="a11y-size" aria-live="polite">100%</span><button type="button" data-s="1" aria-label="Bigger text">A+</button></div></div>'+
 '<button type="button" class="a11y-opt" data-t="hc" aria-pressed="false">High contrast</button>'+
 '<button type="button" class="a11y-opt" data-t="ul" aria-pressed="false">Underline links</button>'+
 '<button type="button" class="a11y-opt" data-t="rf" aria-pressed="false">Easy-to-read font</button>'+
 '<button type="button" class="a11y-opt" data-t="na" aria-pressed="false">Stop animations</button>'+
 '<button type="button" class="a11y-reset">Reset all</button>';
document.body.appendChild(btn);document.body.appendChild(panel);
function open(o){panel.hidden=!o;btn.setAttribute('aria-expanded',o?'true':'false');if(o){var f=panel.querySelector('button');if(f)f.focus();}}
btn.addEventListener('click',function(){open(panel.hidden)});
panel.addEventListener('click',function(e){
  var t=e.target.closest('button');if(!t)return;
  if(t.classList.contains('a11y-x')){open(false);btn.focus();return;}
  if(t.hasAttribute('data-s')){var s=(P.size||1)+0.1*parseInt(t.getAttribute('data-s'),10);P.size=Math.min(1.5,Math.max(0.9,Math.round(s*10)/10));save();return;}
  if(t.hasAttribute('data-t')){var k=t.getAttribute('data-t');P[k]=!P[k];save();return;}
  if(t.classList.contains('a11y-reset')){P={};save();}
});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){open(false);btn.focus();}});
apply();
})();

(function(){
document.addEventListener('click',function(e){document.querySelectorAll('details.locdd[open]').forEach(function(d){if(!d.contains(e.target)||e.target.closest('.locname'))d.open=false;});});
document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('details.locdd[open]').forEach(function(d){d.open=false;var s=d.querySelector('summary');if(s)s.focus();});});
})();
