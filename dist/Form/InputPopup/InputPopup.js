"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _reactjsPopup = _interopRequireDefault(require("reactjs-popup"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}

// Определяем интерфейс для пропсов компонента





var InputPopup = function InputPopup(_ref) {var trigger = _ref.trigger,children = _ref.children;
  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)(_reactjsPopup["default"], {
      trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.Container, { children: trigger }),
      position: "bottom center",
      on: "hover",
      contentStyle: { zIndex: 1000 }, children: /*#__PURE__*/

      (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, { children: [
        function (close) {return (/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_styles.PopupContainer, { onClick: function onClick(e) {return e.stopPropagation();}, children:
              children }
            ));},
        " "] }
      ) }
    ));

};var _default = exports["default"] =

InputPopup;
//# sourceMappingURL=InputPopup.js.map