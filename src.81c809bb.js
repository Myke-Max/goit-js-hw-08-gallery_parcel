parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ebo5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"ZuQC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onlistenerClick=exports.insertEl=void 0;var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r={gallery:document.querySelector(".js-gallery"),galleryItems:document.querySelector(".gallery__item"),galleryLink:document.querySelector(".gallery__link"),galleryImg:document.querySelector(".gallery__image"),openModal:document.querySelector(".js-lightbox"),backdrop:document.querySelector(".lightbox__overlay"),modalImg:document.querySelector(".lightbox__image"),modalCloseBtn:document.querySelector(".lightbox__button")},n=e.default.map(function(e){var t=e.preview,r=e.original,n=e.desciption;return'<li class="gallery__item">\n  <a class= "gallery__link"  href='.concat(r,'>\n    <img\n      class="gallery__image"\n      src=').concat(t,"\n      data-source=").concat(r,"\n      alt=").concat(n,"\n    />\n  </a>\n</li>")}).join(" "),l=function(){return r.gallery.insertAdjacentHTML("afterBegin",n)};exports.insertEl=l;var o=function(e){"IMG"===e.target.nodeName&&(e.preventDefault(),r.openModal.classList.add("is-open"),r.modalImg.src=e.target.dataset.source,r.modalCloseBtn.addEventListener("click",a),r.backdrop.addEventListener("click",c),window.addEventListener("keydown",i),window.addEventListener("keydown",d))},a=function(){r.openModal.classList.remove("is-open"),r.modalImg.src=""},i=function(e){"Escape"===e.code&&a()},c=function(e){e.currentTarget===e.target&&a()},d=function(t){if("ArrowLeft"===t.code||"ArrowRight"===t.code){var n=e.default.find(function(e){return e.original===r.modalImg.src}),l="ArrowLeft"===t.code?e.default.indexOf(n)-1:e.default.indexOf(n)+1;l<0&&(l=e.default.length-1),l===e.default.length&&(l=0),r.modalImg.src=e.default[l].original,r.modalImg.alt=e.default[l].description}},s=function(){return r.gallery.addEventListener("click",o)};exports.onlistenerClick=s;
},{"./gallery-items.js":"ebo5"}],"H99C":[function(require,module,exports) {
"use strict";var e=require("./gallery-hm");(0,e.insertEl)(),(0,e.onlistenerClick)();
},{"./gallery-hm":"ZuQC"}]},{},["H99C"], null)
//# sourceMappingURL=/goit-js-hw-08-gallery_parcel/src.81c809bb.js.map