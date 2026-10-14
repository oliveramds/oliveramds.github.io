document.addEventListener('DOMContentLoaded',()=> {
    const btn=document.querySelector('.menu'),nav=document.querySelector('nav');
    if(btn&&nav)btn.addEventListener('click',()=> {
        const open=nav.classList.toggle('open');
        btn.setAttribute('aria-expanded',String(open));
        btn.textContent=open?'Close −':'Menu ＋'
    }
    );
    document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
    const items=document.querySelectorAll('.reveal');
    if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const io=new IntersectionObserver(entries=>entries.forEach(e=> {
            if(e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target)
            }
        }
        ),{
            threshold:.12
        }
        );
        items.forEach(e=>io.observe(e))
    }
    else items.forEach(e=>e.classList.add('visible'))
}
);
