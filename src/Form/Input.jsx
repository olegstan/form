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

    // Деструктурируем всё нужное из хука
    const {
        focused,
        setFocused,
        getName,
    } = useBaseInput(props);

    const handleClick = (e) => {
        e.stopPropagation();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };

    const handleChange = (e) => {
        onChange(e, {
            name: name,
            value: e.target.value
        });
    };

    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
        <StyledInput
            id={id}
            style={style}
            autoComplete={autoComplete || 'off'}
            disabled={disabled}
            className={className + (focused ? ' focused' : '') + (error ? ' error' : '')}
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
