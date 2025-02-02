"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelect = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _zindex = _interopRequireDefault(require("../../interface/zindex"));
var _templateObject;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
// export const InputWrapper = styled.div`
//    ${sharedSelectWrapperStyle}
// `
//
// export const Selected = styled.div`
//     ${sharedSelectedStyle}
// `
//
// export const Select = styled.div`
//   ${sharedSelectStyle}
// `
//
// export const Item = styled.div`
//   ${sharedItemStyle}
// `

var StyledSelect = exports.StyledSelect = _styledComponents["default"].select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  appearance: none;\n  width: 100%;\n  line-height: 13px;\n  height: 19px;\n  user-select: none;\n  color: ", ";\n  z-index: ", ";\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n\n  &:focus {\n    outline: 0;\n  }\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.inputTextColor;
}, _zindex["default"].input, _newstyles.placeholderActiveStyle);