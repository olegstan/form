"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupContainer = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    cursor: pointer;\n    height: 100%;\n    vertical-align: middle;\n    display: flex;\n    align-items: center;\n    position: absolute;\n    right: -19px;\n    z-index: 1000;\n    top: -50%;\n    \n    img{\n      padding: 0 12px;\n    }\n"])));
var PopupContainer = exports.PopupContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    text-align: center;\n    transition: all 0.4s ease 0s;\n    pointer-events: none;\n    user-select: none;\n    background-color: #fff;\n    border-radius: 12px;\n    box-shadow: rgb(38 38 38 / 4%) 0 1px 2px, rgb(38 38 38 / 16%) 0px 4px 8px;\n    padding: 12px;\n    \n"])));