import React from 'react';
//@ts-ignore
import {StyledGroupOption, StyledSubItemsContainer, StyledGroupTitle} from './styles';
import SubItem from "./SubItem";

const GroupItem = ({
                       item,
                       onClick,
                       className,
                       id,
                       selectedValue
                   } : {
    item: any,
    className?: string,
//@ts-ignore
    onClick?: (event: MouseEvent<HTMLInputElement, MouseEvent>, option: any) => void,
    id?: string,
    selectedValue?: any,
}) => (
    <StyledGroupOption
        key={item.id}
        className={`${className} item`}
        id={id}
    >
        <StyledGroupTitle>
            <span className="group-name">{item.name}</span>
            <span className="group-description">{item.description}</span>
        </StyledGroupTitle>
        <StyledSubItemsContainer>
            {item?.items?.map((subOption: any, subKey: number) => (
                <SubItem
                    key={subKey}
                    id={subOption?.id + '-subitem'}
                    item={subOption}
                    // @ts-ignore
                    onClick={(e: any) => onClick(e, subOption)}
                    className={className}
                    isSelected={selectedValue === subOption.id}
                />
            ))}
        </StyledSubItemsContainer>
    </StyledGroupOption>
);

export default GroupItem;