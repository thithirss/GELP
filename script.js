document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    let slideIndex = 0;
    const slides = slider.querySelectorAll("img");
    const slideCount = slides.length;

    function nextSlide() {
        if (slideIndex === slideCount - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        updateSlider();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});
