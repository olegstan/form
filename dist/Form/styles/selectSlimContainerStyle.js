function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
const accountCurrencyTag = styled.div`
  ${sharedSelectContainerStyle}
  
  max-width: 115px;
  min-width: 115px;
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
    case 'tactics-month-select':
      ContainerTagVariable = tacticsMonthSelect;
      break;
    default:
      ContainerTagVariable = containerTag;
      break;
  }
  return /*#__PURE__*/React.createElement(ContainerTagVariable, _extends({
    as: tag
  }, props), children);
};