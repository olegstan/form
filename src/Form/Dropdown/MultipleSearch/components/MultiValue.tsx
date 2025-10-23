import React from 'react';
import {TagText} from "../styles";

interface OptionType {
    label: string;
    value: any;
}

// Используем собственный интерфейс вместо MultiValueProps из react-select
interface CustomMultiValueProps {
    data: OptionType;
    removeProps: {
        onClick?: (event: React.MouseEvent<HTMLElement>) => void;
        onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
        onTouchEnd?: (event: React.TouchEvent<HTMLElement>) => void;
    };
}

const MultiValue: React.FC<CustomMultiValueProps> = ({ data, removeProps }) => {
    return (
        <TagText {...removeProps}>
            {data.label}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    removeProps.onClick?.(e as React.MouseEvent<HTMLElement>);
                }}
                style={{
                    marginLeft: 8,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.2em'
                }}
                aria-label="Удалить"
            >
                &times;
            </button>
        </TagText>
    );
};

export default MultiValue;