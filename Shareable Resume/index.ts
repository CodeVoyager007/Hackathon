// Function to handle image upload and display the selected image
function handleImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImg = document.getElementById('profile-img') as HTMLImageElement;
            profileImg.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
}

// Function to toggle the theme (dark/light mode)
function toggleTheme(): void {
    const body = document.body;
    const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    
    // Toggle the theme
    body.classList.toggle('light-mode');

    // Save the selected theme to localStorage
    const newTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
}

// Load theme from localStorage when the page loads
function loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
}

// Function to save form data to localStorage
function saveToLocalStorage(key: string): void {
    const formData = {
        name: (document.getElementById('nameInput') as HTMLInputElement).value,
        jobTitle: (document.getElementById('jobTitleInput') as HTMLInputElement).value,
        address: (document.getElementById('addressInput') as HTMLInputElement).value,
        email: (document.getElementById('emailInput') as HTMLInputElement).value,
        phone: (document.getElementById('phoneInput') as HTMLInputElement).value,
        skills: (document.getElementById('skillsInput') as HTMLInputElement).value,
        languages: (document.getElementById('languagesInput') as HTMLInputElement).value,
        aboutMe: (document.getElementById('aboutMeInput') as HTMLTextAreaElement).value,
        education: (document.getElementById('educationInput') as HTMLTextAreaElement).value,
        projects: (document.getElementById('projectsInput') as HTMLTextAreaElement).value,
        certifications: (document.getElementById('certificationsInput') as HTMLTextAreaElement).value,
    };

    // Store form data in localStorage using a unique key
    localStorage.setItem(key, JSON.stringify(formData));
}

// Function to load form data from localStorage using the unique key
function loadFromLocalStorage(key: string): void {
    const savedData = localStorage.getItem(key);
    if (savedData) {
        const formData = JSON.parse(savedData);

        // Pre-fill the form fields with saved data
        (document.getElementById('nameInput') as HTMLInputElement).value = formData.name || '';
        (document.getElementById('jobTitleInput') as HTMLInputElement).value = formData.jobTitle || '';
        (document.getElementById('addressInput') as HTMLInputElement).value = formData.address || '';
        (document.getElementById('emailInput') as HTMLInputElement).value = formData.email || '';
        (document.getElementById('phoneInput') as HTMLInputElement).value = formData.phone || '';
        (document.getElementById('skillsInput') as HTMLInputElement).value = formData.skills || '';
        (document.getElementById('languagesInput') as HTMLInputElement).value = formData.languages || '';
        (document.getElementById('aboutMeInput') as HTMLTextAreaElement).value = formData.aboutMe || '';
        (document.getElementById('educationInput') as HTMLTextAreaElement).value = formData.education || '';
        (document.getElementById('projectsInput') as HTMLTextAreaElement).value = formData.projects || '';
        (document.getElementById('certificationsInput') as HTMLTextAreaElement).value = formData.certifications || '';
    }
}

// Function to generate a unique identifier (UUID alternative)
function generateUniqueID(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Function to update the resume fields and display the resume
function showResume(): void {
    // Generate a unique ID for the current resume
    const uniqueID = generateUniqueID();

    // Save data to localStorage using the unique ID as the key
    saveToLocalStorage(uniqueID);

    // Get the form values and update resume
    const name = (document.getElementById('nameInput') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitleInput') as HTMLInputElement).value;
    const address = (document.getElementById('addressInput') as HTMLInputElement).value;
    const email = (document.getElementById('emailInput') as HTMLInputElement).value;
    const phone = (document.getElementById('phoneInput') as HTMLInputElement).value;
    const skills = (document.getElementById('skillsInput') as HTMLInputElement).value;
    const languages = (document.getElementById('languagesInput') as HTMLInputElement).value;
    const aboutMe = (document.getElementById('aboutMeInput') as HTMLTextAreaElement).value;
    const education = (document.getElementById('educationInput') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projectsInput') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certificationsInput') as HTMLTextAreaElement).value;

    // Update the resume fields
    if (name) {
        (document.getElementById('name-display') as HTMLElement).innerText = name;
    }
    if (jobTitle) {
        (document.getElementById('job-title-display') as HTMLElement).innerText = jobTitle;
    }
    if (address) {
        (document.getElementById('resume-address') as HTMLElement).innerText = address;
    }
    if (email) {
        (document.getElementById('resume-email') as HTMLElement).innerText = email;
    }
    if (phone) {
        (document.getElementById('resume-phone') as HTMLElement).innerText = phone;
    }
    if (skills) {
        const skillsArray = skills.split(',');
        const skillsSection = document.getElementById('skills') as HTMLElement;
        skillsSection.innerHTML = '<h2>Skills</h2>';
        skillsArray.forEach(skill => {
            skillsSection.innerHTML += `<div class="skill"><p class="skill-label">${skill.trim()}</p></div>`;
        });
    }
    if (languages) {
        const languagesArray = languages.split(',');
        const languagesSection = document.getElementById('languages') as HTMLElement;
        languagesSection.innerHTML = '<h2>Languages</h2>';
        languagesArray.forEach(language => {
            languagesSection.innerHTML += `<p class="language">${language.trim()}</p>`;
        });
    }
    if (aboutMe) {
        (document.getElementById('about-me') as HTMLElement).innerText = aboutMe;
    }
    if (education) {
        const educationArray = education.split(',');
        const educationSection = document.getElementById('education') as HTMLElement;
        educationSection.innerHTML = ''; // Clear existing education
        educationArray.forEach(edu => {
            educationSection.innerHTML += `<li>${edu.trim()}</li>`;
        });
    }
    if (projects) {
        const projectsArray = projects.split(',');
        const projectsSection = document.querySelector('.timeline') as HTMLElement;
        projectsSection.innerHTML = ''; // Clear existing projects
        projectsArray.forEach(project => {
            projectsSection.innerHTML += `
                <div class="timeline-item">
                    <div class="project-content">
                        <h3>${project.trim()}</h3>
                    </div>
                </div>`;
        });
    }
    if (certifications) {
        const certificationsArray = certifications.split(',');
        const certificationsSection = document.getElementById('certifications') as HTMLElement;
        certificationsSection.innerHTML = ''; // Clear existing certifications
        certificationsArray.forEach(cert => {
            certificationsSection.innerHTML += `<li>${cert.trim()}</li>`;
        });
    }

    // Generate a shareable URL
    const shareableURL = `${window.location.origin}?id=${encodeURIComponent(uniqueID)}`;
    const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
    const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;

    // Show the resume section after updating
    const resumeContainer = document.querySelector('.resume-container') as HTMLElement;
    resumeContainer.classList.add('show-resume');
}

// Load theme and form data on page load
window.addEventListener('DOMContentLoaded', () => {
    loadTheme();

    // Check if the URL has an id parameter
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        loadFromLocalStorage(id); // Load the resume data if id exists in the URL
    }
});

// Add event listener for the theme toggle button
document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

// Add event listener for the image upload
document.getElementById('profile-img-input')?.addEventListener('change', handleImageUpload);

// Add event listener for downloading resume as PDF
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
