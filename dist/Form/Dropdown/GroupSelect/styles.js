"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelect = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _sharedStyles = require("../../sharedStyles");
var _zindex = _interopRequireDefault(require("../../../interface/zindex"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var StyledSelect = exports.StyledSelect = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  cursor: pointer;\n  position: relative;\n  line-height: 13px;\n  user-select: none;\n  color: ", ";\n  z-index: ", ";\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n  min-height: 16px;\n\n  //\u0442\u0443\u0442 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C div \u0435\u0441\u043B\u0438 \u0432\u0434\u0440\u0443\u0433 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u043B\u0438 \u0438\u043A\u043E\u043D\u043A\u0438 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\n  & > input, & > div.input{\n    width: 100%;\n    pointer-events: none;\n    color: ", ";\n    background-color: ", ";\n    padding: 0 !important;\n  }\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.inputTextColor;
}, _zindex["default"].input, function (_ref2) {
  var theme = _ref2.theme;
  return theme.selectTextColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.selectBackgroundColor;
}, _sharedStyles.placeholderActiveStyle);