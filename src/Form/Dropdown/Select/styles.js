import styled from 'styled-components'
import {placeholderActiveStyle} from "../../sharedStyles";
import zindex from "../../../interface/zindex";

export const StyledSelect = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  line-height: 13px;
  height: 19px;
  user-select: none;
  color: ${({theme}) => theme.inputTextColor};
  z-index: ${zindex.input};
  transition: border-color .25s ease-in-out;
  border: none;
  background-color: transparent;
  padding: 24px 12px 8px 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  border-radius: 6px;
  
  //тут может быть div если вдруг вместо текста передали иконки или друглй элемент
  & > input, & > div.input{
    width: 100%;
    pointer-events: none;
    color: ${({theme}) => theme.selectTextColor};
    background-color: ${({theme}) => theme.selectBackgroundColor};
    padding: 0 !important;
  }

  ${placeholderActiveStyle}
`