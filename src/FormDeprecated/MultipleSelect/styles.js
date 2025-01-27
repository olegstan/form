import styled from 'styled-components'
import {sharedItemStyle, sharedSelectedStyle, sharedSelectStyle, sharedSelectWrapperStyle} from '../newstyles'

export const InputWrapper = styled.div`
    ${sharedSelectWrapperStyle}
  
    & > div > span{
      border: none;
    }
`
export const Selected = styled.div`
    ${sharedSelectedStyle}

`

export const Select = styled.div`
  ${sharedSelectStyle}
  
  top: 0;
  background-color: #353644;
  color: #fff;
  
  div{
    color: #fff;
  }
  
`

export const Item = styled.div`
  ${sharedItemStyle}
`
