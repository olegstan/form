import React, {Fragment} from 'react';
import Item from './Item';
import {OptionsWrapper} from "./styles";
import SubItem from "./SubItem";
import GroupItem from "./GroupItem";

const GroupResults = ({
                          id,
                          options,
                          handleClick,
                          className,
                          idPrefix,
                          active
}: {
    options: any[],
    handleClick: (event: React.MouseEvent<HTMLInputElement>, option: any) => void,
    className?: string,
    id?: string,
    idPrefix?: string,
    active?: boolean,
}) => (
    <OptionsWrapper active={active} id={id ? `${id}-select` : undefined} className={className}>
        {options.length === 0 ? (<Item
                key={'none'}
                item={{id: null, name: 'Нет элементов'}}
                className={className}
                id={`${idPrefix}-none`}
            />)
            :
            options.map((option: any, key: number) => (
                <GroupItem
                    key={key}
                    item={option}
                    onClick={handleClick}
                    className={className}
                    id={`${idPrefix}-${option.id}`}
                />
            ))}
    </OptionsWrapper>
);

export default GroupResults;
