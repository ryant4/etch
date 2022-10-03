const sketchContainer = document.querySelector('#sketch-container');


function buildGrid () {

    let gridSize = document.getElementById('setting-style')
    let height = gridSize.value;
    let width = height;

    for (let i = 0; i < height; i++) {

    const newLine = document.createElement('div')
    newLine.setAttribute('class', 'container');

        for (let j = 0; j < width; j++) {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'etch-pixel');
            newDiv.addEventListener('mouseenter', () => {
                newDiv.setAttribute('class', 'marked-pixel');
            })
            newLine.appendChild(newDiv);
        }
    sketchContainer.appendChild(newLine);
}
}

function newGrid () {
    while(sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    buildGrid();
}



buildGrid();

const clearButton = document.querySelector('#button-style');
clearButton.addEventListener('click', newGrid);

const sizeSelector = document.querySelector('#setting-style');
sizeSelector.addEventListener('change', newGrid);
