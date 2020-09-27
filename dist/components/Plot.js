"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ai = require("react-icons/ai");

var _reactDeviceDetect = require("react-device-detect");

var _PlotSelector = _interopRequireDefault(require("./PlotSelector"));

var _PlotNavBar = _interopRequireDefault(require("./PlotNavBar"));

var _LinePlot = _interopRequireDefault(require("./LinePlot"));

var _StreamPlot = _interopRequireDefault(require("./StreamPlot"));

var _BumpPlot = _interopRequireDefault(require("./BumpPlot"));

var _plot_data = require("../utils/plot_data");

var _utils = require("../utils/utils");

var _plot_types = require("../utils/plot_types");

var str = _interopRequireWildcard(require("../utils/strings"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var plotTheme = function plotTheme(darkMode, fullMode) {
  return {
    fontFamily: 'Saira, sans-serif',
    fontSize: fullMode ? 14 : 11,
    textColor: darkMode ? 'var(--lighter-grey)' : 'black',
    grid: {
      line: {
        stroke: darkMode ? 'var(--darkest-grey)' : 'var(--lighter-grey)'
      }
    },
    tooltip: {
      container: {
        background: darkMode ? 'var(--darkest-grey)' : 'white',
        color: darkMode ? 'var(--lighter-grey)' : 'black'
      }
    }
  };
};

var Plot = /*#__PURE__*/function (_Component) {
  _inherits(Plot, _Component);

  var _super = _createSuper(Plot);

  function Plot() {
    var _this;

    _classCallCheck(this, Plot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      height: 290,
      plotDetails: {
        stats: 'cumulative',
        fatalityLine: 'rate',
        stream: 'silhouette',
        diseaseComparison: 'show',
        recoveryRate: 'show',
        movingAverage: '1d',
        shifted: '100'
      },
      plotSpecificType: 'total'
    };

    _this.updateHight = function () {
      var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      _this.setState({
        height: vh < 850 && vw >= 992 ? 240 : 290
      });
    };

    _this.onSelect = function (s, v) {
      var state = {};
      state.plotDetails = _this.state.plotDetails;
      state.plotDetails[s] = v;

      _this.setState(state);

      _this.setSpecificPlotType(_this.props.plotType, state.plotDetails);
    };

    _this.setSpecificPlotType = function (plotType, plotDetails) {
      var specificType = (0, _plot_types.getSpecificPlotType)(plotType, plotDetails);

      _this.setState({
        plotSpecificType: specificType
      });
    };

    return _this;
  }

  _createClass(Plot, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateHight();
      window.addEventListener('resize', this.updateHight);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateHight);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          data = _this$props.data,
          currentRegion = _this$props.currentRegion;
      var currentRegionIsGlobal = currentRegion.length === 1 && currentRegion[0] === str.GLOBAL_ZH;
      var hasSubregions = Object.keys((0, _utils.getDataFromRegion)(data, currentRegion)).length > 4 || currentRegionIsGlobal;

      if (currentRegionIsGlobal && this.props.plotType === 'plot_one_vs_rest') {
        this.props.handlePlotTypeChange('plot_basic');
        this.setSpecificPlotType('plot_basic', this.state.plotDetails);
      }

      if (!hasSubregions && _plot_types.plotTypes[this.props.plotType].subregions) {
        this.props.handlePlotTypeChange('plot_basic');
        this.setSpecificPlotType('plot_basic', this.state.plotDetails);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          plotType = _this$props2.plotType,
          data = _this$props2.data,
          lang = _this$props2.lang,
          darkMode = _this$props2.darkMode,
          fullPlot = _this$props2.fullPlot,
          fullTree = _this$props2.fullTree,
          fullPlotToggle = _this$props2.fullPlotToggle,
          fullDimensions = _this$props2.fullDimensions;
      if (data == null || fullTree) return /*#__PURE__*/_react["default"].createElement("div", null);
      var plotParameters = _plot_types.plotSpecificTypes[this.state.plotSpecificType];
      var plotDataAll = (0, _plot_data.generatePlotData)(_objectSpread(_objectSpread({}, this.props), {}, {
        plotSpecificType: this.state.plotSpecificType,
        plotDetails: this.state.plotDetails
      }));
      var plotData = plotDataAll.plotData;
      var isDataEmpty = !['plot_subregion_active_stream', 'plot_subregion_stream'].includes(plotType) ? plotData.map(function (d) {
        return d.data.length;
      }).reduce(function (s, x) {
        return s + x;
      }, 0) === 0 : plotData.map(function (d) {
        return Object.keys(d).length;
      }).reduce(function (s, x) {
        return s + x;
      }, 0) === 0;
      var tickValues = isDataEmpty ? 0 : plotDataAll.tickValues != null ? plotDataAll.tickValues : 5;
      var FullScreenIcon = fullPlot ? _ai.AiOutlineFullscreenExit : _ai.AiOutlineFullscreen;

      var plotProps = _objectSpread(_objectSpread({}, this.props), {}, {
        plotParameters: plotParameters,
        plotDataAll: plotDataAll,
        tickValues: tickValues,
        plotTheme: plotTheme(darkMode, fullPlot)
      });

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-wrap",
        style: {
          height: !fullPlot ? 'auto' : fullDimensions.height - 100,
          width: !fullPlot ? '100%' : fullDimensions.width + 100
        }
      }, /*#__PURE__*/_react["default"].createElement(_PlotSelector["default"], _extends({}, this.props, this.state, {
        currentPlotType: plotType,
        onPlotTypeChange: function onPlotTypeChange(plotType) {
          _this2.setSpecificPlotType(plotType, _this2.state.plotDetails);

          _this2.props.handlePlotTypeChange(plotType);
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-with-nav-bar"
      }, /*#__PURE__*/_react["default"].createElement(_PlotNavBar["default"], _extends({}, this.props, this.state, {
        onSelect: this.onSelect
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: !fullPlot ? this.state.height : fullDimensions.height - 125,
          width: !fullPlot ? '100%' : fullDimensions.width - 70
        }
      }, isDataEmpty ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-no-data"
      }, /*#__PURE__*/_react["default"].createElement("span", null, _i18n["default"].NO_DATA[lang])) : /*#__PURE__*/_react["default"].createElement("div", null), !isDataEmpty && /*#__PURE__*/_react["default"].createElement(_LinePlot["default"], plotProps), !isDataEmpty && /*#__PURE__*/_react["default"].createElement(_BumpPlot["default"], plotProps), !isDataEmpty && /*#__PURE__*/_react["default"].createElement(_StreamPlot["default"], _extends({
        offsetType: this.state.plotDetails.stream
      }, plotProps)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-full-button",
        "data-tip": !fullPlot && !_reactDeviceDetect.isMobile && !_reactDeviceDetect.isIPad13 ? _i18n["default"].PLOT_SETTINGS[lang] : ''
      }, /*#__PURE__*/_react["default"].createElement(FullScreenIcon, {
        size: fullPlot ? 30 : 20,
        onClick: fullPlotToggle
      })))));
    }
  }]);

  return Plot;
}(_react.Component);

exports["default"] = Plot;