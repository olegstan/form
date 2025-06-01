"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = exports.AccountGroupSelect = void 0;var _react = _interopRequireWildcard(require("react"));
var _BaseInput2 = _interopRequireDefault(require("../BaseInput"));
var _styles = require("./styles");
var _finhelper = require("finhelper");
var _selectContainerStyle = require("../styles/selectContainerStyle");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var

AccountGroupSelect = exports.AccountGroupSelect = /*#__PURE__*/function (_BaseInput) {

  function AccountGroupSelect(props)
  {var _this;_classCallCheck(this, AccountGroupSelect);
    _this = _callSuper(this, AccountGroupSelect, [props]);

    _this.state = {
      error: null,
      select: false,
      hasError: false,
      moduleAccountCreate: null,
      moduleAccountEdit: null,

      showAccountCreate: false,
      showAccountEdit: false
    };

    _this.wrapperRef = /*#__PURE__*/(0, _react.createRef)();
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);return _this;
  }_inherits(AccountGroupSelect, _BaseInput);return _createClass(AccountGroupSelect, [{ key: "handleClickOutside", value:





    function handleClickOutside(e)
    {
      if (this.wrapperRef.current && !this.wrapperRef.current.contains(e.target)) {
        this.handleShowSelect(false);
      }
    } }, { key: "componentDidMount", value:

    function componentDidMount()
    {var _this2 = this;
      this.props.loadModuleCreate(function (module) {
        _this2.setState({
          moduleAccountCreate: module["default"]
        }, function () {
          _this2.props.loadModuleEdit(function (module) {
            _this2.setState({ moduleAccountEdit: module["default"] });
          });
        });
      });

      document.addEventListener('mousedown', this.handleClickOutside);
    } }, { key: "componentWillUnmount", value:

    function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    } }, { key: "renderSelected", value:

    function renderSelected()
    {
      var _this$props = this.props,items = _this$props.items,selected = _this$props.selected,getText = _this$props.getText;

      var name = null;

      if (!selected)
      {
        return this.props["default"];
      }

      items.map(function (item) {
        item.accounts.map(function (account) {
          if (selected.id === account.id)
          {
            name = getText(account);
          }

          return;
        });

        return;
      });

      if (!name)
      {
        return this.props["default"];
      }

      if (name.length > this.props.textLength)
      {
        return name.slice(0, this.props.textLength - 1) + '...';
      }

      return name;
    } }, { key: "handleShowSelect", value:

    function handleShowSelect(select)
    {
      if (!this.props.disabled)
      {
        this.setState({
          select: select
        });
      }
    } }, { key: "getArrow", value:

    function getArrow()
    {
      if (this.props.className === 'style1')
      {

      }
      return require('../../assets/arrow.svg');
    } }, { key: "handleAddAccount", value:

    function handleAddAccount()
    {var _this3 = this;
      this.setState({
        showAccountCreate: true
      }, function () {
        _this3.props.handleAddAccount();
      });
    } }, { key: "renderCreateComponent", value:

    function renderCreateComponent()
    {var _this4 = this;
      var _this$state = this.state,ComponentCreate = _this$state.moduleAccountCreate,ComponentEdit = _this$state.moduleAccountEdit;

      if (this.state.showAccountCreate)
      {
        return ComponentCreate && /*#__PURE__*/(0, _jsxRuntime.jsx)(ComponentCreate, {
          availableTypes: this.props.types,
          show: true,
          callback: function callback() {
            _this4.props.getUserAccounts();
          },
          onClose: function onClose() {
            _this4.setState({
              showAccountCreate: false
            }, function () {
              if (typeof _this4.props.onCloseCreateCallback === 'function')
              {
                _this4.props.onCloseCreateCallback();
              }
            });
          } }
        );
      }
    } }, { key: "render", value:

    function render()
    {var _this5 = this;
      var _this$props2 = this.props,items = _this$props2.items,handle = _this$props2.handle,showDefault = _this$props2.showDefault;

      var focus = this.state.hasError ? { 'border': '1px solid #EF5E70' } : {};


      //TODO сделать добавление субсчета
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_selectContainerStyle.Container, { size: this.props.size, className: this.props.className, style: this.props.style, children: [/*#__PURE__*/
        (0, _jsxRuntime.jsxs)(_styles.InputWrapper, { className: 'wrapper ' + (this.state.select ? 'select' : ''), style: focus, ref: this.wrapperRef, children: [/*#__PURE__*/
          (0, _jsxRuntime.jsx)(_styles.Selected, { id: this.props.id, className: "selected", onClick: function onClick() {
              _this5.handleShowSelect(true);
            }, children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", { children: this.renderSelected() }) }), /*#__PURE__*/
          (0, _jsxRuntime.jsxs)(_styles.Select, { style: {
              width: this.props.width ? this.props.width : '100%'
            }, id: this.props.id + '-select', className: this.props.className + ' select', select: this.state.select, children: [
            showDefault && /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Item, { className: "item", onClick: function onClick() {handle(null);_this5.handleShowSelect(false);}, children: /*#__PURE__*/
              (0, _jsxRuntime.jsx)("span", { children: this.props["default"] }) }, 'default'
            ),
            items.map(function (item) {
              var name = item.name ? item.name : item.bank_text ? item.bank_text : 'Счёт без названия';
              var shortName = name;
              if (name.length > 38)
              {
                shortName = name.slice(0, 39) + '...';
              }

              return item.accounts.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.HeaderItem, { className: "item", children: [/*#__PURE__*/
                (0, _jsxRuntime.jsx)("span", { children: shortName }),

                item.accounts.map(function (subItem) {
                  var sign = _finhelper.CurrencyConstants.getCurrencySignById(subItem.currency_id);
                  var sum = /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", { children: [_finhelper.Money.format(subItem.sum), " ", sign] });
                  var subAccountName = subItem.name ? subItem.name : 'Счёт без названия';

                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.SubItem, { className: "subitem", id: _this5.props.id + '-' + subItem.id, onClick: function onClick() {
                      handle(subItem);
                      _this5.handleShowSelect(false);
                    }, children: /*#__PURE__*/
                    (0, _jsxRuntime.jsxs)("span", { children: [
                      subAccountName, " - ", sum] }
                    ) }, subItem.id
                  );
                })] }, item.id
              );
            }),
            this.props.accountAddAvailable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Add, { className: this.props.className + ' add', onClick: function onClick() {_this5.handleAddAccount();}, children: /*#__PURE__*/
              (0, _jsxRuntime.jsx)("span", { children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0447\u0451\u0442" }) }, 'add'
            )] }
          ),
          this.renderPlaceholder(), /*#__PURE__*/
          (0, _jsxRuntime.jsx)("img", { className: "arrow", src: this.getArrow(), onClick: function onClick() {
              _this5.handleShowSelect(true);
            } }),
          this.renderTooltipError()] }
        ),
        this.renderCreateComponent()] }
      );
    } }]);}(_BaseInput2["default"]);_defineProperty(AccountGroupSelect, "defaultProps", { width: '500px' });var _default = exports["default"] =





AccountGroupSelect;
//# sourceMappingURL=AccountGroupSelect.js.map