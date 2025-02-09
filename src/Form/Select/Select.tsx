import React, {useEffect, useMemo, useRef, useState} from 'react';
import {OptionsWrapper, StyledOption, StyledSelect} from "./styles";
import {StyledInput} from "../styles";
import useBaseInput from "../hooks/useBaseInput";
import SelectProps from "../types/SelectProps";

const Select: React.FC<SelectProps> = ({
                                   onKeyPress = () => {},
                                   onChange = () => {},
                                   onClick = () => {},
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
        focused,
        setFocused,
        handleFocus,
        handleBlur,
        getName,
    } = useBaseInput({
        name,
        onClick,
        onChange,
    });


    // Подтягиваем логику «базового инпута» из вашего хука
    // const {
    //   wrapperRef,
    // } = useBaseInput(props);

    // Локальный стейт: открыто ли меню
    const [selectOpen, setSelectOpen] = useState(false);
    const selectRef = useRef(null);

    const fakeOnChange = () => {

    }

    const handleChange = (item) => {
        onChange({}, {
            name: name,
            id: item.id ?? '',
            value: item
        });
        handleClose()
    }

    const handleOpen = () => {
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
    const inputClassName = `${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (<StyledSelect
        onClick={handleOpen}
        ref={selectRef}
    >
        <StyledInput
            id={id}
            style={style}
            disabled={true}
            className={inputClassName}
            type={'text'}
            name={getName(name)}
            value={valueText}
            onKeyPress={onKeyPress}
            onChange={fakeOnChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        {selectOpen && !disabled && <OptionsWrapper id={id ? `${id}-select` : undefined}>
            {filteredOptions.length === 0 ? (<StyledOption>
                <span>Нет элементов</span>
            </StyledOption>)
            :
            filteredOptions.map((option) => (
                <StyledOption key={option.id} value={option.id} onClick={() => handleChange(option)}>
                    <span>{option.name}</span>
                </StyledOption>
            ))}
        </OptionsWrapper>}
    </StyledSelect>)
}

export default Select;