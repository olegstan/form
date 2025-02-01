// TextArea.js
import React from 'react';
import useBaseInput from './hooks/useBaseInput';
import InputPopup from './InputPopup/InputPopup';
import errorSvg from './../assets/error.svg';
import {ContainerTextArea, TextArea as StyledTextArea, WrapperTextArea} from './newstyles';

/**
 * A functional TextArea component rewritten from a class-based component.
 */
function TextArea(props) {
  const {
    // Extract everything needed from the custom hook
    wrapperRef,
    focused,
    setFocused,
    browser,
    getName,
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
  const empty = !(
    (typeof value === 'number' && value.toString().length > 0) ||
    (typeof value === 'string' && value.length > 0)
  );

  // Render the actual <textarea> element
  const renderTextArea = () => {
    const handleClick = (e) => {
      e.stopPropagation();
      if (typeof onClick === 'function') {
        onClick(e);
      }
    };

    const handleChange = (e) => {
      onChange(e, {
        name,
        value: e.target.value
      });
    };

    const handleFocus = () => {
      setFocused(true);
    };


    return (
      <StyledTextArea
        id={id}
        disabled={disabled}
        className={className}
        name={getName(name)}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onClick={handleClick}
        onKeyPress={onKeyPress}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    );
  };

  return (
    <ContainerTextArea
      style={getContainerStyle()}
      className={`${className}${disabled ? ' disabled' : ''}`}
      onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling up
    >
      <WrapperTextArea ref={wrapperRef}>
        {renderTextArea()}
        {renderPlaceholder()}
        {renderTooltipError()}
      </WrapperTextArea>
    </ContainerTextArea>
  );
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