"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formAccountGroupSelect;
var _react = _interopRequireDefault(require("react"));
var _AccountGroupSelect = _interopRequireDefault(require("../AccountGroupSelect/AccountGroupSelect"));
var _SlimAccountGroupSelect = _interopRequireDefault(require("../AccountGroupSelect/SlimAccountGroupSelect"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
function formAccountGroupSelect(Base) {
  var FormAccountGroupSelect = /*#__PURE__*/function (_Base) {
    function FormAccountGroupSelect() {
      _classCallCheck(this, FormAccountGroupSelect);
      return _callSuper(this, FormAccountGroupSelect, arguments);
    }
    _inherits(FormAccountGroupSelect, _Base);
    return _createClass(FormAccountGroupSelect, [{
      key: "renderAccountGroupSelect",
      value: function renderAccountGroupSelect() {
        var _this = this;
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref.field,
          items = _ref.items,
          text = _ref.text,
          defaultText = _ref.defaultText,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          _ref$showDefault = _ref.showDefault,
          showDefault = _ref$showDefault === void 0 ? false : _ref$showDefault,
          callback = _ref.callback,
          _ref$types = _ref.types,
          types = _ref$types === void 0 ? [1, 2, 3, 4] : _ref$types,
          _ref$style = _ref.style,
          style = _ref$style === void 0 ? {} : _ref$style,
          _ref$onCloseCreateCal = _ref.onCloseCreateCallback,
          onCloseCreateCallback = _ref$onCloseCreateCal === void 0 ? function () {} : _ref$onCloseCreateCal,
          _ref$textLength = _ref.textLength,
          textLength = _ref$textLength === void 0 ? 25 : _ref$textLength,
          size = _ref.size,
          _ref$getUserAccounts = _ref.getUserAccounts,
          getUserAccounts = _ref$getUserAccounts === void 0 ? function () {} : _ref$getUserAccounts,
          _ref$handleAddAccount = _ref.handleAddAccount,
          handleAddAccount = _ref$handleAddAccount === void 0 ? function () {} : _ref$handleAddAccount,
          _ref$getText = _ref.getText,
          getText = _ref$getText === void 0 ? function (account) {} : _ref$getText,
          _ref$importCreate = _ref.importCreate,
          importCreate = _ref$importCreate === void 0 ? function () {} : _ref$importCreate,
          _ref$importEdit = _ref.importEdit,
          importEdit = _ref$importEdit === void 0 ? function () {} : _ref$importEdit,
          _ref$accountAddAvaila = _ref.accountAddAvailable,
          accountAddAvailable = _ref$accountAddAvaila === void 0 ? false : _ref$accountAddAvaila;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AccountGroupSelect["default"], {
          textLength: textLength,
          types: types,
          size: size,
          accountAddAvailable: accountAddAvailable,
          getUserAccounts: getUserAccounts,
          handleAddAccount: handleAddAccount,
          loadModuleCreate: importCreate,
          loadModuleEdit: importEdit,
          getText: getText,
          onCloseCreateCallback: onCloseCreateCallback,
          "default": defaultText,
          placeholder: text,
          id: this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          selected: this.getLink(field),
          style: style,
          handle: function handle(item) {
            _this.setState(function (prv) {
              _this.setValueInput(prv, field, item);
              _this.setValueInput(prv, field + '_id', item ? item.id : '');
              return prv;
            }, function () {
              if (typeof callback === 'function') {
                callback(item);
              }
            });
          },
          items: items,
          errors: this.state.formErrors
        });
      }
    }, {
      key: "renderAccountGroupSelectStyle1",
      value: function renderAccountGroupSelectStyle1() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref2.field,
          items = _ref2.items,
          text = _ref2.text,
          defaultText = _ref2.defaultText,
          _ref2$disabled = _ref2.disabled,
          disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
          _ref2$showDefault = _ref2.showDefault,
          showDefault = _ref2$showDefault === void 0 ? false : _ref2$showDefault,
          callback = _ref2.callback,
          _ref2$types = _ref2.types,
          types = _ref2$types === void 0 ? [1, 2, 3, 4] : _ref2$types,
          _ref2$style = _ref2.style,
          style = _ref2$style === void 0 ? {} : _ref2$style,
          _ref2$onCloseCreateCa = _ref2.onCloseCreateCallback,
          onCloseCreateCallback = _ref2$onCloseCreateCa === void 0 ? function () {} : _ref2$onCloseCreateCa,
          _ref2$textLength = _ref2.textLength,
          textLength = _ref2$textLength === void 0 ? 25 : _ref2$textLength,
          size = _ref2.size,
          _ref2$getUserAccounts = _ref2.getUserAccounts,
          getUserAccounts = _ref2$getUserAccounts === void 0 ? function () {} : _ref2$getUserAccounts,
          _ref2$handleAddAccoun = _ref2.handleAddAccount,
          handleAddAccount = _ref2$handleAddAccoun === void 0 ? function () {} : _ref2$handleAddAccoun,
          _ref2$accountAddAvail = _ref2.accountAddAvailable,
          accountAddAvailable = _ref2$accountAddAvail === void 0 ? false : _ref2$accountAddAvail,
          _ref2$getText = _ref2.getText,
          getText = _ref2$getText === void 0 ? function (account) {} : _ref2$getText,
          _ref2$importCreate = _ref2.importCreate,
          importCreate = _ref2$importCreate === void 0 ? function () {} : _ref2$importCreate,
          _ref2$importEdit = _ref2.importEdit,
          importEdit = _ref2$importEdit === void 0 ? function () {} : _ref2$importEdit;
        return this.renderAccountGroupSelect(_objectSpread(_objectSpread({}, arguments[0]), {
          className: 'style1'
        }));
      }
    }, {
      key: "renderAccountGroupSelectStyle1Slim",
      value: function renderAccountGroupSelectStyle1Slim() {
        var _this2 = this;
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref3.field,
          items = _ref3.items,
          text = _ref3.text,
          defaultText = _ref3.defaultText,
          _ref3$disabled = _ref3.disabled,
          disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
          _ref3$showDefault = _ref3.showDefault,
          showDefault = _ref3$showDefault === void 0 ? false : _ref3$showDefault,
          callback = _ref3.callback,
          _ref3$types = _ref3.types,
          types = _ref3$types === void 0 ? [1, 2, 3, 4] : _ref3$types,
          _ref3$style = _ref3.style,
          style = _ref3$style === void 0 ? {} : _ref3$style,
          _ref3$onCloseCreateCa = _ref3.onCloseCreateCallback,
          onCloseCreateCallback = _ref3$onCloseCreateCa === void 0 ? function () {} : _ref3$onCloseCreateCa,
          _ref3$textLength = _ref3.textLength,
          textLength = _ref3$textLength === void 0 ? 25 : _ref3$textLength,
          size = _ref3.size,
          _ref3$getUserAccounts = _ref3.getUserAccounts,
          getUserAccounts = _ref3$getUserAccounts === void 0 ? function () {} : _ref3$getUserAccounts,
          _ref3$handleAddAccoun = _ref3.handleAddAccount,
          handleAddAccount = _ref3$handleAddAccoun === void 0 ? function () {} : _ref3$handleAddAccoun,
          _ref3$getText = _ref3.getText,
          getText = _ref3$getText === void 0 ? function (account) {} : _ref3$getText,
          _ref3$importCreate = _ref3.importCreate,
          importCreate = _ref3$importCreate === void 0 ? function () {} : _ref3$importCreate,
          _ref3$importEdit = _ref3.importEdit,
          importEdit = _ref3$importEdit === void 0 ? function () {} : _ref3$importEdit,
          _ref3$accountAddAvail = _ref3.accountAddAvailable,
          accountAddAvailable = _ref3$accountAddAvail === void 0 ? false : _ref3$accountAddAvail;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SlimAccountGroupSelect["default"], {
          textLength: textLength,
          types: types,
          size: size,
          accountAddAvailable: accountAddAvailable,
          getUserAccounts: getUserAccounts,
          handleAddAccount: handleAddAccount,
          loadModuleCreate: importCreate,
          loadModuleEdit: importEdit,
          getText: getText,
          onCloseCreateCallback: onCloseCreateCallback,
          style: style,
          className: 'style1',
          "default": defaultText,
          showDefault: showDefault,
          placeholder: text,
          id: this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          selected: this.getLink(field),
          handle: function handle(item) {
            _this2.setState(function (prv) {
              _this2.setValueInput(prv, field, item);
              _this2.setValueInput(prv, field + '_id', item ? item.id : '');
              return prv;
            }, function () {
              if (typeof callback === 'function') {
                callback(item);
              }
            });
          },
          items: items,
          errors: this.state.formErrors
        });
      }
    }]);
  }(Base);
  return FormAccountGroupSelect;
}