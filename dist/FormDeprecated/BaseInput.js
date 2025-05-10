"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _InputPopup = _interopRequireDefault(require("./../FormDeprecated/InputPopup/InputPopup"));
var _error = _interopRequireDefault(require("./../assets/error.svg"));
var _newstyles = require("./newstyles");
var _detectBrowser = require("detect-browser");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}var

BaseInput = exports["default"] = /*#__PURE__*/function (_Component) {function BaseInput() {_classCallCheck(this, BaseInput);return _callSuper(this, BaseInput, arguments);}_inherits(BaseInput, _Component);return _createClass(BaseInput, [{ key: "handleShowSelect", value:

    /**
     * polymorph method
     * @param select
     */
    function handleShowSelect(select)
    {

    }

    // getSelected()
    // {
    //   return this.props.selected;
    // }
  }, { key: "getPlaceholderClassName", value:
    function getPlaceholderClassName()
    {
      var bool = false;

      if (this.state.focused)
      {
        bool = true;
      } else if (!!this.props.selected) {
        bool = true;
      } else if (this.props.value === 0 || this.props.value && this.props.value !== '' && !this.props.inputMask) {//если пусто или 0 и нет маски
        bool = true;
      } else if (this.props.value && typeof this.props.value === 'string' && this.props.value.replace(this.props.inputMask, '') !== '') {
        bool = true;
      } else if (typeof this.state.search === 'string' && this.state.search.length > 0) {
        bool = true;
      }

      return "placeholder " + (bool ? 'active' : '');
    } }, { key: "getContainerStyle", value:

    function getContainerStyle()
    {
      var containerStyle = _objectSpread({}, this.props.containerStyle);

      if (this.state.focused)
      {
        //'#1874DE'
        containerStyle.border = '1px solid #1874DE';
      }

      if (this.state.hasError === true)
      {
        containerStyle.border = '1px solid #EF5E70';
      }

      return containerStyle;
    } }, { key: "getWrapperStyle", value:

    function getWrapperStyle()
    {
      var containerStyle = _objectSpread({}, this.props.containerStyle);

      if (this.state.focused)
      {
        containerStyle.border = '1px solid #1874DE';
      }

      if (this.state.hasError === true)
      {
        containerStyle.border = '1px solid #EF5E70';
      }

      return containerStyle;
    } }, { key: "getInputStyle", value:

    function getInputStyle()
    {
      var inputStyle = _objectSpread({}, this.props.style);

      if (this.props.className === 'style2')
      {
        inputStyle.color = '#fff';
      }

      return inputStyle;
    } }, { key: "hasError", value:

    function hasError()
    {
      var name = this.props.name;
      if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0)
      {
        return true;
      }
    } }, { key: "getError", value:

    function getError()
    {
      var name = this.props.name;

      if (this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0)
      {
        return this.state.error;
      }
    }

    //TODO не забыть перенести в новый компонент, это чтобы исключить подсказки в safari внутри инпута, очень криво вылезает
  }, { key: "getName", value: function getName(name)
    {
      return name.replace('country', 'couuntry').replace('state', 'staate');
    } }, { key: "renderPlaceholder", value:

    function renderPlaceholder()
    {var _this = this;
      var _this$props = this.props,placeholder = _this$props.placeholder,id = _this$props.id,placeholderStyle = _this$props.placeholderStyle;

      return placeholder ? /*#__PURE__*/(0, _jsxRuntime.jsx)("label", { htmlFor: id, style: placeholderStyle, className: this.getPlaceholderClassName(), onClick: function onClick() {_this.handleShowSelect(true);}, children: placeholder }) : '';
    } }, { key: "renderTooltipError", value:

    function renderTooltipError()
    {
      var _this$props2 = this.props,id = _this$props2.id,className = _this$props2.className;

      var hasError = this.state.hasError;

      return hasError ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputPopup["default"], {
        trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", { id: 'tooltip-' + id, className: "", src: _error["default"], alt: "", onClick: function onClick() {} }), children: /*#__PURE__*/
        (0, _jsxRuntime.jsx)("label", { htmlFor: id, className: className + " error", children: this.getError() }) }
      ) : '';
    } }, { key: "handleClickOutside", value:

    function handleClickOutside(e)
    {var _this2 = this;
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target))
      {
        if (this.state.focused === true)
        {
          this.setState({
            focused: false,
            hasError: false
          }, function () {
            if (typeof _this2.props.onOutsideClick === 'function')
            {
              _this2.props.onOutsideClick(_this2.props.value);
            }
          });
        }
      }
    } }, { key: "componentDidMount", value:

    function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    } }, { key: "componentWillUnmount", value:

    function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    } }, { key: "componentDidUpdate", value:

    function componentDidUpdate(prevProps)
    {
      var name = this.props.name;

      var hasError = this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0;
      var error = hasError ? this.props.errors[name][0] : null;

      if (hasError !== this.state.hasError || error !== this.state.error) {
        this.setState({
          error: error,
          hasError: hasError
        });
      }
    } }, { key: "getWrapperClasses", value:

    function getWrapperClasses()
    {
      var className = this.props.wrapperClassName;

      if (this.props.disabled)
      {
        className += ' disabled';
      }

      return className;
    } }, { key: "onBlur", value:

    function onBlur()
    {
      if (typeof this.props.onBlur === 'function')
      {
        this.props.onBlur();
      }
    } }, { key: "renderInput", value:

    function renderInput()
    {var _this3 = this;
      var browser = (0, _detectBrowser.detect)();

      var _this$props3 = this.props,id = _this$props3.id,size = _this$props3.size,autoComplete = _this$props3.autoComplete,disabled = _this$props3.disabled,className = _this$props3.className,type = _this$props3.type,name = _this$props3.name,value = _this$props3.value,placeholder = _this$props3.placeholder;

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
        browser: browser && browser.name,
        id: id,
        style: this.getInputStyle(),
        size: size,
        autoComplete: autoComplete ? autoComplete : 'off',
        disabled: disabled,
        className: className,
        type: type,
        name: this.getName(name),
        value: value,
        placeholder: placeholder,
        onClick: function onClick(e) {
          e.stopPropagation();

          if (typeof _this3.props.onClick === 'function')
          {
            _this3.props.onClick(_this3);
          }
          // this.handleShowSelect(true);
        },
        onKeyPress: function onKeyPress(e) {
          if (typeof _this3.props.onKeyPress === 'function')
          {
            _this3.props.onKeyPress(e);
          }
        },
        onChange: function onChange(e) {
          _this3.props.onChange(e, {
            name: _this3.props.name,
            value: e.target.value
          });
          _this3.setState({
            hasError: false
          });
        },
        onFocus: function onFocus() {
          _this3.setState({
            focused: true,
            hasError: false
          });
        },
        onBlur: function onBlur() {






          // this.setState({
          //   focused: false,
          //   hasError: false
          // }, () => {
          //   this.onBlur(this.props.value);
          // });
        } });} }]);}(_react.Component);
//# sourceMappingURL=BaseInput.js.map