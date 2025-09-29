// Input.js
import React from 'react';
//@ts-ignore
import useBaseInput from '../hooks/useBaseInput';
import {StyledInput} from '../styles';
import InputProps from "../types/InputProps";
import useInputClassNames from "../hooks/useInputClassNames";

const Input: React.FC<InputProps> = ({
                                        focused = false,
                                        setFocused = () => {},
                                        onKeyDown = () => {},
                                        onBlur = () => {},
                                        onChange = () => {},
                                        onClick = () => {},
                                        disabled = false,
                                        className = '',
                                        type = 'text',
                                        style = {},
                                        id,
                                        icon = true,
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
        disabled,
        name,
        onClick,
        onChange,
        setFocused,
        onBlur
    });

    const inputClassName = useInputClassNames(className, focused, error, disabled);

    return (
        <StyledInput
            id={id}
            style={style}
            autoComplete={autoComplete || 'off'}
            disabled={disabled}
            className={inputClassName}
            type={type}
            name={getName(name)}
            value={value === undefined || value === null ? '' : String(value)}
            onClick={handleClick}
            onKeyDown={onKeyDown}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
}

Input.displayName = 'Input';

export default Input;
