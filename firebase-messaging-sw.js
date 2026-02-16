importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: "978466433092" // Tu ID de remitente
});

const messaging = firebase.messaging();

// Este evento se dispara cuando llega el mensaje de Google Apps Script
messaging.onBackgroundMessage(function(payload) {
  console.log('Mensaje recibido en segundo plano:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icono-alarma.png', // Opcional: pon un icono
    vibrate: [200, 100, 200],
    tag: 'alarma-urgente',
    requireInteraction: true // Mantiene la notificación hasta que la quites
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
