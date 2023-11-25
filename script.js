// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slideshow = document.querySelector(".slideshow");
    const dotsContainer = document.querySelector(".dots-container");
    const slides = document.querySelectorAll(".slideshow img");
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Create dots based on the number of slides
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);

        // Add click event to each dot for manual navigation
        dot.addEventListener("click", function () {
            showSlide(i);
        });
    }

    // Initial setup
    showSlide(currentSlide);
    startSlideshow();

    function showSlide(index) {
        // Update current slide
        currentSlide = index;

        // Update slideshow and dots
        slideshow.style.opacity = 0;
        setTimeout(() => {
            slideshow.innerHTML = "";
            slideshow.appendChild(slides[index].cloneNode(true));
            slideshow.style.opacity = 1;
            updateDots();
        }, 1000);
    }

    function updateDots() {
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function startSlideshow() {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }, 5000); // Change image every 5 seconds
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the header title element
    const headerTitle = document.getElementById("header-title");

    // Add click event listener to the header title
    headerTitle.addEventListener("click", function () {
        // Scroll to the top of the page smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the button and about us section elements
    const aboutBtn = document.getElementById("aroj-own-btn");
    const aboutSection = document.querySelector(".aroj-own-container");

    // Add click event listener to the button
    aboutBtn.addEventListener("click", function () {
        // Scroll to the about us section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the button and about us section elements
    const aboutBtn = document.getElementById("others-btn");
    const aboutSection = document.querySelector(".others-container");

    // Add click event listener to the button
    aboutBtn.addEventListener("click", function () {
        // Scroll to the about us section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the button and about us section elements
    const aboutBtn = document.getElementById("about-btn");
    const aboutSection = document.querySelector(".about-us-container");

    // Add click event listener to the button
    aboutBtn.addEventListener("click", function () {
        // Scroll to the about us section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the button and about us section elements
    const aboutBtn = document.getElementById("policy-btn");
    const aboutSection = document.querySelector(".policy-container");

    // Add click event listener to the button
    aboutBtn.addEventListener("click", function () {
        // Scroll to the about us section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the button and about us section elements
    const aboutBtn = document.getElementById("contact-btn");
    const aboutSection = document.querySelector(".contact-container");

    // Add click event listener to the button
    aboutBtn.addEventListener("click", function () {
        // Scroll to the about us section smoothly
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});
