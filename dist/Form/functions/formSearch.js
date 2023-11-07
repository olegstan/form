"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formSearch;
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _Search = _interopRequireDefault(require("../Search/Search"));
var _GroupRemoteSearch = _interopRequireDefault(require("../GroupSearch/GroupRemoteSearch"));
var _RemoteSearch = _interopRequireDefault(require("../Search/RemoteSearch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function formSearch(Base) {
  class FormSearch extends Base {
    renderSearch() {
      let {
        field,
        items,
        text,
        defaultText,
        disabled = false,
        onSearch = () => {},
        callback,
        id,
        onClick,
        selectStyle = {},
        inputStyle = {},
        wrapperStyle = {},
        containerStyle = {},
        clearImageStyle = {},
        showClearIcon = false,
        className
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_Search.default, {
        default: defaultText,
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
        clearImageStyle: clearImageStyle,
        wrapperStyle: wrapperStyle,
        showClearIcon: showClearIcon,
        onClick: onClick,
        handle: item => {
          this.setState(prv => {
            this.setValueSearch(prv, field, item);
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
            this.clearFormError(prv, field + '_id');
            return prv;
          });
        },
        items: items,
        errors: this.state.formErrors
      });
    }
    renderSearchStyle1() {
      let {
        field,
        items,
        text,
        defaultText,
        disabled = false,
        onSearch = () => {},
        callback,
        id,
        onClick,
        selectStyle = {},
        inputStyle = {},
        wrapperStyle = {},
        containerStyle = {},
        clearImageStyle = {},
        showClearIcon = false,
        className
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.renderSearch(_objectSpread(_objectSpread({}, arguments[0]), {
        className: 'style1'
      }));
    }
    renderRemoteSearch() {
      let {
        field,
        items,
        text,
        defaultText,
        onSearch = () => {},
        callback,
        disabled = false,
        loading,
        style = {},
        containerStyle = {},
        className
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_RemoteSearch.default, {
        default: defaultText,
        placeholder: text,
        className: className,
        loading: loading,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        style: style,
        containerStyle: containerStyle,
        selected: this.getLink(field),
        search: this.getLink(field + '_search'),
        onSearch: onSearch,
        handle: (item, search) => {
          this.setState(prv => {
            this.setValueSearch(prv, field, item);
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
            this.clearFormError(prv, field + '_id');
            return prv;
          });
        },
        items: items,
        errors: this.state.formErrors
      });
    }
    renderGroupRemoteSearch() {
      let {
        field,
        items,
        text,
        defaultText,
        onSearch = () => {},
        callback = () => {},
        loading,
        disabled = false,
        style = {},
        containerStyle = {},
        size = '',
        className
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_GroupRemoteSearch.default, {
        default: defaultText,
        size: size,
        className: className,
        placeholder: text,
        loading: loading,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        style: style,
        containerStyle: containerStyle,
        selected: this.getLink(field),
        search: this.getLink(field + '_search'),
        onSearch: onSearch,
        handle: (item, search) => {
          this.setState(prv => {
            this.setValueSearch(prv, field, item);
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
            this.clearFormError(prv, field + '_id');
            return prv;
          });
        },
        items: items,
        errors: this.state.formErrors
      });
    }
    renderGroupRemoteSearchStyle1() {
      let {
        field,
        items,
        text,
        defaultText,
        onSearch = () => {},
        callback = () => {},
        loading,
        disabled = false,
        style,
        size = ''
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.renderGroupRemoteSearch(_objectSpread(_objectSpread({}, arguments[0]), {
        className: 'style1'
      }));
    }
    setValueSearch(prv, field, item) {
      let parts = field.split('.');
      if (parts.length === 1) {
        prv.form[field] = item;
        prv.form[field + '_id'] = item ? item.id : '';
        prv.form[field + '_search'] = item ? item.name : '';
      } else {
        let linkField = prv.form;
        let linkFieldId = prv.form;
        for (let i = 0; i < parts.length; i++) {
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
    setValuesBySearch(prv, search, field, customId, items) {
      prv.form[field + '_search'] = search;
      let searchItem = null;
      items.map(item => {
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
    clearFormError(prv, field) {
      if (prv.formErrors && typeof prv.formErrors[field] !== 'undefined') {
        prv.formErrors[field] = [];
      }
    }
  }
  return FormSearch;
}