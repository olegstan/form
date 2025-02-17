"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedButtonStyle = exports.StyledButton = exports.Link = exports.InlineLink = exports.ButtonLink = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactRouterDom = require("react-router-dom");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var sharedButtonStyle = exports.sharedButtonStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 28px;\n  white-space: nowrap;\n  height: 48px;\n  border-radius: 10px;\n  border: none;\n  transition: .3s all;\n  outline: none;\n  font-style: normal;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  font-family: inherit;\n  margin: 15px 5px;\n  min-width: 100px;\n  font-weight: 700 !important;\n\n  &.narrow {\n    height: 40px; /* \u0423\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u043C \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 \u043E\u0442\u0441\u0442\u0443\u043F\u044B */\n    line-height: 20px;\n    padding: 0;\n    margin: 0;\n  }\n  \n  &.margin {\n    margin: 10px;\n  }\n  \n  &.wide {\n    width: 100%;\n  }\n  \n  &.main{\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &.cancel{\n    background-color: ", ";\n    color: ", ";\n  }\n  \n  &.block{\n    background-color: ", ";\n    color: ", ";\n  }\n  \n  \n\n  &:disabled, &.disabled {\n    color: #7F818D !important;\n    background-color: #7F818D !important;\n  }\n\n  svg, img {\n    height: 10px !important;\n    margin-top: 4px !important;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.mainButtonBackgroundColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.mainButtonTextColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.cancelButtonBackgroundColor;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.cancelButtonTextColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.blockButtonBackgroundColor;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.blockButtonTextColor;
});
var StyledButton = exports.StyledButton = _styledComponents["default"].button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedButtonStyle);
var Link = exports.Link = _styledComponents["default"].a(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedButtonStyle);
var InlineLink = exports.InlineLink = _styledComponents["default"].a(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedButtonStyle);
var ButtonLink = exports.ButtonLink = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedButtonStyle);