"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Item = _interopRequireDefault(require("./Item"));
var _styles = require("./styles");
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
    id: id ? "".concat(id, "-select") : undefined,
    children: options.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Item["default"], {
      item: {
        id: null,
        name: 'Нет элементов'
      },
      className: className,
      id: "".concat(idPrefix, "-none")
    }, 'none') : options.map(function (option) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Item["default"], {
        item: option,
        onClick: function onClick(e) {
          return handleClick(e, option);
        },
        className: className,
        id: "".concat(idPrefix, "-").concat(option.id)
      }, option.id);
    })
  });
};
var _default = exports["default"] = GroupResults;