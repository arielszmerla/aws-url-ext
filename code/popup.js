// code/popup.js
import { cleanAwsUrl } from './utils.js';

document.getElementById("cleanBtn").onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const originalUrl = tabs[0].url;
    const cleanedUrl = cleanAwsUrl(originalUrl);

    if (!cleanedUrl) {
      document.getElementById("status").textContent = "⚠️ Invalid or unsupported URL.";
      return;
    }

    navigator.clipboard.writeText(cleanedUrl).then(() => {
      document.getElementById("status").textContent = "✅ Cleaned URL copied!";
    }).catch(() => {
      document.getElementById("status").textContent = "❌ Failed to copy.";
    });
  });
};