const splash=document.querySelector('#splash'),app=document.querySelector('#app'),mini=document.querySelector('#miniPlayer');
function enter(){splash.classList.add('hide');setTimeout(()=>splash.remove(),800)}
document.querySelector('#skip').onclick=enter;setTimeout(enter,3400);
function show(id){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.querySelector('#'+id).classList.add('active');document.querySelectorAll('.tabbar button').forEach(x=>x.classList.toggle('active',x.dataset.tab===id));mini.classList.toggle('show',id==='home'||id==='discover');}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>show(b.dataset.tab));
document.querySelectorAll('[data-action="player"]').forEach(b=>b.onclick=()=>show('player'));
document.querySelectorAll('[data-action="pair"]').forEach(b=>b.onclick=()=>show('pair'));
document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>show('profile'));
document.querySelector('#openName').onclick=()=>show('name');
document.querySelector('#saveName').onclick=()=>{const name=document.querySelector('#nameInput').value.trim();if(name)document.querySelector('#profileName').childNodes[0].nodeValue=name+' ';show('profile')};
for(const id of ['bigPause','miniPause'])document.querySelector('#'+id).onclick=()=>{const b=document.querySelector('#'+id);b.textContent=b.textContent==='Ⅱ'?'▶':'Ⅱ'};