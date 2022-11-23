import React, {Component} from 'react';
import styled, {css} from 'styled-components'


export const sharedSelectContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #EFF2F5;
  box-sizing: content-box;
  flex: 1;
  margin: 15px 10px;
  cursor: pointer;
  width: 100%;
  min-width: 200px;
  height: 40px;
  border-radius: 8px;
  position: relative;
    
  &.select{
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  ${props => props.size === 'small' && `
    max-width: 256px;
  `}
  
  ${props => props.size === 'goal-item-number' && `
      // display: inline-block;
      // height: 31px;
      // font-size: 16px;
      // line-height: 25px;
      // padding: 2px 5px;
      // min-width: 47px;
      // margin: 0;
  `}
  
  ${props => props.size === 'medium' && `
      max-width: 418px;
  `}
  
  ${props => props.size === 'tactic-period' && `
    max-width: 181px;
    min-width: 181px;
    margin: 15px 0 15px 15px;
  `}
  
 
  ${props => props.size === 'incomes-and-expenses' && `
      margin: 10px 0 !important;
      max-width: 120px !important;
      min-width: 120px !important;
  `}
`

const containerTag = styled.div`
  ${sharedSelectContainerStyle}
`;

const fullTag = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 100%;
`;

const incomeCurrencyeTag = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 160px;
  min-width: 160px;
  margin: 15px 0 15px 0;
`;

const tacticsMonthSelect = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 163px;
  min-width: 163px;
  margin: 15px 0 15px 15px;
`;

const accountCurrencyTag = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 115px;
  min-width: 115px;
`;
const obligationInvestCurrency = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 138px !important;
  min-width: 138px !important;
`;

export const Container: Component = ({children, tag = 'div', size = "container", ...props}) => {

  let ContainerTagVariable = null;

  switch (size) {

    case 'account-currency':
      ContainerTagVariable = accountCurrencyTag;
      break;
    case 'full':
      ContainerTagVariable = fullTag;
      break;
    case 'income-currency':
      ContainerTagVariable = incomeCurrencyeTag;
      break;
    case 'tactics-month-select':
      ContainerTagVariable = tacticsMonthSelect;
      break;
    case 'obligation-invest-currency':
      ContainerTagVariable = obligationInvestCurrency;
      break;
    default:
      ContainerTagVariable = containerTag;
      break;
  }

  return <ContainerTagVariable as={tag} {...props}>{children}</ContainerTagVariable>;
};