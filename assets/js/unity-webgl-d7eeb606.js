/*!
 * unity-webgl.js v3.3.0
 * (c) 2023 Mervin<mengqing723@gmail.com>
 * Released under the MIT License.
 */
var t=function(n,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(n,e)};var n=function(){return n=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},n.apply(this,arguments)};function e(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{l(o.next(t))}catch(n){i(n)}}function s(t){try{l(o.throw(t))}catch(n){i(n)}}function l(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}l((o=o.apply(t,n||[])).next())}))}function o(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(s){i=[6,s],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var r="__UnityLib__",i=new Map,a=function(){function t(){void 0!==window&&void 0===window[r]&&(window[r]={})}return t.prototype.setGlobalName=function(t){if(window[t])console.error("UnityWebgl: window.".concat(t," already exists."));else{var n=r;window[t]=window[r],r=t,delete window[n]}},Object.defineProperty(t.prototype,"global_name",{get:function(){return r},enumerable:!1,configurable:!0}),t.prototype.on=function(t,n){return i.set(t,n),void 0!==window[r]&&(window[r][t]=n),this},t.prototype.once=function(t,n){return this.on(t,function(){n&&n.apply(this,arguments),this.off(t)}.bind(this)),this},t.prototype.off=function(t){return i.delete(t),void 0!==window[r]&&delete window[r][t],this},t.prototype.clear=function(){return void 0!==window[r]&&i.forEach((function(t,n){delete window[r][n]})),i.clear(),this},t.prototype.emit=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var o=i.get(t);return void 0!==o&&o.apply(this,n),this},t}();function s(t){return t instanceof HTMLCanvasElement?t:"string"==typeof t?document.querySelector(t):(console.warn("UnityWebgl: CanvasElement not found."),null)}var l={streamingAssetsUrl:"StreamingAssets",companyName:"Unity.com",productName:"Unity"};var u=function(r){function i(t,n){var e,o=r.call(this)||this;if(o.canvasElement=null,o.unityLoader=null,o.unityInstance=null,e=t,"[object Object]"!==Object.prototype.toString.call(e)||n){o.unityConfig=Object.assign({},l,n);var i=s(t);i&&o.create(i)}else o.unityConfig=Object.assign({},l,t);return o}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(i,r),i.prototype.create=function(t){if(this.unityInstance&&this.canvasElement&&this.unityLoader)console.warn("UnityWebgl: Unity Instance already exists");else{var e=s(t);if(e){this.canvasElement=e;var o,r,i=this,a=((r=n({},(o=this).unityConfig)).print=function(t){o.emit("debug",t)},r.printError=function(t){o.emit("error",t)},r),l=function(t,n){var e=n.resolve,o=n.reject;if(t){if("function"!=typeof window.createUnityInstance){var r=document.querySelector('script[src="'.concat(t,'"]'));if(null===r){(r=document.createElement("script")).src=t,r.async=!0,r.setAttribute("data-status","loading"),document.body.appendChild(r);var i=function(t){var n="load"===t.type?"ready":"error";null==r||r.setAttribute("data-status",n)};r.addEventListener("load",i),r.addEventListener("error",i)}else s(r.getAttribute("data-status"));var a=function(t){s("load"===t.type?"ready":"error")};return r.addEventListener("load",a),r.addEventListener("error",a),function(){r&&(r.removeEventListener("load",a),r.removeEventListener("error",a),document.body.removeChild(r))}}e&&e()}else o&&o(new Error("UnityWebgl: loaderUrl not found."));function s(n){"ready"===n?e&&e():o&&o(new Error("'UnityWebgl: ".concat(t,"' loading failure.")))}}(a.loaderUrl,{resolve:function(){try{window.createUnityInstance(e,a,(function(t){return i._setProgression(t)})).then((function(t){i.unityInstance=t,i.emit("created",t)})).catch((function(t){i.unityInstance=null,i.emit("error",t)}))}catch(t){i.unityInstance=null,i.emit("error",t)}},reject:function(t){console.error("UnityWebgl: ",null==t?void 0:t.message)}});"function"==typeof l?this.unityLoader=l:console.error()}else console.warn("UnityWebgl: CanvasElement not found.")}},i.prototype._setProgression=function(t){1===t&&this.emit("loaded"),this.emit("progress",t)},i.prototype.send=function(t,n,e){if(null!==this.unityInstance)if(null==e)this.unityInstance.SendMessage(t,n);else{var o="object"==typeof e?JSON.stringify(e):e;this.unityInstance.SendMessage(t,n,o)}else console.warn("UnityWebgl: Unable to Send Message while Unity is not Instantiated.");return this},i.prototype.requestPointerLock=function(){var t,n,e=this.canvasElement||(null===(n=null===(t=this.unityInstance)||void 0===t?void 0:t.Module)||void 0===n?void 0:n.canvas);e&&e.requestPointerLock()},i.prototype.takeScreenshot=function(t,n){var e,o,r;void 0===t&&(t="image/jpeg");var i=this.canvasElement||(null===(o=null===(e=this.unityInstance)||void 0===e?void 0:e.Module)||void 0===o?void 0:o.canvas);if(i)return!0!==(null===(r=this.unityConfig.webglContextAttributes)||void 0===r?void 0:r.preserveDrawingBuffer)&&console.warn('UnityWebgl: Taking a screenshot requires "preserveDrawingBuffer".'),i.toDataURL(t,n);console.warn("UnityWebgl: Unable to Take Screenshot while Unity is not Instantiated or Canvas is not available.")},i.prototype.setFullscreen=function(t){this.unityInstance?this.unityInstance.SetFullscreen(t?1:0):console.warn("UnityWebgl: Unable to Set Fullscreen while Unity is not Instantiated.")},i.prototype.unload=function(){var t=this;return null===this.unityInstance?(console.warn("UnityWebgl: Unable to Quit Unity while Unity is not Instantiated."),Promise.reject()):(this.unityLoader&&(this.unityLoader(),this.unityLoader=null),this.unityInstance.Quit().then((function(){t.unityInstance=null,t.emit("destroyed")})))},i.prototype._unsafe_unload=function(){return e(this,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return null!==this.unityInstance&&this.unityInstance.Module.canvas?(t=this.unityInstance.Module.canvas,document.body.appendChild(t),t.style.display="none",[4,this.unload()]):(console.warn("UnityWebgl: No Unity Instance found."),[2,Promise.reject()]);case 1:return n.sent(),t.remove(),[2]}}))}))},i}(a);export{u as U};
