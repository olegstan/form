"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelect = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _zindex = _interopRequireDefault(require("../../../interface/zindex"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var StyledSelect = exports.StyledSelect = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  cursor: pointer;\n  position: relative;\n  line-height: 13px;\n  user-select: none;\n  color: ", ";\n  z-index: ", ";\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.inputTextColor;
}, _zindex["default"].input);