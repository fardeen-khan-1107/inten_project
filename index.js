let slider = document.querySelectorAll('.slide'); 
let count = 0;
let isAnimating = false; // Flag to check if animation is in progress

// Set initial positions for slides
slider.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

function next() {
    if (!isAnimating) {
        isAnimating = true; // Prevent further clicks until animation completes
        count++;
        if (count === slider.length) {
            count = 0;
        }
        trans();
    }
}

function prev() {
    if (!isAnimating) {
        isAnimating = true; 
        count--;
        if (count === -1) {
            count = slider.length - 1;
        }
        trans();
    }
}

function trans() {
    slider.forEach(function (slide) {
        slide.style.transform = `translateX(-${count * 100}%)`;
    });
    setTimeout(() => {
        isAnimating = false; 
    }, 500); 
}