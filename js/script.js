$(document).ready(function() {
    $('.preloader').fadeOut(300);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});