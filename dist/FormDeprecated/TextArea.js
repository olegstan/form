"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _detectBrowser = require("detect-browser");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var

TextArea = exports["default"] = /*#__PURE__*/function (_BaseInput) {

  function TextArea(props) {var _this;_classCallCheck(this, TextArea);
    _this = _callSuper(this, TextArea, [props]);
    _this.state = {
      error: null,
      focused: false,
      hasError: false
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);return _this;
  }_inherits(TextArea, _BaseInput);return _createClass(TextArea, [{ key: "getContainerStyle", value:

    function getContainerStyle()
    {
      return _objectSpread({}, this.props.containerStyle);
    }

    /**
     * @type {{multi: boolean}}
     */ }, { key: "render", value:















    function render()
    {var _this2 = this;
      var browser = (0, _detectBrowser.detect)();

      return (/*#__PURE__*/
        (0, _jsxRuntime.jsx)(_newstyles.ContainerTextArea, {
          className: this.props.className + (this.props.disabled ? ' disabled' : ''),
          style: this.getContainerStyle(), children: /*#__PURE__*/

          (0, _jsxRuntime.jsxs)(_newstyles.WrapperTextArea, {
            ref: this.wrapperRef,
            style: this.getWrapperStyle(),
            className: this.props.className + ' ' + this.getWrapperClasses(), children: [/*#__PURE__*/

            (0, _jsxRuntime.jsx)(_newstyles.TextArea, {
              className: this.props.className,
              browser: browser && browser.name,
              id: this.props.id,
              autoComplete: 'off',
              disabled: this.props.disabled,
              style: this.getInputStyle(),
              name: this.props.name,
              value: this.props.value ? this.props.value : '',
              rows: this.props.rows,
              placeholder: this.props.placeholder,
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






                // this.setState({
                //   focused: false,
                //   hasError: false
                // }, () => {
                //   this.onBlur();
                // })
              } }), this.renderPlaceholder(), this.renderTooltipError()] }) }));
    } }]);}(_BaseInput2["default"]);_defineProperty(TextArea, "defaultProps", { onKeyPress: function onKeyPress() {}, onChange: function onChange() {}, disabled: false, value: '', placeholder: '', icon: '', className: '', wrapperClassName: '', error: '', rows: 3 });
//# sourceMappingURL=TextArea.js.map