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

//check via bounding box if elem in view?
function isInViewport(element, offset = 25) {
    const rect = element.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset
}

//goofy ahh scroll handling func dont ask wtf this does
function handleScrollAnimations() {

    const overlay = document.getElementById('overlay')
    setTimeout(() => {
        overlay.classList.add('closed')
    }, 150)

    animateElements.forEach((element) => {
        //check if in viewport, add tag
        if (isInViewport(element) && !element.classList.contains("in-view")) {
            element.classList.add("in-view")
        }

        //grid elems stagger
        if (element.parentElement.classList.contains("anim-grid")) {

            //delay based on sibling index
            const siblings = Array.from(element.parentElement.children);
            const index = siblings.indexOf(element);
            // element.classList.add(`delay-${index * 5 + 1}`);
            element.dataset.delay = `${index * 2 + 1}`;
            // console.log("grid set passed")
        }
    })

    //check datasets for delayed elements, those receive a time scalar for trans + anim delay
    document.querySelectorAll('[data-delay]').forEach((element) => {
        // let elClassStr = element.classList.toString();
        // let delayScalar = parseInt(elClassStr.substring(elClassStr.indexOf("delay") + 6))
        let delayScalar = parseInt(element.dataset.delay);

        //data-delay="1" --> 0.1s delay, etc.
        element.style.transitionDelay = delayScalar * 0.1 + "s";
        element.style.animationDelay = delayScalar * 0.1 + "s";
    })
}

//call handling ev
document.addEventListener("readystatechange", handleScrollAnimations);
// handleScrollAnimations(); -- dble call unnecessary

// Scroll events (throttled for performance)
window.addEventListener(
    "scroll",
    throttle(() => {
        handleScrollAnimations()
    }, 20),
)

function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

if (isSafari()) {
    handleScrollAnimations()
}

// window.onbeforeunload = () => {
//     document.querySelectorAll('.in-view').forEach((child) => {
//         this.classList.remove('in-view');
//     })
// }


//link + btn handlers
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-btn');

//hide or show mobile menu
mobileMenuBtn.addEventListener('click', () => {
    // mobileMenu.style.display = 'flex';
    mobileMenu.classList.add('active');
    document.scrollingElement.style.overflow = 'hidden';
});

mobileMenuCloseBtn.addEventListener('click', () => {
    // mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('active');
    document.scrollingElement.style.overflow = 'scroll';
})

//change handling of some default links and btns to avoid conflict
let navLinks = document.querySelectorAll("a")
navLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        unloadPageAndNavigateTo(item.href.toString())
    });
})

const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
contactNavBtn.forEach(el => {
    if (!el) return
    el.addEventListener('click', () => {
        unloadPageAndNavigateTo("/contact.html");
    });
})

const contactHeroBtn = document.getElementById('contact-btn-hero');
const workHeroBtn = document.getElementById('work-btn-hero');

if (contactHeroBtn) {
    contactHeroBtn.addEventListener('click', () => {
        unloadPageAndNavigateTo("/contact.html")
    });
}

if (workHeroBtn) { //ts conditioning avoids anim bugs
    workHeroBtn.addEventListener('click', () => {
        unloadPageAndNavigateTo('/work.html')
    });
}

const contactCTABtn = document.getElementById('contact-btn-cta');
if (contactCTABtn) {
    contactCTABtn.addEventListener('click', () => {
        unloadPageAndNavigateTo('/contact.html')
    })
}

const contactCTABtns = document.querySelectorAll('.contact-btn-cta');
contactCTABtns.forEach(el => {
    if (!el) return
    el.addEventListener('click', () => {
        unloadPageAndNavigateTo('/contact.html')
    })
})

const viewWorkBtn = document.querySelector("section.hero .container .call-to-action .filled-btn.view-work-cta");
if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', () => {
        unloadPageAndNavigateTo('/work.html')
    })
}




//octane logo home button
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        unloadPageAndNavigateTo("/")
    })
})

/**
 * Triggers unload animations and changes DOM HREF to desired route.
 * @param relativePath {string} home directory path of the relative routed page
 * @param timeout {number} time in ms to delay reroute, compensating for animation
 */
function unloadPageAndNavigateTo(relativePath, timeout= 1000) {
    const elsInView = document.querySelectorAll('.in-view:not(.anim-grid,g)')
    const elsArray = Array.from(elsInView)
    const overlay = document.getElementById('overlay')

    overlay.classList.remove("closed")


    setTimeout(() => {
        elsInView.forEach((child) => {
            child.classList.remove('in-view');
            child.classList.add("out-view");

            // mobileMenu.style.display = 'none';
            mobileMenu.classList.remove('active');
            document.scrollingElement.style.overflow = 'scroll';
        })
    }, 200)


    //using dynamic timing to create smoother animation
    if (elsArray[elsArray.length - 1].classList.contains('anim-grid')) {
        setTimeout(() => {
            location.href = relativePath;
        }, timeout)
    } else {
        // elsArray[elsArray.length - 1].addEventListener("transitionstart", () => {
        //     console.log("tran start")
        // })
        setTimeout(() => { location.href = relativePath; }, 1200);
        elsArray[elsArray.length - 1].addEventListener('transitionend', () => {
            // console.log("tran end")
            location.href = relativePath;
            // setTimeout(() => { location.href = relativePath; }, 4000);
        }, { once: true });

        // elsArray[elsArray.length - 1].addEventListener('animationend', () => {
        //     // console.log("tran end")
        //     location.href = relativePath;
        //     // setTimeout(() => { location.href = relativePath; }, 4000);
        // }, { once: true });
        //
        // setTimeout(() => {
        //     location.href = relativePath;
        // }, 3500)
    }



}