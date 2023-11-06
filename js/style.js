document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector(".arrow");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Toggle the dropdown menu when the arrow is clicked
    arrow.addEventListener("click", function (event) {
    event.preventDefault();
    toggleDropdown();
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
    const target = event.target;
        if (!dropdownContent.contains(target) && target !== arrow) {
            dropdownContent.style.display = "none";
        }
    });

  // Close the dropdown when selecting an item within it
    dropdownContent.addEventListener("click", function () {
        dropdownContent.style.display = "none";
    });

function toggleDropdown() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}


});

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
    showSlides(slideIndex, "slideshow1");
    showSlides(slideIndex, "slideshow2");
    showSlides(slideIndex, "slideshow3");
    showSlides(slideIndex, "slideshow4");
    showSlides(slideIndex, "slideshow5");
    showSlides(slideIndex, "slideshow6");
    showSlides(slideIndex, "slideshow7");
    showSlides(slideIndex, "slideshow8");
    showSlides(slideIndex, "slideshow9");
}

// Start the slideshow when the page loads
window.onload = startSlideshow();


