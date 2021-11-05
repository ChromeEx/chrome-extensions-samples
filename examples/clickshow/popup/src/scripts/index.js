let mouse = document.getElementById("mouse-apply");
mouse.addEventListener("click", mouseHandler);

let inputColor = document.getElementById("input-color");
inputColor.addEventListener("input", changeColor);

let color = document.getElementById("square-color");
color.style['background-color'] = inputColor.value;

function mouseHandler(e) {
    chrome.storage.sync.set({"mouse-color": color.style['background-color']});
}

function changeColor(e) {
    let newColor = inputColor.value;
    if(!newColor) {
        return;
    }
    if(newColor[0] !== "#") {
        newColor = "#" + newColor;
    }
    color.style['background-color'] = newColor;
}

