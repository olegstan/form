"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _styles2 = require("../styles");
var _useBaseInput2 = _interopRequireDefault(require("../hooks/useBaseInput"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Select = function Select(_ref) {
  var _ref$onKeyPress = _ref.onKeyPress,
    onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    id = _ref.id,
    name = _ref.name,
    value = _ref.value,
    error = _ref.error,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options;
  var _useBaseInput = (0, _useBaseInput2["default"])({
      name: name,
      onClick: onClick,
      onChange: onChange
    }),
    focused = _useBaseInput.focused,
    setFocused = _useBaseInput.setFocused,
    handleFocus = _useBaseInput.handleFocus,
    handleBlur = _useBaseInput.handleBlur,
    getName = _useBaseInput.getName;

  // Подтягиваем логику «базового инпута» из вашего хука
  // const {
  //   wrapperRef,
  // } = useBaseInput(props);

  // Локальный стейт: открыто ли меню
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    selectOpen = _useState2[0],
    setSelectOpen = _useState2[1];
  var selectRef = (0, _react.useRef)(null);
  var fakeOnChange = function fakeOnChange() {};
  var handleChange = function handleChange(item) {
    var _item$id;
    onChange({}, {
      name: name,
      id: (_item$id = item.id) !== null && _item$id !== void 0 ? _item$id : '',
      value: item
    });
    handleClose();
  };
  var handleOpen = function handleOpen() {
    setSelectOpen(true);
    setFocused(true);
  };
  var handleClose = function handleClose() {
    setSelectOpen(false);
    setFocused(false);
  };

  // // Обработка клика вне компонента
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        handleClose();
      }
    };

    // Добавляем обработчик события при монтировании компонента
    document.addEventListener('mousedown', handleClickOutside);

    // Убираем обработчик события при размонтировании компонента
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSelectOpen]);

  // // Подготавливаем список элементов (без выбранного)
  var filteredOptions = (0, _react.useMemo)(function () {
    return options.filter(function (option) {
      return option.id !== value;
    });
  }, [options, value]);
  var selectedOption = (0, _react.useMemo)(function () {
    return options.find(function (option) {
      return option.id === value;
    });
  }, [options, value]);
  console.log('-----------');
  console.log(name);
  console.log(value);
  var valueText = selectedOption ? selectedOption.name : '';
  var inputClassName = "".concat(className).concat(focused ? ' focused' : '').concat(error !== null && error !== void 0 && error[0] ? ' error' : '');
  console.log(valueText);
  console.log(selectedOption);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.StyledSelect, {
    onClick: handleOpen,
    ref: selectRef,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_styles2.StyledInput, {
      id: id,
      style: style,
      disabled: true,
      className: inputClassName,
      type: 'text',
      name: getName(name),
      value: valueText,
      onKeyPress: onKeyPress,
      onChange: fakeOnChange,
      onFocus: handleFocus,
      onBlur: handleBlur
    }), selectOpen && !disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.OptionsWrapper, {
      id: id ? "".concat(id, "-select") : undefined,
      children: filteredOptions.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledOption, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: "\u041D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
        })
      }) : filteredOptions.map(function (option) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.StyledOption, {
          value: option.id,
          onClick: function onClick() {
            return handleChange(option);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            children: option.name
          })
        }, option.id);
      })
    })]
  });
};
var _default = exports["default"] = Select;