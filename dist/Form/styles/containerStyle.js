"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var sharedContainer = exports.sharedContainer = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  border: 1px solid #D2D1D1;\n  margin: 15px 10px;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n  \n  &.style1\n  {\n    border: 1px solid #454650;\n    background-color: #2B2D39;\n  }\n\n  &.style1{\n    label.placeholder {\n      color: #6F7080;\n      z-index: 1000;\n    }\n  }\n  \n  ", "\n  \n  ", "\n"])), function (props) {
  return props.disabled === true && "\n      background-color: #FAFAFA !important;\n      \n      &.style2\n      {\n        background-color: #2B2D39 !important;\n      }\n\n      \n      &:-webkit-autofill,\n      &:-webkit-autofill:hover, \n      &:-webkit-autofill:focus, \n      &:-webkit-autofill:active\n      {\n       -webkit-box-shadow: 0 0 0 30px #FAFAFA inset !important;\n      }\n  ";
}, function (props) {
  return props.slim && "\n      \n  ";
});