"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useBaseInput2 = _interopRequireDefault(require("./hooks/useBaseInput"));
var _InputPopup = _interopRequireDefault(require("./InputPopup/InputPopup"));
var _error = _interopRequireDefault(require("./../assets/error.svg"));
var _newstyles = require("./newstyles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// TextArea.js

/**
 * A functional TextArea component rewritten from a class-based component.
 */function TextArea(props) {
  var _useBaseInput = (0, _useBaseInput2["default"])(props),
    wrapperRef = _useBaseInput.wrapperRef,
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    browser = _useBaseInput.browser,
    handleShowSelect = _useBaseInput.handleShowSelect,
    getInputStyle = _useBaseInput.getInputStyle,
    getName = _useBaseInput.getName,
    getError = _useBaseInput.getError,
    onBlurFunc = _useBaseInput.onBlurFunc;
  var id = props.id,
    rows = props.rows,
    disabled = props.disabled,
    className = props.className,
    name = props.name,
    value = props.value,
    placeholder = props.placeholder,
    onKeyPress = props.onKeyPress,
    onChange = props.onChange,
    onClick = props.onClick;

  // Check if the TextArea is "empty"
  var empty = !(typeof value === 'number' && value.toString().length > 0 || typeof value === 'string' && value.length > 0);

  // Render the actual <textarea> element
  var renderTextArea = function renderTextArea() {
    var handleClick = function handleClick(e) {
      e.stopPropagation();
      if (typeof onClick === 'function') {
        onClick(e);
      }
    };
    var handleChange = function handleChange(e) {
      onChange(e, {
        name: name,
        value: e.target.value
      });
    };
    var handleFocus = function handleFocus() {
      setFocused(true);
    };
    var handleBlur = function handleBlur() {
      onBlurFunc();
      // If you also want to remove focus on blur, uncomment:
      // setFocused(false);
    };
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.TextArea, {
      browser: browser && browser.name,
      id: id,
      style: getInputStyle(),
      disabled: disabled,
      className: className,
      name: getName(name),
      value: value,
      rows: rows,
      placeholder: placeholder,
      onClick: handleClick,
      onKeyPress: onKeyPress,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_newstyles.ContainerTextArea, {
    style: getContainerStyle(),
    className: "".concat(className).concat(disabled ? ' disabled' : ''),
    onClick: function onClick(e) {
      return e.stopPropagation();
    } // Prevent clicks from bubbling up
    ,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_newstyles.WrapperTextArea, {
      ref: wrapperRef,
      children: [renderTextArea(), renderPlaceholder(), renderTooltipError()]
    })
  });
}

// Provide default props, as in the original component
TextArea.defaultProps = {
  onKeyPress: function onKeyPress() {},
  onChange: function onChange() {},
  disabled: false,
  value: '',
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  rows: 3
};
var _default = exports["default"] = TextArea;