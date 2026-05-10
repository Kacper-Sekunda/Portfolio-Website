function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function scrollProjects(direction) {
    const slider = document.querySelector('.slider-window');
    const slides = document.querySelectorAll('.slide');
    if (!slider || slides.length === 0) return;

    const gap = Number(getComputedStyle(document.querySelector('.slider-track')).gap.replace('px', '')) || 0;
    const slideWidth = slides[0].offsetWidth + gap;

    if (direction === 'next') {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
        }
    } else {
        if (slider.scrollLeft <= 2) {
            slider.scrollTo({ left: slider.scrollWidth - slider.clientWidth, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        }
    }
}

function openProjectDetail(tag, title, summary, body, image1, image2) {
    document.getElementById('detailTag').textContent = tag;
    document.getElementById('detailTitle').textContent = title;
    document.getElementById('detailText').textContent = summary;
    document.getElementById('detailBody').textContent = body;
    document.getElementById('detailImage1').src = image1;
    document.getElementById('detailImage2').src = image2;
    const overlay = document.getElementById('projectDetailOverlay');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.style.display = 'none';
    }
    if (overlay) {
        overlay.style.display = 'flex';
    }
}

function closeProjectDetail() {
    const overlay = document.getElementById('projectDetailOverlay');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.style.display = 'flex';
    }
    if (overlay) {
        overlay.style.display = 'none';
    }
}