import styled, {keyframes} from 'styled-components'
import zindex from "../../../interface/zindex";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledOption = styled.div`
  align-items: center;
  color: #4378FF;
  line-height: 24px;
  display: flex;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  text-align: left;
  flex-wrap: wrap;
  cursor: pointer;

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
  border-radius: 0 0 4px 4px;
  top: 50px;
  left: 0;
  width: 100%;
  box-shadow: 0 20px 48px ${({theme}) => theme.selectShadowColor};
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

export const StyledLoader = styled.div`
  height: 48px;

  flex-basis: 48px;
  position: absolute;
  right: 36px;

  img, svg {
    position: absolute;
    top: 8px;
    height: 30px;
    width: 30px;
    right: -20px;
    animation: ${rotate} 2s linear infinite;
  }
`