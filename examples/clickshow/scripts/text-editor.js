let dragging = false;
let currentTextPosition = {
    x: 0,
    y: 0,
}
let rootEl;

function createInputText(e) {
    rootEl = document.createElement("div");
    rootEl.className = "click-show-text-editor";
    
    rootEl.style.left = `${e.clientX + window.pageXOffset}px`;
    rootEl.style.top = `${e.clientY + window.pageYOffset}px`;
    rootEl.addEventListener('dblclick', (e) => {
        e.stopPropagation();
    });
    // close icon
    const closeIcon = document.createElement("div");
    closeIcon.className = 'click-show-text-editor-close';
    closeIcon.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    });
    // header
    const header = document.createElement("div");
    header.className = 'click-show-text-editor-header';
    header.onmousedown = elementDrag;
    header.onmouseup = elementEndDrag;

    // body
    const body = document.createElement("div");
    body.className = 'click-show-text-editor-body';
    body.addEventListener('click', (e) => {
        body.setAttribute('contenteditable', true);
    });

    // Append Child
    header.appendChild(closeIcon);
    rootEl.appendChild(header);
    rootEl.appendChild(body);
    
    return rootEl;
}

function elementDrag(e) {
    e.stopPropagation();
    if(dragging === false) {
        dragging = true;
        currentTextPosition.x = e.clientX;
        currentTextPosition.y = e.clientY;
    }
    rootEl.parentNode.onmousemove = elementMove;
    rootEl.parentNode.onmouseup = elementEndDrag;
}

function elementMove(e) {
    const input = e.target.parentNode;
    const deltaX = e.clientX - currentTextPosition.x;
    const deltaY = e.clientY - currentTextPosition.y;

    input.style.top = `${input.offsetTop + deltaY}px`;
    input.style.left = `${input.offsetLeft  + deltaX}px`;
    currentTextPosition.x = e.clientX;
    currentTextPosition.y = e.clientY;
}

function elementEndDrag(e) {
    dragging = false;
    currentTextPosition.x = 0;
    currentTextPosition.y = 0;
    rootEl.onmousemove = null;
    rootEl.parentNode.onmousemove = null;
}