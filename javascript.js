const container = document.querySelector(".flex-container");


//create 16 divs, add to container div.
for (let i =0; i < 16; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "gridBox");
    div.addEventListener("mouseenter" , function (e) {changeColour(div)});

    container.appendChild(div);
}

function changeColour(div) {
    const randomNumber = getRandomInt(6);
    let randomColour;
    
    const blue = "#0000FF"
    const red = "FFCB03";
    const green = "#00FF00";
    const orange = "#FFA500";
    const yellow = "#FFFF00";
    const purple = "#A020F0";
    const brown = "#964B00";

    switch(randomNumber) {
        case 0: randomColour = blue; break;
        case 1: randomColour = red; break;
        case 2: randomColour = green; break;
        case 3: randomColour = orange; break;
        case 4: randomColour = yellow; break;
        case 5: randomColour = purple; break;
        case 0: randomColour = brown; break;
    }

    div.style.backgroundColor = randomColour;

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}