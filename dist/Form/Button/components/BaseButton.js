"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));

var _loader_white = _interopRequireDefault(require("../../../assets/loader_white.gif"));var _jsxRuntime = require("react/jsx-runtime");var _excluded = ["Component", "loading", "disabled", "className", "children", "type", "narrow", "withMargin", "wide", "onClick"]; // @ts-ignore

// Интерфейс для пропсов кнопки
function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _objectWithoutProperties(e, t) {if (null == e) return {};var o,r,i = _objectWithoutPropertiesLoose(e, t);if (Object.getOwnPropertySymbols) {var n = Object.getOwnPropertySymbols(e);for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);}return i;}function _objectWithoutPropertiesLoose(r, e) {if (null == r) return {};var t = {};for (var n in r) if ({}.hasOwnProperty.call(r, n)) {if (-1 !== e.indexOf(n)) continue;t[n] = r[n];}return t;}













var BaseButton = function BaseButton(_ref)











{var Component = _ref.Component,_ref$loading = _ref.loading,loading = _ref$loading === void 0 ? false : _ref$loading,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,children = _ref.children,_ref$type = _ref.type,type = _ref$type === void 0 ? 'main' : _ref$type,_ref$narrow = _ref.narrow,narrow = _ref$narrow === void 0 ? false : _ref$narrow,_ref$withMargin = _ref.withMargin,withMargin = _ref$withMargin === void 0 ? false : _ref$withMargin,_ref$wide = _ref.wide,wide = _ref$wide === void 0 ? false : _ref$wide,onClick = _ref.onClick,props = _objectWithoutProperties(_ref, _excluded);
  // Формируем список классов
  var classNames = [
  className,
  disabled && 'disabled',
  narrow && 'narrow',
  wide && 'wide',
  withMargin && 'margin',
  type // Добавляем класс на основе типа кнопки
  ].
  filter(Boolean) // Убираем falsy значения
  .join(' ');

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(Component, _objectSpread(_objectSpread({},
    props), {}, {
      onClick: disabled || loading ? undefined : onClick // Отключаем клик при disabled или loading
      , disabled: disabled,
      className: classNames.trim() // Применяем классы
      , children:
      loading ? /*#__PURE__*/
      (0, _jsxRuntime.jsx)("img", { src: _loader_white["default"], alt: "Loading..." }) :

      children })

    ));

};var _default = exports["default"] =

BaseButton;
//# sourceMappingURL=BaseButton.js.map