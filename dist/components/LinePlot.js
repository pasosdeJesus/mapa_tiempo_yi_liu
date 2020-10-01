"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _line = require("@nivo/line");

var _reactDeviceDetect = require("react-device-detect");

var _utils = require("../utils/utils");

var str = _interopRequireWildcard(require("../utils/strings"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var LinePlot = /*#__PURE__*/function (_Component) {
  _inherits(LinePlot, _Component);

  var _super = _createSuper(LinePlot);

  function LinePlot() {
    _classCallCheck(this, LinePlot);

    return _super.apply(this, arguments);
  }

  _createClass(LinePlot, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          currentRegion = _this$props.currentRegion,
          fullPlot = _this$props.fullPlot,
          darkMode = _this$props.darkMode,
          scale = _this$props.scale,
          lang = _this$props.lang,
          playing = _this$props.playing,
          tempDate = _this$props.tempDate,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          plotParameters = _this$props.plotParameters,
          plotDataAll = _this$props.plotDataAll,
          tickValues = _this$props.tickValues,
          plotTheme = _this$props.plotTheme,
          currentMap = _this$props.currentMap;
      if (plotParameters.type !== 'line') return /*#__PURE__*/_react["default"].createElement("div", null);
      return /*#__PURE__*/_react["default"].createElement(_line.ResponsiveLine, {
        margin: _objectSpread({
          top: 20,
          right: 20,
          bottom: !fullPlot ? 60 : 80,
          left: 50
        }, plotParameters.margin),
        theme: plotTheme,
        animate: fullPlot,
        data: plotDataAll.plotData,
        colors: function colors(d) {
          return d.color;
        },
        xFormat: plotParameters.xFormat != null ? plotParameters.xFormat : 'time:%Y-%m-%d',
        yFormat: plotParameters.yFormat,
        xScale: plotParameters.xScale != null ? plotParameters.xScale : !plotParameters.xLog ? {
          type: 'time',
          format: '%Y-%m-%d',
          precision: 'day',
          useUTC: false
        } : {
          type: 'log',
          min: plotDataAll.logTickMin,
          max: plotDataAll.logTickMax
        },
        yScale: plotParameters.yScale != null ? plotParameters.yScale : scale === 'linear' || !plotParameters.log ? {
          type: 'linear',
          max: 'auto',
          min: 'auto'
        } : {
          type: 'log',
          min: plotDataAll.logTickMin,
          max: plotDataAll.logTickMax
        },
        axisLeft: {
          orient: 'left',
          // do not show ticks with non-integer values
          format: plotParameters.yAxisFormat,
          tickSize: 0,
          tickValues: plotParameters.yTickValues != null ? plotParameters.yTickValues : tickValues,
          legend: plotParameters.yLegend != null ? plotParameters.yLegend[lang] : '',
          legendOffset: plotParameters.yLegendOffset != null ? plotParameters.yLegendOffset : -40,
          legendPosition: 'middle'
        },
        axisBottom: {
          orient: 'bottom',
          format: Object(plotParameters.xAxisFormat) !== plotParameters.xAxisFormat ? plotParameters.xAxisFormat : plotParameters.xAxisFormat[lang],
          tickValues: plotParameters.xTickValues != null ? plotParameters.xTickValues : !fullPlot ? 5 : 10,
          tickRotation: plotParameters.xTickRotation != null ? plotParameters.xTickRotation : !fullPlot ? 0 : -30,
          legend: plotParameters.xLegend != null ? plotParameters.xLegend[lang] : '',
          legendOffset: 40,
          legendPosition: 'middle'
        },
        enableGridX: false,
        gridYValues: plotParameters.yTickValues != null ? plotParameters.yTickValues : tickValues,
        pointSize: plotParameters.pointSize != null ? plotParameters.pointSize : 6,
        pointBorderWidth: plotParameters.pointBorderWidth,
        pointBorderColor: darkMode ? 'var(--primary-color-4)' : 'var(--primary-color-5)',
        useMesh: true,
        enableArea: false,
        enablePointLabel: plotParameters.enablePointLabel,
        pointLabel: plotParameters.pointLabel,
        pointLabelYOffset: plotParameters.pointLabelYOffset ? plotParameters.pointLabelYOffset : -6,
        enableSlices: plotParameters.enableSlices != null ? plotParameters.enableSlices : 'x',
        curve: 'monotoneX',
        tooltip: plotParameters.tooltip,
        markers: plotParameters.hideMarkers ? [] : !playing && tempDate !== startDate && tempDate !== endDate ? [{
          axis: 'x',
          value: (0, _utils.parseDate)(tempDate),
          lineStyle: {
            stroke: darkMode ? 'var(--primary-color-4)' : 'var(--primary-color-5)',
            strokeWidth: 1,
            strokeDasharray: '6 6'
          }
        }] : [],
        legends: plotParameters.legends != null ? plotParameters.legends : [{
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: !fullPlot ? 50 : 70,
          itemsSpacing: 10,
          itemDirection: 'left-to-right',
          itemWidth: plotParameters.legendItemWidth,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: []
        }],
        onClick: function onClick(_ref) {
          var serieId = _ref.serieId,
              data = _ref.data;
          if (_reactDeviceDetect.isMobile || _reactDeviceDetect.isIPad13) return;
          if (!plotParameters.subregions || serieId == null || data.noClick) return;

          _this.props.regionToggle(currentRegion.length === 1 && currentRegion[0] === str.COLOMBIA_ZH ? [serieId] : [].concat(_toConsumableArray(currentRegion), [serieId]));
        }
      });
    }
  }]);

  return LinePlot;
}(_react.Component);

exports["default"] = LinePlot;