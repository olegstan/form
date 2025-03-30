import React, {useEffect, useMemo, useRef, useState} from 'react';
//@ts-ignore
import {StyledSelect} from './styles';
//@ts-ignore
import {StyledInput} from '../../styles';
//@ts-ignore
import useBaseInput from '../../hooks/useBaseInput';
import SearchProps from "../../types/SearchProps";
import Results from "../components/Results";
//@ts-ignore
import useOnceWhen from "../../helpers/useOnceWhen";

const Search: React.FC<SearchProps> = ({
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
                                           search = '',
                                           onSearch = () => {},
                                           clearOnClickOutside = true,
                                           addButton = false
                                       }) => {

    const [selectOpen, setSelectOpen] = useState(false);
    const selectRef = useRef(null);


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

    //обработка когда пришёл новый список и значение, проверяем можно ли установить из него search
    useOnceWhen(value && options?.length, () => {
        //@ts-ignore
        const matchingOption = options.find(option => option.id === value);

        if (matchingOption) {
            // Здесь можно добавить любое другое действие
            onSearch(matchingOption.name); // Например, вызов функции
        }
    });

// // Обработка клика вне компонента
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // @ts-ignore
            if (focused && selectRef.current && !selectRef.current?.contains(event.target)) {
                handleClose()
                //если элемент не выбран, то очистим поле поиска
                if (!value) {
                    //@ts-ignore
                    const matchedOption = options.find(option => option.name.toLowerCase() === search.toLowerCase());

                    // Если найдено совпадение, выбираем этот элемент
                    if (matchedOption) {
                        onChange(matchedOption);
                    }else{
                        if(clearOnClickOutside)
                        {
                            onSearch('');
                        }
                    }
                }
            }
        };

        // Добавляем обработчик события при монтировании компонента
        document.addEventListener('mousedown', handleClickOutside);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [search, value, options, setSelectOpen, onChange, focused]);

    const handleChange = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, option: any): void => {
        e.stopPropagation();

        onChange(option);
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

    const handleSearch = (e: any) => {
        onSearch(e.target.value);
    }

    const filteredOptions = useMemo(() => {
        return options.filter((option) => {
            // Первое условие: исключаем элемент с определённым id
            if (option.id === value) return false;

            // Второе условие: фильтрация по поисковому запросу
            if (!search) return true;

            const searchLower = search.toLowerCase();
            const parts = searchLower.split(' ');

            return parts.some((part) =>
                option?.name
                    ?.toLowerCase()
                    .replace('ё', 'е')
                    .replace('й', 'и')
                    //@ts-ignore
                    .includes(part.replace('ё', 'е').replace('й', 'и'))
            );
        });
    }, [options, value, search]);

    // @ts-ignore
    const inputClassName = `input ${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (<StyledSelect
            onClick={handleOpen}
            ref={selectRef}
        >
            <StyledInput
                id={id}
                autoComplete="off"
                disabled={disabled}
                className={inputClassName}
                type='text'
                name={getName(name)}
                value={search}
                onChange={handleSearch}
            />
            <Results
                addButton={addButton}
                active={selectOpen && !disabled}
                id={id}
                options={filteredOptions}
                handleClick={handleChange}
                idPrefix={getName(name)}
            />
        </StyledSelect>
    );
}

Search.displayName = 'Search';

export default Search;
