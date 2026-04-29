import React from 'react';
export interface InfoTooltipItem {
    label: string;
    value: string | number;
}
declare function InputContainer({ children, className, style, error, info, }: {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    error?: string | null;
    info?: InfoTooltipItem[] | null;
}): import("react/jsx-runtime").JSX.Element;
export default InputContainer;
//# sourceMappingURL=InputContainer.d.ts.map