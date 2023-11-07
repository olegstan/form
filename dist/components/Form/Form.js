"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _Input = _interopRequireDefault(require("./Input"));
var _InputWithCurrency = _interopRequireDefault(require("./InputWithCurrency/InputWithCurrency"));
var _SearchMultiple = _interopRequireDefault(require("./SearchMultiple/SearchMultiple"));
var _SearchWithButton = _interopRequireDefault(require("./SearchWithButton/SearchWithButton"));
var _SelectWithDays = _interopRequireDefault(require("./SelectWithDays/SelectWithDays"));
var _GroupMultipleSelect = _interopRequireDefault(require("./GroupMultipleSelect/GroupMultipleSelect"));
var _MultipleSelect = _interopRequireDefault(require("./MultipleSelect/MultipleSelect"));
var _GroupSelect = _interopRequireDefault(require("./GroupSelect/GroupSelect"));
var _RelationGroupSelect = _interopRequireDefault(require("./RelationGroupSelect/RelationGroupSelect"));
var _newstyles = require("./newstyles");
var _Multi = _interopRequireDefault(require("../Helpers/Multi"));
var _formAccountGroupSelect = _interopRequireDefault(require("./functions/formAccountGroupSelect"));
var _formInput = _interopRequireDefault(require("./functions/formInput"));
var _formDate = _interopRequireDefault(require("./functions/formDate"));
var _getLink = _interopRequireDefault(require("./functions/getLink"));
var _formSelect = _interopRequireDefault(require("./functions/formSelect"));
var _formSearch = _interopRequireDefault(require("./functions/formSearch"));
var _formCheckbox = _interopRequireDefault(require("./functions/formCheckbox"));
var _formFile = _interopRequireDefault(require("./functions/formFile"));
var _setField = _interopRequireDefault(require("./functions/setField"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Form extends _Multi.default.extend(_react.Component, _formInput.default, _formSelect.default, _formSearch.default, _formDate.default, _getLink.default, _formAccountGroupSelect.default, _formCheckbox.default, _formFile.default, _setField.default) {
  renderSelectWithDays(field, daysField, items, text, defaultText) {
    let disabled = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    let callback = arguments.length > 6 ? arguments[6] : undefined;
    return /*#__PURE__*/_react.default.createElement(_SelectWithDays.default, {
      default: defaultText,
      placeholder: text,
      id: this.getPrefix() + field,
      name: field + '_id',
      disabled: this.getDisabled(disabled),
      selected: this.state.form[field],
      handle: item => {
        this.setState(prv => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          this.clearFormError(prv, field + '_id');
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback(item);
          }
        });
      },
      items: items,
      daysField: daysField,
      daysSelected: this.state.form[daysField],
      handleDaysField: number => {
        this.setState(prv => {
          let i = prv.form[daysField].indexOf(number);
          if (i !== -1) {
            prv.form[daysField].splice(i, 1);
          } else {
            prv.form[daysField].push(number);
          }
          return prv;
        });
      },
      errors: this.state.formErrors
    });
  }
  renderGroupMultipleSelect(field, items, text, defaultText) {
    let disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let callback = arguments.length > 5 ? arguments[5] : undefined;
    return /*#__PURE__*/_react.default.createElement(_GroupMultipleSelect.default, {
      default: defaultText,
      placeholder: text,
      id: this.getPrefix() + field,
      name: field + '_ids',
      disabled: this.getDisabled(disabled),
      selected: this.state.form[field + '_ids'],
      handleAll: bool => {
        if (bool) {
          this.setState(prv => {
            prv.form[field + '_ids'] = [];
            items.map(item => {
              item.items.map(subItem => {
                prv.form[field + '_ids'].push(subItem.id);
                return;
              });
              return;
            });
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback();
            }
          });
        } else {
          this.setState(prv => {
            prv.form[field + '_ids'] = [];
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback();
            }
          });
        }
      },
      handle: item => {
        this.setState(prv => {
          let i = prv.form[field + '_ids'].indexOf(item.id);
          if (i !== -1) {
            prv.form[field + '_ids'].splice(i, 1);
          } else {
            prv.form[field + '_ids'].push(item.id);
          }
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback();
          }
        });
      },
      items: items,
      errors: this.state.formErrors
    });
  }
  renderMultipleSelect() {
    let {
      field,
      items,
      text,
      defaultText,
      disabled = false,
      callback
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return /*#__PURE__*/_react.default.createElement(_MultipleSelect.default, {
      default: defaultText,
      placeholder: text,
      id: this.getPrefix() + field,
      name: field + '_ids',
      disabled: this.getDisabled(disabled),
      selected: this.state.form[field + '_ids'],
      handleAll: bool => {
        if (bool) {
          this.setState(prv => {
            prv.form[field + 's'] = [];
            prv.form[field + '_ids'] = [];
            items.map(item => {
              prv.form[field + 's'].push(item);
              prv.form[field + '_ids'].push(item.id);
              return;
            });
            return prv;
          }, () => {
            // if(typeof callback === 'function')
            // {
            //   callback();
            // }
          });
        } else {
          this.setState(prv => {
            prv.form[field + 's'] = [];
            prv.form[field + '_ids'] = [];
            return prv;
          }, () => {
            // if(typeof callback === 'function')
            // {
            //   callback();
            // }
          });
        }
      },
      handle: item => {
        this.setState(prv => {
          let i = prv.form[field + '_ids'].indexOf(item.id);
          if (i !== -1) {
            prv.form[field + 's'].splice(i, 1);
            prv.form[field + '_ids'].splice(i, 1);
          } else {
            prv.form[field + 's'].push(item);
            prv.form[field + '_ids'].push(item.id);
          }
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback(item);
          }
        });
      },
      items: items,
      errors: this.state.formErrors
    });
  }
  renderMultipleSelectStyle1() {
    let {
      field,
      items,
      text,
      defaultText,
      disabled = false,
      callback
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return this.renderMultipleSelect(_objectSpread(_objectSpread({}, arguments[0]), {
      className: 'style1'
    }));
  }
  renderGroupSelect() {
    let {
      field,
      items,
      text,
      defaultText,
      disabled = false,
      callback,
      size,
      style
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return /*#__PURE__*/_react.default.createElement(_GroupSelect.default, {
      default: defaultText,
      placeholder: text,
      size: size,
      style: style,
      id: this.getPrefix() + field,
      name: field + '_id',
      disabled: this.getDisabled(disabled),
      selected: this.getLink(field),
      handle: item => {
        this.setState(prv => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          this.clearFormError(prv, field + '_id');
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback(item);
          }
        });
      },
      items: items,
      errors: this.state.formErrors
    });
  }
  renderGroupSelectStyle1() {
    let {
      field,
      items,
      text,
      defaultText,
      disabled = false,
      callback,
      size,
      style
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return this.renderSelect(_objectSpread(_objectSpread({}, arguments[0]), {
      className: 'style1'
    }));
  }
  renderRelationGroupSelect(field, items, text, defaultText) {
    let disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let callback = arguments.length > 5 ? arguments[5] : undefined;
    return /*#__PURE__*/_react.default.createElement(_RelationGroupSelect.default, {
      default: defaultText,
      placeholder: text,
      id: this.getPrefix() + field,
      name: field + '_id',
      disabled: this.getDisabled(disabled),
      selected: this.getLink(field),
      handle: item => {
        this.setState(prv => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          this.clearFormError(prv, field + '_id');
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback(item);
          }
        });
      },
      onBlur: () => {
        this.setState(prv => {
          this.clearFormError(prv, field);
          return prv;
        });
      },
      items: items,
      errors: this.state.formErrors
    });
  }
  renderSearchMultiple() {
    let {
      field,
      items,
      text,
      defaultText,
      disabled = false,
      size = '',
      allowAdd = false,
      onCreate: _onCreate = value => {},
      onAddElement: _onAddElement,
      onRemoveElement: _onRemoveElement,
      onOutsideClick: _onOutsideClick = () => {},
      id,
      style = {},
      containerStyle = {},
      controlStyle = {},
      valueContainerStyle = {},
      nativeContainerStyle = {}
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return /*#__PURE__*/_react.default.createElement(_SearchMultiple.default, {
      size: size,
      allowAdd: allowAdd,
      default: defaultText,
      placeholder: text,
      id: id ? id : this.getPrefix() + field,
      name: field + '_id',
      disabled: this.getDisabled(disabled),
      selected: this.getLink(field),
      search: '',
      onCreate: value => {
        _onCreate(value);
      },
      onAddElement: newValue => {
        _onAddElement(newValue);
      },
      onRemoveElement: newValue => {
        _onRemoveElement(newValue);
      },
      onOutsideClick: () => {
        _onOutsideClick();
      },
      style: style,
      containerStyle: containerStyle,
      controlStyle: controlStyle,
      nativeContainerStyle: nativeContainerStyle,
      items: items,
      errors: this.state.formErrors
    });
  }
  renderSearchWithButton(field, items, text, defaultText) {
    let disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let onSearch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : () => {};
    let callback = arguments.length > 6 ? arguments[6] : undefined;
    let buttonClick = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : () => {};
    let id = arguments.length > 8 ? arguments[8] : undefined;
    let style = arguments.length > 9 ? arguments[9] : undefined;
    return /*#__PURE__*/_react.default.createElement(_SearchWithButton.default, {
      default: defaultText,
      placeholder: text,
      id: id ? id : this.getPrefix() + field,
      name: field + '_id',
      style: style,
      disabled: this.getDisabled(disabled),
      selected: this.getLink(field),
      search: this.state.form[field + '_search'],
      onSearch: onSearch,
      handle: (item, search) => {
        this.setState(prv => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          prv.form[field + '_search'] = search;
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback(item);
          }
        });
      },
      onBlur: () => {
        this.setState(prv => {
          this.clearFormError(prv, field + '_id');
          return prv;
        });
      },
      items: items,
      errors: this.state.formErrors,
      buttonClick: buttonClick
    });
  }
  renderSearchWithButtonStyle1(field, items, text, defaultText) {
    let disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let onSearch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : () => {};
    let callback = arguments.length > 6 ? arguments[6] : undefined;
    let buttonClick = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : () => {};
    let id = arguments.length > 8 ? arguments[8] : undefined;
    let style = arguments.length > 9 ? arguments[9] : undefined;
    return /*#__PURE__*/_react.default.createElement(_SearchWithButton.default, {
      className: 'style1',
      default: defaultText,
      placeholder: text,
      id: id ? id : this.getPrefix() + field,
      name: field + '_id',
      style: style,
      disabled: this.getDisabled(disabled),
      selected: this.getLink(field),
      search: this.state.form[field + '_search'],
      onSearch: onSearch,
      handle: (item, search) => {
        this.setState(prv => {
          prv.form[field] = item;
          prv.form[field + '_id'] = item ? item.id : '';
          prv.form[field + '_search'] = search;
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback(item);
          }
        });
      },
      onBlur: () => {
        this.setState(prv => {
          this.clearFormError(prv, field + '_id');
          return prv;
        });
      },
      items: items,
      errors: this.state.formErrors,
      buttonClick: buttonClick
    });
  }
  renderLogs() {
    return this.state.logs && this.state.logs.map((log, key) => {
      return /*#__PURE__*/_react.default.createElement(_Input.default, {
        key: log.id,
        id: 'response-log-' + log.id,
        containerStyle: {
          display: 'none'
        },
        type: "text",
        name: 'response-log',
        disabled: true,
        value: log.id,
        onChange: (e, _ref) => {
          let {
            name,
            value
          } = _ref;
        },
        placeholder: '',
        errors: this.state.formErrors
      });
    });
  }
  renderEmpty(size) {
    return /*#__PURE__*/_react.default.createElement(_newstyles.EmptyContainer, {
      size: size
    });
  }
  renderInputWithCurrency(field, text, currencyField) {
    let disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    let callback = arguments.length > 4 ? arguments[4] : undefined;
    let link = this.getLink(field);
    let value = link === null ? '' : link;
    return /*#__PURE__*/_react.default.createElement(_InputWithCurrency.default, {
      id: this.getPrefix() + field,
      type: "text",
      name: field,
      autoComplete: 'off',
      disabled: this.getDisabled(disabled),
      value: value,
      currencyField: currencyField + '_id',
      selected: this.state.form[currencyField],
      onChange: (e, _ref2) => {
        let {
          name,
          value
        } = _ref2;
        this.setState(prv => {
          this.setValueInput(prv, field, value);
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback();
          }
        });
      },
      onBlur: () => {
        this.setState(prv => {
          this.clearFormError(prv, field);
          this.clearFormError(prv, currencyField + '_id');
          return prv;
        });
      },
      handle: item => {
        this.setState(prv => {
          prv.form[currencyField] = item;
          prv.form[currencyField + '_id'] = item ? item.id : '';
          this.clearFormError(prv, currencyField + '_id');
          return prv;
        }, () => {
          if (typeof callback === 'function') {
            callback();
          }
        });
      },
      placeholder: text,
      errors: this.state.formErrors
    });
  }
}
exports.default = Form;