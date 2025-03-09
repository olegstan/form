"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;



var _react = require("react");
var _InputPopup = _interopRequireDefault(require("../../InputPopup/InputPopup"));

var _error = _interopRequireDefault(require("./../../../assets/error.svg"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };} /**
 * Компонент для отображения ошибки (иконка + popup).
 * Мемоизирован.
 */ // @ts-ignore
var ErrorTooltip = /*#__PURE__*/(0, _react.memo)(function ErrorTooltip(_ref)



  {var error = _ref.error,id = _ref.id;
    if (!error) return null;

    return (/*#__PURE__*/
      (0, _jsxRuntime.jsx)(_InputPopup["default"], { trigger: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", { id: "tooltip-".concat(id), src: _error["default"], alt: "error" }), children: /*#__PURE__*/
        (0, _jsxRuntime.jsx)("label", { htmlFor: id, className: "error", children:
          error }
        ) }
      ));

  });var _default = exports["default"] =

ErrorTooltip;
//# sourceMappingURL=ErrorTooltip.js.map