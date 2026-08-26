# Interactive Proposal App

A beautiful, interactive proposal and memory gallery web application built with React, Vite, and TailwindCSS.

## 🚀 Setup & Run Locally

1. **Install Dependencies:**
   Make sure you have Node.js installed. Then, in the root folder, run:
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production (GitHub Pages / Vercel):**
   ```bash
   npm run build
   ```

## 📸 How to Customize Images

To make this your own, you simply need to replace the placeholder images in the `src/assets` folder. 

The application looks for specific filenames, so make sure your images match the following names and formats:

- **`pic1.jpeg`** to **`pic6.jpeg`**: These are used in the "Your Beautiful Memories" 3D Coverflow Gallery. You can replace them with your own 6 favorite memory pictures. Portrait orientation (e.g. 400x600) works best.
- **`Birthdaypic.jpeg`**: This is the main background image used in the birthday section. Portrait orientation works best here as well.
- **`video1.mp4`**: Replace this dummy video with your own favorite memory video (If have any).
- **`hero.png`**: (If used in your hero section) Replace this with your preferred hero/landing graphic.

**Important Notes:**
- If your images are `.jpg` or `.png`, you should rename them exactly to match the existing extensions (e.g., if you have a `.jpg`, rename it to `.jpeg` to match `pic1.jpeg`, or update the code in `GallerySection.jsx` and `BirthdaySection.jsx`).
- The repository currently contains randomly generated placeholder images so the app is immediately workable upon download.

## 🎵 Customizing the Music
- In `src/assets`, there is an audio file (e.g. `Bayaan & Sherazam - Safar (Lyrics) - (256 Kbps).mp3`). You can replace this with your own `.mp3` file. Just remember to update the import reference in your React components to point to the new filename.

## 🛠 Deployment
You can easily deploy the `dist` folder to GitHub Pages, Vercel, Netlify, or any static hosting service after running `npm run build`.
