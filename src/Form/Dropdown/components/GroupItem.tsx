import React from 'react';
//@ts-ignore
import {StyledGroupOption, StyledSubItemsContainer} from './styles';
import SubItem from "./SubItem";

const GroupItem = ({
                item,
                       onClick,
                className,
                id
} : {
  item: any,
  className?: string,
//@ts-ignore
  onClick?: (event: MouseEvent<HTMLInputElement, MouseEvent>, option: any) => void,
  id?: string,
}) => (
  <StyledGroupOption
    key={item.id}
    className={`${className} item`}
    id={id}
    onClick={onClick}
  >
      <span>{item.name}</span>
      <StyledSubItemsContainer>
          {item?.items?.map((subOption: any, subKey: number) => (
              <SubItem
                  key={subKey}
                  item={subOption}
                  // @ts-ignore
                  onClick={(e: any) => onClick(e, subOption)}
                  className={className}
              />
          ))}
      </StyledSubItemsContainer>
  </StyledGroupOption>
);

export default GroupItem;
