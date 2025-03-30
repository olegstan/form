// NumberInput.js
import React, {useCallback, useEffect, useRef, useState} from 'react';
//@ts-ignore
import useBaseInput from '../hooks/useBaseInput';
//@ts-ignore
import {StyledInput} from '../styles';
import NumberInputProps from "../types/NumberInputProps";
import useInputClassNames from "../hooks/useInputClassNames";
import {formatForInput} from "./utils/formatNumber";

const NumberInput: React.FC<NumberInputProps> = ({
                         focused = false,
                         setFocused = () => {},
                         onKeyDown = () => {},
                         onBlur = () => {},
                         onChange = () => {},
                         onClick = () => {},
                         disabled = false,
                         className = '',
                         style = {},
                         id,
                         name,
                         value,
                         autoComplete = 'off',
                         error,
                         max = false,
                         min = false,
                         decimals = false,
                     }) => {

    // Локальный стейт для положения курсора
    const [selectionStart, setSelectionStart] = useState(0);
    const [selectionEnd, setSelectionEnd] = useState(0);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const {
        handleClick,
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

    // Аналог componentDidUpdate(prevProps) для значения
    // Если props.value меняется и у нас есть фокус, возвращаем курсор
    useEffect(() => {
        if (focused && inputRef.current) {
            //@ts-ignore
            inputRef.current.selectionStart = selectionStart;
            //@ts-ignore
            inputRef.current.selectionEnd = selectionEnd;
        }
    }, [value, selectionStart, selectionEnd]);

    // handleChange — портируем вашу логику
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const pattern = /^-?[0-9.\-\,\ ]+$/; // разрешаем цифры, точку, запятую, пробел, минус

            //@ts-ignore
            if (e.target && e?.target?.value === '' || pattern.test(e?.target?.value)) {
                //@ts-ignore
                let val = e.target.value.replace(/,/g, '.').replace(/ /g, '');

                // Проверки на min/max
                //@ts-ignore
                if (max !== false && +val > max) {
                    return;
                }
                //@ts-ignore
                if (min === 0 && isNaN(val)) {
                    return;
                }

                //@ts-ignore
                if (min !== false && +val < min) {
                    return;
                }

                // Позиция курсора
                //@ts-ignore
                let position = e?.target?.selectionStart;

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
                            val = formatForInput(val, parts[1].length);
                        } else {
                            // Если точка есть, но дробная часть пустая
                            val = formatForInput(val, 0) + '.';
                        }
                    } else {
                        // Нет дробной части
                        val = formatForInput(val, 0);
                    }

                    // Логика с изменением длины целой части => сдвиг курсора
                    const prevParts = value?.toString().split('.') || [''];
                    const newParts = val.split('.');
                    const prevLength = prevParts[0].length;
                    const newLength = newParts[0].length;

                    if (newLength > prevLength) {
                        // Каждые 3 цифры + пробел? => возможно надо сдвинуть курсор
                        if ((newLength - 1) % 4 === 0) {
                            //@ts-ignore
                            position += 1;
                        }
                    }

                    // Вызываем onChange, пробрасывая prefix
                    onChange(prefix + val);

                    //@ts-ignore
                    setSelectionStart(position);
                    //@ts-ignore
                    setSelectionEnd(position);
                } else {
                    // Если val пустое
                    onChange('');
                    //@ts-ignore
                    setSelectionStart(position);
                    //@ts-ignore
                    setSelectionEnd(position);
                }
            }
        },
        []
    );

    const inputClassName = useInputClassNames(className, focused, error, disabled);

    return (<StyledInput
        ref={inputRef}
        id={id}
        style={style}
        autoComplete={autoComplete || 'off'}
        disabled={disabled}
        className={inputClassName}
        name={getName(name)}
        value={value === undefined || value === null ? '' : String(value)}
        onClick={handleClick}
        onKeyDown={onKeyDown}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
    />);
}

NumberInput.displayName = 'NumberInput';

export default NumberInput;
