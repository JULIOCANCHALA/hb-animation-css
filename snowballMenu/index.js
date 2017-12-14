const btnmenu = document.querySelector('.menu-button')
const navigation = document.querySelector('.mobile__navigation')
const navigationItems = document.querySelectorAll('.mobile__navigation-item')
const circleMenu = document.querySelector('.clipCircle')
const itemMenu = document.querySelectorAll('.itemMenu ')


btnmenu.addEventListener("click", function() {
    navigation.classList.toggle('openMenu');
    circleMenu.classList.toggle('clipcircle-open');
    for (var i = 0; i < itemMenu.length; i++) { itemMenu[i].classList.toggle('itemMenu-open') }
    for (var i = 0; i < navigationItems.length; i++) { navigationItems[i].classList.toggle('openMenu-item') }
});