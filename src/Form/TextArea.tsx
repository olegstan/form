// TextArea.js
import React from 'react';
import useBaseInput from './hooks/useBaseInput';
import {StyledTextArea} from './styles';
import TextAreaProps from "./types/TextAreaProps";

const TextArea: React.FC<TextAreaProps> = ({
                    onKeyPress = () => {},
                    onChange = () => {},
                    onClick = () => {},
                    disabled = false,
                    className = '',
                    style = {},
                    id,
                    name,
                    value,
                    autoComplete = 'off',
                    error,
                    rows = 3,
                  }) => {

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