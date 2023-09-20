const see_more_toggles = document.querySelectorAll(".has-see-more");
const see_mores = document.querySelectorAll(".has-see-more + div");

[...see_more_toggles].map((toggle, i) => {
    let input = toggle.querySelector("label>input");
    input.addEventListener("change", () => {
        if (input.checked) {
            see_mores[i].dataset.shown = "yes";
        } else {
            see_mores[i].dataset.shown = "no";
        }
    });
});