import styled from 'styled-components'
import {
  errorStyle,
  placeholderStyle,
  sharedInputStyle,
  sharedItemStyle,
  sharedSelectedStyle,
  sharedSelectStyle
} from './../newstyles'

export const Input = styled.input`
    ${sharedInputStyle}
`

export const InputContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 43px;
    background-color: #fff;
    flex: 1;
    position: relative;
    
    &.disabled{
      background-color: #F7F9FB !important;
    }
      
    input::placeholder
    {
      color: transparent;
    }
    
    ${placeholderStyle}
    
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



export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    height: 51px;
    background-color: #fff;
    margin: 20px;
    border: 1px solid #D2D1D1;
    flex: 1;
    border-radius: 8px;
`


export const Button = styled.button`
    color: #fff;
    background: #4378FF;
    display: inline-block;
    cursor: pointer;
    font-size: 18px;
    line-height: 20px;
    padding: 8px 58px;
    white-space: nowrap;
    height: 40px;
    border-radius: 10px;
    border: none;
    transition: .3s all;
    outline: none;
    font-style: normal;
    font-weight: 600;
    
    &.style1{
      background: #F5F5F5;
      color: #4378FF;
    }
    
    :hover{
      background: #EAF9FF;
      color: #fff;
    }
        
    ${props => props.position === 'right' && `
      margin: 0 0 0 auto;
    `}
    
    ${props => props.size === 'full' && `
      width: 100%;
    `}
`


///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////   input select currency   ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


export const InputWrapper = styled.div`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  background-color: transparent;
  outline: none;
  display: flex;
  align-items: center;
  //width: 58px;
  color: #fff;
  border-left: 1px solid hsla(0,0%,100%,.2);
  text-transform: uppercase;
  text-align: center;
  font-size: 14px;
  height: 49px;
  line-height: 49px;
   
  
  &.disabled{
    background-color: #F7F9FB !important;
  }
  
  .arrow {
    position: absolute;
    right: 20px;
    top: 12px;
    width: 12px;
    height: 28px;
  }
  
  .error{
      font-size: 8px;
      line-height: 58px;
      display: block;
      width: 100%;
      position: absolute;
      top: 15px;
      left: 0;
      user-select: none;
      z-index: 2500;
      color: red;
      text-align: center;
    }
    
    .placeholder{
      font-size: 10px;
      line-height: 0.1;
      display: block;
      width: 100%;
      position: absolute;
      top: 5px;
      left: 25px;
      user-select: none;
      z-index: 2500;
      color: #7b7b7b;
      text-align: left;
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

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

