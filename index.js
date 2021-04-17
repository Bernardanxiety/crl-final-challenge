const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener('click', function() {
    document.querySelector(".nav__list--primary").classList.toggle("visible");
    document.querySelector(".nav__list--secondary").classList.toggle("visible");
});