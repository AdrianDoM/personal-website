if (!localStorage.theme) {
    // Set preferred color theme
    let dark_query = window.matchMedia("(prefers-color-scheme: dark)");
    if (dark_query.matches) {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
}

const theme_toggle_input = document.querySelector(".theme-toggle input");
const theme_toggle_sun = document.querySelector(".theme-toggle>span:first-child");
const theme_toggle_moon = document.querySelector(".theme-toggle>span:last-child");

applyTheme();

function applyTheme() {
    document.documentElement.dataset.theme = localStorage.theme;
    if (localStorage.theme == "dark") {
        theme_toggle_input.checked = true;
        theme_toggle_sun.style.transition = "";
        theme_toggle_sun.style.transform = "";
        theme_toggle_moon.style.transition = "transform 2s";
        theme_toggle_moon.style.transform = "rotate(360deg)";
    } else {
        theme_toggle_input.checked = false;
        theme_toggle_moon.style.transition = "";
        theme_toggle_moon.style.transform = "";
        theme_toggle_sun.style.transition = "transform 2s";
        theme_toggle_sun.style.transform = "rotate(360deg)";
    }
}

function toggleTheme() {
    if (localStorage.theme == "light") {
        localStorage.theme = "dark";
    } else {
        localStorage.theme = "light";
    }
    applyTheme();
}

theme_toggle_input.addEventListener("change", () => {
    toggleTheme();
});