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

// Update the canvas size figure in the text box
function updateTextInput(val) {
    document.getElementById('textInput').value=val;
}

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

// CREATE CANVAS ON STARTUP (16x16)
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

// CREATE CANVAS ON BUTTON CLICK
const myButton = document.querySelector('button');
myButton.addEventListener('click', createCanvas);

function createCanvas(){
    removeItem();
    canvasSize = input.value;
    var divContainer = document.createElement('div');
    divContainer.className = "container";
    main.appendChild(divContainer);
    
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

    // ADD MOUSEOVER COLORS TO CANVAS AFTER RESIZE
    const divs = document.querySelectorAll('.col');
    divs.forEach((div) => {
        div.addEventListener('mouseover', changeColor);
    });
    
    function changeColor(evt){
        let r = (Math.floor(Math.random()*256));
        let g = (Math.floor(Math.random()*256));
        let b = (Math.floor(Math.random()*256));
        evt.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }

}

// REMOVE OLD CANVAS
function removeItem(){
    let container = document.querySelector('.container');
    container.remove();
}