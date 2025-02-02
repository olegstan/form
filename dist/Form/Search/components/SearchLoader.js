"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("../../styles");
var _loader = require("../../../assets/loader.svg");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SearchLoader = function SearchLoader(_ref) {
  var loading = _ref.loading;
  if (!loading) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Loader, {
    id: "loader-for-data",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick() {},
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_loader.ReactComponent, {})
    })
  });
};
var _default = exports["default"] = SearchLoader;