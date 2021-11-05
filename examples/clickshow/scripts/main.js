const mouseEventShow = "click";
const keyEventShow = "shift";

document.addEventListener(mouseEventShow, addInputElement);

function addInputElement(e) {
    if(keyEventShow) {
        if(keyEventShow === "shift" && !e.shiftKey) {
            return;
        }
    }
    const input = createInputText(e);
    document.body.appendChild(input);
}
