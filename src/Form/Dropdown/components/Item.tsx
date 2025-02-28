import React from 'react';
import {StyledOption} from './styles';

const Item = ({
                item,
                onClick,
                className,
                id
} : {
  item: any,
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
  className?: string,
  id?: string,
}) => (
  <StyledOption
    key={item.id}
    className={`${className} item`}
    id={id}
    onClick={onClick}
  >
    <span>{item.name}</span>
  </StyledOption>
);

export default Item;
