import styled, {css} from "styled-components";
import {NavLink} from 'react-router-dom'

export const sharedButtonStyle = css`
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  line-height: 28px;
  white-space: nowrap;
  height: 48px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-style: normal;
  text-align: center;
  box-sizing: border-box;
  padding: 10px 20px;
  font-family: inherit;
  margin: 15px 5px;
  min-width: 100px;
  font-weight: 700 !important;
  transition: opacity 0.2s ease;

  &.narrow {
    height: 40px; /* Уменьшаем внутренние отступы */
    line-height: 20px;
    padding: 0;
    margin: 0;
  }
  
  &.margin {
    margin: 10px;
  }
  
  &.wide {
    width: 100%;
  }
  
  &.main{
    background-color: ${({theme}) => theme.mainButtonBackgroundColor};
    color: ${({theme}) => theme.mainButtonTextColor};
  }

  &.cancel{
    background-color: ${({theme}) => theme.cancelButtonBackgroundColor};
    color: ${({theme}) => theme.cancelButtonTextColor};
  }
  
  &.block{
    background-color: ${({theme}) => theme.blockButtonBackgroundColor};
    color: ${({theme}) => theme.blockButtonTextColor};
  }

  &.transparent{
    background-color: transparent;
    color: ${({theme}) => theme.transparentButtonTextColor};
    height: auto;
    line-height: normal;
  }
  
  &.main.disabled {
    background-color: ${({theme}) => theme.mainButtonDisabledBackgroundColor} !important;
    color: ${({theme}) => theme.mainButtonDisabledTextColor} !important;
  }
  

  svg, img {
    height: 10px !important;
    margin-top: 4px !important;
  }
  
  &:hover{
    opacity: 0.7;
  }
`

export const StyledButton = styled.button`
  ${sharedButtonStyle}
`

export const Link = styled.a`
  ${sharedButtonStyle}
`

export const InlineLink = styled.a`
  ${sharedButtonStyle}
`

export const ButtonLink = styled(NavLink)`
  ${sharedButtonStyle}
`
