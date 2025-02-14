"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _calendar = _interopRequireDefault(require("../../../assets/calendar.svg"));
var _arrow = _interopRequireDefault(require("../../../assets/arrow.svg"));
var _loader = _interopRequireDefault(require("../../../assets/loader.svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Компонент "основной" иконки (календарь, стрелка для Select, лоадер для Search).
 * Мемоизирован.
 */

var InputIcon = /*#__PURE__*/(0, _react.memo)(function InputIcon(_ref) {
  var typeName = _ref.typeName,
    iconClose = _ref.iconClose,
    loading = _ref.loading;
  // Если опция iconClose = false, в исходном коде вообще не рендерилась "доп. иконка".
  // Если нужно поведение "календарь/стрелку рендерить всегда, а iconClose управляет только крестиком",
  // уберите эту проверку или вынесите её в CloseIcon.
  if (!typeName || !iconClose) return null;
  switch (typeName) {
    case 'DateInput':
    case 'DateTimeInput':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "calendar",
        src: _calendar["default"],
        alt: "calendar"
      });
    case 'Select':
    case 'GroupSelect':
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "arrow",
        src: _arrow["default"],
        alt: "arrow"
      });
    case 'Search':
      return loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "loader",
        src: _loader["default"],
        alt: "loading"
      }) : null;
    default:
      return null;
  }
});
var _default = exports["default"] = InputIcon;