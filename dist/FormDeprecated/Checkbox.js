"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _newstyles = require("./newstyles");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Checkbox = exports["default"] = /*#__PURE__*/function (_Component) {
  function Checkbox(props) {
    var _this;
    _classCallCheck(this, Checkbox);
    _this = _callSuper(this, Checkbox, [props]);
    _defineProperty(_this, "handleClick", function (e) {
      e.preventDefault();
      if (_this.inputRef.current) {
        _this.inputRef.current.click();
      }
    });
    _this.state = {
      value: props.value || ""
    };
    _this.inputRef = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }
  _inherits(Checkbox, _Component);
  return _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        textStyle = _this$props.textStyle,
        id = _this$props.id,
        checked = _this$props.checked,
        checkboxStyle = _this$props.checkboxStyle,
        style = _this$props.style,
        form = _this$props.form,
        text = _this$props.text,
        toggleCallback = _this$props.toggleCallback,
        name = _this$props.name;
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
            ref: this.inputRef,
            className: checked ? 'active' : '',
            onChange: toggleCallback,
            name: name,
            type: "checkbox",
            value: this.state.value,
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
          }), text && /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.Body, {
            style: combinedTextStyle,
            className: "text",
            onClick: this.handleClick,
            children: text
          })]
        })
      });
    }
  }]);
}(_react.Component);
_defineProperty(Checkbox, "defaultProps", {
  value: 1,
  name: '',
  toggleCallback: function toggleCallback() {}
});