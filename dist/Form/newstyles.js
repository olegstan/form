"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedInputStyle = exports.placeholderActiveStyle = exports.StyledInput = exports.MaskedStyledInput = exports.InputContainer = exports.Container = exports.Checkbox = exports.Body = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _zindex = _interopRequireDefault(require("../interface/zindex"));
var _jsxRuntime = require("react/jsx-runtime");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8; // styles/containerStyle.js
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid ", ";\n  margin: 15px 10px;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n\n\n  label.placeholder {\n    color: #6F7080;\n    z-index: 1000;\n  }\n  \n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.inputContainerBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.inputContainerBorder;
}, function (props) {
  return props.disabled === true && "\n      background-color: #FAFAFA !important;\n      \n      &.style2\n      {\n        background-color: #2B2D39 !important;\n      }\n\n      \n      &:-webkit-autofill,\n      &:-webkit-autofill:hover, \n      &:-webkit-autofill:focus, \n      &:-webkit-autofill:active\n      {\n       -webkit-box-shadow: 0 0 0 30px #FAFAFA inset !important;\n      }\n  ";
});
var Body = exports.Body = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n"])));
var Checkbox = exports.Checkbox = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\n"])));
var InputContainer = exports.InputContainer = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  outline: none;\n  display: flex;\n  flex: 1;\n  height: 46px;\n  padding: 0;\n  position: relative;\n  z-index: 100;\n\n  &.disabled {\n    background-color: #F7F9FB;\n  }\n\n  img {\n    z-index: 1000;\n    cursor: pointer;\n  }\n\n  label.error {\n  }\n\n  img.calendar {\n    position: absolute;\n    right: 16px;\n    top: 14px;\n    pointer-events: none;\n  }\n\n  img.close {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    cursor: pointer;\n  }\n"])));
var placeholderActiveStyle = exports.placeholderActiveStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  &::placeholder {\n    font-size: 100%;\n    transition: all 0.3s ease;\n    color: transparent !important;\n  }\n\n  & + .placeholder {\n    transition: transform .25s, opacity .25s ease-in-out;\n    transform-origin: 0 0;\n  }\n\n  &:focus + .placeholder, & .placeholder.active {\n    transform: translate(.25em, -15%) scale(.8);\n  }\n\n  //&:focus:has(> div .placeholder), & .placeholder.active {\n  //  transform: translate(.25em, -15%) scale(.8);\n  //}\n\n  &:not(textarea) {\n    max-height: 4em;\n  }\n\n  & + .placeholder {\n    padding: 25px 12px;\n    font-size: 16px;\n    text-align: left;\n    z-index: 1500;\n  }\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0 30px transparent inset !important;\n  }\n"])));
var sharedInputStyle = exports.sharedInputStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  line-height: 13px;\n  user-select: none;\n  z-index: ", ";\n  color: #000;\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n\n  &:focus {\n    outline: 0;\n  }\n\n  &.style1 {\n    background-color: #2B2D39 !important;\n    color: #fff !important;\n  }\n\n  &.style2 {\n    background-color: #2B2D39 !important;\n    color: #fff !important;\n  }\n\n  ", "\n"])), _zindex["default"].input, placeholderActiveStyle);
var StyledInput = exports.StyledInput = _styledComponents["default"].input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedInputStyle);
var MaskedStyledInput = exports.MaskedStyledInput = (0, _styledComponents["default"])(/*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactInputMask["default"], _objectSpread(_objectSpread({}, props), {}, {
    ref: ref
  }));
}))(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedInputStyle);