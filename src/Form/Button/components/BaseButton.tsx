import React from 'react';
// @ts-ignore
import LoaderGif from "../../../assets/loader_white.gif";
import {BaseButtonProps} from "../../types/button.types";

const BaseButton: React.FC<BaseButtonProps> = ({
                                                   Component,
                                                   loading = false,
                                                   disabled = false,
                                                   className = '',
                                                   children,
                                                   type = 'main',
                                                   narrow = false,
                                                   withMargin = false,
                                                   wide = false,
                                                   onClick,
                                                   ...props
                                               }) => {
    // Формируем список классов
    const classNames = [
        className,
        disabled && 'disabled',
        narrow && 'narrow',
        wide && 'wide',
        withMargin && 'margin',
        type
    ]
        .filter(Boolean)
        .join(' ');

    // Правильная типизация onClick в зависимости от компонента
    const handleClick = (event: React.MouseEvent<any>) => {
        if (disabled || loading) {
            event.preventDefault();
            return;
        }
        onClick?.(event);
    };

    return (
        <Component
            {...props}
            onClick={handleClick}
            disabled={Component === 'button' ? disabled : undefined}
            className={classNames.trim()}
            // Добавляем aria-disabled для accessibility
            aria-disabled={disabled || loading}
        >
            {loading ? (
                <img src={LoaderGif} alt="Загрузка..." style={{ display: 'inline-block' }} />
            ) : (
                children
            )}
        </Component>
    );
};

export default BaseButton;