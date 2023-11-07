"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formDate;
var _react = _interopRequireDefault(require("react"));
var _Date = _interopRequireDefault(require("../Date"));
var _DateTime = _interopRequireDefault(require("../DateTime"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function formDate(Base) {
  class FormDate extends Base {
    renderDateInput() {
      let {
        field,
        text,
        format = 'DD.MM.YYYY',
        disabled = false,
        callback,
        size,
        className,
        style = {},
        containerStyle = {},
        placeholderStyle = {},
        icon = false,
        value,
        defaultDate
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_Date.default, {
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
        value: value ? value : this.getLink(field + '_date'),
        onChange: (e, _ref) => {
          let {
            name,
            value,
            date
          } = _ref;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            this.setValueInput(prv, field + '_date', date);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value, date);
            }
          });
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {
          this.setState(prv => {
            this.setValueInput(prv, field, '');
            this.setValueInput(prv, field + '_date', null);
            return prv;
          });
        },
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderDateTimeInput() {
      let {
        field,
        text,
        format = 'DD.MM.YYYY',
        disabled = false,
        callback,
        size,
        outsideCallback,
        className,
        style = {},
        containerStyle = {},
        placeholderStyle = {},
        icon = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_DateTime.default, {
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
        value: this.getLink(field + '_datetime'),
        onChange: (e, _ref2) => {
          let {
            name,
            value,
            date
          } = _ref2;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            this.setValueInput(prv, field + '_date', date);
            this.setValueInput(prv, field + '_datetime', date);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value, date);
            }
          });
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {
          if (typeof outsideCallback === 'function') {
            outsideCallback();
          }
        },
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderDateTimeInputWithoutIcon() {
      let {
        field,
        text,
        format = 'DD.MM.YYYY',
        disabled = false,
        callback,
        size,
        outsideCallback
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_DateTime.default, {
        id: this.getPrefix() + field,
        type: "text",
        icon: false,
        name: field,
        size: size,
        disabled: this.getDisabled(disabled),
        format: format,
        value: this.getLink(field + '_datetime'),
        onChange: (e, _ref3) => {
          let {
            name,
            value,
            date
          } = _ref3;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            this.setValueInput(prv, field + '_datetime', date);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value, date);
            }
          });
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {
          if (typeof outsideCallback === 'function') {
            outsideCallback();
          }
        },
        placeholder: text,
        errors: this.state.formErrors
      });
    }
  }
  return FormDate;
}