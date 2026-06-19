const hero = document.querySelector("main section.hero");
const glow = document.querySelector("main section.hero .container .hero-glow");

hero.addEventListener("mousemove", e => {
    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.transform =
        `translate3d(${x - 200}px, ${y - 200}px, 0)`;
});

hero.addEventListener("mouseleave", e => {
    glow.style.opacity = 0;
})

hero.addEventListener("mouseenter", e => {
    glow.style.opacity = 1;
})

