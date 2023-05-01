//show menu-burger in mobile view
const menuburger = document.getElementById('menuburger');
const menu = document.querySelector('.menu-main-mobile');
const menuBg = document.querySelector('.menu-bg');


menuburger.addEventListener("click", showMenu);
function showMenu() {
    if (menu.classList.contains('menu-main-mobile-visible')) {
        menu.classList.remove('menu-main-mobile-visible');
        menuBg.classList.remove('menu-bg-visible');
    } else {
        menu.classList.add('menu-main-mobile-visible');
        menuBg.classList.add('menu-bg-visible');
    }
}

menu.addEventListener('click', hideMenu);
function hideMenu() {
    menu.classList.remove('menu-main-mobile-visible');
    menuBg.classList.remove('menu-bg-visible');
}

//hover effect
const gridItems = document.querySelectorAll('.grid-icon-item');
const stagesHover = document.querySelectorAll('.stages-hover');

gridItems.forEach((el, i) => {
    let item = el.querySelector('.stages-hover');
       
    el.addEventListener('mouseover', function(){
        item.classList.add('stages-hover-visible');
    });
    el.addEventListener('mouseleave', function(){
        item.classList.remove('stages-hover-visible');
    });
    el.addEventListener('touchstart', function(){
        item.classList.add('stages-hover-visible');
    });
    el.addEventListener('touchend', function(){
        item.classList.remove('stages-hover-visible');
    });
});
