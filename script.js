const nav=document.getElementById('nav');
document.getElementById('menuBtn').onclick=()=>nav.classList.toggle('open');
nav.onclick=()=>nav.classList.remove('open');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.style.width=e.target.dataset.w+'%'}));
document.querySelectorAll('.skills i').forEach(i=>io.observe(i));
document.getElementById('form').onsubmit=e=>{
 e.preventDefault();
 const f=[['name',v=>v.trim().length>=2,'Enter your name'],['email',v=>/^\S+@\S+\.\S+$/.test(v),'Enter a valid email'],['msg',v=>v.trim().length>=10,'Message must be 10+ characters']];
 let ok=true;
 f.forEach(([id,test,err])=>{const el=document.getElementById(id);const good=test(el.value);el.nextElementSibling.textContent=good?'':err;if(!good)ok=false});
 document.getElementById('ok').textContent=ok?'Thanks! Message sent (connect a backend/Formspree to receive it).':'';
 if(ok)e.target.reset();
};
