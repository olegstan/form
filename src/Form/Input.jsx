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
                   ...props
               }) {

    // Деструктурируем всё нужное из хука
    const {
        setFocused,
        browser,
        getInputStyle,
        getName,
        onBlurFunc
    } = useBaseInput(props);

    // Аналог проверки «пустой ли инпут»
    const isEmpty = !(
        (typeof props.value === 'number' && props.value.toString().length > 0) ||
        (typeof props.value === 'string' && props.value.length > 0)
    );

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

    return (
        <StyledInput
            id={id}
            isEmpty={isEmpty}
            style={getInputStyle()}
            autoComplete={autoComplete || 'off'}
            disabled={disabled}
            className={className}
            type={type}
            name={getName(props.name)}
            value={props.value}
            placeholder={placeholder}
            onClick={handleClick}
            onKeyPress={onKeyPress}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={() => {
                onBlurFunc();
            }}
        />
    );

}

export default Input;
