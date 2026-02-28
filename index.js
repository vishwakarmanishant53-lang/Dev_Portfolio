// Scoped within an IIFE to prevent global namespace collisions
(() => {
    // Application Metadata
    const METADATA = {
        name: "Nishant's Professional Portfolio",
        description: "A high-performance responsive personal website built with vanilla HTML, CSS, and JavaScript, featuring glassmorphism, typing effects, and scroll animations."
    };

    // SVG Icons
    const ICONS = {
        linkedin: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
        github: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        twitter: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`,
        instagram: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
        code: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M9.586 12l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12zM14.414 12l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L14.414 12z"/></svg>`,
        terminal: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.58-2.59L7.5 9l4 4-4 4z"/></svg>`,
        html5: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>`,
        css3: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 8.77l.19 2.206h10.459l-.32 3.426-2.91.804-2.955-.81-.188-2.11H7.75l.33 4.171L12 19.351l5.379-1.443.744-8.157H6.59zm.41-4.36l.17 1.954h11.65l.17-1.954H7z"/></svg>`,
        js: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.826l1.635-1.096c-.525-.81-1.32-1.485-2.73-1.605-1.613-.21-3.3.78-3.525 2.79-.225 1.935 1.2 2.655 2.445 3.105 1.155.435 1.815.66 1.965 1.125.21.495-.03 1.17-.93 1.35-.615.12-1.335-.06-1.77-.51-.405-.42-.51-.855-.54-1.2l-1.77.3c.18 1.47 1.17 2.55 2.85 2.76 2.055.255 4.02-.555 4.215-3.225zm-8.66-3.9h-1.47V24h1.47v-9.624z"/></svg>`,
        react: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M24 12c0 1.11-.9 2.01-2.01 2.01H15.9c-.3 0-.6-.15-.75-.45l-1.5-3c-.15-.3-.15-.6 0-.9l1.5-3c.15-.3.45-.45.75-.45h6.09c1.11 0 2.01.9 2.01 2.01v3.78zm-11.1 0c0 1.11-.9 2.01-2.01 2.01H4.8c-.3 0-.6-.15-.75-.45l-1.5-3c-.15-.3-.15-.6 0-.9l1.5-3c.15-.3.45-.45.75-.45h6.09c1.11 0 2.01.9 2.01 2.01v3.78z"/></svg>`, // Simplified React-like icon
        java: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M6.11 18.15c0 1.1.9 2 2 2h7.78c1.1 0 2-.9 2-2V8.37c0-1.1-.9-2-2-2H8.11c-1.1 0-2 .9-2 2v9.78zm2-9.78h7.78v9.78H8.11V8.37zM12 2c-1.1 0-2 .9-2 2v2h4V4c0-1.1-.9-2-2-2z"/></svg>`, // Simplified Java-like icon
        bootstrap: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 15.5c0 1.381-1.119 2.5-2.5 2.5H9c-.552 0-1-.448-1-1V7c0-.552.448-1 1-1h4c1.381 0 2.5 1.119 2.5 2.5 0 .828-.404 1.561-1.021 2.01.617.449 1.021 1.182 1.021 2.01v2.98zM10 8v2h3c.552 0 1-.448 1-1s-.448-1-1-1h-3zm0 4v3h4c.552 0 1-.448 1-1s-.448-1-1-1h-4z"/></svg>`,
        download: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>`,
        external: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
        arrowUp: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>`,
        bars: `<svg class="icon-svg icon-large" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`,
        times: `<svg class="icon-svg icon-large" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
    };

    // Consolidated Data
    const SKILLS = [
        { name: "HTML5", icon: ICONS.html5, color: "#e34c26" },
        { name: "CSS3", icon: ICONS.css3, color: "#264de4" },
        { name: "JavaScript", icon: ICONS.js, color: "#f7df1e" },
        { name: "React.js", icon: ICONS.react, color: "#61dbfb" },
        { name: "Java", icon: ICONS.java, color: "#f89820" },
        { name: "Bootstrap", icon: ICONS.bootstrap, color: "#563d7c" }
    ];

    const SOCIALS = [
        { platform: "LinkedIn", icon: ICONS.linkedin, url: "#" },
        { platform: "GitHub", icon: ICONS.github, url: "#" },
        { platform: "Twitter", icon: ICONS.twitter, url: "#" },
        { platform: "Instagram", icon: ICONS.instagram, url: "#" }
    ];

    const PROJECTS = [
        {
            title: "Weather App",
            description: "Fetches live weather data using premium APIs with a clean, responsive UI and dynamic backgrounds.",
            image: "weather-app-icons.jpg",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "JS Calculator",
            description: "A neumorphic calculator with advanced mathematical functions and keyboard support.",
            image: "1632727310react-calculator-app-768x435.jpg",
            demoUrl: "#",
            codeUrl: "#"
        },
        {
            title: "Portfolio Website",
            description: "A high-performance responsive personal website showcasing modern web technologies.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
            demoUrl: "#",
            codeUrl: "#"
        }
    ];

    const PHRASES = ["Web Developer", "Creative Coder", "UI/UX Enthusiast"];

    // Rendering Logic
    function populateContent() {
        // Social Links
        const socialLinks = document.getElementById('social-links');
        const footerSocials = document.getElementById('footer-socials');
        
        const socialHtml = SOCIALS.map(s => `
            <a href="${s.url}" target="_blank" class="social-icon-link">
                ${s.icon}
            </a>
        `).join('');
        
        if (socialLinks) socialLinks.innerHTML = socialHtml;
        if (footerSocials) footerSocials.innerHTML = SOCIALS.map(s => `
            <a href="${s.url}" target="_blank" class="footer-social-link">${s.icon}</a>
        `).join('');

        // Skills Grid
        const skillsGrid = document.getElementById('skills-grid');
        if (skillsGrid) {
            skillsGrid.innerHTML = SKILLS.map(s => `
                <div class="skill-card reveal">
                    <div class="skill-icon-wrapper" style="color: ${s.color}">
                        ${s.icon}
                    </div>
                    <h3 class="skill-name">${s.name}</h3>
                </div>
            `).join('');
        }

        // Projects Grid
        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = PROJECTS.map(p => `
                <div class="project-card reveal">
                    <img src="${p.image}" alt="${p.title}" class="project-image">
                    <div class="project-overlay">
                        <div class="project-content">
                            <h3 class="project-title">${p.title}</h3>
                            <p class="project-description">${p.description}</p>
                            <div class="project-links">
                                <a href="${p.demoUrl}" class="project-btn btn-demo">${ICONS.external} <span>Demo</span></a>
                                <a href="${p.codeUrl}" class="project-btn btn-code">${ICONS.github} <span>Code</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Typing Effect Animation
    function startTypingEffect() {
        const textEl = document.getElementById('typing-text');
        if (!textEl) return;

        let phraseIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        let speed = 150;

        function tick() {
            const full = PHRASES[phraseIdx];
            if (isDeleting) {
                textEl.textContent = full.substring(0, charIdx - 1);
                charIdx--;
                speed = 60;
            } else {
                textEl.textContent = full.substring(0, charIdx + 1);
                charIdx++;
                speed = 120;
            }

            if (!isDeleting && charIdx === full.length) {
                isDeleting = true;
                speed = 2500; 
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % PHRASES.length;
                speed = 800;
            }
            setTimeout(tick, speed);
        }
        tick();
    }

    // UI Setup and Handlers
    function setupInteractivity() {
        // Navbar Scroll Stylings
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (!nav) return;
            if (window.scrollY > 40) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isOpen = mobileMenu.style.maxHeight !== '0px' && mobileMenu.style.maxHeight !== '';
                mobileMenu.style.maxHeight = isOpen ? '0px' : '700px';
                menuBtn.innerHTML = isOpen ? ICONS.bars : ICONS.times;
            });
        }

        // Auto-close menu on link click
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) mobileMenu.style.maxHeight = '0px';
                if (menuBtn) menuBtn.innerHTML = ICONS.bars;
            });
        });

        // Scroll Observer for Animations
        const revealObs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
        }, { threshold: 0.05 });
        document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

        // Scroll to Top Button
        const st = document.getElementById('scroll-top');
        window.addEventListener('scroll', () => {
            if (st) {
                if (window.scrollY > 500) st.classList.add('visible');
                else st.classList.remove('visible');
            }
        });
        if (st) {
            st.innerHTML = ICONS.arrowUp;
            st.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }

        // Demo Form Submission
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert("Sent! Thank you for your inquiry.");
                e.target.reset();
            });
        }
    }

    // Bootstrapping the application
    document.addEventListener('DOMContentLoaded', () => {
        populateContent();
        startTypingEffect();
        setupInteractivity();
    });
})();
