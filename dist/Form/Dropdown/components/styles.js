"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledOption = exports.StyledCheckboxOption = exports.OptionsWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _zindex = _interopRequireDefault(require("../../../interface/zindex"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var StyledCheckboxOption = exports.StyledCheckboxOption = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  line-height: 24px;\n  display: flex;\n  padding: 0 15px;\n  font-size: 14px;\n  font-weight: 500;\n  user-select: none;\n  text-align: left;\n  flex-wrap: wrap;\n  cursor: pointer;\n  transition: backtground-color 0.2s ease, transform 0.2s ease;\n\n  background-color: ", ";\n\n  & > span {\n    text-align: left;\n    font-size: 14px;\n    width: 100%;\n    padding: 4px 8px;\n    margin: 10px 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n  }\n\n  //&:last-child span {\n  //  border-bottom: none;\n  //}\n\n  &:last-child {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  & > span:hover {\n    background-color: ", ";\n    border-radius: 8px;\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.selectOptionTextColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.inputContainerDisabledBackground;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.selectOptionBackgroundHovererColor;
});
var OptionsWrapper = exports.OptionsWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: absolute;\n  border-radius: 0 0 0 12px; /* \u0423\u0431\u0438\u0440\u0430\u0435\u043C \u0437\u0430\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u043E\u0433\u043E \u043D\u0438\u0436\u043D\u0435\u0433\u043E \u0443\u0433\u043B\u0430 */\n  top: 50px;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 20px 48px ", ";\n  background-color: ", ";\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: ", ";\n  display: flex;\n  flex-direction: column;\n  max-height: 250px;\n  pointer-events: ", ";\n\n  /* \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u044F */\n\n  /* \u041F\u0440\u0438 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0438 (active: true) \u043F\u043B\u0430\u0432\u043D\u043E\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435, \u043F\u0440\u0438 \u0441\u043A\u0440\u044B\u0442\u0438\u0438 \u0441\u0440\u0430\u0437\u0443 */\n  opacity: ", ";\n  transform: ", ";\n  transition: ", ";\n\n  &::-webkit-scrollbar {\n    width: 8px; /* \u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u043A\u0440\u043E\u043B\u043B\u0431\u0430\u0440\u0430 */\n    background-color: transparent; /* \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0444\u043E\u043D \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0441\u043A\u0440\u043E\u043B\u043B\u0431\u0430\u0440\u0430 */\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ", "; /* \u0426\u0432\u0435\u0442 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430 */\n    border-radius: 0 0 8px 0; /* \u0417\u0430\u043A\u0440\u0443\u0433\u043B\u044F\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0430\u0432\u044B\u0439 \u043D\u0438\u0436\u043D\u0438\u0439 \u0443\u0433\u043E\u043B */\n    border: 2px solid transparent; /* \u042D\u0444\u0444\u0435\u043A\u0442 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0433\u043E \u043E\u0442\u0441\u0442\u0443\u043F\u0430 */\n    background-clip: padding-box; /* \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u0444\u043E\u043D\u0430 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430 */\n  }\n\n  &::-webkit-scrollbar-thumb:hover {\n    background-color: ", "; /* \u0426\u0432\u0435\u0442 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430 \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438 */\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent; /* \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439 \u0442\u0440\u0435\u043A */\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.selectShadowColor;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.selectWrapperOptionBackgroundColor;
}, _zindex["default"].input, function (_ref9) {
  var active = _ref9.active;
  return active ? 'auto' : 'none';
}, function (_ref10) {
  var active = _ref10.active;
  return active ? 1 : 0;
}, function (_ref11) {
  var active = _ref11.active;
  return active ? 'translateY(0)' : 'translateY(-10px)';
}, function (_ref12) {
  var active = _ref12.active;
  return active ? 'opacity 0.35s ease, transform 0.35s ease' : 'none';
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.selectScrollThumbColor;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.selectScrollThumbHoverColor || theme.selectScrollThumbColor;
});