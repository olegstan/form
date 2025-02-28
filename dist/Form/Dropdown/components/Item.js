"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Item = function Item(_ref) {
  var item = _ref.item,
    onClick = _ref.onClick,
    className = _ref.className,
    id = _ref.id;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledOption, {
    className: "".concat(className, " item"),
    id: id,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: item.name
    })
  }, item.id);
};
var _default = exports["default"] = Item;