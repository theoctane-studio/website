import { app as firebase } from '../firebase-config.js';

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


//link + btn handlers

var navLinks = document.querySelectorAll("a")
navLinks.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.in-view').forEach((child) => {
      child.classList.remove('in-view');
      child.classList.add("out-view");
    })
    setTimeout(() => {
      location.href = item.href;
    }, 1500)
  });
})

const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
contactNavBtn.forEach(el => {
  el.addEventListener('click', () => {
    document.querySelectorAll('.in-view').forEach((child) => {
      child.classList.remove('in-view');
      child.classList.add("out-view");
    })
    setTimeout(() => {
      location.href = '/contact.html';
    }, 1500)
  });
})

const contactHeroBtn = document.getElementById('contact-btn-hero');
const workHeroBtn = document.getElementById('work-btn-hero');

contactHeroBtn.addEventListener('click', () => {

  document.querySelectorAll('.in-view').forEach((child) => {
    child.classList.remove('in-view');
    child.classList.add("out-view");
  })
  setTimeout(() => {
    location.href = '/contact.html';
  }, 1500)

});

workHeroBtn.addEventListener('click', () => {

  document.querySelectorAll('.in-view').forEach((child) => {
    child.classList.remove('in-view');
    child.classList.add("out-view");
  })
  setTimeout(() => {
    location.href = '/work.html';
  }, 1500)

});

const contactCTABtn = document.getElementById('contact-btn-cta');
contactCTABtn.addEventListener('click', () => {

  document.querySelectorAll('.in-view').forEach((child) => {
    child.classList.remove('in-view');
    child.classList.add("out-view");
  })
  setTimeout(() => {
    location.href = '/contact.html';
  }, 1500)

})

//logo home button
document.querySelectorAll('.logo').forEach(logo => {
  logo.addEventListener('click', () => {
    document.querySelectorAll('.in-view').forEach((child) => {
      child.classList.remove('in-view');
      child.classList.add("out-view");
    })
    setTimeout(() => {
      location.href = '/';
    }, 1500)
  })
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
    document.querySelectorAll('.in-view').forEach((child) => {
      child.classList.remove('in-view');
      child.classList.add("out-view");
    })
    setTimeout(() => {
      location.href = '/';
    }, 1500)
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