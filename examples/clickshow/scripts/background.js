chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['scripts/text-editor.js', 'scripts/cursor.js', 'scripts/main.js']
    });
    chrome.scripting.insertCSS({
      target: {tabId: tabId},
      files: ['styles/text-editor.css', 'styles/cursor.css', 'styles/styles.css']
    });
  }
});
function initalize() {
  chrome.storage.sync.get("mouse-color", (color) => {
   if(!color["mouse-color"]) {
       chrome.storage.sync.set({"mouse-color": "#b9c9fe"});
   }
  });
}
initalize();
