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

  //смотрим что у инпута есть такой класс, значит надо менять border
  &:has(.focused) {
    border: 2px solid #4378FF;
  }
  &:has(.error) {
    border: 2px solid #EF5E70;
  }
  
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
  flex: 1;
  display: flex;
  padding: 5px 12px;
  align-items: center;
  color: ${({theme}) => theme.checkMarkColor};
  cursor: pointer;
  transition: opacity 0.3s;
  margin: 0;
  user-select: none;
  

  & > div {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0;
    color: #E9E9EA;
  }

  & > input {
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -10;
    position: absolute;
  }

  & > span {
    border: 2px solid ${({theme}) => theme.checkMarkColor};
    height: 18px;
    width: 18px;
    box-sizing: border-box;
    margin-right: 10px;
    background-color: ${({theme}) => theme.checkMarkColor};
    border-radius: 6px;
    display: flex;
  }

  & > span > span {
    display: block;
    position: relative;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    width: 7px;
    height: 11px;
    top: 1px;
    z-index: 1000;
    left: 4px;
    box-sizing: border-box;
  }

  & > input:checked + span {
    background-color: ${({theme}) => theme.checkboxColor};
    border: 2px solid ${({theme}) => theme.checkboxColor};
  }

  & > input:checked + span > span {
    border-bottom: 3px solid ${({theme}) => theme.checkMarkColor};
    border-right: 3px solid ${({theme}) => theme.checkMarkColor};
  }

  &:hover {
    opacity: 0.7;
  }
`

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


