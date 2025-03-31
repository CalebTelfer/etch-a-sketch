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
    
    const blue = "rgb(0,0,255)";
    const red = "rgb(255, 0, 0)";
    const green = "rgb(55, 255, 0)";
    const orange = "rgb(255, 140, 0)";
    const yellow = "rgb(225, 255, 0)";
    const purple = "rgb(90, 0, 179)";
    const brown = "rgb(86, 48, 24)";

    switch(randomNumber) {
        case 0: randomColour = blue; break;
        case 1: randomColour = red; break;
        case 2: randomColour = green; break;
        case 3: randomColour = orange; break;
        case 4: randomColour = yellow; break;
        case 5: randomColour = purple; break;
        case 0: randomColour = brown; break;
    }

    if (randomColour == div.style.backgroundColor) {
        changeColour(div); //recall function if selected same colour.
    } else {
        div.style.backgroundColor = randomColour;
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}