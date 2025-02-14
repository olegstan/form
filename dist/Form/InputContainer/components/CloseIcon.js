"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _ic_close_only = _interopRequireDefault(require("../../../assets/ic_close_only.svg"));
var _InputContainer = require("../InputContainer");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Компонент иконки очистки (крестика).
 * Мемоизирован с помощью React.memo
 */

var CloseIcon = /*#__PURE__*/(0, _react.memo)(function CloseIcon(_ref) {
  var typeName = _ref.typeName,
    iconClose = _ref.iconClose,
    value = _ref.value,
    name = _ref.name,
    onChange = _ref.onChange;
  // если тип не подходит или выключена опция iconClose — не показываем
  //если передано iconClose = false то рендерить икноку для очистки не нужно
  if (!typeName || !iconClose) return null;
  var notEmpty = false;
  switch (typeName) {
    case 'Select':
    case 'DateInput':
    case 'DateTimeInput':
      //там и так будет иконка календаря
      return null;
    case 'FileInput':
      return null;
    default:
      notEmpty = (0, _InputContainer.isNotEmpty)(value);
      break;
  }
  return notEmpty && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    className: "close",
    src: _ic_close_only["default"],
    alt: "close",
    onClick: function onClick(e) {
      onChange === null || onChange === void 0 || onChange(e, {
        name: name || '',
        value: ''
      });
    }
  });
});
var _default = exports["default"] = CloseIcon;