const CACHE='rolyfe-airlink-v1';const HOME=new URL('./index.html',self.location.href).href;
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.add(new Request(HOME,{cache:'reload'}))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('rolyfe-airlink-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||e.request.mode!=='navigate')return;const u=new URL(e.request.url),h=new URL(HOME);if(u.origin!==h.origin||!(u.pathname===h.pathname||u.pathname===h.pathname.replace('index.html','')))return;e.respondWith(fetch(e.request).catch(()=>caches.open(CACHE).then(c=>c.match(HOME))))});
