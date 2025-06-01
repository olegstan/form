"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _finhelper = require("finhelper");
var _detectBrowser = require("detect-browser");
var _containerStyle = require("./styles/containerStyle");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _superPropGet(t, o, e, r) {var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);return 2 & r && "function" == typeof p ? function (t) {return p.apply(e, t);} : p;}function _get() {return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {var p = _superPropBase(e, t);if (p) {var n = Object.getOwnPropertyDescriptor(p, t);return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;}}, _get.apply(null, arguments);}function _superPropBase(t, o) {for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););return t;}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var

NumberInput = exports["default"] = /*#__PURE__*/function (_BaseInput) {

  function NumberInput(props)
  {var _this;_classCallCheck(this, NumberInput);
    _this = _callSuper(this, NumberInput, [props]);
    _this.state = {
      error: null,
      focused: false,
      hasError: false,

      selectionStart: 0,
      selectionEnd: 0
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.inputRef = /*#__PURE__*/(0, _react.createRef)();return _this;
  }

  /**
   *
   */_inherits(NumberInput, _BaseInput);return _createClass(NumberInput, [{ key: "componentDidUpdate", value:















    function componentDidUpdate(prevProps, prevState)
    {
      var value = this.props.value;
      var _this$state = this.state,selectionStart = _this$state.selectionStart,selectionEnd = _this$state.selectionEnd;
      if (prevProps.value !== value && this.state.focused === true && this.inputRef.current)
      {
        this.inputRef.current.selectionStart = selectionStart;
        this.inputRef.current.selectionEnd = selectionEnd;
      }

      _superPropGet(NumberInput, "componentDidUpdate", this, 3)([prevProps, prevState]);
    } }, { key: "handleChange", value:

    function handleChange(e)
    {
      var pattern = /^[0-9\.\,\ \-]+$/;

      if (e.target.value === '' || pattern.test(e.target.value))
      {
        var value = e.target.value.replace(/,/g, '.').replace(/ /g, '');

        if (this.props.max !== false && value > this.props.max)
        {
          return;
        }

        if (this.props.min === 0 && isNaN(value))
        {
          return;
        }

        if (this.props.min !== false && value < this.props.min)
        {
          return;
        }

        var position = e.target.selectionStart;

        if (value.length > 0)
        {
          var prefix = '';
          if (value[0] === '-')
          {
            prefix = '-';
            value = value.replace('-', '');
          }

          var parts = value.split('.');

          if (typeof parts[1] !== 'undefined')
          {
            if (parts[1] !== '')
            {
              if (this.props.decimals !== false)
              {
                if (parts[1].length > this.props.decimals)
                {
                  return;
                }
              }


              value = _finhelper.Money.formatForInput(value, parts[1].length);
            } else {
              value = _finhelper.Money.formatForInput(value, 0) + '.';
            }
          } else {
            value = _finhelper.Money.formatForInput(value, 0);
          }

          var prevParts = this.props.value.toString().split('.');
          var newParts = value.split('.');


          var prevLength = prevParts[0].length;
          var newLength = newParts[0].length;

          if (newLength > prevLength)
          {
            if ((newLength - 1) % 4 === 0)
            {
              position += 1;
            }
          }

          this.props.onChange(e, {
            name: this.props.name,
            value: prefix + value
          });


          this.setState({
            hasError: false,
            selectionStart: position,
            selectionEnd: position
          });
        } else {
          this.props.onChange(e, {
            name: this.props.name,
            value: ''
          });

          this.setState({
            hasError: false,
            selectionStart: position,
            selectionEnd: position
          });
        }
      }
    } }, { key: "render", value:

    function render()
    {var _this2 = this;
      var name = this.props.name;

      var browser = (0, _detectBrowser.detect)();

      var empty = true;

      if (typeof this.props.value === 'number' && this.props.value.toString().length > 0 || typeof this.props.value === 'string' && this.props.value.length > 0)
      {
        empty = false;
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_containerStyle.Container, {
        style: this.getContainerStyle(),
        size: this.props.size,
        disabled: this.props.disabled,
        className: this.props.className + (this.props.disabled ? ' disabled' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
        }, children: /*#__PURE__*/

        (0, _jsxRuntime.jsxs)(_newstyles.InputContainer, { ref: this.wrapperRef, children: [/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
            browser: browser && browser.name,
            ref: this.inputRef,
            id: this.props.id,
            size: this.props.size,
            autoComplete: 'off',
            disabled: this.props.disabled,
            style: this.getInputStyle(),
            className: this.props.className,
            type: this.props.type,
            name: this.getName(name),
            value: this.props.value,
            placeholder: this.props.placeholder,
            onKeyPress: function onKeyPress(e) {
              if (typeof _this2.props.onKeyPress === 'function') {
                _this2.props.onKeyPress(e);
              }
            },
            onChange: function onChange(e) {_this2.handleChange(e);},
            onFocus: function onFocus() {
              _this2.setState({
                focused: true,
                hasError: false
              });
            },
            onBlur: function onBlur() {
            } }
          ),
          this.renderPlaceholder(),
          !empty && typeof this.props.size === 'undefined' && !this.props.disabled && this.props.icon !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", { className: "close", src: require('./../assets/ic_close_only.svg'), onClick: function onClick(e) {
              _this2.props.onChange(e, {
                name: _this2.props.name,
                value: ''
              });
              _this2.setState({
                hasError: false
              });
            }, alt: "" }),
          this.renderTooltipError()] }
        ) }
      );
    } }]);}(_BaseInput2["default"]);_defineProperty(NumberInput, "defaultProps", { onKeyPress: function onKeyPress() {}, onChange: function onChange() {}, disabled: false, value: '', placeholder: '', icon: '', className: '', wrapperClassName: '', error: '', style: {} });
//# sourceMappingURL=NumberInput.js.map