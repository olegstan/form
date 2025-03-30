"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;
var _ic_close_only = _interopRequireDefault(require("../../../assets/ic_close_only.svg"));
var _InputContainer = require("../InputContainer");var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };} // @ts-ignore

var CloseIcon = function CloseIcon(_ref)



















{var typeName = _ref.typeName,icon = _ref.icon,search = _ref.search,onSearch = _ref.onSearch,loading = _ref.loading,disabled = _ref.disabled,name = _ref.name,value = _ref.value,onChange = _ref.onChange;
  // если тип не подходит или выключена опция icon — не показываем
  //если передано icon = false то рендерить икноку для очистки не нужно
  if (!typeName || !icon) return null;


  var action = function action() {};
  var notEmpty = false;
  switch (typeName) {

    case 'Select':
    case 'GroupSelect':
    case 'DateInput':
    case 'DateTimeInput':
      //там и так будет иконка календаря
      return null;
    case 'FileInput':
      return null;
    case 'Search':
    case 'GroupSearch':
      action = function action() {
        onChange === null || onChange === void 0 || onChange(null);
        onSearch === null || onSearch === void 0 || onSearch('');
      };
      notEmpty = (0, _InputContainer.isNotEmpty)(search);
      break;
    default:
      action = function action() {onChange === null || onChange === void 0 || onChange('');};
      notEmpty = (0, _InputContainer.isNotEmpty)(value);
      break;
  }

  if (!notEmpty || loading || disabled)
  {
    return null;
  }

  return (/*#__PURE__*/
    (0, _jsxRuntime.jsx)("img", {
      className: "close",
      src: _ic_close_only["default"],
      alt: "close",
      onClick: function onClick(e) {
        action();
      } }
    ));

};var _default = exports["default"] =

CloseIcon;
//# sourceMappingURL=CloseIcon.js.map