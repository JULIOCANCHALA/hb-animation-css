const button=document.querySelector('.menu-button');
const mobileLeft=document.querySelector('.mobile__left');
const mobileRight=document.querySelector('.mobile__right');
const iconCancel=document.querySelectorAll('.icon__item');

button.addEventListener("click", function(){
    mobileLeft.classList.toggle('openMenu');
    mobileRight.classList.toggle('openMenu');
    iconCancel[0].classList.toggle('icon__exit-up');
    iconCancel[1].classList.toggle('icon__exit-middle');
    iconCancel[2].classList.toggle('icon__exit-down');
});