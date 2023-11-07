"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formCheckbox;
var _react = _interopRequireDefault(require("react"));
var _Checkbox = _interopRequireDefault(require("../Checkbox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function formCheckbox(Base) {
  class FormCheckbox extends Base {
    renderCheckbox() {
      let {
        text,
        checked,
        toggleCallback,
        id = null,
        style = {},
        textStyle = {},
        form
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
        id: id,
        text: text,
        style: style,
        form: form,
        textStyle: textStyle,
        checked: checked,
        toggleCallback: toggleCallback
      });
    }
  }
  return FormCheckbox;
}