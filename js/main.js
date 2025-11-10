// ===========================
// Mobile Menu Toggle
// ===========================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Hamburger animation
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translateY(8px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
}

// ===========================
// Scroll Animations (AOS)
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            // Unobserve after animation to prevent re-triggering
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ===========================
// Navbar Scroll Effect
// ===========================
const nav = document.querySelector('.nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }

    // Hide/show navbar on scroll (optional)
    // if (currentScroll > lastScroll && currentScroll > 100) {
    //     nav.style.transform = 'translateY(-100%)';
    // } else {
    //     nav.style.transform = 'translateY(0)';
    // }

    lastScroll = currentScroll;
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const navHeight = nav.offsetHeight;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Product Card Interaction
// ===========================
document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.closest('.product-card').querySelector('.product-name').textContent;

        // Placeholder: Will be replaced with actual product page or modal
        alert(`"${productName}" 상세 페이지는 준비 중입니다.\n곧 만나보실 수 있습니다! 🎉`);
    });
});

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Add parallax effect to hero image (optional)
// ===========================
const heroImage = document.querySelector('.hero-image');

if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;

        if (scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ===========================
// Research Modal
// ===========================
const researchLink = document.getElementById('researchLink');
const researchModal = document.getElementById('researchModal');
const researchPassword = document.getElementById('researchPassword');
const errorMessage = document.getElementById('errorMessage');

// Open research modal
if (researchLink) {
    researchLink.addEventListener('click', (e) => {
        e.preventDefault();
        openResearchModal();
    });
}

function openResearchModal() {
    researchModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus on password input after animation
    setTimeout(() => {
        researchPassword.focus();
    }, 100);
}

function closeResearchModal() {
    researchModal.classList.remove('active');
    document.body.style.overflow = '';

    // Reset form
    researchPassword.value = '';
    errorMessage.classList.remove('show');
}

// Check password
function checkResearchPassword(e) {
    e.preventDefault();

    const password = researchPassword.value;

    if (password === '1909') {
        // Save to session storage
        sessionStorage.setItem('authenticated', 'true');

        // Redirect to research page
        window.location.href = 'research/data.html';
    } else {
        // Show error
        errorMessage.classList.add('show');
        researchPassword.value = '';
        researchPassword.focus();

        // Shake animation
        researchPassword.style.animation = 'shake 0.5s';
        setTimeout(() => {
            researchPassword.style.animation = '';
        }, 500);
    }
}

// Make functions global for onclick handlers
window.closeResearchModal = closeResearchModal;
window.checkResearchPassword = checkResearchPassword;

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && researchModal.classList.contains('active')) {
        closeResearchModal();
    }
});

// ===========================
// Console Easter Egg
// ===========================
console.log('%c👶 DIORA BABY', 'font-size: 24px; font-weight: bold; color: #8a7a5f;');
console.log('%c아이를 위한 첫 번째 선택', 'font-size: 14px; color: #6b7280;');
console.log('%c\n채용 문의: hello@diora.co.kr', 'font-size: 12px; color: #c9b896;');
