import React from 'react';
import styled, {css, keyframes} from 'styled-components'
import InputMask from "react-input-mask";
import {NavLink} from 'react-router-dom'
import zindex from '../interface/zindex'
import {placeholderActiveStyle, placeholderStyle, sharedCheckboxStyle} from './newstyles'


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const errorStyle = css`
    background-color: #fff;
    box-shadow: rgb(38 38 38 / 4%) 0 1px 2px, rgb(38 38 38 / 16%) 0px 4px 8px;
    width: 276px;
    display: block;
    font-size: 14px;
    border-radius: 16px;
    padding: 20px;
`

export const sharedSearchContainer = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-sizing: content-box;
  //max-width: 490px;
  flex: 1;
  margin: 15px 10px;
  width: 100%;
  min-width: 200px;
  border-radius: 8px;
  position: relative;
  
  &.style1 .select, &.style1 .item, &.style1 .selected, &.style1 .wrapper{
    background: #F5F5F5;
    color: #4378FF;
    border: none;
  }
  
  &.style1 .item:hover, &.style1 .item.hovered{
    background: #EAF9FF !important;
  }
  
  &.style1 .select{
  
  }
  &.style1 .item:hover, &.style1 .item.hovered{
    background: #EAF9FF !important;
  }
  
  &.style1 .item:hover span, &.style1 .item.hovered span{
    background: #EAF9FF !important;
  }
  
  &.style1 .item
  {
    background-color: #FAFAFA;
  }
  &.style1 .item .subitem
  {
    background-color: #FAFAFA;
  }
  //&.style1 .item:nth-child(even), .item:nth-child(even)
  //{
  //  background-color: #E5E5E5;
  //}
  
  &.disabled{
    //background-color: #FAFAFA !important;
  }
  
  ${props => props.size === 'small' && `
    max-width: 256px;
  `}
  
  
  ${props => props.size === 'medium' && `
      max-width: 418px;
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
  
  &.select{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px #fff solid !important;
  }
  
  input::placeholder
  {
    color: transparent;
  }
  
  img.arrow {
    position: absolute;
    right: 20px;
    top: 12px;
    width: 12px;
    height: 20px;
  }
  
  &.disabled{
    background-color: #FAFAFA !important;
  }
  
  ${props => props.size === 'small' && `
      width: 100%;
      max-width: 130px;
      height: 30px;
      line-height: 24px;
      margin: 3px 2px;
  `}
`

export const sharedSearchContainerStyle = css`
  background-color: transparent;
  width: calc(100% - 58px);
  outline: none;
  display: flex;
  flex: 1;
  height: 48px;
  
  &.disabled{
    background-color: #F7F9FB;
  }
  
  ${placeholderStyle}
  
  label.error{
    ${errorStyle}
  }
`

export const sharedSelectWrapperStyle = css`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border-radius: 8px;
  
  &.select{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.select .selected span{
    border-bottom: 1px solid #E1E6EC;
  }
  &.select.style2 .selected span {
    border-bottom: 1px solid #414250;
  }
  
  input::placeholder
  {
    color: transparent;
  }
  
  img.arrow {
    position: absolute;
    right: 20px;
    top: 11px;
    width: 12px;
    height: 20px;
  }
  
  ${placeholderStyle}
  
  label.placeholder{
    top: 10px;
    left: 17px;
    z-index: 1000;
  }
  
  label.error{
    ${errorStyle}
  }
  
  ${props => props.size === 'small' && `
      width: 100%;
      max-width: 130px;
      height: 30px;
      line-height: 24px;
      margin: 3px 2px;
  `}
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
  text-align: center;
  box-sizing: border-box;
  padding: 10px 20px;

  &.style2{
    background: #4378FF;
    color: #FFFFFF;
  }
  &.style2:hover{
    background: #3C6CE6;
  }
  &.style2:active{
    background: #5685FF;
  }

  &.style1{
      background: #EFF2F5;
      color: #4378FF;
  }
  &.style1:hover{
    background: #D7DADC;
  }
  &.style1:active{
    background: #F1F3F6;
  }
  
  &.style3{
      background: transparent;
      color: #4378FF;
    
      ${props => props.right && `
        margin: 10px 40px 0 0;
      `}
  }
  &.style3:hover{
  
  }
  &.style3:active{
  
  }
  &.style4{
      background: #EFF2F5;
      color: #FF624D;
      min-width: auto;
      padding: 10px 20px;
      border-radius: 10px;
      
      ${props => props.right && `
        margin: 10px 40px 0 0;
      `}
  }
  &.style3:hover{
  
  }
  &.style3:active{
  
  }
  
  
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
  line-height: 21px;
  padding: 16px 17px 0 17px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  word-break: keep-all;
  overflow: hidden;
  background-color: #EFF2F5;
  border-radius: 8px;
  
  span{
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

  ${props => props.select && `
    display: block;
  `}

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F6FB;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(10,10,10,0.2);
    border-radius: 4px;
  }
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

  span{
    text-align: left;
    font-size: 14px;
    width: 100%;
    padding: 4px 8px;
    margin: 10px 0;
  }

  &:last-child span{
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  span:hover{
    background-color: #E1E6EC;
    border-radius: 8px;
  }

  &.style2 span:hover
  {
    background-color: #414250;
    border-bottom: 1px solid #414250;
  }
`

export const sharedSubItemStyle = css`
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

  span{
    text-align: left;
    font-size: 14px;
    width: 100%;
    padding: 4px 8px;
    margin: 10px 0;
  }

  &:last-child span{
    border-bottom: none;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  span:hover{
    background-color: #E1E6EC;

    border-radius: 8px;
  }

  &.style2 span:hover
  {
    background-color: #414250;
    border-bottom: 1px solid #414250;
  }
`

export const sharedInputContainerStyle = css`
  background-color: transparent;
  width: calc(100% - 58px);
  outline: none;
  display: flex;
  flex: 1;
  height: 46px;
  padding: 0;
  
  &.disabled{
    background-color: #F7F9FB;
  }
  
  ${placeholderStyle}
  
  img{
    z-index: 1000;
    cursor: pointer;
  }
  
   label.error{
      ${errorStyle}
   }
   
   img.calendar {
    position: absolute;
    right: 16px;
    top: 14px;
  }
  
   img.close{
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
  }
  
  
  ${props => props.slim && `
    height: 38px;
  `}
  
`

export const sharedInputStyle = css`
  width: 100%;
  line-height: 13px;
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
  
  &:focus
  {
      outline: 0;
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
    
     ${props => props.size === 'small' && `

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
    min-width: 200px;
    
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
`

export const ContainerTextArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
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


export const Checkbox = styled.div`
    ${sharedCheckboxStyle}
`

export const Loader = styled.div`
  height: 48px;
  
  flex-basis: 48px;
  position: absolute;
  right: 36px;
  
  img{
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

export const SubItem = styled.div`
  ${sharedSubItemStyle}
`


