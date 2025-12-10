import React, { useState } from 'react';
import Item from './Item';
//@ts-ignore
import {OptionsWrapper, ParentContainer, SearchInput, SearchInputWrapper} from "./styles";
import GroupItem from "./GroupItem";
//@ts-ignore
import SearchIcon from './../../../assets/ic_seach.svg';

const GroupResults = ({
                          id,
                          options,
                          handleClick,
                          className,
                          idPrefix,
                          active,
                          addButton,
                          searchable = false
                      }: {
    options: any[],
    handleClick: (event: React.MouseEvent<HTMLInputElement>, option: any) => void,
    className?: string,
    id?: string,
    idPrefix?: string,
    active?: boolean,
    addButton?: any,
    searchable?: boolean,
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filterOptions = (options: any[], query: string): any[] => {
        if (!query.trim()) return options;

        const lowerQuery = query.toLowerCase();

        return options.map(option => {
            // Если у опции есть children, фильтруем их
            if (option.children && option.children.length > 0) {
                const filteredChildren = option.children.filter((child: any) =>
                    child.name?.toLowerCase().includes(lowerQuery)
                );

                // Если есть подходящие дочерние элементы, возвращаем родителя с отфильтрованными детьми
                if (filteredChildren.length > 0) {
                    return {
                        ...option,
                        children: filteredChildren
                    };
                }
            }

            // Проверяем сам элемент
            if (option.name?.toLowerCase().includes(lowerQuery)) {
                return option;
            }

            return null;
        }).filter(Boolean);
    };

    const displayOptions = searchable ? filterOptions(options, searchQuery) : options;

    return (
        <ParentContainer>
            <OptionsWrapper
                active={active ?? false}
                id={id ? `${id}-select` : undefined}
                className={className}
                hasAddButton={!!addButton}
            >
                {active && addButton}
                {active && searchable && (
                    <SearchInputWrapper>
                        <img src={SearchIcon} alt="Search" />
                        <SearchInput
                            type="text"
                            placeholder="Поиск"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </SearchInputWrapper>
                )}
                {displayOptions.length === 0 ? (
                    <Item
                        key={'none'}
                        item={{id: null, name: searchable && searchQuery ? 'Ничего не найдено' : 'Нет элементов'}}
                        className={className}
                        id={`${idPrefix}-none`}
                    />
                ) : (
                    displayOptions.map((option: any, key: number) => (
                        <GroupItem
                            key={option.innerId ?? option.id}
                            item={option}
                            onClick={handleClick}
                            className={className}
                            id={`${idPrefix}-${option.id}`}
                        />
                    ))
                )}
            </OptionsWrapper>
        </ParentContainer>
    );
};

export default GroupResults;