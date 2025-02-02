import React from 'react';
import useBaseInput from './hooks/useBaseInput'; // <-- наш кастомный хук
import {MaskedStyledInput} from './newstyles';
import MaskedInputProps from "./types/MaskedInputProps";

const MaskedInput: React.FC<MaskedInputProps> = ({
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
                         error,
                         mask,
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
