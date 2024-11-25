// JavaScript code to trigger animations when scrolling

// Create an IntersectionObserver to trigger animations when sections are in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1; // Make section visible
            entry.target.style.transform = 'translateY(0)'; // Reset transform
            observer.unobserve(entry.target); // Stop observing this section
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is in view

// Observe all sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    observer.observe(section);
});
