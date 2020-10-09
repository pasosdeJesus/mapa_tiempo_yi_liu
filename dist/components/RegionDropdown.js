"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RegionDropdown = function RegionDropdown(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      target = _ref.target,
      onClose = _ref.onClose;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, target, isOpen ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "region-menu"
  }, children) : null, isOpen ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "region-blanket",
    onClick: onClose
  }) : null);
};

var _default = RegionDropdown;
exports["default"] = _default;