import zindex from "../interface/zindex";
import {css} from "styled-components";

export const placeholderActiveStyle = css`
  & + .placeholder{
    pointer-events: none;
    font-size: 10px;
    line-height: 0.1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
    text-align: left;
    color: ${({theme}) => theme.inputPlaceholderTextColor};
    z-index: 1000;
    width: 300px;
  }
  
  //скрытый placeholder который идёт по умолчанию
  &::placeholder {
    font-size: 100%;
    transition: all 0.3s ease;
    color: transparent !important;
  }

  & + .placeholder {
    transition: transform .25s, opacity .25s ease-in-out;
    transform-origin: 0 0;
  }

  //если поле не пустое или в фокусе, то значит placeholder должен быть сверху 
  &:focus + .placeholder, & + .placeholder.active {
    transform: translate(.25em, -15%) scale(.8);
  }

  &:not(textarea) {
    max-height: 4em;
  }

  & + .placeholder {
    padding: 25px 12px;
    font-size: 14px;
    text-align: left;
    z-index: 1500;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
  }
`

export const sharedInputStyle = css`
  width: 100%;
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

  &:focus {
    outline: 0;
  }
  
  ${placeholderActiveStyle}
`