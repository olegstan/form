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
  min-width: 0;

  //смотрим что у инпута есть такой класс, значит надо менять border
  &:has(.focused) {
    z-index: 1000;
    border: 1px solid #4378FF;
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
    width: 95%;
    transition: transform 0.25s, opacity 0.25s ease-in-out;
    transform-origin: 0 0;
    padding: 25px 12px;
    font-size: 14px;
    z-index: 1500;

    /* Адаптация для ноутбуков (экраны от 1024px до 1440px) */
    @media (min-width: 1024px) and (max-width: 1440px) {
      padding: 25px 10px;
      font-size: 13px;
    }

    /* Адаптация для больших ноутбуков и мониторов (от 1440px) */
    @media (min-width: 1440px) {
      padding: 25px 14px;
      font-size: 15px;
    }

    /* Адаптация для маленьких ноутбуков (от 768px до 1024px) */
    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 25px 10px;
      font-size: 12px;
    }
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
  min-width: 0;

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
    right: 10px;
    top: 10px;
    cursor: pointer;

    height: 30px;
    width: 30px;
    animation: ${rotate} 2s linear infinite;
  }
  
  ${placeholder};
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


