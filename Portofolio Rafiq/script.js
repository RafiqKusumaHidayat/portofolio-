/* ============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded!');
    
    // Initialize all features
    initSplashScreen();
    initNavigation();
    initHamburgerMenu();
    initPortfolioTabs();
    initSmoothScroll();
    initScrollSpyNavigation();
});

/* ============================================
   SPLASH SCREEN
   ============================================ */

function initSplashScreen() {
    const splashScreen = document.getElementById('splashScreen');
    
    // Hide splash screen after 5 seconds
    setTimeout(function() {
        splashScreen.style.display = 'none';
    }, 5000);
    
    // Optional: Log splash screen event
    console.log('Splash screen initialized - will disappear after 5 seconds');
}

/* ============================================
   HAMBURGER MENU
   ============================================ */

function initHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // Toggle mobile menu when hamburger is clicked
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all mobile links
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close hamburger menu
            hamburgerMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            
            // Get target section
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                // Smooth scroll to section
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    console.log('Hamburger menu initialized');
}

/* ============================================
   NAVIGATION
   ============================================ */

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetSection = this.getAttribute('data-section');
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                // Smooth scroll to section
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* ============================================
   SCROLL SPY NAVIGATION
   ============================================ */

function initScrollSpyNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
        
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

/* ============================================
   PORTFOLIO TABS
   ============================================ */

function initPortfolioTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const activeTab = document.getElementById(tabName);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });
    
    console.log('Portfolio tabs initialized');
}

/* ============================================
   SMOOTH SCROLL FUNCTION
   ============================================ */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

/* ============================================
   BUTTON INTERACTIONS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to buttons
    const allButtons = document.querySelectorAll('.btn, .social-btn, .card-image');
    
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

/* ============================================
   ANIMATION ON SCROLL
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and content elements
document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.portfolio-card, .skill-badge, .contact-item');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

/* ============================================
   SOCIAL LINKS - EXTERNAL LINKS
   ============================================ */

// Social links are already set up in HTML with target="_blank"
// No additional JavaScript needed, but we can add logging

document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-btn');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.getAttribute('title');
            console.log(`Navigating to ${platform}`);
        });
    });
});

/* ============================================
   PREVENT PAGE SCROLL ON MOBILE NAVIGATION
   ============================================ */

function preventScroll(e) {
    e.preventDefault();
}

const navBar = document.querySelector('.navbar');
if (navBar) {
    navBar.addEventListener('wheel', preventScroll, { passive: false });
}

/* ============================================
   KEYBOARD NAVIGATION
   ============================================ */

document.addEventListener('keydown', function(event) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (event.key === 'ArrowRight') {
        const activeLink = document.querySelector('.nav-link.active');
        const activeIndex = Array.from(navLinks).indexOf(activeLink);
        
        if (activeIndex < navLinks.length - 1) {
            navLinks[activeIndex + 1].click();
        }
    } else if (event.key === 'ArrowLeft') {
        const activeLink = document.querySelector('.nav-link.active');
        const activeIndex = Array.from(navLinks).indexOf(activeLink);
        
        if (activeIndex > 0) {
            navLinks[activeIndex - 1].click();
        }
    }
});

/* ============================================
   DYNAMIC YEAR IN FOOTER
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = `© ${year} Rafiq Kusuma Hidayat. All rights reserved.`;
    }
});

/* ============================================
   CAROUSEL FUNCTIONALITY
   ============================================ */

function changeSlide(button, direction) {
    const container = button.parentElement;
    const carousel = container.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    
    items.forEach((item, index) => {
        if (item.classList.contains('active')) {
            currentIndex = index;
        }
    });
    
    let newIndex = currentIndex + direction;
    if (newIndex >= items.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = items.length - 1;
    }
    
    showSlide(container, newIndex);
}

function goToSlide(carouselContainer, index) {
    showSlide(carouselContainer, index);
}

function showSlide(container, index) {
    const carousel = container.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = container.querySelectorAll('.dot');
    
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (items[index]) {
        items[index].classList.add('active');
    }
    
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

/* ============================================
   CONSOLE MESSAGES
   ============================================ */

console.log('%c Welcome to Rafiq Kusuma Hidayat Portfolio ', 
    'background: #9d4edd; color: #00b4d8; font-size: 16px; font-weight: bold; padding: 10px;');





console.log('%c Thank you for visiting! ', 
    'background: #00b4d8; color: #9d4edd; font-size: 14px; padding: 5px;');
console.log('Check out the code and reach out via email or social media!');

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

// Lazy load images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        observer.observe(img);
    });
}

// Add passive event listeners for better performance
window.addEventListener('scroll', initScrollSpyNavigation, { passive: true });
window.addEventListener('resize', debounce(function() {
    console.log('Window resized');
}, 250), { passive: true });

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ============================================
   ADDITIONAL INTERACTIVITY
   ============================================ */

// Add ripple effect on click for buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || e.target.classList.contains('social-btn')) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        e.target.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('All features initialized successfully!');
