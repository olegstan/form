"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var sharedContainer = exports.sharedContainer = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  border: 1px solid #D2D1D1;\n  margin: 15px 10px;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n  \n  &.style1\n  {\n    border: 1px solid #454650;\n    background-color: #2B2D39;\n  }\n\n  &.style1{\n    label.placeholder {\n      color: #6F7080;\n      z-index: 1000;\n    }\n  }\n  \n  ", "\n  \n  ", "\n"])), function (props) {
  return props.disabled === true && "\n      background-color: #FAFAFA !important;\n      \n      &.style2\n      {\n        background-color: #2B2D39 !important;\n      }\n\n      \n      &:-webkit-autofill,\n      &:-webkit-autofill:hover, \n      &:-webkit-autofill:focus, \n      &:-webkit-autofill:active\n      {\n       -webkit-box-shadow: 0 0 0 30px #FAFAFA inset !important;\n      }\n  ";
}, function (props) {
  return props.slim && "\n      \n  ";
});