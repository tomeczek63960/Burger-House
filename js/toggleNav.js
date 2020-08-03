(function(){

const bars = document.querySelector('.bars');
const navbar = document.querySelector('.page-nav__navbar');
const navbarLinks = document.querySelectorAll('.page-nav__navbar__link');
const body = document.querySelector('body');

const navbarActiveClass = 'page-nav__navbar--active'; 
const barsActiveClass = 'bars--active';
const bodyActiveNavClass = 'body--nav-active';

navbarLinks.forEach(link => {
    link.addEventListener('click',()=>{
        navbar.classList.remove(navbarActiveClass);
        bars.classList.remove(barsActiveClass)
        body.classList.remove(bodyActiveNavClass);
    });
});

bars.addEventListener('click',(e)=>{
    window.scrollTo({top: 0,left: 0,behavior: 'smooth'});
    e.target.classList.toggle(barsActiveClass);         
    navbar.classList.toggle(navbarActiveClass);
    body.classList.toggle(bodyActiveNavClass);
});

}());
