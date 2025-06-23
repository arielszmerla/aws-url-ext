import { cleanAwsUrl } from './utils.js';

chrome.runtime.onInstalled.addListener(() => {
  console.log("AWS Console URL Cleaner extension installed.");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("AWS Console URL Cleaner extension started.");
});

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "clean-url") {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) return;

    const cleaned = cleanAwsUrl(tab.url);
    if (!cleaned) return;

    await copyToClipboard(tab.id, cleaned);
  }
});

async function copyToClipboard(tabId, text) {
  // Try to send the message first
  try {
    await chrome.tabs.sendMessage(tabId, { action: "copyToClipboard", text });
  } catch (e) {
    // If the content script is not present, inject it and try again
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ["code/content.js"]
    });
    // Wait a moment for the script to load, then resend the message
    await new Promise(resolve => setTimeout(resolve, 100));
    await chrome.tabs.sendMessage(tabId, { action: "copyToClipboard", text });
  }
}