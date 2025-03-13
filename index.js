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

var headerHeight = document.querySelector('.mobile-footer').offsetHeight;

    document.querySelectorAll('.mobile-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close the mobile menu after clicking a link
                toggleMenu();
            }
        });
    });

 function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    var icon = document.getElementById("hamburgerIcon");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        icon.innerHTML = "&#9776;"; // Hamburger icon
    } else {
        menu.style.display = "block";
        icon.innerHTML = "&times;"; // X icon
    }
 }