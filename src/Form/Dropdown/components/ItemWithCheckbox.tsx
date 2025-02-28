import React from 'react';
import {StyledCheckboxOption} from './styles';
import Checkbox from "../../Checkboxes/Checkbox";

const ItemWithCheckbox = ({
                              item,
                              checked,
                              onClick,
                              className,
                              id
}: {
    item: any,
    checked: boolean,
    onClick: (e: any) => void,
    className?: string,
    id?: string,
}) => (
  <StyledCheckboxOption
    key={item.id}
    className={`${className} item`}
    id={id}
    onClick={onClick}
  >
    <span>
      <span>{item.name}</span>
      <Checkbox
          checked={checked}
          toggleCallback={onClick}
          checkboxStyle={{
            margin: '0',
            backgroundColor: '#4378FF',
            border: 'solid 1px #4378FF'
          }}
          style={{margin: '0', padding: '0', flex: '0'}}
          textStyle={{color: '#ffff'}}
      />
    </span>
  </StyledCheckboxOption>
);

export default ItemWithCheckbox;
