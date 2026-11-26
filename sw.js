const CACHE='rolyfe-airlink-v3';
const HOME=new URL('./index.html',self.location.href).href;
const RECOVERY=new URL('./airlink-v02.html',self.location.href).href;
const scopeHome=new URL('./',self.location.href).pathname;
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll([new Request(HOME,{cache:'reload'}),new Request(RECOVERY,{cache:'reload'})])).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('rolyfe-airlink-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||e.request.mode!=='navigate')return;const u=new URL(e.request.url),h=new URL(HOME),r=new URL(RECOVERY);if(u.origin!==h.origin||![scopeHome,h.pathname,r.pathname].includes(u.pathname))return;const key=u.pathname===r.pathname?RECOVERY:HOME;e.respondWith(fetch(new Request(e.request,{cache:'no-store'})).then(async response=>{if(response.ok){try{const c=await caches.open(CACHE);await c.put(key,response.clone());}catch(_){}return response;}throw Error('Network page unavailable');}).catch(async()=>{const c=await caches.open(CACHE);return await c.match(key)||new Response('AirLink offline cache not ready. Reconnect to the internet and open AirLink once.',{status:503,headers:{'Content-Type':'text/plain'}});}));});
