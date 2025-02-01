// Input.js
import React from 'react';
import {Container} from './newstyles';
import InputPopup from './InputPopup/InputPopup';
// @ts-ignore
import errorSvg from './../assets/error.svg';

function InputContainer({
                            children,
                            className = '',
                            style = {},
                        }: {
    children: React.ReactNode;
    className?: string;
    getContainerStyle?: React.CSSProperties;
}) {
    // Убедимся, что children — это единственный React.Element
    const child = React.Children.only(children);

    const {placeholder, id, placeholderStyle, getPlaceholderClassName, handleShowSelect, hasError, getError} = child.props;

    console.log(placeholder)

    // Рендер плейсхолдера (аналог renderPlaceholder)
    const renderPlaceholder = () => {
        if (!placeholder) return null;

        return (
            <label
                htmlFor={id}
                style={placeholderStyle}
                className={getPlaceholderClassName?.()}
                onClick={() => handleShowSelect(true)}
            >
                {placeholder}
            </label>
        );
    };

    // Рендер подсказки-ошибки (аналог renderTooltipError)
    const renderTooltipError = () => {
        // @ts-ignore
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

    return (
        <Container
            style={style}
            className={className}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            {children}
            {renderPlaceholder()}
            {renderTooltipError()}
        </Container>
    );
}

export default InputContainer;
