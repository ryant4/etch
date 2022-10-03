const sketchContainer = document.querySelector('#sketch-container');


function buildGrid () {

    let height = 40;
    let width = 40;

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

function eraseGrid () {
    while(sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }

}

buildGrid();

eraseGrid();

buildGrid();
