const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const submitBtn = document.querySelector('.form-submit');
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerText = "Thank You!";
        submitBtn.style.backgroundColor = "#10b981";
        alert(`Thank you, ${name}! Your message was logged. We will email you at ${email} shortly.`);
        contactForm.reset();
    }, 1200);
});
