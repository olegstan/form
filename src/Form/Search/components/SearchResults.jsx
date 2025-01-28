import React from 'react';
import SearchItem from './SearchItem';

const SearchResults = ({ items, hoveredIndex, handleClick, className, idPrefix }) => (
  <>
    {items.map((item, index) => (
      <SearchItem
        key={item.id + (item.type_id ? item.type_id : '')}
        item={item}
        hovered={hoveredIndex === index}
        onClick={(e) => handleClick(e, item)}
        className={className}
        id={`${idPrefix}-${item.id}`}
      />
    ))}
  </>
);

export default SearchResults;
