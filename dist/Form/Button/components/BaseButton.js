"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _loader_white = _interopRequireDefault(require("../../../assets/loader_white.gif"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["Component", "loading", "className", "children", "type"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var BaseButton = function BaseButton(_ref) {
  var Component = _ref.Component,
    loading = _ref.loading,
    className = _ref.className,
    children = _ref.children,
    type = _ref.type,
    props = _objectWithoutProperties(_ref, _excluded);
  // Формируем список классов
  var classNames = [className];
  if ('disabled' in props) {
    classNames.push('disabled'); // Добавляем класс "disabled"
  }
  if ('narrow' in props) {
    classNames.push('narrow'); // Добавляем класс "narrow"
  }
  if ('withMargin' in props) {
    classNames.push('margin'); // Добавляем класс "narrow"
  }
  switch (type) {
    case 'cancel':
      classNames.push('cancel'); // Добавляем класс "narrow"
      break;
    case 'block':
      classNames.push('block'); // Добавляем класс "narrow"
      break;
    default:
      classNames.push('main');
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread(_objectSpread({}, props), {}, {
    onClick: props.disabled || loading ? function () {} : props === null || props === void 0 ? void 0 : props.onClick,
    disabled: props.disabled,
    className: classNames.join(' ') // Применяем классы
    ,
    children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: _loader_white["default"],
      alt: ""
    }) : children
  }));
};
var _default = exports["default"] = BaseButton;