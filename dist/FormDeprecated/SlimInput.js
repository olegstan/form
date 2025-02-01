"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input2 = _interopRequireDefault(require("./Input"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _detectBrowser = require("detect-browser");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var SlimInput = exports["default"] = /*#__PURE__*/function (_Input) {
  function SlimInput() {
    _classCallCheck(this, SlimInput);
    return _callSuper(this, SlimInput, arguments);
  }
  _inherits(SlimInput, _Input);
  return _createClass(SlimInput, [{
    key: "render",
    value: function render() {
      var _this = this;
      var name = this.props.name;
      var browser = (0, _detectBrowser.detect)();
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_containerStyle.Container, {
        style: this.getContainerStyle(),
        size: this.props.size,
        slim: true,
        className: this.props.className + (this.props.disabled ? ' disabled' : ''),
        disabled: this.props.disabled,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.InputContainer, {
          ref: this.wrapperRef,
          slim: true,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
            slim: true,
            browser: browser && browser.name,
            id: this.props.id,
            size: this.props.size,
            style: this.getInputStyle(),
            autoComplete: this.props.autoComplete ? this.props.autoComplete : 'off',
            disabled: this.props.disabled,
            className: this.props.className,
            type: this.props.type,
            name: this.getName(name),
            value: this.props.value,
            placeholder: this.props.placeholder,
            onClick: function onClick(e) {
              e.stopPropagation();
              if (typeof _this.props.onClick === 'function') {
                _this.props.onClick(_this);
              }
            },
            onKeyPress: function onKeyPress(e) {
              if (typeof _this.props.onKeyPress === 'function') {
                _this.props.onKeyPress(e);
              }
            },
            onChange: function onChange(e) {
              _this.props.onChange(e, {
                name: _this.props.name,
                value: e.target.value
              });
              _this.setState({
                hasError: false
              });
            },
            onFocus: function onFocus() {
              _this.setState({
                focused: true,
                hasError: false
              });
            },
            onBlur: function onBlur() {}
          })
        })
      });
    }
  }]);
}(_Input2["default"]);