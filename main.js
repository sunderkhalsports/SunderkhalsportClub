// Preloader functionality
window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
});

// Tab functionality with smooth transitions
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    // Hide all tab content
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].style.opacity = 0;
    }

    // Remove active class from all buttons
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab content
    document.getElementById(tabName).style.display = "block";

    // Smooth fade-in animation
    setTimeout(function () {
        document.getElementById(tabName).style.opacity = 1;
    }, 100);

    // Add active class to the current button
    evt.currentTarget.className += " active";
}

// Auto-open the first tab by default on page load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.tablinks').click();
});
