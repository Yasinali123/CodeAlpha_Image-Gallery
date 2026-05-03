const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageIndicator = document.getElementById("page-indicator");
const visibleCount = document.getElementById("visible-count");
const activeFilterLabel = document.getElementById("active-filter-label");
const statusText = document.getElementById("status-text");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxMeta = document.getElementById("lightbox-meta");
const closeBtn = document.querySelector(".close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const heroCells = Array.from(document.querySelectorAll(".carousel__cell"));
const carousel3d = document.getElementById("hero-carousel-3d");
const heroLabel = document.getElementById("hero-label");
const heroDescription = document.getElementById("hero-description");
const heroProgressBar = document.getElementById("hero-progress-bar");
const thumbDots = Array.from(document.querySelectorAll(".thumb-dot"));
const navbar = document.querySelector(".navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let currentPage = 0;
let filteredItems = [...galleryItems];
let lightboxIndex = 0;
let heroIndex = 0;

function getItemsPerPage() {
    if (window.innerWidth <= 760) {
        return 4;
    }

    if (window.innerWidth <= 1100) {
        return 6;
    }

    return 6;
}

function getFilterLabel(filter) {
    if (filter === "all") {
        return document.querySelector('.filter-btn[data-filter="all"]')?.dataset.label || "All themes";
    }

    const filterButton = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    return filterButton?.dataset.label || filterButton?.textContent?.trim() || filter;
}

function updateStatus(filter) {
    const totalPages = Math.max(1, Math.ceil(filteredItems.length / getItemsPerPage()));
    const label = getFilterLabel(filter);

    visibleCount.textContent = String(filteredItems.length);
    activeFilterLabel.textContent = label;
    pageIndicator.textContent = `Page ${currentPage + 1} / ${totalPages}`;
    statusText.textContent = `Showing ${filteredItems.length} frame${filteredItems.length === 1 ? "" : "s"} in ${label.toLowerCase()}.`;
}

function updateGalleryView(filter = document.querySelector(".filter-btn.active")?.dataset.filter || "all") {
    if (galleryItems.length === 0) return;
    
    const itemsPerPage = getItemsPerPage();
    const totalPages = Math.max(1, Math.ceil(filteredItems.length / itemsPerPage));

    if (currentPage >= totalPages) {
        currentPage = totalPages - 1;
    }

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    galleryItems.forEach((item) => {
        item.style.display = "none";
        item.classList.add("hide");
    });

    filteredItems.slice(start, end).forEach((item, index) => {
        item.style.display = "block";

        window.setTimeout(() => {
            item.classList.remove("hide");
        }, index * 60);
    });

    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = end >= filteredItems.length;

    updateStatus(filter);
}

function setActiveFilter(filter) {
    filteredItems = galleryItems.filter((item) => {
        return filter === "all" || item.classList.contains(filter);
    });

    currentPage = 0;
    updateGalleryView(filter);
}

function updateLightboxContent() {
    const currentItem = filteredItems[lightboxIndex];
    const image = currentItem.querySelector("img");

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    lightboxCategory.textContent = currentItem.dataset.category;
    lightboxTitle.textContent = currentItem.dataset.title;
    lightboxMeta.textContent = currentItem.dataset.meta;
}

function openLightbox(item) {
    lightboxIndex = filteredItems.indexOf(item);

    if (lightboxIndex < 0) {
        return;
    }

    updateLightboxContent();
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
}

function showNextLightboxItem(step) {
    lightboxIndex = (lightboxIndex + step + filteredItems.length) % filteredItems.length;
    updateLightboxContent();
}

function updateHeroPanel() {
    if (!heroCells.length) return;
    const activeCell = heroCells[heroIndex % heroCells.length];

    if (heroLabel) heroLabel.textContent = activeCell.dataset.label;
    if (heroDescription) heroDescription.textContent = activeCell.dataset.description;
    
    const progressIndex = (heroIndex % heroCells.length) + 1;
    if (heroProgressBar) heroProgressBar.style.transform = `scaleX(${progressIndex / heroCells.length})`;

    if (thumbDots.length > 0) {
        thumbDots.forEach((dot) => dot.classList.remove("active"));
        const currentDot = thumbDots[heroIndex % heroCells.length];
        if (currentDot) {
            currentDot.classList.add("active");
        }
    }
}

function autoplayHero() {
    if (!heroCells.length || !carousel3d) return;
    heroCells.forEach(cell => cell.classList.remove("active"));
    heroIndex++;
    
    const currentIndex = heroIndex % heroCells.length;
    heroCells[currentIndex].classList.add("active");
    
    const angle = heroIndex * -72;
    carousel3d.style.setProperty("--rotation", `${angle}deg`);
    
    updateHeroPanel();
}

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");
        setActiveFilter(btn.dataset.filter);
    });
});

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage -= 1;
            updateGalleryView();
        }
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        const itemsPerPage = getItemsPerPage();

        if ((currentPage + 1) * itemsPerPage < filteredItems.length) {
            currentPage += 1;
            updateGalleryView();
        }
    });
}

