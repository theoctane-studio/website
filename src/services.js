import { app as firebase } from './firebase-config.js';

const contactCTABtn = document.getElementById('contact-btn-cta');
contactCTABtn.addEventListener('click', () => {

  location.href = '/contact.html';

})

const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
contactNavBtn.forEach(el => {
  el.addEventListener('click', () => {

    location.href = '/contact.html';

  });
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