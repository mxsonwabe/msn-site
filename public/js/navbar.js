// Select the mobile menu button and the navigation links container
const mobileMenuBtn = document.querySelector('.mobileMenu');
const navLinks = document.querySelector('.links');

// Add a click event listener to the menu button
mobileMenuBtn.addEventListener('click', () => {
    // Toggle the 'active' class on the button for the icon animation
    mobileMenuBtn.classList.toggle('active');
    // Toggle the 'open' class on the links to show/hide the menu
    navLinks.classList.toggle('open');
});
