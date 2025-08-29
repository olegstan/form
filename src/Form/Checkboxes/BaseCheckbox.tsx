import React, { useRef, ComponentType } from 'react';
import CheckboxProps from '../types/CheckboxProps';

interface BaseCheckboxProps extends CheckboxProps {
    StyledComponent: ComponentType<any>;
}

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({
                                                       value = 1,
                                                       name = '',
                                                       toggleCallback = () => {},
                                                       textStyle,
                                                       id,
                                                       checked,
                                                       checkboxStyle,
                                                       style,
                                                       text,
                                                       StyledComponent
                                                   }) => {
    // Реф на <input>
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Обработчик клика для всего компонента
    const handleToggle = () => {
        if (inputRef.current) {
            inputRef.current.click(); // Имитируем клик на чекбоксе
        }
    };

    const combinedTextStyle = textStyle ? { ...textStyle } : {};
    const combinedCheckboxStyle = checkboxStyle
        ? { ...checkboxStyle }
        : {
            backgroundColor: '#4378FF',
            border: '1px solid #4378FF',
        };

    return (
        <StyledComponent
            style={style}
            onClick={handleToggle}
            id={id}
        >
            <input
                ref={inputRef}
                className={checked ? 'active' : ''}
                onChange={(event) => toggleCallback ? toggleCallback(event.target.checked, event) : () => {}}
                name={name}
                type="checkbox"
                value={value}
                checked={checked}
            />
            <span className="rotate-container" style={combinedCheckboxStyle}>
                <span className="rotate" />
            </span>
            {text && (
                <div style={combinedTextStyle} className="text">
                    {text}
                </div>
            )}
        </StyledComponent>
    );
};

export default BaseCheckbox;