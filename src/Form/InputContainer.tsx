// Input.js
import React from 'react';
import {Container, InputContainerStyled} from './newstyles';
import InputPopup from './InputPopup/InputPopup';
// @ts-ignore
import errorSvg from './../assets/error.svg';

function InputContainer({
                            children,
                            className = '',
                            style = {},
                            error = null
                        }: {
    children: React.ReactNode;
    className?: string;
    getContainerStyle?: React.CSSProperties;
    error?: string|null;
}) {
    // Убедимся, что children — это единственный React.Element
    const child = React.Children.only(children);

    const {placeholder, id, disabled, value, name} = child.props;

    const renderPlaceholder = () => {
        if (!placeholder) return null;

        let notEmpty = (
            (typeof value === 'number' && value.toString().length > 0) ||
            (typeof value === 'string' && value.length > 0)
        );

        //если поле не пустое, то значит placeholder должен быть сверху
        return (
            <label htmlFor={id} className={'placeholder' + (notEmpty ? ' active' : '')}>
                {placeholder}
            </label>
        );
    };

    // Рендер подсказки-ошибки (аналог renderTooltipError)
    const renderTooltipError = () => {
        // @ts-ignore
        return !!error ? (
            <InputPopup trigger={<img id={'tooltip-' + id} src={errorSvg} alt=""/>}>
                <label htmlFor={id} className={'error'}>
                    {error}
                </label>
            </InputPopup>
        ) : null;
    };

    return (
        <Container
            style={style}
            className={className + (disabled ? ' disabled' : '')}
            disabled={disabled}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <InputContainerStyled>
                {children}
                {renderPlaceholder()}
                {renderTooltipError()}
            </InputContainerStyled>
        </Container>
    );
}

export default InputContainer;
