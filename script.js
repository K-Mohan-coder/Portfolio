document.addEventListener('DOMContentLoaded', function() {
    // Particle.js configuration
    particlesJS('particles-js', {   
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, },
            opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
        },
        retina_detect: true
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

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Skill bar animation
   // JavaScript for rendering skill bars dynamically
    document.addEventListener('DOMContentLoaded', () => {
        const skillBars = document.querySelectorAll('.skill-bar');

        skillBars.forEach(skillBar => {
            const skillName = skillBar.getAttribute('data-skill');
            const percentage = skillBar.getAttribute('data-percentage');

            // Create the container and label
            const skillContainer = document.createElement('div');
            skillContainer.classList.add('relative', 'w-full', 'h-7', 'bg-gray-700', 'rounded-full', 'overflow-hidden');

            const skillLabel = document.createElement('span');
            skillLabel.textContent = `${skillName} - ${percentage}%`;
            skillLabel.classList.add('absolute', 'left-2', 'top-1/2', '-translate-y-1/2', 'text-sm', 'font-semibold', 'text-white', 'z-10');

            // Create the progress bar
            const progressBar = document.createElement('div');
            progressBar.style.width = `${percentage}%`;
            progressBar.classList.add('absolute', 'top-0', 'left-0', 'h-full', 'bg-gradient-to-r', 'from-green-400', 'to-green-600');

            // Append label and progress bar to container
            skillContainer.appendChild(skillLabel);
            skillContainer.appendChild(progressBar);

            // Add the skill bar to the DOM
            skillBar.appendChild(skillContainer);
        });
    });

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

    // Custom cursor
    // const cursor = document.getElementById('custom-cursor');
    // document.addEventListener('mousemove', (e) => {
    //     cursor.style.left = e.clientX + 'px';
    //     cursor.style.top = e.clientY + 'px';
    // });

    // Project carousel
    const carousel = document.querySelector('.project-carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

// Initialize EmailJS with your user ID
emailjs.init("ZsUORlPyZTY-i7Ig0");

// Button submission
const submitButton = document.getElementById('submit-button');
debugger
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const contactForm = document.getElementById('contact-form');
    
    // Send form data to your email using EmailJS
    emailjs.sendForm('service_n41ltbe', 'template_1sn0z3c', contactForm)
        .then((response) => {
            // Display success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();  // Reset form fields after successful submission
        })
        .catch((error) => {
            // Display error message if there's an issue
            alert('Sorry, there was an error sending your message. Please try again later.');
        });
});



    // Dynamic counter
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            if (start >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 16);
    }

    const counters = [
        { id: 'projects-completed', target: 50 },
        { id: 'hours-coded', target: 5000 },
        { id: 'technologies-mastered', target: 15 }
    ];

    const counterSection = document.createElement('section');
    counterSection.id = 'counters';
    counterSection.className = 'py-20 bg-charcoal';
    counterSection.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${counters.map(counter => `
                    <div class="text-center">
                        <h3 class="text-4xl font-bold text-gold mb-2" id="${counter.id}">0</h3>
                        <p class="text-xl text-gray-300">${counter.id.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.querySelector('#experience').insertAdjacentElement('afterend', counterSection);

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const element = document.getElementById(counter.id);
                    animateCounter(element, counter.target, 2000);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counterObserver.observe(document.getElementById('counters'));

    // 3D Rotating cube
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(200, 200);

    const cubeContainer = document.createElement('div');
    cubeContainer.className = 'fixed bottom-4 right-4 z-50';
    cubeContainer.appendChild(renderer.domElement);
    document.body.appendChild(cubeContainer);

    const geometry = new THREE.BoxGeometry();
    const materials = [
        new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.7 }),
        new THREE.MeshBasicMaterial({ color: 0xC0C0C0, transparent: true, opacity: 0.7 }),
        new THREE.MeshBasicMaterial({ color: 0x008080, transparent: true, opacity: 0.7 }),
        new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.7 }),
        new THREE.MeshBasicMaterial({ color: 0xC0C0C0, transparent: true, opacity: 0.7 }),
        new THREE.MeshBasicMaterial({ color: 0x008080, transparent: true, opacity: 0.7 })
    ];
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    // function animate() {
    //     requestAnimationFrame(animate);
    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;
    //     renderer.render(scene, camera);
    // }
    // animate();

    // Easter egg
    const easterEggTrigger = document.createElement('div');
    easterEggTrigger.className = 'fixed top-4 left-4 w-8 h-8 bg-transparent cursor-pointer z-50';
    document.body.appendChild(easterEggTrigger);

   

    // Dark/Light mode toggle
    const modeToggle = document.createElement('button');
    modeToggle.className = 'fixed top-4 right-4 bg-gold text-black px-4 py-2 rounded-full z-50';
    modeToggle.textContent = 'Toggle Light Mode';
    document.body.appendChild(modeToggle);

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            document.documentElement.style.setProperty('--bg-color', '#f0f0f0');
            document.documentElement.style.setProperty('--text-color', '#333333');
            modeToggle.textContent = 'Toggle Dark Mode';
        } else {
            document.documentElement.style.setProperty('--bg-color', '#000000');
            document.documentElement.style.setProperty('--text-color', '#ffffff');
            modeToggle.textContent = 'Toggle Light Mode';
        }
    });

    // Add these CSS variables to your styles.css
    document.documentElement.style.setProperty('--bg-color', '#000000');
    document.documentElement.style.setProperty('--text-color', '#ffffff');

    // Update your existing styles to use these variables
    document.body.style.backgroundColor = 'var(--bg-color)';
    document.body.style.color = 'var(--text-color)';

    // Mini-Mohan chatbot
    const chatbotButton = document.createElement('button');
    chatbotButton.className = 'fixed bottom-4 left-4 bg-gold text-black px-4 py-2 rounded-full z-50';
    chatbotButton.textContent = 'Chat with Mini-Mohan';
    document.body.appendChild(chatbotButton);

    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'fixed bottom-20 left-4 w-80 h-96 bg-charcoal rounded-lg shadow-lg z-50 hidden';
    chatbotContainer.innerHTML = `
        <div class="p-4 h-full flex flex-col">
            <h3 class="text-xl font-bold mb-4">Chat with Mini-Mohan</h3>
            <div id="chatbot-messages" class="flex-grow overflow-y-auto mb-4"></div>
            <input type="text" id="chatbot-input" class="w-full px-3 py-2 text-gray-300 bg-gunmetal rounded-md focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Ask Mini-Mohan...">
        </div>
    `;
    document.body.appendChild(chatbotContainer);

    chatbotButton.addEventListener('click', () => {
        chatbotContainer.classList.toggle('hidden');
    });

    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const userMessage = chatbotInput.value;
            addMessage('You', userMessage);
            chatbotInput.value = '';

            // Simple response logic
            setTimeout(() => {
                let response;
                if (userMessage.toLowerCase().includes('project')) {
                    response = "I've worked on various exciting projects! Check out the Projects section for more details.";
                } else if (userMessage.toLowerCase().includes('skill')) {
                    response = "I'm proficient in several programming languages and technologies. The Skills section provides a comprehensive overview.";
                } else if (userMessage.toLowerCase().includes('contact')) {
                    response = "You can get in touch with me through the contact form in the Contact section. I'd be happy to hear from you!";
                } else {
                    response = "That's an interesting question! Feel free to explore my portfolio to learn more about my work and experiences.";
                }
                addMessage('Mini-Mohan', response);
            }, 1000);
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'mb-2';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // SEO optimization
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = "Mohan K - Software Developer Portfolio. Explore my projects, skills, and experience in web development, AI, and more.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = "Mohan K, Software Developer, Web Development, AI, Machine Learning, Portfolio";
    document.head.appendChild(metaKeywords);

    // Google Analytics (replace UA-XXXXXXXX-X with your actual tracking ID)
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXX-X';
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-XXXXXXXX-X');
});

