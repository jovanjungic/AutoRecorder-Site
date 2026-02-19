# AutoRecord Demo Site

A modern, interactive demo website showcasing the AutoRecord project - an intelligent recording automation utility powered by OpenCV image recognition and OBS WebSockets.

## Features

- **Modern Design**: Clean, SAAS-style interface built with Tailwind CSS
- **Interactive Elements**: Smooth scrolling, animations, and hover effects
- **Responsive**: Fully responsive design that works on all devices
- **Demo Ready**: Placeholder sections ready for GUI screenshots
- **Professional**: CV-worthy presentation of technical achievements

## Project Structure

```
.
├── index.html      # Main HTML structure
├── styles.css      # Custom CSS styles (no inline styles)
├── script.js       # Interactive JavaScript functionality
└── README.md       # This file
```

## Setup

1. Simply open `index.html` in a web browser
2. No build process or dependencies required
3. Uses Tailwind CSS via CDN for styling

## Customization

### Adding Screenshots

Replace the placeholder divs in the demo section with your actual screenshots:

```html
<div class="demo-placeholder">
    <img src="path/to/your/screenshot.png" alt="Main Interface" class="w-full h-auto rounded-lg">
</div>
```

### Modifying Content

- Edit `index.html` for text content and structure
- Edit `styles.css` for styling and animations
- Edit `script.js` for interactive behavior

## Sections

1. **Hero**: Eye-catching introduction with key stats
2. **Features**: Six main features with icons
3. **How It Works**: Four-step workflow explanation
4. **Demo**: Gallery section for GUI screenshots (4 placeholders)
5. **Technology**: Tech stack and technical highlights
6. **CTA**: Call-to-action section

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Notes

- All CSS is in `styles.css` - no inline styles
- Tailwind CSS is loaded via CDN for convenience
- Ready for deployment to GitHub Pages, Netlify, or any static hosting
