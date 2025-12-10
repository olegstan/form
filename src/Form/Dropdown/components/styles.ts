import zindex from "../../../interface/zindex";
// @ts-ignore
import styled from 'styled-components';
import {DefaultTheme} from "../../DefaultTheme";

interface OptionsWrapperProps {
    active: boolean;
    theme: DefaultTheme;
}


export const StyledSubItemsContainer = styled.div<{ theme: DefaultTheme }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const StyledGroupTitle = styled.div<{ theme: DefaultTheme }>`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;

    .group-name {
        font-size: 13px;
        font-weight: 600;
        color: ${({theme}: {theme: DefaultTheme}) => theme.groupSelectTitleColor || '#000'};
        margin-bottom: 2px;
    }

    .group-description {
        font-size: 12px;
        font-weight: 400;
        color: ${({theme}: {theme: DefaultTheme}) => theme.subItemTextColor || '#666'};
        opacity: 0.7;
    }
`;

export const StyledGroupOption = styled.div<{ theme: DefaultTheme }>`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: ${({theme}: {theme: DefaultTheme}) => theme.groupSelectBackground || '#f5f5f5'};
    margin-bottom: 8px;

    &:first-child {
        border-radius: 8px 8px 0 0;
    }

    &:last-child {
        border-radius: 0 0 8px 8px;
    }

    &:only-child {
        border-radius: 8px;
    }
`;

export const StyledSubOptionContent = styled.div<{ hasSum: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

export const StyledSubOptionLeft = styled.div<{ theme: DefaultTheme }>`
    display: flex;
    flex-direction: column;
    flex: ${({ }) => '1 1 70%'};
    min-width: 0;

    .item-name {
        font-size: 14px;
        font-weight: 500;
        color: ${({theme}: {theme: DefaultTheme}) => theme.subItemTextColor || '#0066cc'};
        margin-bottom: 2px;
    }

    .item-description {
        font-size: 12px;
        font-weight: 400;
        color: ${({theme}: {theme: DefaultTheme}) => theme.subItemTextColor || '#666'};
        opacity: 0.7;
    }
`;

export const StyledSubOptionRight = styled.div<{ theme: DefaultTheme }>`
    flex: 0 0 30%;
    text-align: right;
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}: {theme: DefaultTheme}) => theme.subItemTextColor || '#000'};
    white-space: nowrap;
`;

export const StyledSubOption = styled.div<{ theme: DefaultTheme }>`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${({theme}: {theme: DefaultTheme}) => theme.subItemHoverBackground || 'rgba(0, 0, 0, 0.05)'};
        border-radius: 6px;
    }
`;

export const StyledOption = styled.div<{ theme: DefaultTheme }>`
    align-items: center;
    color: ${({theme}: {theme: DefaultTheme}) => theme.selectOptionTextColor};
    line-height: 24px;
    display: flex;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    user-select: none;
    text-align: left;
    flex-wrap: wrap;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    background-color: ${({theme}: {theme: DefaultTheme}) => theme.inputDisabledContainerBackground};

    span {
        text-align: left;
        font-size: 14px;
        width: 100%;
        padding: 4px 8px;
        margin: 10px 0;
    }

    &:last-child span {
        border-bottom: none;
    }

    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    span:hover {
        background-color: ${({theme}: {theme: DefaultTheme}) => theme.selectOptionBackgroundHovererColor};
        border-radius: 8px;
    }
`;

// @ts-ignore
export const StyledCheckboxOption = styled.div<{ theme: DefaultTheme }>`
    align-items: center;
    color: ${({theme}: {theme: DefaultTheme}) => theme.selectOptionTextColor};
    line-height: 24px;
    display: flex;
    padding: 0 15px;
    font-size: 14px;
    font-weight: 500;
    user-select: none;
    text-align: left;
    flex-wrap: wrap;
    cursor: pointer;
    transition: backtground-color 0.2s ease, transform 0.2s ease;

    background-color: ${({theme}: {theme: DefaultTheme}) => theme.inputDisabledContainerBackground};

    & > span {
        text-align: left;
        font-size: 14px;
        width: 100%;
        padding: 4px 8px;
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
    }

    &:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    & > span:hover {
        //@ts-ignore
        background-color: ${({theme}: {theme: DefaultTheme}) => theme.selectOptionBackgroundHovererColor || ''};
        border-radius: 8px;
    }
`;

export const ParentContainer = styled.div<{ theme: DefaultTheme }>`
    position: relative;
`;

interface OptionsWrapperProps {
    active: boolean;
    hasAddButton?: boolean;
}

export const SearchInputWrapper = styled.div`
    position: relative;
    width: calc(100% - 32px);
    border-radius: 12px;
    padding: 10px 16px 0 16px;
    display: flex;
    
    img {
        position: absolute;
        left: 30px;
        top: 30px;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        pointer-events: none;
        opacity: 0.5;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    padding: 8px 12px 8px 40px;
    border: 1px solid rgba(215, 219, 224, 1);
    border-radius: 12px;
    font-size: 14px;
    outline: none;
    background-color: #fff;
    
    &::placeholder {
        color: #000;
    }
    
    &:focus {
        border-color: #4378FF;
    }
`;

// @ts-ignore
export const OptionsWrapper = styled.div<OptionsWrapperProps>`
    position: absolute;
    border-radius: 0 0 0 12px;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    box-shadow: 0 20px 48px ${({ theme }) => theme.selectShadowColor};
    background-color: ${({ theme }) => theme.selectWrapperOptionBackgroundColor};
    overflow-y: auto;
    overflow-x: hidden;
    z-index: ${zindex.input};
    display: flex;
    flex-direction: column;
    max-height: 250px;

    min-height: ${({ hasAddButton }) => (hasAddButton ? '120px' : 'auto')};

    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};

    opacity: ${({ active }) => (active ? 1 : 0)};
    transform: ${({ active }) =>
            active ? 'translateY(0)' : 'translateY(-10px)'};
    transition: ${({ active }) =>
            active ? 'opacity 0.35s ease, transform 0.35s ease' : 'none'};

    &::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.selectScrollThumbColor};
        border-radius: 0 0 8px 0;
        border: 2px solid transparent;
        background-clip: padding-box;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.selectScrollThumbHoverColor};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
`;