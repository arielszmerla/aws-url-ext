chrome.runtime.onInstalled.addListener(() => {
  console.log("AWS Console URL Cleaner extension installed.");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("AWS Console URL Cleaner extension started.");
});