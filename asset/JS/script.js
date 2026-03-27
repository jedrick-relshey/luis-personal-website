const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

if (header && navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}
