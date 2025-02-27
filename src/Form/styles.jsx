// styles/containerStyle.js
import styled, {css, keyframes} from "styled-components";
import React, {forwardRef} from "react";
import InputMask from "react-input-mask";
import {sharedInputStyle} from "./sharedStyles";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Миксин для автозаполнения в Chrome
export const webkitAutofillStyles = css`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.inputContainerBackground} inset !important;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.inputContainerBackground} inset !important;
    -webkit-text-fill-color: #fff !important;
    //color: #000000 !important;
    //-webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.inputContainerBackground} inset !important;
  }
`;

// Миксин для стилей в disabled-состоянии
const disabledStyles = css`
  background-color: ${({ theme }) => theme.inputContainerDisabledBackground} !important;
  ${webkitAutofillStyles} // чтобы в disabled-режиме тоже было корректно

  &:disabled, &.disabled {
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

  &.styled-input__container {
    border: 1px solid transparent;
    border-radius: 12px;
  }

  &.styled-input__container:has(.focused) {
    border: 1px solid #4378FF;
  }

  &.styled-input__container .styled-input__main-wrapper {
    height: 100%;
  }

  &.styled-input__container .styled-input__main-wrapper .placeholder {
    padding: 0;
    width: fit-content;
    font-size: 12px;
    top: 5px;
    line-height: 14px;
    text-align: start;
    left: 14px;
  }

  &.styled-input__container .styled-input__main-wrapper .arrow {
    height: 100%;
    align-self: center;
    justify-self: center;
    position: absolute;
    top: 0;
  }

  &.styled-input__container .styled-input__select-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0;
  }
  
  &.styled-input__container .styled-input__results-list {
    
  }


  &.styled-input__container .styled-input__pseudo-input,
  &.styled-input__container .styled-input__pseudo-input.input {
    position: absolute;
    bottom: 3px;
    left: 16px;
    background-color: transparent;
    width: fit-content;
    line-height: 18px;
    font-size: 14px;
  }

  &.styled-input__container .styled-input__pseudo-input > div > .sort-arrow {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-size: 1em;
    width: fit-content;
  }

  &.styled-input__container .styled-input__pseudo-input > div {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 5px;
  }

  &.styled-input__container .styled-input__pseudo-input > div {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 5px;
  }
  
  //смотрим что у инпута есть такой класс, значит надо менять border
  &:has(.focused) {
    z-index: 1000;
    // border: 1px solid #4378FF;
  }
  &:has(.error) {
    border: 1px solid #EF5E70;
  }
  
  ${({ disabled }) => disabled && disabledStyles}
`;

const placeholder = css`
  & .placeholder {
    pointer-events: none;
    line-height: 0.1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
    text-align: left;
    color: ${({ theme }) => theme.inputPlaceholderTextColor};
    width: 300px;
    transition: transform 0.25s, opacity 0.25s ease-in-out;
    transform-origin: 0 0;
    padding: 25px 12px;
    font-size: 14px;
    z-index: 1500;
  }

  // Если поле не пустое или в фокусе, то placeholder должен быть сверху 

  & .placeholder.active {
    transform: translate(0.25em, -15%) scale(0.8);
  }
`

export const InputContainerStyled = styled.div`
  background-color: transparent;
  outline: none;
  display: flex;
  flex: 1;
  padding: 0;
  position: relative;
  z-index: 100;
  border-radius: 12px;

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
    top: 16px;
    pointer-events: none;
  }
  
  img.arrow {
    position: absolute;
    right: 20px;
    top: 15px;
    width: 12px;
    height: 20px;
    pointer-events: none;
  }

  img.close {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
  
  img.loader {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;

    height: 48px;
    flex-basis: 48px;

    img, svg {
      position: absolute;
      top: 8px;
      height: 30px;
      width: 30px;
      right: -20px;
      animation: ${rotate} 2s linear infinite;
    }
  }
  
  ${placeholder};
`


export const StyledCheckbox = styled.div`
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

  & > span.rotate-container {
    border: 2px solid ${({theme}) => theme.checkMarkColor};
    height: 18px;
    width: 18px;
    box-sizing: border-box;
    margin-right: 10px;
    background-color: ${({theme}) => theme.checkMarkColor};
    border-radius: 6px;
    display: flex;
    position: relative;
  }

  & > span > span {
    display: block;
    position: absolute;
    transform: rotate(45deg);
    width: 7px;
    height: 11px;
    top: 1px;
    z-index: 1000;
    left: 5px;
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

export const StyledInput = styled.input`
  ${sharedInputStyle}
`
//чтобы рендерить не текст а Symbol(react.element)
export const StyledFakeInput = styled.div`
  ${sharedInputStyle}
`

export const MaskedStyledInput = styled(forwardRef((props, ref) => (
    <InputMask {...props} ref={ref}/>
)))`
  ${sharedInputStyle}
`;

export const StyledTextArea = styled.textarea`
  ${sharedInputStyle}

  width: 100%;
  resize: vertical;
  line-height: 18px;
  overflow-y: hidden;
  min-height: 57px;
  height: auto;
  font-weight: 500;
`


