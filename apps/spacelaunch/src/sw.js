/* eslint-disable no-restricted-globals */

const staticCacheName = 's-slcache-v1';
const dynamicCacheName = 'd-slcache-v1';

// eslint-disable-next-line
const assetUrls = [
	'/',
	'index.html',
	'sw.js'
];

self.addEventListener('install', async () => {
	const cache = await caches.open(staticCacheName);
	await cache.addAll(assetUrls);
});

self.addEventListener('activate', async () => {
	const cacheNames = await caches.keys();
	await Promise.all(
		cacheNames
			.filter(name => name !== staticCacheName)
			.filter(name => name !== dynamicCacheName)
			.map(name => caches.delete(name))
	);
});

self.addEventListener('fetch', e => {
	const {request} = e;

	const url = new URL(request.url);
	if (url.origin === location.origin) {
		e.respondWith(cacheFirst(request));
	} else {
		e.respondWith(networkFirst(request));
	}
});

const cacheFirst = async(request) => {
	const cached = await caches.match(request);
	return cached ?? await fetch(request);
};

async function networkFirst(request) {
	const cache = await caches.open(dynamicCacheName);
	try {
		const response = await fetch(request);
		await cache.put(request, response.clone());
		return response;
	} catch (e) {
		const cached = await cache.match(request);
		return cached ?? await caches.match('/offline.html');
	}
}