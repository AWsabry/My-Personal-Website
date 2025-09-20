document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get all form inputs
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const phone = document.getElementById('contact-phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('contact-message').value;

        // Clear all form fields
        document.getElementById('contact-name').value = '';
        document.getElementById('contact-email').value = '';
        document.getElementById('contact-phone').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('contact-message').value = '';

        // Create and show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert-success tmp-fade-in';
        successDiv.style.cssText = 'background-color: rgba(40, 167, 69, 0.1); color: #28a745; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center;';
        successDiv.innerHTML = '<strong>Thank you for reaching out!</strong><br>I will get back to you soon.';

        // Insert success message after the form
        form.insertAdjacentElement('afterend', successDiv);

        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    });
});