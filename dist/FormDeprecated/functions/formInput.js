"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = formInput;var _react = _interopRequireDefault(require("react"));
var _SlimInput = _interopRequireDefault(require("../SlimInput"));
var _Input = _interopRequireDefault(require("../Input"));
var _MaskedInput = _interopRequireDefault(require("../MaskedInput"));
var _NumberInput = _interopRequireDefault(require("../NumberInput"));
var _TextArea = _interopRequireDefault(require("../TextArea"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);}

function formInput(Base)
{var
  FormInput = /*#__PURE__*/function (_Base) {function FormInput() {_classCallCheck(this, FormInput);return _callSuper(this, FormInput, arguments);}_inherits(FormInput, _Base);return _createClass(FormInput, [{ key: "renderHiddenInput", value:

      function renderHiddenInput()
      {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref.field,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? true : _ref$disabled,id = _ref.id;
        var link = this.getLink(field);
        var value = link === null ? '' : link;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
          id: id ? id : this.getPrefix() + field,
          containerStyle: {
            display: 'none'
          },
          type: "text",
          name: field,
          disabled: this.getDisabled(disabled),
          value: value,
          onChange: function onChange(e, _ref2) {var name = _ref2.name,value = _ref2.value;

          },
          placeholder: '',
          errors: this.state.formErrors }
        );
      } }, { key: "renderInput", value:

      function renderInput()
      {var _this = this;var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref3.field,_ref3$type = _ref3.type,type = _ref3$type === void 0 ? 'text' : _ref3$type,text = _ref3.text,_ref3$disabled = _ref3.disabled,disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,callback = _ref3.callback,size = _ref3.size,_ref3$style = _ref3.style,style = _ref3$style === void 0 ? {} : _ref3$style,_ref3$containerStyle = _ref3.containerStyle,containerStyle = _ref3$containerStyle === void 0 ? {} : _ref3$containerStyle,_ref3$placeholderStyl = _ref3.placeholderStyle,placeholderStyle = _ref3$placeholderStyl === void 0 ? {} : _ref3$placeholderStyl,className = _ref3.className,_ref3$onKeyPress = _ref3.onKeyPress,_onKeyPress = _ref3$onKeyPress === void 0 ? function () {} : _ref3$onKeyPress,_ref3$onKeyDown = _ref3.onKeyDown,_onKeyDown = _ref3$onKeyDown === void 0 ? function () {} : _ref3$onKeyDown,value = _ref3.value,outsideCallback = _ref3.outsideCallback;
        var link = this.getLink(field);
        value = value ? value : link === null ? '' : link;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {
          id: this.getPrefix() + field,
          style: style,
          containerStyle: containerStyle,
          placeholderStyle: placeholderStyle,
          type: type,
          name: field,
          size: size,
          className: className,
          disabled: this.getDisabled(disabled),
          value: value,
          onChange: function onChange(e, _ref4) {var name = _ref4.name,value = _ref4.value;
            _this.setState(function (prv) {
              _this.setValueInput(prv, field, value);

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback(value);
              }
            });
          },
          onKeyPress: function onKeyPress(e) {
            if (typeof _onKeyPress === 'function') {
              _onKeyPress(e);
            }
          },
          onKeyDown: function onKeyDown(e) {
            if (typeof _onKeyDown === 'function') {
              _onKeyDown(e);
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
      } }, { key: "renderSlimInput", value:

      function renderSlimInput()
      {var _this2 = this;var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref5.field,text = _ref5.text,_ref5$disabled = _ref5.disabled,disabled = _ref5$disabled === void 0 ? false : _ref5$disabled,callback = _ref5.callback,size = _ref5.size,_ref5$style = _ref5.style,style = _ref5$style === void 0 ? {} : _ref5$style,_ref5$containerStyle = _ref5.containerStyle,containerStyle = _ref5$containerStyle === void 0 ? {} : _ref5$containerStyle,_ref5$placeholderStyl = _ref5.placeholderStyle,placeholderStyle = _ref5$placeholderStyl === void 0 ? {} : _ref5$placeholderStyl,className = _ref5.className,_ref5$onKeyPress = _ref5.onKeyPress,_onKeyPress2 = _ref5$onKeyPress === void 0 ? function () {} : _ref5$onKeyPress,_ref5$onKeyDown = _ref5.onKeyDown,_onKeyDown2 = _ref5$onKeyDown === void 0 ? function () {} : _ref5$onKeyDown,outsideCallback = _ref5.outsideCallback;
        var link = this.getLink(field);
        var value = link === null ? '' : link;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SlimInput["default"], {
          id: this.getPrefix() + field,
          style: style,
          containerStyle: containerStyle,
          placeholderStyle: placeholderStyle,
          type: "text",
          name: field,
          className: className,
          size: size,
          disabled: this.getDisabled(disabled),
          value: value,
          onChange: function onChange(e, _ref6) {var name = _ref6.name,value = _ref6.value;
            _this2.setState(function (prv) {
              _this2.setValueInput(prv, field, value);

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback(value);
              }
            });
          },
          onKeyPress: function onKeyPress(e) {
            if (typeof _onKeyPress2 === 'function') {
              _onKeyPress2(e);
            }
          },
          onKeyDown: function onKeyDown(e) {
            if (typeof _onKeyDown2 === 'function') {
              _onKeyDown2(e);
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
      } }, { key: "renderMaskedInput", value:

      function renderMaskedInput()
      {var _this3 = this;var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref7.field,text = _ref7.text,mask = _ref7.mask,inputMask = _ref7.inputMask,_ref7$disabled = _ref7.disabled,disabled = _ref7$disabled === void 0 ? false : _ref7$disabled,_ref7$autoComplete = _ref7.autoComplete,autoComplete = _ref7$autoComplete === void 0 ? 'off' : _ref7$autoComplete,callback = _ref7.callback,className = _ref7.className,_ref7$onKeyPress = _ref7.onKeyPress,_onKeyPress3 = _ref7$onKeyPress === void 0 ? function () {} : _ref7$onKeyPress,_ref7$onKeyDown = _ref7.onKeyDown,_onKeyDown3 = _ref7$onKeyDown === void 0 ? function () {} : _ref7$onKeyDown,_ref7$style = _ref7.style,style = _ref7$style === void 0 ? {} : _ref7$style,_ref7$containerStyle = _ref7.containerStyle,containerStyle = _ref7$containerStyle === void 0 ? {} : _ref7$containerStyle;
        var link = this.getLink(field);
        var value = link === null ? '' : link;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MaskedInput["default"], {
          id: this.getPrefix() + field,
          type: "text",
          name: field,
          mask: mask,
          inputMask: inputMask,
          style: style,
          containerStyle: containerStyle,
          className: className,
          autoComplete: autoComplete,
          disabled: this.getDisabled(disabled),
          value: value,
          onChange: function onChange(e, _ref8) {var name = _ref8.name,value = _ref8.value;
            _this3.setState(function (prv) {
              _this3.setValueInput(prv, field, value);

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback(value);
              }
            });
          },
          onKeyPress: function onKeyPress(e) {
            if (typeof _onKeyPress3 === 'function') {
              _onKeyPress3(e);
            }
          },
          onKeyDown: function onKeyDown(e) {
            if (typeof _onKeyDown3 === 'function') {
              _onKeyDown3(e);
            }
          },
          onBlur: function onBlur() {
            _this3.setState(function (prv) {
              _this3.clearFormError(prv, field);

              return prv;
            });
          },
          onOutsideClick: function onOutsideClick() {},
          placeholder: text,
          errors: this.state.formErrors }
        );
      } }, { key: "renderInputNumber", value:

      function renderInputNumber()
      {var _this4 = this;var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref9.field,text = _ref9.text,_ref9$decimals = _ref9.decimals,decimals = _ref9$decimals === void 0 ? false : _ref9$decimals,_ref9$disabled = _ref9.disabled,disabled = _ref9$disabled === void 0 ? false : _ref9$disabled,callback = _ref9.callback,className = _ref9.className,size = _ref9.size,_ref9$style = _ref9.style,style = _ref9$style === void 0 ? {} : _ref9$style,_ref9$containerStyle = _ref9.containerStyle,containerStyle = _ref9$containerStyle === void 0 ? {} : _ref9$containerStyle,_ref9$placeholderStyl = _ref9.placeholderStyle,placeholderStyle = _ref9$placeholderStyl === void 0 ? {} : _ref9$placeholderStyl,_ref9$max = _ref9.max,max = _ref9$max === void 0 ? false : _ref9$max,_ref9$min = _ref9.min,min = _ref9$min === void 0 ? false : _ref9$min,_ref9$onKeyPress = _ref9.onKeyPress,_onKeyPress4 = _ref9$onKeyPress === void 0 ? function () {} : _ref9$onKeyPress,_ref9$onKeyDown = _ref9.onKeyDown,_onKeyDown4 = _ref9$onKeyDown === void 0 ? function () {} : _ref9$onKeyDown,_ref9$icon = _ref9.icon,icon = _ref9$icon === void 0 ? false : _ref9$icon;
        var link = this.getLink(field);
        var value = link === null ? '' : link;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_NumberInput["default"], {
          id: this.getPrefix() + field,
          type: "text",
          autoComplete: 'off',
          inputmode: "numeric",
          decimals: decimals,
          name: field,
          icon: icon,
          style: style,
          className: className,
          containerStyle: containerStyle,
          placeholderStyle: placeholderStyle,
          size: size,
          max: max,
          min: min,
          disabled: this.getDisabled(disabled),
          value: value,
          onKeyPress: function onKeyPress(e) {
            if (typeof _onKeyPress4 === 'function') {
              _onKeyPress4(e);
            }
          },
          onKeyDown: function onKeyDown(e) {
            if (typeof _onKeyDown4 === 'function') {
              _onKeyDown4(e);
            }
          },
          onChange: function onChange(e, _ref0) {var name = _ref0.name,value = _ref0.value;
            _this4.setState(function (prv) {
              _this4.setValueInput(prv, field, value);

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback(value);
              }
            });
          },
          onBlur: function onBlur() {
            _this4.setState(function (prv) {
              _this4.clearFormError(prv, field);

              return prv;
            });
          },
          onOutsideClick: function onOutsideClick() {},
          placeholder: text,
          errors: this.state.formErrors }
        );
      } }, { key: "renderTextArea", value:

      function renderTextArea()
      {var _this5 = this;var _ref1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref1.field,text = _ref1.text,_ref1$rows = _ref1.rows,rows = _ref1$rows === void 0 ? 3 : _ref1$rows,_ref1$disabled = _ref1.disabled,disabled = _ref1$disabled === void 0 ? false : _ref1$disabled,className = _ref1.className,_ref1$onKeyPress = _ref1.onKeyPress,_onKeyPress5 = _ref1$onKeyPress === void 0 ? function () {} : _ref1$onKeyPress,_ref1$onKeyDown = _ref1.onKeyDown,_onKeyDown5 = _ref1$onKeyDown === void 0 ? function () {} : _ref1$onKeyDown,_ref1$style = _ref1.style,style = _ref1$style === void 0 ? {} : _ref1$style,_ref1$containerStyle = _ref1.containerStyle,containerStyle = _ref1$containerStyle === void 0 ? {} : _ref1$containerStyle,_ref1$placeholderStyl = _ref1.placeholderStyle,placeholderStyle = _ref1$placeholderStyl === void 0 ? {} : _ref1$placeholderStyl;
        var link = this.getLink(field);
        var value = link === null ? '' : link;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea["default"], {
          id: this.getPrefix() + field,
          name: field,
          className: className,
          rows: rows,
          disabled: this.getDisabled(disabled),
          value: value,
          style: style,
          containerStyle: containerStyle,
          placeholderStyle: placeholderStyle,
          onChange: function onChange(e, _ref10) {var name = _ref10.name,value = _ref10.value;
            _this5.setState(function (prv) {
              _this5.setValueInput(prv, field, value);

              return prv;
            });
          },
          onKeyPress: function onKeyPress(e) {
            if (typeof _onKeyPress5 === 'function') {
              _onKeyPress5(e);
            }
          },
          onKeyDown: function onKeyDown(e) {
            if (typeof _onKeyDown5 === 'function') {
              _onKeyDown5(e);
            }
          },
          onBlur: function onBlur() {
            _this5.setState(function (prv) {
              _this5.clearFormError(prv, field);

              return prv;
            });
          },
          placeholder: text,
          errors: this.state.formErrors }
        );
      } }]);}(Base);


  return FormInput;
}
//# sourceMappingURL=formInput.js.map