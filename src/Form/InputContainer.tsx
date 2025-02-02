// Input.js
import React from 'react';
import {Container, InputContainerStyled} from './newstyles';
import InputPopup from './InputPopup/InputPopup';
// @ts-ignore
import errorSvg from './../assets/error.svg';
import Close from "../assets/ic_close_only.svg";

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

    const {placeholder, id, disabled = false, value, name, onChange, iconClose = true, inputMask} = child.props;

    const renderCloseIcon = () =>
    {
        if(!child.type) return null;

        //если передано iconClose = false то рендерить икноку для очистки не нужно
        if(!iconClose) return null;


        let notEmpty = false;
        switch (child.type.name)
        {
            case 'DateInput':
            case 'DateTimeInput':
                //там и так будет иконка календаря
                return null;
            case 'FileInput':
                return null;
            default:
                notEmpty = (
                    (typeof value === 'number' && value.toString().length > 0) ||
                    (typeof value === 'string' && value.length > 0)
                )
                break;
        }

        return notEmpty ? <img
            className="close"
            src={Close}
            onClick={(e) => {
                onChange(e, {
                    name: name,
                    value: ''
                });
            }}
            alt=""
        /> : null;
    }

    const renderPlaceholder = () => {
        if (!placeholder) return null;

        if(!child.type) return null;

        let notEmpty = false;
        switch (child.type.name)
        {
            case 'DateInput':
            case 'DateTimeInput':
                if(value instanceof Date)
                {
                    notEmpty = true;
                }

                break;
            case 'MaskedInput':
                notEmpty = true;//всегда есть внутри инпута, поэтому показывае placeholder всегда сверху
                break;
            case 'FileInput':
                notEmpty = true;//всегда есть внутри инпута, поэтому показывае placeholder всегда сверху
                break;
            default:
                notEmpty = (
                    (typeof value === 'number' && value.toString().length > 0) ||
                    (typeof value === 'string' && value.length > 0)
                )
                break;
        }

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
                {renderCloseIcon()}
            </InputContainerStyled>
        </Container>
    );
}

export default InputContainer;
