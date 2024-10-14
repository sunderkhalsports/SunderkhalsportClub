// script.js

// Function to handle tab switching
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Preloader functionality
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Automatically click the first tab to display it
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName('tablinks')[0].click();
});
