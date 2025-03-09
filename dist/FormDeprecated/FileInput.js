"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _detectBrowser = require("detect-browser");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n["default"] = e, t && t.set(e, n), n;}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var


FileInput = exports["default"] = /*#__PURE__*/function (_BaseInput) {

  function FileInput(props)
  {var _this;_classCallCheck(this, FileInput);
    _this = _callSuper(this, FileInput, [props]);
    _this.state = {
      error: null,
      focused: false,
      hasError: false
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);return _this;
  }

  /**
   *
   */_inherits(FileInput, _BaseInput);return _createClass(FileInput, [{ key: "componentDidMount", value:















    function componentDidMount()
    {
      var fileInput = document.getElementById(this.props.id);

      var file = new File([], this.props.valueText, {
        type: 'text/plain',
        lastModified: new Date()
      });

      var dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInput.files = dataTransfer.files;
    } }, { key: "getPlaceholderClassName", value:

    function getPlaceholderClassName()
    {
      var bool = true;

      return "placeholder " + (bool ? 'active' : '');
    } }, { key: "render", value:

    function render()
    {var _this2 = this;
      var style = {};

      if (this.props.style)
      {
        style = _objectSpread({},
        this.props.style);

      }


      var name = this.props.name;

      var focus = this.state.focused ? '1px solid #1874DE' : '';
      if (this.state.hasError === true)
      {
        focus = '1px solid #EF5E70';
      }

      style.border = focus;

      var browser = (0, _detectBrowser.detect)();

      var empty = true;

      if (this.props.value && typeof this.props.value.name === 'string')
      {
        empty = false;
      }

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_containerStyle.Container, {
        style: style,
        size: this.props.size,
        disabled: this.props.disabled,
        className: this.props.className + (this.props.disabled ? ' disabled' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
        }, children: /*#__PURE__*/

        (0, _jsxRuntime.jsxs)(_newstyles.InputContainer, { ref: this.wrapperRef, children: [/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_newstyles.StyledInput, {
            browser: browser && browser.name,
            id: this.props.id,
            size: this.props.size,
            disabled: this.props.disabled,
            className: this.props.className,
            type: "file",
            name: this.getName(name),
            placeholder: this.props.placeholder,
            onChange: function onChange(e) {

              var reader = new FileReader();
              reader.onloadend = function () {
                var base64String = reader.result;

                _this2.props.onChange(e, {
                  name: _this2.props.name,
                  value: {
                    name: e.target.files[0].name,
                    content: base64String
                  }
                });
              };
              reader.readAsDataURL(e.target.files[0]);


              _this2.setState({
                hasError: false
              });
            } }
          ),
          this.renderPlaceholder(),
          !empty && typeof this.props.size === 'undefined' && !this.props.disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", { className: "close", src: require('./../assets/ic_close_only.svg')["default"], onClick: function onClick(e) {
              _this2.props.onChange(e, {
                name: _this2.props.name,
                value: null
              });
              _this2.setState({
                hasError: false
              });
            }, alt: "" }),
          this.renderTooltipError()] }
        ) }



      );
    } }]);}(_BaseInput2["default"]);_defineProperty(FileInput, "defaultProps", { onKeyPress: function onKeyPress() {}, onChange: function onChange() {}, disabled: false, value: null, placeholder: '', icon: '', className: '', wrapperClassName: '', error: '', style: {} });
//# sourceMappingURL=FileInput.js.map