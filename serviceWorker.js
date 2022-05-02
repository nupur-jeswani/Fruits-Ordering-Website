const shopPWA = "fruits-ordering-pwa-v1"
const assets = [
  "/",
  "/index.html",

  //CSS files
  "css\animate.min.css",
  "css\bootstrap.min.css",
  "css\font-awesome.min.css",
  "css\jquery-ui.css",
  "css\jquery.fancybox.min.css",
  "css\jquery.mCustomScrollbar.min.css",
  "css\meanmenu.css",
  "css\nice-select.css",
  "css\normalize.css",
  "css\owl.carousel.min.css",
  "css\responsive.css",
  "css\slick.css",
  "css\style.css",

    // JS files
  "js\app.js",
  "js\bootstrap.bundle.min.js",
  "js\custom.js",
  "js\jquery-3.0.0.min.js",
  "js\jquery.mCustomScrollbar.concat.min.js",
  "js\jquery.min.js",
  "js\jquery.validate.js",
  "js\plugin.js",
  "js\popper.min.js",
  
  // Images files
  "images\about_img.png",
  "images\blog1.png",
  "images\blog2.png",
  "images\blog3.png",
  "images\f_b1.png",
  "images\f_b2.png",
  "images\f_b3.png",
  "images\f1.png",
  "images\f2.png",
  "images\f3.png",
  "images\fruit_img.png",
  "images\green_fr.png",
  "images\loading.gif",
  "images\logo.png",
  "images\slider_img_144x144.png",
  "images\slider_img_512x512.png",
  "images\slider_img.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(shopPWA).then(cache => {
      cache.addAll(assets)
      // cache.addAll([
//         "/",
//   "/index.html",

//   //CSS files
//   "css\animate.min.css",
//   "css\bootstrap.min.css",
//   "css\font-awesome.min.css",
//   "css\jquery-ui.css",
//   "css\jquery.fancybox.min.css",
//   "css\jquery.mCustomScrollbar.min.css",
//   "css\meanmenu.css",
//   "css\nice-select.css",
//   "css\normalize.css",
//   "css\owl.carousel.min.css",
//   "css\responsive.css",
//   "css\slick.css",
//   "css\style.css",

//     // JS files
//   "js\app.js",
//   "js\bootstrap.bundle.min.js",
//   "js\custom.js",
//   "js\jquery-3.0.0.min.js",
//   "js\jquery.mCustomScrollbar.concat.min.js",
//   "js\jquery.min.js",
//   "js\jquery.validate.js",
//   "js\plugin.js",
//   "js\popper.min.js",
  
//   // Images files
//   "images\about_img.png",
//   "images\blog1.png",
//   "images\blog2.png",
//   "images\blog3.png",
//   "images\f_b1.png",
//   "images\f_b2.png",
//   "images\f_b3.png",
//   "images\f1.png",
//   "images\f2.png",
//   "images\f3.png",
//   "images\fruit_img.png",
//   "images\green_fr.png",
//   "images\loading.gif",
//   "images\logo.png",
//   "images\slider_img_144x144.png",
//   "images\slider_img_512x512.png",
//   "images\slider_img.png",
        

        // ]);
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  self.addEventListener("push", event => {
    let message = event.data.json();
  
    switch(message.type) {
      case "init":
        doInit();
        break;
      case "shutdown":
        doShutdown();
        break;
    }
  }, false);
  



  self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        event.waitUntil(doTheWork());
    }
});

  // self.addEventListener('notificationclick', (event) => {
  //   console.log('[Service Worker] Notification click Received.', event);
  //   event.notification.close();
  
  //   const launchUrl = event.action || event.notification.data.launchUrl;
  
  //   if (launchUrl) {
  //     event.waitUntil(clients.openWindow(launchUrl));
  //   }
  // });




































// //install service worker

// self.addEventListener('install',evt=>{
//     console.log("Service worker has been installed");
// })


// //activate service worker


// self.addEventListener('active',evt=>{
//     console.log("Service worker activated");
// })