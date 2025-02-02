// NumberInput.js
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Money} from 'finhelper';

import useBaseInput from './hooks/useBaseInput'; // ВАЖНО: ваш кастомный хук
import {StyledInput} from './newstyles';

function NumberInput({
                         onKeyPress = () => {},
                         onChange = () => {},
                         onClick = () => {},
                         disabled = false,
                         className = '',
                         type = 'number',
                         style = {},
                         id,
                         name,
                         value,
                         autoComplete = 'off',
                         error,
                         max = false,
                         min = false,
                         decimals = false,
                     }) {

    // Локальный стейт для положения курсора
    const [selectionStart, setSelectionStart] = useState(0);
    const [selectionEnd, setSelectionEnd] = useState(0);

    const inputRef = useRef(null);

    // Аналог componentDidUpdate(prevProps) для значения
    // Если props.value меняется и у нас есть фокус, возвращаем курсор
    useEffect(() => {
        if (focused && inputRef.current) {
            inputRef.current.selectionStart = selectionStart;
            inputRef.current.selectionEnd = selectionEnd;
        }
    }, [value, focused, selectionStart, selectionEnd]);

    // handleChange — портируем вашу логику
    const handleChange = useCallback(
        (e) => {
            const pattern = /^[0-9.\-\,\ ]+$/; // разрешаем цифры, точку, запятую, пробел, минус

            if (e.target.value === '' || pattern.test(e.target.value)) {
                let val = e.target.value.replace(/,/g, '.').replace(/ /g, '');

                // Проверки на min/max
                if (max !== false && +val > max) {
                    return;
                }
                if (min === 0 && isNaN(val)) {
                    return;
                }
                if (min !== false && +val < min) {
                    return;
                }

                // Позиция курсора
                let position = e.target.selectionStart;

                if (val.length > 0) {
                    let prefix = '';
                    if (val[0] === '-') {
                        prefix = '-';
                        val = val.replace('-', '');
                    }

                    const parts = val.split('.');
                    if (parts[1] !== undefined) {
                        // Если есть дробная часть
                        if (parts[1] !== '') {
                            if (decimals !== false) {
                                // Не даём вводить дробную часть длиннее decimals
                                if (parts[1].length > decimals) {
                                    return;
                                }
                            }
                            val = Money.formatForInput(val, parts[1].length);
                        } else {
                            // Если точка есть, но дробная часть пустая
                            val = Money.formatForInput(val, 0) + '.';
                        }
                    } else {
                        // Нет дробной части
                        val = Money.formatForInput(val, 0);
                    }

                    // Логика с изменением длины целой части => сдвиг курсора
                    const prevParts = value?.toString().split('.') || [''];
                    const newParts = val.split('.');
                    const prevLength = prevParts[0].length;
                    const newLength = newParts[0].length;

                    if (newLength > prevLength) {
                        // Каждые 3 цифры + пробел? => возможно надо сдвинуть курсор
                        if ((newLength - 1) % 4 === 0) {
                            position += 1;
                        }
                    }

                    // Вызываем onChange, пробрасывая prefix
                    onChange(e, {
                        name: name,
                        value: prefix + val
                    });

                    setSelectionStart(position);
                    setSelectionEnd(position);
                } else {
                    // Если val пустое
                    onChange(e, {
                        name: name,
                        value: ''
                    });
                    setSelectionStart(position);
                    setSelectionEnd(position);
                }
            }
        },
        [props]
    );

    const {
        focused,
        handleClick,
        handleFocus,
        handleBlur,
        getName,
    } = useBaseInput({
        name,
        onClick,
        onChange,
    });

    return (<StyledInput
        ref={inputRef}
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
    />);
}

export default NumberInput;
