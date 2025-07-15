// NumberInput.js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useBaseInput from '../hooks/useBaseInput';
import { StyledInput } from '../styles';
import NumberInputProps from "../types/NumberInputProps";
import useInputClassNames from "../hooks/useInputClassNames";
import { formatForInput } from "./utils/formatNumber";

const NumberInput: React.FC<NumberInputProps> = ({
                                                     focused = false,
                                                     setFocused = () => {},
                                                     onKeyDown = () => {},
                                                     onBlur = () => {},
                                                     innerError = [],//метод чтобьы показывать ошибку, если ввели неверный формат даты
                                                     setInnerError = () => {},//метод чтобьы показывать ошибку, если ввели неверный формат даты
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
    // Состояние для отслеживания позиции курсора
    const [cursorPosition, setCursorPosition] = useState<number>(0);
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

    // Восстанавливаем позицию курсора после изменения значения
    useEffect(() => {
        if (focused && inputRef.current) {
            inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
        }
    }, [value, cursorPosition, focused]);

    // Нормализация входной строки - приводим к единому формату
    const normalizeInput = useCallback((input: string): string => {
        // Заменяем запятые на точки и убираем пробелы
        return input.replace(/,/g, '.').replace(/\s/g, '');
    }, []);

    // Проверка валидности числа
    const isValidNumber = useCallback((numStr: string): boolean => {
        if (numStr === '' || numStr === '-') return true;

        const num = parseFloat(numStr);
        if (isNaN(num)) return false;

        if(max !== false && num > max)
        {
            setInnerError(['Ошибка, максимальное значение ' + max]);
        }else if(min !== false && num < min){
            setInnerError(['Ошибка, минимальное значение ' + min]);
        }else{
            setInnerError([]);
        }

        // Специальная проверка для min = 0
        if (min === 0 && isNaN(num)) return false;

        return true;
    }, [max, min]);

    // Обработка дробной части
    const handleDecimalPart = useCallback((wholePart: string, decimalPart: string): string => {
        if (decimalPart === undefined) {
            // Нет дробной части
            return formatForInput(wholePart, 0);
        }

        if (decimalPart === '') {
            // Есть точка, но дробная часть пустая
            return formatForInput(wholePart, 0) + '.';
        }

        // Проверяем ограничение на количество знаков после запятой
        if (decimals !== false && decimalPart.length > decimals) {
            //@ts-ignore
            return null; // Возвращаем null, чтобы прервать обработку
        }

        // Форматируем целую часть и добавляем дробную
        return formatForInput(wholePart, 0) + '.' + decimalPart;
    }, [decimals]);

    // Вычисление новой позиции курсора
    const calculateCursorPosition = useCallback((
        oldValue: string,
        newValue: string,
        currentPosition: number
    ): number => {
        const oldParts = oldValue.split('.');
        const newParts = newValue.split('.');

        const oldWholeLength = oldParts[0]?.length || 0;
        const newWholeLength = newParts[0]?.length || 0;

        if (newWholeLength > oldWholeLength) {
            // Добавился разделитель тысяч (каждые 3 цифры + пробел)
            if ((newWholeLength - 1) % 4 === 0) {
                return currentPosition + 1;
            }
        }

        return currentPosition;
    }, []);

    // Основная функция обработки изменений
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const currentCursorPosition = e.target.selectionStart || 0;

        // Проверяем, содержит ли ввод только допустимые символы
        const allowedPattern = /^-?[0-9.,\s]*$/;
        if (inputValue !== '' && !allowedPattern.test(inputValue)) {
            return;
        }

        // Нормализуем ввод
        const normalizedValue = normalizeInput(inputValue);

        // Обработка пустого значения
        if (normalizedValue === '') {
            onChange('');
            setCursorPosition(currentCursorPosition);
            return;
        }

        // Извлекаем знак и число
        const isNegative = normalizedValue.startsWith('-');
        const numberPart = isNegative ? normalizedValue.slice(1) : normalizedValue;

        // Проверяем валидность числа
        if (!isValidNumber(normalizedValue)) {
            return;
        }

        // Разделяем на целую и дробную части
        const parts = numberPart.split('.');
        const wholePart = parts[0] || '';
        const decimalPart = parts[1];

        // Обрабатываем дробную часть
        const formattedValue = handleDecimalPart(wholePart, decimalPart);
        if (formattedValue === null) {
            return; // Превышено количество знаков после запятой
        }

        // Формируем финальное значение
        const finalValue = (isNegative ? '-' : '') + formattedValue;

        // Вычисляем новую позицию курсора
        const newCursorPosition = calculateCursorPosition(
            value?.toString() || '',
            finalValue,
            currentCursorPosition
        );

        // Обновляем состояние
        onChange(finalValue);
        setCursorPosition(newCursorPosition);
    }, [
        normalizeInput,
        isValidNumber,
        handleDecimalPart,
        calculateCursorPosition,
        onChange,
        value
    ]);

    const inputClassName = useInputClassNames(className, focused, error, disabled, innerError);

    return (
        <StyledInput
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
        />
    );
};

NumberInput.displayName = 'NumberInput';

export default NumberInput;