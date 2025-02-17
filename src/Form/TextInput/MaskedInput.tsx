import React from 'react';
import useBaseInput from '../hooks/useBaseInput'; // <-- наш кастомный хук
import {MaskedStyledInput} from '../styles';
import MaskedInputProps from "../types/MaskedInputProps";

const MaskedInput: React.FC<MaskedInputProps> = ({
                         focused = false,
                         setFocused = () => {},
                         onBlur = () => {},
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
        onBlur
    });

    const inputClassName = `${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    console.log(mask)

    return <MaskedStyledInput
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
        mask={mask}
    />
}

export default MaskedInput;
