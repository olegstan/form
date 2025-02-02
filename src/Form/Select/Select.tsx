import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyledSelect, StyledOption, OptionsWrapper} from "./styles";
import {StyledInput} from "../styles";
import useBaseInput from "../hooks/useBaseInput";

export default function Select({
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
                                   selected = null,
                                   ...props
                               }) {

    const {
        focused,
        setFocused,
        handleClick,
        handleChange,
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

    //
    // // Аналог старого handleShowSelect
    // const handleShowSelect = useCallback((open) => {
    //   if (!props.disabled) {
    //     setSelectOpen(open);
    //   }
    // }, [props.disabled]);
    //
    // // Аналог вашей renderSelected
    // const renderSelectedText = useCallback(() => {
    //   const { items, selected, default: defaultText, textLength } = props;
    //
    //   // Если нет выбранного item, отдаем props.default
    //   if (!selected) return defaultText;
    //
    //   // Ищем name в items
    //   let name = null;
    //   items?.forEach((item) => {
    //     if (parseInt(item.id, 10) === parseInt(selected.id, 10)) {
    //       name = item.name;
    //     }
    //   });
    //
    //   // Если не нашли — тоже возвращаем default
    //   if (!name) return defaultText;
    //
    //   // Обрезаем, если длиннее textLength
    //   if (textLength && name.length > textLength) {
    //     return name.slice(0, textLength - 1) + '...';
    //   }
    //
    //   return name;
    // }, [props]);
    //

    // // Обработка клика вне компонента
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setSelectOpen(false);
                setFocused(false);
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
    const resOptions = options.filter((item) => {
        if (value === item.id) {
            return false;
        }
        return true;
    });
    let selectedItemIndex = options.findIndex((row) => row.id === value)
    const valueText = selectedItemIndex !== -1 ? options[selectedItemIndex].name : '';

    const fakeOnChange = () => {

    }

    const handleOpen = () => {
        setSelectOpen(true)
        setFocused(true)
    }

    return (<StyledSelect
        onClick={handleOpen}
        ref={selectRef}
    >
        <StyledInput
            id={id}
            style={style}
            disabled={true}
            className={className + (focused ? ' focused' : '') + (error?.[0] ? ' error' : '')}
            type={'text'}
            name={getName(name)}
            value={valueText}
            onKeyPress={onKeyPress}
            onChange={fakeOnChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        {selectOpen && <OptionsWrapper id={id ? (id + '-select') : ''}>
            <StyledOption onClick={() => {
                // this.handleShowSelect(false)
            }}>
                <span>Нет элементов</span>
            </StyledOption>
            {resOptions.map((option) => (
                <StyledOption key={option.id} value={option.id}>
                    <span>{option.name}</span>
                </StyledOption>
            ))}
        </OptionsWrapper>}
    </StyledSelect>)
}