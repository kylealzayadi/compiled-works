# Compiled Works

A single hub for all of my apps and websites. The landing page layers a starfield background, a minimal header with a Resume link, and feature blocks that embed live previews (e.g., the Period Calculator). As new projects go live, their links and previews will be added here so everything is browsable in one place.

## Tech
- React (Vite)
- three.js + @react-three/fiber/drei (starfield background)
- Framer Motion (animations)
- Plain CSS styling

## Local setup
1) Install dependencies
```bash
npm install
```
2) Run the dev server
```bash
npm run dev
```
Then open the shown localhost URL (defaults to http://localhost:5173 or the next available port).

3) Production build
```bash
npm run build
```
Outputs to `dist/`.

## Structure
- `src/components/` — UI pieces (Navbar, Hero, PhoneFrame, StarsCanvas)
- `src/App.jsx` — page composition and project sections
- `src/index.css` — global and component styles

## Live previews
- Period Calculator: embedded inside the phone frame; adjusts cycle timing for different planets' gravitational pulls.

## Roadmap
- Add more project embeds/links as they go live.
- Add a simple projects index and tags for quick filtering.
- Optional: host the Resume PDF locally or swap the Drive link when ready.
