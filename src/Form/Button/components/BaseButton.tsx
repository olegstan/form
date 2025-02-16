import React from 'react';

interface BaseButtonProps {
    Component: React.ElementType; // Тип компонента (например, 'button', 'a', или кастомный компонент)
    loading?: boolean; // Статус загрузки
    disabled?: boolean; // Статус отключения
    className?: string; // Дополнительные классы
    children: React.ReactNode; // Содержимое кнопки
    onClick?: () => void; // Обработчик клика
    [key: string]: any; // Любые дополнительные пропсы
}

const BaseButton: React.FC<BaseButtonProps> = ({
                                                   Component,
                                                   loading,
                                                   disabled,
                                                   className,
                                                   children,
                                                   ...rest
                                               }) => {

    // Формируем список классов
    const classNames = [className];
    if (disabled) {
        classNames.push('disabled'); // Добавляем класс "disabled"
    }

    return (
        <Component
            {...rest}
            onClick={disabled || loading ? () => {} : rest?.onClick}
            disabled={disabled || loading}
            className={classNames.join(' ')} // Применяем классы
        >
            {loading ? (
                <span className="spinner"/> // Можно заменить на SVG-спиннер
            ) : (
                children
            )}
        </Component>
    );
};

export default BaseButton;