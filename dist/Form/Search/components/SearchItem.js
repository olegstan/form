import React from 'react';
import { Item } from './../newstyles';
const SearchItem = ({
  item,
  hovered,
  onClick,
  className,
  id
}) => /*#__PURE__*/React.createElement(Item, {
  key: item.id + (item.type_id ? item.type_id : ''),
  className: `${className} item ${hovered ? 'hovered' : ''}`,
  id: id,
  onClick: onClick
}, /*#__PURE__*/React.createElement("span", null, item.name));
export default SearchItem;