const CACHE_NAME = 'done-depot-cache-v1';
const urlsToCache = [
  './',
  'index.html',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
  'icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
  'icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
  'icons/windows11/Square44x44Logo.targetsize-256.png',
  'icons/windows11/Square44x44Logo.targetsize-96.png',
  'icons/windows11/Square44x44Logo.targetsize-80.png',
  'icons/windows11/Square44x44Logo.targetsize-72.png',
  'icons/windows11/Square44x44Logo.targetsize-64.png',
  'icons/windows11/Square44x44Logo.targetsize-60.png',
  'icons/windows11/Square44x44Logo.targetsize-48.png',
  'icons/windows11/Square44x44Logo.targetsize-44.png',
  'icons/windows11/Square44x44Logo.targetsize-40.png',
  'icons/windows11/Square44x44Logo.targetsize-36.png',
  'icons/windows11/Square44x44Logo.targetsize-32.png',
  'icons/windows11/Square44x44Logo.targetsize-30.png',
  'icons/windows11/Square44x44Logo.targetsize-24.png',
  'icons/windows11/Square44x44Logo.targetsize-20.png',
  'icons/windows11/Square44x44Logo.targetsize-16.png',
  'icons/android/android-launchericon-512-512.png',
  'icons/android/android-launchericon-192-192.png',
  'icons/android/android-launchericon-144-144.png',
  'icons/android/android-launchericon-96-96.png',
  'icons/android/android-launchericon-72-72.png',
  'icons/android/android-launchericon-48-48.png',
  'icons/ios/1024.png',
  'icons/ios/512.png',
  'icons/ios/256.png',
  'icons/ios/192.png',
  'icons/ios/180.png',
  'icons/ios/167.png',
  'icons/ios/152.png',
  'icons/ios/144.png',
  'icons/ios/128.png',
  'icons/ios/120.png',
  'icons/ios/114.png',
  'icons/ios/100.png',
  'icons/ios/87.png',
  'icons/ios/80.png',
  'icons/ios/76.png',
  'icons/ios/72.png',
  'icons/ios/64.png',
  'icons/ios/60.png',
  'icons/ios/58.png',
  'icons/ios/57.png',
  'icons/ios/50.png',
  'icons/ios/40.png',
  'icons/ios/32.png',
  'icons/ios/29.png',
  'icons/ios/20.png',
  'icons/ios/16.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
