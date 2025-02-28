import React from 'react';
import Item from './Item';
import {OptionsWrapper} from "./styles";

const GroupResults = ({
                          id,
                          options,
                          handleClick,
                          className,
                          idPrefix,
                          active
}: {
    options: any[],
    handleClick: (event: React.MouseEvent<HTMLInputElement>, option: any) => {},
    className?: string,
    id?: string,
    idPrefix?: string,
    active?: boolean,
}) => (
    <OptionsWrapper id={id ? `${id}-select` : undefined}>
        {options.length === 0 ? (<Item
                key={'none'}
                item={{id: null, name: 'Нет элементов'}}
                className={className}
                id={`${idPrefix}-none`}
            />)
            :
            options.map((option: any) => (
                <Item
                    key={option.id}
                    item={option}
                    onClick={(e: any) => handleClick(e, option)}
                    className={className}
                    id={`${idPrefix}-${option.id}`}
                />
            ))}
    </OptionsWrapper>
);

export default GroupResults;
