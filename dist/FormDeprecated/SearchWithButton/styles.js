"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.Input = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  \n  .plus{\n      flex-basis: 50px;\n      margin: 0 10px 0 30px;\n      \n      div {\n        cursor: pointer;\n        width: 32px;\n        height: 32px;\n        line-height: 35px;\n        border-radius: 72px;\n        background-color: #F5F5F5;\n      }\n      \n      img{\n        width: 16px;\n        height: 16px;\n      }\n    }\n  \n"])), _newstyles.sharedSearchContainer);
var InputWrapper = exports.InputWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    height: 40px;\n    background-color: #fff;\n    border: 1px solid #D2D1D1;\n    flex: 1;\n    border-radius: 8px;\n    position: relative;\n    cursor: pointer;\n    \n    &.select{\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      border-bottom: 1px #fff solid !important;\n    }\n    \n    input::placeholder\n    {\n        color: transparent;\n    }\n    \n    img.arrow {\n      position: absolute;\n      right: 20px;\n      top: 12px;\n      width: 12px;\n      height: 20px;\n    }\n    \n    ", "\n    \n    label.error{\n      ", "\n    }\n    \n    ", "\n"])), _newstyles.placeholderStyle, _newstyles.errorStyle, function (props) {
  return props.size === 'small' && "\n        width: 100%;\n        max-width: 130px;\n        height: 30px;\n        line-height: 24px;\n        margin: 3px 2px;\n    ";
});
var Selected = exports.Selected = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
var Select = exports.Select = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
var Item = exports.Item = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
var Input = exports.Input = _styledComponents["default"].input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedInputStyle);