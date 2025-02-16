"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledOption = exports.OptionsWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _zindex = _interopRequireDefault(require("../../../interface/zindex"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var StyledOption = exports.StyledOption = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  flex-wrap: wrap;\n  cursor: pointer;\n  transition: backtground-color 0.2s ease, transform 0.2s ease;\n\n  background-color: ", ";\n\n  span {\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n  }\n\n  &:last-child span {\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  span:hover {\n    background-color: ", ";\n    border-radius: 8px;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.selectOptionTextColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.inputContainerDisabledBackground;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.selectOptionBackgroundHovererColor;
});
var OptionsWrapper = exports.OptionsWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  border-radius: 0 0 0 12px; /* \u0423\u0431\u0438\u0440\u0430\u0435\u043C \u0437\u0430\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u043E\u0433\u043E \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u0443\u0433\u043B\u0430 */\n  top: 50px;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 20px 48px ", ";\n  background-color: ", ";\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: 250px;\n  z-index: ", ";\n  display: flex;\n  flex-direction: column;\n\n  &::-webkit-scrollbar {\n    width: 8px; /* \u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u043A\u0440\u043E\u043B\u043B\u0431\u0430\u0440\u0430 */\n    background-color: transparent; /* \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0444\u043E\u043D \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0441\u043A\u0440\u043E\u043B\u043B\u0431\u0430\u0440\u0430 */\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ", "; /* \u0426\u0432\u0435\u0442 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430 */\n    border-radius: 0 0 8px 0; /* \u0417\u0430\u043A\u0440\u0443\u0433\u043B\u044F\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0430\u0432\u044B\u0439 \u043D\u0438\u0436\u043D\u0438\u0439 \u0443\u0433\u043E\u043B */\n    border: 2px solid transparent; /* \u042D\u0444\u0444\u0435\u043A\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0433\u043E \u043E\u0442\u0441\u0442\u0443\u043F\u0430 */\n    background-clip: padding-box; /* \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u0444\u043E\u043D\u0430 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430 */\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: ", "; /* \u0426\u0432\u0435\u0442 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 */\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent; /* \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0442\u0440\u0435\u043A */\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.selectShadowColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.selectWrapperOptionBackgroundColor;
}, _zindex["default"].input, function (_ref6) {
  var theme = _ref6.theme;
  return theme.selectScrollThumbColor;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.selectScrollThumbHoverColor || theme.selectScrollThumbColor;
});