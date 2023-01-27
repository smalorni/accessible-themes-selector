
//create a function that when a button is clicked, it will change the color of background to the specific button color

const background = document.querySelector('body');

const defaultColor = document.body.style.background = '#ce0606';

function changeBackground(color) {
    background.style.backgroundColor = color;
}

window.setTimeout('changeBackground()', 1000);




















