// Set username from localStorage or default to "Guest"
document.addEventListener('DOMContentLoaded', function() {
    const usernameElement = document.getElementById('username');
    const storedName = localStorage.getItem('username');
    
    if (storedName) {
        usernameElement.textContent = storedName;
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Store name for welcome message
            localStorage.setItem('username', name);
            
            // Update welcome message if on home page
            if (usernameElement) {
                usernameElement.textContent = name;
            }
            
            // Display submitted data
            document.getElementById('resultName').textContent = name;
            document.getElementById('resultEmail').textContent = email;
            document.getElementById('resultPhone').textContent = phone;
            document.getElementById('resultMessage').textContent = message;
            
            document.getElementById('formResult').classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}