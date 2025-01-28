import React, {
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import useBaseInput from '../hooks/useBaseInput'; // <-- путь скорректируйте под ваш проект
import {
  Container,
  Input as StyledInput,
  InputContainer,
  InputWrapper,
  Item,
  Select as StyledSelect
} from './newstyles';

// Аналог defaultProps
const defaultShowClearIcon = true;
const defaultSelectStyle = {};

export default function Search(props) {
  // Берём базовую логику из хука useBaseInput (или аналогичного useBaseSearch)
  const {
    wrapperRef,
    // состояние об ошибках и фокусе:
    hasError,
    setHasError,
    // Методы для рендера и стилей
    renderPlaceholder,
    renderTooltipError,
    getContainerStyle,
    getWrapperStyle,
    getInputStyle,
    getWrapperClasses,
    getName
  } = useBaseInput(props, 'Search');

  // Локальные состояния, аналогичные this.state:
  const [selectOpen, setSelectOpen] = useState(false);     // было this.state.select
  const [focused, setFocused] = useState(false);           // this.state.focused
  const [hovered, setHovered] = useState(false);           // this.state.hovered
  const [handleArrow, setHandleArrow] = useState(false);   // this.state.handleArrow
  const [searchValue, setSearchValue] = useState(props.search || '');
  const [selectedItem, setSelectedItem] = useState(null);

  // Если вам нужно синхронизировать searchValue при обновлении props.search:
  // useEffect(() => {
  //   setSearchValue(props.search || '');
  // }, [props.search]);

  // Аналог componentDidMount + componentWillUnmount: «клик вне»
  useEffect(() => {
    function handleClickOutside(e) {
      // Если кликнули вне области wrapperRef...
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        // Если есть onOutsideClick и поле в фокусе — вызываем
        if (typeof props.onOutsideClick === 'function' && focused) {
          props.onOutsideClick(searchValue, selectedItem);
        }
        handleShowSelect(false);
        stopHandleArrows();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Мало ли, при размонтировании также снять слушатель клавиатуры
      stopHandleArrows();
    };
  }, [focused, props, searchValue, selectedItem, wrapperRef]);

  // -----------------------------------------
  // ЛОГИКА СТРЕЛОК КЛАВИАТУРЫ
  // -----------------------------------------
  const onKeyDown = useCallback((event) => {
    // Чтобы в onKeyDown видеть items, hovered и т.д.,
    // придётся рассчитать resItems внутри или передавать отдельным способом.
    const { items = [], selected, search, handle } = props;

    // Фильтрация (как в render())
    let searchLower = (searchValue || '').toLowerCase();
    let filteredItems = items.filter((item) => {
      if (!searchLower) return true;
      const parts = searchLower.split(' ');
      let partsFound = 0;
      for (let part of parts) {
        // Заменяем «ё»->«е», «й»->«и» (как в вашем коде)
        const replacedPart = part.replace('ё', 'е').replace('й', 'и');
        const replacedName = item?.name
          ?.toLowerCase()
          .replace('ё', 'е')
          .replace('й', 'и');
        if (replacedPart.length > 0 && replacedName?.indexOf(replacedPart) !== -1) {
          partsFound++;
        }
      }
      return partsFound > 0;
    });

    // Ваша логика arrow keys:
    switch (event.key) {
      case 'Down': // IE/Edge
      case 'ArrowDown':
        if (hovered === false) {
          setHovered(0);
        } else {
          const length = filteredItems.length;
          const next = hovered + 1;
          if (next <= length - 1) {
            setHovered(next);
          }
        }
        break;
      case 'Up': // IE/Edge
      case 'ArrowUp': {
        const prev = hovered - 1;
        if (prev >= 0) {
          setHovered(prev);
        }
        break;
      }
      case 'Enter':
        if (hovered !== false && filteredItems[hovered]) {
          const item = filteredItems[hovered];
          // Вызываем handle из props
          if (typeof handle === 'function') {
            handle(item);
          }
          handleShowSelect(false);
          stopHandleArrows();
          setSearchValue(item.name);
          setSelectedItem(item);
        }
        event.preventDefault();
        break;
      default:
        return; // Ничего не делаем
    }
  }, [props, hovered, searchValue]);

  // Аналог методов handleArrows / stopHandleArrows
  useEffect(() => {
    if (handleArrow) {
      // включаем слушатель
      window.addEventListener('keydown', onKeyDown, true);
    }
    return () => {
      // при отключении handleArrow или размонтировании
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, [handleArrow, onKeyDown]);

  const startHandleArrows = useCallback(() => {
    if (!handleArrow) {
      setHandleArrow(true);
    }
  }, [handleArrow]);

  const stopHandleArrows = useCallback(() => {
    setHandleArrow(false);
  }, []);

  // -----------------------------------------
  // Показ/Скрытие выпадающего списка
  // -----------------------------------------
  const handleShowSelect = useCallback((bool) => {
    setSelectOpen(bool);
    setFocused(bool);

    if (bool) {
      startHandleArrows();
    } else {
      stopHandleArrows();
    }
  }, [startHandleArrows, stopHandleArrows]);

  // -----------------------------------------
  // Поиск
  // -----------------------------------------
  const onSearch = useCallback(() => {
    if (typeof props.onSearch === 'function') {
      props.onSearch(searchValue, selectedItem);
    }
  }, [props, searchValue, selectedItem]);

  // -----------------------------------------
  // Фильтрация и рендер items (аналог render())
  // -----------------------------------------
  const { items = [], handle, selectStyle = defaultSelectStyle, showClearIcon = defaultShowClearIcon } = props;

  let searchLower = (searchValue || '').toLowerCase();
  let resItems = items
    .filter((item) => {
      // Поисковая логика
      if (!searchLower) return true;
      const parts = searchLower.split(' ');
      let partsFound = 0;
      for (let part of parts) {
        const replacedPart = part.replace('ё', 'е').replace('й', 'и');
        const replacedName = item?.name?.toLowerCase().replace('ё', 'е').replace('й', 'и');
        if (replacedPart.length > 0 && replacedName?.indexOf(replacedPart) !== -1) {
          partsFound++;
        }
      }
      return partsFound > 0;
    })
    .map((item, key) => (
      <Item
        key={item.id + (item.type_id ? item.type_id : '')}
        className={`${props.className} item ${hovered === key ? 'hovered' : ''}`}
        id={`${props.id}-${item.id}`}
        onClick={(e) => {
          e.stopPropagation();
          if (typeof handle === 'function') {
            handle(item);
          }
          handleShowSelect(false);
          stopHandleArrows();
          setSearchValue(item.name);
          setSelectedItem(item);
        }}
      >
        <span>{item.name}</span>
      </Item>
    ));

  // Если нет ничего в searchValue — empty = true
  const empty = !searchValue || (typeof searchValue === 'string' && !searchValue.length);

  // -----------------------------------------
  // Стили, если у вас был getInputContainerStyle и т.д.
  // -----------------------------------------
  const getInputContainerStyle = useCallback(() => {
    // Если нужно особое вычисление, делайте тут.
    return props.inputContainerStyle || {};
  }, [props.inputContainerStyle]);

  // -----------------------------------------
  // Рендер
  // -----------------------------------------
  return (
    <Container dataid="search" style={getContainerStyle()} className={props.className}>
      <InputWrapper
        className={getWrapperClasses()}
        style={getWrapperStyle()}
        onClick={(e) => e.stopPropagation()}
      >
        <InputContainer style={getInputContainerStyle()} ref={wrapperRef}>
          <StyledInput
            selected={selectedItem}
            id={props.id}
            autoComplete="off"
            disabled={props.disabled}
            style={getInputStyle()}
            className={props.className}
            type={props.type}
            name={getName(props.name)}
            value={searchValue}
            placeholder={props.placeholder}
            onClick={(e) => {
              e.stopPropagation();
              if (typeof props.onClick === 'function') {
                props.onClick();
              }
            }}
            onKeyPress={(e) => {
              if (typeof props.onKeyPress === 'function') {
                props.onKeyPress(e);
              }
            }}
            onChange={(e) => {
              const value = e.target.value;
              // Меняем стейт, сбрасываем ошибку
              setSearchValue(value);
              setHasError(false);

              // Вызываем поиск
              if (value.length > 0) {
                onSearch();
              } else {
                onSearch();
                // handle(null) — если вам нужно сбросить выбранный item
                if (typeof handle === 'function') {
                  handle(null);
                }
              }
            }}
            onFocus={() => {
              setFocused(true);
              setHasError(false);
              // при фокусе можем открыть select
              handleShowSelect(true);
            }}
            onBlur={() => {
              // Обычно blur мы не обрабатываем напрямую, т.к. есть «клик вне».
            }}
          />

          {/* Placeholder (если используете) */}
          {renderPlaceholder()}

          {/* Выпадающий список */}
          <StyledSelect
            id={`${props.id}-select`}
            className={`${props.className} select`}
            select={selectOpen || focused}
            style={selectStyle}
            onClick={(e) => e.stopPropagation()}
          >
            {resItems.length ? (
              resItems
            ) : (
              // Если ничего не найдено
              !selectedItem && (
                <Item className={props.className}>
                  <span>
                    {typeof searchValue === 'string' && searchValue.length > 0
                      ? 'Ничего не найдено'
                      : 'Введите запрос'}
                  </span>
                </Item>
              )
            )}
          </StyledSelect>

          {/* Кнопка очистки (крестик), если showClearIcon=true и не disabled */}
          {!empty && showClearIcon && !props.disabled && (
            <img
              style={props.clearImageStyle}
              className="close"
              src={require('./../../assets/ic_close_only.svg').default}
              alt=""
              onClick={() => {
                setSearchValue('');
                setHasError(false);
                onSearch();
                if (typeof handle === 'function') {
                  handle(null);
                }
              }}
            />
          )}

          {/* Ошибка (tooltip) */}
          {renderTooltipError()}
        </InputContainer>
      </InputWrapper>
    </Container>
  );
}
