"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _search = _interopRequireDefault(require("../../../assets/search.svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 *
 */

var SearchIcon = /*#__PURE__*/(0, _react.memo)(function SearchIcon(_ref) {
  var typeName = _ref.typeName,
    icon = _ref.icon,
    search = _ref.search,
    onSearch = _ref.onSearch,
    name = _ref.name,
    value = _ref.value,
    onChange = _ref.onChange;
  // если тип не подходит или выключена опция icon — не показываем
  //если передано icon = false то рендерить икноку для очистки не нужно
  if (!typeName || !icon) return null;
  var action = function action() {};
  var notEmpty = false;
  switch (typeName) {
    case 'Select':
    case 'GroupSelect':
    case 'DateInput':
    case 'DateTimeInput':
      //там и так будет иконка календаря
      return null;
    case 'FileInput':
      return null;
    case 'Search':
    case 'GroupSearch':
      break;
    default:
      return null;
      break;
  }
  return notEmpty && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    className: "close",
    src: _search["default"],
    alt: "close",
    onClick: function onClick(e) {
      action();
    }
  });
});
var _default = exports["default"] = CloseIcon;