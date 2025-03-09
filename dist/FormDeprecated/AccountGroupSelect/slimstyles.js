"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.SubItem = exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.HeaderItem = exports.Add = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newslimstyles = require("../newslimstyles");var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _taggedTemplateLiteral(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));}







var InputWrapper = exports.InputWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])),
_newslimstyles.sharedSelectWrapperStyle);


var Selected = exports.Selected = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n"])),
_newslimstyles.sharedSelectedStyle);


var Select = exports.Select = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])),
_newslimstyles.sharedSelectStyle);


var Item = exports.Item = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n\n  span:hover{\n    background-color: #EFF2F5;\n  }\n\n  &.style2 span:hover\n  {\n    background-color: #414250;\n  }\n"])),
_newslimstyles.sharedItemStyle);











var Add = exports.Add = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  \n  align-items: center;\n  color: #000;\n  cursor: pointer;\n  line-height: 40px;\n  display: flex;\n  padding: 0 15px;\n  border-bottom: 1px #fff solid !important;\n  user-select: none;\n\n  span{\n    text-align: left;\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n  }\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  &:hover {\n    text-decoration: underline;\n    //background-color: ;\n  }\n"])),
_newslimstyles.sharedItemStyle);



























var HeaderItem = exports.HeaderItem = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #4378FF;\n  cursor: pointer;\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  background-color: #EFF2F5;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #E1E6EC;\n\n  span{\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n"])));























var SubItem = exports.SubItem = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])),
_newslimstyles.sharedSubItemStyle);
//# sourceMappingURL=slimstyles.js.map