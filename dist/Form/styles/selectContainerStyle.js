function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from 'react';
import styled, { css } from 'styled-components';
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
  min-width: 100px;
  height: 48px;
  border-radius: 8px;
  position: relative;
  
  &.select
  {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  &.style2
  {
    background-color: #333443;
  }
  
  ${props => props.size === 'small' && `
    max-width: 256px;
  `}
  
  ${props => props.size === 'medium' && `
      max-width: 418px;
  `}
  
  ${props => props.size === 'tactic-period' && `
    max-width: 181px;
    min-width: 181px;
    margin: 15px 0 15px 15px;
  `}
`;
const containerTag = styled.div`
  ${sharedSelectContainerStyle}
`;
const tacticsMonthSelect = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 163px;
  min-width: 163px;
  margin: 15px 0 15px 15px;
`;
const balanceMonthSelect = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 208px;
  min-width: 208px;
`;
const accountCurrencyTag = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 115px;
  min-width: 115px;
`;
const smallAccountCurrencyTag = styled.div`
  
  max-width: 81px;
  min-width: 81px;
`;
const smallPortfolioPlanCurrencyTag = styled.div`
  
  max-width: 121px;
  min-width: 121px;
`;
const smallProperty = styled.div`
    
  max-width: 179px;
  margin: 5px 8px;
`;
const planPercentTag = styled.div`
  ${sharedSelectContainerStyle}
  
  display: inline-block;
  padding: 0;
  min-width: 47px;
  margin: 0;
  
  & > div{
    width: 100% !important;
  }
  
  .placeholder, .error{
    display: none;
  }
`;
export const Container = ({
  children,
  tag = 'div',
  size = "container",
  ...props
}) => {
  let ContainerTagVariable = null;
  switch (size) {
    case 'account-currency':
      ContainerTagVariable = accountCurrencyTag;
      break;
    case 'portfolio-plan-currency':
      ContainerTagVariable = smallPortfolioPlanCurrencyTag;
      break;
    case 'small-subaccount-currency':
      ContainerTagVariable = smallAccountCurrencyTag;
      break;
    case 'small-property':
      ContainerTagVariable = smallProperty;
      break;
    case 'plan-percent':
      ContainerTagVariable = planPercentTag;
      break;
    case 'tactics-month-select':
      ContainerTagVariable = tacticsMonthSelect;
      break;
    case 'balance-month-select':
      ContainerTagVariable = balanceMonthSelect;
      break;
    default:
      ContainerTagVariable = containerTag;
      break;
  }
  return /*#__PURE__*/React.createElement(ContainerTagVariable, _extends({
    as: tag
  }, props), children);
};