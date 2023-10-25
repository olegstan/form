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
    border: 1px solid #454650 !important;
    background-color: #2B2D39 !important;
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

const containerTag = styled.div`
  ${sharedContainer}
`;

const accountNameTag = styled.div`
  ${sharedContainer}
  
  max-width: 364px;
  min-width: 364px;
  margin: 15px 0;
`;

const smallSubaccountNameTag = styled.div`
  ${sharedContainer}
  
  max-width: 123px;
  min-width: 123px;
  margin: 3px 5px;
`;

const smallAccountNameTag = styled.div`
  ${sharedContainer}
  
  max-width: 191px;
  min-width: 191px;
  margin: 3px 5px;
`;

const accountSumTag = styled.div`
  ${sharedContainer}
  
  max-width: 178px;
  min-width: 178px;
  margin: 15px 40px;
`;
const portfolioPlanSumTag = styled.div`
  ${sharedContainer}
  
  max-width: 178px;
  min-width: 178px;
  margin: 15px 10px;
`;

const smallSubaccountSumTag = styled.div`
  ${sharedContainer}
  
  max-width: 103px;
  min-width: 103px;
  margin: 3px 5px;
`;

const smallProperty = styled.div`
  ${sharedContainer}
  
  max-width: 179px;
  margin: 5px 8px;
`;

const accountCurrencyTag = styled.div`
  ${sharedContainer}
  
  max-width: 115px;
  min-width: 115px;
  margin: 5px 5px;
`;

const smallSubaccountCurrencyTag = styled.div`
  ${sharedContainer}
  
  max-width: 81px;
  min-width: 81px;
  margin: 3px 5px;
`;

const planSalaryDay = styled.div`
  ${sharedContainer}
  
  max-width: 51px;
  min-width: 51px;
  margin: 3px 5px;
  
  height: 28px;
  
  & > div{
    height: 28px;
  }
  
  input{
    padding: 0 8px;
    margin-top: 0;
  }
  
  input::placeholder {
    color: #7F818D;
  }
  
  .placeholder{
    display: none !important;
  }
  .calendar{
    display: none !important;
  }
`;

const planSalarySum = styled.div`
  ${sharedContainer}
  
  max-width: 116px;
  min-width: 116px;
  margin: 3px 5px;
  
  height: 28px;
  
  & > div{
    height: 28px;
  }
  
  input{
    padding: 0 8px;
    margin-top: 0;
    text-align: right;
  }
  
  input::placeholder {
    color: #7F818D;
  }
  
  .placeholder{
    display: none !important;
  }
  .calendar{
    display: none !important;
  }
`;

const spendingFilterTag = styled.div`
  ${sharedContainer}
  
  margin: 4px 0 !important;
  max-width: 87px !important;
  min-width: 87px !important;
  height: 28px;
  
  & > div{
    height: 28px;
  }
  
  input{
    padding: 0 8px;
    margin-top: 0;
  }
  
  input::placeholder {
    color: #7F818D;
  }
  
  .placeholder{
    display: none !important;
  }
  .calendar{
    display: none !important;
  }
`;

const budgetSum = styled.div`
  ${sharedContainer}
  
  height: 31px;
  line-height: 25px;
  padding: 2px 5px;
  margin: 0;
  max-width: 93px;
  min-width: 93px;
  
  display: inline-block;
  /* width: 100%; */
  /* margin: 0 auto; */
  margin-left: auto;
  margin-right: 6px;
  
  & > div{
    height: 31px;
    width: 100% !important;
  }
  
  input{
    font-size: 16px;
    line-height: 15px;
    padding: 0 9px  0 0;
    height: 25px;
    text-align: right;
    margin: 0;
    font-weight: 400;
    border-radius: 0;
        
    :disabled{
      border-radius: 4px;
    }
  }
  
  .placeholder{
    display: none;
  }
`;

const budgetName = styled.div`
  ${sharedContainer}
  
  height: 28px;
  line-height: 28px;
  padding: 0 5px;
  margin: 0;
  max-width: 93px;
  min-width: 93px;
  
  display: inline-block;
  margin-left: auto;
  margin-right: 6px;
  
  & > div{
    height: 31px;
    width: 100% !important;
  }
  
  input{
    font-size: 16px;
    line-height: 15px;
    padding: 0 9px  0 0;
    height: 25px;
    text-align: right;
    margin: 0;
    font-weight: 400;
    border-radius: 0;
        
    :disabled{
      border-radius: 4px;
    }
  }
  
  .placeholder{
    display: none;
  }
`;

