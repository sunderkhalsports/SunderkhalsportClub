// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality for Sports Details
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

// Information for each sports program
const sportsInfo = {
    basketball: {
        title: 'Basketball Program',
        description: 'Join our top-notch basketball program where we train players of all skill levels, from beginner to advanced. Enjoy professional coaching, access to tournaments, and state-of-the-art facilities.'
    },
    tennis: {
        title: 'Tennis Program',
        description: 'Our tennis program is designed to enhance your skills and give you the competitive edge. Whether you\'re playing for fun or aiming for professional-level training, we\'ve got something for everyone.'
    },
    swimming: {
        title: 'Swimming Program',
        description: 'Dive into our swimming program with both leisure and competitive training options. We provide expert coaching, Olympic-size pools, and regular competitions to keep you at your best.'
    }
};

// Function to open modal with appropriate details
function openModal(sport) {
    modal.style.display = 'block';
    modalTitle.textContent = sportsInfo[sport].title;
    modalDescription.textContent = sportsInfo[sport].description;
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Lazy loading for images (if needed for performance optimization)
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});
