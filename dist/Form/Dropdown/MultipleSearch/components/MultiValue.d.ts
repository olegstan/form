import React from 'react';
interface OptionType {
    label: string;
    value: any;
}
interface CustomMultiValueProps {
    data: OptionType;
    removeProps: {
        onClick?: (event: React.MouseEvent<HTMLElement>) => void;
        onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
        onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void;
    };
}
declare const MultiValue: React.FC<CustomMultiValueProps>;
export default MultiValue;
//# sourceMappingURL=MultiValue.d.ts.map