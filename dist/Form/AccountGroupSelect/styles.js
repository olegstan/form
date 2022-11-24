"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubItem = exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.HeaderItem = exports.Add = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const InputWrapper = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  \n"])), _newstyles.sharedSelectWrapperStyle);
exports.InputWrapper = InputWrapper;
const Selected = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
exports.Selected = Selected;
const Select = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
exports.Select = Select;
const Item = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
exports.Item = Item;
const HeaderItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #4378FF;\n  cursor: pointer;\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  background-color: #EFF2F5;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #E1E6EC;\n  \n  span{\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n"])));
exports.HeaderItem = HeaderItem;
const Add = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  \n  align-items: center;\n  color: #000;\n  cursor: pointer;\n  line-height: 40px;\n  display: flex;\n  padding: 0 15px;\n  border-bottom: 1px #fff solid !important;\n  user-select: none;\n\n  span{\n    text-align: left;\n    font-size: 14px;\n    font-weight: 600;\n    width: 100%;\n  }\n\n  &:last-child {\n    border-bottom: 0;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"])), _newstyles.sharedItemStyle);
exports.Add = Add;
const SubItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #4378FF;\n  cursor: pointer;\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  background-color: #EFF2F5;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #E1E6EC;\n  \n  span{\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n  \n  &:last-child span{\n    border-bottom: none;\n  }\n  \n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n  \n  span:hover{\n    background-color: #E1E6EC;\n    \n    border-radius: 8px;\n  }\n"])));
exports.SubItem = SubItem;