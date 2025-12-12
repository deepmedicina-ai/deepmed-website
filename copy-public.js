import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 1. Adicionei 'logo-icon.svg' na lista (o arquivo que estava faltando)
const files = [
  'apple-touch-icon.png',
  'favicon.png',
  'logo-deepmed.png',
  'og-image.png',
  'opengraph.jpg',
  'logo-icon.svg' 
];

// 2. Corrigi o caminho para 'cliente' (em vez de 'client')
const publicDir = join(__dirname, 'cliente', 'public');

// 3. Ajuste o destino para a raiz do dist (onde o site busca os arquivos)
const distDir = join(__dirname, 'cliente', 'dist'); 

// Garante que a pasta de destino existe
if (!existsSync(distDir)) {
    console.log(`Criando pasta dist: ${distDir}`);
    mkdirSync(distDir, { recursive: true });
}

files.forEach(file => {
  const src = join(publicDir, file);
  const dest = join(distDir, file);

  if (existsSync(src)) {
    copyFileSync(src, dest);
    console.log(`✅ Copied ${file}`);
  } else {
    console.log(`⚠️  File not found: ${file} (Procurado em: ${src})`);
  }
});