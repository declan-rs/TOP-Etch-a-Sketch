// Elements
const container = document.querySelector("#container");
const resetButton = document.getElementById("resetButton");
const sizeSlider = document.getElementById("sizeSlider");
const sizeValue = document.getElementById("sizeValue");

// Create first grid with default 16x16
createNewGrid(16);

function colourCell() {
    this.classList.add("coloured");
}

function reset() {
    let newSize = document.getElementById("sizeSlider").value;

    removeGrid();
    createNewGrid(newSize);
}

resetButton.addEventListener("click", reset);
sizeSlider.addEventListener("input", () => sizeValue.textContent = sizeSlider.value + "x" + sizeSlider.value);

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
            cell.addEventListener("mouseover", colourCell);
        }
    }
}
