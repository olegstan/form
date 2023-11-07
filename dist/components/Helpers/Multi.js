"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/web.dom-collections.iterator.js");
class Multi {
  static extend() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }
    var args = [];
    let length = params.length;
    for (var i = 0; i < length; i++) {
      if (i > 0) {
        args.push(params[i]);
      }
    }
    const creator = (parts, part) => part(parts);
    const extender = function extender() {
      for (var _len2 = arguments.length, parts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        parts[_key2] = arguments[_key2];
      }
      return parts.reduce(creator, params[0]);
    };
    return extender(...args);
  }
}
exports.default = Multi;