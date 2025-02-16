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
  transition: .3s all;
  outline: none;
  font-style: normal;
  text-align: center;
  box-sizing: border-box;
  padding: 10px 20px;
  font-family: inherit;
  margin: 15px 5px;
  min-width: 100px;
  font-weight: 700 !important;

  &.narrow {
    height: 40px; /* Уменьшаем внутренние отступы */
    line-height: 20px;
  }
  
  &.main{
    background-color: ${({theme}) => theme.mainButtonBackgroundColor};
    color: ${({theme}) => theme.mainButtonTextColor};
  }

  &.cancel{
    background-color: ${({theme}) => theme.cancelButtonBackgroundColor};
    color: ${({theme}) => theme.cancelButtonTextColor};
  }

  &:disabled, &.disabled {
    color: #7F818D !important;
    background-color: #7F818D !important;
  }

  svg, img {
    height: 10px !important;
    margin-top: 4px !important;
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
