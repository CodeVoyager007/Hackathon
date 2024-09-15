// Get references to the button, body, sections, and image input
const themeToggleBtn = document.getElementById('theme-toggle-btn') as HTMLButtonElement;
const body = document.body;
const sectionInputs = document.querySelectorAll<HTMLInputElement>('.section-input');
const sectionDisplay = document.querySelectorAll<HTMLElement>('.section-display');
const profileImgInput = document.getElementById('profile-img-input') as HTMLInputElement;
const profileImg = document.getElementById('profile-img') as HTMLImageElement;

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
  } else {
    themeToggleBtn.textContent = 'Switch to Light Mode'; // Update text for switching to Light Mode
  }
}

// Function to update the content of sections
function updateSections() {
  sectionInputs.forEach((input, index) => {
    sectionDisplay[index].textContent = input.value; // Update the section content with user input
  });
}

// Function to handle image upload
function handleImageUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        profileImg.src = e.target.result as string; // Update the profile image src with the uploaded image
      }
    };
    reader.readAsDataURL(file); // Read the uploaded file as a data URL
  }
}

// Add event listener to the button for click events
themeToggleBtn.addEventListener('click', toggleTheme);

// Add event listeners to each input field for real-time section updates
sectionInputs.forEach((input) => {
  input.addEventListener('input', updateSections);
});

// Add event listener for image upload
profileImgInput.addEventListener('change', handleImageUpload);

// Set initial theme on page load
setInitialTheme();
