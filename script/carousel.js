document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const dotsContainer = document.getElementById('carousel-dots');
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + offset + ')';
    }

    function createDot(index) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            updateDots();
        });
        dotsContainer.appendChild(dot);
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Create dots for each slide
    for (let i = 0; i < carousel.children.length; i++) {
        createDot(i);
    }

    // Show the initial slide
    showSlide(currentIndex);
    updateDots();

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
        updateDots();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showSlide(currentIndex);
        updateDots();
    }

    // Auto-advance to the next slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Uncomment the following lines if you want to enable manual navigation with buttons
    // const nextButton = document.getElementById('next');
    // const prevButton = document.getElementById('prev');
    // nextButton.addEventListener('click', nextSlide);
    // prevButton.addEventListener('click', prevSlide);
});