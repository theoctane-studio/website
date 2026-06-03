

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