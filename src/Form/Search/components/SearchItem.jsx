import React from 'react';
import {Item} from './../newstyles';

const SearchItem = ({ item, hovered, onClick, className, id }) => (
  <Item
    key={item.id + (item.type_id ? item.type_id : '')}
    className={`${className} item ${hovered ? 'hovered' : ''}`}
    id={id}
    onClick={onClick}
  >
    <span>{item.name}</span>
  </Item>
);

export default SearchItem;
