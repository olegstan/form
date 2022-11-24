"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selected = exports.Select = exports.Row = exports.Item = exports.InputWrapper = exports.InputContainer = exports.Input = exports.Container = exports.Button = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("./newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Input = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedInputStyle);
exports.Input = Input;
const InputContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    display: flex;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    height: 43px;\n    background-color: #fff;\n    flex: 1;\n    position: relative;\n    \n    input::placeholder\n    {\n      color: transparent;\n    }\n    \n    ", "\n    \n    label.error{\n      ", "\n    }\n"])), _newstyles.placeholderStyle, _newstyles.errorStyle);
exports.InputContainer = InputContainer;
const Container = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    height: 51px;\n    background-color: #fff;\n    margin: 20px;\n    border: 1px solid #D2D1D1;\n    flex: 1;\n    border-radius: 8px;\n"])));
exports.Container = Container;
const Button = _styledComponents.default.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: #fff;\n    background: #4378FF;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 18px;\n    line-height: 20px;\n    padding: 8px 58px;\n    white-space: nowrap;\n    height: 40px;\n    border-radius: 10px;\n    border: none;\n    transition: .3s all;\n    outline: none;\n    font-style: normal;\n    font-weight: 600;\n    \n    &.style1{\n      background: #F5F5F5;\n      color: #4378FF;\n    }\n    \n    :hover{\n      background: #EAF9FF;\n      color: #fff;\n    }\n        \n    ", "\n    \n    ", "\n"])), props => props.position === 'right' && "\n      margin: 0 0 0 auto;\n    ", props => props.size === 'full' && "\n      width: 100%;\n    ");

///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////   input select currency   ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
exports.Button = Button;
const InputWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  box-sizing: border-box;\n  background-color: transparent;\n  outline: none;\n  display: flex;\n  align-items: center;\n  //width: 58px;\n  color: #fff;\n  border-left: 1px solid hsla(0,0%,100%,.2);\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n  height: 49px;\n  line-height: 49px;\n  margin-top: 11px;\n   \n  \n  &.disabled{\n    background-color: #F7F9FB !important;\n  }\n  \n  .arrow {\n    position: absolute;\n    right: 20px;\n    top: 12px;\n    width: 12px;\n    height: 28px;\n  }\n  \n  .error{\n      font-size: 8px;\n      line-height: 58px;\n      display: block;\n      width: 100%;\n      position: absolute;\n      top: 15px;\n      left: 0;\n      user-select: none;\n      z-index: 2500;\n      color: red;\n      text-align: center;\n    }\n    \n    .placeholder{\n      font-size: 10px;\n      line-height: 0.1;\n      display: block;\n      width: 100%;\n      position: absolute;\n      top: 5px;\n      left: 25px;\n      user-select: none;\n      z-index: 2500;\n      color: #7b7b7b;\n      text-align: left;\n    }\n"])));
exports.InputWrapper = InputWrapper;
const Selected = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
exports.Selected = Selected;
const Select = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
exports.Select = Select;
const Item = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
exports.Item = Item;
const Row = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n"])));
exports.Row = Row;