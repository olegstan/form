import { useState, useCallback, useEffect } from 'react';
export const useDropdownLogic = (props, wrapperRef, onSearch, handle) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [handleArrow, setHandleArrow] = useState(false);
  const [searchValue, setSearchValue] = useState(props.search || '');
  const [selectedItem, setSelectedItem] = useState(null);

  // Обработка клика вне компонента
  const handleClickOutside = useCallback(e => {
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

  // Обработка событий клавиатуры
  const onKeyDown = useCallback(event => {
    const {
      items = []
    } = props;
    let searchLower = (searchValue || '').toLowerCase();
    let filteredItems = items.filter(item => {
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
      case 'ArrowUp':
        {
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
  }, [props, hovered, searchValue, handle]);
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
  const handleShowSelect = useCallback(bool => {
    setSelectOpen(bool);
    setFocused(bool);
    if (bool) {
      startHandleArrows();
    } else {
      stopHandleArrows();
    }
  }, [startHandleArrows, stopHandleArrows]);
  const onChange = useCallback(e => {
    const value = e.target.value;
    setSearchValue(value);
    if (typeof props.setHasError === 'function') {
      props.setHasError(false);
    }
    onSearch(value);
  }, [onSearch, props]);
  return {
    selectOpen,
    focused,
    hovered,
    handleArrow,
    searchValue,
    selectedItem,
    setSearchValue,
    setSelectedItem,
    handleShowSelect,
    onChange,
    onKeyDown,
    startHandleArrows,
    stopHandleArrows
  };
};