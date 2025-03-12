document.addEventListener('DOMContentLoaded', function() {
    const aboutHeading = document.getElementById('about-heading');
    const text = aboutHeading.textContent;
    aboutHeading.textContent = '';
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            aboutHeading.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 80); // Adjust typing speed here
        }
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(aboutHeading)) {
            aboutHeading.style.opacity = 1;
            typeEffect();
            window.removeEventListener('scroll', onScroll);
        }
    }

    window.addEventListener('scroll', onScroll);
});



    