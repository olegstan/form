import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Input as StyledInput, InputContainer, InputWrapper, Item, Select as StyledSelect } from './newstyles';
import { Loader } from '../newstyles';
import { ReactComponent as LoadImage } from '../../assets/loader.svg';
import useBaseSearch from '../hooks/useBaseSearch'; // Предположим, что у вас есть хук useBaseSearch

const RemoteSearch = (props) => {
  const {
    wrapperRef,
    hasError,
    setHasError,
    renderPlaceholder,
    renderTooltipError,
    getContainerStyle,
    getWrapperStyle,
    getInputStyle,
    getWrapperClasses,
    getName
  } = useBaseSearch(props, 'RemoteSearch');

  const [selectOpen, setSelectOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [handleArrow, setHandleArrow] = useState(false);
  const [searchValue, setSearchValue] = useState(props.search || '');
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickOutside = useCallback((e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      if (typeof props.onOutsideClick === 'function' && focused) {
        props.onOutsideClick(searchValue, selectedItem);
      }
      handleShowSelect(false);
      stopHandleArrows();
    }
  }, [focused, props, searchValue, selectedItem, wrapperRef]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      stopHandleArrows();
    };
  }, [handleClickOutside]);

  const onKeyDown = useCallback((event) => {
    const { items = [], handle } = props;

    let searchLower = (searchValue || '').toLowerCase();
    let filteredItems = items.filter((item) => {
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
    });

    switch (event.key) {
      case 'Down':
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
      case 'Up':
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
        return;
    }
  }, [props, hovered, searchValue]);

  useEffect(() => {
    if (handleArrow) {
      window.addEventListener('keydown', onKeyDown, true);
    }
    return () => {
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

  const handleShowSelect = useCallback((bool) => {
    setSelectOpen(bool);
    setFocused(bool);

    if (bool) {
      startHandleArrows();
    } else {
      stopHandleArrows();
    }
  }, [startHandleArrows, stopHandleArrows]);

  const onSearch = useCallback(() => {
    if (typeof props.onSearch === 'function') {
      props.onSearch(searchValue, selectedItem);
    }
  }, [props, searchValue, selectedItem]);

  const { items = [], handle, selectStyle = {}, showClearIcon = true } = props;

  let searchLower = (searchValue || '').toLowerCase();
  let resItems = items
    .filter((item) => {
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

  const empty = !searchValue || (typeof searchValue === 'string' && !searchValue.length);

  return (
    <Container dataid="remote-search" style={getContainerStyle()} className={props.className + (props.disabled ? ' disabled' : '')}>
      <InputWrapper className={getWrapperClasses(resItems)} ref={wrapperRef}>
        <InputContainer>
          <StyledInput
            selected={selectedItem ? JSON.stringify(selectedItem) : ''}
            id={props.id}
            autoComplete="off"
            disabled={props.disabled}
            style={getInputStyle()}
            className={props.className}
            type={props.type}
            name={getName(props.name)}
            value={searchValue}
            placeholder={props.placeholder}
            onClick={() => handleShowSelect(true)}
            onKeyPress={(e) => {
              if (typeof props.onKeyPress === 'function') {
                props.onKeyPress(e);
              }
            }}
            onChange={(e) => {
              const value = e.target.value;
              setSearchValue(value);
              setHasError(false);
              onSearch();
            }}
            onFocus={() => {
              setFocused(true);
              setHasError(false);
            }}
          />
          {renderPlaceholder()}
          <StyledSelect id={`${props.id}-select`} className={`${props.className} select`} select={selectOpen || focused}>
            {resItems.length ? resItems : (loading || selectedItem ? '' : <Item className={props.className}><span>{typeof searchValue === 'string' && searchValue.length > 0 ? 'Ничего не найдено' : 'Введите запрос'}</span></Item>)}
          </StyledSelect>
          {renderTooltipError()}
          {loading && <Loader id='loader-for-data'>
            <div onClick={() => {}}>
              <LoadImage />
            </div>
          </Loader>}
        </InputContainer>
      </InputWrapper>
    </Container>
  );
};

export default RemoteSearch;