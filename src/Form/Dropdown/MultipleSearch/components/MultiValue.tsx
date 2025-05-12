import React from 'react';
import {MultiValueProps} from 'react-select';
import {TagText} from "../styles";

interface OptionType {
    label: string;
    value: any;
}

const MultiValue: React.FC<MultiValueProps<OptionType, true>> = ({ data, removeProps }) => {
    return (
        <TagText {...removeProps}>
            {data.label}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    // Приводим тип event.target к EventTarget, чтобы избежать несоответствия
                    (removeProps.onClick as ((event: React.MouseEvent<HTMLElement>) => void))?.(
                        e as React.MouseEvent<HTMLElement>
                    );
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