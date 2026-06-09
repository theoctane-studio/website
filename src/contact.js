

const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
contactNavBtn.forEach(el => {
    el.addEventListener('click', () => {

        location.href = '/contact.html';

    });
})

//logo home button
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        location.href = '/';
    })
})

const bars = document.querySelectorAll("main section.hero .container .window svg g");

bars.forEach((bar, i) => {
    const offset = (bars.length / 2 - i) * 1.5;

    bar.style.transformOrigin = "center";
    bar.style.transition = "transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)";

    bar.addEventListener("mouseenter", () => {
        bar.style.transform = `translateY(-${1.2 * Math.abs(bars.length * 1.5 /2)}px) scaleY(${1 + Math.abs(offset) * 0.01})`;
    });

    bar.addEventListener("mouseleave", () => {
        bar.style.transform = "translateY(0px) scaleY(1)";
    });
});