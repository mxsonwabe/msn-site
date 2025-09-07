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

const mode = localStorage.getItem("mode") || ""
const toggle = document.querySelector(".toggle")
const body = document.querySelector("body")

document.body.className = mode

toggle.addEventListener("click", () => {
    localStorage.setItem("mode", mode === "light" ? "": "light")
    body.classList.toggle("light")
})

