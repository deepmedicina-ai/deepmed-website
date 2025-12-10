{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:full": "tsx script/build.ts",
    "preview": "vite preview",
    "deploy": "NODE_ENV=production npm run build:full && gh-pages -d dist -r https://$GH_TOKEN@github.com/deepmedicina-ai/deepmed-website.git"
  }
}