// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('.contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if(!name || !email || !message) {
            alert('Lütfen tüm alanları doldurun!');
            return;
        }
        
        if(!isValidEmail(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin!');
            return;
        }
        
        // Form gönderme işlemi burada yapılacak
        console.log('Form gönderildi:', {name, email, message});
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
} 