# Vite React Chrome Extension Template

A minimal and optimized setup for building Chrome extensions with React, TypeScript, and Vite. This template includes hot reloading for a smooth development experience.

## Features

- ⚡️ **Vite** - Super fast development & build tooling
- ⚛️ **React** - Modern UI development with React 19
- 🔄 **Hot Reloading** - See your changes instantly without manually refreshing
- 🧰 **TypeScript** - Type safety and improved developer experience
- 🎨 **TailwindCSS** - Utility-first CSS framework for rapid UI development
- 🧹 **ESLint** - Code quality and best practices

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server with hot reloading:
   ```bash
   npm run dev
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `build` folder from this project

The extension will automatically reload when you make changes to the code.

## Building for Production

```bash
npm run build
```

This will create a production-ready build in the `build` directory.

## Project Structure

- `public/` - Static assets and manifest.json
- `src/` - React application source code
- `vite.config.ts` - Vite configuration with Chrome extension setup
- `tailwind.config.js` - TailwindCSS configuration

## Customization

To customize the extension, edit the following files:

- `public/manifest.json` - Extension metadata and permissions
- `index.html` - HTML template for the extension popup
- `src/` - React components and application logic

## ESLint Configuration

This template includes a basic ESLint configuration. For more advanced linting:

```js
// eslint.config.js
// Add your custom ESLint rules here
```
