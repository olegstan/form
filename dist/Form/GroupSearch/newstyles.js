"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubItem = exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.InputContainer = exports.Input = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSearchContainer);
exports.Container = Container;
const InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchInputWrapperStyle);
exports.InputWrapper = InputWrapper;
const Selected = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
exports.Selected = Selected;
const Select = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
exports.Select = Select;
const Item = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  \n  span:hover{\n    background-color: #EFF2F5;\n  }\n"])), _newstyles.sharedItemStyle);
exports.Item = Item;
const Input = _styledComponents.default.input(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedInputStyle);
exports.Input = Input;
const SubItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #000;\n  transition: all .3s ease;\n  cursor: pointer;\n  line-height: 38px;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 10px 0 50px;\n  border-bottom: 1px solid #c4c4c4;\n  width: 100%;\n  flex-basis: 100%;\n  background-color: #fafafa !important;\n  text-align: left;\n  \n  &:hover {\n    //background-color: #bdc4e5;\n    //border-bottom: 1px solid #FE9347;\n  }\n  \n  &:last-child {\n    border-bottom: 0;\n    margin-bottom: 15px;\n  }\n"])));
exports.SubItem = SubItem;
const InputContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSearchContainerStyle);
exports.InputContainer = InputContainer;