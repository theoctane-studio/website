
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
    }, 20),
)
/*
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
*/

const animateElements = document.querySelectorAll(
    ".anim-left, .anim-right, .anim-up, .anim-down, .anim-blur, .anim-grid"
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

document.addEventListener("DOMContentLoaded", handleScrollAnimations);
// handleScrollAnimations();

// window.onbeforeunload = () => {
//     document.querySelectorAll('.in-view').forEach((child) => {
//         this.classList.remove('in-view');
//     })
// }


//link + btn handlers

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

let navLinks = document.querySelectorAll("a")
navLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.in-view').forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");

            mobileMenu.style.display = 'none';
            document.scrollingElement.style.overflow = 'scroll';
        })
        setTimeout(() => {
            location.href = item.href;

        }, 1500)
    });
})

const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
contactNavBtn.forEach(el => {
    if (!el) return
    el.addEventListener('click', () => {
        document.querySelectorAll('.in-view').forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");

            mobileMenu.style.display = 'none';
            document.scrollingElement.style.overflow = 'scroll';
        })
        setTimeout(() => {
            location.href = '/contact.html';
        }, 1500)
    });
})

const contactHeroBtn = document.getElementById('contact-btn-hero');
const workHeroBtn = document.getElementById('work-btn-hero');

if (contactHeroBtn) {
    contactHeroBtn.addEventListener('click', () => {

        document.querySelectorAll('.in-view').forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");
        })
        setTimeout(() => {
            location.href = '/contact.html';
        }, 1500)

    });
}

if (workHeroBtn) {
    workHeroBtn.addEventListener('click', () => {

        document.querySelectorAll('.in-view').forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");

            mobileMenu.style.display = 'none';
            document.scrollingElement.style.overflow = 'scroll';
        })
        setTimeout(() => {
            location.href = '/work.html';
        }, 1500)

    });
}

const contactCTABtn = document.getElementById('contact-btn-cta');
if (contactCTABtn) {
    contactCTABtn.addEventListener('click', () => {

        document.querySelectorAll('.in-view').forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");

            mobileMenu.style.display = 'none';
            document.scrollingElement.style.overflow = 'scroll';
        })
        setTimeout(() => {
            location.href = '/contact.html';
        }, 1500)

    })
}

//logo home button
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelectorAll('.in-view').forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");

            mobileMenu.style.display = 'none';
            document.scrollingElement.style.overflow = 'scroll';
        })
        setTimeout(() => {
            location.href = '/';
        }, 1500)
    })
})