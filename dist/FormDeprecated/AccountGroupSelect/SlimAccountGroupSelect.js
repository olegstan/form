"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SlimAccountGroupSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _slimstyles = require("./slimstyles");
var _finhelper = require("finhelper");
var _selectSlimContainerStyle = require("../styles/selectSlimContainerStyle");
var _AccountGroupSelect2 = require("./AccountGroupSelect");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var SlimAccountGroupSelect = exports.SlimAccountGroupSelect = /*#__PURE__*/function (_AccountGroupSelect) {
  function SlimAccountGroupSelect() {
    _classCallCheck(this, SlimAccountGroupSelect);
    return _callSuper(this, SlimAccountGroupSelect, arguments);
  }
  _inherits(SlimAccountGroupSelect, _AccountGroupSelect);
  return _createClass(SlimAccountGroupSelect, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        items = _this$props.items,
        handle = _this$props.handle,
        selected = _this$props.selected,
        showDefault = _this$props.showDefault;
      var focus = this.state.hasError ? {
        border: '1px solid #EF5E70'
      } : {};
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_selectSlimContainerStyle.Container, {
        size: this.props.size,
        className: this.props.className,
        style: this.props.style,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_slimstyles.InputWrapper, {
          className: 'wrapper ' + (this.state.select ? 'select' : ''),
          style: focus,
          ref: this.wrapperRef,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_slimstyles.Selected, {
            id: this.props.id,
            className: "selected",
            onClick: function onClick() {
              _this.handleShowSelect(true);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: this.renderSelected()
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_slimstyles.Select, {
            id: this.props.id + '-select',
            className: this.props.className + ' select',
            select: this.state.select,
            children: [showDefault && /*#__PURE__*/(0, _jsxRuntime.jsx)(_slimstyles.Item, {
              className: "item",
              onClick: function onClick() {
                handle(null);
                _this.handleShowSelect(false);
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: this.props["default"]
              })
            }, 'default'), items.map(function (item) {
              var name = item.name || item.bank_text || 'Счёт без названия';
              var shortName = name.length > 38 ? name.slice(0, 39) + '...' : name;
              return item.accounts.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_slimstyles.HeaderItem, {
                className: "item",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  children: shortName
                }), item.accounts.map(function (subItem) {
                  var sign = _finhelper.CurrencyConstants.getCurrencySignById(subItem.currency_id);
                  var sum = _finhelper.Money.format(subItem.sum) + ' ' + sign;
                  var subAccountName = subItem.name || 'Счёт без названия';
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_slimstyles.SubItem, {
                    className: "subitem",
                    id: _this.props.id + '-' + subItem.id,
                    onClick: function onClick() {
                      handle(subItem);
                      _this.handleShowSelect(false);
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                      children: [subAccountName, " - ", sum]
                    })
                  }, subItem.id);
                })]
              }, item.id);
            }), this.props.accountAddAvailable && /*#__PURE__*/(0, _jsxRuntime.jsx)(_slimstyles.Add, {
              className: "add",
              onClick: function onClick() {
                return _this.handleAddAccount();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0447\u0451\u0442"
              })
            }, 'add')]
          }), this.renderPlaceholder(), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            className: "arrow",
            src: this.getArrow(),
            onClick: function onClick() {
              _this.handleShowSelect(true);
            }
          }), this.renderTooltipError()]
        }), this.renderCreateComponent()]
      });
    }
  }]);
}(_AccountGroupSelect2.AccountGroupSelect);
var _default = exports["default"] = SlimAccountGroupSelect;