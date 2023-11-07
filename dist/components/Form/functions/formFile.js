"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formFile;
var _react = _interopRequireDefault(require("react"));
var _File = _interopRequireDefault(require("../File"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function formFile(Base) {
  class FormFile extends Base {
    renderFileInput() {
      let {
        field,
        text,
        disabled = false,
        callback,
        size,
        style,
        className,
        onKeyPress = () => {},
        onKeyDown = () => {}
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let link = this.getLink(field);
      let value = link === null ? '' : link;
      return /*#__PURE__*/_react.default.createElement(_File.default, {
        id: this.getPrefix() + field,
        style: style,
        type: "text",
        name: field,
        size: size,
        className: className,
        disabled: this.getDisabled(disabled),
        value: value,
        onChange: (e, _ref) => {
          let {
            name,
            value
          } = _ref;
          this.setState(prv => {
            this.setValueInput(prv, field, value);
            return prv;
          }, () => {
            if (typeof callback === 'function') {
              callback(value);
            }
          });
        },
        onOutsideClick: () => {},
        placeholder: text,
        errors: this.state.formErrors
      });
    }
  }
  return FormFile;
}