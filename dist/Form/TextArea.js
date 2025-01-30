// TextArea.js
import React from 'react';
import useBaseInput from './hooks/useBaseInput';
import InputPopup from './../Form/InputPopup/InputPopup';
import errorSvg from './../assets/error.svg';
import { ContainerTextArea, TextArea as StyledTextArea, WrapperTextArea } from './newstyles';

/**
 * A functional TextArea component rewritten from a class-based component.
 */
function TextArea(props) {
  const {
    // Extract everything needed from the custom hook
    wrapperRef,
    focused,
    hasError,
    error,
    setFocused,
    setHasError,
    browser,
    handleShowSelect,
    getPlaceholderClassName,
    getContainerStyle,
    getInputStyle,
    getName,
    getError,
    onBlurFunc
  } = useBaseInput(props);
  const {
    id,
    rows,
    disabled,
    className,
    name,
    value,
    placeholder,
    onKeyPress,
    onChange,
    onClick
  } = props;

  // Check if the TextArea is "empty"
  const empty = !(typeof value === 'number' && value.toString().length > 0 || typeof value === 'string' && value.length > 0);

  // Render placeholder label
  const renderPlaceholder = () => {
    if (!placeholder) return null;
    return /*#__PURE__*/React.createElement("label", {
      htmlFor: id,
      className: getPlaceholderClassName(),
      onClick: () => handleShowSelect(true)
    }, placeholder);
  };

  // Render error tooltip
  const renderTooltipError = () => {
    return hasError ? /*#__PURE__*/React.createElement(InputPopup, {
      trigger: /*#__PURE__*/React.createElement("img", {
        id: 'tooltip-' + id,
        src: errorSvg,
        alt: ""
      })
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: id,
      className: `${className} error`
    }, getError())) : null;
  };

  // Render the actual <textarea> element
  const renderTextArea = () => {
    const handleClick = e => {
      e.stopPropagation();
      if (typeof onClick === 'function') {
        onClick(e);
      }
    };
    const handleChange = e => {
      onChange(e, {
        name,
        value: e.target.value
      });
      setHasError(false); // reset error state on change
    };
    const handleFocus = () => {
      setFocused(true);
      setHasError(false);
    };
    const handleBlur = () => {
      onBlurFunc();
      // If you also want to remove focus on blur, uncomment:
      // setFocused(false);
    };
    return /*#__PURE__*/React.createElement(StyledTextArea, {
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
  return /*#__PURE__*/React.createElement(ContainerTextArea, {
    style: getContainerStyle(),
    className: `${className}${disabled ? ' disabled' : ''}`,
    onClick: e => e.stopPropagation() // Prevent clicks from bubbling up
  }, /*#__PURE__*/React.createElement(WrapperTextArea, {
    ref: wrapperRef
  }, renderTextArea(), renderPlaceholder(), renderTooltipError()));
}

// Provide default props, as in the original component
TextArea.defaultProps = {
  onKeyPress: () => {},
  onChange: () => {},
  disabled: false,
  value: '',
  placeholder: '',
  icon: '',
  className: '',
  wrapperClassName: '',
  error: '',
  rows: 3
};
export default TextArea;