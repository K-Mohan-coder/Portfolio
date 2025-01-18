document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.setProperty('--skill-level', `${level}%`);
        });
    };

    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelector('#skills').querySelectorAll('.skill-bar').forEach(bar => {
        observer.observe(bar);
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Scroll-based animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= windowHeight * 0.75) {
                el.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Dynamic copyright year
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${currentYear} Mohan K. All rights reserved.`;
});
