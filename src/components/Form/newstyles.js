import React from 'react';
import styled, {css, keyframes} from 'styled-components'
import InputMask from "react-input-mask";
import {NavLink} from 'react-router-dom'
import Flatpickr from "react-flatpickr";
import zindex from '../interface/zindex'

export const Body = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0;

  color: #000000;

  &.bold {
    font-weight: 600;
  }

  &.green {
    color: #7ED057 !important;
  }

  &.black {
    color: #000 !important;
  }

  &.red {
    color: #EF5E70 !important;
  }

  &.grey {
    color: #7B7B7B !important;
  }


  ${props => props.left && `
     text-align: left;
  `}
  ${props => props.center && `
     text-align: center;
  `}
  ${props => props.right && `
     text-align: right;
  `}
  ${props => props.black && `
    color: #000;
  `}
  ${props => props.grey && `
    color: #7F818D;
  `}
  ${props => props.red && `
    color: #EF5E70;
  `}
  ${props => props.green && `
    color: #7ED057;
  `}
  ${props => props.full && `
    flex-basis: 100%;
  `}
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const placeholderStyle = css`
  label.placeholder {
    font-size: 12px;
    line-height: 0.1;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none;
    z-index: ${zindex.placeholder};
    color: #7b7b7b;
    font-style: normal;
    font-weight: 500;
    width: 300px;
    text-align: left;
    pointer-events: none;

    ${props => props.size === 'small' && `
      display: none;
    `}
  }
  
  &.style1{
    label.placeholder {
      color: #6F7080;
    }
  }
`

export const sharedCheckboxStyle = css`
  flex-basis: 50%;
  align-items: center;
  color: #000;
  transition: all .3s ease;
  line-height: 40px;
  display: flex;
  padding: 0;
  box-sizing: border-box;


  &:last-child {
    border-bottom: 0;
  }

  //&:hover {
  //  background-color: #bdc4e5;
  //  border-bottom: 1px solid #FE9347;
  //}

  div {
    display: flex;
    align-items: center;
  }

  input {
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -10;
    position: absolute;
  }

  input:checked + .rotate-container {
    background-color: #4378FF;
    border: 2px solid #4378FF;
  }

  input:checked + .rotate-container .rotate {
    border-bottom: 3px solid white;
    border-right: 3px solid white;
  }

  label {
    margin: 7px 5px 0 0;
    cursor: pointer;
    user-select: none;
  }

  .text {
    transition: 0.22s ease-in-out;
    line-height: 29px;
    margin-left: 5px;
    cursor: pointer;
    font-size: 14px;
    padding: 2px 0 0 0;
    user-select: none;
  }

  .rotate-container {
    border: 2px solid #D7DBE0;
    height: 18px;
    width: 18px;
    display: inline-block;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: #fff;
  }

  .rotate-container > .rotate {
    display: block;
    position: relative;
    transform: rotate(45deg);
    width: 7px;
    height: 11px;
    top: 0;
    z-index: 100000;
    left: 3px;
    box-sizing: border-box;
  }
`

export const placeholderActiveStyle = css`
  &::placeholder {
    font-size: 100%;
    transition: all 0.3s ease;
    color: transparent !important;
  }

  & + .placeholder {
    transition: transform .25s, opacity .25s ease-in-out;
    transform-origin: 0 0;
  }

  &:focus + .placeholder, &:not(:placeholder-shown) + .placeholder, & .placeholder.active {
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

  &.style1::placeholder{
    color: transparent !important;
  }

  &.style1 + .placeholder {
    transition: transform .25s, opacity .25s ease-in-out;
    transform-origin: 0 0;
  }

  &.style1:focus + .placeholder, &.style1:not(:placeholder-shown) + .placeholder, &.style1 .placeholder.active {
    transform: translate(.25em, -15%) scale(.8);
  }

  &.style1:not(textarea) {
    max-height: 4em;
  }

  &.style1 + .placeholder {
    padding: 25px 12px;
    font-size: 16px;
    text-align: left;
    z-index: 1500;
  }

  &.style1:-webkit-autofill,
  &.style1:-webkit-autofill:hover,
  &.style1:-webkit-autofill:focus,
  &.style1:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
  }
`

