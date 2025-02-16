// Input.js
import React from 'react';
import useBaseInput from '../hooks/useBaseInput';
import {StyledInput} from '../styles';
import InputProps from "../types/InputProps";

const Input: React.FC<InputProps> = ({
                                        focused = false,
                                        setFocused = () => {},
                                        onKeyPress = () => {},
                                        onChange = () => {},
                                        onClick = () => {},
                                        disabled = false,
                                        className = '',
                                        type = 'text',
                                        style = {},
                                        id,
                                        name,
                                        value,
                                        autoComplete = 'off',
                                        error
                                    }) => {

    const {
        handleClick,
        handleChange,
        handleFocus,
        handleBlur,
        getName,
    } = useBaseInput({
        name,
        onClick,
        onChange,
        setFocused,
    });

    const inputClassName = `${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (
        <StyledInput
            id={id}
            style={style}
            autoComplete={autoComplete || 'off'}
            disabled={disabled}
            className={inputClassName}
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
