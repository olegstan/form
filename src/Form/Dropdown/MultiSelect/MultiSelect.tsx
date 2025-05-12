import React, {useEffect, useMemo, useRef, useState} from 'react';
//@ts-ignore
import {StyledSelect} from "./styles";
//@ts-ignore
import {StyledFakeInput} from "../../styles";
//@ts-ignore
import useBaseInput from "../../hooks/useBaseInput";
import MultiSelectProps from "../../types/MultiSelectProps";
import ResultsWithCheckbox from "../components/ResultsWithCheckbox";

const MultiSelect: React.FC<MultiSelectProps> = ({
                                   focused = false,
                                   setFocused = () => {},
                                   onBlur = () => {},
                                   onKeyDown = () => {},
                                   onChange = () => {},
                                   onClick = () => {},
                                   disabled = false,
                                   className = '',
                                   style = {},
                                   id,
                                   name,
                                   values = [],
                                   error,
                                   options = [],
                                   onChangeAll = () => {},
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

    const handleChange = (e: any, item: any) => {
        onChange(item);
        handleClose()
    }

    //функция для итема который выбирает все или снимает все
    const handleChangeAll = () => {
        const areAllSelected = values?.length === options?.length;
        onChangeAll(!areAllSelected);
        handleClose()
    }

    const handleOpen = (e: any) => {
        setSelectOpen(true)
        setFocused(true)
    }

    const handleClose = () => {
        setSelectOpen(false)
        setFocused(false)
    }

    // // Обработка клика вне компонента
    useEffect(() => {
        const handleClickOutside = (event: any) => {

            // @ts-ignore
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
        >
            {valueText}
        </StyledFakeInput>
        <ResultsWithCheckbox
            active={selectOpen && !disabled}
            id={id}
            values={values}
            options={options}
            handleClick={handleChange}
            handleClickAll={handleChangeAll}
            idPrefix={getName(name)}
        />
    </StyledSelect>)
}

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;