"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selected = exports.Select = exports.Item = exports.InputWrapper = exports.DaysTitle = exports.DaysContainer = exports.Day = exports.Container = exports.CalendarContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _newstyles = require("../newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  background-color: #fff;\n  border-bottom: 1px solid #c4c4c4;\n  margin: 20px;\n  box-sizing: content-box;\n  min-width: 350px;\n  flex: 1;\n"])));
exports.Container = Container;
const InputWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  box-sizing: border-box;\n  background-color: transparent;\n  outline: none;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-top: 11px;\n  \n  .arrow {\n    position: absolute;\n    right: 20px;\n    top: 12px;\n    width: 12px;\n    height: 28px;\n  }\n  \n  .error{\n      font-size: 8px;\n      line-height: 58px;\n      display: block;\n      width: 100%;\n      position: absolute;\n      top: 15px;\n      left: 0;\n      user-select: none;\n      z-index: 2500;\n      color: red;\n      text-align: center;\n      cursor: pointer;\n    }\n    \n    .placeholder{\n      font-size: 10px;\n      line-height: 0.1;\n      display: block;\n      width: 100%;\n      position: absolute;\n      top: 5px;\n      left: 25px;\n      user-select: none;\n      z-index: 2500;\n      color: #7b7b7b;\n      text-align: left;\n    }\n"])));
exports.InputWrapper = InputWrapper;
const Selected = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedSelectedStyle);
exports.Selected = Selected;
const Select = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedSelectStyle);
exports.Select = Select;
const Item = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), _newstyles.sharedItemStyle);
exports.Item = Item;
const CalendarContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n   margin: 20px;\n   max-width: 490px;\n    \n    \n"])));
exports.CalendarContainer = CalendarContainer;
const DaysContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    \n    \n    \n"])));
exports.DaysContainer = DaysContainer;
const DaysTitle = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    text-align: left;\n    width: 100%;\n    margin-left: 10px;\n    font-size: 16px;\n"])));
exports.DaysTitle = DaysTitle;
const Day = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    height: 30px;\n    width: 30px;\n    border-radius: 20px;\n    line-height: 30px;\n    margin: 10px;\n    cursor: pointer;\n    \n    &.active{\n      background-color: #51A0FA;\n      color: #fff;\n    }\n"])));
exports.Day = Day;