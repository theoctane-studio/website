import { app as firebase } from '../firebase-config.js';
//
// const contactCTABtn = document.querySelectorAll('.contact-btn-cta');
// contactCTABtn.forEach(el => {
//   el.addEventListener('click', () => {
//
//     location.href = '/contact.html';
//
//   })
// })
//
// const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
// contactNavBtn.forEach(el => {
//   el.addEventListener('click', () => {
//
//     location.href = '/contact.html';
//
//   });
// })

const viewWorkBtn = document.querySelector("section.hero .container .call-to-action .filled-btn.view-work-cta");
viewWorkBtn.addEventListener('click', () => {
  document.querySelectorAll('.in-view').forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");
        })
        setTimeout(() => {
            location.href = '/work.html';
        }, 1500)
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
