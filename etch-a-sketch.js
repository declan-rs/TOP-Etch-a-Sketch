const container = document.querySelector("#container");
// Create first grid with default 16x16
createNewGrid(16);

function colourCell() {
    this.classList.add("coloured");
}

function reset() {
    let newSize = prompt("What size do you want the grid? (max 100)");
    if(!Number.isInteger(+newSize)) {
        reset();
        return;
    } else if(newSize.trim(" ") === "") {
        reset();
        return;
    }else if(newSize > 100) {
        newSize = 100;
    }

    removeGrid();
    createNewGrid(newSize);
}

document.getElementById('reset').addEventListener('click', reset);

function removeGrid() {
    while(container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

function createNewGrid(size) {
    for(let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);

        for(let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
            cell.addEventListener('mouseover', colourCell);
        }
    }
}
