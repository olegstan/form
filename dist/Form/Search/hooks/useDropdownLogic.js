"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDropdownLogic = void 0;
var _react = require("react");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var useDropdownLogic = exports.useDropdownLogic = function useDropdownLogic(props, wrapperRef, onSearch, handle) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    selectOpen = _useState2[0],
    setSelectOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hovered = _useState6[0],
    setHovered = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    handleArrow = _useState8[0],
    setHandleArrow = _useState8[1];
  var _useState9 = (0, _react.useState)(props.search || ''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchValue = _useState10[0],
    setSearchValue = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedItem = _useState12[0],
    setSelectedItem = _useState12[1];

  // Обработка клика вне компонента
  var handleClickOutside = (0, _react.useCallback)(function (e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      if (typeof props.onOutsideClick === 'function' && focused) {
        props.onOutsideClick(searchValue, selectedItem);
      }
      handleShowSelect(false);
      stopHandleArrows();
    }
  }, [focused, props, searchValue, selectedItem, wrapperRef]);
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
      stopHandleArrows();
    };
  }, [handleClickOutside]);

  // Обработка событий клавиатуры
  var onKeyDown = (0, _react.useCallback)(function (event) {
    var _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items;
    var searchLower = (searchValue || '').toLowerCase();
    var filteredItems = items.filter(function (item) {
      if (!searchLower) return true;
      var parts = searchLower.split(' ');
      var partsFound = 0;
      var _iterator = _createForOfIteratorHelper(parts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _item$name;
          var part = _step.value;
          var replacedPart = part.replace('ё', 'е').replace('й', 'и');
          var replacedName = item === null || item === void 0 || (_item$name = item.name) === null || _item$name === void 0 ? void 0 : _item$name.toLowerCase().replace('ё', 'е').replace('й', 'и');
          if (replacedPart.length > 0 && (replacedName === null || replacedName === void 0 ? void 0 : replacedName.indexOf(replacedPart)) !== -1) {
            partsFound++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return partsFound > 0;
    });
    switch (event.key) {
      case 'Down':
      case 'ArrowDown':
        if (hovered === false) {
          setHovered(0);
        } else {
          var length = filteredItems.length;
          var next = hovered + 1;
          if (next <= length - 1) {
            setHovered(next);
          }
        }
        break;
      case 'Up':
      case 'ArrowUp':
        {
          var prev = hovered - 1;
          if (prev >= 0) {
            setHovered(prev);
          }
          break;
        }
      case 'Enter':
        if (hovered !== false && filteredItems[hovered]) {
          var item = filteredItems[hovered];
          if (typeof handle === 'function') {
            handle(item);
          }
          handleShowSelect(false);
          stopHandleArrows();
          setSearchValue(item.name);
          setSelectedItem(item);
        }
        event.preventDefault();
        break;
      default:
        return;
    }
  }, [props, hovered, searchValue, handle]);
  (0, _react.useEffect)(function () {
    if (handleArrow) {
      window.addEventListener('keydown', onKeyDown, true);
    }
    return function () {
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, [handleArrow, onKeyDown]);
  var startHandleArrows = (0, _react.useCallback)(function () {
    if (!handleArrow) {
      setHandleArrow(true);
    }
  }, [handleArrow]);
  var stopHandleArrows = (0, _react.useCallback)(function () {
    setHandleArrow(false);
  }, []);
  var handleShowSelect = (0, _react.useCallback)(function (bool) {
    setSelectOpen(bool);
    setFocused(bool);
    if (bool) {
      startHandleArrows();
    } else {
      stopHandleArrows();
    }
  }, [startHandleArrows, stopHandleArrows]);
  var onChange = (0, _react.useCallback)(function (e) {
    var value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  }, [onSearch, props]);
  return {
    selectOpen: selectOpen,
    focused: focused,
    hovered: hovered,
    handleArrow: handleArrow,
    searchValue: searchValue,
    selectedItem: selectedItem,
    setSearchValue: setSearchValue,
    setSelectedItem: setSelectedItem,
    handleShowSelect: handleShowSelect,
    onChange: onChange,
    onKeyDown: onKeyDown,
    startHandleArrows: startHandleArrows,
    stopHandleArrows: stopHandleArrows
  };
};