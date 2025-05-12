import React from 'react';
import styled, {css} from 'styled-components'
import {
    sharedInputStyle,
    sharedItemStyle,
    sharedSearchContainer,
    sharedSearchContainerStyle,
    sharedSearchInputWrapperStyle,
    sharedSelectedStyle,
    sharedSelectStyle
} from '../newstyles'

export const sharedContainer = css`
  
`

const smallProperty = styled.div`
  ${sharedSearchContainer}
  
  max-width: 179px;
  margin: 5px 8px;
`;

export const Add = styled.div`
  ${sharedItemStyle}
  
  align-items: center;
  color: #000;
  cursor: pointer;
  line-height: 40px;
  display: flex;
  padding: 0 15px;
  user-select: none;

  span{
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    width: 100%;
  }

  &:last-child {
    border-bottom: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`

export const containerTag = styled.div`
    ${sharedSearchContainer}
`

export const InputWrapper = styled.div`
    ${sharedSearchInputWrapperStyle}
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

export const Input = styled.input`
    ${sharedInputStyle}
`

export const InputContainer = styled.div`
    ${sharedSearchContainerStyle}
`

const tacticsMonthSelect = styled.div`
  ${sharedSearchContainerStyle}
  
  max-width: 163px;
  min-width: 163px;
  margin: 15px 0 15px 15px;
`;

const incomesAndExpensesTag = styled.div`
  ${sharedSearchContainer}
  
  & > div{
    height: 28px;
  }
  
  input{
    padding: 3px 10px !important;
  }
  
  .placeholder{
    display: none !important;
  }
`;

export const Container = ({children, tag = 'div', size = "container", ...props}) => {

  let ContainerTagVariable = null;

  switch (size)
  {
    case 'small-property':
      ContainerTagVariable = smallProperty;
      break;
    case 'tactics-month-select':
      ContainerTagVariable = tacticsMonthSelect;
      break;
    default:
      ContainerTagVariable = containerTag;
      break;
  }

  return <ContainerTagVariable as={tag} {...props}>{children}</ContainerTagVariable>;
};