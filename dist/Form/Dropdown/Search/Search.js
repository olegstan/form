"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Search;
var _react = _interopRequireWildcard(require("react"));
var _newstyles = require("./newstyles");
var _useBaseInput2 = _interopRequireDefault(require("../../hooks/useBaseInput"));
var _useDropdownLogic2 = require("../hooks/useDropdownLogic");
var _ic_close_only = require("../../../assets/ic_close_only.svg");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// import SearchResults from '../components/SearchResults';
// import SearchLoader from '../components/SearchLoader';

function Search(props) {
  var _useBaseInput = (0, _useBaseInput2["default"])(props, 'Search'),
    wrapperRef = _useBaseInput.wrapperRef,
    hasError = _useBaseInput.hasError,
    setHasError = _useBaseInput.setHasError,
    renderPlaceholder = _useBaseInput.renderPlaceholder,
    renderTooltipError = _useBaseInput.renderTooltipError,
    getContainerStyle = _useBaseInput.getContainerStyle,
    getWrapperStyle = _useBaseInput.getWrapperStyle,
    getInputStyle = _useBaseInput.getInputStyle,
    getWrapperClasses = _useBaseInput.getWrapperClasses,
    getName = _useBaseInput.getName;
  var _useDropdownLogic = (0, _useDropdownLogic2.useDropdownLogic)(props, wrapperRef, onSearch),
    selectOpen = _useDropdownLogic.selectOpen,
    focused = _useDropdownLogic.focused,
    setFocused = _useDropdownLogic.setFocused,
    hovered = _useDropdownLogic.hovered,
    searchValue = _useDropdownLogic.searchValue,
    selectedItem = _useDropdownLogic.selectedItem,
    setSearchValue = _useDropdownLogic.setSearchValue,
    setSelectedItem = _useDropdownLogic.setSelectedItem,
    handleShowSelect = _useDropdownLogic.handleShowSelect,
    onChange = _useDropdownLogic.onChange;
  var onSearch = (0, _react.useCallback)(function () {
    if (typeof props.onSearch === 'function') {
      props.onSearch(searchValue, selectedItem);
    }
  }, [props, searchValue, selectedItem]);
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    handle = props.handle,
    _props$selectStyle = props.selectStyle,
    selectStyle = _props$selectStyle === void 0 ? {} : _props$selectStyle,
    _props$showClearIcon = props.showClearIcon,
    showClearIcon = _props$showClearIcon === void 0 ? true : _props$showClearIcon;
  var filteredItems = items.filter(function (item) {
    if (!searchValue) return true;
    var searchLower = searchValue.toLowerCase();
    var parts = searchLower.split(' ');
    return parts.some(function (part) {
      var _item$name;
      return item === null || item === void 0 || (_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().replace('ё', 'е').replace('й', 'и').includes(part.replace('ё', 'е').replace('й', 'и'));
    });
  });
  var handleItemClick = function handleItemClick(e, item) {
    e.stopPropagation();
    if (typeof handle === 'function') {
      handle(item);
    }
    handleShowSelect(false);
    setSearchValue(item.name);
    setSelectedItem(item);
  };
  var empty = !searchValue || typeof searchValue === 'string' && !searchValue.length;
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