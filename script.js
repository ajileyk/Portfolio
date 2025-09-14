'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials functionality removed since testimonials section was deleted



// portfolio filtering functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "projects") {
      if (filterItems[i].dataset.category === "projects") {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    } else if (selectedValue === "creative") {
      if (filterItems[i].dataset.category === "creative") {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    } else if (selectedValue === "photos") {
      if (filterItems[i].dataset.category === "photos") {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    if (selectValue) selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let currentImageIndex = 0;
let currentImages = [];

// Function to get all visible images
function getCurrentImages() {
  const activeItems = document.querySelectorAll('.project-item.active .project-img img');
  return Array.from(activeItems);
}

// Function to open lightbox
function openLightbox(imageSrc, imageAlt, index) {
  currentImages = getCurrentImages();
  currentImageIndex = index;
  
  lightboxImg.src = imageSrc;
  lightboxImg.alt = imageAlt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Update navigation buttons visibility
  updateNavigationButtons();
}

// Function to close lightbox
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Function to show previous image
function showPrevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentImageIndex].src;
  lightboxImg.alt = currentImages[currentImageIndex].alt;
  updateNavigationButtons();
}

// Function to show next image
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentImageIndex].src;
  lightboxImg.alt = currentImages[currentImageIndex].alt;
  updateNavigationButtons();
}

// Function to update navigation buttons
function updateNavigationButtons() {
  if (currentImages.length <= 1) {
    lightboxPrev.style.display = 'none';
    lightboxNext.style.display = 'none';
  } else {
    lightboxPrev.style.display = 'flex';
    lightboxNext.style.display = 'flex';
  }
}

// Add click event to all portfolio images
function addImageClickEvents() {
  const portfolioImages = document.querySelectorAll('.project-img img');
  
  portfolioImages.forEach((img, index) => {
    img.addEventListener('click', function() {
      // Only open lightbox if the parent project item is active (visible)
      if (this.closest('.project-item').classList.contains('active')) {
        const visibleImages = getCurrentImages();
        const visibleIndex = visibleImages.indexOf(this);
        if (visibleIndex !== -1) {
          openLightbox(this.src, this.alt, visibleIndex);
        }
      }
    });
  });
}

// Event listeners for lightbox controls
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (lightbox.classList.contains('active')) {
    switch(e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrevImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
    }
  }
});

// Initialize image click events when page loads
document.addEventListener('DOMContentLoaded', function() {
  addImageClickEvents();
  
  // Initial masonry calculation if already on creative/photos
  const activeFilter = document.querySelector('.portfolio-filter.active');
  if (activeFilter && (activeFilter.textContent.toLowerCase() === 'creative' || activeFilter.textContent.toLowerCase() === 'photos')) {
    setTimeout(calculateMasonryLayout, 100);
  }
});

// Recalculate masonry layout on window resize
window.addEventListener('resize', function() {
  const projectList = document.querySelector('.project-list');
  if (projectList && projectList.classList.contains('masonry')) {
    setTimeout(calculateMasonryLayout, 100);
  }
});

// Function to calculate grid row spans for masonry layout
function calculateMasonryLayout() {
  const masonryItems = document.querySelectorAll('.project-list.masonry .project-item.active');
  
  masonryItems.forEach(item => {
    const img = item.querySelector('img');
    if (img) {
      // Wait for image to load if not already loaded
      if (img.complete) {
        setGridRowSpan(item, img);
      } else {
        img.addEventListener('load', () => setGridRowSpan(item, img));
      }
    }
  });
}

function setGridRowSpan(item, img) {
  const aspectRatio = img.naturalWidth / img.naturalHeight;
  const containerWidth = item.offsetWidth;
  const imageHeight = containerWidth / aspectRatio;
  
  // Calculate row span based on image height (each row is 10px + gap)
  const rowHeight = 10;
  const gap = 15;
  const rowSpan = Math.ceil((imageHeight + gap) / (rowHeight + gap));
  
  item.style.setProperty('--row-span', rowSpan);
}

// Re-add image click events when filter changes
const originalFilterFunc = filterFunc;
filterFunc = function(selectedValue) {
  originalFilterFunc(selectedValue);
  
  // Apply masonry layout for creative and photos sections
  const projectList = document.querySelector('.project-list');
  if (selectedValue === 'creative' || selectedValue === 'photos') {
    projectList.classList.add('masonry');
    // Calculate masonry layout after a short delay
    setTimeout(() => {
      calculateMasonryLayout();
    }, 150);
  } else {
    projectList.classList.remove('masonry');
  }
  
  // Small delay to ensure DOM updates are complete
  setTimeout(addImageClickEvents, 200);
};