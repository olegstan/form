"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _Input = _interopRequireDefault(require("./Input"));

var _SearchMultiple = _interopRequireDefault(require("./SearchMultiple/SearchMultiple"));
var _SearchWithButton = _interopRequireDefault(require("./SearchWithButton/SearchWithButton"));

var _GroupMultipleSelect = _interopRequireDefault(require("./GroupMultipleSelect/GroupMultipleSelect"));
var _MultipleSelect = _interopRequireDefault(require("./MultipleSelect/MultipleSelect"));
var _GroupSelect = _interopRequireDefault(require("./GroupSelect/GroupSelect"));
var _RelationGroupSelect = _interopRequireDefault(require("./RelationGroupSelect/RelationGroupSelect"));
var _newstyles = require("./newstyles");
var _finhelper = require("finhelper");
var _formAccountGroupSelect = _interopRequireDefault(require("./functions/formAccountGroupSelect"));
var _formInput = _interopRequireDefault(require("./functions/formInput"));
var _formDate = _interopRequireDefault(require("./functions/formDate"));
var _getLink = _interopRequireDefault(require("./functions/getLink"));
var _formSelect = _interopRequireDefault(require("./functions/formSelect"));
var _formSearch = _interopRequireDefault(require("./functions/formSearch"));
var _formCheckbox = _interopRequireDefault(require("./functions/formCheckbox"));
var _formFile = _interopRequireDefault(require("./functions/formFile"));
var _setField = _interopRequireDefault(require("./functions/setField"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(e, r, t) {return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;}function _classCallCheck(a, n) {if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");}function _defineProperties(e, r) {for (var t = 0; t < r.length; t++) {var o = r[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);}}function _createClass(e, r, t) {return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : i + "";}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _callSuper(t, o, e) {return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));}function _possibleConstructorReturn(t, e) {if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t);}function _assertThisInitialized(e) {if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;}function _isNativeReflectConstruct() {try {var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));} catch (t) {}return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {return !!t;})();}function _getPrototypeOf(t) {return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {return t.__proto__ || Object.getPrototypeOf(t);}, _getPrototypeOf(t);}function _inherits(t, e) {if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e);}function _setPrototypeOf(t, e) {return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {return t.__proto__ = e, t;}, _setPrototypeOf(t, e);} // import InputWithCurrency from "./InputWithCurrency/InputWithCurrency";
// import SelectWithDays from "./SelectWithDays/SelectWithDays";
var Form = exports["default"] = /*#__PURE__*/function (_Multi$extend) {function Form() {_classCallCheck(this, Form);return _callSuper(this, Form, arguments);}_inherits(Form, _Multi$extend);return _createClass(Form, [{ key: "renderGroupMultipleSelect", value:

    // renderSelectWithDays(field, daysField, items, text, defaultText, disabled = false, callback) {
    //   return <SelectWithDays
    //     default={defaultText}
    //     placeholder={text}
    //     id={this.getPrefix() + field}
    //     name={field + '_id'}
    //     disabled={this.getDisabled(disabled)}
    //     selected={this.state.form[field]}
    //     handle={(item) => {
    //       this.setState((prv) => {
    //         prv.form[field] = item;
    //         prv.form[field + '_id'] = item ? item.id : '';
    //
    //         this.clearFormError(prv, field + '_id');
    //
    //         return prv;
    //       }, () => {
    //         if(typeof callback === 'function')
    //         {
    //           callback(item);
    //         }
    //       });
    //     }}
    //     items={items}
    //     daysField={daysField}
    //     daysSelected={this.state.form[daysField]}
    //     handleDaysField={(number) => {
    //       this.setState((prv) => {
    //         let i = prv.form[daysField].indexOf(number);
    //         if (i !== -1)
    //         {
    //           prv.form[daysField].splice(i, 1);
    //         } else {
    //           prv.form[daysField].push(number);
    //         }
    //         return prv;
    //       });
    //     }}
    //     errors={this.state.formErrors}
    //   />
    // }

    function renderGroupMultipleSelect(field, items, text, defaultText) {var _this = this;var disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var callback = arguments.length > 5 ? arguments[5] : undefined;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupMultipleSelect["default"], {
        "default": defaultText,
        placeholder: text,
        id: this.getPrefix() + field,
        name: field + '_ids',
        disabled: this.getDisabled(disabled),
        selected: this.state.form[field + '_ids'],
        handleAll: function handleAll(bool) {
          if (bool)
          {
            _this.setState(function (prv) {
              prv.form[field + '_ids'] = [];
              items.map(function (item) {
                item.items.map(function (subItem) {
                  prv.form[field + '_ids'].push(subItem.id);

                  return;
                });

                return;
              });

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback();
              }
            });
          } else {
            _this.setState(function (prv) {
              prv.form[field + '_ids'] = [];

              return prv;
            }, function () {
              if (typeof callback === 'function')
              {
                callback();
              }
            });
          }
        },
        handle: function handle(item) {
          _this.setState(function (prv) {
            var i = prv.form[field + '_ids'].indexOf(item.id);
            if (i !== -1) {
              prv.form[field + '_ids'].splice(i, 1);
            } else {
              prv.form[field + '_ids'].push(item.id);
            }

            return prv;
          }, function () {
            if (typeof callback === 'function')
            {
              callback();
            }
          });
        },
        items: items,
        errors: this.state.formErrors }
      );
    } }, { key: "renderMultipleSelect", value:

    function renderMultipleSelect() {var _this2 = this;var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref.field,items = _ref.items,text = _ref.text,defaultText = _ref.defaultText,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,callback = _ref.callback;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MultipleSelect["default"], {
        "default": defaultText,
        placeholder: text,
        id: this.getPrefix() + field,
        name: field + '_ids',
        disabled: this.getDisabled(disabled),
        selected: this.state.form[field + '_ids'],
        handleAll: function handleAll(bool) {
          if (bool)
          {
            _this2.setState(function (prv) {
              prv.form[field + 's'] = [];
              prv.form[field + '_ids'] = [];
              items.map(function (item) {
                prv.form[field + 's'].push(item);
                prv.form[field + '_ids'].push(item.id);

                return;
              });

              return prv;
            }, function () {




              // if(typeof callback === 'function')
              // {
              //   callback();
              // }
            });} else {_this2.setState(function (prv) {prv.form[field + 's'] = [];prv.form[field + '_ids'] = [];

                return prv;
              }, function () {




                // if(typeof callback === 'function')
                // {
                //   callback();
                // }
              });}}, handle: function handle(item) {_this2.setState(function (prv) {
            var i = prv.form[field + '_ids'].indexOf(item.id);
            if (i !== -1) {
              prv.form[field + 's'].splice(i, 1);
              prv.form[field + '_ids'].splice(i, 1);
            } else {
              prv.form[field + 's'].push(item);
              prv.form[field + '_ids'].push(item.id);
            }

            return prv;
          }, function () {
            if (typeof callback === 'function')
            {
              callback(item);
            }
          });
        },
        items: items,
        errors: this.state.formErrors }
      );
    } }, { key: "renderMultipleSelectStyle1", value:

    function renderMultipleSelectStyle1() {var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref2.field,items = _ref2.items,text = _ref2.text,defaultText = _ref2.defaultText,_ref2$disabled = _ref2.disabled,disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,callback = _ref2.callback;
      return this.renderMultipleSelect(_objectSpread(_objectSpread({}, arguments[0]), { className: 'style1' }));
    } }, { key: "renderGroupSelect", value:

    function renderGroupSelect() {var _this3 = this;var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref3.field,items = _ref3.items,text = _ref3.text,defaultText = _ref3.defaultText,_ref3$disabled = _ref3.disabled,disabled = _ref3$disabled === void 0 ? false : _ref3$disabled,callback = _ref3.callback,size = _ref3.size,style = _ref3.style;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_GroupSelect["default"], {
        "default": defaultText,
        placeholder: text,
        size: size,
        style: style,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        selected: this.getLink(field),
        handle: function handle(item) {
          _this3.setState(function (prv) {
            prv.form[field] = item;
            prv.form[field + '_id'] = item ? item.id : '';

            _this3.clearFormError(prv, field + '_id');

            return prv;
          }, function () {
            if (typeof callback === 'function')
            {
              callback(item);
            }
          });
        },
        items: items,
        errors: this.state.formErrors }
      );
    } }, { key: "renderGroupSelectStyle1", value:

    function renderGroupSelectStyle1() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref4.field,items = _ref4.items,text = _ref4.text,defaultText = _ref4.defaultText,_ref4$disabled = _ref4.disabled,disabled = _ref4$disabled === void 0 ? false : _ref4$disabled,callback = _ref4.callback,size = _ref4.size,style = _ref4.style;
      return this.renderSelect(_objectSpread(_objectSpread({}, arguments[0]), { className: 'style1' }));
    } }, { key: "renderRelationGroupSelect", value:

    function renderRelationGroupSelect(field, items, text, defaultText) {var _this4 = this;var disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var callback = arguments.length > 5 ? arguments[5] : undefined;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RelationGroupSelect["default"], {
        "default": defaultText,
        placeholder: text,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        selected: this.getLink(field),
        handle: function handle(item) {
          _this4.setState(function (prv) {
            prv.form[field] = item;
            prv.form[field + '_id'] = item ? item.id : '';

            _this4.clearFormError(prv, field + '_id');

            return prv;
          }, function () {
            if (typeof callback === 'function')
            {
              callback(item);
            }
          });
        },
        onBlur: function onBlur() {
          _this4.setState(function (prv) {
            _this4.clearFormError(prv, field);

            return prv;
          });
        },
        items: items,
        errors: this.state.formErrors }
      );
    } }, { key: "renderSearchMultiple", value:



    function renderSearchMultiple() {var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},field = _ref5.field,items = _ref5.items,text = _ref5.text,defaultText = _ref5.defaultText,_ref5$disabled = _ref5.disabled,disabled = _ref5$disabled === void 0 ? false : _ref5$disabled,_ref5$size = _ref5.size,size = _ref5$size === void 0 ? '' : _ref5$size,_ref5$allowAdd = _ref5.allowAdd,allowAdd = _ref5$allowAdd === void 0 ? false : _ref5$allowAdd,_ref5$onCreate = _ref5.onCreate,_onCreate = _ref5$onCreate === void 0 ? function (value) {} : _ref5$onCreate,_onAddElement = _ref5.onAddElement,_onRemoveElement = _ref5.onRemoveElement,_ref5$onOutsideClick = _ref5.onOutsideClick,_onOutsideClick = _ref5$onOutsideClick === void 0 ? function () {} : _ref5$onOutsideClick,id = _ref5.id,_ref5$style = _ref5.style,style = _ref5$style === void 0 ? {} : _ref5$style,_ref5$containerStyle = _ref5.containerStyle,containerStyle = _ref5$containerStyle === void 0 ? {} : _ref5$containerStyle,_ref5$controlStyle = _ref5.controlStyle,controlStyle = _ref5$controlStyle === void 0 ? {} : _ref5$controlStyle,_ref5$valueContainerS = _ref5.valueContainerStyle,valueContainerStyle = _ref5$valueContainerS === void 0 ? {} : _ref5$valueContainerS,_ref5$nativeContainer = _ref5.nativeContainerStyle,nativeContainerStyle = _ref5$nativeContainer === void 0 ? {} : _ref5$nativeContainer;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchMultiple["default"], {
        size: size,
        allowAdd: allowAdd,
        "default": defaultText,
        placeholder: text,
        id: id ? id : this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        selected: this.getLink(field),
        search: '',
        onCreate: function onCreate(value) {
          _onCreate(value);
        },
        onAddElement: function onAddElement(newValue) {
          _onAddElement(newValue);
        },
        onRemoveElement: function onRemoveElement(newValue) {
          _onRemoveElement(newValue);
        },
        onOutsideClick: function onOutsideClick() {
          _onOutsideClick();
        },
        style: style,
        containerStyle: containerStyle,
        controlStyle: controlStyle,
        nativeContainerStyle: nativeContainerStyle,
        items: items,
        errors: this.state.formErrors }
      );
    } }, { key: "renderSearchWithButton", value:

    function renderSearchWithButton(field, items, text, defaultText) {var _this5 = this;var disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var onSearch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};var callback = arguments.length > 6 ? arguments[6] : undefined;var buttonClick = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : function () {};var id = arguments.length > 8 ? arguments[8] : undefined;var style = arguments.length > 9 ? arguments[9] : undefined;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchWithButton["default"], {
        "default": defaultText,
        placeholder: text,
        id: id ? id : this.getPrefix() + field,
        name: field + '_id',
        style: style,
        disabled: this.getDisabled(disabled),
        selected: this.getLink(field),
        search: this.state.form[field + '_search'],
        onSearch: onSearch,
        handle: function handle(item, search) {
          _this5.setState(function (prv) {
            prv.form[field] = item;
            prv.form[field + '_id'] = item ? item.id : '';
            prv.form[field + '_search'] = search;

            return prv;
          }, function () {
            if (typeof callback === 'function')
            {
              callback(item);
            }
          });
        },
        onBlur: function onBlur() {
          _this5.setState(function (prv) {
            _this5.clearFormError(prv, field + '_id');

            return prv;
          });
        },
        items: items,
        errors: this.state.formErrors,
        buttonClick: buttonClick }
      );
    } }, { key: "renderSearchWithButtonStyle1", value:

    function renderSearchWithButtonStyle1(field, items, text, defaultText) {var _this6 = this;var disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;var onSearch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};var callback = arguments.length > 6 ? arguments[6] : undefined;var buttonClick = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : function () {};var id = arguments.length > 8 ? arguments[8] : undefined;var style = arguments.length > 9 ? arguments[9] : undefined;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchWithButton["default"], {
        className: 'style1',
        "default": defaultText,
        placeholder: text,
        id: id ? id : this.getPrefix() + field,
        name: field + '_id',
        style: style,
        disabled: this.getDisabled(disabled),
        selected: this.getLink(field),
        search: this.state.form[field + '_search'],
        onSearch: onSearch,
        handle: function handle(item, search) {
          _this6.setState(function (prv) {
            prv.form[field] = item;
            prv.form[field + '_id'] = item ? item.id : '';
            prv.form[field + '_search'] = search;

            return prv;
          }, function () {
            if (typeof callback === 'function')
            {
              callback(item);
            }
          });
        },
        onBlur: function onBlur() {
          _this6.setState(function (prv) {
            _this6.clearFormError(prv, field + '_id');

            return prv;
          });
        },
        items: items,
        errors: this.state.formErrors,
        buttonClick: buttonClick }
      );
    } }, { key: "renderLogs", value:

    function renderLogs()
    {var _this7 = this;
      return this.state.logs && this.state.logs.map(function (log, key) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input["default"], {

          id: 'response-log-' + log.id,
          containerStyle: {
            display: 'none'
          },
          type: "text",
          name: 'response-log',
          disabled: true,
          value: log.id,
          onChange: function onChange(e, _ref6) {var name = _ref6.name,value = _ref6.value;

          },
          placeholder: '',
          errors: _this7.state.formErrors }, log.id
        );
      });
    } }, { key: "renderEmpty", value:

    function renderEmpty(size)
    {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.EmptyContainer, {
        size: size }
      );
    }

    // renderInputWithCurrency(field, text, currencyField, disabled = false, callback)
    // {
    //   let link = this.getLink(field);
    //   let value = link === null ? '' : link;
    //
    //   return <InputWithCurrency
    //     id={this.getPrefix() + field}
    //     type="text"
    //     name={field}
    //     autoComplete={'off'}
    //     disabled={this.getDisabled(disabled)}
    //     value={value}
    //     currencyField={currencyField + '_id'}
    //     selected={this.state.form[currencyField]}
    //     onChange={(e, {name, value}) => {
    //       this.setState((prv) => {
    //         this.setValueInput(prv, field, value);
    //
    //         return prv;
    //       }, () => {
    //         if(typeof callback === 'function')
    //         {
    //           callback();
    //         }
    //       });
    //     }}
    //     onBlur={() => {
    //       this.setState((prv) => {
    //         this.clearFormError(prv, field);
    //         this.clearFormError(prv, currencyField + '_id');
    //
    //         return prv;
    //       });
    //     }}
    //     handle={(item) => {
    //       this.setState((prv) => {
    //         prv.form[currencyField] = item;
    //         prv.form[currencyField + '_id'] = item ? item.id : '';
    //
    //         this.clearFormError(prv, currencyField + '_id');
    //
    //         return prv;
    //       }, () => {
    //         if(typeof callback === 'function')
    //         {
    //           callback();
    //         }
    //       });
    //     }}
    //     placeholder={text}
    //     errors={this.state.formErrors}
    //   />
    // }
  }]);}(_finhelper.Multi.extend(_react.Component, _formInput["default"], _formSelect["default"], _formSearch["default"], _formDate["default"], _getLink["default"], _formAccountGroupSelect["default"], _formCheckbox["default"], _formFile["default"], _setField["default"]));
//# sourceMappingURL=Form.js.map