chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "copyToClipboard" && msg.text) {
    // Fallback for clipboard write
    const textarea = document.createElement('textarea');
    textarea.value = msg.text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    sendResponse({ success: true });
  }
  return true;
});