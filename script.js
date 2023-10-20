// Global Constants

const container = document.querySelector(".container");
const clearButton = document.querySelector("#clear-button");
const changeButton = document.querySelector("#change-button");
const initialGridSize = 24;

// Global Variables

let isChangeable = false;


function createSquare(gridSize) {
    const square = document.createElement("div");
    square.classList.add("square")
    square.style.width = 100 / gridSize + "%";
    square.style.height = 100 / gridSize + "%";

    square.ondragstart = (event) => event.preventDefault();

    const changeState = () => square.classList.add("hovered");

    square.addEventListener("mouseover", () => { if(isChangeable){changeState()} });
    square.addEventListener("mousedown", changeState)

    return square;
}

function initChangeStateLogic() {
    document.addEventListener("mousedown", () => isChangeable = true);
    document.addEventListener("mouseup", () => isChangeable = false);
}


function gridCreation(gridSize) {
    for(let i = 0; i < gridSize * gridSize; i++) {
        container.appendChild(createSquare(gridSize));
    }
}

function clearGrid() {
    container.childNodes.forEach((child) => child.classList.remove("hovered"));
}

function changeGrid() {
    let newGridSize = parseInt(prompt("Enter a new grid size smaller 100:"));
    if(isNaN(newGridSize)) {
        return;
    }

    if(newGridSize > 100) {
        return;
    }

    container.replaceChildren()
    gridCreation(newGridSize);
}

function buttonInit() {
    clearButton.addEventListener("click", clearGrid)
    changeButton.addEventListener("click", changeGrid)
}

function main() {
    initChangeStateLogic();

    buttonInit();

    gridCreation(initialGridSize);


}

main();



