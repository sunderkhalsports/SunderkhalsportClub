// Loading Screen
window.addEventListener('load', function () {
    const loading = document.getElementById('loading');
    loading.style.display = 'none'; // Hide loading screen after content loads
});

// Language switcher functionality
function changeLanguage(language) {
    const langButton = document.querySelectorAll('.lang-button');
    
    // Update the active button
    langButton.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.lang-button:contains(${language})`).classList.add('active');

    // Text content in different languages
    const texts = {
        en: {
            clubName: "Sunderkhal Sports Club",
            aboutText: "Welcome to Sunderkhal Sports Club, where sportsmanship thrives! Join us for exciting events and activities.",
            sectionTitle: "About Us"
        },
        hi: {
            clubName: "सुंदरखाल स्पोर्ट्स क्लब",
            aboutText: "सुंदरखाल स्पोर्ट्स क्लब में आपका स्वागत है, जहाँ खेल की भावना प्रबल होती है! रोमांचक कार्यक्रमों और गतिविधियों के लिए हमारे साथ जुड़ें।",
            sectionTitle: "हमारे बारे में"
        }
    };

    // Update text content based on selected language
    document.getElementById('club-name').innerText = texts[language].clubName;
    document.getElementById('about-text').innerText = texts[language].aboutText;
    document.querySelectorAll('.section-title').forEach(title => {
        title.innerText = texts[language].sectionTitle;
    });
}

// Tab functionality for switching content
function openTab(evt, facility) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'; // Hide all tab content
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', ''); // Remove active class from all tabs
    }
    document.getElementById(facility).style.display = 'block'; // Show the current tab
    evt.currentTarget.className += ' active'; // Add active class to the clicked tab
}

// Show the default tab on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click(); // Click the first tab to show content
});

// Progress bar functionality
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + '%'; // Update the width of the progress bar
};

// Form submission handler (optional)
document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for contacting us! We will get back to you soon.'); // Show a thank you message
    this.reset(); // Reset the form fields
};
