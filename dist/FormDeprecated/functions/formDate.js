"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = formDate;var _react = _interopRequireDefault(require("react"));
var _Date = _interopRequireDefault(require("../Date"));
var _DateTime = _interopRequireDefault(require("../DateTime"));
var _moment = _interopRequireDefault(require("moment"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}

function formDate(Base)
{var
  FormDate = /*#__PURE__*/function (_Base) {function FormDate() {_classCallCheck(this, FormDate);return _callSuper(this, FormDate, arguments);}_inherits(FormDate, _Base);return _createClass(FormDate, [{ key: "renderDateInput", value:

      function renderDateInput() {var _this = this;var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref.field,text = _ref.text,_ref$format = _ref.format,format = _ref$format === void 0 ? 'DD.MM.YYYY' : _ref$format,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,callback = _ref.callback,size = _ref.size,className = _ref.className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,_ref$containerStyle = _ref.containerStyle,containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle,_ref$placeholderStyle = _ref.placeholderStyle,placeholderStyle = _ref$placeholderStyle === void 0 ? {} : _ref$placeholderStyle,_ref$icon = _ref.icon,icon = _ref$icon === void 0 ? false : _ref$icon,value = _ref.value,defaultDate = _ref.defaultDate,outsideCallback = _ref.outsideCallback;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Date["default"], {
          id: this.getPrefix() + field,
          icon: icon,
          name: field,
          size: size,
          style: style,
          defaultDate: defaultDate,
          containerStyle: containerStyle,
          placeholderStyle: placeholderStyle,
          className: className,
          disabled: this.getDisabled(disabled),
          format: format,
          value: value ? value : this.getLink(field + '_user'),
          onChangeDateInner: function onChangeDateInner(e, _ref2) {var name = _ref2.name,value = _ref2.value,date = _ref2.date;
            if (typeof value === 'string' && value !== '__.__.____' && !value.includes('_'))
            {
              var momentDate = (0, _moment["default"])(date, 'DD.MM.YYYY');

              // Создаем новые значения для проверки изменений
              var newField = momentDate && momentDate.isValid() ? momentDate.format('YYYY-MM-DD') : '';
              var newFieldUser = momentDate && momentDate.isValid() ? momentDate.format('DD.MM.YYYY') : value;
              var newFieldDate = momentDate && momentDate.isValid() ? momentDate.toDate() : null;

              _this.setState(function (prv) {
                if (!date)
                {
                  _this.setValueInput(prv, field, '');
                  _this.setValueInput(prv, field + '_date', null);
                }

                // Проверяем изменения
                if (prv.form[field + '_date'] === newField) {
                  // Значение не изменилось, выходим без вызова setState и callback
                  return null;
                }

                // Значения изменились, обновляем состояние
                _this.setValueInput(prv, field, newField);
                _this.setValueInput(prv, field + '_user', newFieldUser);
                _this.setValueInput(prv, field + '_date', newFieldDate);

                return prv;
              }, function () {
                // callback вызывается только если setState произошел
                if (typeof callback === 'function') {
                  callback(newFieldUser, newFieldDate);
                }
              });
            } else {
              _this.setState(function (prv) {
                if (!date)
                {
                  _this.setValueInput(prv, field, '');
                  _this.setValueInput(prv, field + '_date', null);
                }

                return prv;
              }, function () {
                // callback вызывается только если setState произошел
                if (typeof callback === 'function') {
                  callback('', null);
                }
              });
            }
          },
          onBlur: function onBlur() {
            _this.setState(function (prv) {
              _this.clearFormError(prv, field);

              return prv;
            });
          },
          onOutsideClick: function onOutsideClick() {
            if (typeof outsideCallback === 'function')
            {
              outsideCallback();
            }
          },
          placeholder: text,
          errors: this.state.formErrors }
        );
      } }, { key: "renderDateTimeInput", value:

      function renderDateTimeInput() {var _this2 = this;var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref3.field,text = _ref3.text,_ref3$format = _ref3.format,format = _ref3$format === void 0 ? 'DD.MM.YYYY HH:mm:ss' : _ref3$format,_ref3$disabled = _ref3.disabled,disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,callback = _ref3.callback,size = _ref3.size,outsideCallback = _ref3.outsideCallback,className = _ref3.className,_ref3$style = _ref3.style,style = _ref3$style === void 0 ? {} : _ref3$style,_ref3$containerStyle = _ref3.containerStyle,containerStyle = _ref3$containerStyle === void 0 ? {} : _ref3$containerStyle,_ref3$placeholderStyl = _ref3.placeholderStyle,placeholderStyle = _ref3$placeholderStyl === void 0 ? {} : _ref3$placeholderStyl,_ref3$icon = _ref3.icon,icon = _ref3$icon === void 0 ? false : _ref3$icon;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateTime["default"], {
          id: this.getPrefix() + field,
          type: "text",
          icon: icon,
          name: field,
          size: size,
          style: style,
          containerStyle: containerStyle,
          placeholderStyle: placeholderStyle,
          className: className,
          disabled: this.getDisabled(disabled),
          format: format,
          value: this.getLink(field + '_user'),
          onChangeDateInner: function onChangeDateInner(e, _ref4) {var name = _ref4.name,value = _ref4.value,date = _ref4.date;

            if (typeof value === 'string' && value !== '__.__.____ __:__:__' && !value.includes('_'))
            {
              _this2.setState(function (prv) {
                if (!date)
                {
                  _this2.setValueInput(prv, field, '');
                  _this2.setValueInput(prv, field + '_date', null);
                  _this2.setValueInput(prv, field + '_datetime', null);
                }

                var momentDate = (0, _moment["default"])(date, format);

                // Создаем новые значения для проверки изменений
                var newField = momentDate && momentDate.isValid() ? momentDate.format('YYYY-MM-DD HH:mm:ss') : '';
                var newFieldUser = momentDate && momentDate.isValid() ? momentDate.format('DD.MM.YYYY HH:mm:ss') : value;
                var newFieldDate = momentDate && momentDate.isValid() ? momentDate.toDate() : null;
                var newFieldDatetime = momentDate && momentDate.isValid() ? momentDate.toDate() : null;


                // Проверяем изменения только одного поля
                if (prv.form[field + '_datetime'] === newField) {
                  // Значение не изменилось, выходим без вызова setState и callback
                  return null;
                }

                // Значение изменилось, обновляем состояние
                _this2.setValueInput(prv, field, newField);
                _this2.setValueInput(prv, field + '_user', newFieldUser);
                _this2.setValueInput(prv, field + '_date', newFieldDate);
                _this2.setValueInput(prv, field + '_datetime', newFieldDatetime);

                return prv;
              }, function () {
                // callback вызывается только если setState произошел
                if (typeof callback === 'function') {
                  callback(value, date);
                }
              });
            } else {
              _this2.setState(function (prv) {
                if (!date)
                {
                  _this2.setValueInput(prv, field, '');
                  _this2.setValueInput(prv, field + '_date', null);
                  _this2.setValueInput(prv, field + '_datetime', null);
                }

                return prv;
              }, function () {
                // callback вызывается только если setState произошел
                if (typeof callback === 'function') {
                  callback('', null);
                }
              });
            }
          },
          onBlur: function onBlur() {
            _this2.setState(function (prv) {
              _this2.clearFormError(prv, field);

              return prv;
            });
          },
          onOutsideClick: function onOutsideClick() {
            if (typeof outsideCallback === 'function')
            {
              outsideCallback();
            }
          },
          placeholder: text,
          errors: this.state.formErrors }
        );
      } }, { key: "renderDateTimeInputWithoutIcon", value:

      function renderDateTimeInputWithoutIcon() {var _this3 = this;var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref5.field,text = _ref5.text,_ref5$format = _ref5.format,format = _ref5$format === void 0 ? 'DD.MM.YYYY' : _ref5$format,_ref5$disabled = _ref5.disabled,disabled = _ref5$disabled === void 0 ? false : _ref5$disabled,callback = _ref5.callback,size = _ref5.size,outsideCallback = _ref5.outsideCallback;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DateTime["default"], {
          id: this.getPrefix() + field,
          type: "text",
          icon: false,
          name: field,
          size: size,
          disabled: this.getDisabled(disabled),
          format: format,
          value: this.getLink(field + '_datetime'),
          onChangeDateInner: function onChangeDateInner(e, _ref6) {var name = _ref6.name,value = _ref6.value,date = _ref6.date;
            _this3.setState(function (prv) {
              _this3.setValueInput(prv, field, value);
              _this3.setValueInput(prv, field + '_datetime', date);

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback(value, date);
              }
            });
          },
          onBlur: function onBlur() {
            _this3.setState(function (prv) {
              _this3.clearFormError(prv, field);

              return prv;
            });
          },
          onOutsideClick: function onOutsideClick() {
            if (typeof outsideCallback === 'function')
            {
              outsideCallback();
            }
          },
          placeholder: text,
          errors: this.state.formErrors }
        );
      } }]);}(Base);


  return FormDate;
}
//# sourceMappingURL=formDate.js.map