"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("./Input"));
var _newstyles = require("./newstyles");
var _containerStyle = require("./styles/containerStyle");
var _detectBrowser = require("detect-browser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SlimInput extends _Input.default {
  render() {
    const {
      name
    } = this.props;
    const browser = (0, _detectBrowser.detect)();
    return /*#__PURE__*/_react.default.createElement(_containerStyle.Container, {
      style: this.getContainerStyle(),
      size: this.props.size,
      slim: true,
      className: this.props.className + (this.props.disabled ? ' disabled' : ''),
      disabled: this.props.disabled,
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, {
      ref: this.setWrapperRef,
      slim: true
    }, /*#__PURE__*/_react.default.createElement(_newstyles.StyledInput, {
      slim: true,
      browser: browser && browser.name,
      id: this.props.id,
      size: this.props.size,
      style: this.getInputStyle(),
      autoComplete: this.props.autoComplete ? this.props.autoComplete : 'off',
      disabled: this.props.disabled,
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.props.value,
      placeholder: this.props.placeholder,
      onClick: e => {
        e.stopPropagation();
        if (typeof this.props.onClick === 'function') {
          this.props.onClick(this);
        }
      },
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onChange: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: e.target.value
        });
        this.setState({
          hasError: false
        });
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onBlur: () => {}
    })));
  }
}
exports.default = SlimInput;