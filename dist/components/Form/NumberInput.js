"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireDefault(require("react"));
var _BaseInput = _interopRequireDefault(require("./BaseInput"));
var _newstyles = require("./newstyles");
var _Money = _interopRequireDefault(require("../Helpers/Money"));
var _detectBrowser = require("detect-browser");
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
var _containerStyle = require("./styles/containerStyle");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class NumberInput extends _BaseInput.default {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      focused: false,
      hasError: false,
      selectionStart: 0,
      selectionEnd: 0
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
  }
  setInputRef(node) {
    if (node) {
      // node.focus();
    }
    this.inputRef = node;
  }

  /**
   *
   */

  componentDidUpdate(prevProps, prevState) {
    const {
      value
    } = this.props;
    const {
      selectionStart,
      selectionEnd
    } = this.state;
    if (prevProps.value !== value && this.state.focused === true) {
      this.inputRef.selectionStart = selectionStart;
      this.inputRef.selectionEnd = selectionEnd;
    }
  }
  handleChange(e) {
    let pattern = /^[0-9\.\,\ \-]+$/;
    if (e.target.value === '' || pattern.test(e.target.value)) {
      let value = e.target.value.replace(/,/g, '.').replace(/ /g, '');
      if (this.props.max !== false && value > this.props.max) {
        return;
      }
      if (this.props.min === 0 && isNaN(value)) {
        return;
      }
      if (this.props.min !== false && value < this.props.min) {
        return;
      }
      let position = e.target.selectionStart;
      if (value.length > 0) {
        let prefix = '';
        if (value[0] === '-') {
          prefix = '-';
          value = value.replace('-', '');
        }
        let parts = value.split('.');
        if (typeof parts[1] !== 'undefined') {
          if (parts[1] !== '') {
            if (this.props.decimals !== false) {
              if (parts[1].length > this.props.decimals) {
                return;
              }
            }
            value = _Money.default.formatForInput(value, parts[1].length);
          } else {
            value = _Money.default.formatForInput(value, 0) + '.';
          }
        } else {
          value = _Money.default.formatForInput(value, 0);
        }
        let prevParts = this.props.value.toString().split('.');
        let newParts = value.split('.');
        let prevLength = prevParts[0].length;
        let newLength = newParts[0].length;
        if (newLength > prevLength) {
          if ((newLength - 1) % 4 === 0) {
            position += 1;
          }
        }
        this.props.onChange(e, {
          name: this.props.name,
          value: prefix + value
        });
        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      } else {
        this.props.onChange(e, {
          name: this.props.name,
          value: ''
        });
        this.setState({
          hasError: false,
          selectionStart: position,
          selectionEnd: position
        });
      }
    }
  }
  render() {
    const {
      name
    } = this.props;
    let error = this.getError();
    const browser = (0, _detectBrowser.detect)();
    let empty = true;
    if (typeof this.props.value === 'number' && this.props.value.toString().length > 0 || typeof this.props.value === 'string' && this.props.value.length > 0) {
      empty = false;
    }
    return /*#__PURE__*/_react.default.createElement(_containerStyle.Container, {
      style: this.getContainerStyle(),
      size: this.props.size,
      disabled: this.props.disabled,
      onClick: e => {
        e.stopPropagation();
      }
    }, /*#__PURE__*/_react.default.createElement(_newstyles.InputContainer, {
      ref: this.setWrapperRef
    }, /*#__PURE__*/_react.default.createElement(_newstyles.StyledInput, {
      browser: browser && browser.name,
      ref: this.setInputRef,
      id: this.props.id,
      size: this.props.size,
      autoComplete: 'off',
      disabled: this.props.disabled,
      style: this.getInputStyle(),
      className: this.props.className,
      type: this.props.type,
      name: this.getName(name),
      value: this.props.value,
      placeholder: this.props.placeholder,
      onKeyPress: e => {
        if (typeof this.props.onKeyPress === 'function') {
          this.props.onKeyPress(e);
        }
      },
      onChange: e => {
        this.handleChange(e);
      },
      onFocus: () => {
        this.setState({
          focused: true,
          hasError: false
        });
      },
      onBlur: () => {}
    }), this.props.placeholder ? /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      style: this.props.placeholderStyle,
      className: this.getPlaceholderClassName()
    }, this.props.placeholder) : '', !empty && typeof this.props.size === 'undefined' && !this.props.disabled && this.props.icon !== false && /*#__PURE__*/_react.default.createElement("img", {
      className: "close",
      src: require('./../assets/ic_close_only.svg').default,
      onClick: e => {
        this.props.onChange(e, {
          name: this.props.name,
          value: ''
        });
        this.setState({
          hasError: false
        });
      },
      alt: ""
    }), this.state.hasError ? /*#__PURE__*/_react.default.createElement(_InputPopup.default, {
      trigger: /*#__PURE__*/_react.default.createElement("img", {
        id: 'tooltip-' + this.props.id,
        className: "",
        src: require('./../assets/error.svg').default,
        alt: "",
        onClick: () => {}
      })
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: this.props.id,
      className: "error"
    }, error)) : ''));
  }
}
exports.default = NumberInput;
_defineProperty(NumberInput, "defaultProps", {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  style: {}
});