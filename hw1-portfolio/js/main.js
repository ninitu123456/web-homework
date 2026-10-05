const menuButton = document.querySelector('#menu-button');
const mainNav = document.querySelector('#main-nav');

function closeMenu() {
    mainNav.hidden = true;

    menuButton.setAttribute(
        'aria-expanded',
        'false'
    );
}

function openMenu() {
    mainNav.hidden = false;

    menuButton.setAttribute(
        'aria-expanded',
        'true'
    );
}

menuButton.addEventListener('click', () => {

    const isOpen =
        menuButton.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

});

document.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

        closeMenu();

        menuButton.focus();
    }

});