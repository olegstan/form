"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Item = _interopRequireDefault(require("./Item"));
var _styles = require("./styles");
var _GroupItem = _interopRequireDefault(require("./GroupItem"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var GroupResults = function GroupResults(_ref) {
  var id = _ref.id,
    options = _ref.options,
    handleClick = _ref.handleClick,
    className = _ref.className,
    idPrefix = _ref.idPrefix,
    active = _ref.active;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.OptionsWrapper, {
    active: active,
    id: id ? "".concat(id, "-select") : undefined,
    className: className,
    children: options.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Item["default"], {
      item: {
        id: null,
        name: 'Нет элементов'
      },
      className: className,
      id: "".concat(idPrefix, "-none")
    }, 'none') : options.map(function (option, key) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupItem["default"], {
        item: option,
        onClick: handleClick,
        className: className,
        id: "".concat(idPrefix, "-").concat(option.id)
      }, key);
    })
  });
};
var _default = exports["default"] = GroupResults;