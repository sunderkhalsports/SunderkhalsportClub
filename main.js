// Preloader functionality: hides the preloader after the page is fully loaded
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500); // Slight delay to smooth out the transition
});

// Functionality for Tab Switching in the Tournaments section
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab (first one is active by default)
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("Indoor").style.display = "block"; // Show the Indoor tab by default
    document.querySelector('.tablinks').classList.add('active'); // Set the first tab button to active
});

// Smooth Scrolling to Sections
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Parallax Scrolling Effect
window.addEventListener('scroll', function () {
    const parallaxSection = document.querySelectorAll('.parallax-section');
    let scrollPos = window.scrollY;

    parallaxSection.forEach(section => {
        section.style.backgroundPositionY = `${scrollPos * 0.5}px`; // Creates the parallax effect
    });
});

// Scroll Reveal Animation: Elements fade in as you scroll down
const revealElements = document.querySelectorAll('.content-section, .parallax-content');

window.addEventListener('scroll', function () {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150; // Adjust reveal point to trigger earlier/later
        if (revealTop < windowHeight - revealPoint) {
            revealElements[i].classList.add('active'); // Reveal element
        } else {
            revealElements[i].classList.remove('active'); // Hide if scrolled back up
        }
    }
});
