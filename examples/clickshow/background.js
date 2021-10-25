chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ['content.js']
    });
    chrome.scripting.insertCSS({
      target: {tabId: tabId},
      files: ['my-styles.css']
    });
  }
})