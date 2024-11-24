const APP = {
  SW: null,
  init() {
    if ('serviceWorker' in navigator) {
      /** Register a service worker hosted at the root of
       * site using default scoepe
       */
      navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      }).then(registration => {
        APP.SW = registration.installing ||
                  registration.waiting ||
                  registration.active;
        console.log('Service worker registred')
      });

      /** See if the page is currently has a service worker */
      if (navigator.serviceWorker.controller) {
        console.log('we hav a service worker installed')
      }

      /** Register a handler to detect when a new or
       * update service worker is installed & activated.
       */
      navigator.serviceWorker.oncontrollerchange = ev => {
        console.log('New service worker activated')
      }
    } else {
      console.log('SW are not supported')
    }
  }
}

document.addEventListener('DOMContentLoaded', APP.init)