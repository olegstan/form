import React from 'react';
import {StyledOption} from './styles';

const Item = ({ item, hovered, onClick, className, id }) => (
  <StyledOption
    key={item.id}
    className={`${className} item ${hovered ? 'hovered' : ''}`}
    id={id}
    onClick={onClick}
  >
    <span>{item.name}</span>
  </StyledOption>
);

export default Item;
