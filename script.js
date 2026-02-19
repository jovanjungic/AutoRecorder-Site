// AutoRecord Demo Site - Interactive Scripts

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .btn-primary, .btn-secondary');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 64; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step-card, .demo-card, .tech-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Button scroll functionality (buttons are now links)
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-cta');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 64; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Demo placeholder click handlers (for future image upload)
    const demoPlaceholders = document.querySelectorAll('.demo-placeholder');
    demoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // This can be enhanced later for actual image upload functionality
            console.log('Placeholder clicked - ready for image upload');
        });
    });
});

// Add navbar scroll styles dynamically
const style = document.createElement('style');
style.textContent = `
    nav.scrolled {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
`;
document.head.appendChild(style);
