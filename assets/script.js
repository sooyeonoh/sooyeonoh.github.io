let panel = document.querySelector('#sliding-panel');
let navLinks = document.querySelector('.nav-links');
let navBarToggle = document.querySelector('#nav-toggle');

navBarToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        slidePanelDown();
    }
    else {
        slidePanelUp();
    }
});

let section = document.querySelectorAll('.section');

section.addEventListener('click', function () {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.toggle('active');
        slidePanelUp();
    }
});

function slidePanelDown() {
    panel.style.top = '0';
}

function slidePanelUp() {
    panel.style.top = '-170px';
}