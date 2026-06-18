// import { app as firebase } from '../firebase-config.js';


//handling dropdowns
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

const testimonialLogos = document.querySelectorAll('section.testimonials .container .logos img');

testimonialLogos.forEach(logo => {
  logo.addEventListener('click', () => {
    //use dataset to determine href
    try {
      window.open(logo.dataset.href, '_blank');
    } catch (e) {
      console.log(e)
      location.href = logo.dataset.href;
    }
  })
})