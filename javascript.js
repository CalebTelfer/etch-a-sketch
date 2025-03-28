const container = document.querySelector(".flex-container");


//create 16 divs, add to container div.
for (let i =0; i < 16; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "gridBox");
    container.appendChild(div);
}