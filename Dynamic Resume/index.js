var _a, _b;
// Function to handle image upload and display the selected image
function handleImageUpload(event) {
    var _a;
    var input = event.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var profileImg = document.getElementById('profile-img');
            profileImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
}
// Function to toggle the theme (dark/light mode)
function toggleTheme() {
    var body = document.body;
    var currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    // Toggle the theme
    body.classList.toggle('light-mode');
    // Save the selected theme to localStorage
    var newTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
}
// Load theme from localStorage when the page loads
function loadTheme() {
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}
// Function to save form data to localStorage
function saveToLocalStorage() {
    var formData = {
        name: document.getElementById('nameInput').value,
        jobTitle: document.getElementById('jobTitleInput').value,
        address: document.getElementById('addressInput').value,
        email: document.getElementById('emailInput').value,
        phone: document.getElementById('phoneInput').value,
        skills: document.getElementById('skillsInput').value,
        languages: document.getElementById('languagesInput').value,
        aboutMe: document.getElementById('aboutMeInput').value,
        education: document.getElementById('educationInput').value,
        projects: document.getElementById('projectsInput').value,
        certifications: document.getElementById('certificationsInput').value,
    };
    // Store form data in localStorage
    localStorage.setItem('resumeData', JSON.stringify(formData));
}
// Load form data from localStorage and pre-fill the form
function loadFromLocalStorage() {
    var savedData = localStorage.getItem('resumeData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        // Pre-fill the form fields with saved data
        document.getElementById('nameInput').value = formData.name || '';
        document.getElementById('jobTitleInput').value = formData.jobTitle || '';
        document.getElementById('addressInput').value = formData.address || '';
        document.getElementById('emailInput').value = formData.email || '';
        document.getElementById('phoneInput').value = formData.phone || '';
        document.getElementById('skillsInput').value = formData.skills || '';
        document.getElementById('languagesInput').value = formData.languages || '';
        document.getElementById('aboutMeInput').value = formData.aboutMe || '';
        document.getElementById('educationInput').value = formData.education || '';
        document.getElementById('projectsInput').value = formData.projects || '';
        document.getElementById('certificationsInput').value = formData.certifications || '';
    }
}
// Function to update the resume fields and display the resume
function showResume() {
    // Get the form values and update resume
    var name = document.getElementById('nameInput').value;
    var jobTitle = document.getElementById('jobTitleInput').value;
    var address = document.getElementById('addressInput').value;
    var email = document.getElementById('emailInput').value;
    var phone = document.getElementById('phoneInput').value;
    var skills = document.getElementById('skillsInput').value;
    var languages = document.getElementById('languagesInput').value;
    var aboutMe = document.getElementById('aboutMeInput').value;
    var education = document.getElementById('educationInput').value;
    var projects = document.getElementById('projectsInput').value;
    var certifications = document.getElementById('certificationsInput').value;
    // Update the resume fields
    if (name) {
        document.getElementById('name-display').innerText = name;
    }
    if (jobTitle) {
        document.getElementById('job-title-display').innerText = jobTitle;
    }
    if (address) {
        document.getElementById('resume-address').innerText = address;
    }
    if (email) {
        document.getElementById('resume-email').innerText = email;
    }
    if (phone) {
        document.getElementById('resume-phone').innerText = phone;
    }
    if (skills) {
        var skillsArray = skills.split(',');
        var skillsSection_1 = document.getElementById('skills');
        skillsSection_1.innerHTML = '<h2>Skills</h2>';
        skillsArray.forEach(function (skill) {
            skillsSection_1.innerHTML += "<div class=\"skill\"><p class=\"skill-label\">".concat(skill.trim(), "</p></div>");
        });
    }
    if (languages) {
        var languagesArray = languages.split(',');
        var languagesSection_1 = document.getElementById('languages');
        languagesSection_1.innerHTML = '<h2>Languages</h2>';
        languagesArray.forEach(function (language) {
            languagesSection_1.innerHTML += "<p class=\"language\">".concat(language.trim(), "</p>");
        });
    }
    if (aboutMe) {
        document.getElementById('about-me').innerText = aboutMe;
    }
    if (education) {
        var educationArray = education.split(',');
        var educationSection_1 = document.getElementById('education');
        educationSection_1.innerHTML = ''; // Clear existing education
        educationArray.forEach(function (edu) {
            educationSection_1.innerHTML += "<li>".concat(edu.trim(), "</li>");
        });
    }
    if (projects) {
        var projectsArray = projects.split(',');
        var projectsSection_1 = document.querySelector('.timeline');
        projectsSection_1.innerHTML = ''; // Clear existing projects
        projectsArray.forEach(function (project) {
            projectsSection_1.innerHTML += "\n              <div class=\"timeline-item\">\n                  <div class=\"project-content\">\n                      <h3>".concat(project.trim(), "</h3>\n                  </div>\n              </div>");
        });
    }
    if (certifications) {
        var certificationsArray = certifications.split(',');
        var certificationsSection_1 = document.getElementById('certifications');
        certificationsSection_1.innerHTML = ''; // Clear existing certifications
        certificationsArray.forEach(function (cert) {
            certificationsSection_1.innerHTML += "<li>".concat(cert.trim(), "</li>");
        });
    }
    // Save data to localStorage after submission
    saveToLocalStorage();
    // Show the resume section after updating
    var resumeContainer = document.querySelector('.resume-container');
    resumeContainer.classList.add('show-resume');
}
// Load theme and form data on page load
window.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    loadFromLocalStorage();
});
// Add event listener for the theme toggle button
(_a = document.getElementById('theme-toggle-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleTheme);
// Add event listener for the image upload
(_b = document.getElementById('profile-img-input')) === null || _b === void 0 ? void 0 : _b.addEventListener('change', handleImageUpload);
