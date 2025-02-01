// Input.js
import React from 'react';
import useBaseInput from './hooks/useBaseInput';
import errorSvg from './../assets/error.svg';
import {InputContainer, StyledInput} from './newstyles';
import Close from './../assets/ic_close_only.svg';

function Input({
                   onKeyPress = () => {},
                   onChange = () => {},
                   disabled = false,
                   placeholder = '',
                   placeholderStyle  = {},
                   icon = '',
                   className = '',
                   wrapperClassName = '',
                   type = 'text',
                   style = {},
                   id,
                   size,
                   autoComplete,
                   ...props
               }) {

    // Деструктурируем всё нужное из хука
    const {
        wrapperRef,
        focused,
        hasError,
        error,
        setFocused,
        setHasError,
        browser,
        handleShowSelect,
        getPlaceholderClassName,
        getInputStyle,
        getName,
        getError,
        onBlurFunc
        // если нужен search, тоже можно взять:
        // search, setSearch,
    } = useBaseInput(props);

    // Аналог проверки «пустой ли инпут»
    const empty = !(
        (typeof props.value === 'number' && props.value.toString().length > 0) ||
        (typeof props.value === 'string' && props.value.length > 0)
    );

    // Рендер плейсхолдера (аналог renderPlaceholder)
    const renderPlaceholder = () => {
        if (!placeholder) return null;

        return (
            <label
                htmlFor={id}
                style={placeholderStyle}
                className={getPlaceholderClassName()}
                onClick={() => handleShowSelect(true)}
            >
                {placeholder}
            </label>
        );
    };

    // Рендер подсказки-ошибки (аналог renderTooltipError)
    const renderTooltipError = () => {
        return hasError ? (
            <InputPopup
                trigger={
                    <img
                        id={'tooltip-' + id}
                        className=""
                        src={errorSvg}
                        alt=""
                    />
                }
            >
                <label htmlFor={id} className={className + ' error'}>
                    {getError()}
                </label>
            </InputPopup>
        ) : null;
    };

    // Собираем сам <input> (аналог renderInput)
    const renderInput = () => {
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
            setHasError(false); // сбрасываем ошибку при вводе
        };

        const handleFocus = () => {
            setFocused(true);
            setHasError(false);
        };

        return (
            <StyledInput
                browser={browser && browser.name}
                id={id}
                style={getInputStyle()}
                size={size}
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
                    // Логика onBlur — вызов того, что было раньше:
                    onBlurFunc();
                    // Если нужно вернуть фокус в false по блюру:
                    // setFocused(false);
                }}
            />
        );
    };

    return (renderInput());
}

export default Input;
