var __wpo = {"assets":{"main":["game-skeleton-webpack-experiment","game-skeleton-webpack-experimentmain.js"],"additional":["game-skeleton-webpack-experiment97f1caea45a6d0abf9365f80f14a1af0.png"],"optional":[]},"strategy":"changed","hash":"e610e4d7bc5aae86ce52","name":"webpack-offline"};

!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function o(e){function n(){a.additional.length&&("changed"===c?o():t("additional"))}function t(e){return caches.open(l).then(function(n){return n.addAll(a[e]).then(function(){console.groupCollapsed("[SW]:","Cached assets: "+e),a[e].forEach(function(e){console.log("Asset:",e)}),console.groupEnd()})})}function o(){var e=void 0;return caches.open(l).then(function(n){return e=n,n.keys()}).then(function(n){var t=n.map(function(e){return new URL(e.url).pathname}),o=a.additional.filter(function(e){return-1===t.indexOf(e)});o.length&&(console.group("[SW]:","Caching changed assets"),o.map(function(e){return console.log("Asset:",e),new Request(e)}).map(function(n){return fetch(n).then(function(t){return e.put(n,t)})}),console.groupEnd())})}function r(){return caches.keys().then(function(e){return Promise.all(e.map(function(e){return e!==l&&0===e.indexOf(s)?(console.log("[SW]:","Delete cache:",e),caches["delete"](e)):void 0}))})}var c=e.strategy,a=e.assets,i={all:e.version,changed:"static",hash:e.hash},s=e.name,u=i[c],l=s+":"+u,h=[].concat(a.main,a.additional,a.optional);self.addEventListener("install",function(e){console.log("[SW]:","Install event");var o=t("main").then(n);e.waitUntil(o)}),self.addEventListener("activate",function(e){console.log("[SW]:","Activate event");var n=r();"changed"===c&&(n=n.then(deleteChanged)),e.waitUntil(n.then(function(){return self.clients&&self.clients.claim?self.clients.claim():void 0}))}),self.addEventListener("fetch",function(e){var n=new URL(e.request.url);if("GET"===e.request.method&&n.origin===location.origin&&-1!==h.indexOf(n.pathname)){if(-1!==a.main.indexOf(n.pathname))return void e.respondWith(caches.match(e.request,{cacheName:l}));var t=caches.match(e.request,{cacheName:l}).then(function(t){return t?t:fetch(e.request.clone()).then(function(t){if(!t||200!==t.status||"basic"!==t.type)return t;var o=t.clone();return caches.open(l).then(function(n){return n.put(e.request,o)}).then(function(){console.log("[SW]:","Cache asset: "+n.pathname)}),t})});e.respondWith(t)}})}t(1),o(__wpo),e.exports=t(3)},function(e,n,t){"use strict";e.exports=t(2)},function(e,n){Cache.prototype.add||(Cache.prototype.add=function(e){return this.addAll([e])}),Cache.prototype.addAll||(Cache.prototype.addAll=function(e){function n(e){this.name="NetworkError",this.code=19,this.message=e}var t=this;return n.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new n("Invalid scheme");return fetch(e.clone())}))}).then(function(n){return Promise.all(n.map(function(n,o){return t.put(e[o],n)}))}).then(function(){})})},function(e,n){}]);