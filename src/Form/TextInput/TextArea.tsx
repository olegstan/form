// TextArea.js
import React, {useEffect, useRef} from 'react';
//@ts-ignore
import useBaseInput from '../hooks/useBaseInput';
//@ts-ignore
import {StyledTextArea} from '../styles';
import TextAreaProps from "../types/TextAreaProps";
import useInputClassNames from "../hooks/useInputClassNames";

/**
 *
 * @param focused
 * @param setFocused
 * @param onKeyDown
 * @param onBlur
 * @param onChange
 * @param onClick
 * @param disabled
 * @param className
 * @param style
 * @param id
 * @param name
 * @param value
 * @param error
 * @param rows
 * @param autoResize
 * @param disableResize
 * @constructor
 */
const TextArea: React.FC<TextAreaProps> = ({
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
                                               error,
                                               rows = 3,
                                               autoResize = true,
                                               disableResize = false,
                                           }) => {
    const textAreaRef = useRef<HTMLTextAreaElement|null>(null);

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

    // Функция для корректировки высоты textarea
    const adjustHeight = () => {
        if (!autoResize) return;
        const textArea = textAreaRef.current;
        if (textArea) {
            // Сбрасываем высоту, чтобы правильно вычислить scrollHeight
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    };

    // Оборачиваем handleChange, чтобы после изменения значения корректировать высоту
    const handleInternalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleChange(e);
        adjustHeight();
    };

    // Корректируем высоту при изменении value или параметра autoResize
    useEffect(() => {
        adjustHeight();
    }, [value, autoResize]);

    const inputClassName = useInputClassNames(className, focused, error, disabled);

    // Объединяем стиль из пропсов с условием отключения ресайза
    const mergedStyle: React.CSSProperties = {
        ...style,
        ...(disableResize ? { resize: 'none' } : {}),
    };

    return (
        <StyledTextArea
            ref={textAreaRef}
            id={id}
            style={mergedStyle}
            disabled={disabled}
            className={inputClassName}
            name={getName(name)}
            onClick={handleClick}
            onKeyDown={onKeyDown}
            onChange={handleInternalChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            rows={rows}
            value={value === undefined || value === null ? '' : String(value)}
        />
    );
};

TextArea.displayName = 'TextArea';

export default TextArea;
