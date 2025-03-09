import React from 'react';
//@ts-ignore
import {StyledSubOption} from './styles';

const SubItem = ({
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
  <StyledSubOption
    key={item.id}
    className={`${className} item`}
    id={id}
    onClick={onClick}
  >
    <span>{item.name}</span>
  </StyledSubOption>
);

export default SubItem;
