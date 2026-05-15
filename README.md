# Personal Portfolio Website

A clean, modern personal portfolio inspired by soft Canva-style layouts. It uses React, Vite, and Tailwind CSS, with the main editable content kept in one file.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal, usually `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

The production files will be created in `dist/`.

## Deploy On Vercel

This portfolio is a Vite/React app and is ready to deploy on Vercel.

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project** and import the repository.
3. Keep the framework preset as **Vite**.
4. Use `npm run build` as the build command.
5. Use `dist` as the output directory.
6. Click **Deploy**.

Vercel will install dependencies with `npm install`, run the production build, and serve the generated files from `dist/`.

## Customize Content

Edit `src/content.js` to update:

- Name, role, intro, location, and email
- Navigation labels
- About section and stats
- Skills and tools
- Work experience
- Project cards
- Social links

## Customize Styling

- Global styles and reusable component classes live in `src/styles.css`.
- Theme colors and fonts are configured in `tailwind.config.js`.
- Components are organized in `src/App.jsx`.

## Replacing Placeholder Images

The hero image lives in `src/Assets/profile.jpg`. Project preview images live in `src/Assets/projects`, and the linked PDF drawing sets live in `public/projects`.
