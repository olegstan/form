"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * Компонент для плейсхолдера (label).
 * Мемоизирован.
 */

var PlaceholderLabel = /*#__PURE__*/(0, _react.memo)(function PlaceholderLabel(_ref) {
  var focused = _ref.focused,
    placeholder = _ref.placeholder,
    id = _ref.id;
  if (!placeholder) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
    htmlFor: id,
    className: "placeholder".concat(focused ? ' focused' : ''),
    children: placeholder
  });
});
var _default = exports["default"] = PlaceholderLabel;