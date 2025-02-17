"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useOnceWhen;
var _react = require("react");
function useOnceWhen(condition, effect) {
  var didRun = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (condition && !didRun.current) {
      effect();
      didRun.current = true;
    }
  }, [condition, effect]);
}