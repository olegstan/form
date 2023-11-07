"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formSelect;
require("core-js/modules/es.parse-int.js");
var _react = _interopRequireDefault(require("react"));
var _Select = _interopRequireDefault(require("../Select/Select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function formSelect(Base) {
  class FormSelect extends Base {
    getValueSelect(prv, field) {
      let parts = field.split('.');
      if (parts.length === 1) {
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
      }
    }
    setValueSelect(prv, field, item) {
      let parts = field.split('.');
      if (parts.length === 1) {
        prv.form[field] = item;
        prv.form[field + '_id'] = item ? item.id : '';
      } else {
        let linkField = prv.form;
        let linkFieldId = prv.form;
        for (let i = 0; i < parts.length; i++) {
          if (i + 1 === parts.length) {
            linkField[parts[i]] = item;
            linkFieldId[parts[i] + '_id'] = item ? item.id : '';
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
    clearFormError(prv, field) {
      if (prv.formErrors && typeof prv.formErrors[field] !== 'undefined') {
        prv.formErrors[field] = [];
      }
    }
    renderSelect() {
      let {
        selected,
        field,
        items,
        text,
        defaultText,
        disabled = false,
        callback,
        size,
        textLength = 25,
        className,
        style = {},
        containerStyle = {}
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_Select.default, {
        textLength: textLength,
        default: defaultText,
        placeholder: text,
        style: style,
        containerStyle: containerStyle,
        size: size,
        className: className,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        selected: selected ? selected : this.getLink(field),
        handle: item => {
          let prevValue = this.getValueSelect(this.state, field);
          this.setState(prv => {
            this.setValueSelect(prv, field, item);
            this.clearFormError(prv, field + '_id');
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(item, prevValue);
            }
          });
        },
        items: items,
        errors: this.state.formErrors
      });
    }
    renderSlimSelect() {
      let {
        selected,
        field,
        items,
        text,
        defaultText,
        disabled = false,
        callback,
        size,
        textLength = 25,
        className,
        style = {},
        containerStyle = {}
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_Select.default, {
        textLength: textLength,
        default: defaultText,
        placeholder: text,
        style: style,
        size: size,
        className: className,
        id: this.getPrefix() + field,
        name: field + '_id',
        disabled: this.getDisabled(disabled),
        selected: selected ? selected : this.getLink(field),
        handle: item => {
          let prevValue = this.getValueSelect(this.state, field);
          this.setState(prv => {
            this.setValueSelect(prv, field, item);
            this.clearFormError(prv, field + '_id');
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(item, prevValue);
            }
          });
        },
        items: items,
        errors: this.state.formErrors
      });
    }
    renderSelectStyle1() {
      let {
        selected,
        field,
        items,
        text,
        defaultText,
        disabled = false,
        callback,
        size,
        textLength = 25,
        className,
        style = {},
        containerStyle = {}
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.renderSelect(_objectSpread(_objectSpread({}, arguments[0]), {
        className: 'style1'
      }));
    }
  }
  return FormSelect;
}