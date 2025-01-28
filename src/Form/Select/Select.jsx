import React, { useState, useEffect, useCallback } from 'react';
import useBaseInput from '../hooks/useBaseInput'; // <-- adjust import if needed
import { InputWrapper, Item, Select as StyledSelect, Selected } from './newstyles';
import { Container } from '../styles/selectContainerStyle';

export default function Select(props) {
  // Подтягиваем логику «базового инпута» из вашего хука
  const {
    wrapperRef,
    hasError,
    setHasError,
    renderPlaceholder,
    renderTooltipError,
    getContainerStyle,
    // Прочие методы, если нужны:
    // getWrapperStyle, getInputStyle, ...
  } = useBaseInput(props, 'Select');

  // Локальный стейт: открыто ли меню
  const [selectOpen, setSelectOpen] = useState(false);

  // Аналог старого handleShowSelect
  const handleShowSelect = useCallback((open) => {
    if (!props.disabled) {
      setSelectOpen(open);
      setHasError(false);
    }
  }, [props.disabled, setHasError]);

  // Аналог вашей renderSelected
  const renderSelectedText = useCallback(() => {
    const { items, selected, default: defaultText, textLength } = props;

    // Если нет выбранного item, отдаем props.default
    if (!selected) return defaultText;

    // Ищем name в items
    let name = null;
    items?.forEach((item) => {
      if (parseInt(item.id, 10) === parseInt(selected.id, 10)) {
        name = item.name;
      }
    });

    // Если не нашли — тоже возвращаем default
    if (!name) return defaultText;

    // Обрезаем, если длиннее textLength
    if (textLength && name.length > textLength) {
      return name.slice(0, textLength - 1) + '...';
    }

    return name;
  }, [props]);

  // Аналог getArrow (если у вас есть разные иконки для style1 — пока оставляем логику)
  const getArrow = useCallback(() => {
    if (props.className === 'style1') {
      // ...верните нужный файл
    }
    return require('../../assets/arrow.svg').default;
  }, [props.className]);

  // Обработка клика вне компонента
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        handleShowSelect(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, handleShowSelect]);

  // Подготавливаем список элементов (без выбранного)
  const { items = [], handle, selected } = props;
  const resItems = items.filter((item) => {
    if (selected && selected.id === item.id) {
      return false;
    }
    return true;
  });

  // Если есть ошибка — добавим стили
  const focusStyle = hasError ? { border: '1px solid #EF5E70' } : {};

  return (
    <Container
      size={props.size}
      className={`${props.className} ${selectOpen ? 'select' : ''}`}
      style={getContainerStyle()}
    >
      <InputWrapper
        ref={wrapperRef}
        className={`wrapper ${selectOpen ? 'select' : ''}`}
        style={focusStyle}
        id={props.id + '-wrapper'}
      >
        {/* Основная часть (выбранный элемент) */}
        <Selected
          id={props.id}
          className={`${props.className} selected`}
          onClick={() => handleShowSelect(true)}
        >
          <span>{renderSelectedText()}</span>
        </Selected>

        {/* Выпадающее меню: если selectOpen == true */}
        {selectOpen && (
          <StyledSelect
            id={props.id + '-select'}
            className={`${props.className} select`}
            select
          >
            {/* Если есть элементы */}
            {resItems.length > 0 ? (
              resItems.map((item) => {
                const shortName =
                  props.textLength && item.name && item.name.length > props.textLength
                    ? item.name.substr(0, props.textLength - 1) + '...'
                    : item.name;
                return (
                  <Item
                    key={item.id}
                    id={props.id + '-' + item.id}
                    className={`${props.className} item`}
                    onClick={() => {
                      handle(item);
                      handleShowSelect(false);
                    }}
                  >
                    <span>{shortName}</span>
                  </Item>
                );
              })
            ) : (
              // Если нет элементов
              <Item
                className={`${props.className} item`}
                onClick={() => handleShowSelect(false)}
              >
                <span>Нет элементов</span>
              </Item>
            )}
          </StyledSelect>
        )}

        {/* Плейсхолдер из useBaseInput, если нужен */}
        {renderPlaceholder()}

        {/* Стрелочка */}
        <img
          className="arrow"
          src={getArrow()}
          alt=""
          onClick={() => handleShowSelect(true)}
        />

        {/* Тултип с ошибкой (если есть) */}
        {renderTooltipError()}
      </InputWrapper>
    </Container>
  );
}