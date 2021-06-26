"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _stream = require("@nivo/stream");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var StreamPlot = /*#__PURE__*/function (_Component) {
  _inherits(StreamPlot, _Component);

  var _super = _createSuper(StreamPlot);

  function StreamPlot() {
    _classCallCheck(this, StreamPlot);

    return _super.apply(this, arguments);
  }

  _createClass(StreamPlot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          darkMode = _this$props.darkMode,
          plotParameters = _this$props.plotParameters,
          plotDataAll = _this$props.plotDataAll,
          plotTheme = _this$props.plotTheme,
          offsetType = _this$props.offsetType,
          fullPlot = _this$props.fullPlot;
      if (plotParameters.type !== 'stream') return /*#__PURE__*/_react["default"].createElement("div", null);

      var colors = function colors(d) {
        return darkMode ? [0, 1, 2, 3, 4, 5].map(function (x) {
          return "var(--primary-color-".concat(x, ")");
        })[plotDataAll.plotKeys.length - 1 - d.index] : [8, 6, 5, 4, 3, 2].map(function (x) {
          return "var(--primary-color-".concat(x, ")");
        })[plotDataAll.plotKeys.length - 1 - d.index];
      };

      if (fullPlot) {
        colors = function colors(d) {
          return darkMode ? _toConsumableArray(Array(10).keys()).map(function (x) {
            return "var(--primary-color-".concat(x, ")");
          })[plotDataAll.plotKeys.length - 1 - d.index] : _toConsumableArray(Array(10).keys()).reverse().map(function (x) {
            return "var(--primary-color-".concat(x, ")");
          })[plotDataAll.plotKeys.length - 1 - d.index];
        };
      }

      return /*#__PURE__*/_react["default"].createElement(_stream.ResponsiveStream, {
        data: plotDataAll.plotData,
        keys: plotDataAll.plotKeys,
        theme: plotTheme,
        curve: "monotoneX",
        margin: {
          top: 20,
          right: 115,
          bottom: 35,
          left: 40
        },
        axisTop: null,
        axisRight: null,
        axisBottom: {
          orient: 'bottom',
          tickSize: 0,
          tickPadding: 5,
          tickRotation: !fullPlot ? 0 : -30,
          format: function format(idx) {
            var n = !fullPlot ? 5 : 10;
            return plotParameters.xAxisFormat(idx, Math.round(plotDataAll.plotData.length / n), plotDataAll.dates);
          }
        },
        axisLeft: {
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: 5,
          format: offsetType !== 'expand' ? plotParameters.yAxisFormat : '.0%'
        },
        offsetType: offsetType,
        colors: colors,
        fillOpacity: 0.85,
        animate: false,
        enableGridX: false,
        enableGridY: true,
        legends: plotParameters.legends,
        isInteractive: true,
        enableStackTooltip: true,
        tooltipFormat: function tooltipFormat(x) {
          return /*#__PURE__*/_react["default"].createElement("b", null, x.value);
        }
      });
    }
  }]);

  return StreamPlot;
}(_react.Component);

exports["default"] = StreamPlot;