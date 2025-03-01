"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selected = exports.Select = exports.Item = exports.InputWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var InputWrapper = exports.InputWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n   ", "\n"])), _newstyles.sharedSelectWrapperStyle);
var Selected = exports.Selected = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
var Select = exports.Select = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
var Item = exports.Item = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);