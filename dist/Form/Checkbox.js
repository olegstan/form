"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _newstyles = require("./newstyles");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Checkbox = function Checkbox(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? 1 : _ref$value,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? '' : _ref$name,
    _ref$toggleCallback = _ref.toggleCallback,
    toggleCallback = _ref$toggleCallback === void 0 ? function () {} : _ref$toggleCallback,
    textStyle = _ref.textStyle,
    id = _ref.id,
    checked = _ref.checked,
    checkboxStyle = _ref.checkboxStyle,
    style = _ref.style,
    form = _ref.form,
    text = _ref.text;
  // Локальное состояние для хранения value
  var _useState = (0, _react.useState)(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];

  // Реф на <input>
  var inputRef = (0, _react.useRef)(null);

  // Клик по тексту лейбла, чтобы активировать чекбокс
  var handleClick = function handleClick(e) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  var combinedTextStyle = textStyle ? _objectSpread({}, textStyle) : {};
  var combinedCheckboxStyle = checkboxStyle ? _objectSpread({}, checkboxStyle) : {
    backgroundColor: '#4378FF',
    border: '2px solid #4378FF'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Checkbox, {
    id: id,
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: "checkbox",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        ref: inputRef,
        className: checked ? 'active' : '',
        onChange: toggleCallback,
        name: name,
        type: "checkbox",
        value: localValue,
        id: id,
        checked: checked
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "rotate-container",
        style: _objectSpread({
          borderRadius: form === 'round' ? '10px' : '6px',
          display: 'flex'
        }, combinedCheckboxStyle),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "rotate"
        })
      })]
    })
  });
};
var _default = exports["default"] = Checkbox;