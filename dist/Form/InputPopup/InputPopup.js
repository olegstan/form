"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}

var InputPopup = function InputPopup(_ref)


{var trigger = _ref.trigger,_children = _ref.children;
  var _useState = (0, _react.useState)(null),_useState2 = _slicedToArray(_useState, 2),Popup = _useState2[0],setPopup = _useState2[1];

  (0, _react.useEffect)(function () {
    Promise.resolve().then(function () {return _interopRequireWildcard(require('reactjs-popup'));}).then(function (module) {
      setPopup(function () {return module["default"];});
    });
  }, []);

  if (!Popup) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Container, { children: trigger });
  }

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(Popup, {
      on: 'hover',
      trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Container, { children: trigger }),
      position: "bottom center",
      contentStyle: { zIndex: 1000 }, children:


      function children(close) {return (/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.PopupContainer, { onClick: function onClick(e) {return e.stopPropagation();}, children:
            _children }
          ));} }

    ));

};var _default = exports["default"] =

InputPopup;
//# sourceMappingURL=InputPopup.js.map