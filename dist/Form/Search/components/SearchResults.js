"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchItem = _interopRequireDefault(require("./SearchItem"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SearchResults = function SearchResults(_ref) {
  var items = _ref.items,
    hoveredIndex = _ref.hoveredIndex,
    handleClick = _ref.handleClick,
    className = _ref.className,
    idPrefix = _ref.idPrefix;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: items.map(function (item, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchItem["default"], {
        item: item,
        hovered: hoveredIndex === index,
        onClick: function onClick(e) {
          return handleClick(e, item);
        },
        className: className,
        id: "".concat(idPrefix, "-").concat(item.id)
      }, item.id + (item.type_id ? item.type_id : ''));
    })
  });
};
var _default = exports["default"] = SearchResults;