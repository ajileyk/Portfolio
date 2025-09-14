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

// Initialize filter on page load - show only projects by default
document.addEventListener('DOMContentLoaded', function() {
  filterFunc('projects');
});



// lightbox functionality
const lightboxOverlay = document.querySelector('#lightbox-overlay');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxClose = document.querySelector('#lightbox-close');

// Function to open lightbox
const openLightbox = function(imageSrc, imageAlt) {
  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightboxOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close lightbox
const closeLightbox = function() {
  lightboxOverlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Restore scrolling
  setTimeout(() => {
    lightboxImage.src = '';
    lightboxImage.alt = '';
  }, 300);
}

// Add click events to creative and photos images
document.addEventListener('click', function(e) {
  // Check if clicked element is an image in creative or photos section
  const projectItem = e.target.closest('.project-item');
  if (projectItem && e.target.tagName === 'IMG') {
    const category = projectItem.dataset.category;
    if (category === 'creative' || category === 'photos') {
      e.preventDefault();
      openLightbox(e.target.src, e.target.alt);
    }
  }
});

// Close lightbox when clicking close button
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox when clicking overlay (outside image)
lightboxOverlay.addEventListener('click', function(e) {
  if (e.target === lightboxOverlay) {
    closeLightbox();
  }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
    closeLightbox();
  }
});



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