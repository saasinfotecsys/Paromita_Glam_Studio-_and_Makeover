// main.js - Custom interactivity for Paromita Glam Studio Premium

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize AOS Animations
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // 2. Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };
    navbarShrink();
    document.addEventListener('scroll', navbarShrink);

    // 3. Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
            
            // Collapse mobile nav
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            if (window.getComputedStyle(navbarToggler).display !== 'none' && this.classList.contains('nav-link')) {
                navbarToggler.click();
            }
        });
    });

    // 4. Typewriter Effect for Hero Section
    const typeWriterElement = document.getElementById('typewriter');
    if (typeWriterElement) {
        const words = ['Bridal Makeup', 'Party Looks', 'Hair Styling', 'Eye Makeup', 'Skin Glow'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = 100;
            if (isDeleting) typeSpeed /= 2;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before new word
            }
            setTimeout(type, typeSpeed);
        }
        setTimeout(type, 1000);
    }

    // 5. Counter Animation
    const counters = document.querySelectorAll('.counter-value');
    const speed = 200; // The lower the slower

    const animateCounters = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-count');
                
                const updateCount = () => {
                    const count = +counter.innerText;
                    const inc = target / speed;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter); // Animate only once
            }
        });
    };

    const counterObserver = new IntersectionObserver(animateCounters, { threshold: 0.5 });
    counters.forEach(counter => counterObserver.observe(counter));

    // 6. Appointment Form & WhatsApp Integration
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (!bookingForm.checkValidity()) {
                bookingForm.classList.add('was-validated');
                return;
            }

            // Get form values
            const name = document.getElementById('bName').value.trim();
            const phone = document.getElementById('bPhone').value.trim();
            const email = document.getElementById('bEmail').value.trim();
            const service = document.getElementById('bService').value;
            const date = document.getElementById('bDate').value;
            const time = document.getElementById('bTime').value;
            const note = document.getElementById('bNote').value.trim();

            // Construct WhatsApp Message
            let message = `*New Booking Request!*\n\n`;
            message += `*Name:* ${name}\n`;
            message += `*Phone:* ${phone}\n`;
            if (email) message += `*Email:* ${email}\n`;
            message += `*Service:* ${service}\n`;
            message += `*Date:* ${date}\n`;
            message += `*Time Slot:* ${time}\n`;
            if (note) message += `*Note:* ${note}\n`;
            
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/919051060457?text=${encodedMessage}`;

            // Show success alert
            document.getElementById('bookingSuccess').classList.remove('d-none');
            bookingForm.reset();
            bookingForm.classList.remove('was-validated');

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');
        }, false);
    }
});

// Lightbox Functions (Global scope)
function openLightbox(imgSrc) {
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    if (lightbox && lightboxImg) {
        lightbox.style.display = "block";
        lightboxImg.src = imgSrc;
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("galleryLightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}
