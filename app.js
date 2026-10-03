const splash = document.querySelector('#splash');
const enter = document.querySelector('#enterBtn');
const app = document.querySelector('#app');
function openApp(){ splash.classList.add('out'); app.classList.add('ready'); setTimeout(()=>splash.remove(),800); }
enter.addEventListener('click', openApp);
setTimeout(openApp, 3800);
document.querySelectorAll('.nav').forEach(btn => btn.addEventListener('click', () => {
 document.querySelector('.nav.active').classList.remove('active'); btn.classList.add('active');
 document.querySelector('.view.active').classList.remove('active'); document.querySelector('#'+btn.dataset.view).classList.add('active');
}));
const play = document.querySelector('#playBtn'), pause = document.querySelector('#pauseBtn');
function toggle(){ document.body.classList.toggle('is-playing'); const on=document.body.classList.contains('is-playing'); play.innerHTML=`<span>${on?'Ⅱ':'▶'}</span> ${on?'PAUSE TOGETHER':'PLAY TOGETHER'}`; pause.textContent=on?'Ⅱ':'▶'; }
play.addEventListener('click',toggle); pause.addEventListener('click',toggle);
document.querySelectorAll('[contenteditable]').forEach(e=>e.addEventListener('keydown', ev=>{if(ev.key==='Enter'){ev.preventDefault();e.blur()}}));