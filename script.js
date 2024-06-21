// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // Burger Animation
    burger.classList.toggle('toggle');
});
