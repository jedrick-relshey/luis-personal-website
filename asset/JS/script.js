const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const pageLinks = document.querySelectorAll('a[href$=".html"]');

window.addEventListener("pageshow", () => {
    document.body.classList.add("is-ready");
});

window.addEventListener("load", () => {
    document.body.classList.add("is-ready");
});

if (header && navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

pageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        const target = link.getAttribute("target");

        if (!href || href.startsWith("#") || target === "_blank") {
            return;
        }

        event.preventDefault();
        document.body.classList.remove("is-ready");
        document.body.classList.add("is-leaving");

        setTimeout(() => {
            window.location.href = href;
        }, 280);
    });
});
