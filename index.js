const gridSize = 550;
const container = document.getElementById("gridContainer");

function darkenSquares() {
    let currentOpacity = this.dataset.opacity ? Number(this.dataset.opacity) : 0;

    if (currentOpacity < 1) {
        currentOpacity = Math.min(1, currentOpacity + 0.1);
        this.dataset.opacity = currentOpacity;
        this.style.opacity = currentOpacity;
    }
}

const goBtn = document.querySelector(".btn");
goBtn.addEventListener("click", () => {
        let size = document.getElementById("gridSize").value;
        event.target.disabled = true;
        rainbow.disabled = true;

    for (let i = 0; i < size ** 2; i++){
        const newDivs = document.createElement("div");
        newDivs.className = "squares";
        newDivs.id = "newSquares";
        container.appendChild(newDivs);
        newDivs.style.width = `${(gridSize / size) - 2}px`;
        newDivs.style.height = `${(gridSize / size) - 2}px`;
        newDivs.dataset.opacity = 0;
        newDivs.style.backgroundColor = "black";

        newDivs.addEventListener("mouseover", darkenSquares);
    }
    });

function getRandomColor() {
    return `rgb(${[1,2,3].map(() => Math.random()*256|0).join(",")})`;
}

function setRainbow() {
    this.style.backgroundColor = getRandomColor();
}

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {
        let size = document.getElementById("gridSize").value;
        event.target.disabled = true;
        btn.disabled = true;

        for (let i = 0; i < size ** 2; i++) {
            const newDivs = document.createElement("div");
            newDivs.className = "squares";
            newDivs.id = "newSquares";
            container.appendChild(newDivs);
            newDivs.style.width = `${(gridSize / size) - 2}px`;
            newDivs.style.height = `${(gridSize / size) - 2}px`;
            newDivs.dataset.opacity = 0;
            newDivs.style.opacity = 0
            newDivs.style.backgroundColor = getRandomColor();

            newDivs.addEventListener("mouseover", darkenSquares);
        }
    });

const resetBtn = document.querySelector(".reset");
const resetContainer = () => {
    location.reload();
}

resetBtn.addEventListener('click', resetContainer);