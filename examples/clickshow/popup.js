// let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

// chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
// });
chrome.action.onClicked.addListener((tab) => {
    console.log("aaaaaaaaaaa");
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => {},
    });
});

// function setPageBackgroundColor() {

//     document.onclick = () => applyCursorRippleEffect(event);

//     function applyCursorRippleEffect(e) {
//         const ripple = document.createElement("div");
//         ripple.className = "ripple";
//         document.body.appendChild(ripple);
//         ripple.style.left = `${e.clientX}px`;
//         ripple.style.top = `${e.clientY}px`;
//         ripple.style.animation = `ripple-effect .4s  linear`;
//         ripple.onanimationend = () => {
//             document.body.removeChild(ripple);
//         }
//     }

//     // extra and optional part:
//     const all = document.body.getElementsByTagName("*");
//     for (var i = 0; i < all.length; ++i) {
//         all[i].onclick = (event) => event.stopPropagation();
//     }
// }