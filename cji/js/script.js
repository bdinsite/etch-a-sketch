// VARIABLES
let canvasSize = 16;

// CREATE ELEMENTS FOR CANVAS
var divContainer = document.createElement('div');

// ADD ATTRIBUTES TO ELEMENTS
divContainer.className = 'container';

// GRAB ELEMENTS
const main = document.querySelector('main');
const container = document.querySelector('.container');

// INSERT ELEMENTS
main.appendChild(divContainer);

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