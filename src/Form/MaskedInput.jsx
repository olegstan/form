import React from 'react';
import useBaseInput from './hooks/useBaseInput'; // <-- наш кастомный хук
import {MaskedStyledInput} from './newstyles';

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

    return <MaskedStyledInput
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

        mask={mask}
    />
}

export default MaskedInput;
