// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.section-header, .contact-info, .contact-form, .map-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Form validation
function validateForm() {
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        nameError.style.display = 'block';
        name.classList.add('is-invalid');
        isValid = false;
    } else {
        nameError.style.display = 'none';
        name.classList.remove('is-invalid');
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        emailError.style.display = 'block';
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        emailError.style.display = 'none';
        email.classList.remove('is-invalid');
    }
    
    // Subject validation
    const subject = document.getElementById('subject');
    const subjectError = document.getElementById('subject-error');
    if (!subject.value) {
        subjectError.style.display = 'block';
        subject.classList.add('is-invalid');
        isValid = false;
    } else {
        subjectError.style.display = 'none';
        subject.classList.remove('is-invalid');
    }
    
    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (message.value.trim() === '') {
        messageError.style.display = 'block';
        message.classList.add('is-invalid');
        isValid = false;
    } else {
        messageError.style.display = 'none';
        message.classList.remove('is-invalid');
    }
    
    return isValid;
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        // Show loading state
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call (replace with actual form submission)
        setTimeout(() => {
            // Show success message
            document.getElementById('contactForm').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
            
            // Reset form after 5 seconds (for demo purposes)
            setTimeout(() => {
                document.getElementById('contactForm').reset();
                document.getElementById('contactForm').style.display = 'block';
                document.getElementById('successMessage').style.display = 'none';
                submitBtn.innerHTML = '<i class="fas fa-paper-plane me-2"></i> Send Message';
                submitBtn.disabled = false;
                
                // Remove invalid classes when resetting
                document.querySelectorAll('.is-invalid').forEach(el => {
                    el.classList.remove('is-invalid');
                });
            }, 5000);
        }, 1500);
    }
}

// Input validation on blur
function setupInputValidation() {
    document.getElementById('name').addEventListener('blur', () => {
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            nameError.style.display = 'block';
            name.classList.add('is-invalid');
        } else {
            nameError.style.display = 'none';
            name.classList.remove('is-invalid');
        }
    });
    
    document.getElementById('email').addEventListener('blur', () => {
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.style.display = 'block';
            email.classList.add('is-invalid');
        } else {
            emailError.style.display = 'none';
            email.classList.remove('is-invalid');
        }
    });
    
    document.getElementById('subject').addEventListener('change', () => {
        const subject = document.getElementById('subject');
        const subjectError = document.getElementById('subject-error');
        if (!subject.value) {
            subjectError.style.display = 'block';
            subject.classList.add('is-invalid');
        } else {
            subjectError.style.display = 'none';
            subject.classList.remove('is-invalid');
        }
    });
    
    document.getElementById('message').addEventListener('blur', () => {
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === '') {
            messageError.style.display = 'block';
            message.classList.add('is-invalid');
        } else {
            messageError.style.display = 'none';
            message.classList.remove('is-invalid');
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Form event listeners
    document.getElementById('contactForm').addEventListener('submit', handleSubmit);
    
    // Setup input validation
    setupInputValidation();
});
