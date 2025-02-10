
const hex = document.querySelector(".hex")
const button1 = document.querySelector("#btn")
const colors = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
]

function getRandomIndex(){
    const randomIndex = Math.floor(colors.length * Math.random())
    return randomIndex;
}

const body = document.querySelector("body");
function changeBackgroundColor(){
    const color = colors[getRandomIndex()];
    hex.innerText = color;
    body.style.backgroundColor = color
}

button1.onclick = changeBackgroundColor