// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            setNavOpen(false);
        }
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        try {
            localStorage.setItem('theme', next);
        } catch (e) {
            // ignore (e.g. privacy mode)
        }
    });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let stored = null;
    try {
        stored = localStorage.getItem('theme');
    } catch (err) {
        // ignore
    }
    if (!stored) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
const navBackdrop = document.getElementById('nav-backdrop');

function setNavOpen(isOpen) {
    if (mainNav) mainNav.classList.toggle('open', isOpen);
    if (navBackdrop) navBackdrop.classList.toggle('open', isOpen);
    if (navToggle) navToggle.setAttribute('aria-expanded', String(isOpen));
}

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        setNavOpen(!mainNav.classList.contains('open'));
    });
}

if (navBackdrop) {
    navBackdrop.addEventListener('click', () => setNavOpen(false));
}

// Scrollspy: highlight the nav link for the section in view
const navLinkMap = new Map();
document.querySelectorAll('.nav-link[data-nav]').forEach(link => {
    navLinkMap.set(link.getAttribute('data-nav'), link);
});

const trackedSections = [...navLinkMap.keys()]
    .map(id => document.getElementById(id))
    .filter(Boolean);

if (trackedSections.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinkMap.forEach(link => link.classList.remove('active'));
                const activeLink = navLinkMap.get(entry.target.id);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    trackedSections.forEach(section => observer.observe(section));
}
