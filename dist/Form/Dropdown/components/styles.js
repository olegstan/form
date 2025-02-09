"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledOption = exports.StyledLoader = exports.OptionsWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _zindex = _interopRequireDefault(require("../../../interface/zindex"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var rotate = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var StyledOption = exports.StyledOption = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #4378FF;\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  flex-wrap: wrap;\n  cursor: pointer;\n\n  background-color: ", "\n\n  span {\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n\n  &:last-child span {\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  span:hover {\n    background-color: ", ";\n    border-radius: 8px;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.inputContainerDisabledBackground;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.selectOptionBackgroundHovererColor;
});
var OptionsWrapper = exports.OptionsWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-radius: 0 0 4px 4px;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 20px 48px ", ";\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 250px;\n  z-index: ", ";\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(10, 10, 10, 0.2);\n    border-radius: 4px;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.selectShadowColor;
}, _zindex["default"].input, function (_ref4) {
  var theme = _ref4.theme;
  return theme.selectScrollBarColor;
});
var StyledLoader = exports.StyledLoader = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 48px;\n\n  flex-basis: 48px;\n  position: absolute;\n  right: 36px;\n\n  img, svg {\n    position: absolute;\n    top: 8px;\n    height: 30px;\n    width: 30px;\n    right: -20px;\n    animation: ", " 2s linear infinite;\n  }\n"])), rotate);