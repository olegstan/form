"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedSubItemStyle = exports.sharedSelectedStyle = exports.sharedSelectWrapperStyle = exports.sharedSelectStyle = exports.sharedSearchInputWrapperStyle = exports.sharedSearchContainerStyle = exports.sharedSearchContainer = exports.sharedItemStyle = exports.sharedInputStyle = exports.sharedInputContainerStyle = exports.sharedButtonStyle = exports.errorStyle = exports.SubItem = exports.StyledInput = exports.Selected = exports.Select = exports.Row = exports.MaskedStyledInput = exports.Loader = exports.Link = exports.Item = exports.InputContainer = exports.EmptyContainer = exports.DateStyledInput = exports.ContainerTextArea = exports.Checkbox = exports.ButtonLink = exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _reactRouterDom = require("react-router-dom");
var _reactFlatpickr = _interopRequireDefault(require("react-flatpickr"));
var _zindex = _interopRequireDefault(require("../interface/zindex"));
var _newstyles = require("./newstyles");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const rotate = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
const errorStyle = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #fff;\n    box-shadow: rgb(38 38 38 / 4%) 0px 1px 2px, rgb(38 38 38 / 16%) 0px 4px 8px;\n    width: 276px;\n    display: block;\n    font-size: 14px;\n    border-radius: 16px;\n    padding: 20px;\n"])));
exports.errorStyle = errorStyle;
const sharedSearchContainer = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  box-sizing: content-box;\n  //max-width: 490px;\n  flex: 1;\n  margin: 15px 10px;\n  width: 100%;\n  min-width: 200px;\n  border-radius: 8px;\n  position: relative;\n  \n  &.style1 .select, &.style1 .item, &.style1 .selected, &.style1 .wrapper{\n    background: #F5F5F5;\n    color: #4378FF;\n    border: none;\n  }\n  \n  &.style1 .item:hover, &.style1 .item.hovered{\n    background: #EAF9FF !important;\n  }\n  \n  &.style1 .select{\n  \n  }\n  &.style1 .item:hover, &.style1 .item.hovered{\n    background: #EAF9FF !important;\n  }\n  \n  &.style1 .item:hover span, &.style1 .item.hovered span{\n    background: #EAF9FF !important;\n  }\n  \n  &.style1 .item\n  {\n    background-color: #FAFAFA;\n  }\n  &.style1 .item .subitem\n  {\n    background-color: #FAFAFA;\n  }\n  //&.style1 .item:nth-child(even), .item:nth-child(even)\n  //{\n  //  background-color: #E5E5E5;\n  //}\n  \n  &.disabled{\n    //background-color: #FAFAFA !important;\n  }\n  \n  ", "\n  \n  \n  ", "\n"])), props => props.size === 'small' && "\n    max-width: 256px;\n  ", props => props.size === 'medium' && "\n      max-width: 418px;\n  ");
exports.sharedSearchContainer = sharedSearchContainer;
const sharedSearchInputWrapperStyle = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 48px;\n  background-color: #fff;\n  border: 1px solid #D2D1D1;\n  flex: 1;\n  border-radius: 8px;\n  cursor: pointer;\n  \n  &.select{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom: 1px #fff solid !important;\n  }\n  \n  input::placeholder\n  {\n    color: transparent;\n  }\n  \n  img.arrow {\n    position: absolute;\n    right: 20px;\n    top: 12px;\n    width: 12px;\n    height: 20px;\n  }\n  \n  &.disabled{\n    background-color: #FAFAFA !important;\n  }\n  \n  ", "\n"])), props => props.size === 'small' && "\n      width: 100%;\n      max-width: 130px;\n      height: 30px;\n      line-height: 24px;\n      margin: 3px 2px;\n  ");
exports.sharedSearchInputWrapperStyle = sharedSearchInputWrapperStyle;
const sharedSearchContainerStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  width: calc(100% - 58px);\n  outline: none;\n  display: flex;\n  flex: 1;\n  height: 48px;\n  padding: 0 4px;\n  \n  &.disabled{\n    background-color: #F7F9FB;\n  }\n  \n  ", "\n  \n  label.error{\n    ", "\n  }\n"])), _newstyles.placeholderStyle, errorStyle);
exports.sharedSearchContainerStyle = sharedSearchContainerStyle;
const sharedSelectWrapperStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n  border-radius: 8px;\n  \n  &.select{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  &.select .selected span{\n    border-bottom: 1px solid #E1E6EC;\n  }\n  \n  input::placeholder\n  {\n    color: transparent;\n  }\n  \n  img.arrow {\n    position: absolute;\n    right: 20px;\n    top: 11px;\n    width: 12px;\n    height: 20px;\n  }\n  \n  ", "\n  \n  label.placeholder{\n    top: 10px;\n    left: 17px;\n  }\n  \n  label.error{\n    ", "\n  }\n  \n  ", "\n"])), _newstyles.placeholderStyle, errorStyle, props => props.size === 'small' && "\n      width: 100%;\n      max-width: 130px;\n      height: 30px;\n      line-height: 24px;\n      margin: 3px 2px;\n  ");
exports.sharedSelectWrapperStyle = sharedSelectWrapperStyle;
const sharedButtonStyle = (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 28px;\n  white-space: nowrap;\n  height: 48px;\n  border-radius: 10px;\n  border: none;\n  transition: .3s all;\n  outline: none;\n  font-style: normal;\n  font-weight: 600;\n  margin: 15px 5px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 10px 20px;\n\n  &.style2{\n    background: #4378FF;\n    color: #FFFFFF;\n  }\n  &.style2:hover{\n    background: #3C6CE6;\n  }\n  &.style2:active{\n    background: #5685FF;\n  }\n\n  &.style1{\n      background: #EFF2F5;\n      color: #4378FF;\n  }\n  &.style1:hover{\n    background: #D7DADC;\n  }\n  &.style1:active{\n    background: #F1F3F6;\n  }\n  \n  &.style3{\n      background: #fff;\n      color: #4378FF;\n      \n      \n      \n      ", "\n  }\n  &.style3:hover{\n  \n  }\n  &.style3:active{\n  \n  }\n  &.style4{\n      background: #EFF2F5;\n      color: #FF624D;\n      min-width: auto;\n      padding: 10px 20px;\n      border-radius: 10px;\n      \n      ", "\n  }\n  &.style3:hover{\n  \n  }\n  &.style3:active{\n  \n  }\n  \n  \n  ", "\n  ", "\n"])), props => props.right && "\n        margin: 10px 40px 0 0;\n      ", props => props.right && "\n        margin: 10px 40px 0 0;\n      ", props => props.left && "\n    margin-left: 0;\n  ", props => props.slim && "\n    height: 40px;\n    line-height: 20px;\n  ");
exports.sharedButtonStyle = sharedButtonStyle;
const sharedSelectedStyle = (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  white-space: nowrap;\n  color: #4378FF;\n  align-items: center;\n  line-height: 21px;\n  padding: 16px 17px 0 17px;\n  text-align: left;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: keep-all;\n  overflow: hidden;\n  background-color: #EFF2F5;\n  border-radius: 8px;\n  \n  span{\n    display: block;\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n  }\n"])));
exports.sharedSelectedStyle = sharedSelectedStyle;
const sharedSelectStyle = (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-radius: 0 0 4px 4px;\n  position: absolute;\n  z-index: 30000;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 20px 48px rgba(255, 255, 255, 0.25);\n  display: none;\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 250px;\n\n  ", "\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    background-color: #F5F6FB;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(10,10,10,0.2);\n    border-radius: 4px;\n  }\n  \n  ", "\n"])), props => props.select && "\n    display: block;\n  ", props => props.size === 'incomes-and-expenses' && "\n      top: 30px;\n  ");
exports.sharedSelectStyle = sharedSelectStyle;
const sharedItemStyle = (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #4378FF;\n  cursor: pointer;\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  background-color: #EFF2F5;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #E1E6EC;\n\n  span{\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n\n  &:last-child span{\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  span:hover{\n    background-color: #E1E6EC;\n    border-radius: 8px;\n  }\n"])));
exports.sharedItemStyle = sharedItemStyle;
const sharedSubItemStyle = (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #4378FF;\n  cursor: pointer;\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  background-color: #EFF2F5;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #E1E6EC;\n\n  span{\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n\n  &:last-child span{\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  span:hover{\n    background-color: #E1E6EC;\n\n    border-radius: 8px;\n  }\n"])));
exports.sharedSubItemStyle = sharedSubItemStyle;
const sharedInputContainerStyle = (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  width: calc(100% - 58px);\n  outline: none;\n  display: flex;\n  flex: 1;\n  height: 46px;\n  padding: 0;\n  \n  &.disabled{\n    background-color: #F7F9FB;\n  }\n  \n  ", "\n  \n  img{\n    z-index: 1000;\n    cursor: pointer;\n  }\n  \n   label.error{\n      ", "\n   }\n   \n   img.calendar {\n    position: absolute;\n    right: 16px;\n    top: 14px;\n  }\n  \n   img.close{\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    cursor: pointer;\n  }\n  \n  \n  ", "\n  \n"])), _newstyles.placeholderStyle, errorStyle, props => props.slim && "\n    height: 38px;\n  ");
exports.sharedInputContainerStyle = sharedInputContainerStyle;
const sharedInputStyle = (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  line-height: 15px;\n  border-width: 0;\n  z-index: ", ";\n  color: #000;\n  transition: border-color .25s ease-in-out;\n  border-bottom: 3px solid rgba(255, 255, 255, .05);\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 8px;\n  \n  &:focus\n  {\n      outline: 0;\n  }\n  \n  ", "\n  \n  ", "\n    \n    ", "\n    \n    ", "\n    \n     ", "\n     \n     ", "\n"])), _zindex.default.input, _newstyles.placeholderActiveStyle, props => props.size === 'undersized' && "\n\n    width: 100%;\n    max-width: 220px;\n    height: 21px;\n    font-size: 12px;\n    line-height: 21px;\n    padding: 2px 5px;\n    \n    \n    :disabled{\n      height: 30px;\n      border-radius: 4px;\n    }\n  ", props => props.autoComplete === 'off' && "\n\n        input::-webkit-contacts-auto-fill-button, \n        input::-webkit-credentials-auto-fill-button {\n          visibility: hidden;\n          position: absolute;\n          right: 0;\n        }\n    ", props => props.size === 'incomes-and-expenses' && "\n      max-width: 120px !important;\n      min-width: 120px !important;\n    ", props => props.size === 'small' && "\n\n        width: 100%;\n        max-width: 220px;\n        height: 21px;\n        font-size: 12px;\n        line-height: 21px;\n        padding: 2px 5px;\n        \n        \n        :disabled{\n          height: 30px;\n          border-radius: 4px;\n        }\n    ", props => props.slim && "\n        padding: 14px 12px 8px 11px;\n\n        &::placeholder\n        {\n            color: #7F818D;\n        }\n    ");
exports.sharedInputStyle = sharedInputStyle;
const EmptyContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    display: flex;\n    box-sizing: border-box;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin: 15px 10px;\n    flex: 1;\n    border-radius: 8px;\n    position: relative;\n    min-width: 200px;\n    \n    ", "\n  \n  \n    ", "\n"])), props => props.size === 'small' && "\n      max-width: 256px;\n    ", props => props.size === 'medium' && "\n        max-width: 418px;\n    ");
exports.EmptyContainer = EmptyContainer;
const InputContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    ", "\n"])), sharedInputContainerStyle);
exports.InputContainer = InputContainer;
const StyledInput = _styledComponents.default.input(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    ", "\n"])), sharedInputStyle);
exports.StyledInput = StyledInput;
const MaskedStyledInput = (0, _styledComponents.default)(_reactInputMask.default)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    ", "\n"])), sharedInputStyle);
exports.MaskedStyledInput = MaskedStyledInput;
const DateStyledInput = (0, _styledComponents.default)(_reactFlatpickr.default)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    ", "\n"])), sharedInputStyle);
exports.DateStyledInput = DateStyledInput;
const Button = _styledComponents.default.button(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["    \n    ", "\n        \n    ", "\n        \n    ", "\n    \n    ", "\n    ", "\n"])), sharedButtonStyle, props => props.flex && "\n      flex: 1;\n      max-width: none;\n      min-width: fit-content;\n    ", props => props.position === 'right' && "\n      margin: 0 0 0 auto;\n    ", props => props.size === 'full' && "\n      width: 100%;\n    ", props => props.size === 'small' && "\n      border-radius: 8px;\n      font-size: 14px;\n      width: 96px;\n      height: 24px;\n      margin: 10px 5px;\n      padding: 2px 0;\n      min-width: 96px;\n      line-height: 12px;\n    ");
exports.Button = Button;
const Link = _styledComponents.default.a(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["   \n    ", "\n    \n    font-weight: 700 !important;\n    \n    ", "\n        \n    ", "\n    \n    ", "\n"])), sharedButtonStyle, props => props.flex && "\n      flex: 1;\n      max-width: none;\n      min-width: fit-content;\n    ", props => props.position === 'right' && "\n      margin: 0 0 0 auto;\n    ", props => props.size === 'full' && "\n      width: 100%;\n    ");
exports.Link = Link;
const ButtonLink = (0, _styledComponents.default)(_reactRouterDom.NavLink)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    ", "\n    \n    font-weight: 700 !important;\n    \n    ", "\n    \n    ", "\n    \n    ", "\n"])), sharedButtonStyle, props => props.flex && "\n      flex: 1;\n      max-width: none;\n      min-width: fit-content;\n    ", props => props.position === 'right' && "\n      margin: 0 0 0 auto;\n    ", props => props.size === 'full' && "\n      width: 100%;\n    ");
exports.ButtonLink = ButtonLink;
const ContainerTextArea = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fff;\n    flex: 1;\n"])));
exports.ContainerTextArea = ContainerTextArea;
const Row = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n    \n  ", "\n"])), props => props.flex && "\n    flex: 1;\n  ");
exports.Row = Row;
const Checkbox = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    ", "\n"])), _newstyles.sharedCheckboxStyle);
exports.Checkbox = Checkbox;
const Loader = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  height: 48px;\n  \n  flex-basis: 48px;\n  position: absolute;\n  right: 36px;\n  \n  img{\n    position: absolute;\n    top: 8px;\n    height: 30px;\n    width: 30px;\n    right: -20px;\n    animation: ", " 2s linear infinite;\n  }\n"])), rotate);
exports.Loader = Loader;
const Selected = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    ", "\n"])), sharedSelectedStyle);
exports.Selected = Selected;
const Select = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedSelectStyle);
exports.Select = Select;
const Item = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedItemStyle);
exports.Item = Item;
const SubItem = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedSubItemStyle);
exports.SubItem = SubItem;