import zindex from "../interface/zindex";
import {css} from "styled-components";
import {webkitAutofillStyles} from "./styles";

export const sharedInputStyle = css`
  width: 100%;
  line-height: 13px;
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

  //скрытый placeholder который идёт по умолчанию
  &::placeholder {
    font-size: 100%;
    transition: all 0.3s ease;
    color: transparent !important;
  }
  
  &:focus {
    outline: 0;
  }
  
  ${webkitAutofillStyles}
`