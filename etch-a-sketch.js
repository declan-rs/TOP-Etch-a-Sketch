const container = document.querySelector("#container");

// Create grid
for(i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for(j = 0; j < 16; j++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        row.appendChild(cell);
    }
}
