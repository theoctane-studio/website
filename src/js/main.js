// import { app as firebase } from '../firebase-config.js';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const controls = new OrbitControls( camera, renderer.domElement );
// const loader = new GLTFLoader();


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// const mainCanvas = document.getElementById('main-canvas');
// const renderer = new THREE.WebGLRenderer({canvas: mainCanvas, antialias: true});
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
//
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
//
// camera.position.z = 5;
//
// function animate( time ) {
//
//   cube.rotation.x += 0.001;
//   cube.rotation.y += 0.001;
//
//   renderer.render( scene, camera );
// }
// renderer.setAnimationLoop( animate );


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
const triggerBtn = document.querySelectorAll('main section.hero .container .window video, main section.hero .container .window video+i.ph');
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

const testimonialLogos = document.querySelectorAll('section.testimonials .container .logos div');

testimonialLogos.forEach(logo => {
  logo.addEventListener('click', () => {
    //use dataset to determine href
    try {
      window.open(logo.firstElementChild.dataset.href, '_blank');
    } catch (e) {
      console.log(e)
      location.href = logo.firstElementChild.dataset.href;
    }
  })
})