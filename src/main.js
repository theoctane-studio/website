
var coll = document.getElementsByClassName("collapsible");

//for RD update this via CSS root var later
var dropdownBlockSize = "200px"

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.height == dropdownBlockSize) {

      content.style.height = "0";
      
      let icon = this.querySelector('i');
      icon.classList.remove('ph-caret-up');
      icon.classList.add('ph-caret-down');
    } else {

      content.style.height = dropdownBlockSize;

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