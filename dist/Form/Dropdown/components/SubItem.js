"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };} //@ts-ignore

var SubItem = function SubItem(_ref)









{var item = _ref.item,onClick = _ref.onClick,className = _ref.className,id = _ref.id;
  var renderName = function renderName() {
    if (/*#__PURE__*/_react["default"].isValidElement(item.name)) {
      // Если item.name - React-элемент, рендерим его как есть
      return item.name;
    }
    // В противном случае рендерим как обычный текст
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", { children: item.name });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledSubOption, {

    className: "".concat(className, " item"),
    id: id,
    onClick: onClick, children:

    renderName() }, item.id
  );
};var _default = exports["default"] =

SubItem;
//# sourceMappingURL=SubItem.js.map