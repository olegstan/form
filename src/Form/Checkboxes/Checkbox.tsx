import React, {useRef} from 'react';
// @ts-ignore
import {StyledCheckbox} from '../styles';
import CheckboxProps from '../types/CheckboxProps';

const Checkbox: React.FC<CheckboxProps> = ({
                                               value = 1,
                                               name = '',
                                               toggleCallback = () => {},
                                               textStyle,
                                               id,
                                               checked,
                                               checkboxStyle,
                                               style,
                                               text,
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
        <StyledCheckbox
            style={style}
            onClick={handleToggle} // Общий обработчик клика для всего компонента
        >
            <input
                ref={inputRef}
                className={checked ? 'active' : ''}
                onChange={(event) => toggleCallback ? toggleCallback(event.target.checked, event) : () => {}} // Передаем новое состояние в callback
                name={name}
                type="checkbox"
                value={value}
                id={id}
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
        </StyledCheckbox>
    );
};

export default Checkbox;