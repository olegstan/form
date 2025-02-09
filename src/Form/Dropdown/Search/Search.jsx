import React, {useCallback} from 'react';
import {Container, Input as StyledInput, InputContainer, InputWrapper, Select as StyledSelect} from './newstyles';
import useBaseInput from '../../hooks/useBaseInput';
import {useDropdownLogic} from '../hooks/useDropdownLogic';
// import SearchResults from '../components/SearchResults';
// import SearchLoader from '../components/SearchLoader';
import {ReactComponent as CloseImage} from '../../../assets/ic_close_only.svg';

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
    onChange,
  } = useDropdownLogic(props, wrapperRef, onSearch);

  const onSearch = useCallback(() => {
    if (typeof props.onSearch === 'function') {
      props.onSearch(searchValue, selectedItem);
    }
  }, [props, searchValue, selectedItem]);

  const { items = [], handle, selectStyle = {}, showClearIcon = true } = props;

  const filteredItems = items.filter((item) => {
    if (!searchValue) return true;
    const searchLower = searchValue.toLowerCase();
    const parts = searchLower.split(' ');
    return parts.some((part) =>
      item?.name?.toLowerCase().replace('ё', 'е').replace('й', 'и').includes(part.replace('ё', 'е').replace('й', 'и'))
    );
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

  const empty = !searchValue || (typeof searchValue === 'string' && !searchValue.length);

  return null;

  // return (
  //   <Container dataid="search" style={getContainerStyle()} className={props.className}>
  //     <InputWrapper className={getWrapperClasses()} style={getWrapperStyle()} onClick={(e) => e.stopPropagation()}>
  //       <InputContainer ref={wrapperRef}>
  //         <StyledInput
  //           selected={selectedItem}
  //           id={props.id}
  //           autoComplete="off"
  //           disabled={props.disabled}
  //           style={getInputStyle()}
  //           className={props.className}
  //           type={props.type}
  //           name={getName(props.name)}
  //           value={searchValue}
  //           placeholder={props.placeholder}
  //           onClick={() => handleShowSelect(true)}
  //           onKeyPress={props.onKeyPress}
  //           onChange={onChange}
  //           onFocus={() => {
  //             setFocused(true);
  //             setHasError(false);
  //             handleShowSelect(true);
  //           }}
  //         />
  //         {renderPlaceholder()}
  //         <StyledSelect
  //           id={`${props.id}-select`}
  //           className={`${props.className} select`}
  //           select={selectOpen || focused}
  //           style={selectStyle}
  //           onClick={(e) => e.stopPropagation()}
  //         >
  //           <SearchResults
  //             items={filteredItems}
  //             hoveredIndex={hovered}
  //             handleClick={handleItemClick}
  //             className={props.className}
  //             idPrefix={props.id}
  //           />
  //           {!filteredItems.length && !selectedItem && (
  //             <div className={props.className}>
  //               <span>{searchValue ? 'Ничего не найдено' : 'Введите запрос'}</span>
  //             </div>
  //           )}
  //         </StyledSelect>
  //         {!empty && showClearIcon && !props.disabled && (
  //           <img
  //             style={props.clearImageStyle}
  //             className="close"
  //             src={CloseImage}
  //             alt=""
  //             onClick={() => {
  //               setSearchValue('');
  //               setHasError(false);
  //               onSearch();
  //               if (typeof handle === 'function') {
  //                 handle(null);
  //               }
  //             }}
  //           />
  //         )}
  //         <SearchLoader loading={props.loading} />
  //         {renderTooltipError()}
  //       </InputContainer>
  //     </InputWrapper>
  //   </Container>
  // );
}
