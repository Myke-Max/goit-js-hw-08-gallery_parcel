// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/gallery-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}];
exports.default = _default;
},{}],"src/gallery-hm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onlistenerClick = exports.insertEl = void 0;

var _galleryItems = _interopRequireDefault(require("./gallery-items.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refs = {
  gallery: document.querySelector('.js-gallery'),
  galleryItems: document.querySelector('.gallery__item'),
  galleryLink: document.querySelector('.gallery__link'),
  galleryImg: document.querySelector('.gallery__image'),
  openModal: document.querySelector('.js-lightbox'),
  backdrop: document.querySelector('.lightbox__overlay'),
  modalImg: document.querySelector('.lightbox__image'),
  modalCloseBtn: document.querySelector('.lightbox__button')
};

var galleryList = _galleryItems.default.map(function (_ref) {
  var preview = _ref.preview,
      original = _ref.original,
      desciption = _ref.desciption;
  return "<li class=\"gallery__item\">\n  <a class= \"gallery__link\"  href=".concat(original, ">\n    <img\n      class=\"gallery__image\"\n      src=").concat(preview, "\n      data-source=").concat(original, "\n      alt=").concat(desciption, "\n    />\n  </a>\n</li>");
}).join(' ');

var insertEl = function insertEl() {
  return refs.gallery.insertAdjacentHTML('afterBegin', galleryList);
};

exports.insertEl = insertEl;

var onImgClick = function onImgClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  e.preventDefault();
  refs.openModal.classList.add('is-open');
  refs.modalImg.src = e.target.dataset.source;
  refs.modalCloseBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onBackDropClose);
  window.addEventListener('keydown', onEscClose);
  window.addEventListener('keydown', onArrowClick);
};

var onCloseModal = function onCloseModal() {
  refs.openModal.classList.remove('is-open');
  refs.modalImg.src = "";
};

var onEscClose = function onEscClose(e) {
  if (e.code === "Escape") {
    onCloseModal();
  }
};

var onBackDropClose = function onBackDropClose(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
};

var onArrowClick = function onArrowClick(e) {
  if (e.code !== 'ArrowLeft' && e.code !== 'ArrowRight') {
    return;
  }

  var currentImg = _galleryItems.default.find(function (img) {
    return img.original === refs.modalImg.src;
  });

  var currentIndex = e.code === 'ArrowLeft' ? _galleryItems.default.indexOf(currentImg) - 1 : _galleryItems.default.indexOf(currentImg) + 1;

  if (currentIndex < 0) {
    currentIndex = _galleryItems.default.length - 1;
  }

  if (currentIndex === _galleryItems.default.length) {
    currentIndex = 0;
  }

  refs.modalImg.src = _galleryItems.default[currentIndex].original;
  refs.modalImg.alt = _galleryItems.default[currentIndex].description;
};

var onlistenerClick = function onlistenerClick() {
  return refs.gallery.addEventListener('click', onImgClick);
}; // const refs = {
//   gallery: document.querySelector('.js-gallery'),
//   galleryLink: document.querySelector('.gallery__link'),
//   galleryImg: document.querySelector('.lightbox__image'),
//   modal: document.querySelector('.js-lightbox'),
//   modalCloseBtn: document.querySelector('.lightbox__button'),
//   backdrop: document.querySelector('.lightbox__overlay')
// }
// let defaultIndex;
// const makeGalleryList = galleryItems.map((images, index) => {
//   const { preview, original, description } = images
//     const createLi = document.createElement('li')
//   createLi.classList.add('gallery__item')
//     const createA = document.createElement('a')
//   createA.classList.add('gallery__link')
//   createA.href = original
//     const createImg = document.createElement('img')
//     createImg.classList.add('gallery__image')
//       createImg.src = preview
//       createImg.alt = description
//       createImg.dataset.source = original
//       createImg.dataset.index = index
//       createA.appendChild(createImg)
//       createLi.appendChild(createA)
//    return createLi
// })
// refs.gallery.append(...makeGalleryList)
// function onGalleryClick(event) {
//   event.preventDefault()
//   if (event.target.nodeName !== 'IMG') {
//    return
//   }
//   defaultIndex = Number(event.target.dataset.index)
//   refs.modal.classList.add('is-open')
//   refs.galleryImg.src = event.target.dataset.source
//   refs.modalCloseBtn.addEventListener('click', onCloseModal)
//   refs.backdrop.addEventListener('click', onBackDropClose)
//   window.addEventListener('keydown',controlImageByArrow)
// }
// refs.gallery.addEventListener('click', onGalleryClick)
// function onCloseModal() {
//   refs.modal.classList.remove('is-open')
//   refs.galleryImg.src = ''
// }
// function onBackDropClose(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal()
//   }
// }
// function onEscapeClick(event) {
//   if (event.code === 'Escape') {
//     onCloseModal()
//   }
// }
// function controlImageByArrow(event) {
//   onEscapeClick(event)
//   nextImg(event)
//   prevImg (event)
// }
// function onNewImg() {
//   const newIndex = galleryItems[defaultIndex].original;
//   refs.galleryImg.src = newIndex;
// }
// function nextImg(event) {
//   if (event.code === 'ArrowRight' && defaultIndex < galleryItems.length - 1) {
//     defaultIndex += 1;
//     onNewImg();
//   }
// }
// function prevImg(event) {
//   if (event.code === 'ArrowLeft' && defaultIndex > 0) {
//     defaultIndex -= 1;
//     onNewImg();
//   }
// }


exports.onlistenerClick = onlistenerClick;
},{"./gallery-items.js":"src/gallery-items.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _galleryHm = require("./gallery-hm");

(0, _galleryHm.insertEl)();
(0, _galleryHm.onlistenerClick)(); // import * as gallery from "./gallery-hm"
// console.log(gallery)
// gallery.insertEl()
// gallery.onlistenerClick()
},{"./gallery-hm":"src/gallery-hm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55663" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map