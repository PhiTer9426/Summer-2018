// previous controls
function minusSlides() {
    var slides = new Array;
    slides[0] = document.getElementById("J_slides_1");
    slides[1] = document.getElementById("J_slides_2");
    slides[2] = document.getElementById("J_slides_3");
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("hide") == false) {
            showSlides((i+2)%slides.length);
            break;
        }
    }
}
// Next controls
function plusSlides() {
    var slides = new Array;
    slides[0] = document.getElementById("J_slides_1");
    slides[1] = document.getElementById("J_slides_2");
    slides[2] = document.getElementById("J_slides_3");
    for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("hide") == false) {
            showSlides((i+4)%slides.length);
            break;
        }
    }
}
// Thumbnail image controls
function showSlides(n) {
    var i;
    var slides = new Array;
    slides[0] = document.getElementById("J_slides_1");
    slides[1] = document.getElementById("J_slides_2");
    slides[2] = document.getElementById("J_slides_3");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < 3; i++) {
        slides[i].classList.remove("hide");
        slides[i].classList.add("hide");
    }
    for (i = 0; i < 3; i++) {
        dots[i].classList.remove("active");
    }
    slides[n].classList.remove("hide");
    dots[n].classList.add("active");
}