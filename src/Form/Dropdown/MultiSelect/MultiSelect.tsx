import React, {useEffect, useMemo, useRef, useState} from 'react';
import {StyledSelect} from "./styles";
import {StyledFakeInput} from "../../styles";
import useBaseInput from "../../hooks/useBaseInput";
import MultiSelectProps from "../../types/MultiSelectProps";
import Results from "../components/Results";
import ResultsWithCheckbox from "../components/ResultsWithCheckbox";

const MultiSelect: React.FC<MultiSelectProps> = ({
                                   focused = false,
                                   setFocused = () => {},
                                   onBlur = () => {},
                                   onKeyPress = () => {},
                                   onChange = () => {},
                                   onClick = () => {},
                                   disabled = false,
                                   className = '',
                                   style = {},
                                   id,
                                   name,
                                   values= [],
                                   error,
                                   options = [],
                               }) => {

    const {
        handleFocus,
        handleBlur,
        getName,
    } = useBaseInput({
        disabled,
        name,
        onClick,
        onChange,
        setFocused,
        onBlur
    });


    // Локальный стейт: открыто ли меню
    const [selectOpen, setSelectOpen] = useState(false);
    const selectRef = useRef(null);

    const fakeOnChange = () => {

    }

    const handleChange = (e, item) => {
        onChange(item);
        handleClose()
    }

    const handleOpen = (e) => {
        setSelectOpen(true)
        setFocused(true)
    }

    const handleClose = () => {
        setSelectOpen(false)
        setFocused(false)
    }

    // // Обработка клика вне компонента
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                handleClose()
            }
        };

        // Добавляем обработчик события при монтировании компонента
        document.addEventListener('mousedown', handleClickOutside);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSelectOpen]);

    const getPluralForm = useMemo(
        () => (count: number, forms: string[]) => {
            const absCount = Math.abs(count);
            const index =
                absCount % 100 > 4 && absCount % 100 < 20
                    ? 2
                    : [2, 0, 1, 1, 1, 2][absCount % 10 < 5 ? absCount % 10 : 5];
            return `${count} ${forms[index]}`;
        },
        []
    );

    // Текстовое представление выбранных значений
    const valueText = useMemo(() => {
        if (!values || values.length === 0) return '';
        const count = values.length;
        const pluralForms = ['элемент', 'элемента', 'элементов'];
        return `Выбрано: ${getPluralForm(count, pluralForms)}`;
    }, [values, getPluralForm]);

    const inputClassName = `input ${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (<StyledSelect
        onClick={handleOpen}
        ref={selectRef}
    >
        <StyledFakeInput
            id={id}
            style={style}
            className={inputClassName}
            name={getName(name)}
        >
            {valueText}
        </StyledFakeInput>
        <ResultsWithCheckbox
            active={selectOpen && !disabled}
            id={id}
            values={values}
            options={options}
            handleClick={handleChange}
            idPrefix={getName(name)}
        />
    </StyledSelect>)
}

export default MultiSelect;