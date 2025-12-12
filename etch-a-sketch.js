// Elements
const grid = document.getElementById("grid");
const blockButton = document.getElementById("block-button");
const darkeningButton = document.getElementById("darkening-button");
const rainbowButton = document.getElementById("rainbow-button");
const colourSelection = document.getElementById("colour-selection");
const resetButton = document.getElementById("reset-button");
const sizeSlider = document.getElementById("size-slider");
const sizeValue = document.getElementById("size-value");

// Settings
let mode = "block";
let colour = "black";

// Create first grid with default 16x16
createNewGrid(50);

// ==================== BUTTONS ====================
function colourCell() {
    if(mode === "darkening") {
        let curOpacity = parseFloat(this.style.opacity);
        if(!this.classList.contains("coloured")) {
            // First time coloured
            
            this.style.backgroundColor = colour;
            this.style.opacity = 0.1;
        } else if (curOpacity < 1){
            // Already coloured, increase opacity
            this.style.opacity = curOpacity + 0.1;
        }
    } else if(mode === "rainbow") {
        let randR = Math.floor(Math.random() * 256);
        let randG = Math.floor(Math.random() * 256);
        let randB = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;

    } else {
        this.style.backgroundColor = colour;
        this.style.opacity = 1;
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
    colourSelection.style.display = 'block';
}

function changeDarkeningMode() {
    mode = "darkening";
    colourSelection.style.display = 'block';
}

function changeRainbowMode() {
    mode = "rainbow";
    colourSelection.style.display = 'none';
}

blockButton.addEventListener("click", changeBlockMode);
darkeningButton.addEventListener("click", changeDarkeningMode);
rainbowButton.addEventListener("click", changeRainbowMode);
resetButton.addEventListener("click", reset);
sizeSlider.addEventListener("input", () => sizeValue.textContent = sizeSlider.value + "x" + sizeSlider.value);
document.getElementById("colour1").addEventListener("click", () => colour = "#9e0142");
document.getElementById("colour2").addEventListener("click", () => colour = "#d53e4f");
document.getElementById("colour3").addEventListener("click", () => colour = "#f46d43");
document.getElementById("colour4").addEventListener("click", () => colour = "#fdae61");
document.getElementById("colour5").addEventListener("click", () => colour = "#fee08b");
document.getElementById("colour6").addEventListener("click", () => colour = "#e6f598");
document.getElementById("colour7").addEventListener("click", () => colour = "#abdda4");
document.getElementById("colour8").addEventListener("click", () => colour = "#66c2a5");
document.getElementById("colour9").addEventListener("click", () => colour = "#3288bd");
document.getElementById("colour10").addEventListener("click", () => colour = "#5e4fa2");
document.getElementById("colour-white").addEventListener("click", () => colour = "white");
document.getElementById("colour-black").addEventListener("click", () => colour = "black");


// ==================== HELPERS ====================
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
