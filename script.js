const mainContainer = document.getElementById("main");

for (let index = 1; index <= 16 * 16; index++) {
    let gridCell = document.createElement("div");
    mainContainer.append(gridCell);
}

mainContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
mainContainer.style.gridTemplateRows = "repeat(16, 1fr)";

const cells = document.querySelectorAll("#main > div");

cells.forEach((cell) => {
    cell.addEventListener(
        "mouseover",
        () => (cell.style.backgroundColor = "#000000")
    );
});
