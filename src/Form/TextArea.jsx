// TextArea.js
import React from 'react';
import useBaseInput from './hooks/useBaseInput';
import {TextArea as StyledTextArea} from './newstyles';

/**
 * A functional TextArea component rewritten from a class-based component.
 */
function TextArea({
                    onKeyPress = () => {},
                    onChange = () => {},
                    onClick = () => {},
                    disabled = false,
                    placeholder = '',
                    iconClose = true,
                    className = '',
                    type = 'text',
                    style = {},
                    id,
                    name,
                    value,
                    autoComplete = 'off',
                    error,
                    rows = 3,
                     ...props
                  }) {

    const {
        focused,
        handleClick,
        handleChange,
        handleFocus,
        handleBlur,
        getName,
    } = useBaseInput({
        name,
        onClick,
        onChange,
    });

  return (
      <StyledTextArea
          id={id}
          style={style}
          autoComplete={autoComplete || 'off'}
          disabled={disabled}
          className={className + (focused ? ' focused' : '') + (error?.[0] ? ' error' : '')}
          type={type}
          name={getName(name)}
          value={value}
          onClick={handleClick}
          onKeyPress={onKeyPress}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
      />
  );
}

export default TextArea;