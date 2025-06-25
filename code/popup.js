import { cleanAwsUrl } from './utils.js';

const urlInput = document.getElementById("urlInput");
const statusElem = document.getElementById("status");
const cleanBtn = document.getElementById("cleanBtn");
function updateStatus(message) {
  statusElem.textContent = message;
  if (updateStatus._timeout) clearTimeout(updateStatus._timeout);
  updateStatus._timeout = setTimeout(() => {
    statusElem.textContent = "";
  }, 2000);
}

function copyCleanedUrl(url) {
  const cleanedUrl = cleanAwsUrl(url);

  if (!cleanedUrl) {
    updateStatus("⚠️ Invalid or unsupported URL.");
    return;
  }
  navigator.clipboard.writeText(cleanedUrl)
    .then(() => updateStatus("✅ Cleaned URL copied!"))
    .catch(() => updateStatus("❌ Failed to copy."))
}

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    copyCleanedUrl(urlInput.value);
    urlInput.value = "";
  }
});

cleanBtn.onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    copyCleanedUrl(tabs[0].url);
  });
};