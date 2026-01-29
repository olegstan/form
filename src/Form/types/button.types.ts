import React from 'react';

// Базовые типы для кнопок
export type ButtonType = 'main' | 'cancel' | 'block' | 'transparent';

export type ButtonSize = 'narrow' | 'wide' | 'normal';

// Базовые пропсы, общие для всех кнопок
export interface BaseButtonCommonProps {
    id?: string|number;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    narrow?: boolean;
    wide?: boolean;
    withMargin?: boolean;
    type?: ButtonType;
}

// Типы для разных компонентов - используем отдельно для лучшей читаемости
export interface ButtonElementProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset' | ButtonType; // Объединяем HTML type и наш ButtonType
    form?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    name?: string;
    value?: string;
    style?: any;
}

export interface LinkElementProps {
    href?: string;
    to?: string; // Для react-router Link
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    target?: string;
    rel?: string;
    download?: string;
}

// Упрощенный интерфейс для BaseButton
export interface BaseButtonProps extends BaseButtonCommonProps {
    Component: React.ElementType;
    onClick?: (event: React.MouseEvent<any>) => void;
    [key: string]: any; // Для передачи дополнительных пропсов
}