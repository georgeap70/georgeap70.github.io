document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! This is a demo alert - implement your own form handling logic.');
            contactForm.reset();
        });
    }

    // Add particle effect
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#4dabf7';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        
        // Random starting position
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        
        document.querySelector('.particles').appendChild(particle);
        
        // Animate particle
        const animation = particle.animate([
            { transform: 'translate(0, 0)', opacity: 0 },
            { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0.8 },
            { transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`, opacity: 0 }
        ], {
            duration: 5000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => particle.remove();
    }

    // Create particles periodically
    setInterval(createParticle, 200);

    // Add typing effect to hero text
    const heroText = document.querySelector('.hero-content h1');
    const originalText = heroText.textContent;
    const originalHTML = heroText.innerHTML;
    heroText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            if (originalText[i] === 'G') {
                heroText.innerHTML = `Hello, I'm <span class="highlight">`;
            }
            if (i >= originalText.indexOf('George')) {
                heroText.querySelector('.highlight').textContent += originalText[i];
            } else {
                heroText.insertBefore(document.createTextNode(originalText[i]), heroText.querySelector('.highlight') || null);
            }
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Add hover sound effect
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
    document.querySelectorAll('.project-card, .skills li, .social-links a').forEach(element => {
        element.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.volume = 0.2;
            hoverSound.play();
        });
    });

    // Add confetti effect on button click
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        for(let i = 0; i < 30; i++) {
            createParticle();
        }
    });

    // Make skills interactive
    document.querySelectorAll('.skills li').forEach(skill => {
        skill.addEventListener('click', () => {
            skill.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                skill.style.transform = 'scale(1) rotate(0deg)';
            }, 1000);
        });
    });
}); 