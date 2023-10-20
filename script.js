// Global Constants

const container = document.querySelector(".container");
const gridSize = 24;

// Global Variables

let isChangeable = false;


function createSquare() {
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
        container.appendChild(createSquare());
    }
}


function main() {
    initChangeStateLogic();

    gridCreation(gridSize);


}

main();



