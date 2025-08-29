"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports.StyledRoundCheckbox = exports.StyledCheckbox = exports.StyledBaseCheckbox = void 0;var _styledComponents = _interopRequireWildcard(require("styled-components"));var _templateObject, _templateObject2, _templateObject3, _templateObject4;function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _taggedTemplateLiteral(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));}

// Базовые стили для любого чекбокса
var baseCheckboxStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    flex: 1;\n    display: flex;\n    padding: 5px 12px;\n    align-items: center;\n    color: ", ";\n    cursor: pointer;\n    transition: opacity 0.3s;\n    margin: 0;\n    user-select: none;\n\n    & > div {\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 18px;\n        letter-spacing: 0;\n        color: #E9E9EA;\n    }\n\n    & > input {\n        height: 0;\n        width: 0;\n        opacity: 0;\n        z-index: -10;\n        position: absolute;\n    }\n\n    & > span.rotate-container {\n        border: 2px solid ", ";\n        height: 18px;\n        width: 18px;\n        box-sizing: border-box;\n        margin-right: 10px;\n        background-color: ", ";\n        display: flex;\n        position: relative;\n    }\n\n    & > span > span {\n        display: block;\n        position: absolute;\n        transform: rotate(45deg);\n        width: 6px;\n        height: 11px;\n        top: 1px;\n        z-index: 1000;\n        left: 5px;\n        box-sizing: border-box;\n    }\n\n    & > input:checked + span {\n        background-color: ", ";\n        border: 2px solid ", ";\n    }\n\n    & > input:checked + span > span {\n        border-bottom: 3px solid ", ";\n        border-right: 3px solid ", ";\n    }\n\n    &:hover {\n        opacity: 0.7;\n    }\n"])),




function (_ref) {var theme = _ref.theme;return theme.checkMarkColor;},






















function (_ref2) {var theme = _ref2.theme;return theme.checkMarkColor;},




function (_ref3) {var theme = _ref3.theme;return theme.checkMarkColor;},

















function (_ref4) {var theme = _ref4.theme;return theme.checkboxColor;},
function (_ref5) {var theme = _ref5.theme;return theme.checkboxColor;},



function (_ref6) {var theme = _ref6.theme;return theme.checkMarkColor;},
function (_ref7) {var theme = _ref7.theme;return theme.checkMarkColor;});







// Базовый стилизованный компонент
var StyledBaseCheckbox = exports.StyledBaseCheckbox = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])),
baseCheckboxStyles);


// Квадратный чекбокс (со скругленными углами)
var StyledCheckbox = exports.StyledCheckbox = (0, _styledComponents["default"])(StyledBaseCheckbox)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  & > span.rotate-container {\n    border-radius: 6px;\n  }\n"])));





// Круглый чекбокс
var StyledRoundCheckbox = exports.StyledRoundCheckbox = (0, _styledComponents["default"])(StyledBaseCheckbox)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  & > span.rotate-container {\n    border-radius: 50%;\n  }\n"])));
//# sourceMappingURL=styles.js.map