//lang choise
const lang = document.querySelectorAll('.lang button.lang-choise');
const langMark = document.querySelectorAll('.lang-mark');

lang.forEach(i => {
    i.addEventListener('click', function () {
        let arr = Array.from(langMark);
        if (arr.some(j=>j.classList.contains('visible'))) {
            langMark.forEach(x => x.classList.remove('visible'));
        } else langMark.forEach(x => x.classList.add('visible'));
    });
});


//show menu-burger in mobile view
const menuburger = document.getElementById('menuburger');
const menu = document.querySelector('.menu-main-mobile');


menuburger.addEventListener("click", showMenu);
function showMenu() {
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}

menu.addEventListener('click', hideMenu);
function hideMenu() {
    menu.classList.remove('visible');
}

//hover effect
const gridItems = document.querySelectorAll('.grid-icon-item');
const stagesHover = document.querySelectorAll('.stages-hover');

gridItems.forEach((el) => {
    let item = el.querySelector('.stages-hover');

    el.addEventListener('mouseover', function () {
        item.classList.add('visible');
    });
    el.addEventListener('mouseleave', function () {
        item.classList.remove('visible');
    });
    el.addEventListener('touchstart', function () {
        item.classList.add('visible');
    });
    el.addEventListener('touchend', function () {
        item.classList.remove('visible');
    });
});


