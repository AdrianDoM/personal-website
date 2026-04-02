const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

if (!localStorage.theme) {
    // Set preferred color theme
    localStorage.setItem("theme", preferredTheme);
}

function switchTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
}