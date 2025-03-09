"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDateTime = exports.formatDate = void 0;
var formatDate = exports.formatDate = function formatDate(dateObj) {
  if (!(dateObj instanceof Date)) return '';
  // @ts-ignore
  var day = String(dateObj.getDate()).padStart(2, '0');
  // @ts-ignore
  var month = String(dateObj.getMonth() + 1).padStart(2, '0');
  var year = dateObj.getFullYear();
  return "".concat(day, ".").concat(month, ".").concat(year);
};
var formatDateTime = exports.formatDateTime = function formatDateTime(dateObj) {
  if (!(dateObj instanceof Date)) return '';
  // @ts-ignore
  var day = String(dateObj.getDate()).padStart(2, '0');
  // @ts-ignore
  var month = String(dateObj.getMonth() + 1).padStart(2, '0');
  var year = dateObj.getFullYear().toString();
  // @ts-ignore
  var hour = String(dateObj.getHours()).padStart(2, '0');
  // @ts-ignore
  var minute = String(dateObj.getMinutes()).padStart(2, '0');
  // @ts-ignore
  var second = String(dateObj.getSeconds()).padStart(2, '0');
  return "".concat(day, ".").concat(month, ".").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second);
};