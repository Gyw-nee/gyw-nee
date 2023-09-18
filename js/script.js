//toggle active

const navbarNav = document.querySelector('.navbar-nav');

//menu klik = 
document.querySelector('#garis-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik luar menu

const garisMenu = document.querySelector('#garis-menu');

document.addEventListener('click', function(e){
    if(!garisMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

//slideshow
let slideIndex = 1;
showSlides(slideIndex);

//next previous ctrl
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

//porto sorting
