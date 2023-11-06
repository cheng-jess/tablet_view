// Initialize slideIndex to 1
let slideIndex = 1;

// Next/previous controls
function plusSlides(n, slideshowId) {
    showSlides((slideIndex += n), slideshowId);
}

// Thumbnail image controls
function currentSlide(n, slideshowId) {
    showSlides((slideIndex = n), slideshowId);
}

function showSlides(n, slideshowId) {
    let slides = document.getElementById(slideshowId);
    slides = slides.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1; // Wrap around to the first slide
    }
    if (n < 1) {
        slideIndex = slides.length; // Go to the last slide
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function startSlideshow() {
    showSlides(slideIndex, "slideshow7");
    showSlides(slideIndex, "slideshow8");
    showSlides(slideIndex, "slideshow9");
}

// Start the slideshow when the page loads
window.onload = startSlideshow();
