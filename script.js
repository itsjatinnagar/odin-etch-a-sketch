const DEFAULT_GRID_SIZE = 16;

const mainContainer = document.getElementById("main"),
    sizeValue = document.getElementById("size-display"),
    sizeSlider = document.getElementById("slider");

sizeSlider.oninput = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => updateGrid(e.target.value);

function createGrid(size) {
    mainContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    mainContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let index = 1; index <= size * size; index++) {
        let gridCell = document.createElement("div");
        gridCell.addEventListener("mouseover", changeColor);
        mainContainer.append(gridCell);
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "#000000";
}

function removeGrid() {
    mainContainer.innerHTML = "";
}

function updateSizeValue(size) {
    sizeValue.innerText = `${size} x ${size}`;
}

function updateGrid(size) {
    removeGrid();
    createGrid(size);
}

window.onload = () => {
    createGrid(DEFAULT_GRID_SIZE);
    updateSizeValue(DEFAULT_GRID_SIZE);
};
