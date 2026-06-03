

const contactNavBtn = document.querySelectorAll('.contact-btn-nav');
contactNavBtn.forEach(el => {
    el.addEventListener('click', () => {

        location.href = '/contact.html';

    });
})