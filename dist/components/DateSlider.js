"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactCompoundSlider = require("react-compound-slider");

var _format = _interopRequireDefault(require("date-fns/format"));

var _d3Scale = require("d3-scale");

var _d3Time = require("d3-time");

var _utils = require("../utils/utils");

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function formatTick(ms, lang) {
  return (0, _format["default"])(new Date(ms), _i18n["default"].DATE_FORMAT_1[lang]);
}

var DateSlider = /*#__PURE__*/function (_Component) {
  _inherits(DateSlider, _Component);

  var _super = _createSuper(DateSlider);

  function DateSlider() {
    _classCallCheck(this, DateSlider);

    return _super.apply(this, arguments);
  }

  _createClass(DateSlider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date = _this$props.date,
          lang = _this$props.lang,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          handleDateChange = _this$props.handleDateChange,
          handleTempDateChange = _this$props.handleTempDateChange,
          fullMap = _this$props.fullMap,
          fullPlot = _this$props.fullPlot,
          plotDates = _this$props.plotDates;
      var min = (0, _utils.parseDate)(startDate);
      var max = (0, _utils.parseDate)(endDate);
      min = new Date(min.getTime() + 1000 * 60 * (max.getTimezoneOffset() - min.getTimezoneOffset()));
      var numberOfDays = (max - min) / (1000 * 3600 * 24);
      var dateTicksInterval = Math.round(numberOfDays / (!fullMap ? 10 : 15));
      var dateTicks = (0, _d3Scale.scaleTime)().domain([min, max]).ticks( // hack to fix unwanted behavior (https://github.com/d3/d3/issues/2240)
      _d3Time.timeDay.filter(function (d) {
        return _d3Time.timeDay.count(0, d) % dateTicksInterval === 0;
      })).map(function (d) {
        return +d;
      });
      var values = !fullPlot ? [date] : plotDates;
      values = values.map(function (x) {
        var d = (0, _utils.parseDate)(x);
        d = new Date(d.getTime() + 1000 * 60 * (max.getTimezoneOffset() - d.getTimezoneOffset()));
        return +d;
      });
      return /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Slider, {
        className: "date-slider",
        mode: 1,
        step: 1000 * 60 * 60 * 24,
        domain: [+min, +max],
        onChange: function onChange(time) {
          if (!fullPlot) handleDateChange((0, _utils.isoDate)(time[0], endDate).slice(0, 10));
        },
        onUpdate: handleTempDateChange,
        values: values
      }, /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Rail, null, function (_ref) {
        var getRailProps = _ref.getRailProps;
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", _extends({
          className: "date-slider-rail-outer"
        }, getRailProps())), /*#__PURE__*/_react["default"].createElement("div", {
          className: "date-slider-rail-inner"
        }));
      }), /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Handles, null, function (_ref2) {
        var handles = _ref2.handles,
            getHandleProps = _ref2.getHandleProps;
        return /*#__PURE__*/_react["default"].createElement("div", null, handles.map(function (handle, index) {
          return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
            key: "handle-".concat(index)
          }, /*#__PURE__*/_react["default"].createElement("div", _extends({
            className: "date-slider-handle-outer",
            style: {
              left: "".concat(handle.percent, "%")
            }
          }, getHandleProps(handle.id))), /*#__PURE__*/_react["default"].createElement("div", {
            role: "slider",
            className: "date-slider-handle-inner" // eslint-disable-next-line
            ,
            "aria-valuemin": +min // eslint-disable-next-line
            ,
            "aria-valuemax": +max,
            "aria-valuenow": handle.value,
            style: {
              left: "".concat(handle.percent, "%")
            }
          }));
        }));
      }), /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Tracks, {
        left: !fullPlot,
        right: false
      }, function (_ref3) {
        var tracks = _ref3.tracks,
            getTrackProps = _ref3.getTrackProps;
        return /*#__PURE__*/_react["default"].createElement("div", null, tracks.map(function (_ref4) {
          var id = _ref4.id,
              source = _ref4.source,
              target = _ref4.target;
          return /*#__PURE__*/_react["default"].createElement("div", _extends({
            key: "track-".concat(id),
            className: "date-slider-track",
            style: {
              left: "".concat(source.percent, "%"),
              width: "".concat(target.percent - source.percent, "%")
            }
          }, getTrackProps()));
        }));
      }), /*#__PURE__*/_react["default"].createElement(_reactCompoundSlider.Ticks, {
        values: dateTicks
      }, function (_ref5) {
        var ticks = _ref5.ticks;
        return /*#__PURE__*/_react["default"].createElement("div", null, ticks.map(function (tick, index) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: "tick-".concat(index)
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "date-slider-tick",
            style: {
              left: "".concat(tick.percent, "%")
            }
          }), /*#__PURE__*/_react["default"].createElement("div", {
            className: "date-slider-tick-text",
            style: {
              marginLeft: "".concat(-(100 / ticks.length) / 2, "%"),
              width: "".concat(100 / ticks.length, "%"),
              left: "".concat(tick.percent, "%")
            }
          }, formatTick(tick.value, lang)));
        }));
      }));
    }
  }]);

  return DateSlider;
}(_react.Component);

exports["default"] = DateSlider;