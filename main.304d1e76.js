parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=1;function n(n){t(e+=n)}function t(n){var t,l=document.getElementsByClassName("mySlides");if(console.log("hello dear"),0!==l.length){for(n>l.length&&(e=1),n<1&&(e=l.length),t=0;t<l.length;t++)l[t].style.display="none";l[e-1].style.display="block"}else console.error("No slides found.")}t(e),console.log("hello");var l=document.getElementById("prev-img");l.addEventListener("click",function(e){e.preventDefault(),n(-1)});var o=document.getElementById("next-img");o.addEventListener("click",function(e){e.preventDefault(),n(1)});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.304d1e76.js.map