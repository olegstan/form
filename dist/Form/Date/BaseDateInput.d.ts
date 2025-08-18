import React from 'react';
interface BaseDateInputProps {
    focused?: boolean;
    setFocused?: (focused: boolean) => void;
    onBlur?: () => void;
    innerError?: any[];
    setInnerError?: (error: any[]) => void;
    onChange?: (value: any) => void;
    onClick?: () => void;
    disabled?: boolean;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
    value?: any;
    autoComplete?: string;
    error?: any;
    defaultDate?: Date | null;
    dateMask: string;
    inputMask: string;
    dateFormat: string;
    formatDateFn: (date: Date | null) => string;
    flatpickrOptions: any;
}
declare const BaseDateInput: React.FC<BaseDateInputProps>;
export default BaseDateInput;
//# sourceMappingURL=BaseDateInput.d.ts.map