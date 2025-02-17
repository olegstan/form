import React, {useCallback} from 'react';

/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - focused
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */

export default function useBaseInput({
                                       onClick,
                                       onChange,
                                       setFocused
                                     }) {

  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  const getName = useCallback((name) => {
    return name?.replace('country', 'couuntry')?.replace('state', 'staate');
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return {
    handleClick,
    handleChange,
    handleFocus,
    handleBlur,
    getName,
  };
}