export const errorStyle = css`
  background-color: #fff;
  box-shadow: rgb(38 38 38 / 4%) 0px 1px 2px, rgb(38 38 38 / 16%) 0px 4px 8px;
  width: 276px;
  display: block;
  border-radius: 16px;
  padding: 20px;
  font-size: 14px;
`

export const sharedSearchContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: content-box;
  flex: 1;
  margin: 15px 10px;
  width: 100%;
  min-width: 100px;
  border-radius: 8px;
  position: relative;

  &.style1 .select, &.style1 .item, &.style1 .selected, &.style1 .wrapper {
    background: #F5F5F5;
    color: #4378FF;
    border: none;
  }

  &.style1 .item:hover, &.style1 .item.hovered {
    background: #EAF9FF !important;
  }

  &.style1 .select {

  }

  &.style1 .item:hover, &.style1 .item.hovered {
    background: #EAF9FF !important;
  }

  &.style1 .item:hover span, &.style1 .item.hovered span {
    background: #EAF9FF !important;
  }

  &.style1 .item {
    background-color: #FAFAFA;
  }

  &.style1 .item .subitem {
    background-color: #FAFAFA;
  }

  //&.style1 .item:nth-child(even), .item:nth-child(even)
  //{
  //  background-color: #E5E5E5;
  //}

  &.disabled {
    //background-color: #FAFAFA !important;
  }

  ${props => props.size === 'small' && `
    max-width: 256px;
  `}


  ${props => props.size === 'medium' && `
      max-width: 418px;
  `}

  ${props => props.size === 'incomes-and-expenses' && `
      max-width: 110px !important;
      min-width: 110px !important;
      margin: 3px 10px;
  `}

  ${props => props.size === 'portfolio-plan' && `
      margin: 0px;
  `}
`

export const sharedSearchInputWrapperStyle = css`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #fff;
  border: 1px solid #D2D1D1;
  flex: 1;
  border-radius: 8px;
  cursor: pointer;

  input {
    padding: 24px 12px 8px 10px !important;
  }

  &.select {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px #fff solid !important;
  }

  input::placeholder {
    color: transparent;
  }

  img.arrow {
    position: absolute;
    right: 20px;
    top: 12px;
    width: 12px;
    height: 20px;
  }

  &.disabled {
    background-color: #FAFAFA !important;
  }

  ${props => props.size === 'incomes-and-expenses' && `

      height: 28px !important;
  `}
`

export const sharedSearchContainerStyle = css`
  background-color: transparent;
  width: calc(100% - 58px);
  outline: none;
  display: flex;
  flex: 1;
  height: 48px;
  padding: 0 4px;
  position: relative;

  &.disabled {
    background-color: #F7F9FB;
  }

  ${placeholderStyle}
  label.error {
    ${errorStyle}
  }

  img.close {
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
    z-index: 1000;
  }

  ${props => props.size === 'incomes-and-expenses' && `
      height: 28px !important;
      margin: 0 !important;
      max-width: 120px !important;
      min-width: 120px !important;
  `}
