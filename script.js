const navList = document.getElementById("nav-links");
const hamburgerBtn = document.getElementById("hamburger-menu");
const navItems = document.querySelectorAll(".nav-links a");
const themeToggle = document.getElementById("theme-toggle");

function setMenuState(isOpen) {
    navList.classList.toggle("active", isOpen);
    hamburgerBtn.classList.toggle("active", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
}

function toggleMenu() {
    const isOpen = !navList.classList.contains("active");
    setMenuState(isOpen);
}

hamburgerBtn.addEventListener("click", toggleMenu);

navItems.forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            setMenuState(false);
        }
    });
});

function updateTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

function getInitialTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme");
    return savedTheme === "dark";
}

updateTheme(getInitialTheme());

themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    updateTheme(isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
});

