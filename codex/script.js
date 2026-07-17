
const $=s=>document.querySelector(s);
const drawer=$('#drawer');
$('#menuBtn').addEventListener('click',()=>drawer.classList.toggle('open'));
drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));
$('#topBtn').addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
$('#themeBtn').addEventListener('click',()=>document.body.classList.toggle('dark'));
const root=document.documentElement;
let fontSize=parseInt(localStorage.getItem('codexFont')||'20',10);
const applyFont=()=>root.style.setProperty('--base',fontSize+'px');
applyFont();
$('#fontPlus').onclick=()=>{fontSize=Math.min(25,fontSize+1);localStorage.setItem('codexFont',fontSize);applyFont()};
$('#fontMinus').onclick=()=>{fontSize=Math.max(16,fontSize-1);localStorage.setItem('codexFont',fontSize);applyFont()};
const progress=$('#progress'),resume=$('#resume');
let saved=Number(localStorage.getItem('codexScroll')||0);
if(saved>900){resume.style.display='block';resume.onclick=()=>scrollTo({top:saved,behavior:'smooth'})}
addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(h>0?scrollY/h*100:0)+'%';
  if(scrollY>400)localStorage.setItem('codexScroll',String(scrollY));
},{passive:true});

const sectionIndicator=document.getElementById('section-indicator');
const anchors=[...document.querySelectorAll('.book-opening,.constitutional-open')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const h=entry.querySelector('h2');
      if(h) sectionIndicator.textContent=' · '+h.textContent.trim();
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
anchors.forEach(a=>observer.observe(a));


// Edition 1.0A · Preview Build 1
const architecturalMoments=[...document.querySelectorAll('[data-moment]')];
const activeMomentObserver=new IntersectionObserver(entries=>{
  const visible=entries.find(e=>e.isIntersecting);
  if(!visible) return;
  const el=visible.target;
  document.body.dataset.moment=el.dataset.moment || '';
},{rootMargin:'-38% 0px -58% 0px',threshold:0});
architecturalMoments.forEach(el=>activeMomentObserver.observe(el));
