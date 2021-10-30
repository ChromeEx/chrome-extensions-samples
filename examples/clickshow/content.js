document.addEventListener('dblclick', addInputText);

function applyCursorRippleEffect(e) {
    const img = document.createElement("img");
    img.className = "image-show";
    document.body.appendChild(img);
    img.style.left = `${e.clientX}px`;
    img.style.top = `${e.clientY}px`;
    img.src = chrome.runtime.getURL("images/bobo1.gif");
    setTimeout(() => {
        document.body.removeChild(img);
    }, 2000)
}

function addInputText(e) {
    const input = document.createElement("text");
    input.type = "text";
    input.className = "click-show-text"
    document.body.appendChild(input);
    input.style.position = "fixed";
    input.style.left = `${e.clientX}px`;
    input.style.top = `${e.clientY}px`;
}
