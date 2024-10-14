document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');
    const popups = document.querySelectorAll('.pop-up');

    // Observer options: You can adjust rootMargin or threshold for fine-tuning
    const appearOptions = {
        threshold: 0.2,  // 20% of the element should be visible before it triggers
        rootMargin: "0px 0px -50px 0px"
    };

    // Observer function: adds the 'appear' class when an element comes into view
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;  // If element is not intersecting, do nothing
            } else {
                entry.target.classList.add('appear');  // Add 'appear' class
                observer.unobserve(entry.target);  // Stop observing once the element has appeared
            }
        });
    }, appearOptions);

    // Observe elements with different animations
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });

    popups.forEach(popup => {
        appearOnScroll.observe(popup);
    });
});

// Select the navbar element
const navbar = document.querySelector('.navbar');

// Function to add or remove the transparent class based on scroll position
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.remove('transparent-navbar');
    } else {
        navbar.classList.add('transparent-navbar');
    }
});

