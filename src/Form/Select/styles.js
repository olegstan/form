import styled from 'styled-components'
import {placeholderActiveStyle, sharedOptionStyle, sharedOptionsWrapperStyle} from "./../sharedStyles";
import zindex from "../../interface/zindex";

export const StyledOption = styled.div`
  ${sharedOptionStyle}
`

export const OptionsWrapper = styled.div`
  ${sharedOptionsWrapperStyle}
`

export const StyledSelect = styled.div`
  width: 100%;
  cursor: pointer;
  height: 50px;
  position: relative;
  background-color: ${({theme}) => theme.selectBackgroundColor};
  border-radius: 7px;
  
  & > input{
    width: 100%;
    pointer-events: none;
    color: ${({theme}) => theme.selectTextColor};
  }
  
  // appearance: none;
  // width: 100%;
  // line-height: 13px;
  // height: 50px;
  // user-select: none;
  // color: ${({theme}) => theme.inputTextColor};
  // z-index: ${zindex.input};
  // transition: border-color .25s ease-in-out;
  // border: none;
  // background-color: transparent;
  // padding: 24px 12px 8px 14px;
  // font-size: 14px;
  // font-style: normal;
  // font-weight: 500;
  // text-align: left;
  // border-radius: 6px;
  //
  // &:focus {
  //   outline: 0;
  // }
  //
  // ${placeholderActiveStyle}
`