import React, {useCallback, useState} from 'react';
// import InputPopup from "../InputPopup/InputPopup";
// import errorSvg from "../../assets/error.svg";

/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - cDM/cWU для клика вне (handleClickOutside)
 * - focused
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */

export default function useBaseInput({
                                       onClick,
                                       onChange,
                                     }) {

  const [focused, setFocused] = useState(false);  // аналог this.state.focused

  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  const getName = useCallback((name) => {
    return name?.replace('country', 'couuntry')?.replace('state', 'staate');
  }, []);

  //
  //
  // // getPlaceholderClassName
  // const getPlaceholderClassName = useCallback(() => {
  //   let isActive = false;
  //   // Логика, которая была в BaseInput:
  //   if (focused) {
  //     isActive = true;
  //   } else if (props.selected) {
  //     // если есть props.selected
  //     isActive = true;
  //   } else if (
  //     (props.value === 0 || props.value) &&
  //     props.value !== '' &&
  //     !props.inputMask
  //   ) {
  //     isActive = true;
  //   } else if (
  //     props.value &&
  //     typeof props.value === 'string' &&
  //     props.value.replace(props.inputMask, '') !== ''
  //   ) {
  //     isActive = true;
  //   }else if (props.search && props.search.length > 0) {
  //     isActive = true;
  //   }else if (callerClassName === 'FileInput') {
  //     isActive = true;
  //   }
  //   return 'placeholder ' + (isActive ? 'active' : '');
  // }, [focused, props.value, props.selected, props.inputMask]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  const handleChange = (e) => {
    onChange(e, {
      name: name,
      value: e.target.value
    });
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return {
    focused,
    setFocused,
    handleClick,
    handleChange,
    handleFocus,
    handleBlur,
    getName,
  };
}
