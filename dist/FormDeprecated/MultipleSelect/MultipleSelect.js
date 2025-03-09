"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _Checkbox = _interopRequireDefault(require("../Checkbox"));
var _styles = require("./styles");
var _selectContainerStyle = require("../styles/selectContainerStyle");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _getRequireWildcardCache(e) {if ("function" != typeof WeakMap) return null;var r = new WeakMap(),t = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {return e ? t : r;})(e);}function _interopRequireWildcard(e, r) {if (!r && e && e.__esModule) return e;if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e };var t = _getRequireWildcardCache(r);if (t && t.has(e)) return t.get(e);var n = { __proto__: null },a = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];}return n["default"] = e, t && t.set(e, n), n;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}var

MultipleSelect = /*#__PURE__*/function (_BaseInput) {

  function MultipleSelect(props)
  {var _this;_classCallCheck(this, MultipleSelect);
    _this = _callSuper(this, MultipleSelect, [props]);

    _this.state = {
      error: null,
      select: false,
      hasError: false
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);return _this;
  }_inherits(MultipleSelect, _BaseInput);return _createClass(MultipleSelect, [{ key: "handleClickOutside", value:

    function handleClickOutside(e)
    {
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target))
      {
        this.handleShowSelect(false);

        if (typeof this.props.onOutsideClick === 'function' && this.state.focused === true)
        {
          this.props.onOutsideClick(this.state.search);
        }
      }
    } }, { key: "componentDidMount", value:

    function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    } }, { key: "componentWillUnmount", value:

    function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    } }, { key: "renderSelected", value:

    function renderSelected()
    {var _this2 = this;
      var _this$props = this.props,items = _this$props.items,selected = _this$props.selected;

      var def = this.props["default"];

      if (selected.length)
      {
        var selectedItms = [];

        items.map(function (item)
        {
          if (_this2.props.selected.indexOf(item.id) !== -1)
          {
            selectedItms.push(item.name);
          }

          return;
        });

        def = selectedItms.join(', ');

        if (def.length > 50)
        {
          def = def.slice(0, 49) + '...';
        }
      }

      return def;
    } }, { key: "getArrow", value:

    function getArrow()
    {
      if (this.props.className === 'style1')
      {

      }
      return require('../../assets/arrow.svg')["default"];
    } }, { key: "handleShowSelect", value:

    function handleShowSelect(select)
    {
      this.setState({
        select: select,
        hasError: false
      });
    } }, { key: "renderSelectAll", value:

    function renderSelectAll()
    {
      var handleAll = this.props.handleAll;
      if (this.props.selected.length) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox["default"], {
          id: '',
          text: 'Снять все',
          checked: true,
          toggleCallback: function toggleCallback(e) {handleAll(false);} }
        );
      } else {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox["default"], {
          id: '',
          text: 'Выбрать все',
          checked: false,
          toggleCallback: function toggleCallback(e) {handleAll(true);} }
        );
      }
    } }, { key: "render", value:

    function render()
    {var _this3 = this;
      var _this$props2 = this.props,items = _this$props2.items,handle = _this$props2.handle,selected = _this$props2.selected;

      var error = this.getError();

      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectContainerStyle.Container, {
        style: this.getContainerStyle(),
        className: this.props.className + ' ' + (this.state.select ? 'select' : ''), children: /*#__PURE__*/

        (0, _jsxRuntime.jsxs)(_styles.InputWrapper, { ref: this.wrapperRef, className: 'wrapper ' + (this.state.select ? 'select' : ''), children: [/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.Selected, { id: this.props.id, className: this.props.className + ' selected', onClick: function onClick() {
              _this3.handleShowSelect(true);
            }, children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", { children: this.renderSelected() }) }), /*#__PURE__*/
          (0, _jsxRuntime.jsxs)(_styles.Select, { id: this.props.id + '-multi-select', className: this.props.className + ' select', select: this.state.select, children: [
            this.renderSelectAll(),
            items.map(function (item, key) {return (/*#__PURE__*/
                (0, _jsxRuntime.jsx)(_Checkbox["default"], {

                  id: 'item-' + item.id,
                  text: item.name,
                  checked: _this3.props.selected.indexOf(item.id) !== -1,
                  toggleCallback: function toggleCallback(e) {handle(item);} }, key
                ));}
            )] }
          ),
          this.renderPlaceholder(), /*#__PURE__*/
          (0, _jsxRuntime.jsx)("img", { className: "arrow", src: this.getArrow(), alt: "" }),
          error && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", { htmlFor: this.props.id, className: this.props.className + " error", onClick: function onClick() {
              _this3.handleShowSelect(true);
            }, children: error })] }
        ) }
      );
    } }]);}(_BaseInput2["default"]);var _default = exports["default"] =



MultipleSelect;
//# sourceMappingURL=MultipleSelect.js.map