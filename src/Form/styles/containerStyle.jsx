import React from 'react';
import styled, {css} from 'styled-components'


export const sharedContainer = css`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #D2D1D1;
  margin: 15px 10px;
  flex: 1;
  border-radius: 8px;
  position: relative;
  
  &.style1
  {
    border: 1px solid #454650;
    background-color: #2B2D39;
  }

  &.style1{
    label.placeholder {
      color: #6F7080;
      z-index: 1000;
    }
  }
  
  ${props => props.disabled === true && `
      background-color: #FAFAFA !important;
      
      &.style2
      {
        background-color: #2B2D39 !important;
      }

      
      &:-webkit-autofill,
      &:-webkit-autofill:hover, 
      &:-webkit-autofill:focus, 
      &:-webkit-autofill:active
      {
       -webkit-box-shadow: 0 0 0 30px #FAFAFA inset !important;
      }
  `}
  
  ${props => props.slim && `
      
  `}
`