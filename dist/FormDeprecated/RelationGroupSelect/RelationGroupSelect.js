"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _styles = require("./styles");
var _finhelper = require("finhelper");
var _selectContainerStyle = require("../styles/selectContainerStyle");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}var

RelationGroupSelect = /*#__PURE__*/function (_BaseInput) {

  function RelationGroupSelect(props)
  {var _this;_classCallCheck(this, RelationGroupSelect);
    _this = _callSuper(this, RelationGroupSelect, [props]);

    _this.state = {
      error: null,
      select: false,
      hasError: false
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);return _this;
  }_inherits(RelationGroupSelect, _BaseInput);return _createClass(RelationGroupSelect, [{ key: "handleClickOutside", value:

    function handleClickOutside(e)
    {
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
        this.handleShowSelect(false);
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

      var name = null;

      if (!selected)
      {
        return this.props["default"];
      }

      items.map(function (item)
      {
        item.to_trades.map(function (trade)
        {
          if (selected.id === trade.id)
          {
            name = trade.active.type_text + _this2.getName(trade) + ' - ' + _finhelper.Money.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date;
          }

          return;
        });

        return;
      });

      if (!name)
      {
        return this.props["default"];
      }

      return name;
    } }, { key: "handleShowSelect", value:

    function handleShowSelect(select)
    {
      this.setState({
        select: select,
        hasError: false
      });
    } }, { key: "getName", value:

    function getName(trade)
    {
      var name = trade.active.name;

      if (name)
      {var _name, _name2;
        if (((_name = name) === null || _name === void 0 ? void 0 : _name.length) > 30) {
          name = ' (' + name.slice(0, 29) + '...)';
        } else if (((_name2 = name) === null || _name2 === void 0 ? void 0 : _name2.length) === 0) {
          name = ' ';
        } else {
          name = ' (' + name + ')';
        }
      }

      return name;
    } }, { key: "render", value:

    function render()
    {var _this3 = this;
      var _this$props2 = this.props,items = _this$props2.items,handle = _this$props2.handle,selected = _this$props2.selected;

      var error = this.getError();
      var focus = this.state.hasError ? { 'border': '1px solid #FF0000' } : {};


      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_selectContainerStyle.Container, { style: focus, children: /*#__PURE__*/
        (0, _jsxRuntime.jsxs)(_styles.InputWrapper, { ref: this.wrapperRef, children: [/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.Selected, { id: this.props.id, onClick: function onClick() {
              _this3.handleShowSelect(true);
            }, children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", { children: this.renderSelected() }) }), /*#__PURE__*/
          (0, _jsxRuntime.jsxs)(_styles.Select, { id: this.props.id + '-select', className: this.props.className + ' select', select: this.state.select, children: [/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_styles.Item, { onClick: function onClick() {handle(null);_this3.handleShowSelect(false);}, children: /*#__PURE__*/
              (0, _jsxRuntime.jsx)("span", { children: this.props["default"] }) }, 'default'
            ),
            items.map(function (item, key) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.Item, { children: [/*#__PURE__*/
                (0, _jsxRuntime.jsx)("span", { children: item.user_account ? item.user_account.name + ' ' + item.currency.code : '' }),
                item.to_trades.length ? item.to_trades.map(function (trade) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.SubItem, { id: _this3.props.id + '-' + trade.id, onClick: function onClick() {handle(trade);_this3.handleShowSelect(false);}, children:
                    trade.active.type_text + _this3.getName(trade) + ' - ' + _finhelper.Money.format(trade.count) + ' ' + trade.active.item.symbol + ' дата ' + trade.trade_at_date }, trade.id
                  );
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.SubItem, { children: "\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A" })] }, key
              );
            })] }
          ),
          this.renderPlaceholder(), /*#__PURE__*/
          (0, _jsxRuntime.jsx)("img", { className: "arrow", src: require('../../assets/arrow.svg'), alt: "" }),
          error && /*#__PURE__*/(0, _jsxRuntime.jsx)("label", { htmlFor: this.props.id, className: this.props.className + " error", onClick: function onClick() {
              _this3.handleShowSelect(true);
            }, children: error })] }
        ) }
      );
    } }]);}(_BaseInput2["default"]);var _default = exports["default"] =



RelationGroupSelect;
//# sourceMappingURL=RelationGroupSelect.js.map