"use strict";function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _styles2 = require("../../styles");

var _useBaseInput2 = _interopRequireDefault(require("../../hooks/useBaseInput"));

var _Results = _interopRequireDefault(require("../components/Results"));

var _useOnceWhen = _interopRequireDefault(require("../../helpers/useOnceWhen"));var _jsxRuntime = require("react/jsx-runtime");function _interopRequireDefault(e) {return e && e.__esModule ? e : { "default": e };}function _interopRequireWildcard(e, t) {if ("function" == typeof WeakMap) var r = new WeakMap(),n = new WeakMap();return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {if (!t && e && e.__esModule) return e;var o,i,f = { __proto__: null, "default": e };if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;if (o = t ? n : r) {if (o.has(e)) return o.get(e);o.set(e, f);}for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);return f;})(e, t);}function _slicedToArray(r, e) {return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(r) {if (Array.isArray(r)) return r;} //@ts-ignore
//@ts-ignore
//@ts-ignore
//@ts-ignore
var Search = function Search(_ref)
















{var _ref$focused = _ref.focused,focused = _ref$focused === void 0 ? false : _ref$focused,_ref$setFocused = _ref.setFocused,setFocused = _ref$setFocused === void 0 ? function () {} : _ref$setFocused,_ref$onBlur = _ref.onBlur,onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,_ref$onKeyDown = _ref.onKeyDown,onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,_ref$onChange = _ref.onChange,onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,_ref$onClick = _ref.onClick,onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,_ref$disabled = _ref.disabled,disabled = _ref$disabled === void 0 ? false : _ref$disabled,_ref$className = _ref.className,className = _ref$className === void 0 ? '' : _ref$className,_ref$style = _ref.style,style = _ref$style === void 0 ? {} : _ref$style,id = _ref.id,name = _ref.name,value = _ref.value,error = _ref.error,_ref$options = _ref.options,options = _ref$options === void 0 ? [] : _ref$options,_ref$search = _ref.search,search = _ref$search === void 0 ? '' : _ref$search,_ref$onSearch = _ref.onSearch,onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch,_ref$clearOnClickOuts = _ref.clearOnClickOutside,clearOnClickOutside = _ref$clearOnClickOuts === void 0 ? true : _ref$clearOnClickOuts,_ref$addButton = _ref.addButton,addButton = _ref$addButton === void 0 ? false : _ref$addButton;

  var _useState = (0, _react.useState)(false),_useState2 = _slicedToArray(_useState, 2),selectOpen = _useState2[0],setSelectOpen = _useState2[1];
  var selectRef = (0, _react.useRef)(null);


  var _useBaseInput =



    (0, _useBaseInput2["default"])({
      disabled: disabled,
      name: name,
      onClick: onClick,
      onChange: onChange,
      setFocused: setFocused,
      onBlur: onBlur
    }),handleFocus = _useBaseInput.handleFocus,handleBlur = _useBaseInput.handleBlur,getName = _useBaseInput.getName;

  //обработка когда пришёл новый список и значение, проверяем можно ли установить из него search
  (0, _useOnceWhen["default"])(value && (options === null || options === void 0 ? void 0 : options.length), function () {
    //@ts-ignore
    var matchingOption = options.find(function (option) {return option.id === value;});

    if (matchingOption) {
      // Здесь можно добавить любое другое действие
      onSearch(matchingOption.name); // Например, вызов функции
    }
  });

  // // Обработка клика вне компонента
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {var _selectRef$current;
      // @ts-ignore
      if (focused && selectRef.current && !((_selectRef$current = selectRef.current) !== null && _selectRef$current !== void 0 && _selectRef$current.contains(event.target))) {
        handleClose();
        //если элемент не выбран, то очистим поле поиска
        if (!value) {
          //@ts-ignore
          var matchedOption = options.find(function (option) {return option.name.toLowerCase() === search.toLowerCase();});

          // Если найдено совпадение, выбираем этот элемент
          if (matchedOption) {
            onChange(matchedOption);
          } else {
            if (clearOnClickOutside)
            {
              onSearch('');
            }
          }
        }
      }
    };

    // Добавляем обработчик события при монтировании компонента
    document.addEventListener('mousedown', handleClickOutside);

    // Убираем обработчик события при размонтировании компонента
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [search, value, options, setSelectOpen, onChange, focused]);

  var handleChange = function handleChange(e, option) {
    e.stopPropagation();

    onChange(option);
    handleClose();
  };

  var handleOpen = function handleOpen(e) {
    setSelectOpen(true);
    setFocused(true);
  };

  var handleClose = function handleClose() {
    setSelectOpen(false);
    setFocused(false);
  };

  var handleSearch = function handleSearch(e) {
    onSearch(e.target.value);
  };

  var filteredOptions = (0, _react.useMemo)(function () {
    return options.filter(function (option) {
      // Первое условие: исключаем элемент с определённым id
      if (option.id === value) return false;

      // Второе условие: фильтрация по поисковому запросу
      if (!search) return true;

      var searchLower = search.toLowerCase();
      var parts = searchLower.split(' ');

      return parts.some(function (part) {var _option$name;return (
          option) === null || option === void 0 || (_option$name = option.name) === null || _option$name === void 0 ? void 0 : _option$name.
        toLowerCase().
        replace('ё', 'е').
        replace('й', 'и')
        //@ts-ignore
        .includes(part.replace('ё', 'е').replace('й', 'и'));}
      );
    });
  }, [options, value, search]);

  // @ts-ignore
  var inputClassName = "input ".concat(className).concat(focused ? ' focused' : '').concat(error !== null && error !== void 0 && error[0] ? ' error' : '');

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_styles.StyledSelect, {
    onClick: handleOpen,
    ref: selectRef, children: [/*#__PURE__*/

    (0, _jsxRuntime.jsx)(_styles2.StyledInput, {
      id: id,
      style: style,
      autoComplete: "off",
      disabled: disabled,
      className: inputClassName,
      type: "text",
      name: getName(name),
      value: search !== null && search !== void 0 ? search : '',
      onChange: handleSearch,
      onBlur: handleBlur }
    ), /*#__PURE__*/
    (0, _jsxRuntime.jsx)(_Results["default"], {
      addButton: addButton,
      active: selectOpen && !disabled,
      id: id,
      options: filteredOptions,
      handleClick: handleChange,
      idPrefix: getName(name) }
    )] }
  );

};

Search.displayName = 'Search';var _default = exports["default"] =

Search;
//# sourceMappingURL=Search.js.map