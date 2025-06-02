function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let extraText = document.getElementById("extra");

    // Check current display style and toggle it
    if (extraText.style.display === "block") {
        extraText.style.display = "none";
        button.textContent = "More";
    } else {
        extraText.style.display = "block";
        button.textContent = "Less";
    }
}