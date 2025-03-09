"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _calendar = _interopRequireDefault(require("./../assets/calendar.svg"));
var _Date2 = _interopRequireDefault(require("./Date"));var _jsxRuntime = require("react/jsx-runtime");var _excluded = ["id"];function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _objectWithoutProperties(e, t) {if (null == e) return {};var o,r,i = _objectWithoutPropertiesLoose(e, t);if (Object.getOwnPropertySymbols) {var n = Object.getOwnPropertySymbols(e);for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);}return i;}function _objectWithoutPropertiesLoose(r, e) {if (null == r) return {};var t = {};for (var n in r) if ({}.hasOwnProperty.call(r, n)) {if (-1 !== e.indexOf(n)) continue;t[n] = r[n];}return t;}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var

DateTime = exports["default"] = /*#__PURE__*/function (_Date) {function DateTime() {var _this;_classCallCheck(this, DateTime);for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _callSuper(this, DateTime, [].concat(args));_defineProperty(_this, "handleInputChange",





































    function (e) {
      var value = e.target.value;
      _this.setState({ date: value });

      if (typeof value === 'string' && value !== '__.__.____ __:__:__' && !value.includes('_')) {
        _this.props.onChangeDateInner({}, { date: value, value: value });
      } else {
        _this.props.onChangeDateInner({}, { date: null, value: value });
      }
    });return _this;}_inherits(DateTime, _Date);return _createClass(DateTime, [{ key: "getOptions", value: function getOptions() {return _objectSpread({ dateFormat: 'd.m.Y H:i:S', allowInput: true, enableTime: true, enableSeconds: true, disableMobile: 'true' }, this.props);} }, { key: "formatDate", value: function formatDate(date) {var month = (date.getMonth() + 1).toString().padStart(2, '0');var day = date.getDate().toString().padStart(2, '0');var year = date.getFullYear().toString();var hour = date.getHours().toString().padStart(2, '0');var minute = date.getMinutes().toString().padStart(2, '0');var second = date.getSeconds().toString().padStart(2, '0');return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second);} }, { key: "render", value:

    function render() {var _this2 = this;
      var _this$state = this.state,Input = _this$state.Input,componentsLoaded = _this$state.componentsLoaded;

      return componentsLoaded ? /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_containerStyle.Container, {
        style: this.getContainerStyle(),
        className: "".concat(this.props.className, " ").concat(this.props.disabled ? 'disabled' : ''),
        disabled: this.props.disabled, children: /*#__PURE__*/

        (0, _jsxRuntime.jsxs)(_newstyles.InputContainer, { needMargin: true, focus: this.state.focused, ref: this.wrapperRef, children: [
          this.props.disabled ?
          this.renderInput() : /*#__PURE__*/

          (0, _jsxRuntime.jsx)(Input, {
            style: this.props.style,
            id: this.props.id,
            disabled: this.props.disabled,
            placeholder: this.props.placeholder,
            autoComplete: this.props.autoComplete ? this.props.autoComplete : 'off',
            options: this.getOptions(),
            value: this.state.date,
            className: this.props.className,
            onReady: function onReady(_, __, fp) {
              _this2.flatpickrInstance = fp;
              fp.calendarContainer.id = _this2.props.id + '-container';
            },
            onChange: function onChange(value) {
              _this2.handleDateChange(value);
            },
            onOpen: function onOpen() {
              _this2.setState({
                focused: true,
                hasError: false
              });
            },
            onClose: function onClose(selectedValue, dateStr, instance) {
              _this2.setState({ focused: false, hasError: false }, function () {
                if (typeof _this2.props.onOutsideClick === 'function') {
                  _this2.props.onOutsideClick();
                }
              });
            },
            render: function render(_ref, ref) {var id = _ref.id,props = _objectWithoutProperties(_ref, _excluded);
              return (/*#__PURE__*/
                (0, _jsxRuntime.jsx)(_newstyles.MaskedStyledInput, {
                  autoComplete: 'off',
                  mask: "99.99.9999 99:99:99",
                  id: id,
                  value: props.value,
                  onChange: _this2.handleInputChange,
                  style: props.style,
                  className: props.className,
                  onFocus: function onFocus() {
                    _this2.setState({
                      focused: true,
                      hasError: false
                    });
                  }, children:

                  function children(inputProps) {return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({ ref: ref }, inputProps));} }
                ));

            } }
          ),

          this.renderPlaceholder(),
          this.props.icon !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", { className: "calendar", src: _calendar["default"], alt: "" }),
          this.renderTooltipError()] }
        ) }
      ) :

      '';

    } }]);}(_Date2["default"]);_defineProperty(DateTime, "defaultProps", { onKeyPress: function onKeyPress() {}, onChangeDateInner: function onChangeDateInner() {}, disabled: false, value: '', placeholder: '', mask: '', icon: '', className: '', wrapperClassName: '', error: '', inputMask: '__.__.____ __:__:__' // mask for the data format to check if the field is empty
  });
//# sourceMappingURL=DateTime.js.map