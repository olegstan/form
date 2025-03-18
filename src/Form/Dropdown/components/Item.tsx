import React from 'react';
//@ts-ignore
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
}) => {
    const renderName = () => {
        if (React.isValidElement(item.name)) {
            // Если item.name - React-элемент, рендерим его как есть
            return item.name;
        }
        // В противном случае рендерим как обычный текст
        return <span>{item.name}</span>;
    };

    return <StyledOption
        key={item.id}
        className={`${className} item`}
        id={id}
        onClick={onClick}
    >
        {renderName()}
    </StyledOption>
};

export default Item;
