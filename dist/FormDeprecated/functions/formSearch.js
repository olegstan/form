"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = formSearch;
var _react = _interopRequireDefault(require("react"));
var _Search = _interopRequireDefault(require("../Search/Search"));
var _GroupRemoteSearch = _interopRequireDefault(require("../GroupSearch/GroupRemoteSearch"));
var _RemoteSearch = _interopRequireDefault(require("../Search/RemoteSearch"));
var _ContactSearch = _interopRequireDefault(require("../ContactSearch/ContactSearch"));
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
function formSearch(Base) {
  var FormSearch = /*#__PURE__*/function (_Base) {
    function FormSearch() {
      _classCallCheck(this, FormSearch);
      return _callSuper(this, FormSearch, arguments);
    }
    _inherits(FormSearch, _Base);
    return _createClass(FormSearch, [{
      key: "renderContactSearch",
      value: function renderContactSearch() {
        var _this = this;
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref.field,
          items = _ref.items,
          text = _ref.text,
          defaultText = _ref.defaultText,
          _ref$disabled = _ref.disabled,
          disabled = _ref$disabled === void 0 ? false : _ref$disabled,
          _ref$onSearch = _ref.onSearch,
          onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,
          callback = _ref.callback,
          id = _ref.id,
          onClick = _ref.onClick,
          _ref$selectStyle = _ref.selectStyle,
          selectStyle = _ref$selectStyle === void 0 ? {} : _ref$selectStyle,
          _ref$inputStyle = _ref.inputStyle,
          inputStyle = _ref$inputStyle === void 0 ? {} : _ref$inputStyle,
          _ref$wrapperStyle = _ref.wrapperStyle,
          wrapperStyle = _ref$wrapperStyle === void 0 ? {} : _ref$wrapperStyle,
          _ref$containerStyle = _ref.containerStyle,
          containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle,
          _ref$inputContainerSt = _ref.inputContainerStyle,
          inputContainerStyle = _ref$inputContainerSt === void 0 ? {} : _ref$inputContainerSt,
          _ref$clearImageStyle = _ref.clearImageStyle,
          clearImageStyle = _ref$clearImageStyle === void 0 ? {} : _ref$clearImageStyle,
          _ref$showClearIcon = _ref.showClearIcon,
          showClearIcon = _ref$showClearIcon === void 0 ? false : _ref$showClearIcon,
          className = _ref.className,
          _ref$contactAddAvaila = _ref.contactAddAvailable,
          contactAddAvailable = _ref$contactAddAvaila === void 0 ? true : _ref$contactAddAvaila,
          _ref$handleAddContact = _ref.handleAddContact,
          handleAddContact = _ref$handleAddContact === void 0 ? function () {} : _ref$handleAddContact;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContactSearch["default"], {
          "default": defaultText,
          placeholder: text,
          className: className,
          id: id ? id : this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          selected: this.getLink(field),
          search: this.state.form[field + '_search'],
          onSearch: onSearch,
          inputStyle: inputStyle,
          selectStyle: selectStyle,
          containerStyle: containerStyle,
          inputContainerStyle: inputContainerStyle,
          clearImageStyle: clearImageStyle,
          wrapperStyle: wrapperStyle,
          showClearIcon: showClearIcon,
          onClick: onClick,
          contactAddAvailable: contactAddAvailable,
          handleAddContact: handleAddContact,
          handle: function handle(item) {
            _this.setState(function (prv) {
              _this.setValueSearch(prv, field, item);
              _this.clearFormError(prv, field + '_id');
              return prv;
            }, function () {
              if (typeof callback === 'function') {
                callback(item);
              }
            });
          },
          onBlur: function onBlur() {
            _this.setState(function (prv) {
              _this.clearFormError(prv, field + '_id');
              return prv;
            });
          },
          items: items,
          errors: this.state.formErrors
        });
      }
    }, {
      key: "renderSearch",
      value: function renderSearch() {
        var _this2 = this;
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref2.field,
          items = _ref2.items,
          text = _ref2.text,
          defaultText = _ref2.defaultText,
          _ref2$disabled = _ref2.disabled,
          disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
          _ref2$onSearch = _ref2.onSearch,
          onSearch = _ref2$onSearch === void 0 ? function () {} : _ref2$onSearch,
          callback = _ref2.callback,
          id = _ref2.id,
          onClick = _ref2.onClick,
          _ref2$selectStyle = _ref2.selectStyle,
          selectStyle = _ref2$selectStyle === void 0 ? {} : _ref2$selectStyle,
          _ref2$inputStyle = _ref2.inputStyle,
          inputStyle = _ref2$inputStyle === void 0 ? {} : _ref2$inputStyle,
          _ref2$wrapperStyle = _ref2.wrapperStyle,
          wrapperStyle = _ref2$wrapperStyle === void 0 ? {} : _ref2$wrapperStyle,
          _ref2$containerStyle = _ref2.containerStyle,
          containerStyle = _ref2$containerStyle === void 0 ? {} : _ref2$containerStyle,
          _ref2$inputContainerS = _ref2.inputContainerStyle,
          inputContainerStyle = _ref2$inputContainerS === void 0 ? {} : _ref2$inputContainerS,
          _ref2$clearImageStyle = _ref2.clearImageStyle,
          clearImageStyle = _ref2$clearImageStyle === void 0 ? {} : _ref2$clearImageStyle,
          _ref2$showClearIcon = _ref2.showClearIcon,
          showClearIcon = _ref2$showClearIcon === void 0 ? false : _ref2$showClearIcon,
          className = _ref2.className;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Search["default"], {
          "default": defaultText,
          placeholder: text,
          className: className,
          id: id ? id : this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          selected: this.getLink(field),
          search: this.state.form[field + '_search'],
          onSearch: onSearch,
          inputStyle: inputStyle,
          selectStyle: selectStyle,
          containerStyle: containerStyle,
          inputContainerStyle: inputContainerStyle,
          clearImageStyle: clearImageStyle,
          wrapperStyle: wrapperStyle,
          showClearIcon: showClearIcon,
          onClick: onClick,
          handle: function handle(item) {
            _this2.setState(function (prv) {
              _this2.setValueSearch(prv, field, item);
              _this2.clearFormError(prv, field + '_id');
              return prv;
            }, function () {
              if (typeof callback === 'function') {
                callback(item);
              }
            });
          },
          onBlur: function onBlur() {
            _this2.setState(function (prv) {
              _this2.clearFormError(prv, field + '_id');
              return prv;
            });
          },
          items: items,
          errors: this.state.formErrors
        });
      }
    }, {
      key: "renderSearchStyle1",
      value: function renderSearchStyle1() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref3.field,
          items = _ref3.items,
          text = _ref3.text,
          defaultText = _ref3.defaultText,
          _ref3$disabled = _ref3.disabled,
          disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,
          _ref3$onSearch = _ref3.onSearch,
          onSearch = _ref3$onSearch === void 0 ? function () {} : _ref3$onSearch,
          callback = _ref3.callback,
          id = _ref3.id,
          onClick = _ref3.onClick,
          _ref3$selectStyle = _ref3.selectStyle,
          selectStyle = _ref3$selectStyle === void 0 ? {} : _ref3$selectStyle,
          _ref3$inputStyle = _ref3.inputStyle,
          inputStyle = _ref3$inputStyle === void 0 ? {} : _ref3$inputStyle,
          _ref3$wrapperStyle = _ref3.wrapperStyle,
          wrapperStyle = _ref3$wrapperStyle === void 0 ? {} : _ref3$wrapperStyle,
          _ref3$containerStyle = _ref3.containerStyle,
          containerStyle = _ref3$containerStyle === void 0 ? {} : _ref3$containerStyle,
          _ref3$inputContainerS = _ref3.inputContainerStyle,
          inputContainerStyle = _ref3$inputContainerS === void 0 ? {} : _ref3$inputContainerS,
          _ref3$clearImageStyle = _ref3.clearImageStyle,
          clearImageStyle = _ref3$clearImageStyle === void 0 ? {} : _ref3$clearImageStyle,
          _ref3$showClearIcon = _ref3.showClearIcon,
          showClearIcon = _ref3$showClearIcon === void 0 ? false : _ref3$showClearIcon,
          className = _ref3.className;
        return this.renderSearch(_objectSpread(_objectSpread({}, arguments[0]), {
          className: 'style1'
        }));
      }
    }, {
      key: "renderRemoteSearch",
      value: function renderRemoteSearch() {
        var _this3 = this;
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref4.field,
          items = _ref4.items,
          text = _ref4.text,
          defaultText = _ref4.defaultText,
          _ref4$onSearch = _ref4.onSearch,
          onSearch = _ref4$onSearch === void 0 ? function () {} : _ref4$onSearch,
          callback = _ref4.callback,
          _ref4$disabled = _ref4.disabled,
          disabled = _ref4$disabled === void 0 ? false : _ref4$disabled,
          loading = _ref4.loading,
          _ref4$inputStyle = _ref4.inputStyle,
          inputStyle = _ref4$inputStyle === void 0 ? {} : _ref4$inputStyle,
          _ref4$inputContainerS = _ref4.inputContainerStyle,
          inputContainerStyle = _ref4$inputContainerS === void 0 ? {} : _ref4$inputContainerS,
          _ref4$wrapperStyle = _ref4.wrapperStyle,
          wrapperStyle = _ref4$wrapperStyle === void 0 ? {} : _ref4$wrapperStyle,
          _ref4$containerStyle = _ref4.containerStyle,
          containerStyle = _ref4$containerStyle === void 0 ? {} : _ref4$containerStyle,
          className = _ref4.className;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RemoteSearch["default"], {
          "default": defaultText,
          placeholder: text,
          className: className,
          loading: loading,
          id: this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          inputStyle: inputStyle,
          containerStyle: containerStyle,
          inputContainerStyle: inputContainerStyle,
          wrapperStyle: wrapperStyle,
          selected: this.getLink(field),
          search: this.getLink(field + '_search'),
          onSearch: onSearch,
          handle: function handle(item, search) {
            _this3.setState(function (prv) {
              _this3.setValueSearch(prv, field, item);
              _this3.clearFormError(prv, field + '_id');
              return prv;
            }, function () {
              if (typeof callback === 'function') {
                callback(item);
              }
            });
          },
          onBlur: function onBlur() {
            _this3.setState(function (prv) {
              _this3.clearFormError(prv, field + '_id');
              return prv;
            });
          },
          items: items,
          errors: this.state.formErrors
        });
      }
    }, {
      key: "renderGroupRemoteSearch",
      value: function renderGroupRemoteSearch() {
        var _this4 = this;
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref5.field,
          items = _ref5.items,
          text = _ref5.text,
          defaultText = _ref5.defaultText,
          _ref5$onSearch = _ref5.onSearch,
          onSearch = _ref5$onSearch === void 0 ? function () {} : _ref5$onSearch,
          _ref5$callback = _ref5.callback,
          callback = _ref5$callback === void 0 ? function () {} : _ref5$callback,
          loading = _ref5.loading,
          _ref5$disabled = _ref5.disabled,
          disabled = _ref5$disabled === void 0 ? false : _ref5$disabled,
          _ref5$inputStyle = _ref5.inputStyle,
          inputStyle = _ref5$inputStyle === void 0 ? {} : _ref5$inputStyle,
          _ref5$containerStyle = _ref5.containerStyle,
          containerStyle = _ref5$containerStyle === void 0 ? {} : _ref5$containerStyle,
          _ref5$inputContainerS = _ref5.inputContainerStyle,
          inputContainerStyle = _ref5$inputContainerS === void 0 ? {} : _ref5$inputContainerS,
          _ref5$wrapperStyle = _ref5.wrapperStyle,
          wrapperStyle = _ref5$wrapperStyle === void 0 ? {} : _ref5$wrapperStyle,
          _ref5$size = _ref5.size,
          size = _ref5$size === void 0 ? '' : _ref5$size,
          className = _ref5.className;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupRemoteSearch["default"], {
          "default": defaultText,
          size: size,
          className: className,
          placeholder: text,
          loading: loading,
          id: this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          inputStyle: inputStyle,
          containerStyle: containerStyle,
          inputContainerStyle: inputContainerStyle,
          inputContainerStylewrapperStyle: wrapperStyle,
          selected: this.getLink(field),
          search: this.getLink(field + '_search'),
          onSearch: onSearch,
          handle: function handle(item, search) {
            _this4.setState(function (prv) {
              _this4.setValueSearch(prv, field, item);
              _this4.clearFormError(prv, field + '_id');
              return prv;
            }, function () {
              if (typeof callback === 'function') {
                callback(item);
              }
            });
          },
          onBlur: function onBlur() {
            _this4.setState(function (prv) {
              _this4.clearFormError(prv, field + '_id');
              return prv;
            });
          },
          items: items,
          errors: this.state.formErrors
        });
      }
    }, {
      key: "renderGroupRemoteSearchStyle1",
      value: function renderGroupRemoteSearchStyle1() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          field = _ref6.field,
          items = _ref6.items,
          text = _ref6.text,
          defaultText = _ref6.defaultText,
          _ref6$onSearch = _ref6.onSearch,
          onSearch = _ref6$onSearch === void 0 ? function () {} : _ref6$onSearch,
          _ref6$callback = _ref6.callback,
          callback = _ref6$callback === void 0 ? function () {} : _ref6$callback,
          loading = _ref6.loading,
          _ref6$disabled = _ref6.disabled,
          disabled = _ref6$disabled === void 0 ? false : _ref6$disabled,
          _ref6$inputStyle = _ref6.inputStyle,
          inputStyle = _ref6$inputStyle === void 0 ? {} : _ref6$inputStyle,
          _ref6$containerStyle = _ref6.containerStyle,
          containerStyle = _ref6$containerStyle === void 0 ? {} : _ref6$containerStyle,
          _ref6$inputContainerS = _ref6.inputContainerStyle,
          inputContainerStyle = _ref6$inputContainerS === void 0 ? {} : _ref6$inputContainerS,
          _ref6$wrapperStyle = _ref6.wrapperStyle,
          wrapperStyle = _ref6$wrapperStyle === void 0 ? {} : _ref6$wrapperStyle,
          _ref6$size = _ref6.size,
          size = _ref6$size === void 0 ? '' : _ref6$size,
          className = _ref6.className;
        return this.renderGroupRemoteSearch(_objectSpread(_objectSpread({}, arguments[0]), {
          className: 'style1'
        }));
      }
    }, {
      key: "setValueSearch",
      value: function setValueSearch(prv, field, item) {
        var parts = field.split('.');
        if (parts.length === 1) {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          prv.form[field + '_search'] = item ? item.name : '';
        } else {
          var linkField = prv.form;
          var linkFieldId = prv.form;
          for (var i = 0; i < parts.length; i++) {
            if (i + 1 === parts.length) {
              linkField[parts[i]] = item;
              linkFieldId[parts[i] + '_id'] = item ? item.id : '';
              linkFieldId[parts[i] + '_search'] = item ? item.name : '';
            } else {
              if (parts[i].isNumber()) {
                parts[i] = parseInt(parts[i]);
              }
              linkField = linkField[parts[i]];
              linkFieldId = linkFieldId[parts[i]];
            }
          }
        }
      }
    }, {
      key: "setValuesBySearch",
      value: function setValuesBySearch(prv, search, field, customId, items) {
        prv.form[field + '_search'] = search;
        var searchItem = null;
        items.map(function (item) {
          if (item.name === search) {
            searchItem = item;
          }
        });
        if (searchItem) {
          prv.form[field] = searchItem;
          prv.form[field + '_id'] = searchItem.id;
          if (searchItem.id === customId) {
            prv.form['custom_' + field + '_id'] = searchItem.type_id;
          }
        } else {
          prv.form[field] = null;
          prv.form[field + '_id'] = '';
          prv.form['custom_' + field + '_id'] = null;
        }
        return searchItem;
      }
    }, {
      key: "clearFormError",
      value: function clearFormError(prv, field) {
        if (prv.formErrors && typeof prv.formErrors[field] !== 'undefined') {
          prv.formErrors[field] = [];
        }
      }
    }]);
  }(Base);
  return FormSearch;
}