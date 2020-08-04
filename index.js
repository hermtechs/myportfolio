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

//closing menu after clicking on llinks
const navLinks = document.querySelectorAll('.nav__item');
navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        navMenu.style.transform = 'translateX(100%)';
    })
})
//changing logo styles onscroll
window.onscroll = function(){ scrollFunc(); }
function scrollFunc(){
    const logo = document.querySelector('.logo-txt');
    if (document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        logo.innerText = '<devherbert>'
        logo.style.fontSize = '1.2rem';
    }
    else {
        logo.innerText = '<devherbert/>';
        logo.style.fontSize = '1.4rem';
    }
    
}
