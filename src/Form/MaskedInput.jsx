import React from 'react';
import useBaseInput from './hooks/useBaseInput'; // <-- наш кастомный хук
import {InputContainer, MaskedStyledInput} from './newstyles';
import Close from './../assets/ic_close_only.svg';

function MaskedInput({
                         onKeyPress = () => {
                         },
                         onChange = () => {
                         },
                         disabled = false,
                         icon = '',
                         wrapperClassName = '',
                         ...props
                     }) {
    // 1. Достаём из useBaseInput (аналог "наследования" BaseInput)
    const {
        focused,
        setFocused,
        getName
    } = useBaseInput(props);

    // 2. Проверка, «пустое ли» поле (как empty из класса)
    const isEmpty = !(
        (typeof props.value === 'number' && props.value.toString().length > 0) ||
        (typeof props.value === 'string' && props.value.length > 0)
    );


    // 4. Функция рендера ошибки (аналог this.renderTooltipError())
    //    Если ранее была логика через InputPopup с иконкой, добавьте при необходимости
    const renderTooltipError = () => {
        if (!hasError || !error) return null;
        return (
            <label htmlFor={props.id} className={props.className + ' error'}>
                {error}
            </label>
        );
    };

    return <MaskedStyledInput
        id={props.id}
        mask={props.mask}
        autoComplete="off"
        disabled={props.disabled}
        className={props.className}
        type={props.type}
        name={getName(props.name || '')}
        value={props.value}
        onKeyPress={(e) => {
            if (typeof onKeyPress === 'function') {
                onKeyPress(e);
            }
        }}
        onChange={(e) => {
            onChange(e, {
                name: props.name,
                value: e.target.value
            });
        }}
        onFocus={() => {
            setFocused(true);
        }}
        onBlur={() => {
            setFocused(false);
        }}
    />
}

export default MaskedInput;
