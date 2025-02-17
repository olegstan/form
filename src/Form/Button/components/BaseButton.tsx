import React from 'react';
import LoaderGif from "../../../assets/loader_white.gif";

interface BaseButtonProps {
    Component: React.ElementType; // Тип компонента (например, 'button', 'a', или кастомный компонент)
    loading?: boolean; // Статус загрузки
    disabled?: boolean; // Статус отключения
    className?: string; // Дополнительные классы
    children: React.ReactNode; // Содержимое кнопки
    onClick?: () => void; // Обработчик клика
    narrow?: boolean;
    withMargin?: boolean;
    type?: string;
    [key: string]: any; // Любые дополнительные пропсы
}

const BaseButton: React.FC<BaseButtonProps> = ({
                                                   Component,
                                                   loading,
                                                   className,
                                                   children,
                                                   type,
                                                   ...props
                                               }) => {

    // Формируем список классов
    const classNames = [className];
    if ('disabled' in props) {
        classNames.push('disabled'); // Добавляем класс "disabled"
    }

    if ('wide' in props) {
        classNames.push('wide'); // Добавляем класс "disabled"
    }

    if ('narrow' in props) {
        classNames.push('narrow'); // Добавляем класс "narrow"
    }

    if ('withMargin' in props) {
        classNames.push('margin'); // Добавляем класс "narrow"
    }

    switch (type)
    {
        case 'cancel':
            classNames.push('cancel'); // Добавляем класс "narrow"
            break;
        case 'block':
            classNames.push('block'); // Добавляем класс "narrow"
            break;
        default:
            classNames.push('main');
    }

    return (
        <Component
            {...props}
            onClick={props.disabled || loading ? () => {} : props?.onClick}
            disabled={props.disabled}
            className={classNames.join(' ')} // Применяем классы
        >
            {loading ? (
                <img src={LoaderGif} alt=''/>
            ) : (
                children
            )}
        </Component>
    );
};

export default BaseButton;