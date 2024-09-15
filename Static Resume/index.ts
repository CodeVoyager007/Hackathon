// Get references to the button and body element
const themeToggleBtn = document.getElementById('theme-toggle-btn') as HTMLButtonElement;
const body = document.body;

// Function to toggle the theme between light and dark mode
function toggleTheme() {
  body.classList.toggle('light-mode'); // Toggle 'light-mode' class on the body element

  // Update button text based on the current theme
  if (body.classList.contains('light-mode')) {
    themeToggleBtn.textContent = 'Switch to Dark Mode'; // Update text for switching to Dark Mode
  } else {
    themeToggleBtn.textContent = 'Switch to Light Mode'; // Update text for switching to Light Mode
  }
}

// Set initial button text based on the current theme
if (body.classList.contains('light-mode')) {
  themeToggleBtn.textContent = 'Switch to Dark Mode'; // Light mode is active
} else {
  themeToggleBtn.textContent = 'Switch to Light Mode'; // Dark mode is active
}

// Add event listener to the button for click events
themeToggleBtn.addEventListener('click', toggleTheme);
