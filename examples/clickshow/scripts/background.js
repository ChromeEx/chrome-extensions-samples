chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['scripts/text-editor.js', 'scripts/main.js']
    });
    chrome.scripting.insertCSS({
      target: {tabId: tabId},
      files: ['styles/text-editor.css', 'styles/styles.css']
    });
  }
});