`

export const sharedSelectWrapperStyle = css`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border-radius: 8px;
  position: relative;

  &.select {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.select .selected span {
    border-bottom: 1px solid #E1E6EC;
  }

  input::placeholder {
    color: transparent;
  }

  img.arrow {
    position: absolute;
    right: 20px;
    top: 15px;
    width: 12px;
    height: 20px;
  }

  ${placeholderStyle}
  label.placeholder {
    top: 10px;
    left: -13px;
    transform: scale(0.8);
  }

  label.error {
    ${errorStyle}
  }
`

export const sharedButtonStyle = css`
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  line-height: 28px;
  white-space: nowrap;
  height: 48px;
  border-radius: 10px;
  border: none;
  transition: .3s all;
  outline: none;
  font-style: normal;
  font-weight: 600;
  margin: 15px 5px;
  text-align: center;
  box-sizing: border-box;
  padding: 10px 20px;
  font-family: 'Rubik', sans-serif;

  &.style2 {
    background: #4378FF;
    color: #FFFFFF;
  }

  &.style2:hover {
    background: #3C6CE6;
  }

  &.style2:active {
    background: #5685FF;
  }

  &.style1 {
    background: #EFF2F5;
    color: #4378FF;
  }

  &.style1:hover {
    background: #D7DADC;
  }

  &.style1:active {
    background: #F1F3F6;
  }

  &.style3:hover {

  }

  &.style3:active {

  }

  &.style4 {
    background: #EFF2F5;
    color: #FF624D;
    min-width: auto;
    padding: 10px 20px;
    border-radius: 10px;

    ${props => props.right && `
        margin: 10px 40px 0 0;
      `}
  }

  &.style5 {
    background: rgb(43, 45, 57);
    color: #4C89FE;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    height: auto;
    line-height: normal;

    ${props => props.right && `
        margin: 10px 40px 0 0;
      `}
  }
  
  &.style6 {
    background: #2B2D39;
    color: #4C89FE;
    min-width: auto;
    padding: 10px 20px;
    border-radius: 10px;

    ${props => props.right && `
        margin: 10px 40px 0 0;
      `}
  }
  
  &.style7 {
    background: #333443;
    color: #4C89FE;
    min-width: auto;
    padding: 10px 20px;
    border-radius: 10px;

    ${props => props.right && `
        margin: 10px 40px 0 0;
      `}
  }

  &.style3:hover {

  }

  &.style3:active {

  }


  &:disabled, &.disabled {
    color: #7F818D !important;
  }

  svg {
    height: 10px !important;
    margin-top: 4px !important;
  }

  img {
    height: 10px !important;
    margin-top: 4px !important;
  }

  ${props => props.disabled && `
    color: #7F818D !important;
  `}
  ${props => props.left && `
    margin-left: 0;
  `}
  ${props => props.slim && `
    height: 40px;
    line-height: 20px;
  `}
`

export const sharedSelectedStyle = css`
  width: 100%;
  white-space: nowrap;
  color: #4378FF;
  align-items: center;
  line-height: 44px;
  padding: 5px 17px 0 17px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  word-break: keep-all;
  overflow: hidden;
  background-color: #EFF2F5;
  border-radius: 8px;

  &.style1
  {
    background-color: #333443;
    color: #4C89FE;
  }
  
  span {
    display: block;
    text-align: left;
    font-size: 14px;
    width: 100%;
  }
`

export const sharedSelectStyle = css`
  border-radius: 0 0 4px 4px;
  position: absolute;
  z-index: 30000;
  top: 50px;
  left: 0;
  width: 100%;
  box-shadow: 0 20px 48px rgba(255, 255, 255, 0.25);
  display: none;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 250px;
  background-color: #EFF2F5;

  ${props => props.select && `
    display: block;
  `}
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F6FB;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(10, 10, 10, 0.2);
    border-radius: 4px;
  }


  ${props => props.size === 'incomes-and-expenses' && `
      top: 30px;
  `}
`

export const sharedItemStyle = css`
  align-items: center;
  color: #4378FF;
  cursor: pointer;
  line-height: 24px;
  display: flex;
  padding: 0 15px;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  text-align: left;
  background-color: #EFF2F5;
  flex-wrap: wrap;
  border-bottom: 1px solid #E1E6EC;

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
    background-color: #E1E6EC;
    border-radius: 8px;
  }
`
export const sharedSubItemStyle = css`
  align-items: center;
  color: #000;
  transition: all .3s ease;
  cursor: pointer;
  line-height: 38px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
  border-bottom: 1px solid #c4c4c4;
  width: 100%;
  flex-basis: 100%;

  &:hover {
    //background-color: #bdc4e5;
    //border-bottom: 1px solid #FE9347;
  }

  &:last-child {
    border-bottom: 0;
  }
