"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));

var _styles = require("../styles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}






var MultiValue = function MultiValue(_ref) {var data = _ref.data,removeProps = _ref.removeProps;
  return (/*#__PURE__*/
    (0, _jsxRuntime.jsxs)(_styles.TagText, _objectSpread(_objectSpread({}, removeProps), {}, { children: [
      data.label, /*#__PURE__*/
      (0, _jsxRuntime.jsx)("button", {
        type: "button",
        onClick: function onClick(e) {var _removeProps$onClick;
          e.stopPropagation();
          // Приводим тип event.target к EventTarget, чтобы избежать несоответствия
          (_removeProps$onClick = removeProps.onClick) === null || _removeProps$onClick === void 0 || _removeProps$onClick.call(removeProps,
          e
          );
        },
        style: {
          marginLeft: 8,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.2em'
        },
        "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", children:
        "\xD7" }

      )] })
    ));

};var _default = exports["default"] =

MultiValue;
//# sourceMappingURL=MultiValue.js.map