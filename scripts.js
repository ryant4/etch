
const sketchContainer = document.querySelector('#sketch-container');
let height = 80;
let width = 80;

for (let i = 0; i < height; i++) {

    const newLine = document.createElement('div')
    newLine.setAttribute('class', 'container');

    for (let j = 0; j < width; j++) {
        const newDiv = document.createElement('div');
        newLine.appendChild(newDiv);

    }

    sketchContainer.appendChild(newLine);

}