`

export const sharedInputContainerStyle = css`
  background-color: transparent;
  outline: none;
  display: flex;
  flex: 1;
  height: 46px;
  padding: 0;

  &.disabled {
    background-color: #F7F9FB;
  }

  ${placeholderStyle}
  
  img {
    z-index: 1000;
    cursor: pointer;
  }

  label.error {
    ${errorStyle}
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


  ${props => props.slim && `
    height: 38px;
  `}

  ${props => props.needMargin && `
    width: calc(100% - 58px);
  `}

`

export const sharedInputStyle = css`
  width: 100%;
  line-height: 15px;
  border-width: 0;
  z-index: ${zindex.input};
  color: #000;
  transition: border-color .25s ease-in-out;
  border-bottom: 3px solid rgba(255, 255, 255, .05);
  background-color: transparent;
  padding: 24px 12px 8px 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: left;
  border-radius: 8px;

  &:focus {
    outline: 0;
  }

  &.style1{
    background-color: #2B2D39!important;
    color: #fff!important;
    border-bottom: 3px solid #2B2D39;
  }
  
  ${placeholderActiveStyle}
  
  ${props => props.size === 'undersized' && `

    width: 100%;
    max-width: 220px;
    height: 21px;
    font-size: 12px;
    line-height: 21px;
    padding: 2px 5px;
    
    :disabled{
      height: 30px;
      border-radius: 4px;
    }
  `}

  ${props => props.autoComplete === 'off' && `

      input::-webkit-contacts-auto-fill-button, 
      input::-webkit-credentials-auto-fill-button {
        visibility: hidden;
        position: absolute;
        right: 0;
      }
  `}

  ${props => props.size === 'incomes-and-expenses' && `
    max-width: 90px !important;
    min-width: 90px !important;
    padding: 9px 16px 8px 14px;
  `}

  ${props => props.slim && `
      padding: 14px 12px 8px 11px;

      &::placeholder
      {
          color: #7F818D;
      }
  `}
`


export const EmptyContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 15px 10px;
  flex: 1;
  border-radius: 8px;
  position: relative;
  min-width: 100px;

  ${props => props.size === 'small' && `
      max-width: 256px;
    `}


  ${props => props.size === 'medium' && `
        max-width: 418px;
    `}
`

export const InputContainer = styled.div`
  ${sharedInputContainerStyle}
`

export const StyledInput = styled.input`
  ${sharedInputStyle}
`

export const MaskedStyledInput = styled(InputMask)`
  ${sharedInputStyle}
`

export const DateStyledInput = styled(Flatpickr)`
  ${sharedInputStyle}
`

export const Button = styled.button`
  ${sharedButtonStyle}

  ${props => props.flex && `
      flex: 1;
      max-width: none;
      min-width: fit-content;
    `}

  ${props => props.position === 'right' && `
      margin: 0 0 0 auto;
    `}

  ${props => props.size === 'full' && `
      width: 100%;
    `}
  ${props => props.size === 'save' && `
      width: 155px;
    `}
  ${props => props.size === 'calc' && `
      width: 155px;
    `}
  ${props => props.size === 'small' && `
      border-radius: 8px;
      font-size: 14px;
      width: 96px;
      height: 24px;
      margin: 10px 5px;
      padding: 2px 0;
      min-width: 96px;
      line-height: 12px;
    `}
`
export const Link = styled.a`
  ${sharedButtonStyle}

  font-weight: 700 !important;

  ${props => props.flex && `
      flex: 1;
      max-width: none;
      min-width: fit-content;
    `}

  ${props => props.position === 'right' && `
      margin: 0 0 0 auto;
    `}

  ${props => props.size === 'full' && `
      width: 100%;
    `}
`

export const ButtonLink = styled(NavLink)`
  ${sharedButtonStyle}

  font-weight: 700 !important;

  ${props => props.flex && `
      flex: 1;
      max-width: none;
      min-width: fit-content;
    `}

  ${props => props.position === 'right' && `
      margin: 0 0 0 auto;
    `}

  ${props => props.size === 'full' && `
      width: 100%;
    `}
`

export const TextArea = styled.textarea`

`


export const ContainerTextArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #c4c4c4;
  margin: 20px;
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  align-items: center;
  box-sizing: border-box;

  ${props => props.flex && `
    flex: 1;
  `}
`

export const Grid = styled.div`
  display: grid;
  width: 100%;
`


export const Checkbox = styled.div`
  ${sharedCheckboxStyle}
`

export const Loader = styled.div`
  height: 48px;

  flex-basis: 48px;
  position: absolute;
  right: 36px;

  img {
    position: absolute;
    top: 8px;
    height: 30px;
    width: 30px;
    right: -20px;
    animation: ${rotate} 2s linear infinite;
  }
`

export const Selected = styled.div`
  ${sharedSelectedStyle}
`

export const Select = styled.div`
  ${sharedSelectStyle}
`

export const Item = styled.div`
  ${sharedItemStyle}
`


