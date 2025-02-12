document.onclick = () => applyCursorRippleEffect(event); 

function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");

    ripple.className = "ripple";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`; 

    ripple.style.animation = "ripple-effect .4s linear";
    ripple.onanimationend = () => document.body.removeChild(ripple);

    chrome.storage.sync.get("mouse-color", (color) => {
        console.log(color);
        ripple.style.borderColor = color["mouse-color"];
    });
}
