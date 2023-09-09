// VARIABLES
let canvasSize = 16;

// CREATE ELEMENTS FOR CANVAS
var divContainer = document.createElement('div');
const inputContainer = document.createElement('div');
const input = document.createElement('input');
const textInput = document.createElement('input');
const button = document.createElement('button');

// ADD ATTRIBUTES TO ELEMENTS
divContainer.className = 'container';
inputContainer.className = "inputContainer";
input.setAttribute('type', 'range');
input.setAttribute('min', '16');
input.setAttribute('max', '64');
input.setAttribute('id', 'changeValue');
input.setAttribute('onchange', 'updateTextInput(this.value);');
textInput.setAttribute('id', 'textInput');
textInput.setAttribute('value', '16');
button.textContent = 'Resize Canvas';

// GRAB ELEMENTS
const main = document.querySelector('main');
const container = document.querySelector('.container');
const header = document.querySelector('header');

// INSERT ELEMENTS
main.appendChild(divContainer);
header.appendChild(inputContainer);
inputContainer.appendChild(input);
inputContainer.appendChild(textInput);
inputContainer.appendChild(button);

// CREATE CANVAS ON STARTUP (!&x16)
for(let i = 0; i < canvasSize; i++){
    let rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    divContainer.appendChild(rowDiv);
    for(let j = 0; j < canvasSize; j++){
        let colDiv = document.createElement('div');
        colDiv.className = 'col';
        rowDiv.appendChild(colDiv);
    }
}

// ADD MOUSEOVER COLORS
const colorDivs = document.querySelectorAll('.col');

colorDivs.forEach((div) => {
    div.addEventListener('mouseover', changeColor);
});

function changeColor(evt){
    let r = (Math.floor(Math.random()*256));
    let g = (Math.floor(Math.random()*256));
    let b = (Math.floor(Math.random()*256));
    evt.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}