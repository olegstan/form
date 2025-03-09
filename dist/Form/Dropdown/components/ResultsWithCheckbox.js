"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Item = _interopRequireDefault(require("./Item"));
var _ItemWithCheckbox = _interopRequireDefault(require("./ItemWithCheckbox"));
var _styles = require("./styles");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//@ts-ignore

// @ts-ignore
var ResultsWithCheckbox = function ResultsWithCheckbox(_ref) {
  var id = _ref.id,
    values = _ref.values,
    options = _ref.options,
    handleClick = _ref.handleClick,
    handleClickAll = _ref.handleClickAll,
    className = _ref.className,
    idPrefix = _ref.idPrefix,
    active = _ref.active;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.OptionsWrapper, {
    active: active,
    id: id ? "".concat(id, "-select") : undefined,
    children: options.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Item["default"], {
      item: {
        id: null,
        name: 'Нет элементов'
      },
      className: className,
      id: "".concat(idPrefix, "-none")
    }, 'none') : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [handleClickAll && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemWithCheckbox["default"], {
        item: (values === null || values === void 0 ? void 0 : values.length) === (options === null || options === void 0 ? void 0 : options.length) ? {
          id: 'all',
          name: 'Снять выбор'
        } : {
          id: 'all',
          name: 'Выбрать все'
        },
        checked: (values === null || values === void 0 ? void 0 : values.length) === (options === null || options === void 0 ? void 0 : options.length),
        onClick: handleClickAll,
        className: className
      }), options.map(function (option) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ItemWithCheckbox["default"], {
          item: option
          //@ts-ignore
          ,
          checked: values === null || values === void 0 ? void 0 : values.includes(option.id),
          onClick: function onClick(e) {
            handleClick(e, option);
          },
          className: className,
          id: "".concat(idPrefix, "-").concat(option.id)
        }, option.id);
      })]
    })
  });
};
var _default = exports["default"] = ResultsWithCheckbox;