# WebP Cloud Browser Extension

## Popup

Popup is a web page that is displayed when the extension is clicked. We use there Vue 3 with Vite and TypeScript.

To prepare new preview version we need to run build process - `npm run build`.

After that `dist/index.html` need to be updated by removing prefix slash from links. 

```
👎
src="/assets/index.7bcd9307.js"

👍
src="assets/index.7bcd9307.js"
```

## Content Script

Part of the script that will be appended to the body of open tab.

## Background

Background is a service worker for the plugin.
