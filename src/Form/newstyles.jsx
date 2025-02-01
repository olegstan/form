// styles/containerStyle.js
import styled, {css} from "styled-components";
import React, {forwardRef} from "react";
import InputMask from "react-input-mask";
import zindex from "../interface/zindex";

// Миксин для автозаполнения в Chrome
const webkitAutofillStyles = css`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.inputContainerBackground} inset !important;
  }
`;

// Миксин для стилей в disabled-состоянии
const disabledStyles = css`
  background-color: ${({ theme }) => theme.inputContainerDisabledBackground} !important;
  ${webkitAutofillStyles} // чтобы в disabled-режиме тоже было корректно

  &.disabled {
    background-color: ${({ theme }) => theme.inputContainerDisabledBackground};
  }
`;

export const Container = styled.div`
  background-color: ${({theme}) => theme.inputContainerBackground};
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({theme}) => theme.inputContainerBorder};
  margin: 15px 10px;
  flex: 1;
  border-radius: 8px;
  position: relative;
  
  ${({ disabled }) => disabled && disabledStyles}
`;


export const InputContainerStyled = styled.div`
  background-color: transparent;
  outline: none;
  display: flex;
  flex: 1;
  height: 46px;
  padding: 0;
  position: relative;
  z-index: 100;

  &.disabled {
    background-color: ${({theme}) => theme.inputContainerDisabledBackground};
  }

  img {
    z-index: 1000;
    cursor: pointer;
  }

  img.calendar {
    position: absolute;
    right: 16px;
    top: 14px;
    pointer-events: none;
  }

  img.close {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
`

export const Checkbox = styled.div`

`

export const placeholderActiveStyle = css`
  & + .placeholder{
    pointer-events: none;
    font-size: 10px;
    line-height: 0.1;
    display: block;
    width: 100%;
    position: absolute;
    top: 5px;
    left: 25px;
    user-select: none;
    text-align: left;
    color: ${({theme}) => theme.inputPlaceholderTextColor};
    z-index: 1000;
  }
  
  &::placeholder {
    font-size: 100%;
    transition: all 0.3s ease;
    color: transparent !important;
  }

  & + .placeholder {
    transition: transform .25s, opacity .25s ease-in-out;
    transform-origin: 0 0;
  }

  &:focus + .placeholder, & .placeholder.active {
    transform: translate(.25em, -15%) scale(.8);
  }

  &:not(textarea) {
    max-height: 4em;
  }

  & + .placeholder {
    padding: 25px 12px;
    font-size: 16px;
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

export const StyledInput = styled.input`
  ${sharedInputStyle}
`

export const MaskedStyledInput = styled(forwardRef((props, ref) => (
    <InputMask {...props} ref={ref}/>
)))`
  ${sharedInputStyle}
`;


