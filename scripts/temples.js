const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const offScreenMenuLinks = document.querySelectorAll(".off-screen-menu ul li a");
const nav = document.querySelector("nav");

// Function to toggle the visibility of the hamburger menu based on screen width
function toggleHamMenu() {
    if (window.innerWidth <= 640) {
        hamMenu.style.display = "block";
        nav.style.display = "none";
    } else {
        hamMenu.style.display = "none";
        nav.style.display = "flex";
    }
}

// Initial toggle based on screen width
toggleHamMenu();

// Event listener for window resize to toggle the hamburger menu
window.addEventListener("resize", toggleHamMenu);

// Event listener for hamburger menu click
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Close the off-screen menu when a link is clicked
offScreenMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
    });
});

// Update copyright year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Update last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;


/*
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Update copyright year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

//Update last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
*/