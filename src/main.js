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

/**
 * Throttle function to limit function calls to once per specified time
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit = 100) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Scroll events (throttled for performance)
window.addEventListener(
    "scroll",
    throttle(() => {
      handleScrollAnimations()
    }, 120),
)

function initializeScrollAnimations() {
  // Elements to animate on scroll
  const animateElements = document.querySelectorAll(
    ".anim-left, .anim-right, .anim-up, .anim-down, .anim-blur"
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
        console.log(entry)
        entry.target.classList.add('in-view');

        // Add staggered animation for multiple items
        if (entry.target.parentElement.classList.contains("anim-grid")) {
          // console.log("grid check passed")

          const siblings = Array.from(entry.target.parentElement.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 1.5}s !important`;

          // console.log("grid set passed")
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

const animateElements = document.querySelectorAll(
    ".anim-left, .anim-right, .anim-up, .anim-down, .anim-blur"
);

function isInViewport(element, offset = 25) {
  const rect = element.getBoundingClientRect()
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset
}

function handleScrollAnimations() {
  animateElements.forEach((element) => {
    if (isInViewport(element) && !element.classList.contains("in-view")) {
      element.classList.add("in-view")
    }

    if (element.parentElement.classList.contains("anim-grid")) {
      // console.log("grid check passed")
      const siblings = Array.from(element.parentElement.children);
      const index = siblings.indexOf(element);
      // element.classList.add(`delay-${index * 5 + 1}`);
      element.dataset.delay = `${index * 2 + 1}`;
      // console.log("grid set passed")
    }

  })
  document.querySelectorAll('[data-delay]').forEach((element) => {
    // let elClassStr = element.classList.toString();
    // let delayScalar = parseInt(elClassStr.substring(elClassStr.indexOf("delay") + 6))
    let delayScalar = parseInt(element.dataset.delay);


    element.style.transitionDelay = delayScalar * 0.1 + "s";
    element.style.animationDelay = delayScalar * 0.1 + "s";
  })
}

handleScrollAnimations();

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