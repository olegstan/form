"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selected = exports.Select = exports.Item = exports.InputWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectWrapperStyle);
exports.InputWrapper = InputWrapper;
const Selected = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
exports.Selected = Selected;
const Select = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
exports.Select = Select;
const Item = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
exports.Item = Item;