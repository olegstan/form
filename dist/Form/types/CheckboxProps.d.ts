import React from "react";
export default interface CheckboxProps {
    value?: string | number;
    name?: string;
    id?: string;
    checked?: boolean;
    toggleCallback?: (checked: boolean) => void;
    text?: string;
    textStyle?: React.CSSProperties;
    checkboxStyle?: React.CSSProperties;
    style?: React.CSSProperties;
}
//# sourceMappingURL=CheckboxProps.d.ts.map