galleryItems.forEach((item) => {
    item.addEventListener("click", () => openLightbox(item));
    item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(item);
        }
    });
});

if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
if (lightboxPrev) lightboxPrev.addEventListener("click", () => showNextLightboxItem(-1));
if (lightboxNext) lightboxNext.addEventListener("click", () => showNextLightboxItem(1));

if (lightbox) {
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (!lightbox || !lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        showNextLightboxItem(-1);
    }

    if (event.key === "ArrowRight") {
        showNextLightboxItem(1);
    }
});

function setMobileNavState(isOpen) {
    if (!navbar || !navToggle) {
        return;
    }

    navbar.classList.toggle("menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
}

if (navToggle && navMenu && navbar) {
    navToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.contains("menu-open");
        setMobileNavState(!isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setMobileNavState(false);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            setMobileNavState(false);
        }
    });
}

window.addEventListener("resize", () => {
    if (galleryItems.length > 0) updateGalleryView();
    if (window.innerWidth > 760) {
        setMobileNavState(false);
    }
});

if (heroCells.length > 0) {
    updateHeroPanel();
    if (!prefersReducedMotion) {
        window.setInterval(autoplayHero, 3800);
    }
}

if (galleryItems.length > 0) {
    updateGalleryView();
}

/* =========================================
   CREATIVE REDESIGN LOGIC
   ========================================= */

// 1. Magnetic Elements Logic
const magneticElements = document.querySelectorAll('.magnetic');
magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        // Move element slightly towards cursor (magnetic pull strength)
        const pull = 0.3;
        el.style.transform = `translate(${distanceX * pull}px, ${distanceY * pull}px)`;
    });

    el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0px, 0px)';
    });
});

// 2. Hero Section Parallax
const heroSection = document.querySelector('.hero');
const hero3dContainer = document.querySelector('.hero-3d-container');
const heroCopy = document.querySelector('.hero-copy');
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const deltaX = (e.clientX - centerX) / centerX;
        const deltaY = (e.clientY - centerY) / centerY;
        
        if (hero3dContainer) {
            hero3dContainer.style.transform = `translate(${deltaX * -20}px, ${deltaY * -20}px)`;
        }
        if (heroCopy) {
            heroCopy.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px)`;
        }
        if (orb1) {
            orb1.style.transform = `translate(${deltaX * -40}px, ${deltaY * -40}px)`;
        }
        if (orb2) {
            orb2.style.transform = `translate(${deltaX * 30}px, ${deltaY * 30}px)`;
        }
    });
    
    heroSection.addEventListener('mouseleave', () => {
        if (hero3dContainer) {
            hero3dContainer.style.transform = `translate(0, 0)`;
            hero3dContainer.style.transition = `transform 0.5s ease`;
        }
        if (heroCopy) {
            heroCopy.style.transform = `translate(0, 0)`;
            heroCopy.style.transition = `transform 0.5s ease`;
        }
        if (orb1) {
            orb1.style.transform = `translate(0, 0)`;
            orb1.style.transition = `transform 0.5s ease`;
        }
        if (orb2) {
            orb2.style.transform = `translate(0, 0)`;
            orb2.style.transition = `transform 0.5s ease`;
        }
    });
    
    heroSection.addEventListener('mouseenter', () => {
        if (hero3dContainer) hero3dContainer.style.transition = `none`;
        if (heroCopy) heroCopy.style.transition = `none`;
        if (orb1) orb1.style.transition = `none`;
        if (orb2) orb2.style.transition = `none`;
    });
}

// 3. Scroll Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing once revealed
            // revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
});

// 4. Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference, otherwise use system preference
const savedTheme = localStorage.getItem('gallery-theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
} else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    htmlElement.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('gallery-theme', newTheme);
    });
}

// 5. Flashlight Hover Effect for Gallery Cards
const galleryCards = document.querySelectorAll('.gallery-item');
galleryCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate percentage for background position
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', `${xPercent}%`);
        card.style.setProperty('--mouse-y', `${yPercent}%`);
    });
});

// 6. Staggered Page Load Animations
document.addEventListener('DOMContentLoaded', () => {
    const staggerElements = document.querySelectorAll('.stagger-in');
    
    staggerElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('loaded');
        }, index * 100 + 100); // 100ms delay between each element
    });
});

// 7. Carousel Thumbnail Logic
if (thumbDots.length > 0) {
    thumbDots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            
            // Update heroIndex so autoplay resumes correctly from this point
            heroIndex = index;
            
            if (heroCells.length && carousel3d) {
                heroCells.forEach(cell => cell.classList.remove("active"));
                
                const currentIndex = heroIndex % heroCells.length;
                heroCells[currentIndex].classList.add("active");
                
                const angle = heroIndex * -72;
                carousel3d.style.setProperty("--rotation", `${angle}deg`);
                
                updateHeroPanel();
            }
        });
    });
}
