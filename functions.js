//Nav menu settings
document.querySelector(".hamburger").addEventListener("click", function () {
    let menu = document.querySelector(".menu");

    if (menu.style.display === "none" || menu.style.display === "") {
        // Show menu
        menu.style.display = "block"; // Make it visible
        menu.style.animation = "slideDown 0.3s ease-out forwards"; // Play slide-down animation
    } else {
        // Hide menu with animation
        menu.style.animation = "slideUp 0.3s ease-out forwards";

        // Wait for animation to finish before hiding the menu
        setTimeout(() => {
            menu.style.display = "none";
        }, 300); // Match animation duration
    }
});
