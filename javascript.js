const container = document.querySelector(".flex-container");

const gridButton = document.querySelector("#grid-button");
gridButton.addEventListener("click", function(e) { updateGrid(1) });

updateGrid(0); //init grid. (4x4)

function changeBoxColour(div) {
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
        changeBoxColour(div); //recall function if selected same colour.
    } else {
        div.style.backgroundColor = randomColour;
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function updateGrid(mode) {
    let newSideLength, newGridBoxSizes;

    if (mode == 1) {    // user requesting change to existing grid.
        newSideLength = prompt("How many squares per size for the new grid?", "1-100");

        if (newSideLength > 100 || newSideLength < 0) { return alert("Invalid number"); };
    
        let boxes = document.querySelectorAll(".gridBox");
    
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].remove();
        }

        newGridBoxSizes = (600 / newSideLength).toString() +"px"; // container size is 600x600

    


    } else if (mode == 0) { // refreshing page or first vist, create grid with default values.
        newSideLength = 4; 
        newGridBoxSizes = "150px";
    } 


    let numBoxes = newSideLength * newSideLength;

    for (let i =0; i < numBoxes; i++) {
        let div = document.createElement("div")
        div.setAttribute("class", "gridBox");
        div.addEventListener("mouseenter" , function (e) {changeBoxColour(div)});

        div.style.height = newGridBoxSizes;
        div.style.width = newGridBoxSizes;
    
        container.appendChild(div);
    }

}