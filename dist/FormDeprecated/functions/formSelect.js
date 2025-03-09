"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = formSelect;var _react = _interopRequireDefault(require("react"));
var _Select = _interopRequireDefault(require("../Select/Select"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}

function formSelect(Base)
{var
  FormSelect = /*#__PURE__*/function (_Base) {function FormSelect() {_classCallCheck(this, FormSelect);return _callSuper(this, FormSelect, arguments);}_inherits(FormSelect, _Base);return _createClass(FormSelect, [{ key: "getValueSelect", value:

      function getValueSelect(prv, field)
      {
        var parts = field.split('.');

        if (parts.length === 1)
        {
          return prv.form[field] ? prv.form[field] : null;
        } else {



















          // let linkField = prv.form;
          // let linkFieldId = prv.form;
          // let value = null;
          // for(let i = 0; i < parts.length; i++)
          // {
          //   if((i + 1) === parts.length)
          //   {
          //     linkField[parts[i]] = item;
          //     value = item ? item.id : null;
          //   }else{
          //     if(parts[i].isNumber())
          //     {
          //       parts[i] = parseInt(parts[i]);
          //     }
          //
          //     linkField = linkField[parts[i]];
          //     linkFieldId = linkFieldId[parts[i]];
          //   }
          // }
        }} }, { key: "setValueSelect", value: function setValueSelect(prv, field, item) {var parts = field.split('.');if (parts.length === 1) {prv.form[field] = item;prv.form[field + '_id'] = item ? item.id : '';} else {var linkField = prv.form;var linkFieldId = prv.form;for (var i = 0; i < parts.length; i++) {if (i + 1 === parts.length) {linkField[parts[i]] = item;linkFieldId[parts[i] + '_id'] = item ? item.id : '';
            } else {
              if (parts[i].isNumber())
              {
                parts[i] = parseInt(parts[i]);
              }

              linkField = linkField[parts[i]];
              linkFieldId = linkFieldId[parts[i]];
            }
          }
        }
      } }, { key: "setValueSearch", value:

      function setValueSearch(prv, field, item)
      {
        var parts = field.split('.');

        if (parts.length === 1)
        {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          prv.form[field + '_search'] = item ? item.name : '';
        } else {
          var linkField = prv.form;
          var linkFieldId = prv.form;
          for (var i = 0; i < parts.length; i++)
          {
            if (i + 1 === parts.length)
            {
              linkField[parts[i]] = item;
              linkFieldId[parts[i] + '_id'] = item ? item.id : '';
              linkFieldId[parts[i] + '_search'] = item ? item.name : '';
            } else {
              if (parts[i].isNumber())
              {
                parts[i] = parseInt(parts[i]);
              }

              linkField = linkField[parts[i]];
              linkFieldId = linkFieldId[parts[i]];
            }
          }
        }
      } }, { key: "clearFormError", value:

      function clearFormError(prv, field)
      {
        if (prv.formErrors && typeof prv.formErrors[field] !== 'undefined')
        {
          prv.formErrors[field] = [];
        }
      } }, { key: "renderSelect", value:

      function renderSelect()
      {var _this = this;var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},selected = _ref.selected,field = _ref.field,items = _ref.items,text = _ref.text,defaultText = _ref.defaultText,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,callback = _ref.callback,size = _ref.size,_ref$textLength = _ref.textLength,textLength = _ref$textLength === void 0 ? 25 : _ref$textLength,className = _ref.className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,_ref$containerStyle = _ref.containerStyle,containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select["default"], {
          textLength: textLength,
          "default": defaultText,
          placeholder: text,
          style: style,
          containerStyle: containerStyle,
          size: size,
          className: className,
          id: this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          selected: selected ? selected : this.getLink(field),
          handle: function handle(item) {
            var prevValue = _this.getValueSelect(_this.state, field);
            _this.setState(function (prv) {
              _this.setValueSelect(prv, field, item);
              _this.clearFormError(prv, field + '_id');

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback(item, prevValue);
              }
            });
          },
          items: items,
          errors: this.state.formErrors }
        );
      } }, { key: "renderSlimSelect", value:

      function renderSlimSelect()
      {var _this2 = this;var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},selected = _ref2.selected,field = _ref2.field,items = _ref2.items,text = _ref2.text,defaultText = _ref2.defaultText,_ref2$disabled = _ref2.disabled,disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,callback = _ref2.callback,size = _ref2.size,_ref2$textLength = _ref2.textLength,textLength = _ref2$textLength === void 0 ? 25 : _ref2$textLength,className = _ref2.className,_ref2$style = _ref2.style,style = _ref2$style === void 0 ? {} : _ref2$style,_ref2$containerStyle = _ref2.containerStyle,containerStyle = _ref2$containerStyle === void 0 ? {} : _ref2$containerStyle;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Select["default"], {
          textLength: textLength,
          "default": defaultText,
          placeholder: text,
          style: style,
          size: size,
          className: className,
          id: this.getPrefix() + field,
          name: field + '_id',
          disabled: this.getDisabled(disabled),
          selected: selected ? selected : this.getLink(field),
          handle: function handle(item) {
            var prevValue = _this2.getValueSelect(_this2.state, field);
            _this2.setState(function (prv) {
              _this2.setValueSelect(prv, field, item);
              _this2.clearFormError(prv, field + '_id');

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback(item, prevValue);
              }
            });
          },
          items: items,
          errors: this.state.formErrors }
        );
      } }, { key: "renderSelectStyle1", value:

      function renderSelectStyle1()
      {var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},selected = _ref3.selected,field = _ref3.field,items = _ref3.items,text = _ref3.text,defaultText = _ref3.defaultText,_ref3$disabled = _ref3.disabled,disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,callback = _ref3.callback,size = _ref3.size,_ref3$textLength = _ref3.textLength,textLength = _ref3$textLength === void 0 ? 25 : _ref3$textLength,className = _ref3.className,_ref3$style = _ref3.style,style = _ref3$style === void 0 ? {} : _ref3$style,_ref3$containerStyle = _ref3.containerStyle,containerStyle = _ref3$containerStyle === void 0 ? {} : _ref3$containerStyle;
        return this.renderSelect(_objectSpread(_objectSpread({}, arguments[0]), { className: 'style1' }));
      } }]);}(Base);

  return FormSelect;
}
//# sourceMappingURL=formSelect.js.map