// Mobile Responsive Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth close when clicking a link on mobile
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Contact Form Notification UI Trigger
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const submitBtn = document.querySelector('.form-submit');
    submitBtn.innerText = "Sending Message...";
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.innerText = "Message Sent!";
        submitBtn.style.backgroundColor = "#10b981"; // Changes button color to green on success
        submitBtn.style.color = "#ffffff";
        alert(`Thank you, ${name}! Your custom design inquiry has been logged. InkPalette PH will reach back out to you shortly!`);
        contactForm.reset();
    }, 1200);
});
