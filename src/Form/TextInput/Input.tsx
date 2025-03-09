// Input.js
import React from 'react';
//@ts-ignore
import useBaseInput from '../hooks/useBaseInput';
//@ts-ignore
import {StyledInput} from '../styles';
import InputProps from "../types/InputProps";
import useInputClassNames from "../hooks/useInputClassNames";

/**
 * @param {Object} props - Компонент Input Props
 * @param {boolean} [props.focused=false] - Флаг фокуса
 * @param {function} [props.setFocused=() => {}] - Функция для установки фокуса
 * @param {function} [props.onKeyPress=() => {}] - Обработчик нажатия клавиш
 * @param {function} [props.onChange=() => {}] - Обработчик изменения значения
 * @param {function} [props.onClick=() => {}] - Обработчик клика
 * @param {boolean} [props.disabled=false] - Отключение инпута
 * @param {string} [props.className=''] - Дополнительный класс
 * @param {string} [props.type='text'] - Тип инпута
 * @param {object} [props.style={}] - Стили
 * @param {string} [props.id] - ID элемента
 * @param {string} [props.name] - Имя инпута
 * @param {string|number} [props.value] - Значение инпута
 * @param {string} [props.autoComplete='off'] - Автозаполнение
 * @param {Array.<string>} [props.error] - Ошибка (массив с флагом и сообщением)
 */
const Input: React.FC<InputProps> = ({
                                        focused = false,
                                        setFocused = () => {},
                                        onKeyPress = () => {},
                                        onBlur = () => {},
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
                                    }: {
    focused?: boolean;
    setFocused?: Function;
    onKeyPress?: Function;
    onBlur?: Function;
    onChange?: Function;
    onClick?: Function;
    disabled?: boolean;
    className?: string;
    type?: string;
    style?: object;
    id?: string;
    name?: string;
    value?: string | number;
    autoComplete?: string;
    error?: string[];
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
            value={value || ''}
            onClick={handleClick}
            onKeyPress={onKeyPress}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
    );
}

Input.displayName = 'Input';

export default Input;
