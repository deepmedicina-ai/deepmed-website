import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = [
  'apple-touch-icon.png',
  'favicon.png',
  'logo-deepmed.png',
  'og-image.png',
  'opengraph.jpg',
  'manifest.json',
  'sw.js'
];

const publicDir = join(__dirname, 'client', 'public');
const distDir = join(__dirname, 'dist', 'public');

files.forEach(file => {
  const src = join(publicDir, file);
  const dest = join(distDir, file);
  
  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`✅ Copied ${file}`);
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});
