import React from 'react';
export type ButtonType = 'main' | 'cancel' | 'block' | 'transparent';
export type ButtonSize = 'narrow' | 'wide' | 'normal';
export interface BaseButtonCommonProps {
    id?: string | number;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    narrow?: boolean;
    wide?: boolean;
    withMargin?: boolean;
    type?: ButtonType;
}
export interface ButtonElementProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset' | ButtonType;
    form?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    name?: string;
    value?: string;
}
export interface LinkElementProps {
    href?: string;
    to?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    target?: string;
    rel?: string;
    download?: string;
}
export interface BaseButtonProps extends BaseButtonCommonProps {
    Component: React.ElementType;
    onClick?: (event: React.MouseEvent<any>) => void;
    [key: string]: any;
}
//# sourceMappingURL=button.types.d.ts.map