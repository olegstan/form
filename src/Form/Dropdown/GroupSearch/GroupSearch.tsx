import React, {useEffect, useMemo, useRef, useState} from 'react';
import {StyledSelect} from './styles';
import {StyledInput} from '../../styles';
import useBaseInput from '../../hooks/useBaseInput';
import useOnceWhen from "../../helpers/useOnceWhen";
import GroupSearchProps from "../../types/GroupSearchProps";
import GroupResults from "../components/GroupResults";

const GroupSearch: React.FC<GroupSearchProps> = ({
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
                handleBlur()
                handleClose()
                //если элемент не выбран, то очистим поле поиска
                if (!value) {
                    const findMatchedOption = (options: any[]): any | undefined => {
                        for (const option of options) {
                            // Проверяем текущий уровень
                            if (option.name && option.name.toLowerCase() === search.toLowerCase()) {
                                return option;
                            }

                            // Если есть вложенные элементы, проверяем их
                            if (option.items && Array.isArray(option.items)) {
                                const matchedInItems = findMatchedOption(option.items);
                                if (matchedInItems) {
                                    return matchedInItems;
                                }
                            }
                        }
                        return undefined; // Если ничего не найдено
                    };

                    const matchedOption = findMatchedOption(options);

                    // Если найдено совпадение, выбираем этот элемент
                    if (matchedOption) {
                        onChange(matchedOption);
                    } else {
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

    const handleChange = (event: React.MouseEvent<HTMLInputElement, MouseEvent>, option: any): void => {
        event.stopPropagation();

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
        if (!Array.isArray(options)) {
            console.error('Invalid options: expected an array');
            return [];
        }

        return options.filter((option) => {

            if (typeof option !== 'object' || option === null) {
                console.warn('Invalid option: expected an object', option);
                return false;
            }

            // Второе условие: если поисковый запрос пустой, проверяем наличие items
            if (!search) {
                // Если search пустой, показываем опцию только если есть items
                //@ts-ignore
                return option.items && option.items.length > 0;
            }

            // Третье условие: фильтрация по поисковому запросу
            if (typeof search !== 'string') {
                console.warn('Invalid search query: expected a string', search);
                return false;
            }

            // Третье условие: фильтрация по поисковому запросу
            const searchLower = search.toLowerCase();
            const parts = searchLower.split(' ');

            // Проверяем, есть ли совпадения в имени самой опции
            const matchesOptionName =
                typeof option.name === 'string' &&
                parts.some((part) =>
                    option.name
                        .toLowerCase()
                        .replace('ё', 'е')
                        .replace('й', 'и')
                        .includes(part.replace('ё', 'е').replace('й', 'и'))
                );

            // Проверяем, есть ли совпадения в именах вложенных items
            //@ts-ignore
            const matchesItems =
                Array.isArray(option.items) &&
                option.items.some((item) => {
                    // Проверяем, что item является объектом
                    if (typeof item !== 'object' || item === null) {
                        console.warn('Invalid item: expected an object', item);
                        return false;
                    }

                    // Проверяем, что item.name является строкой
                    return (
                        typeof item.name === 'string' &&
                        parts.some((part) =>
                            item.name
                                .toLowerCase()
                                .replace('ё', 'е')
                                .replace('й', 'и')
                                .includes(part.replace('ё', 'е').replace('й', 'и'))
                        )
                    );
                });

            // Опция показывается, если:
            // 1. Есть совпадение в имени самой опции
            // ИЛИ
            // 2. Есть хотя бы один подходящий элемент в items
            return matchesOptionName || matchesItems;
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
                style={style}
                autoComplete="off"
                disabled={disabled}
                className={inputClassName}
                type='text'
                name={getName(name)}
                value={search ?? ''}
                onChange={handleSearch}
            />
            <GroupResults
                addButton={addButton}
                active={selectOpen && !disabled}
                id={id}
                options={filteredOptions}
                handleClick={handleChange}
                idPrefix={getName(name) ?? id}
            />
        </StyledSelect>
    );
}

GroupSearch.displayName = 'GroupSearch';

export default GroupSearch;
