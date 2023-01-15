//Updating the color theme when the user clicks on the button

//select all buttons
const themeSelector = document.querySelectorAll(".themes");
const themeButtons = themes.querySelectorAll("button");

//logs the button that was clicked
const handleChosenTheme = (event) => {
    console.log(event.target);
    }

//adds event listener to each button
themeButtons.forEach((button) => {
    button.addEventListener("click", handleChosenTheme);
    }
);
