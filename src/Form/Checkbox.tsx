import React, {useRef, useState} from 'react';
import {StyledCheckbox} from './styles';
import CheckboxProps from "./types/CheckboxProps";

const Checkbox: React.FC<CheckboxProps> = ({
                      // Здесь прописываем дефолты
                      value = 1,
                      name = '',
                      toggleCallback = () => {},
                      textStyle,
                      id,
                      checked,
                      checkboxStyle,
                      style,
                      text
                  }) => {

    // Локальное состояние для хранения value
    const [localValue, setLocalValue] = useState(value || '');

    // Реф на <input>
    const inputRef = useRef(null);

    // Клик по тексту лейбла, чтобы активировать чекбокс
    const handleClick = (e) => {
        e.preventDefault();
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const combinedTextStyle = textStyle ? {...textStyle} : {};
    const combinedCheckboxStyle = checkboxStyle
        ? {...checkboxStyle}
        : {
            backgroundColor: '#4378FF',
            border: '2px solid #4378FF',
        };

    return (
        <StyledCheckbox
            id={id}
            style={style}
            onClick={(e) => {
                e.stopPropagation();
            }}>
            <input
                ref={inputRef}
                className={checked ? 'active' : ''}
                onChange={toggleCallback}
                name={name}
                type="checkbox"
                value={localValue}
                id={id}
                checked={checked}
            />
            <span
                className="rotate-container"
                style={combinedCheckboxStyle}
            >
          <span className="rotate"/>
        </span>
            {text && (
                <div style={combinedTextStyle} className="text" onClick={handleClick}>
                    {text}
                </div>
            )}
        </StyledCheckbox>
    );
};

export default Checkbox;