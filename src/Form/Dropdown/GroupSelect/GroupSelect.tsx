import React, {useEffect, useMemo, useRef, useState} from 'react';
import {StyledSelect} from "./styles";
import {StyledFakeInput} from "../../styles";
import useBaseInput from "../../hooks/useBaseInput";
import GroupResults from "../components/GroupResults";
import GroupSelectProps from "../../types/GroupSelectProps";

//TODO сделать отображение выбранного элемента
//TODO сделать настройку как отображать текст выбранного,
//TODO например для счетов, не видно счет, видно название субсчета, что затрудняет понимание как счет используется

const GroupSelect: React.FC<GroupSelectProps> = ({
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
                                                value,
                                                error,
                                                options = [],
                                                addButton = false,
                                                getText = (item: any, subItem?: any) => subItem?.name || '',
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
            //@ts-ignore
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

    const selectedOption = useMemo(() => {
        let foundOption = null;

        // Ищем выбранный элемент в верхнем уровне options
        //@ts-ignore
        foundOption = options.find((option) => option.id === value);

        if (!foundOption) {
            // Если не нашли в верхнем уровне, ищем в items каждой опции
            for (const option of options) {
                //@ts-ignore
                if (option?.items) {
                    //@ts-ignore
                    foundOption = option?.items.find((item: any) => item.id === value);
                    if (foundOption) break; // Прерываем цикл, если нашли элемент
                }
            }
        }

        return foundOption;
    }, [options, value]);

    const valueText = useMemo(() => {
        if (!selectedOption) return '';

        // Пытаемся найти родительский элемент, если selectedOption является subItem
        const parentOption = options.find((option) =>
            //@ts-ignore
            option?.items?.some((item: any) => item.id === selectedOption.id)
        );

        // Вызываем функцию getText, передавая item и subItem
        return getText(parentOption, selectedOption);
    }, [selectedOption, getText, options]);

    const inputClassName = `styled-input__pseudo-input input ${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (<StyledSelect
        id={id ? 'wrapper-' + id : undefined}
        className={`styled-input__select-wrapper`}
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
        <GroupResults
            addButton={addButton}
            className={`styled-input__results-list`}
            active={selectOpen && !disabled}
            id={id}
            options={filteredOptions}
            handleClick={handleChange}
            idPrefix={getName(name)}
        />
    </StyledSelect>)
}

GroupSelect.displayName = 'GroupSelect';

export default GroupSelect;