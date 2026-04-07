/*
 * Cleanup worker for stale /sw.js registrations from prior deployments or local testing.
 * It activates immediately and unregisters itself so the app runs without a service worker.
 */

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister();

      const clients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true,
      });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});
