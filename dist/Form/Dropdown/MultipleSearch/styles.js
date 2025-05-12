"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.TagText = exports.StyledSelect = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _zindex = _interopRequireDefault(require("../../../interface/zindex"));var _templateObject, _templateObject2;function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _taggedTemplateLiteral(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));}

var closeHovered = require('./../../../assets/close_white_hovered.svg')["default"];

var StyledSelect = exports.StyledSelect = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  cursor: pointer;\n  position: relative;\n  line-height: 13px;\n  user-select: none;\n  color: ", ";\n  z-index: ", ";\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n"])),





function (_ref) {var theme = _ref.theme;return theme.inputTextColor;},
_zindex["default"].input);












var TagText = exports.TagText = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: inline-block !important;\n    width: auto !important;\n    font-size: 14px !important;\n    font-style: normal;\n    font-weight: 500;\n    color: #7F818D;\n    cursor: pointer;\n    background-color: #EFF2F5;\n    border-radius: 8px;\n    padding: 0px 5px 0px 8px;\n    margin: 2px;\n    \n    div{\n        margin-left: 4px;\n        display: inline-block !important;\n        background-image: url(", ");\n        cursor: pointer;\n        width: 12px !important; \n        height: 12px !important;\n        background-position: center;\n        background-repeat: no-repeat;\n        \n        :hover{\n          background-image: url(", ");\n        }\n    }\n"])),















close,







closeHovered);
//# sourceMappingURL=styles.js.map