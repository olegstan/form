"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.TagText = exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.Input = exports.Container = void 0;var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _taggedTemplateLiteral(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));}









var close = require('./../../assets/close_white.svg');
var closeHovered = require('./../../assets/close_white_hovered.svg');

var Container = exports.Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  \n  min-height: 46px;\n  \n  &.multi-select\n  {\n    border: none;\n  }\n\n  &.multi-select label.placeholder.active{\n    top: 10px;\n    left: 10px;\n    transform: translate(0.25em,-15%) scale(.8);\n  }\n"])),
_newstyles.sharedSearchContainer);















var TagText = exports.TagText = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: inline-block !important;\n    width: auto !important;\n    font-size: 14px !important;\n    font-style: normal;\n    font-weight: 500;\n    color: #7F818D;\n    cursor: pointer;\n    background-color: #EFF2F5;\n    border-radius: 8px;\n    padding: 0px 5px 0px 8px;\n    margin: 2px;\n    \n    div{\n        margin-left: 4px;\n        display: inline-block !important;\n        background-image: url(", ");\n        cursor: pointer;\n        width: 12px !important; \n        height: 12px !important;\n        background-position: center;\n        background-repeat: no-repeat;\n        \n        :hover{\n          background-image: url(", ");\n        }\n    }\n"])),















close,







closeHovered);




var InputWrapper = exports.InputWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 48px;\n    background-color: #fff;\n    flex: 1;\n    border-radius: 8px;\n    position: relative;\n    cursor: pointer;\n    \n    &.select{\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom: 1px #fff solid !important;\n    }\n    \n    input::placeholder\n    {\n        color: transparent;\n    }\n    \n    img.arrow {\n      position: absolute;\n      right: 20px;\n      top: 12px;\n      width: 12px;\n      height: 20px;\n    }\n    \n    ", "\n\n    label.placeholder{\n      z-index: auto !important;\n    }\n    \n    label.placeholder{\n      transition: .3s all;\n      top: 29px;\n      left: 12px;\n    }\n  \n    label.placeholder.active{\n      top: 10px;\n      left: -20px;\n      transform: translate(0.25em,-15%) scale(.8);\n    }\n    \n    label.error{\n      ", "\n    }\n    \n    &.disabled{\n      background-color: #FAFAFA !important;\n    }\n    \n    ", "\n"])),































_newstyles.placeholderStyle,


















_newstyles.errorStyle,






function (props) {return props.size === 'small' && "\n        width: 100%;\n        max-width: 130px;\n        height: 30px;\n        line-height: 24px;\n        margin: 3px 2px;\n    ";});








var Selected = exports.Selected = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ", "\n"])),
_newstyles.sharedSelectedStyle);


var Select = exports.Select = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])),
_newstyles.sharedSelectStyle);


var Item = exports.Item = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])),
_newstyles.sharedItemStyle);


var Input = exports.Input = _styledComponents["default"].input(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    ", "\n"])),
_newstyles.sharedInputStyle);
//# sourceMappingURL=newstyles.js.map