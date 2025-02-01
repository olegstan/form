"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedSubItemStyle = exports.sharedSelectedStyle = exports.sharedSelectWrapperStyle = exports.sharedSelectStyle = exports.sharedSearchInputWrapperStyle = exports.sharedSearchContainerStyle = exports.sharedSearchContainer = exports.sharedItemStyle = exports.sharedInputStyle = exports.sharedInputContainerStyle = exports.sharedCheckboxStyle = exports.sharedButtonStyle = exports.placeholderStyle = exports.placeholderActiveStyle = exports.errorStyle = exports.WrapperTextArea = exports.TextArea = exports.StyledInput = exports.Selected = exports.Select = exports.MaskedStyledInput = exports.Loader = exports.Link = exports.Item = exports.InputContainer = exports.InlineLink = exports.EmptyContainer = exports.ContainerTextArea = exports.Checkbox = exports.ButtonLink = exports.Button = exports.Body = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _reactRouterDom = require("react-router-dom");
var _zindex = _interopRequireDefault(require("../interface/zindex"));
var _containerStyle = require("./styles/containerStyle");
var _jsxRuntime = require("react/jsx-runtime");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Body = exports.Body = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 18px;\n  letter-spacing: 0;\n\n  color: #000000;\n\n  &.bold {\n    font-weight: 600;\n  }\n\n  &.green {\n    color: #7ED057 !important;\n  }\n\n  &.black {\n    color: #000 !important;\n  }\n\n  &.red {\n    color: #EF5E70 !important;\n  }\n\n  &.grey {\n    color: #7B7B7B !important;\n  }\n\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  return props.left && "\n     text-align: left;\n  ";
}, function (props) {
  return props.center && "\n     text-align: center;\n  ";
}, function (props) {
  return props.right && "\n     text-align: right;\n  ";
}, function (props) {
  return props.black && "\n    color: #000;\n  ";
}, function (props) {
  return props.grey && "\n    color: #7F818D;\n  ";
}, function (props) {
  return props.red && "\n    color: #EF5E70;\n  ";
}, function (props) {
  return props.green && "\n    color: #7ED057;\n  ";
}, function (props) {
  return props.full && "\n    flex-basis: 100%;\n  ";
});
var rotate = (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var placeholderStyle = exports.placeholderStyle = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  label.placeholder {\n    font-size: 12px;\n    line-height: 0.1;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    user-select: none;\n    z-index: ", ";\n    color: #7b7b7b;\n    font-style: normal;\n    font-weight: 500;\n    width: 300px;\n    text-align: left;\n    pointer-events: none;\n\n    ", "\n  }\n\n  label.placeholder.style2 {\n    color: #fff;\n  }\n\n  & .placeholder {\n    transition: transform .25s, opacity .25s ease-in-out;\n    transform-origin: 0 0;\n  }\n\n  & .placeholder.active {\n    transform: translate(.25em, -15%) scale(.8);\n  }\n"])), _zindex["default"].placeholder, function (props) {
  return props.size === 'small' && "\n      display: none;\n    ";
});
var sharedCheckboxStyle = exports.sharedCheckboxStyle = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 5px 12px;\n  margin: 6px 6px;\n\n  .checkbox {\n    display: flex;\n    align-items: center;\n    color: #E9E9EA;\n    cursor: pointer;\n    transition: opacity 0.3s;\n  }\n\n  .checkbox > div {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 18px;\n    letter-spacing: 0;\n    color: #E9E9EA;\n  }\n\n  .checkbox {\n    margin: 0;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  .checkbox > input {\n    height: 0;\n    width: 0;\n    opacity: 0;\n    z-index: -10;\n    position: absolute;\n  }\n\n  .checkbox > span {\n    border: 2px solid #D7DBE0;\n    height: 18px;\n    width: 18px;\n    display: inline-block;\n    box-sizing: border-box;\n    border-radius: 6px;\n    margin-right: 10px;\n    background-color: #fff;\n  }\n\n  .checkbox > span > span {\n    display: block;\n    position: relative;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    width: 7px;\n    height: 11px;\n    top: 1px;\n    z-index: 1000;\n    left: 4px;\n    box-sizing: border-box;\n  }\n\n  .checkbox > input:checked + span {\n    background-color: #4378FF;\n    border: 2px solid #4378FF;\n  }\n\n  .checkbox > input:checked + span > span {\n    border-bottom: 3px solid white;\n    border-right: 3px solid white;\n  }\n\n  .checkbox:hover {\n    opacity: 0.7;\n  }\n\n  .checkbox.active > img {\n    filter: invert(1);\n  }\n\n  .checkbox.active > div {\n    color: #000000;\n  }\n\n  .checkbox.active {\n    background-color: #E9E9EA;\n  }\n\n"])));
var placeholderActiveStyle = exports.placeholderActiveStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  &::placeholder {\n    font-size: 100%;\n    transition: all 0.3s ease;\n    color: transparent !important;\n  }\n\n  & + .placeholder {\n    transition: transform .25s, opacity .25s ease-in-out;\n    transform-origin: 0 0;\n  }\n\n  &:focus + .placeholder, & .placeholder.active {\n    transform: translate(.25em, -15%) scale(.8);\n  }\n  \n  &:focus:has(> div .placeholder), & .placeholder.active {\n    transform: translate(.25em, -15%) scale(.8);\n  }\n\n  &:not(textarea) {\n    max-height: 4em;\n  }\n\n  & + .placeholder {\n    padding: 25px 12px;\n    font-size: 16px;\n    text-align: left;\n    z-index: 1500;\n  }\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus,\n  &:-webkit-autofill:active {\n    -webkit-box-shadow: 0 0 0 30px transparent inset !important;\n  }\n"])));
var errorStyle = exports.errorStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: #fff;\n  box-shadow: rgb(38 38 38 / 4%) 0 1px 2px, rgb(38 38 38 / 16%) 0 4px 8px;\n  width: 276px;\n  display: block;\n  border-radius: 16px;\n  padding: 20px;\n  font-size: 14px;\n"])));
var sharedSearchContainer = exports.sharedSearchContainer = (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  box-sizing: content-box;\n  flex: 1;\n  margin: 15px 10px;\n  width: 100%;\n  min-width: 100px;\n  border-radius: 8px;\n  position: relative;\n  border: 1px solid #D2D1D1;\n  \n  input{\n    border-radius: 6px;\n  }\n\n  &.style1 .select, &.style1 .item, &.style1 .selected, &.style1 .wrapper {\n    background: #F5F5F5;\n    color: #4378FF;\n    border: none;\n  }\n\n  &.style1 .item:hover, &.style1 .item.hovered {\n    background: #EAF9FF !important;\n  }\n\n  &.style1 .select {\n\n  }\n\n  &.style1 .item:hover, &.style1 .item.hovered {\n    background: #EAF9FF !important;\n  }\n\n  &.style1 .item:hover span, &.style1 .item.hovered span {\n    background: #EAF9FF !important;\n  }\n\n  &.style1 .item {\n    background-color: #FAFAFA;\n  }\n\n  &.style1 .item .subitem {\n    background-color: #FAFAFA;\n  }\n\n  &.style1 .add {\n    background-color: #EFF2F5;\n    border-bottom: 1px solid #E1E6EC;\n  }\n  \n  &.style2{\n    border: 1px solid #454650;\n  }\n  \n  &.style2 .select, &.style2 .item, &.style2 .selected, &.style2 .wrapper {\n    background: #2B2D39;\n    color: #4378FF;\n    border: none;\n  }\n\n  &.style2 .item:hover, &.style2 .item.hovered {\n    background: #2B2D39 !important;\n  }\n\n  &.style2 .select {\n\n  }\n\n  &.style2 .item:hover, &.style2 .item.hovered {\n    background: #2B2D39 !important;\n  }\n\n  &.style2 .item:hover span, &.style2 .item.hovered span {\n    background: #2B2D39 !important;\n  }\n\n  &.style2 .item {\n    background-color: #2B2D39;\n  }\n\n  &.style2 .item .subitem {\n    background-color: #2B2D39;\n  }\n  \n  &.style2 .add {\n\n    background-color: #2B2D39;\n    border-bottom: 1px solid #2B2D39;\n    color: #fff;\n  }\n\n  //&.style2\n  //{\n  //  background-color: #2B2D39!important;\n  //}\n  \n  //&.style1 .item:nth-child(even), .item:nth-child(even)\n  //{\n  //  background-color: #E5E5E5;\n  //}\n\n  &.disabled {\n    //background-color: #FAFAFA !important;\n  }\n\n  ", "\n\n\n  ", "\n"])), function (props) {
  return props.size === 'small' && "\n    max-width: 256px;\n  ";
}, function (props) {
  return props.size === 'medium' && "\n      max-width: 418px;\n  ";
});
var sharedSearchInputWrapperStyle = exports.sharedSearchInputWrapperStyle = (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 48px;\n  background-color: transparent;\n  flex: 1;\n  border-radius: 8px;\n  cursor: pointer;\n\n  &.style2\n  {\n    background-color: #2B2D39!important;\n    color: #fff!important;\n    border: 1px solid #454650;\n  }\n  \n  input {\n    //padding: 24px 12px 8px 10px !important;\n  }\n\n  &.select {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom: 1px #fff solid !important;\n  }\n\n  input::placeholder {\n    color: transparent;\n  }\n\n  img.arrow {\n    position: absolute;\n    right: 20px;\n    top: 12px;\n    width: 12px;\n    height: 20px;\n  }\n\n  &.disabled {\n    background-color: #FAFAFA !important;\n  }\n  &.disabled.style2 {\n    background-color: #2B2D39 !important;\n  }\n"])));
var sharedSearchContainerStyle = exports.sharedSearchContainerStyle = (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  width: calc(100% - 58px);\n  outline: none;\n  display: flex;\n  flex: 1;\n  height: 48px;\n  position: relative;\n\n  &.disabled {\n    background-color: #F7F9FB;\n  }\n\n  ", "\n  \n  label.error {\n    ", "\n  }\n\n  img.close {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    cursor: pointer;\n    z-index: 1000;\n  }\n"])), placeholderStyle, errorStyle);
var sharedSelectWrapperStyle = exports.sharedSelectWrapperStyle = (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n\n  &.select {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n  &.select .selected span {\n    border-bottom: 1px solid #E1E6EC;\n  }\n  &.select.style2 .selected span {\n    border-bottom: 1px solid #414250;\n  }\n\n  input::placeholder {\n    color: transparent;\n  }\n\n  img.arrow {\n    position: absolute;\n    right: 20px;\n    top: 15px;\n    width: 12px;\n    height: 20px;\n  }\n\n  ", "\n  \n  label.placeholder {\n    top: 10px;\n    left: 13px;\n    transform: scale(0.8);\n  }\n\n  label.error {\n    ", "\n  }\n"])), placeholderStyle, errorStyle);
var sharedButtonStyle = exports.sharedButtonStyle = (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: inline-block;\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 28px;\n  white-space: nowrap;\n  height: 48px;\n  border-radius: 10px;\n  border: none;\n  transition: .3s all;\n  outline: none;\n  font-style: normal;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 10px 20px;\n  font-family: inherit;\n  font-weight: 700;\n  margin: 15px 5px;\n\n  &.style1 {\n    background: #EFF2F5;\n    color: #4378FF;\n  }\n\n  &.style1:hover {\n    background: #D7DADC;\n  }\n\n  &.style1:active {\n    background: #F1F3F6;\n  }\n  \n  &.style2 {\n    background: #4378FF;\n    color: #FFFFFF;\n  }\n\n  &.style2:hover {\n    background: #3C6CE6;\n  }\n\n  &.style2:active {\n    background: #5685FF;\n  }\n\n  &.style3 {\n    background: transparent;\n    color: #4378FF;\n    height: 30px;\n    padding: 0;\n  }\n  \n  &.style3:hover {\n    opacity: 0.8;\n  }\n\n  &.style3:active {\n\n  }\n\n  &.style4 {\n    background: #EFF2F5;\n    color: #FF624D;\n    min-width: auto;\n    padding: 10px 20px;\n    border-radius: 10px;\n\n    ", "\n  }\n\n  &.style5 {\n    background: rgb(43, 45, 57);\n    color: #4C89FE;\n    height: auto;\n    line-height: normal;\n\n    ", "\n  }\n  \n  &.style6 {\n    background: #2B2D39;\n    color: #4C89FE;\n    min-width: auto;\n    padding: 10px 20px;\n    border-radius: 10px;\n\n    ", "\n  }\n  \n  &.style7 {\n    background: #333443;\n    color: #4C89FE;\n    min-width: auto;\n    padding: 10px 20px;\n    border-radius: 10px;\n\n    ", "\n  }\n\n  &.style3:hover {\n\n  }\n\n  &.style3:active {\n\n  }\n\n\n  &:disabled, &.disabled {\n    color: #7F818D !important;\n  }\n\n  svg {\n    height: 10px !important;\n    margin-top: 4px !important;\n  }\n\n  img {\n    height: 10px !important;\n    margin-top: 4px !important;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  @media (max-width: 1030px) {\n    font-size: 11px;\n    padding: 4px 8px;\n    font-family: inherit;\n    font-weight: 700;\n    margin: 8px 3px;\n  }\n"])), function (props) {
  return props.right && "\n      margin: 10px 40px 0 0;\n    ";
}, function (props) {
  return props.right && "\n      margin: 10px 40px 0 0;\n    ";
}, function (props) {
  return props.right && "\n        margin: 10px 40px 0 0;\n      ";
}, function (props) {
  return props.right && "\n        margin: 10px 40px 0 0;\n      ";
}, function (props) {
  return props.disabled && "\n    color: #7F818D !important;\n  ";
}, function (props) {
  return props.left && "\n    margin-left: 0;\n  ";
}, function (props) {
  return props.slim && "\n    height: 40px;\n    line-height: 20px;\n  ";
}, function (props) {
  return props.noMargin && "\n    margin: 0;\n  ";
});
var sharedSelectedStyle = exports.sharedSelectedStyle = (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  white-space: nowrap;\n  color: #4378FF;\n  align-items: center;\n  line-height: 44px;\n  padding: 5px 17px 0 17px;\n  text-align: left;\n  font-size: 14px;\n  font-weight: 500;\n  word-break: keep-all;\n  overflow: hidden;\n  background-color: #EFF2F5;\n  border-radius: 8px;\n\n  &.style2\n  {\n    background-color: #333443;\n    color: #4C89FE;\n  }\n  \n  &.style6\n  {\n    background-color: #333443;\n    color: #4C89FE;\n  }\n  \n  span {\n    display: block;\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n  }\n"])));
var sharedSelectStyle = exports.sharedSelectStyle = (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-radius: 0 0 4px 4px;\n  position: absolute;\n  z-index: 300000;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 20px 48px rgba(255, 255, 255, 0.25);\n  display: none;\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 250px;\n  background-color: #EFF2F5;\n\n  &.style2\n  {\n    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.25);\n    background-color: #333443;\n  }  \n  \n  ", "\n  \n  &::-webkit-scrollbar {\n    width: 8px;\n    background-color: #F5F6FB;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(10, 10, 10, 0.2);\n    border-radius: 4px;\n  }\n\n  &.style2::-webkit-scrollbar {\n    width: 8px;\n    background-color: #333443;\n  }\n  \n  &.style2::-webkit-scrollbar-track {\n    background: #454650;\n  }\n  \n  &.style2::-webkit-scrollbar-thumb {\n    //background-color: #454650;\n    border-radius: 4px;\n  }\n"])), function (props) {
  return props.select && "\n    display: block;\n  ";
});
var sharedItemStyle = exports.sharedItemStyle = (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #4378FF;\n  cursor: pointer;\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  flex-wrap: wrap;\n\n  &.style2\n  {\n    background-color: #333443;\n    border-bottom: 1px solid #333443;\n  }\n\n  span {\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n\n  &:last-child span {\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  span:hover {\n    background-color: #E1E6EC;\n    border-radius: 8px;\n  }\n\n  &.style2 span:hover\n  {\n    background-color: #414250;\n    border-bottom: 1px solid #414250;\n  }\n"])));
var sharedSubItemStyle = exports.sharedSubItemStyle = (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: #000;\n  transition: all .3s ease;\n  cursor: pointer;\n  line-height: 38px;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 50px;\n  border-bottom: 1px solid #c4c4c4;\n  width: 100%;\n  flex-basis: 100%;\n\n  &:hover {\n    //background-color: #bdc4e5;\n    //border-bottom: 1px solid #FE9347;\n  }\n\n  &:last-child {\n    border-bottom: 0;\n  }\n"])));
var sharedInputContainerStyle = exports.sharedInputContainerStyle = (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  background-color: transparent;\n  outline: none;\n  display: flex;\n  flex: 1;\n  height: 46px;\n  padding: 0;\n  position: relative;\n  z-index: 100;\n\n  &.disabled {\n    background-color: #F7F9FB;\n  }\n  \n  img {\n    z-index: 1000;\n    cursor: pointer;\n  }\n\n  label.error {\n    ", "\n  }\n\n  img.calendar {\n    position: absolute;\n    right: 16px;\n    top: 14px;\n    pointer-events: none;\n  }\n\n  img.close {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    cursor: pointer;\n  }\n\n\n  ", "\n\n  ", "\n\n  ", "\n"])), errorStyle, function (props) {
  return props.slim && "\n    height: 38px;\n  ";
}, function (props) {
  return props.needMargin && "\n    width: calc(100% - 58px);\n  ";
}, placeholderStyle);
var sharedInputStyle = exports.sharedInputStyle = (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n  line-height: 13px;\n  user-select: none;\n  z-index: ", ";\n  color: #000;\n  transition: border-color .25s ease-in-out;\n  border: none;\n  background-color: transparent;\n  padding: 24px 12px 8px 14px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: left;\n  border-radius: 6px;\n\n  &:focus {\n    outline: 0;\n  }\n\n  &.style1{\n    background-color: #2B2D39!important;\n    color: #fff!important;\n  }\n  \n  &.style2{\n    background-color: #2B2D39!important;\n    color: #fff!important;\n  }\n  \n  ", "\n\n  ", "\n"])), _zindex["default"].input, placeholderActiveStyle, function (props) {
  return props.slim && "\n      padding: 14px 12px 8px 11px;\n\n      &::placeholder\n      {\n          color: #7F818D;\n      }\n  ";
});
var EmptyContainer = exports.EmptyContainer = _styledComponents["default"].div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 10px;\n  flex: 1;\n  border-radius: 8px;\n  position: relative;\n  min-width: 100px;\n\n  ", "\n\n\n  ", "\n"])), function (props) {
  return props.size === 'small' && "\n      max-width: 256px;\n    ";
}, function (props) {
  return props.size === 'medium' && "\n        max-width: 418px;\n    ";
});
var InputContainer = exports.InputContainer = _styledComponents["default"].div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedInputContainerStyle);
var StyledInput = exports.StyledInput = _styledComponents["default"].input(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedInputStyle);
var MaskedStyledInput = exports.MaskedStyledInput = (0, _styledComponents["default"])(/*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactInputMask["default"], _objectSpread(_objectSpread({}, props), {}, {
    ref: ref
  }));
}))(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedInputStyle);
var Button = exports.Button = _styledComponents["default"].button(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"])), sharedButtonStyle, function (props) {
  return props.flex && "\n      flex: 1;\n      max-width: none;\n      min-width: fit-content;\n    ";
}, function (props) {
  return props.position === 'right' && "\n      margin: 0 0 0 auto;\n    ";
}, function (props) {
  return props.size === 'full' && "\n      width: 100%;\n    ";
}, function (props) {
  return props.size === 'save' && "\n      width: 155px;\n    ";
}, function (props) {
  return props.size === 'calc' && "\n      width: 155px;\n    ";
}, function (props) {
  return props.size === 'small' && "\n      border-radius: 8px;\n      font-size: 14px;\n      width: 96px;\n      height: 24px;\n      margin: 10px 5px;\n      padding: 2px 0;\n      min-width: 96px;\n      line-height: 12px;\n    ";
});
var Link = exports.Link = _styledComponents["default"].a(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  ", "\n\n  font-weight: 700 !important;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), sharedButtonStyle, function (props) {
  return props.flex && "\n      flex: 1;\n      max-width: none;\n      min-width: fit-content;\n    ";
}, function (props) {
  return props.position === 'right' && "\n      margin: 0 0 0 auto;\n    ";
}, function (props) {
  return props.size === 'full' && "\n    width: 100%;\n  ";
});
var InlineLink = exports.InlineLink = _styledComponents["default"].a(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-weight: 700 !important;\n"])));
var ButtonLink = exports.ButtonLink = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  ", "\n\n  font-weight: 700 !important;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), sharedButtonStyle, function (props) {
  return props.flex && "\n      flex: 1;\n      max-width: none;\n      min-width: fit-content;\n    ";
}, function (props) {
  return props.position === 'right' && "\n      margin: 0 0 0 auto;\n    ";
}, function (props) {
  return props.size === 'full' && "\n    width: 100%;\n  ";
});
var TextArea = exports.TextArea = _styledComponents["default"].textarea(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 100%;\n  resize: vertical;\n  overflow-y: hidden;\n\n  ", "\n"])), sharedInputStyle);
var ContainerTextArea = exports.ContainerTextArea = _styledComponents["default"].div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  flex: 1;\n  \n  &.style1{\n    background-color: #2B2D39;\n  }\n  \n  &.style1.disabled {\n    background-color: #2B2D39;\n  }\n\n  ", "\n"])), placeholderStyle);
var WrapperTextArea = exports.WrapperTextArea = _styledComponents["default"].div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  ", "\n"])), _containerStyle.sharedContainer);
var Checkbox = exports.Checkbox = _styledComponents["default"].div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedCheckboxStyle);
var Loader = exports.Loader = _styledComponents["default"].div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  height: 48px;\n\n  flex-basis: 48px;\n  position: absolute;\n  right: 36px;\n\n  img, svg {\n    position: absolute;\n    top: 8px;\n    height: 30px;\n    width: 30px;\n    right: -20px;\n    animation: ", " 2s linear infinite;\n  }\n"])), rotate);
var Selected = exports.Selected = _styledComponents["default"].div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedSelectedStyle);
var Select = exports.Select = _styledComponents["default"].div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedSelectStyle);
var Item = exports.Item = _styledComponents["default"].div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  ", "\n"])), sharedItemStyle);