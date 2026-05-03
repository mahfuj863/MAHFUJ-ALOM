window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 500); // 500ms delay for smooth transition
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ===== NAVBAR SCROLL EFFECT =====
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // ===== MOBILE MENU =====
    const hamburger = document.getElementById('hamburger');
    const navLinksList = document.getElementById('navLinks');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksList.classList.toggle('mobile-active');
            // Basic animation for hamburger
            hamburger.classList.toggle('active');
        });
    }

    // ===== NUMBER COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.stat-num, .counter');
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            if (!target) return;
            
            const count = +counter.innerText.replace(/,/g, '');
            const speed = 200;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc).toLocaleString();
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    };

    // ===== SKILL BAR ANIMATION =====
    const skillFills = document.querySelectorAll('.skill-fill');
    const animateSkills = () => {
        skillFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            fill.style.width = width + '%';
        });
    };

    // ===== INTERSECTION OBSERVER FOR SCROLL EFFECTS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe relevant sections
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(target => observer.observe(target));

    // ===== BLOG FUNCTIONALITY =====
    const blogSearch = document.getElementById('blogSearch');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (blogSearch) {
        blogSearch.addEventListener('input', (e) => {
            if (window.renderBlogs) {
                window.renderBlogs(document.querySelector('.filter-btn.active').dataset.filter, e.target.value);
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (window.renderBlogs) {
                window.renderBlogs(btn.dataset.filter, blogSearch ? blogSearch.value : '');
            }
        });
    });

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            btn.disabled = true;

            const formData = new FormData(contactForm);

            fetch('/', {
                method: 'POST',
                headers: { 'Accept': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                alert('Success! Your message has been sent to Mahfuj.');
                contactForm.reset();
            })
            .catch((error) => {
                alert('Oops! There was a problem submitting your form.');
                console.error(error);
            })
            .finally(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            });
        });
    }

    // Initial blog render
    if (window.renderBlogs) {
        window.renderBlogs('all');
    }
});
