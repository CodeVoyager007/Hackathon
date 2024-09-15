// Get references to the button and body element
var themeToggleBtn = document.getElementById('theme-toggle-btn');
var body = document.body;
// Function to toggle theme
function toggleTheme() {
    body.classList.toggle('light-mode'); // Use 'light-mode' for light theme
    // Update button text based on the current theme
    if (body.classList.contains('light-mode')) {
        themeToggleBtn.textContent = 'Switch to Dark Mode'; // Shows option to switch to Dark Mode
    }
    else {
        themeToggleBtn.textContent = 'Switch to Light Mode'; // Shows option to switch to Light Mode
    }
}
// Set initial button text based on current theme
if (body.classList.contains('light-mode')) {
    themeToggleBtn.textContent = 'Switch to Dark Mode'; // If light mode is active
}
else {
    themeToggleBtn.textContent = 'Switch to Light Mode'; // If dark mode is active
}
// Add event listener to the button
themeToggleBtn.addEventListener('click', toggleTheme);
