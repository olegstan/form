"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formInput;
var _react = _interopRequireDefault(require("react"));
var _SlimInput = _interopRequireDefault(require("../SlimInput"));
var _Input = _interopRequireDefault(require("../Input"));
var _MaskedInput = _interopRequireDefault(require("../MaskedInput"));
var _NumberInput = _interopRequireDefault(require("../NumberInput"));
var _TextArea = _interopRequireDefault(require("../TextArea"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function formInput(Base) {
  class FormInput extends Base {
    renderHiddenInput() {
      let {
        field,
        disabled = true,
        id
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/_react.default.createElement(_Input.default, {
        id: id ? id : this.getPrefix() + field,
        containerStyle: {
          display: 'none'
        },
        type: "text",
        name: field,
        disabled: this.getDisabled(disabled),
        value: value,
        onChange: (e, _ref) => {
          let {
            name,
            value
          } = _ref;
        },
        placeholder: '',
        errors: this.state.formErrors
      });
    }
    renderInput() {
      let {
        field,
        text,
        disabled = false,
        callback,
        size,
        style = {},
        containerStyle = {},
        placeholderStyle = {},
        className,
        onKeyPress: _onKeyPress = () => {},
        onKeyDown: _onKeyDown = () => {},
        value
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let link = this.getLink(field);
      value = value ? value : link === null ? '' : link;
      return /*#__PURE__*/_react.default.createElement(_Input.default, {
        id: this.getPrefix() + field,
        style: style,
        containerStyle: containerStyle,
        placeholderStyle: placeholderStyle,
        type: "text",
        name: field,
        size: size,
        className: className,
        disabled: this.getDisabled(disabled),
        value: value,
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
              callback(value);
            }
          });
        },
        onKeyPress: e => {
          if (typeof _onKeyPress === 'function') {
            _onKeyPress(e);
          }
        },
        onKeyDown: e => {
          if (typeof _onKeyDown === 'function') {
            _onKeyDown(e);
          }
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {},
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderSlimInput() {
      let {
        field,
        text,
        disabled = false,
        callback,
        size,
        style = {},
        containerStyle = {},
        placeholderStyle = {},
        className,
        onKeyPress: _onKeyPress2 = () => {},
        onKeyDown: _onKeyDown2 = () => {}
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/_react.default.createElement(_SlimInput.default, {
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
        onChange: (e, _ref3) => {
          let {
            name,
            value
          } = _ref3;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value);
            }
          });
        },
        onKeyPress: e => {
          if (typeof _onKeyPress2 === 'function') {
            _onKeyPress2(e);
          }
        },
        onKeyDown: e => {
          if (typeof _onKeyDown2 === 'function') {
            _onKeyDown2(e);
          }
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {},
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderMaskedInput() {
      let {
        field,
        text,
        mask,
        disabled = false,
        autoComplete = 'off',
        callback,
        className,
        onKeyPress: _onKeyPress3 = () => {},
        onKeyDown: _onKeyDown3 = () => {},
        style = {},
        containerStyle = {}
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/_react.default.createElement(_MaskedInput.default, {
        id: this.getPrefix() + field,
        type: "text",
        name: field,
        mask: mask,
        style: style,
        containerStyle: containerStyle,
        className: className,
        autoComplete: autoComplete,
        disabled: this.getDisabled(disabled),
        value: value,
        onChange: (e, _ref4) => {
          let {
            name,
            value
          } = _ref4;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value);
            }
          });
        },
        onKeyPress: e => {
          if (typeof _onKeyPress3 === 'function') {
            _onKeyPress3(e);
          }
        },
        onKeyDown: e => {
          if (typeof _onKeyDown3 === 'function') {
            _onKeyDown3(e);
          }
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {},
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderInputNumber() {
      let {
        field,
        text,
        decimals = false,
        disabled = false,
        callback,
        size,
        style = {},
        containerStyle = {},
        placeholderStyle = {},
        max = false,
        min = false,
        onKeyPress: _onKeyPress4 = () => {},
        onKeyDown: _onKeyDown4 = () => {},
        icon = false
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/_react.default.createElement(_NumberInput.default, {
        id: this.getPrefix() + field,
        type: "text",
        autoComplete: 'off',
        inputmode: "numeric",
        decimals: decimals,
        name: field,
        icon: icon,
        style: style,
        containerStyle: containerStyle,
        placeholderStyle: placeholderStyle,
        size: size,
        max: max,
        min: min,
        disabled: this.getDisabled(disabled),
        value: value,
        onKeyPress: e => {
          if (typeof _onKeyPress4 === 'function') {
            _onKeyPress4(e);
          }
        },
        onKeyDown: e => {
          if (typeof _onKeyDown4 === 'function') {
            _onKeyDown4(e);
          }
        },
        onChange: (e, _ref5) => {
          let {
            name,
            value
          } = _ref5;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value);
            }
          });
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        onOutsideClick: () => {},
        placeholder: text,
        errors: this.state.formErrors
      });
    }
    renderTextArea() {
      let {
        field,
        text,
        rows = 3,
        disabled = false,
        className,
        onKeyPress: _onKeyPress5 = () => {},
        onKeyDown: _onKeyDown5 = () => {},
        style = {},
        containerStyle = {},
        placeholderStyle = {}
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/_react.default.createElement(_TextArea.default, {
        id: this.getPrefix() + field,
        name: field,
        className: className,
        rows: rows,
        disabled: this.getDisabled(disabled),
        value: value,
        style: style,
        containerStyle: containerStyle,
        placeholderStyle: placeholderStyle,
        onChange: (e, _ref6) => {
          let {
            name,
            value
          } = _ref6;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            return prv;
          });
        },
        onKeyPress: e => {
          if (typeof _onKeyPress5 === 'function') {
            _onKeyPress5(e);
          }
        },
        onKeyDown: e => {
          if (typeof _onKeyDown5 === 'function') {
            _onKeyDown5(e);
          }
        },
        onBlur: () => {
          this.setState(prv => {
            this.clearFormError(prv, field);
            return prv;
          });
        },
        placeholder: text,
        errors: this.state.formErrors
      });
    }
  }
  return FormInput;
}