"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelect = exports.StyledOption = exports.OptionsWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _sharedStyles = require("./../sharedStyles");
var _zindex = _interopRequireDefault(require("../../interface/zindex"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var StyledOption = exports.StyledOption = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _sharedStyles.sharedOptionStyle);
var OptionsWrapper = exports.OptionsWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), _sharedStyles.sharedOptionsWrapperStyle);
var StyledSelect = exports.StyledSelect = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  cursor: pointer;\n  height: 50px;\n  position: relative;\n  background-color: ", ";\n  border-radius: 7px;\n  \n  & > input{\n    width: 100%;\n    pointer-events: none;\n    color: ", ";\n  }\n  \n  // appearance: none;\n  // width: 100%;\n  // line-height: 13px;\n  // height: 50px;\n  // user-select: none;\n  // color: ", ";\n  // z-index: ", ";\n  // transition: border-color .25s ease-in-out;\n  // border: none;\n  // background-color: transparent;\n  // padding: 24px 12px 8px 14px;\n  // font-size: 14px;\n  // font-style: normal;\n  // font-weight: 500;\n  // text-align: left;\n  // border-radius: 6px;\n  //\n  // &:focus {\n  //   outline: 0;\n  // }\n  //\n  // ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.selectBackgroundColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.selectTextColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.inputTextColor;
}, _zindex["default"].input, _sharedStyles.placeholderActiveStyle);