const planNumberTag = styled.div`
  ${sharedContainer}
  
  display: inline-block;
  height: 20px;
  line-height: 20px;
  padding: 2px 1px;
  min-width: 47px;
  margin: 0;
  
  & > div{
    height: 20px;
    width: 100% !important;
  }
  
  input{
    font-size: 14px;
    line-height: 15px;
    padding: 0 9px  0 0;
    height: 15px;
    text-align: right;
    margin: 0;
    font-weight: 400;
    border-radius: 0;
        
    :disabled{
      border-radius: 4px;
    }
  }
  
  
  .placeholder, .error{
    display: none;
  }
`;

const planPercentTag = styled.div`
  ${sharedContainer}
  
  display: inline-block;
  width: 47px;
  min-width: 47px;
  margin: 0;
  padding: 3px 0 0 0;
  
  & > div{
    width: 100% !important;
  }
  
  input{
    margin: 0;
    width: 100%;
    line-height: 15px;
    padding: 0 12px 0 0;
    font-size: 16px;
    text-align: right;
    font-weight: 400;
    border-radius: 100px;
    
    :disabled{
      border-radius: 4px;
    }
  }
  
  .placeholder, .error{
    display: none;
  }
`;

const couponDateTag = styled.div`
  ${sharedContainer}
  
  max-width: 163px;
  min-width: 163px;
  margin: 15px 5px;
`;

const couponNumberTag = styled.div`
  ${sharedContainer}
  
   max-width: 114px;
   min-width: 114px;
   margin: 15px 5px;
`;

const paymentDateTag = styled.div`
  ${sharedContainer}
  
  max-width: 180px;
  min-width: 171px;
  margin: 0;
`;

const paymentNumberTag = styled.div`
  ${sharedContainer}
  
   max-width: 114px;
   min-width: 80px;
   margin: 0;
`;


const incomesAndExpensesTag = styled.div`
  ${sharedContainer}
  
  margin: 10px 3px !important;
  height: 28px !important;
  max-width: 110px !important;
  min-width: 110px !important;
  
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
const smallTag = styled.div`
  ${sharedContainer}
  
  max-width: 256px;
`;

const mediumTag = styled.div`
  ${sharedContainer}
  
  max-width: 418px;
`;

export const Container = ({children, tag = 'div', size = "container", ...props}) => {

  let ContainerTagVariable = null;


  switch (size) {
    case 'small':
      ContainerTagVariable = smallTag;
      break;
    case 'medium':
      ContainerTagVariable = mediumTag;
      break;
    case 'incomes-and-expenses':
      ContainerTagVariable = incomesAndExpensesTag;
      break;
    case 'payment-date':
    case 'valuation-date':
      ContainerTagVariable = paymentDateTag;
      break;
    case 'payment-number':
    case 'valuation-number':
      ContainerTagVariable = paymentNumberTag;
      break;
    case 'coupon-date':
      ContainerTagVariable = couponDateTag;
      break;
    case 'coupon-number':
      ContainerTagVariable = couponNumberTag;
      break;
    case 'account-sum':
      ContainerTagVariable = accountSumTag;
      break;
    case 'portfolio-plan-sum':
      ContainerTagVariable = portfolioPlanSumTag;
      break;
    case 'small-property':
      ContainerTagVariable = smallProperty;
      break;
    case 'small-subaccount-sum':
      ContainerTagVariable = smallSubaccountSumTag;
      break;
    case 'account-currency':
      ContainerTagVariable = accountCurrencyTag;
      break;
    case 'small-subaccount-currency':
      ContainerTagVariable = smallSubaccountCurrencyTag;
      break;
    case 'plan-salary-day':
      ContainerTagVariable = planSalaryDay;
      break;
    case 'plan-salary-sum':
      ContainerTagVariable = planSalarySum;
      break;
    case 'account-name':
      ContainerTagVariable = accountNameTag;
      break;
    case 'small-subaccount-name':
      ContainerTagVariable = smallSubaccountNameTag;
      break;
    case 'small-account-name':
      ContainerTagVariable = smallAccountNameTag;
      break;
    case 'plan-percent':
      ContainerTagVariable = planPercentTag;
      break;
    case 'plan-number':
      ContainerTagVariable = planNumberTag;
      break;
    case 'budget-sum':
      ContainerTagVariable = budgetSum;
      break;
    case 'budget-name':
      ContainerTagVariable = budgetName;
      break;
    case 'spending-filter':
      ContainerTagVariable = spendingFilterTag;
      break;
    default:
      ContainerTagVariable = containerTag;
      break;
  }

  return <ContainerTagVariable as={tag} {...props}>{children}</ContainerTagVariable>;
};