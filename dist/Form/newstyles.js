"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedInputStyle = exports.placeholderActiveStyle = exports.StyledTextArea = exports.StyledInput = exports.StyledCheckbox = exports.MaskedStyledInput = exports.InputContainerStyled = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _zindex = _interopRequireDefault(require("../interface/zindex"));
var _jsxRuntime = require("react/jsx-runtime");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10; // styles/containerStyle.js
// Миксин для автозаполнения в Chrome
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var webkitAutofillStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0 30px ", " inset !important;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.inputContainerBackground;
});

// Миксин для стилей в disabled-состоянии
var disabledStyles = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-color: ", " !important;\n  ", " // \u0447\u0442\u043E\u0431\u044B \u0432 disabled-\u0440\u0435\u0436\u0438\u043C\u0435 \u0442\u043E\u0436\u0435 \u0431\u044B\u043B\u043E \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\n\n  &.disabled {\n    background-color: ", ";\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.inputContainerDisabledBackground;
}, webkitAutofillStyles, function (_ref3) {
  var theme = _ref3.theme;
  return theme.inputContainerDisabledBackground;
});
var Container = exports.Container = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid ", ";\n  margin: 15px 10px;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n\n  //\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0447\u0442\u043E \u0443 \u0438\u043D\u043F\u0443\u0442\u0430 \u0435\u0441\u0442\u044C \u0442\u0430\u043A\u043E\u0439 \u043A\u043B\u0430\u0441\u0441, \u0437\u043D\u0430\u0447\u0438\u0442 \u043D\u0430\u0434\u043E \u043C\u0435\u043D\u044F\u0442\u044C border\n  &:has(.focused) {\n    border: 2px solid #4378FF;\n  }\n  &:has(.error) {\n    border: 2px solid #EF5E70;\n  }\n  \n  ", "\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.inputContainerBackground;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.inputContainerBorder;
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled && disabledStyles;
});
var InputContainerStyled = exports.InputContainerStyled = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  outline: none;\n  display: flex;\n  flex: 1;\n  padding: 0;\n  position: relative;\n  z-index: 100;\n\n  &.disabled {\n    background-color: ", ";\n  }\n\n  img {\n    z-index: 1000;\n    cursor: pointer;\n  }\n\n  img.calendar {\n    position: absolute;\n    right: 16px;\n    top: 14px;\n    pointer-events: none;\n  }\n\n  img.close {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    cursor: pointer;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.inputContainerDisabledBackground;
});
var StyledCheckbox = exports.StyledCheckbox = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  padding: 5px 12px;\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  transition: opacity 0.3s;\n  margin: 0;\n  user-select: none;\n  \n\n  & > div {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    letter-spacing: 0;\n    color: #E9E9EA;\n  }\n\n  & > input {\n    height: 0;\n    width: 0;\n    opacity: 0;\n    z-index: -10;\n    position: absolute;\n  }\n\n  & > span {\n    border: 2px solid ", ";\n    height: 18px;\n    width: 18px;\n    box-sizing: border-box;\n    margin-right: 10px;\n    background-color: ", ";\n    border-radius: 6px;\n    display: flex;\n  }\n\n  & > span > span {\n    display: block;\n    position: relative;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    width: 7px;\n    height: 11px;\n    top: 1px;\n    z-index: 1000;\n    left: 4px;\n    box-sizing: border-box;\n  }\n\n  & > input:checked + span {\n    background-color: ", ";\n    border: 2px solid ", ";\n  }\n\n  & > input:checked + span > span {\n    border-bottom: 3px solid ", ";\n    border-right: 3px solid ", ";\n  }\n\n  &:hover {\n    opacity: 0.7;\n  }\n"])), function (_ref8) {
  var theme = _ref8.theme;
  return theme.checkMarkColor;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.checkMarkColor;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.checkMarkColor;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.checkboxColor;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.checkboxColor;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.checkMarkColor;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.checkMarkColor;
});
var placeholderActiveStyle = exports.placeholderActiveStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  & + .placeholder{\n    pointer-events: none;\n    font-size: 10px;\n    line-height: 0.1;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    user-select: none;\n    text-align: left;\n    color: ", ";\n    z-index: 1000;\n    width: 300px;\n  }\n  \n  //\u0441\u043A\u0440\u044B\u0442\u044B\u0439 placeholder \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0434\u0451\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E\n  &::placeholder {\n    font-size: 100%;\n    transition: all 0.3s ease;\n    color: transparent !important;\n  }\n\n  & + .placeholder {\n    transition: transform .25s, opacity .25s ease-in-out;\n    transform-origin: 0 0;\n  }\n\n  //\u0435\u0441\u043B\u0438 \u043F\u043E\u043B\u0435 \u043D\u0435 \u043F\u0443\u0441\u0442\u043E\u0435 \u0438\u043B\u0438 \u0432 \u0444\u043E\u043A\u0443\u0441\u0435, \u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442 placeholder \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0441\u0432\u0435\u0440\u0445\u0443 \n  &:focus + .placeholder, & + .placeholder.active {\n    transform: translate(.25em, -15%) scale(.8);\n  }\n\n  &:not(textarea) {\n    max-height: 4em;\n  }\n\n  & + .placeholder {\n    padding: 25px 12px;\n    font-size: 16px;\n    text-align: left;\n    z-index: 1500;\n  }\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0 30px transparent inset !important;\n  }\n"])), function (_ref15) {
  var theme = _ref15.theme;
  return theme.inputPlaceholderTextColor;
});
var sharedInputStyle = exports.sharedInputStyle = (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  line-height: 13px;\n  height: 19px;\n  user-select: none;\n  color: ", ";\n  z-index: ", ";\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n\n  &:focus {\n    outline: 0;\n  }\n  \n  ", "\n"])), function (_ref16) {
  var theme = _ref16.theme;
  return theme.inputTextColor;
}, _zindex["default"].input, placeholderActiveStyle);
var StyledInput = exports.StyledInput = _styledComponents["default"].input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedInputStyle);
var MaskedStyledInput = exports.MaskedStyledInput = (0, _styledComponents["default"])(/*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactInputMask["default"], _objectSpread(_objectSpread({}, props), {}, {
    ref: ref
  }));
}))(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedInputStyle);
var StyledTextArea = exports.StyledTextArea = _styledComponents["default"].textarea(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  ", "\n\n  width: 100%;\n  resize: vertical;\n  overflow-y: hidden;\n  min-height: 57px;\n  height: auto;\n"])), sharedInputStyle);