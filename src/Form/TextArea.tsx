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

    const inputClassName = `${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (
      <StyledTextArea
          id={id}
          style={style}
          autoComplete={autoComplete || 'off'}
          disabled={disabled}
          className={inputClassName}
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