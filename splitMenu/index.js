const btnmenu = document.querySelector('.menu-button')
const navigation = document.querySelector('.mobile__navigation')
const navigationItems = document.querySelectorAll('.mobile__navigation-item')


btnmenu.addEventListener("click", function() {
    navigation.classList.toggle('openMenu');
    for (var i = 0; i < navigationItems.length; i++) { navigationItems[i].classList.toggle('openMenu-item') }
});