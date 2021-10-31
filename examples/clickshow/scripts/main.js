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

// function addTextEditor(e) {
//     const input = document.createElement("div");
//     input.id = "editor-container";
//     document.body.appendChild(input);
//     input.style.position = "fixed";
//     input.style.left = `${e.clientX}px`;
//     input.style.top = `${e.clientY}px`;
//     input.style.height = `300px`;
//     input.style.width = `400px`;
//     setTimeout(() => {
//         var quill = new Quill('#editor-container', {
//             modules: {
//               toolbar: [
//                 [{ header: [1, 2, false] }],
//                 ['bold', 'italic', 'underline'],
//                 ['image', 'code-block']
//               ]
//             },
//             placeholder: 'Compose an epic...',
//             theme: 'snow'  // or 'bubble'
//           });
//     }, 1000);
// }