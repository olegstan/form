import React from 'react';
//@ts-ignore
import {StyledSubOption, StyledSubOptionContent, StyledSubOptionLeft, StyledSubOptionRight} from './styles';

const SubItem = ({
                     item,
                     onClick,
                     className,
                     id,
                     isSelected = false
                 } : {
    item: any,
    onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
    className?: string,
    id?: string,
    isSelected?: boolean,
}) => {
    const renderName = () => {
        if (React.isValidElement(item.name)) {
            return item.name;
        }
        return <span className="item-name">{item.name}</span>;
    };

    const renderDescription = () => {
        if (!item.description) return null;
        if (React.isValidElement(item.description)) {
            return item.description;
        }
        return <span className="item-description">{item.description}</span>;
    };

    return <StyledSubOption
        key={item.id}
        className={`${className} item`}
        id={id}
        onClick={onClick}
        isSelected={isSelected}
    >
        <StyledSubOptionContent hasSum={!!item.sum}>
            <StyledSubOptionLeft>
                {renderName()}
                {renderDescription()}
            </StyledSubOptionLeft>
            {item.sum !== undefined && (
                <StyledSubOptionRight>
                    {item.sum}
                </StyledSubOptionRight>
            )}
        </StyledSubOptionContent>
    </StyledSubOption>
};

export default SubItem;