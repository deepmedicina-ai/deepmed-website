const fs = require('fs');
const path = require('path');

const files = [
  'apple-touch-icon.png',
  'favicon.png', 
  'logo-deepmed.png',
  'og-image.png',
  'opengraph.jpg'
];

const publicDir = path.join(__dirname, 'client', 'public');
const distDir = path.join(__dirname, 'dist', 'public');

files.forEach(file => {
  const src = path.join(publicDir, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${file}`);
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});
