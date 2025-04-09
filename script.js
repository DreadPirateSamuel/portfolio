// Fade header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    // Fade out header when scrolling past 50px
    header.classList.toggle('fade', scrollPosition > 50);
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded!");
});
