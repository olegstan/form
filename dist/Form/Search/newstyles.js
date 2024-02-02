function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import styled, { css } from 'styled-components';
import { sharedInputStyle, sharedItemStyle, sharedSearchContainer, sharedSearchContainerStyle, sharedSearchInputWrapperStyle, sharedSelectedStyle, sharedSelectStyle } from '../newstyles';
export const sharedContainer = css`
  
`;
const smallProperty = styled.div`
  ${sharedSearchContainer}
  
  max-width: 179px;
  margin: 5px 8px;
`;
export const containerTag = styled.div`
    ${sharedSearchContainer}
`;
export const InputWrapper = styled.div`
    ${sharedSearchInputWrapperStyle}
`;
export const Selected = styled.div`
    ${sharedSelectedStyle}
`;
export const Select = styled.div`
  ${sharedSelectStyle}
`;
export const Item = styled.div`
  ${sharedItemStyle}
`;
export const Input = styled.input`
    ${sharedInputStyle}
`;
export const InputContainer = styled.div`
    ${sharedSearchContainerStyle}
`;
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
export const Container = ({
  children,
  tag = 'div',
  size = "container",
  ...props
}) => {
  let ContainerTagVariable = null;
  switch (size) {
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
  return /*#__PURE__*/React.createElement(ContainerTagVariable, _extends({
    as: tag
  }, props), children);
};