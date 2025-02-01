// Input.js
import React from 'react';
import useBaseInput from './hooks/useBaseInput';
import {StyledInput} from './newstyles';

function Input({
                   onKeyPress = () => {},
                   onChange = () => {},
                   disabled = false,
                   placeholder = '',
                   placeholderStyle = {},
                   icon = '',
                   className = '',
                   type = 'text',
                   style = {},
                   id,
                   autoComplete,
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
        if (typeof props.onClick === 'function') {
            props.onClick(e);
        }
    };

    const handleChange = (e) => {
        onChange(e, {
            name: props.name,
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
            name={getName(props.name)}
            value={props.value}
            onClick={handleClick}
            onKeyPress={onKeyPress}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );

}

export default Input;
