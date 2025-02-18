import React from 'react';
import Item from './Item';
import {OptionsWrapper} from "./styles";

const Results = ({id, options, handleClick, className, idPrefix, active}) => (
    <OptionsWrapper active={active} id={id ? `${id}-select` : undefined}>
        {options.length === 0 ? (<Item
                key={'none'}
                item={{id: null, name: 'Нет элементов'}}
                className={className}
                id={`${idPrefix}-none`}
            />)
            :
            options.map((option) => (
                <Item
                    key={option.id}
                    item={option}
                    onClick={(e) => handleClick(e, option)}
                    className={className}
                    id={`${idPrefix}-${option.id}`}
                />
            ))}
    </OptionsWrapper>
);

export default Results;
