// Tab functionality for switching facilities
function openTab(evt, facility) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(facility).style.display = 'block';
    evt.currentTarget.className += ' active';
}

// Scroll Progress Bar
window.onscroll = function() { progressBar(); };

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%';
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document
            .querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // Here, you can add code to send form data to your email or server
});
