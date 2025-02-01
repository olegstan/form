"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _detectBrowser = require("detect-browser");
var _containerStyle = require("./styles/containerStyle");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var MaskedInput = exports["default"] = /*#__PURE__*/function (_BaseInput) {
  function MaskedInput(props) {
    var _this;
    _classCallCheck(this, MaskedInput);
    _this = _callSuper(this, MaskedInput, [props]);
    _this.state = {
      error: null,
      focused: false,
      hasError: false
    };

    // Create a ref for the wrapper element
    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(MaskedInput, _BaseInput);
  return _createClass(MaskedInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var name = this.props.name;
      var browser = (0, _detectBrowser.detect)();
      var empty = true;

      // Determine if the input is empty based on the value
      if (typeof this.props.value === 'number' && this.props.value.toString().length > 0 || typeof this.props.value === 'string' && this.props.value.length > 0) {
        empty = false;
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_containerStyle.Container, {
        style: this.getContainerStyle(),
        disabled: this.props.disabled,
        className: this.props.className + (this.props.disabled ? ' disabled' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.InputContainer, {
          ref: this.wrapperRef,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.MaskedStyledInput, {
            browser: browser && browser.name,
            id: this.props.id,
            mask: this.props.mask,
            autoComplete: 'off',
            disabled: this.props.disabled,
            style: this.getInputStyle(),
            className: this.props.className,
            type: this.props.type,
            name: this.getName(name),
            value: this.props.value,
            onKeyPress: function onKeyPress(e) {
              if (typeof _this2.props.onKeyPress === 'function') {
                _this2.props.onKeyPress(e);
              }
            },
            onChange: function onChange(e) {
              _this2.props.onChange(e, {
                name: _this2.props.name,
                value: e.target.value
              });
              _this2.setState({
                hasError: false
              });
            },
            onFocus: function onFocus() {
              _this2.setState({
                focused: true,
                hasError: false
              });
            },
            onBlur: function onBlur() {
              _this2.setState({
                focused: false,
                hasError: false
              });
            }
          }), this.renderPlaceholder(), !empty && typeof this.props.size === 'undefined' && !this.props.disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: "close",
            src: require('./../assets/ic_close_only.svg')["default"],
            onClick: function onClick(e) {
              _this2.props.onChange(e, {
                name: _this2.props.name,
                value: ''
              });
              _this2.setState({
                hasError: false
              });
            },
            alt: ""
          }), this.renderTooltipError()]
        })
      });
    }
  }]);
}(_BaseInput2["default"]);
_defineProperty(MaskedInput, "defaultProps", {
  onKeyPress: function onKeyPress() {},
  onChange: function onChange() {},
  disabled: false,
  value: '',
  placeholder: '',
  mask: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: ''
});