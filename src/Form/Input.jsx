// Input.js
import React from 'react';
import useBaseInput from './hooks/useBaseInput';
import {StyledInput} from './newstyles';

function Input({
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
        onClick,
        onChange,
    });

    return (
        <StyledInput
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
        />
    );
}

export default Input;
