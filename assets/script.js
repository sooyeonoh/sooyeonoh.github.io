let panel = document.querySelector('#sliding-panel');
let navLinks = document.querySelector('.nav-links');
let navBarToggle = document.querySelector('#nav-toggle');
let section = document.querySelector('.wrapper');
let link = document.querySelectorAll('header a');

navBarToggle.addEventListener('click', event => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        slidePanelDown();
    }
    else {
        slidePanelUp();
    }
});

section.addEventListener('click', event => {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.toggle('active');
        slidePanelUp();
    }
});

link.forEach(item => {
    item.addEventListener('click', event => {
        navLinks.classList.toggle('active');
        slidePanelUp();
    })
});

function slidePanelDown() {
    panel.style.top = '0';
}

function slidePanelUp() {
    panel.style.top = '-170px';
}