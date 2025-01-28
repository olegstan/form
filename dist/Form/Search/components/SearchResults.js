import React from 'react';
import SearchItem from './SearchItem';
const SearchResults = ({
  items,
  hoveredIndex,
  handleClick,
  className,
  idPrefix
}) => /*#__PURE__*/React.createElement(React.Fragment, null, items.map((item, index) => /*#__PURE__*/React.createElement(SearchItem, {
  key: item.id + (item.type_id ? item.type_id : ''),
  item: item,
  hovered: hoveredIndex === index,
  onClick: e => handleClick(e, item),
  className: className,
  id: `${idPrefix}-${item.id}`
})));
export default SearchResults;