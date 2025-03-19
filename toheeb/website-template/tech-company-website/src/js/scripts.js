// This file contains JavaScript code for interactive elements on the website.

// Function to validate the contact form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    if (name === '') {
        alert('Name is required.');
        valid = false;
    }

    if (email === '') {
        alert('Email is required.');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    if (message === '') {
        alert('Message is required.');
        valid = false;
    }

    return valid;
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Event listener for the contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Function to load dynamic content (example)
function loadProducts() {
    // Code to fetch and display products dynamically
}

// Call loadProducts on page load for products.html
if (document.title === 'Products') {
    loadProducts();
}