import styled from 'styled-components'
import zindex from "../../../interface/zindex";

export const StyledOption = styled.div`
  align-items: center;
  color: ${({theme}) => theme.selectOptionTextColor};
  line-height: 24px;
  display: flex;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  text-align: left;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100%;

  background-color: ${({theme}) => theme.inputContainerDisabledBackground}

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
    background-color: ${({ theme }) => theme.selectOptionBackgroundHovererColor};
    border-radius: 8px;
  }
`

export const OptionsWrapper = styled.div`
  position: absolute;
  border-radius: 0 0 4px 4px;
  top: 50px;
  left: 0;
  width: 100%;
  box-shadow: 0 20px 48px ${({theme}) => theme.selectShadowColor};
  background-color: ${({theme}) => theme.selectWrapperOptionBackgroundColor};
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 250px;
  z-index: ${zindex.input};

  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({theme}) => theme.selectScrollBarColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(10, 10, 10, 0.2);
    border-radius: 4px;
  }
`
