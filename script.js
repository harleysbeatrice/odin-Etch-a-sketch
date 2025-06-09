const container = document.querySelector(".grid-container");

function randomRGB() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`
};

function createNewBoard(inDim) {
    dim = (inDim > 0 && inDim <= 100)? inDim:
        (inDim > 100)? 100: 16;
    const existingRows = document.querySelectorAll(".row");
    existingRows.forEach(row => row.remove())
    let numOfRow=dim;
    let numOfPix=dim;
    while (numOfRow > 0) {
    const row = document.createElement("div");
    row.setAttribute("class","row");
    while (numOfPix > 0) {
        const pix = document.createElement("div");
        pix.setAttribute("class","pix");
        pix.addEventListener("mouseover", () => {
            if (pix.style.background === "") {
                pix.style.background = randomRGB()
                pix.style.opacity = "0.1"
            } else {
                pix.style.opacity = (Number(pix.style.opacity) + 0.1).toString();
            };
        });
        row.appendChild(pix);
        numOfPix--;
    };
    numOfPix = dim;
    container.appendChild(row);
    numOfRow--;
    };
};

const btn = document.querySelector("button");
btn.addEventListener("click", () => createNewBoard(prompt("Set new diemnsion (single number smaller then or equal to 100)")));

const initialDimension = 16; 
createNewBoard(initialDimension);