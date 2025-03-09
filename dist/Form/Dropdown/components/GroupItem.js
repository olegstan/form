"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");
var _SubItem = _interopRequireDefault(require("./SubItem"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };} //@ts-ignore

var GroupItem = function GroupItem(_ref) {var _item$items;var
    item = _ref.item,
    _onClick = _ref.onClick,
    className = _ref.className,
    id = _ref.id;return (/*#__PURE__*/







    (0, _jsxRuntime.jsxs)(_styles.StyledGroupOption, {

      className: "".concat(className, " item"),
      id: id,
      onClick: _onClick, children: [/*#__PURE__*/

      (0, _jsxRuntime.jsx)("span", { children: item.name }), /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_styles.StyledSubItemsContainer, { children:
        item === null || item === void 0 || (_item$items = item.items) === null || _item$items === void 0 ? void 0 : _item$items.map(function (subOption, subKey) {return (/*#__PURE__*/
            (0, _jsxRuntime.jsx)(_SubItem["default"], {

              item: subOption
              // @ts-ignore
              , onClick: function onClick(e) {return _onClick(e, subOption);},
              className: className }, subKey
            ));}
        ) }
      )] }, item.id
    ));};var _default = exports["default"] =


GroupItem;
//# sourceMappingURL=GroupItem.js.map