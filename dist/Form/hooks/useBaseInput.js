"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = useBaseInput;var _react = require("react");

/**
 * Универсальный хук, повторяющий логику BaseInput:
 * - focused
 * - getName (обход бага с autocomplete Safari)
 * - handleShowSelect
 * - renderPlaceholder, renderTooltipError (если нужно внутри потом вызывать)
 */

function useBaseInput(_ref)






{var _ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,name = _ref.name,onClick = _ref.onClick,onBlur = _ref.onBlur,onChange = _ref.onChange,setFocused = _ref.setFocused;

  // getName — чтобы Safari не автозаполнял поля с "state"/"country"
  var getName = (0, _react.useCallback)(function (name) {var _name$replace;
    return name === null || name === void 0 || (_name$replace = name.replace('country', 'couuntry')) === null || _name$replace === void 0 ? void 0 : _name$replace.replace('state', 'staate');
  }, [name]);

  var handleClick = (0, _react.useCallback)(function (e) {
    e.stopPropagation();
    if (disabled) {
      // Если инпут отключен, то ничего не делаем
      return;
    }
    if (typeof onClick === 'function') {
      onClick(e);
    }
  }, [disabled, onClick]);

  var handleChange = (0, _react.useCallback)(function (e) {
    if (disabled) {
      // Если инпут отключен, игнорируем изменение
      return;
    }
    onChange(e.target.value);
  }, [disabled, onChange]);

  var handleFocus = (0, _react.useCallback)(function () {
    if (disabled) {
      // Если инпут отключен, не устанавливаем фокус
      return;
    }
    setFocused(true);
  }, [disabled, setFocused]);

  var handleBlur = (0, _react.useCallback)(function () {
    setFocused(false);
    if (typeof onBlur === 'function') {
      onBlur();
    }
  }, [onBlur, setFocused]);

  return {
    handleClick: handleClick,
    handleChange: handleChange,
    handleFocus: handleFocus,
    handleBlur: handleBlur,
    getName: getName
  };
}
//# sourceMappingURL=useBaseInput.js.map