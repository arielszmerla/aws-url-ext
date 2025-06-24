# AWS Console URL Cleaner (Chrome Extension)

A lightweight Chrome extension that cleans AWS Console URLs by removing account-specific prefixes like `111222333344-xxxxxxx`, making the URLs shareable and reusable across users and sessions.

---

## 🔧 Features
- Cleans AWS Console URLs by stripping out account-specific fragments
- One-click button to clean and copy the current URL
- Manual input field for pasting AWS Console URLs
- Simple, clean UI

---

## 📦 Installation (Developer Mode)

1. Clone or download this repository
2. Open Google Chrome and navigate to: `chrome://extensions`
3. Enable **Developer Mode** (top-right toggle)
4. Click **"Load unpacked"**
5. Select the directory where you saved the extension files

---

## 🧪 Usage

1. Visit any AWS Console page with an account-prefixed domain (e.g. `111222333344-xxxxxx.<my-fancy-region>.console.aws.amazon.com/...`)
2. Click the extension icon in your toolbar
3. Click **"Clean & Copy URL"** to clean the current tab’s URL
4. Or paste a URL into the input field and **"press Enter"**
5. The cleaned URL (without the account-specific part) will be copied to your clipboard

---

## 📁 File Structure
```
aws-url-ext/
├── manifest.json                # Extension manifest file
├── code/
│   ├── popup.html               # Popup UI HTML
│   ├── popup.js                 # Popup logic (JS)
│   ├── popup.css                # Popup styles (CSS)
│   └── background.js            # Background script
└── assets/
    └── imgs/
        └── icon.png             # 128x128 extension icon
```
---

## 🧩 Example Input → Output
```
Input:
https://111222333344-xxxxxx.us-east-1.console.aws.amazon.com/s3/buckets/...?

Output:
https://console.aws.amazon.com/s3/buckets/...?
```

---

## ✅ To-Do / Ideas
- [ ] Automatically clean the URL on page load
- [ ] Add keyboard shortcut
- [ ] Export/share cleaned links directly from popup

---

## 📜 License
MIT License
