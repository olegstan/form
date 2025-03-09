"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _finhelper = require("finhelper");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _calendar = _interopRequireDefault(require("./../assets/calendar.svg"));var _jsxRuntime = require("react/jsx-runtime");var _excluded = ["id"];var _templateObject;function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _objectWithoutProperties(e, t) {if (null == e) return {};var o,r,i = _objectWithoutPropertiesLoose(e, t);if (Object.getOwnPropertySymbols) {var n = Object.getOwnPropertySymbols(e);for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);}return i;}function _objectWithoutPropertiesLoose(r, e) {if (null == r) return {};var t = {};for (var n in r) if ({}.hasOwnProperty.call(r, n)) {if (-1 !== e.indexOf(n)) continue;t[n] = r[n];}return t;}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _taggedTemplateLiteral(e, t) {return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n["default"] = e, t && t.set(e, n), n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var

Date = exports["default"] = /*#__PURE__*/function (_BaseInput) {
  function Date(props) {var _this;_classCallCheck(this, Date);
    _this = _callSuper(this, Date, [props]);_defineProperty(_this, "handleDateChange",











































































































    function (date) {
      if (typeof _this.props.onChangeDateInner === 'function') {
        _this.props.onChangeDateInner({}, {
          value: _this.formatDate(date[0]),
          date: date[0]
        });
      }
    });_defineProperty(_this, "handleInputChange",

    function (e) {
      var value = e.target.value;

      _this.setState({ date: value });

      if (typeof value === 'string' && value !== '__.__.____' && !value.includes('_')) {
        _this.props.onChangeDateInner({}, { date: value, value: value });
      } else {
        _this.props.onChangeDateInner({}, { date: null, value: value });
      }
    });_this.state = { error: null, focused: false, hasError: false, Input: null, componentsLoaded: false, date: props.value || null };_this.wrapperRef = /*#__PURE__*/(0, _react.createRef)(); // Use ref API instead of findDOMNode
    _this.inputRef = /*#__PURE__*/(0, _react.createRef)(); // Create ref for input
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);_this.flatpickrInstance = null; // Track the flatpickr instance
    return _this;}_inherits(Date, _BaseInput);return _createClass(Date, [{ key: "handleClickOutside", value: function handleClickOutside(e) {var _this2 = this;var isInsideFlatpickr = e.target.closest('.flatpickr-calendar');if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target) && !isInsideFlatpickr) {if (this.state.focused) {this.setState({ focused: false, hasError: false }, function () {if (typeof _this2.props.onOutsideClick === 'function') {_this2.props.onOutsideClick(_this2.props.value);}});}}} }, { key: "componentDidMount", value: function componentDidMount() {var _this3 = this;document.addEventListener('mousedown', this.handleClickOutside); // Dynamic import of Flatpickr library
      Promise.all([Promise.resolve().then(function () {return _interopRequireWildcard(require('flatpickr'));}), Promise.resolve().then(function () {return _interopRequireWildcard(require('react-flatpickr'));}), Promise.resolve().then(function () {return _interopRequireWildcard(require('flatpickr/dist/l10n/ru.js'));}), Promise.resolve().then(function () {return _interopRequireWildcard(require('flatpickr/dist/flatpickr.css'));})]).then(function (_ref) {var _ref2 = _slicedToArray(_ref, 3),flatpickr = _ref2[0],Flatpickr = _ref2[1],Russian = _ref2[2].Russian;var url = _finhelper.Url.getCurrentUrl();var lang = localStorage.getItem('language_id');if (url.includes('/ru/') || parseInt(lang) === 1 || lang === null) {try {flatpickr["default"].localize(Russian);} catch (e) {console.error(e);}}var DateStyledInput = (0, _styledComponents["default"])(Flatpickr["default"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n                ", "\n            "])), _newstyles.sharedInputStyle);_this3.setState({ componentsLoaded: true, Input: DateStyledInput });});} }, { key: "componentDidUpdate", value: function componentDidUpdate(prevProps) {var updates = {};if (this.props.value !== prevProps.value) {if (this.state.date !== this.props.value) {updates.date = this.props.value;}}var name = this.props.name;var hasError = this.props.errors && typeof this.props.errors[name] !== 'undefined' && this.props.errors[name].length > 0;var error = hasError ? this.props.errors[name][0] : null;if (hasError !== this.state.hasError || error !== this.state.error) {updates.error = error;updates.hasError = hasError;}if (Object.keys(updates).length > 0) {this.setState(updates);}} }, { key: "componentWillUnmount", value: function componentWillUnmount() {document.removeEventListener('mousedown', this.handleClickOutside);if (this.flatpickrInstance) {this.flatpickrInstance.destroy();}} }, { key: "formatDate", value: function formatDate(date) {var day = String(date.getDate()).padStart(2, '0');var month = String(date.getMonth() + 1).padStart(2, '0');var year = date.getFullYear();return "".concat(day, ".").concat(month, ".").concat(year);} }, { key: "getOptions", value: function getOptions() {var options = _objectSpread({ dateFormat: 'd.m.Y',
        allowInput: true,
        disableMobile: 'true' },
      this.props);


      if (this.props.defaultDate) {
        options.defaultDate = this.props.defaultDate;
      }

      return options;
    } }, { key: "render", value:

    function render() {var _this4 = this;
      var _this$state = this.state,Input = _this$state.Input,componentsLoaded = _this$state.componentsLoaded;

      return componentsLoaded ? /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_containerStyle.Container, {
        style: this.getContainerStyle(),
        className: "".concat(this.props.className, " ").concat(this.props.disabled ? 'disabled' : ''),
        disabled: this.props.disabled, children: /*#__PURE__*/

        (0, _jsxRuntime.jsxs)(_newstyles.InputContainer, {
          needMargin: true,
          focus: this.state.focused,
          ref: this.wrapperRef // Attach ref directly to the container
          , children: [
          this.props.disabled ? this.renderInput() : /*#__PURE__*/
          (0, _jsxRuntime.jsx)(Input, {
            id: this.props.id,
            style: this.props.style,
            disabled: this.props.disabled,
            value: this.state.date,
            placeholder: this.props.placeholder,
            autoComplete: this.props.autoComplete || 'off',
            options: this.getOptions(),
            className: this.props.className,
            onReady: function onReady(_, __, fp) {
              _this4.flatpickrInstance = fp; // Save the flatpickr instance
              fp.calendarContainer.id = "".concat(_this4.props.id, "-container");
            },
            onChange: this.handleDateChange,
            onOpen: function onOpen() {return _this4.setState({ focused: true, hasError: false });},
            onClose: function onClose() {return _this4.setState({ focused: false, hasError: false });},
            render: function render(_ref3, ref) {var id = _ref3.id,props = _objectWithoutProperties(_ref3, _excluded);return (/*#__PURE__*/
                (0, _jsxRuntime.jsx)(_newstyles.MaskedStyledInput, {
                  autoComplete: "off",
                  mask: "99.99.9999",
                  id: id,
                  value: props.value,
                  onChange: _this4.handleInputChange,
                  style: props.style,
                  className: props.className,
                  onFocus: function onFocus() {return _this4.setState({ focused: true, hasError: false });}, children:

                  function children(inputProps) {return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({ ref: ref }, inputProps));} }
                ));} }

          ),

          this.renderPlaceholder(),
          this.props.icon !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", { className: "calendar", src: _calendar["default"], alt: "" }),
          this.renderTooltipError()] }
        ) }
      ) :
      null;
    } }]);}(_BaseInput2["default"]);_defineProperty(Date, "defaultProps", { onKeyPress: function onKeyPress() {}, onChangeDateInner: function onChangeDateInner() {}, disabled: false, value: '', placeholder: '', mask: '', icon: '', className: '', wrapperClassName: '', error: '', inputMask: '__.__.____' });
//# sourceMappingURL=Date.js.map