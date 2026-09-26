importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAEyfipwLGvrFaRlQ6catsNFotIm9Az-8U",
  authDomain: "isakha-a113f.firebaseapp.com",
  databaseURL: "https://isakha-a113f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "isakha-a113f",
  storageBucket: "isakha-a113f.firebasestorage.app",
  messagingSenderId: "1018948076953",
  appId: "1:1018948076953:web:2efbb684af4834518dff08"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = (payload.notification && payload.notification.title) || 'Новый заказ';
  const options = {
    body: (payload.notification && payload.notification.body) || 'Кто-то оформил заказ',
    icon: '/ISakha-1.0/icon-192.png',
    badge: '/ISakha-1.0/icon-192.png',
    vibrate: [200, 100, 200],
    tag: 'new-order',
    requireInteraction: true
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/ISakha-1.0/admin.html')
  );
});