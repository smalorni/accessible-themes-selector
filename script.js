const colorPicker = document.getElementById("color-picker");

colorPicker.addEventListener("change", (event) => {
    if (event.target.classList.contains("color-option")) {
    const selectedColor = event.target.id;

    // Change the state of the buttons
    Array.from(colorPicker.children).forEach((el) => {
        el.setAttribute("aria-pressed", "false");
    });
    event.target.setAttribute("aria-pressed", "true");

    //change the background when button is clicked
    document.body.style.backgroundColor = selectedColor;
    
    // Change the theme of the page
    document.body.style.setProperty("--main-color", selectedColor);
    
    // Save the selected theme
    localStorage.setItem("color", selectedColor);
    }
});

const savedColor = localStorage.getItem("color");
    if (savedColor) {
    document.body.style.setProperty("--main-color", savedColor);
    document.getElementById(savedColor).setAttribute("aria-pressed", "true");
};

