"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledOption = exports.OptionsWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _zindex = _interopRequireDefault(require("../../../interface/zindex"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var StyledOption = exports.StyledOption = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  flex-wrap: wrap;\n  cursor: pointer;\n  width: 100%;\n\n  background-color: ", "\n\n  span {\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n\n  &:last-child span {\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  span:hover {\n    background-color: ", ";\n    border-radius: 8px;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.selectOptionTextColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.inputContainerDisabledBackground;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.selectOptionBackgroundHovererColor;
});
var OptionsWrapper = exports.OptionsWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  border-radius: 0 0 4px 4px;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 20px 48px ", ";\n  background-color: ", ";\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 250px;\n  z-index: ", ";\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    background-color: ", ";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(10, 10, 10, 0.2);\n    border-radius: 4px;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.selectShadowColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.selectWrapperOptionBackgroundColor;
}, _zindex["default"].input, function (_ref6) {
  var theme = _ref6.theme;
  return theme.selectScrollBarColor;
});