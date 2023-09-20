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

applyTheme();

function applyTheme() {
    document.documentElement.dataset.theme = localStorage.theme;
    theme_toggle_input.checked = localStorage.theme == "dark";
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