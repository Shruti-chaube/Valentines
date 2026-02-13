# 💖 Valentine's Day Website - React Edition

A fully responsive, romantic Valentine's Day website built with React, featuring animated hearts, playful interactions, and a beautiful photo gallery.

## ✨ Features

- 💘 **Proposal Page** with YES/NO buttons (NO button moves randomly!)
- 📸 **Memories Gallery** with lightbox modal
- 💕 **Floating Hearts** animation in the background
- 🎵 **Background Music** control (optional)
- 🎊 **Confetti Animation** when YES is clicked
- 💬 **Love Quotes** that appear randomly
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- 🎨 **Beautiful Animations** and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd valentines-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## 📁 Project Structure

```
valentines-react/
├── src/
│   ├── components/
│   │   ├── FloatingHearts.jsx      # Animated hearts background
│   │   ├── Loader.jsx               # Loading animation
│   │   ├── LoveQuote.jsx            # Random love quotes
│   │   ├── MusicControl.jsx         # Background music toggle
│   │   ├── SuccessPopup.jsx         # YES button success popup
│   │   └── Lightbox.jsx             # Image modal for gallery
│   ├── pages/
│   │   ├── ProposalPage.jsx         # Main proposal page
│   │   └── GalleryPage.jsx           # Photo gallery page
│   ├── App.jsx                      # Main app with routing
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html
└── package.json
```

## 🎮 How It Works

### Proposal Page
- Click **YES** → Shows success popup with confetti → Redirects to gallery
- Click **NO** → Button moves randomly → Shows funny messages → Hard to click!

### Gallery Page
- Click any image → Opens in lightbox modal
- Navigate with arrow keys or buttons
- Click outside or press ESC to close

## 🎨 Customization

### Change Images
Edit the `galleryItems` array in `src/pages/GalleryPage.jsx`:

```jsx
const galleryItems = [
  {
    src: 'your-image-url.jpg',
    caption: 'Your Caption Here 💕',
    alt: 'Description'
  },
  // ... more items
];
```

### Change Love Quotes
Edit the `loveQuotes` array in `src/components/LoveQuote.jsx`

### Change Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-pink: #ff6b9d;
  --secondary-pink: #ffb3d1;
  --dark-pink: #ff4081;
  /* ... */
}
```

### Change Background Music
Update the audio source in `src/components/MusicControl.jsx`:

```jsx
<source src="your-music-file.mp3" type="audio/mpeg" />
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 📸 Adding Your Images

The gallery is set up to display 7 beautiful memories with Neelu. To add your images:

1. Place your image files in the `public/images/` folder
2. Name them as follows:
   - `traditional-attire.jpg` - Traditional Indian attire photo
   - `bar-kitchen.jpg` - Bar & Kitchen photo
   - `mirror-selfie.jpg` - Mirror selfie
   - `night-building.jpg` - Nighttime building photo
   - `embrace-night.jpg` - Nighttime embrace photo
   - `outdoor-building.jpg` - Outdoor building photo
   - `tea-plantation.jpg` - Tea plantation photo

3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

The images will automatically load when you add them to the folder!

## 📝 Notes

- Background music requires user interaction to play (browser autoplay policy)
- If images are missing, placeholder images will be shown
- All animations respect `prefers-reduced-motion` for accessibility

## 💝 Enjoy!

Made with 💖 for Neelu!
