"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.sharedInputStyle = void 0;var _zindex = _interopRequireDefault(require("../interface/zindex"));
var _styledComponents = require("styled-components");
var _styles = require("./styles");var _templateObject;function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _taggedTemplateLiteral(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));}

var sharedInputStyle = exports.sharedInputStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  line-height: 13px;\n  user-select: none;\n  color: ", ";\n  z-index: ", ";\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n\n  //\u0441\u043A\u0440\u044B\u0442\u044B\u0439 placeholder \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u0434\u0451\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E\n  &::placeholder {\n    font-size: 100%;\n    transition: all 0.3s ease;\n    color: transparent !important;\n  }\n  \n  &.disabled{\n    color: ", " !important;\n    background-color: ", " !important;\n  }\n  \n  &:focus {\n    outline: 0;\n  }\n  \n  ", "\n"])),



function (_ref) {var theme = _ref.theme;return theme.inputTextColor;},
_zindex["default"].input,






















function (_ref2) {var theme = _ref2.theme;return theme.inputDisableTextColor;},
function (_ref3) {var theme = _ref3.theme;return theme.inputDisabledContainerBackground;},






_styles.webkitAutofillStyles);
//# sourceMappingURL=sharedStyles.js.map