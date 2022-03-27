!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/assets/js",r(r.s=1)}([function(t,e,r){"use strict";r.r(e);var n={now:function(){return window.performance&&window.performance.now?this.now=function(){return window.performance.now()}:this.now=function(){return+new Date},this.now()},cubicProgress:function(t){return t=(t=t<0?0:t)>1?1:t,(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},debounce:function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var o=this,a=arguments,u=function(){e=null,!n&&t.apply(o,a)},i=n&&!e;clearTimeout(e),e=setTimeout(u,r),i&&t.apply(o,a)}},throttle:function(t){var e,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=!1;function a(){o?(e=arguments,r=this):(t.apply(this,arguments),o=!0,setTimeout((function(){o=!1,e&&(a.apply(r,e),e=r=null)}),n))}return a},formatNumber:function(t){for(var e="",r=(t=t.toString()).length-1,n=0;r>=0;r--,n++)3===n?(n=0,e=t.substr(r,1)+" "+e):e=t.substr(r,1)+e;return e},declOfNum:function(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]},toggleClass:function(t,e){return document.querySelector(t).classList.toggle(e)},addClass:function(t,e){return document.querySelector(t).classList.add(e)},removeClass:function(t,e){return document.querySelector(t).classList.remove(e)},"formatСurrency":function(t){return"$ ".concat(t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g," "))},fieldLength:function(t){var e=t.value.length;t.style.maxWidth=e>3?"calc(".concat(e," * 10px)"):"32px"},removeItem:function(t,e){return t.target.closest(e).remove()},setSubtotal:function(t){var e=document.querySelector(".table_td-subtotal");e.textContent=n.formatСurrency(t),e.dataset.value=t},setTotal:function(t){var e=Number(document.querySelector(".table__td-tax").dataset.value),r=Number(document.querySelector(".table__td-shipping").dataset.value);document.querySelector(".table__td-total").textContent=n.formatСurrency(t+e+r)}};e.default=n},function(t,e,r){t.exports=r(2)},function(t,e,r){(function(t){function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var o=n((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.env=r(4).default,this.utils=r(0).default,this.classes={Signal:r(5).default},this.components=r(6).default,this.helpers={},this.modules={},document.addEventListener("DOMContentLoaded",(function(){document.documentElement.classList.remove("_loading")}))}));t.ProjectApp=new o}).call(this,r(3))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";r.r(e);var n=window.environmentObject,o={isMobile:"_mobile"===n.platform,isDesktop:"_desktop"===n.platform,isMac:"_mac"===n.os,isWin:"_win"===n.os,isLinux:"_linux"===n.os,isAndroid:"_android"===n.os,isIOS:"_ios"===n.os,isFF:"_ff"===n.browser,isOpera:"_opera"===n.browser,isYandex:"_yandex"===n.browser,isIE:"_ie"===n.browser,isEdge:"_edge"===n.browser,isChrome:"_chrome"===n.browser,isSafari:"_safari"===n.browser,isLocal:n.isLocal};window.environmentObject=null,delete window.environmentObject,e.default=o},function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(e);var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handlers=[]}var e,r,o;return e=t,(r=[{key:"_throwError",value:function(){throw new TypeError("Signal handler must be function!")}},{key:"add",value:function(t,e){return"function"!=typeof t?(this._throwError(),null):(this.handlers.push({handler:t,context:e}),t)}},{key:"remove",value:function(t){if("function"!=typeof t)return this._throwError(),null;for(var e=this.handlers.length,r=0;r<e;r++)if(t===this.handlers[r].handler)return this.handlers.splice(r,1),t;return null}},{key:"call",value:function(){for(var t=this.handlers.length,e=0;e<t;e++){var r=this.handlers[e];r.handler.apply(r.context||null,arguments)}}},{key:"delayedCall",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;e=e||100;var r=Array.prototype.slice.call(arguments);r.shift(),setTimeout((function(){t.call.apply(t,r)}),e)}}])&&n(e.prototype,r),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=o},function(t,e,r){"use strict";r.r(e);var n=r(0);function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(){var t=0;o(document.querySelectorAll(".product-card")).forEach((function(e){t+=Number(e.querySelector(".product-card__amount").value)*Number(e.querySelector(".product-card__amount").dataset.price)})),n.default.setSubtotal(t),n.default.setTotal(t)},i="plus",l="minus",c=document.querySelector(".container-right-block__basket"),s=function(t,e){var r=t.querySelector(".product-card__amount"),o=document.querySelector(".table_td-subtotal");switch(e){case i:r.value++,n.default.setSubtotal(Number(o.dataset.value)+Number(r.dataset.price)),n.default.setTotal(Number(o.dataset.value)),n.default.fieldLength(r);break;case l:r.value--,n.default.setSubtotal(Number(o.dataset.value)-Number(r.dataset.price)),n.default.setTotal(Number(o.dataset.value)),n.default.fieldLength(r)}},f=function(){c.addEventListener("click",(function(t){if(t.target.classList.contains("button_minus")){var e=t.target.closest(".product-card").querySelector(".product-card__amount");Number(e.value)>1?s(t.target.closest(".product-card"),l):1===Number(e.value)&&n.default.removeItem(t,".product-card")}else t.target.classList.contains("button_plus")?s(t.target.closest(".product-card"),i):t.target.classList.contains("button_delete")&&n.default.removeItem(t,".product-card")}))};function d(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var b=new MutationObserver((function(t){var e=document.querySelector(".button_basket-marker"),r=document.querySelector(".table__td-total");t.forEach((function(t){u(),t.target.childElementCount>1?e.textContent=t.target.childElementCount-1:(e.style.transform="scale(0)",r.textContent=n.default.formatСurrency(0),d(document.querySelectorAll(".table__tr-additional-expenses")).forEach((function(t){t.remove()})),b.disconnect())}))})),y=b;var p=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];document.querySelector(t).addEventListener("click",(function(){if(".button_toggle-menu"===t||".button_basket"===t)for(var e=0;e<r.length;e+=2)n.default.toggleClass(r[e],r[e+1]),document.querySelector(".menu").classList.contains("menu_active")||document.querySelector(".container").classList.contains("container-right-block_visible")?n.default.addClass("body","overflow-hidden"):n.default.removeClass("body","overflow-hidden");else for(var o=0;o<r.length;o+=2)n.default.toggleClass(r[o],r[o+1])}))};var h=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];document.querySelector(t).onfocus=function(){for(var t=0;t<r.length;t+=2)n.default.addClass(r[t],r[t+1])}};var v=function(){document.querySelectorAll(".control__radio input").forEach((function(t){t.addEventListener("click",(function(t){"card"===t.target.value?(n.default.removeClass(".container-left-block__credit-cart","hidden"),n.default.removeClass(".container-left-block__form-card-information","hidden"),n.default.addClass(".container-left-block__pay-pal","hidden")):(n.default.addClass(".container-left-block__credit-cart","hidden"),n.default.addClass(".container-left-block__form-card-information","hidden"),n.default.removeClass(".container-left-block__pay-pal","hidden"))}))}))};function _(t){return function(t){if(Array.isArray(t))return g(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var w=function(){_(document.querySelectorAll(".product-card__amount")).forEach((function(t){n.default.fieldLength(t)}))};function S(t){return function(t){if(Array.isArray(t))return A(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return A(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var C=function(){S(document.querySelectorAll(".money-format")).forEach((function(t){t.textContent=n.default.formatСurrency(t.textContent)}))};var j=function(){var t=document.querySelectorAll(".product-card__amount").length;document.querySelector(".button_basket-marker").textContent=t};u(),f(),y.observe(c,{childList:!0}),p(".button_toggle-menu",".button_toggle-menu","button_toggle-menu_active",".menu","menu_active"),p(".button_basket",".container","container-right-block_visible"),p(".form__button-search",".field__input_search","field__input_visible",".menu","menu_transform-right"),h(".header__form-search",".field__input_search","field__input_visible",".menu","menu_transform-right"),v(),w(),C(),j()}]);