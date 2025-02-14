"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useBaseInput;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// import InputPopup from "../InputPopup/InputPopup";
// import errorSvg from "../../assets/error.svg";

/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - focused
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */

function useBaseInput(_ref) {
  var onClick = _ref.onClick,
    onChange = _ref.onChange,
    setFocused = _ref.setFocused;
  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  var getName = (0, _react.useCallback)(function (name) {
    var _name$replace;
    return name === null || name === void 0 || (_name$replace = name.replace('country', 'couuntry')) === null || _name$replace === void 0 ? void 0 : _name$replace.replace('state', 'staate');
  }, []);
  var handleClick = function handleClick(e) {
    e.stopPropagation();
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };
  var handleChange = function handleChange(e) {
    onChange(e, {
      name: name,
      value: e.target.value
    });
  };
  var handleFocus = function handleFocus() {
    setFocused(true);
  };
  var handleBlur = function handleBlur() {
    setFocused(false);
  };
  return {
    handleClick: handleClick,
    handleChange: handleChange,
    handleFocus: handleFocus,
    handleBlur: handleBlur,
    getName: getName
  };
}