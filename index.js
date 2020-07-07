//opening and closing navigation menu after clicking on the hamburger menu
const navBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav');
navBtn.addEventListener('click',()=>{ 
    if(navMenu.style.transform === 'translateX(100%)'){
      navMenu.style.transform = 'translateX(0%)'; 
    }
    else{
        navMenu.style.transform = 'translateX(100%)';
    }
})

//closing menu after clickking on llinks
const navLinks = document.querySelectorAll('.nav__item');
navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        navMenu.style.transform = 'translateX(100%)';
    })
})