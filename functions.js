//Nav menu settings
const hamburgerButton = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".menu-close");

function openMenu() {
    menu.classList.add("active");
    hamburgerButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    menu.classList.remove("active");
    hamburgerButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

hamburgerButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

// Update copyright year automatically.
const yearElement = document.querySelector("#year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
}
