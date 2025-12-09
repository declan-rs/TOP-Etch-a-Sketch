// Elements
const grid = document.getElementById("grid");
const blockButton = document.getElementById("block-button");
const darkeningButton = document.getElementById("darkening-button");
const rainbowButton = document.getElementById("rainbow-button");
const resetButton = document.getElementById("reset-button");
const sizeSlider = document.getElementById("size-slider");
const sizeValue = document.getElementById("size-value");

// Settings
let mode = "block";

// Create first grid with default 16x16
createNewGrid(10);

function colourCell() {
    if(mode === "darkening") {
        let curOpacity = parseFloat(this.style.opacity);
        if(!this.classList.contains("coloured")) {
            // First time coloured
            
            this.style.backgroundColor = "black";
            this.style.opacity = 0.1;
        } else if (curOpacity < 1){
            // Already coloured, increase opacity
            this.style.opacity = curOpacity + 0.1;
        }
    } else {
        this.style.backgroundColor = "black";
    }
    this.classList.add("coloured");
}

function reset() {
    let newSize = sizeSlider.value;

    removeGrid();
    createNewGrid(newSize);
}

function changeBlockMode() {
    mode = "block";
    reset();
}

function changeDarkeningMode() {
    mode = "darkening";
    reset();
}

blockButton.addEventListener("click", changeBlockMode);
darkeningButton.addEventListener("click", changeDarkeningMode);
resetButton.addEventListener("click", reset);
sizeSlider.addEventListener("input", () => sizeValue.textContent = sizeSlider.value + "x" + sizeSlider.value);


function removeGrid() {
    while(grid.lastChild) {
        grid.removeChild(grid.lastChild);
    }
}

function createNewGrid(size) {
    for(let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);

        for(let j = 0; j < size; j++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
            cell.addEventListener("mouseover", colourCell);
        }
    }
}
