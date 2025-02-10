import React, {useEffect, useMemo, useRef, useState} from 'react';
import {StyledSelect} from './styles';
import {StyledInput} from '../../styles';
import useBaseInput from '../../hooks/useBaseInput';
import SearchProps from "../../types/SearchProps";
import Results from "../components/Results";

const Search: React.FC<SearchProps> = ({
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
                                   search = '',
                                   onSearch = () => {},
                               }) => {

    const [selectOpen, setSelectOpen] = useState(false);
    const selectRef = useRef(null);


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

// // Обработка клика вне компонента
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                handleClose()
                //если элемент не выбран, то очистим поле поиска
                if(!value)
                {
                    onSearch('');
                }
            }
        };

        // Добавляем обработчик события при монтировании компонента
        document.addEventListener('mousedown', handleClickOutside);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSelectOpen]);

  // const onSearch = useCallback(() => {
  //   if (typeof props.onSearch === 'function') {
  //     props.onSearch(searchValue, selectedItem);
  //   }
  // }, [props, searchValue, selectedItem]);
  //

  //
  // const handleItemClick = (e, item) => {
  //   e.stopPropagation();
  //   if (typeof handle === 'function') {
  //     handle(item);
  //   }
  //   handleShowSelect(false);
  //   setSearchValue(item.name);
  //   setSelectedItem(item);
  // };

    const handleChange = (e, item) => {
        e.stopPropagation();

        onChange({}, {
            name: name,
            id: item.id ?? '',
            value: item
        });
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

    const handleSearch = (e) => {
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
                    .includes(part.replace('ё', 'е').replace('й', 'и'))
            );
        });
    }, [options, value, search]);

    const inputClassName = `${className}${focused ? ' focused' : ''}${error?.[0] ? ' error' : ''}`;

    return (<StyledSelect
            onClick={handleOpen}
            ref={selectRef}
          >
              <StyledInput
                  id={id}
                  autoComplete="off"
                  disabled={disabled}
                  className={inputClassName + ' input'}
                  type='text'
                  name={getName(name)}
                  value={search}
                  onChange={handleSearch}
              />
                {selectOpen && !disabled && <Results
                    id={id}
                    options={filteredOptions}
                    handleClick={handleChange}
                    idPrefix={getName(name)}
                />}
          </StyledSelect>
  );
}

export default Search;
