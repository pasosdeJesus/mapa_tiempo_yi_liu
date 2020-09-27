"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

var _plot_types = require("../utils/plot_types");

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

var PlotNavBar = /*#__PURE__*/function (_Component) {
  _inherits(PlotNavBar, _Component);

  var _super = _createSuper(PlotNavBar);

  function PlotNavBar() {
    _classCallCheck(this, PlotNavBar);

    return _super.apply(this, arguments);
  }

  _createClass(PlotNavBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          plotType = _this$props.plotType,
          plotSpecificType = _this$props.plotSpecificType,
          lang = _this$props.lang,
          _onSelect = _this$props.onSelect,
          plotDetails = _this$props.plotDetails,
          scale = _this$props.scale,
          scaleToggle = _this$props.scaleToggle;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-nav-bar"
      }, _plot_types.plotTypes[plotType].statsChange && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].TYPE[lang],
        texts: {
          cumulative: _i18n["default"].CUMULATIVE[lang],
          daily: _i18n["default"].DAILY[lang]
        },
        selected: plotDetails.stats,
        onSelect: function onSelect(s) {
          return _onSelect('stats', s);
        },
        alwaysShow: true
      }), (plotType === 'plot_fatality_line' || plotType === 'plot_subregion_fatality') && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].Y_AXIS[lang],
        texts: {
          rate: _i18n["default"].RATE[lang],
          deaths: _i18n["default"].DEATH_NUMBER2[lang]
        },
        selected: plotDetails.fatalityLine,
        onSelect: function onSelect(s) {
          return _onSelect('fatalityLine', s);
        }
      }), (plotType === 'plot_fatality_line' || plotType === 'plot_subregion_fatality') && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].COMPARISONS[lang],
        texts: {
          show: _i18n["default"].SHOW[lang],
          hide: _i18n["default"].HIDE[lang]
        },
        selected: plotDetails.diseaseComparison,
        onSelect: function onSelect(s) {
          return _onSelect('diseaseComparison', s);
        }
      }), plotType === 'plot_subregion_shifted' && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].DAY_0[lang],
        texts: {
          10: _i18n["default"].TEN_CASES[lang],
          100: _i18n["default"].HUNDRED_CASES[lang]
        },
        selected: plotDetails.shifted,
        onSelect: function onSelect(s) {
          return _onSelect('shifted', s);
        }
      }), _plot_types.plotTypes[plotType].scaleChange && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].SCALE[lang],
        texts: {
          linear: _i18n["default"].LINEAR_SCALE[lang],
          log: _i18n["default"].LOG_SCALE[lang]
        },
        selected: scale,
        onSelect: function onSelect(s) {
          return scaleToggle(s);
        },
        disabled: _plot_types.plotSpecificTypes[plotSpecificType].log ? false : true
      }), _plot_types.plotSpecificTypes[plotSpecificType].type === 'stream' && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].Y_AXIS[lang],
        texts: {
          expand: _i18n["default"].PERCENT[lang],
          silhouette: _i18n["default"].CASE_NUMBERS[lang]
        },
        selected: plotDetails.stream,
        onSelect: function onSelect(s) {
          return _onSelect('stream', s);
        }
      }), plotType === 'plot_fatality_recovery' && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].RECOVERY_RATE[lang],
        texts: {
          show: _i18n["default"].SHOW[lang],
          hide: _i18n["default"].HIDE[lang]
        },
        selected: plotDetails.recoveryRate,
        onSelect: function onSelect(s) {
          return _onSelect('recoveryRate', s);
        }
      }), _plot_types.plotTypes[plotType].movingAverage && /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        title: _i18n["default"].MOVING_AVERAGE[lang],
        texts: {
          '1d': '—',
          '3d': _i18n["default"].THREE_DAYS[lang],
          '5d': _i18n["default"].FIVE_DAYS[lang]
        },
        selected: plotDetails.movingAverage,
        onSelect: function onSelect(s) {
          return _onSelect('movingAverage', s);
        }
      }));
    }
  }]);

  return PlotNavBar;
}(_react.Component);

exports["default"] = PlotNavBar;