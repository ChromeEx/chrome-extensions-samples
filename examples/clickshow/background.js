let color = '#3aa757';

chrome.runtime.onInstalled.addListener(async () => {
  console.log('Default background color set to %cgreen', `color: ${color}`);
  
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
  chrome.scripting.insertCSS({
    target: {tabId: tab.id},
    files: ['my-styles.css']
  });
});

