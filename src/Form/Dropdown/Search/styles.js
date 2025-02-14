import React from 'react';
import styled from 'styled-components'
import {sharedInputStyle} from "../../sharedStyles";

export const StyledSelect = styled.div`
  width: 100%;
  cursor: pointer;
  height: 50px;
  position: relative;
  
  //тут может быть div если вдруг вместо текста передали иконки или друглй элемент
  & > input, & > div.input{
    ${sharedInputStyle}
  }

`