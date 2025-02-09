"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedInputStyle = exports.placeholderActiveStyle = void 0;
var _zindex = _interopRequireDefault(require("../interface/zindex"));
var _styledComponents = require("styled-components");
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var placeholderActiveStyle = exports.placeholderActiveStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  & + .placeholder{\n    pointer-events: none;\n    font-size: 10px;\n    line-height: 0.1;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    user-select: none;\n    text-align: left;\n    color: ", ";\n    z-index: 1000;\n    width: 300px;\n  }\n  \n  //\u0441\u043A\u0440\u044B\u0442\u044B\u0439 placeholder \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0434\u0451\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E\n  &::placeholder {\n    font-size: 100%;\n    transition: all 0.3s ease;\n    color: transparent !important;\n  }\n\n  & + .placeholder {\n    transition: transform .25s, opacity .25s ease-in-out;\n    transform-origin: 0 0;\n  }\n\n  //\u0435\u0441\u043B\u0438 \u043F\u043E\u043B\u0435 \u043D\u0435 \u043F\u0443\u0441\u0442\u043E\u0435 \u0438\u043B\u0438 \u0432 \u0444\u043E\u043A\u0443\u0441\u0435, \u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442 placeholder \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0441\u0432\u0435\u0440\u0445\u0443 \n  &:focus + .placeholder, & + .placeholder.active {\n    transform: translate(.25em, -15%) scale(.8);\n  }\n\n  &:not(textarea) {\n    max-height: 4em;\n  }\n\n  & + .placeholder {\n    padding: 25px 12px;\n    font-size: 14px;\n    text-align: left;\n    z-index: 1500;\n  }\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0 30px transparent inset !important;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.inputPlaceholderTextColor;
});
var sharedInputStyle = exports.sharedInputStyle = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  line-height: 13px;\n  height: 19px;\n  user-select: none;\n  color: ", ";\n  z-index: ", ";\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n\n  &:focus {\n    outline: 0;\n  }\n  \n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.inputTextColor;
}, _zindex["default"].input, placeholderActiveStyle);