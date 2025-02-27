import React, {useEffect, useMemo, useRef, useState} from 'react';
import useBaseInput from "../../hooks/useBaseInput";
import SelectProps from "../../types/SelectProps";
import Results from "../components/Results";

import {StyledFakeInput} from "../../styles";
import {StyledSelect} from "./styles";
import Input from "../../TextInput/Input";

const Select: React.FC<SelectProps> = ({
                                           focused = false,
                                           setFocused = () => {
                                           },
                                           onBlur = () => {
                                           },
                                           onKeyPress = () => {
                                           },
                                           onChange = () => {
                                           },
                                           onClick = () => {
                                           },
                                           disabled = false,
                                           className = '',
                                           style = {},
                                           id,
                                           name,
                                           value,
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

    const handleChange = (e: any, item: any) => {
        e.stopPropagation();

        onChange(item);
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
            if (selectRef.current && !selectRef.current?.contains(event.target)) {
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

    // // Подготавливаем список элементов (без выбранного)
    const filteredOptions = useMemo(
        () => options.filter((option) => option.id !== value),
        [options, value]
    );
    const selectedOption = useMemo(
        () => options.find((option) => option.id === value),
        [options, value]
    );
    const valueText = selectedOption ? selectedOption.name : '';
    // @ts-ignore
    const inputClassName = `styled-input__pseudo-input input ${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (
        <StyledSelect
            className={`styled-input__select-wrapper`}
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
            <Results
                className={`styled-input__results-list`}
                active={selectOpen && !disabled}
                id={id}
                options={filteredOptions}
                handleClick={handleChange}
                idPrefix={getName(name)}
            />
        </StyledSelect>
    )
}

Select.displayName = 'Select';

export default Select;