import React, { useCallback, useState } from 'react';
import { Container, Input as StyledInput, InputContainer, InputWrapper, Select as StyledSelect } from './newstyles';
import { useDropdownLogic } from './hooks/useDropdownLogic';
import SearchResults from './components/SearchResults';
import SearchLoader from './components/SearchLoader';
import useBaseInput from "../hooks/useBaseInput";
const RemoteSearch = props => {
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
  } = useBaseInput(props, 'RemoteSearch');
  const {
    selectOpen,
    focused,
    hovered,
    handleArrow,
    searchValue,
    selectedItem,
    setSearchValue,
    setSelectedItem,
    handleShowSelect,
    onChange
  } = useDropdownLogic(props, wrapperRef, onSearch, handle);
  const [loading, setLoading] = useState(false);
  const onSearch = useCallback(() => {
    if (typeof props.onSearch === 'function') {
      props.onSearch(searchValue, selectedItem);
    }
  }, [props, searchValue, selectedItem]);
  const {
    items = [],
    handle,
    showClearIcon = true
  } = props;
  const filteredItems = items.filter(item => {
    if (!searchValue) return true;
    const searchLower = searchValue.toLowerCase();
    const parts = searchLower.split(' ');
    return parts.some(part => item?.name?.toLowerCase().replace('ё', 'е').replace('й', 'и').includes(part.replace('ё', 'е').replace('й', 'и')));
  });
  const handleItemClick = (e, item) => {
    e.stopPropagation();
    if (typeof handle === 'function') {
      handle(item);
    }
    handleShowSelect(false);
    setSearchValue(item.name);
    setSelectedItem(item);
  };
  return /*#__PURE__*/React.createElement(Container, {
    dataid: "remote-search",
    style: getContainerStyle(),
    className: `${props.className}${props.disabled ? ' disabled' : ''}`
  }, /*#__PURE__*/React.createElement(InputWrapper, {
    className: getWrapperClasses(filteredItems),
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement(InputContainer, null, /*#__PURE__*/React.createElement(StyledInput, {
    selected: selectedItem ? JSON.stringify(selectedItem) : '',
    id: props.id,
    autoComplete: "off",
    disabled: props.disabled,
    style: getInputStyle(),
    className: props.className,
    type: props.type,
    name: getName(props.name),
    value: searchValue,
    placeholder: props.placeholder,
    onClick: () => handleShowSelect(true),
    onKeyPress: props.onKeyPress,
    onChange: onChange,
    onFocus: () => {
      setFocused(true);
      setHasError(false);
    }
  }), renderPlaceholder(), /*#__PURE__*/React.createElement(StyledSelect, {
    id: `${props.id}-select`,
    className: `${props.className} select`,
    select: selectOpen || focused
  }, /*#__PURE__*/React.createElement(SearchResults, {
    items: filteredItems,
    hoveredIndex: hovered,
    handleClick: handleItemClick,
    className: props.className,
    idPrefix: props.id
  }), !filteredItems.length && !loading && !selectedItem && /*#__PURE__*/React.createElement("div", {
    className: props.className
  }, /*#__PURE__*/React.createElement("span", null, searchValue ? 'Ничего не найдено' : 'Введите запрос'))), renderTooltipError(), /*#__PURE__*/React.createElement(SearchLoader, {
    loading: loading
  }))));
};
export default RemoteSearch;