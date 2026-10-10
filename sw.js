/* Service worker minimo: serve solo a rendere la pagina "installabile".
   Non salva nulla in cache: i dati sono sempre quelli aggiornati dal foglio. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
