import React, {useCallback} from 'react';

/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - focused
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */

export default function useBaseInput({
                                       disabled = false,
                                       name,
                                       onClick,
                                       onBlur,
                                       onChange,
                                       setFocused
                                     }) {

  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  const getName = useCallback((name) => {
    return name?.replace('country', 'couuntry')?.replace('state', 'staate');
  }, [name]);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (disabled) {
      // Если инпут отключен, то ничего не делаем
      return;
    }
    if (typeof onClick === 'function') {
      onClick(e);
    }
  }, [disabled, onClick]);

  const handleChange = useCallback((e) => {
    if (disabled) {
      // Если инпут отключен, игнорируем изменение
      return;
    }
    onChange(e.target.value);
  }, [disabled, onChange]);

  const handleFocus = useCallback(() => {
    if (disabled) {
      // Если инпут отключен, не устанавливаем фокус
      return;
    }
    setFocused(true);
  }, [disabled, setFocused]);

  const handleBlur = useCallback(() => {
    setFocused(false);
    if (typeof onBlur === 'function') {
      onBlur();
    }
  }, [onBlur, setFocused]);

  return {
    handleClick,
    handleChange,
    handleFocus,
    handleBlur,
    getName,
  };
}
