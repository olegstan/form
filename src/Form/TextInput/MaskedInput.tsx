import React from 'react';
//@ts-ignore
import useBaseInput from '../hooks/useBaseInput';
//@ts-ignore
import {MaskedStyledInput} from '../styles';
import MaskedInputProps from "../types/MaskedInputProps";
import useInputClassNames from "../hooks/useInputClassNames";

/**
 *
 * @param focused
 * @param setFocused
 * @param onBlur
 * @param onKeyPress
 * @param onChange
 * @param onClick
 * @param disabled
 * @param className
 * @param type
 * @param style
 * @param id
 * @param name
 * @param value
 * @param autoComplete
 * @param error
 * @param mask
 * @constructor
 */
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
        disabled,
        name,
        onClick,
        onChange,
        setFocused,
        onBlur
    });

    const inputClassName = useInputClassNames(className, focused, error, disabled);;

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

MaskedInput.displayName = 'MaskedInput';

export default MaskedInput;
