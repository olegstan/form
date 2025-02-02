"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Select;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Select(props) {
  // Подтягиваем логику «базового инпута» из вашего хука
  // const {
  //   wrapperRef,
  // } = useBaseInput(props);

  // Локальный стейт: открыто ли меню
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    selectOpen = _useState2[0],
    setSelectOpen = _useState2[1];

  // Аналог старого handleShowSelect
  var handleShowSelect = (0, _react.useCallback)(function (open) {
    if (!props.disabled) {
      setSelectOpen(open);
    }
  }, [props.disabled]);

  // Аналог вашей renderSelected
  var renderSelectedText = (0, _react.useCallback)(function () {
    var items = props.items,
      selected = props.selected,
      defaultText = props["default"],
      textLength = props.textLength;

    // Если нет выбранного item, отдаем props.default
    if (!selected) return defaultText;

    // Ищем name в items
    var name = null;
    items === null || items === void 0 || items.forEach(function (item) {
      if (parseInt(item.id, 10) === parseInt(selected.id, 10)) {
        name = item.name;
      }
    });

    // Если не нашли — тоже возвращаем default
    if (!name) return defaultText;

    // Обрезаем, если длиннее textLength
    if (textLength && name.length > textLength) {
      return name.slice(0, textLength - 1) + '...';
    }
    return name;
  }, [props]);

  // Аналог getArrow (если у вас есть разные иконки для style1 — пока оставляем логику)
  var getArrow = (0, _react.useCallback)(function () {
    if (props.className === 'style1') {
      // ...верните нужный файл
    }
    return require('../../assets/arrow.svg')["default"];
  }, [props.className]);

  // Обработка клика вне компонента
  (0, _react.useEffect)(function () {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        handleShowSelect(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, handleShowSelect]);

  // Подготавливаем список элементов (без выбранного)
  var _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    handle = props.handle,
    selected = props.selected;
  var resItems = items.filter(function (item) {
    if (selected && selected.id === item.id) {
      return false;
    }
    return true;
  });

  // Если есть ошибка — добавим стили
  var focusStyle = hasError ? {
    border: '1px solid #EF5E70'
  } : {};
  return null
  // <Selected
  //   id={props.id}
  //   className={`${props.className} selected`}
  //   onClick={() => handleShowSelect(true)}
  // >
  //   <span>{renderSelectedText()}</span>
  // </Selected>
  //
  // {/* Выпадающее меню: если selectOpen == true */}
  // {selectOpen && (
  //   <StyledSelect
  //     id={props.id + '-select'}
  //     className={`${props.className} select`}
  //     select
  //   >
  //     {/* Если есть элементы */}
  //     {resItems.length > 0 ? (
  //       resItems.map((item) => {
  //         const shortName =
  //           props.textLength && item.name && item.name.length > props.textLength
  //             ? item.name.substr(0, props.textLength - 1) + '...'
  //             : item.name;
  //         return (
  //           <Item
  //             key={item.id}
  //             id={props.id + '-' + item.id}
  //             className={`${props.className} item`}
  //             onClick={() => {
  //               handle(item);
  //               handleShowSelect(false);
  //             }}
  //           >
  //             <span>{shortName}</span>
  //           </Item>
  //         );
  //       })
  //     ) : (
  //       // Если нет элементов
  //       <Item
  //         className={`${props.className} item`}
  //         onClick={() => handleShowSelect(false)}
  //       >
  //         <span>Нет элементов</span>
  //       </Item>
  //     )}
  //   </StyledSelect>
  // )}

  // <img
  //   className="arrow"
  //   src={getArrow()}
  //   alt=""
  //   onClick={() => handleShowSelect(true)}
  // />
  ;
}