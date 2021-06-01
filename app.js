"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sum = function sum(a, b) {
  return a + b;
};

sum(2, 3);

var Hero = /*#__PURE__*/function () {
  function Hero(name) {
    _classCallCheck(this, Hero);

    this._name = name;
  }

  _createClass(Hero, [{
    key: "name",
    get: function get() {
      return this.name;
    },
    set: function set(newName) {
      this._name = newName;
    }
  }]);

  return Hero;
}();

var hero = new Hero('Mike');