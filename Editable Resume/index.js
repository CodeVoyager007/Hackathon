// Get references to the button, body, sections, and image input
var themeToggleBtn = document.getElementById('theme-toggle-btn');
var body = document.body;
var sectionInputs = document.querySelectorAll('.section-input');
var sectionDisplay = document.querySelectorAll('.section-display');
var profileImgInput = document.getElementById('profile-img-input');
var profileImg = document.getElementById('profile-img');
// Set Light Mode as the default
function setInitialTheme() {
    if (!body.classList.contains('light-mode')) {
        body.classList.add('light-mode'); // Default to light mode
    }
    // Update the button text based on the initial theme
    themeToggleBtn.textContent = 'Switch to Dark Mode';
}
// Function to toggle the theme between light and dark mode
function toggleTheme() {
    body.classList.toggle('light-mode'); // Toggle 'light-mode' class on the body element
    // Update button text based on the current theme
    if (body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = 'Switch to Dark Mode'; // Update text for switching to Dark Mode
    }
    else {
        themeToggleBtn.textContent = 'Switch to Light Mode'; // Update text for switching to Light Mode
    }
}
// Function to update the content of sections
function updateSections() {
    sectionInputs.forEach(function (input, index) {
        sectionDisplay[index].textContent = input.value; // Update the section content with user input
    });
}
// Function to handle image upload
function handleImageUpload(event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                profileImg.src = e.target.result; // Update the profile image src with the uploaded image
            }
        };
        reader.readAsDataURL(file); // Read the uploaded file as a data URL
    }
}
// Add event listener to the button for click events
themeToggleBtn.addEventListener('click', toggleTheme);
// Add event listeners to each input field for real-time section updates
sectionInputs.forEach(function (input) {
    input.addEventListener('input', updateSections);
});
// Add event listener for image upload
profileImgInput.addEventListener('change', handleImageUpload);
// Set initial theme on page load
setInitialTheme();
