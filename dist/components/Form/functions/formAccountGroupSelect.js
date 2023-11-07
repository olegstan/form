"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formAccountGroupSelect;
require("core-js/modules/es.promise.js");
var _react = _interopRequireDefault(require("react"));
var _AccountGroupSelect = _interopRequireDefault(require("../AccountGroupSelect/AccountGroupSelect"));
var _SlimAccountGroupSelect = _interopRequireDefault(require("../AccountGroupSelect/SlimAccountGroupSelect"));
var _AccountConstants = _interopRequireDefault(require("./.././../../../../constants/AccountConstants"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function formAccountGroupSelect(Base) {
  class FormAccountGroupSelect extends Base {
    renderAccountGroupSelect() {
      let {
        field,
        items,
        text,
        defaultText,
        disabled = false,
        showDefault = false,
        callback,
        types = [1, 2, 3, 4],
        style = {},
        onCloseCreateCallback = () => {},
        textLength = 25,
        size,
        getUserAccounts = () => {},
        handleAddAccount = () => {},
        getText = account => {
          return _AccountConstants.default.getText(account);
        },
        accountAddAvailable = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const importCreate = async callback => {
        try {
          await Promise.resolve().then(() => _interopRequireWildcard(require("../../../../../pages/Accounting/Accounts/HiddenAccountCreate"))).then(module => callback(module).catch(e => {
            console.warn(e);
          }));
        } catch (e) {
          console.log(e);
        }
      };
      const importEdit = async callback => {
        try {
          await Promise.resolve().then(() => _interopRequireWildcard(require("../../../../../pages/Accounting/Accounts/HiddenAccountEdit"))).then(module => callback(module).catch(e => {
            console.warn(e);
          }));
        } catch (e) {
          console.log(e);
        }
      };
      return /*#__PURE__*/_react.default.createElement(_AccountGroupSelect.default, {
        textLength: textLength,
        types: types,
        size: size,
        accountAddAvailable: accountAddAvailable,
        getUserAccounts: getUserAccounts,
        handleAddAccount: handleAddAccount,
        loadModuleAccountCreate: importCreate,
        loadModuleAccountEdit: importEdit,
        getText: getText,
        onCloseCreateCallback: onCloseCreateCallback,
        default: defaultText,
        placeholder: text,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        selected: this.getLink(field),
        style: style,
        handle: item => {
          this.setState(prv => {
            this.setValueInput(prv, field, item);
            this.setValueInput(prv, field + '_id', item ? item.id : '');
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
    renderAccountGroupSelectStyle1() {
      let {
        field,
        items,
        text,
        defaultText,
        disabled = false,
        showDefault = false,
        callback,
        types = [1, 2, 3, 4],
        style = {},
        onCloseCreateCallback = () => {},
        textLength = 25,
        size,
        getUserAccounts = () => {},
        handleAddAccount = () => {},
        accountAddAvailable = false,
        getText = account => {
          return _AccountConstants.default.getText(account);
        }
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.renderAccountGroupSelect(_objectSpread(_objectSpread({}, arguments[0]), {
        className: 'style1'
      }));
    }
    renderAccountGroupSelectStyle1Slim() {
      let {
        field,
        items,
        text,
        defaultText,
        disabled = false,
        showDefault = false,
        callback,
        types = [1, 2, 3, 4],
        style = {},
        onCloseCreateCallback = () => {},
        textLength = 25,
        size,
        getUserAccounts = () => {},
        handleAddAccount = () => {},
        getText = account => {
          return _AccountConstants.default.getText(account);
        },
        accountAddAvailable = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      const importCreate = async callback => {
        try {
          await Promise.resolve().then(() => _interopRequireWildcard(require("../../../../../pages/Accounting/Accounts/HiddenAccountCreate"))).then(module => callback(module).catch(e => {
            console.warn(e);
          }));
        } catch (e) {
          console.log(e);
        }
      };
      const importEdit = async callback => {
        try {
          await Promise.resolve().then(() => _interopRequireWildcard(require("../../../../../pages/Accounting/Accounts/HiddenAccountEdit"))).then(module => callback(module).catch(e => {
            console.warn(e);
          }));
        } catch (e) {
          console.log(e);
        }
      };
      return /*#__PURE__*/_react.default.createElement(_SlimAccountGroupSelect.default, {
        textLength: textLength,
        types: types,
        size: size,
        accountAddAvailable: accountAddAvailable,
        getUserAccounts: getUserAccounts,
        handleAddAccount: handleAddAccount,
        loadModuleAccountCreate: importCreate,
        loadModuleAccountEdit: importEdit,
        getText: getText,
        onCloseCreateCallback: onCloseCreateCallback,
        style: style,
        className: 'style1',
        default: defaultText,
        showDefault: showDefault,
        placeholder: text,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        selected: this.getLink(field),
        handle: item => {
          this.setState(prv => {
            this.setValueInput(prv, field, item);
            this.setValueInput(prv, field + '_id', item ? item.id : '');
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
  }
  return FormAccountGroupSelect;
}