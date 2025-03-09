"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");
var _Checkbox = _interopRequireDefault(require("../../Checkboxes/Checkbox"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };} //@ts-ignore

var ItemWithCheckbox = function ItemWithCheckbox(_ref) {var
    item = _ref.item,
    checked = _ref.checked,
    onClick = _ref.onClick,
    className = _ref.className,
    id = _ref.id;return (/*#__PURE__*/







    (0, _jsxRuntime.jsx)(_styles.StyledCheckboxOption, {

      className: "".concat(className, " item"),
      id: id,
      onClick: onClick, children: /*#__PURE__*/

      (0, _jsxRuntime.jsxs)("span", { children: [/*#__PURE__*/
        (0, _jsxRuntime.jsx)("span", { children: item.name }), /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_Checkbox["default"], {
          checked: checked,
          toggleCallback: onClick,
          checkboxStyle: {
            margin: '0',
            backgroundColor: '#4378FF',
            border: 'solid 1px #4378FF'
          },
          style: { margin: '0', padding: '0', flex: '0' },
          textStyle: { color: '#ffff' } }
        )] }
      ) }, item.id
    ));};var _default = exports["default"] =


ItemWithCheckbox;
//# sourceMappingURL=ItemWithCheckbox.js.map