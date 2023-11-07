"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubItem = exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.HeaderItem = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectWrapperStyle);
const Selected = exports.Selected = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
const Select = exports.Select = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
const Item = exports.Item = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
const HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
const SubItem = exports.SubItem = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSubItemStyle);