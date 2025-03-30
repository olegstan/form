import React, {useEffect, useState} from 'react';
import Item from './Item';
//@ts-ignore
import {OptionsWrapper, ParentContainer} from "./styles";
import GroupItem from "./GroupItem";

const GroupResults = ({
                          id,
                          options,
                          handleClick,
                          className,
                          idPrefix,
                          active,
                          addButton
}: {
    options: any[],
    handleClick: (event: React.MouseEvent<HTMLInputElement>, option: any) => void,
    className?: string,
    id?: string,
    idPrefix?: string,
    active?: boolean,
    addButton: any,
}) => {
    return <ParentContainer>
        {active && addButton}
        <OptionsWrapper active={active ?? false} id={id ? `${id}-select` : undefined} className={className}>
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
    </ParentContainer>
};

export default GroupResults;
