# Conformance Suite Navigator

A lightweight web tool to quickly navigate to specific tabs in the Raidiam Conformance Suite based on suite type, module type, and ID.

##  Purpose

This tool was built to speed up navigation within the Conformance Suite platforms (e.g., OPF CS, OPI CS) without having to manually locate and click through menus.  
By selecting the suite, the module type, and entering an ID, the tool directly opens the relevant tab in a new browser window.

##  Features

- **Simple and Fast** — Jump directly to the desired test or module page.
- **Dropdown Selection** — Choose the suite and module type from predefined lists.
- **Direct ID Input** — Enter a specific ID to open that test/module directly.
- **One-Click Navigation** — Open the relevant tab instantly.
- **Responsive Layout** — Works on desktop and mobile browsers.

## 🛠️ How to Use

1. Open the `index.html` file in your browser.
2. Select the **Suite** from the first dropdown.
3. Select the **Type** (module type) from the second dropdown.
4. Enter the **ID** in the input field.
5. Click **Open Tab** to launch the page in a new browser tab.

>  The tool does not require installation, authentication, or any dependencies.

## 📦 File Structure

- `index.html` — Main HTML file containing the form and layout.
- `styles.css` — Styling for the interface (brand-aligned with Raidiam).
- `script.js` — JavaScript logic for building URLs and opening tabs.
- `logo.png` — Logo image displayed at the top of the page.

##  Notes

- The predefined suite and type options can be updated in the `script.js` file to match your current platforms.
- The tool opens pages in a new tab/window — your browser’s popup blocker must allow it.
- No API calls are made — the tool only constructs URLs and redirects.

##  License

This project is provided as-is for internal Raidiam use.
