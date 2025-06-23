document.getElementById("cleanBtn").onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const url = new URL(tabs[0].url);
    const cleanedHost = url.host.replace(/^\d{12}-[a-z0-9]+\./, '');
    const cleanedUrl = `${url.protocol}//${cleanedHost}${url.pathname}${url.search}${url.hash}`;

    // Copy to clipboard
    navigator.clipboard.writeText(cleanedUrl).then(() => {
      document.getElementById("status").textContent = "✅ Cleaned URL copied!";
    }).catch(() => {
      document.getElementById("status").textContent = "❌ Failed to copy.";
    });
  });
};
