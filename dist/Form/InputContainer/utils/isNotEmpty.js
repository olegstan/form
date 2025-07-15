"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.isNotEmpty = isNotEmpty;function isNotEmpty(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'number') return value.toString().length > 0;
  return value.length > 0; // для строки (или массивов, если что-то такое)
}
//# sourceMappingURL=isNotEmpty.js.map