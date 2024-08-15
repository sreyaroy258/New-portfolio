/*navbar-section*/
const hamMenu = document.querySelector(".ham-menu");

const navLink = document.querySelector(".nav-li");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navLink.classList.toggle("active");
});

// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        successMessage.textContent = '';

        // Validation
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email address';
            isValid = false;
        }

        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
            isValid = false;
        }

        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        }

        // If form is valid, display a success message (or handle the submission)
        if (isValid) {
            successMessage.textContent = 'Thank you for contacting us!';
            form.reset(); // Reset the form
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
