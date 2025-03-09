"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _styles = require("./styles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n["default"] = e, t && t.set(e, n), n;}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}var

SearchWithButton = /*#__PURE__*/function (_BaseInput) {

  function SearchWithButton(props)
  {var _this;_classCallCheck(this, SearchWithButton);
    _this = _callSuper(this, SearchWithButton, [props]);

    _this.state = {
      error: null,
      select: false,
      focused: false,
      hasError: false,
      search: props.search ? props.search : ''
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);return _this;
  }_inherits(SearchWithButton, _BaseInput);return _createClass(SearchWithButton, [{ key: "componentDidUpdate", value:

    function componentDidUpdate(prevProps)
    {



























      // const {name} = this.props;
      // if (nextProps.errors && typeof nextProps.errors[name] !== 'undefined' && nextProps.errors[name].length > 0)
      // {
      //   this.setState({
      //     error: nextProps.errors[name][0],
      //     hasError: true
      //   })
      // } else
      // {
      //   this.setState({
      //     error: null,
      //     hasError: false
      //   })
      // }
      //
      // for (const index in nextProps)
      // {
      //   if (nextProps[index] !== this.props[index])
      //   {
      //     if (index === 'search')
      //     {
      //       this.setState({
      //         search: nextProps[index]
      //       });
      //     }
      //   }
      // }
    } }, { key: "handleClickOutside", value: function handleClickOutside(e) {if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {this.handleShowSelect(false);}} }, { key: "componentDidMount", value: function componentDidMount() {document.addEventListener('mousedown', this.handleClickOutside);} }, { key: "componentWillUnmount", value: function componentWillUnmount() {document.removeEventListener('mousedown', this.handleClickOutside);} }, { key: "handleShowSelect", value: function handleShowSelect(bool) {this.setState({ select: bool, focused: bool });} }, { key: "onSearch", value: function onSearch(search) {if (typeof this.props.onSearch === 'function')
      {
        this.props.onSearch(search);
      }
    } }, { key: "render", value:

    function render()
    {var _this2 = this;
      var _this$props = this.props,items = _this$props.items,handle = _this$props.handle,name = _this$props.name;

      var search = this.state.search ? this.state.search.toLowerCase() : '';

      var resItems = items ? items.
      filter(function (item) {var _item$name;
        if ((item === null || item === void 0 || (_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().indexOf(search)) === -1)
        {
          return false;
        } else {
          return true;
        }
      }).
      map(function (item, key) {return (/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.Item, { className: _this2.props.className + ' item', id: _this2.props.id + '-' + item.id, onClick: function onClick() {
              handle(item, item.name);
              _this2.handleShowSelect(false);
              _this2.setState({
                search: item.name
              });
            }, children: /*#__PURE__*/
            (0, _jsxRuntime.jsx)("span", { children: item.name }) }, item.id
          ));}
      ) : [];


      var style = {};

      if (this.props.style)
      {
        style = _objectSpread({},
        this.props.style);

      }

      var error = this.getError();
      var focus = this.state.focused ? '1px solid #1874DE' : '';
      if (this.state.hasError === true)
      {
        focus = '1px solid #FF0000';
      }

      style.border = focus;

      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.Container, { className: this.props.className, children: [/*#__PURE__*/
        (0, _jsxRuntime.jsxs)(_styles.InputWrapper, { className: 'wrapper ' + (this.state.select && resItems.length ? 'select' : ''), style: style, ref: this.wrapperRef, children: [/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.Input, {
            id: this.props.id,
            autoComplete: 'off',
            disabled: this.props.disabled,
            style: this.props.style,
            className: this.props.className,
            type: this.props.type,
            name: this.getName(name),
            value: this.state.search,
            placeholder: this.props.placeholder,
            onClick: function onClick() {

              // this.handleShowSelect(true);
            }, onKeyPress: function onKeyPress(e) {
              if (typeof _this2.props.onKeyPress === 'function')
              {
                _this2.props.onKeyPress(e);
              }
            },
            onChange: function onChange(e) {
              var value = e.target.value;
              if (value.length > 0)
              {
                _this2.setState({
                  search: value,
                  hasError: false
                }, function () {
                  _this2.onSearch(_this2.state.search);
                });
              } else {
                _this2.setState({
                  search: value,
                  hasError: false
                }, function () {
                  _this2.onSearch(_this2.state.search);
                });
                handle(null);
              }
            },
            onFocus: function onFocus() {
              _this2.setState({
                focused: true,
                hasError: false
              });
            } }
          ),
          this.renderPlaceholder(), /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.Select, { id: this.props.id + '-select', className: this.props.className + ' select', select: this.state.select || this.state.focused, children:
            resItems }
          ),
          error ? /*#__PURE__*/(0, _jsxRuntime.jsx)("label", { htmlFor: this.props.id, className: this.props.className + " error", children: error }) : ''] }
        ), /*#__PURE__*/
        (0, _jsxRuntime.jsx)("div", { className: 'plus', children: /*#__PURE__*/
          (0, _jsxRuntime.jsx)("div", { onClick: function onClick() {_this2.props.buttonClick();}, children: /*#__PURE__*/
            (0, _jsxRuntime.jsx)("img", { src: require('./../../assets/plus.svg'), alt: "" }) }
          ) }
        )] }
      );
    } }]);}(_BaseInput2["default"]);var _default = exports["default"] =



SearchWithButton;
//# sourceMappingURL=SearchWithButton.js.map