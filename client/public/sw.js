const CACHE_NAME = 'deepmed-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo-deepmed.png',
  '/apple-touch-icon.png',
  '/favicon.png',
  '/opengraph.jpg'
];

// Instalar Service Worker e cachear recursos
self.addEventListener('install', (event) => {
  console.log('[DeepMed PWA] Service Worker instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[DeepMed PWA] Cache aberto, adicionando arquivos...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[DeepMed PWA] Todos os arquivos foram cacheados!');
        return self.skipWaiting();
      })
  );
});

// Ativar Service Worker e limpar caches antigos
self.addEventListener('activate', (event) => {
  console.log('[DeepMed PWA] Service Worker ativando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[DeepMed PWA] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[DeepMed PWA] Service Worker ativado!');
      return self.clients.claim();
    })
  );
});

// Interceptar requisições e servir do cache quando possível
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retorna do cache se disponível
        if (response) {
          console.log('[DeepMed PWA] Servindo do cache:', event.request.url);
          return response;
        }

        // Senão, busca da rede
        console.log('[DeepMed PWA] Buscando da rede:', event.request.url);
        return fetch(event.request).then((response) => {
          // Não cachear se não for uma resposta válida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clonar a resposta
          const responseToCache = response.clone();

          // Adicionar ao cache para uso futuro
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
      .catch(() => {
        // Fallback para página offline (opcional)
        console.log('[DeepMed PWA] Erro ao buscar:', event.request.url);
      })
  );
});
