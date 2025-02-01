import React from 'react';
import useBaseInput from './hooks/useBaseInput'; // <-- наш кастомный хук
import {InputContainer, MaskedStyledInput, StyledInput} from './newstyles';
import Close from './../assets/ic_close_only.svg';

function MaskedInput({
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
                         mask,
                         ...props
                     }) {
    // 1. Достаём из useBaseInput (аналог "наследования" BaseInput)
    const {
        focused,
        setFocused,
        getName
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

    return <MaskedStyledInput
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

        mask={mask}
    />
}

export default MaskedInput;
