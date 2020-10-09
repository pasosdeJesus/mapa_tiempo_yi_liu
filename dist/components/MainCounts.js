"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils/utils");

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MainCounts = /*#__PURE__*/function (_Component) {
  _inherits(MainCounts, _Component);

  var _super = _createSuper(MainCounts);

  function MainCounts() {
    _classCallCheck(this, MainCounts);

    return _super.apply(this, arguments);
  }

  _createClass(MainCounts, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          currentRegion = _this$props.currentRegion,
          date = _this$props.date,
          lang = _this$props.lang,
          fullPlot = _this$props.fullPlot,
          fullTree = _this$props.fullTree;
      if (data == null) return /*#__PURE__*/_react["default"].createElement("div", null);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "counts-wrap"
      }, !fullPlot && !fullTree && ['confirmedCount', 'deadCount', 'curedCount'].map(function (metric) {
        var count = Object.keys((0, _utils.getDataFromRegion)(data, currentRegion)[metric]).length > 0 ? (0, _utils.getDataFromRegion)(data, currentRegion)[metric][date] : '—';
        var preDate = (0, _utils.previousDay)(date, '2019-09-01', '2050-01-01');
        var preCount = Object.keys((0, _utils.getDataFromRegion)(data, currentRegion)[metric]).length > 0 ? (0, _utils.getDataFromRegion)(data, currentRegion)[metric][preDate] : 0;
        var diff = 0;
        if (parseInt(count) != null && parseInt(preCount) != null) diff = parseInt(count) - parseInt(preCount);
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "".concat(metric, "-number"),
          className: "count-wrap"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "count"
        }, count ? count.toLocaleString() : 0), /*#__PURE__*/_react["default"].createElement("div", {
          className: "count-title"
        }, _utils.metricText[metric][lang]), /*#__PURE__*/_react["default"].createElement("div", {
          className: "count-daily"
        }, diff != null && !isNaN(diff) && /*#__PURE__*/_react["default"].createElement("span", null, "".concat(_i18n["default"].NEWCASE[lang], " ").concat(diff >= 0 ? '+' : '').concat(diff.toLocaleString()))));
      }));
    }
  }]);

  return MainCounts;
}(_react.Component);

exports["default"] = MainCounts;