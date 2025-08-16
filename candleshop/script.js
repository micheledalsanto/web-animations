// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const candleContainer = document.getElementById('candleContainer');
const candle = document.getElementById('candle');
const lightText = document.getElementById('lightText');
const radialOverlay = document.getElementById('radialOverlay');
const mainContent = document.getElementById('mainContent');

// State
let isLit = false;
let animationInProgress = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Ensure body is ready for animations
    document.body.style.overflow = 'hidden';
    
    // Add click event to candle
    candleContainer.addEventListener('click', lightCandle);
    
    // Add smooth scroll behavior for navigation
    initSmoothScroll();
});

// Main animation function
function lightCandle() {
    if (isLit || animationInProgress) return;
    
    animationInProgress = true;
    isLit = true;
    
    // Remove hover effect
    candleContainer.style.cursor = 'default';
    
    // Start lighting animation
    candle.classList.add('lighting');
    
    // Fade out the "Light me up" text
    lightText.style.opacity = '0';
    
    // After flame appears, start the reveal sequence
    setTimeout(() => {
        startRevealSequence();
    }, 800); // Match the ignite animation duration
}

function startRevealSequence() {
    // Start candela fade-out e overlay revealing insieme - si fondono
    candleContainer.classList.add('fade-out');
    radialOverlay.classList.add('revealing');
    
    // Aspetta 2s (durata del fade-out) prima di mostrare contenuto e nascondere loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto'; // Enable scrolling
        animationInProgress = false;
        
        // Remove loading screen from DOM after animation
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.parentNode.removeChild(loadingScreen);
            }
        }, 800);
    }, 2000);
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll-based animations for product cards
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });
}

// Initialize scroll animations after content is revealed
setTimeout(() => {
    if (isLit) {
        initScrollAnimations();
    }
}, 3000);

// Performance optimizations
function optimizeAnimations() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }
    
    // Disable animations on mobile if performance is poor
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('low-performance');
    }
}

// Call optimization function
optimizeAnimations();

// Add keyboard accessibility
document.addEventListener('keydown', function(e) {
    if ((e.key === 'Enter' || e.key === ' ') && !isLit && !animationInProgress) {
        if (document.activeElement === candleContainer || 
            candleContainer.contains(document.activeElement)) {
            e.preventDefault();
            lightCandle();
        }
    }
});

// Make candle focusable for accessibility
candleContainer.setAttribute('tabindex', '0');
candleContainer.setAttribute('role', 'button');
candleContainer.setAttribute('aria-label', 'Clicca per accendere la candela e rivelare il sito');

// Focus styles are now handled in CSS

// Preload critical resources
function preloadResources() {
    // This function can be used to preload images or other resources
    // if needed for better performance
    
    // Example: preload product images
    const imageUrls = [
        // Add actual image URLs here when you have them
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Error handling
window.addEventListener('error', function(e) {
    console.warn('Animation error:', e.error);
    // Fallback: show content immediately if there's an error
    if (!isLit) {
        setTimeout(() => {
            mainContent.classList.add('visible');
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 100);
    }
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        lightCandle,
        startRevealSequence,
        initSmoothScroll,
        initScrollAnimations
    };
}