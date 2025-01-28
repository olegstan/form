import React, { useCallback } from 'react';
import { Container, Input as StyledInput, InputContainer, InputWrapper, StyledSelect } from './newstyles';
import useBaseInput from '../useBaseInput';
import { useDropdownLogic } from './useDropdownLogic';
import SearchResults from './SearchResults';
import SearchLoader from './SearchLoader';
export default function Search(props) {
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
  } = useBaseInput(props, 'Search');
  const {
    selectOpen,
    focused,
    setFocused,
    hovered,
    searchValue,
    selectedItem,
    setSearchValue,
    setSelectedItem,
    handleShowSelect,
    onChange
  } = useDropdownLogic(props, wrapperRef, onSearch);
  const onSearch = useCallback(() => {
    if (typeof props.onSearch === 'function') {
      props.onSearch(searchValue, selectedItem);
    }
  }, [props, searchValue, selectedItem]);
  const {
    items = [],
    handle,
    selectStyle = {},
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
  const empty = !searchValue || typeof searchValue === 'string' && !searchValue.length;
  return /*#__PURE__*/React.createElement(Container, {
    dataid: "search",
    style: getContainerStyle(),
    className: props.className
  }, /*#__PURE__*/React.createElement(InputWrapper, {
    className: getWrapperClasses(),
    style: getWrapperStyle(),
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(InputContainer, {
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement(StyledInput, {
    selected: selectedItem,
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
      handleShowSelect(true);
    }
  }), renderPlaceholder(), /*#__PURE__*/React.createElement(StyledSelect, {
    id: `${props.id}-select`,
    className: `${props.className} select`,
    select: selectOpen || focused,
    style: selectStyle,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(SearchResults, {
    items: filteredItems,
    hoveredIndex: hovered,
    handleClick: handleItemClick,
    className: props.className,
    idPrefix: props.id
  }), !filteredItems.length && !selectedItem && /*#__PURE__*/React.createElement("div", {
    className: props.className
  }, /*#__PURE__*/React.createElement("span", null, searchValue ? 'Ничего не найдено' : 'Введите запрос'))), !empty && showClearIcon && !props.disabled && /*#__PURE__*/React.createElement("img", {
    style: props.clearImageStyle,
    className: "close",
    src: require('./../../assets/ic_close_only.svg').default,
    alt: "",
    onClick: () => {
      setSearchValue('');
      setHasError(false);
      onSearch();
      if (typeof handle === 'function') {
        handle(null);
      }
    }
  }), /*#__PURE__*/React.createElement(SearchLoader, {
    loading: props.loading
  }), renderTooltipError())));
}