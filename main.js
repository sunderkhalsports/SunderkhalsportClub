// script.js

// Preloader
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0'; // Fade out effect
        setTimeout(() => {
            preloader.style.display = 'none'; // Remove from DOM after fade
        }, 500);
    }, 1000); // Display for 1 second
});

// Tabs Functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an 'active' class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Smooth Scrolling for Navigation
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetPosition = document.querySelector(targetId).offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Initialize first tab as open
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click(); // Click the first tab by default
});
