let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function cloneSlides() {
    const firstSlide = slides.children[0].cloneNode(true);
    const lastSlide = slides.children[totalSlides - 1].cloneNode(true);
    slides.appendChild(firstSlide);
    slides.insertBefore(lastSlide, slides.children[0]);
}

function updateSlidePosition() {
    const offset = -(currentSlide + 1) * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function showSlide(index) {
    currentSlide = index;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
        slides.style.transition = 'none';
        updateSlidePosition();
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            currentSlide++;
            updateSlidePosition();
        }, 50);
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
        slides.style.transition = 'none';
        updateSlidePosition();
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            currentSlide--;
            updateSlidePosition();
        }, 50);
    } else {
        updateSlidePosition();
    }
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    cloneSlides();
    showSlide(currentSlide);
});


$(document).ready(function () {
    $('.project-section .row').slick({
        slidesToShow: 3,  // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
        autoplay: true,    // Enable autoplay
        autoplaySpeed: 5000, // Autoplay speed in milliseconds
        dots: true,        // Show navigation dots
        arrows: true,      // Show navigation arrows
        infinite: true,    // Infinite scrolling
        responsive: [
            {
                breakpoint: 1024, // Adjust as needed
                settings: {
                    slidesToShow: 2, // Number of slides to show at 1024px
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600, // Adjust as needed
                settings: {
                    slidesToShow: 1, // Number of slides to show at 600px
                    slidesToScroll: 1
                }
            }
        ]
    });
});
