let list = document.querySelector('.advantages__list');
let elements = list.querySelectorAll('.advantages__item');
let menuButton = document.querySelector('.header__toggle');
let menu = document.querySelector('.nav__list');

window.addEventListener('scroll', scrolling, false);

function scrolling(el) {
    if (isPartiallyVisible(list)) {
        elements.forEach(function(el) {

            el.classList.add('animated');

        });

    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

menuButton.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    event.preventDefault();
    menu.classList.toggle('nav__list_opened');
}