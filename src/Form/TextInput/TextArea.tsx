// TextArea.js
import React, {useEffect, useRef} from 'react';
import useBaseInput from '../hooks/useBaseInput';
import {StyledTextArea} from '../styles';
import TextAreaProps from "../types/TextAreaProps";

const TextArea: React.FC<TextAreaProps> = ({
                                               focused = false,
                                               setFocused = () => {},
                                               onKeyPress = () => {},
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
        name,
        onClick,
        onChange,
        setFocused,
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

    const inputClassName = `${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    // Объединяем стиль из пропсов с условием отключения ресайза
    const mergedStyle = {
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
            onKeyPress={onKeyPress}
            onChange={handleInternalChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            rows={rows}>
            {value}
        </StyledTextArea>
    );
};

export default TextArea;
