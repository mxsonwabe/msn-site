// Select the mobile menu button and the navigation links container
const mobileMenuBtn = document.querySelector('.mobileMenu');
const navLinks = document.querySelector('.links');
const navbar = document.querySelector('.navbar'); // Reference to the entire navbar

// Handle toggling mobile menu

// Add a click event listener to the menu button
mobileMenuBtn.addEventListener('click', (event) => {
    // prevent a menuBtn click triggering a document click
    event.stopPropagation();
    toggleMobileMenu();
});

function toggleMobileMenu() {
    const isOpen = navLinks.classList.contains("open")

    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    mobileMenuBtn.classList.add("active")
    navLinks.classList.add("open")
}

function closeMobileMenu() {
    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("open");
}

navbar.addEventListener('click', (event) => {
    // prevent click within the navbar from closing the navbar
    // except for navigation purposes

    event.stopPropagation();
    if (event.target.tagName === 'A') {
        closeMobileMenu();
    }
})

document.addEventListener('click', (event) => {
    // close menu for clicks outside the navbar
    const isMenuOpen = navLinks.classList.contains("open");
    if (isMenuOpen) {
        // prevent meni from closing when not open
        const clickedInsideNavbar = navbar.contains(event.target);
        if (!clickedInsideNavbar) {
            closeMobileMenu();
        }
    }
})

// Handle toggling light mode
const mode = localStorage.getItem("mode") || ""
const toggle = document.querySelector(".toggle")
const body = document.querySelector("body")

document.body.className = mode

toggle.addEventListener("click", () => {
    localStorage.setItem("mode", mode === "light" ? "": "light")
    body.classList.toggle("light")
})

