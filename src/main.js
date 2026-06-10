import { app as firebase } from './firebase-config.js';

let coll = document.getElementsByClassName("collapsible");

// var dropdownContent = document.querySelectorAll(".dropdowns .collapsible .content")


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if (parseInt(content.style.height) !== 0 && content.style.height) {

      content.style.height = "0";
      
      let icon = this.querySelector('i');
      icon.classList.remove('ph-caret-up');
      icon.classList.add('ph-caret-down');
    } else {
      content.style.height = content.firstElementChild.offsetHeight + "px";

      let icon = this.querySelector('i');
      icon.classList.remove('ph-caret-down');
      icon.classList.add('ph-caret-up');
    }

  });
} 

//TODO: pair to html and css later
function initializeScrollAnimations() {
  // Elements to animate on scroll
  const animateElements = document.querySelectorAll(
    ".anim-left, .anim-right, .anim-up, .anim-down"
  );

  // Intersection Observer options
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Create observer
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Add staggered animation for grid items
        if (entry.target.parentElement.classList.contains('projects-grid') ||
          entry.target.parentElement.classList.contains('testimonials-grid') ||
          entry.target.parentElement.classList.contains('skills-grid')) {

          const siblings = Array.from(entry.target.parentElement.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }

        // Unobserve after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements
  animateElements.forEach(element => {
    element.classList.add('in-view');
    observer.observe(element);
  });
}

const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
contactNavBtn.forEach(el => {
  el.addEventListener('click', () => {

    location.href = '/contact.html';

  });
})



const contactHeroBtn = document.getElementById('contact-btn-hero');
const workHeroBtn = document.getElementById('work-btn-hero');

contactHeroBtn.addEventListener('click', () => {

  location.href = '/contact.html';

});

workHeroBtn.addEventListener('click', () => {

  location.href = '/work.html';

});

const contactCTABtn = document.getElementById('contact-btn-cta');
contactCTABtn.addEventListener('click', () => {

  location.href = '/contact.html';

})

const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

// const mainContainer = document.querySelector('main');

mobileMenuBtn.addEventListener('click', () => {

  mobileMenu.style.display = 'flex';
  document.scrollingElement.style.overflow = 'hidden';

});

mobileMenuCloseBtn.addEventListener('click', () => {

  mobileMenu.style.display = 'none';
  document.scrollingElement.style.overflow = 'scroll';

})

//logo home button
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    location.href = '/';
  })
})

//modal popup
const modal = document.getElementById('imgModal');
const triggerBtn = document.querySelectorAll('main section.hero .container .window video');
const closeBtn = document.getElementById('closeBtn');
// const popupImage = document.getElementById('popupImage');
const popupVideo = document.getElementById('popupVideo');

// Open the modal

// triggerBtns1.forEach(btn => {
//     btn.addEventListener('click', () => {
//         modal.classList.add('is-active');
//         popupImage.src = btn.dataset.img;
//     });
// })

triggerBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('is-active');
    // popupImage.src = btn.firstElementChild.src;
    popupVideo.play()
  })
})

// Close the modal via the 'X' button
closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
  popupVideo.pause()
});

// Close the modal if the user clicks anywhere on the darkened backdrop
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('is-active');
    popupVideo.pause()
  }
});