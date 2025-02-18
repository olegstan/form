import React from 'react';
import LoaderGif from "../../../assets/loader_white.gif";

// Интерфейс для пропсов кнопки
interface BaseButtonProps {
    Component: React.ElementType; // Тип компонента (например, 'button', 'a', или кастомный компонент)
    loading?: boolean; // Статус загрузки
    disabled?: boolean; // Статус отключения
    className?: string; // Дополнительные классы
    children: React.ReactNode; // Содержимое кнопки
    onClick?: () => void; // Обработчик клика
    narrow?: boolean; // Узкая кнопка
    withMargin?: boolean; // Кнопка с отступами
    type?: 'main' | 'cancel' | 'block' | 'transparent'; // Тип кнопки
    [key: string]: any; // Любые дополнительные пропсы
}

const BaseButton: React.FC<BaseButtonProps> = ({
                                                   Component,
                                                   loading = false,
                                                   disabled = false,
                                                   className = '',
                                                   children,
                                                   type = 'main',
                                                   narrow = false,
                                                   withMargin = false,
                                                   onClick,
                                                   ...props
                                               }) => {
    // Формируем список классов
    const classNames = [
        className,
        disabled && 'disabled',
        narrow && 'narrow',
        withMargin && 'margin',
        type // Добавляем класс на основе типа кнопки
    ]
        .filter(Boolean) // Убираем falsy значения
        .join(' ');

    return (
        <Component
            {...props}
            onClick={disabled || loading ? undefined : onClick} // Отключаем клик при disabled или loading
            disabled={disabled}
            className={classNames.trim()} // Применяем классы
        >
            {loading ? (
                <img src={LoaderGif} alt="Loading..." />
            ) : (
                children
            )}
        </Component>
    );
};

export default BaseButton;