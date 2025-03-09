import React from 'react';
export interface BaseButtonProps {
    Component: React.ElementType;
    loading?: boolean;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    narrow?: boolean;
    wide?: boolean;
    withMargin?: boolean;
    type?: 'main' | 'cancel' | 'block' | 'transparent';
    [key: string]: any;
}
declare const BaseButton: React.FC<BaseButtonProps>;
export default BaseButton;
