// Function to toggle the mode and save the preference
function toggleMode() {
    // Toggle the dark-mode class for the body
    document.body.classList.toggle('dark-mode');

    // Also toggle the class for the button if needed
    document.getElementById('modeToggle').classList.toggle('dark-mode');

    // Save the mode in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('colorMode', 'dark');
    } else {
        localStorage.setItem('colorMode', 'light');
    }
}

// Event listener for the mode toggle button
document.getElementById('modeToggle').addEventListener('click', toggleMode);

// Check for saved user preference on page load
window.onload = function() {
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('modeToggle').classList.add('dark-mode');
    }
};

