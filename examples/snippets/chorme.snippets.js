chrome.action.onClicked.addListener((tab) => {});
chrome.runtime.onInstalled.addListener(() => {
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });