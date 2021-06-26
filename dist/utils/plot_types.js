"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plotSpecificTypes = exports.plotTypes = exports.getSpecificPlotType = void 0;

var _react = _interopRequireDefault(require("react"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var integerFormat = function integerFormat(e) {
  return parseInt(e, 10) !== e ? '' : Math.abs(e) < 1000 ? e : Math.abs(e) < Math.pow(10, 6) ? "".concat(e / 1000, "K") : Math.abs(e) < Math.pow(10, 9) ? "".concat(e / Math.pow(10, 6), "M") : "".concat(e / Math.pow(10, 9), "B");
};

var absIntegerFormat = function absIntegerFormat(e) {
  return parseInt(e, 10) !== e ? '' : Math.abs(e) < 1000 ? Math.abs(e) : "".concat(Math.abs(e) / 1000, "K");
};

var streamTimeFormat = function streamTimeFormat(idx, interval, dates) {
  return idx % interval === 0 ? (0, _format["default"])((0, _utils.parseDate)(dates[idx]), 'M/d') : '';
};

var fatalityTooltip = function fatalityTooltip(yLabel, xLabel) {
  return function (_ref) {
    var point = _ref.point;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "plot-tooltip plot-tooltip-line"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: point.data.name || point.data.regionName ? 'plot-tooltip-bold' : ''
    }, point.data.name ? "".concat(point.data.name, " ").concat(point.data.years ? '(' + point.data.years + ')' : '') : point.data.regionName ? point.data.regionName : (0, _utils.formatDate)(point.data.date, point.data.lang)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, yLabel[point.data.lang]), /*#__PURE__*/_react["default"].createElement("span", {
      className: "plot-tooltip-bold"
    }, " ".concat(point.data.yFormatted))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, xLabel[point.data.lang]), /*#__PURE__*/_react["default"].createElement("span", {
      className: "plot-tooltip-bold"
    }, " ".concat(point.data.xFormatted))));
  };
};

var regionLegends = {
  anchor: 'right',
  direction: 'column',
  translateX: 100,
  itemWidth: 90,
  itemHeight: 20,
  itemTextColor: '#000',
  symbolSize: 12,
  symbolShape: 'circle'
};

var getSpecificPlotType = function getSpecificPlotType(plotType, plotDetails) {
  var specificType = '';

  if (plotType === 'plot_basic') {
    specificType = plotDetails.stats === 'cumulative' ? 'total' : 'new';
  } else if (plotType === 'plot_fatality_recovery') {
    specificType = 'fatality_recovery';
  } else if (plotType === 'plot_growth') {
    specificType = plotDetails.stats === 'cumulative' ? 'growth_total' : 'growth_new';
  } else if (plotType === 'plot_one_vs_rest') {
    specificType = plotDetails.stats === 'cumulative' ? 'one_vs_rest' : 'one_vs_rest_new';
  } else if (plotType === 'plot_fatality_line') {
    if (plotDetails.diseaseComparison === 'show') specificType = plotDetails.fatalityLine === 'rate' ? 'fatality_line' : 'fatality_line2';
    if (plotDetails.diseaseComparison === 'hide') specificType = plotDetails.fatalityLine === 'rate' ? 'fatality_line_only' : 'fatality_line2_only';
  } else if (plotType === 'plot_ranking') {
    specificType = plotDetails.stats === 'cumulative' ? 'most_affected_subregions' : 'most_affected_subregions_new';
  } else if (plotType === 'plot_subregion_basic') {
    specificType = plotDetails.stats === 'cumulative' ? 'subregion_total' : 'subregion_new';
  } else if (plotType === 'plot_subregion_stream') {
    specificType = plotDetails.stats === 'cumulative' ? 'subregion_total_stream' : 'subregion_new_stream';
  } else if (plotType === 'plot_subregion_active_stream') {
    specificType = 'subregion_active_stream';
  } else if (plotType === 'plot_subregion_fatality') {
    if (plotDetails.diseaseComparison === 'show') specificType = plotDetails.fatalityLine === 'rate' ? 'subregion_fatality' : 'subregion_fatality2';
    if (plotDetails.diseaseComparison === 'hide') specificType = plotDetails.fatalityLine === 'rate' ? 'subregion_fatality_only' : 'subregion_fatality2_only';
    /*} else if (plotType === 'plot_subregion_shifted') {
        if (plotDetails.shifted === '100')
            specificType =
                plotDetails.stats === 'cumulative' ? 'subregion_total_shifted_100' : 'subregion_new_shifted_100'
        if (plotDetails.shifted === '10')
            specificType =
                plotDetails.stats === 'cumulative' ? 'subregion_total_shifted_10' : 'subregion_new_shifted_10'
    */
  } else if (plotType === 'plot_doubling_time') {
    specificType = 'doubling_time';
  } else if (plotType === 'plot_r0') {
    specificType = 'r0';
  }

  return specificType;
};

exports.getSpecificPlotType = getSpecificPlotType;
var plotTypes = {
  plot_basic: {
    subregions: false,
    metricChange: false,
    statsChange: true,
    scaleChange: true,
    movingAverage: true,
    text: _i18n["default"].CASES
  },
  plot_ranking: {
    subregions: true,
    metricChange: true,
    statsChange: true,
    scaleChange: false,
    text: _i18n["default"].MOST_AFFECTED_SUBREGIONS
  },
  plot_subregion_basic: {
    subregions: true,
    metricChange: true,
    statsChange: true,
    scaleChange: true,
    movingAverage: true,
    text: _i18n["default"].SUBREGION
  },

  /*plot_subregion_shifted: {
      subregions: true,
      metricChange: true,
      statsChange: true,
      scaleChange: true,
      movingAverage: true,
      text: i18n.SUBREGION_SHIFTED
  },*/
  plot_subregion_active_stream: {
    subregions: false,
    metricChange: false,
    statsChange: false,
    scaleChange: false,
    text: _i18n["default"].SUBREGION_ACTIVE_STREAM
  }
};
exports.plotTypes = plotTypes;
var plotSpecificTypes = {
  total: {
    type: 'line',
    yAxisFormat: integerFormat,
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: ',d',
    log: true,
    legendItemWidth: 100
  },
  "new": {
    type: 'line',
    yAxisFormat: integerFormat,
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: ',d',
    log: false,
    legendItemWidth: 100
  },
  fatality_recovery: {
    type: 'line',
    yAxisFormat: '.2%',
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: '.2%',
    log: false,
    legendItemWidth: 150
  },
  growth_total: {
    type: 'line',
    yAxisFormat: '.0%',
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: '.2%',
    log: false,
    legendItemWidth: 50,
    yScale: {
      type: 'linear',
      min: 0,
      max: 1
    }
  },
  growth_new: {
    type: 'line',
    yAxisFormat: '.0%',
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: '.2%',
    log: false,
    legendItemWidth: 50,
    yScale: {
      type: 'linear',
      min: -2,
      max: 2
    }
  },
  one_vs_rest: {
    type: 'line',
    yAxisFormat: integerFormat,
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    log: true,
    legendItemWidth: 150
  },
  one_vs_rest_new: {
    type: 'line',
    yAxisFormat: integerFormat,
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    log: false,
    legendItemWidth: 150
  },
  fatality_line: {
    type: 'line',
    xFormat: ',d',
    yFormat: '.2%',
    xScale: {
      type: 'log',
      min: 1,
      max: Math.pow(10, 9)
    },
    yScale: {
      type: 'linear',
      min: 0,
      max: 0.4
    },
    xAxisFormat: integerFormat,
    yAxisFormat: '.0%',
    legends: [],
    hideMarkers: true,
    pointSize: 4,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    yTickValues: [0, 0.1, 0.2, 0.3, 0.4],
    xTickRotation: 0,
    xLegend: _i18n["default"].INFECTION_NUMBER,
    yLegend: _i18n["default"].FATALITY_RATE,
    enablePointLabel: true,
    enableSlices: false,
    pointLabel: function pointLabel(x) {
      return x.name;
    },
    tooltip: fatalityTooltip(_i18n["default"].FATALITY_RATE, _i18n["default"].INFECTION_NUMBER)
  },
  fatality_line2: {
    type: 'line',
    xFormat: ',d',
    yFormat: ',d',
    xScale: {
      type: 'log',
      min: 1,
      max: Math.pow(10, 9)
    },
    yScale: {
      type: 'log',
      min: 1,
      max: Math.pow(10, 8)
    },
    xAxisFormat: integerFormat,
    yAxisFormat: integerFormat,
    legends: [],
    hideMarkers: true,
    pointSize: 4,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    yTickValues: _toConsumableArray(Array(9).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    xTickRotation: 0,
    xLegend: _i18n["default"].INFECTION_NUMBER,
    yLegend: _i18n["default"].DEATH_NUMBER,
    enablePointLabel: true,
    enableSlices: false,
    pointLabel: function pointLabel(x) {
      return x.name === '中东呼吸综合征' ? "".concat(x.name).concat('　'.repeat(8)) : x.name === 'MERS' ? "".concat(x.name).concat('　'.repeat(3)) : x.name;
    },
    tooltip: fatalityTooltip(_i18n["default"].DEATH_NUMBER, _i18n["default"].INFECTION_NUMBER)
  },
  fatality_line_only: {
    type: 'line',
    xFormat: ',d',
    yFormat: '.2%',
    xScale: {
      type: 'log',
      min: 'auto',
      max: 'auto'
    },
    yScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto'
    },
    xAxisFormat: integerFormat,
    yAxisFormat: '.2%',
    legends: [],
    hideMarkers: true,
    pointSize: 4,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    xTickRotation: 0,
    xLegend: _i18n["default"].INFECTION_NUMBER,
    yLegend: _i18n["default"].FATALITY_RATE,
    enablePointLabel: false,
    enableSlices: false,
    tooltip: fatalityTooltip(_i18n["default"].FATALITY_RATE, _i18n["default"].INFECTION_NUMBER)
  },
  fatality_line2_only: {
    type: 'line',
    xFormat: ',d',
    yFormat: ',d',
    xScale: {
      type: 'log',
      min: 'auto',
      max: 'auto'
    },
    yScale: {
      type: 'log',
      min: 'auto',
      max: 'auto'
    },
    xAxisFormat: integerFormat,
    yAxisFormat: integerFormat,
    legends: [],
    hideMarkers: true,
    pointSize: 4,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    yTickValues: _toConsumableArray(Array(9).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    xTickRotation: 0,
    xLegend: _i18n["default"].INFECTION_NUMBER,
    yLegend: _i18n["default"].DEATH_NUMBER,
    enablePointLabel: false,
    enableSlices: false,
    tooltip: fatalityTooltip(_i18n["default"].DEATH_NUMBER, _i18n["default"].INFECTION_NUMBER)
  },
  doubling_time: {
    type: 'line',
    yAxisFormat: integerFormat,
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: 'd',
    log: false,
    legendItemWidth: 50,
    yLegend: _i18n["default"].CASE_DOUBLING_TIME_IN_DAYS,
    enableSlices: false,
    tooltip: function tooltip(_ref2) {
      var point = _ref2.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", null, (0, _utils.formatDate)(point.data.xFormatted, point.data.lang)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip-bold"
      }, " ".concat(point.data.yFormatted, " ").concat(_i18n["default"].DAYS[point.data.lang])));
    }
  },
  r0: {
    type: 'line',
    yAxisFormat: 'd',
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: '.2f',
    log: false,
    legends: [],
    yLegend: _i18n["default"].ESTIMATED_RO_SEIR,
    enableSlices: false,
    tooltip: function tooltip(_ref3) {
      var point = _ref3.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", null, (0, _utils.formatDate)(point.data.xFormatted, point.data.lang)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "R\u2080 \u2248 "), /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, point.data.yFormatted)));
    }
  },
  most_affected_subregions: {
    type: 'bump',
    log: false,
    tooltip: function tooltip(_ref4) {
      var serie = _ref4.serie;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip plot-tooltip-bump",
        style: {
          color: serie.color
        }
      }, serie.fullId, /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(serie.count)));
    }
  },
  most_affected_subregions_new: {
    type: 'bump',
    log: false,
    tooltip: function tooltip(_ref5) {
      var serie = _ref5.serie;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip plot-tooltip-bump",
        style: {
          color: serie.color
        }
      }, serie.fullId, /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(serie.count)));
    }
  },
  subregion_total: {
    type: 'line',
    margin: {
      right: 115,
      bottom: 30
    },
    yAxisFormat: integerFormat,
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: ',d',
    log: true,
    pointSize: 0,
    enableSlices: false,
    legends: [regionLegends],
    tooltip: function tooltip(_ref6) {
      var point = _ref6.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip-bold",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 12,
          width: 12,
          backgroundColor: point.color,
          marginRight: 5
        }
      })), /*#__PURE__*/_react["default"].createElement("span", null, point.serieId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, (0, _utils.formatDate)(point.data.xFormatted, point.data.lang)), /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(point.data.yFormatted))));
    }
  },
  subregion_new: {
    type: 'line',
    margin: {
      right: 115,
      bottom: 30
    },
    yAxisFormat: integerFormat,
    xAxisFormat: _i18n["default"].PLOT_DATE_FORMAT,
    yFormat: ',d',
    log: false,
    pointSize: 0,
    enableSlices: false,
    legends: [regionLegends],
    tooltip: function tooltip(_ref7) {
      var point = _ref7.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip-bold",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 12,
          width: 12,
          backgroundColor: point.color,
          marginRight: 5
        }
      })), /*#__PURE__*/_react["default"].createElement("span", null, point.serieId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, (0, _utils.formatDate)(point.data.xFormatted, point.data.lang)), /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(point.data.yFormatted))));
    }
  },
  subregion_total_stream: {
    type: 'stream',
    yAxisFormat: absIntegerFormat,
    xAxisFormat: streamTimeFormat,
    log: false,
    legends: [regionLegends]
  },
  subregion_new_stream: {
    type: 'stream',
    yAxisFormat: absIntegerFormat,
    xAxisFormat: streamTimeFormat,
    log: false,
    legends: [regionLegends]
  },
  subregion_active_stream: {
    type: 'stream',
    yAxisFormat: absIntegerFormat,
    xAxisFormat: streamTimeFormat,
    log: false,
    legends: [regionLegends]
  },
  subregion_fatality: {
    type: 'line',
    subregions: true,
    log: false,
    xLog: true,
    margin: {
      left: 60
    },
    xFormat: ',d',
    yFormat: '.2%',
    xScale: {
      type: 'log',
      min: 1,
      max: Math.pow(10, 9)
    },
    yScale: {
      type: 'linear',
      min: 0,
      max: 0.4
    },
    xAxisFormat: integerFormat,
    yAxisFormat: '.1%',
    legends: [],
    hideMarkers: true,
    pointSize: 10,
    pointBorderWidth: 2,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    yTickValues: [0, 0.1, 0.2, 0.3, 0.4],
    xTickRotation: 0,
    xLegend: _i18n["default"].CONFIRMED,
    yLegend: _i18n["default"].FATALITY_RATE,
    yLegendOffset: -50,
    enablePointLabel: true,
    enableSlices: false,
    pointLabelYOffset: -10,
    pointLabel: function pointLabel(x) {
      return x.name;
    },
    tooltip: fatalityTooltip(_i18n["default"].FATALITY_RATE, _i18n["default"].CONFIRMED)
  },
  subregion_fatality2: {
    type: 'line',
    subregions: true,
    log: false,
    xLog: true,
    xScale: {
      type: 'log',
      min: 1,
      max: Math.pow(10, 9)
    },
    yScale: {
      type: 'log',
      min: 1,
      max: Math.pow(10, 8)
    },
    margin: {
      left: 60
    },
    xFormat: ',d',
    yFormat: ',d',
    xAxisFormat: integerFormat,
    yAxisFormat: integerFormat,
    legends: [],
    hideMarkers: true,
    pointSize: 10,
    pointBorderWidth: 2,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    yTickValues: _toConsumableArray(Array(9).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    xTickRotation: 0,
    xLegend: _i18n["default"].CONFIRMED,
    yLegend: _i18n["default"].DEATHS,
    yLegendOffset: -50,
    enablePointLabel: true,
    enableSlices: false,
    pointLabelYOffset: -10,
    pointLabel: function pointLabel(x) {
      return x.name === '中东呼吸综合征' ? "".concat(x.name).concat('　'.repeat(8)) : x.name === 'MERS' ? "".concat(x.name).concat('　'.repeat(3)) : x.name;
    },
    tooltip: fatalityTooltip(_i18n["default"].DEATHS, _i18n["default"].CONFIRMED)
  },
  subregion_fatality_only: {
    type: 'line',
    subregions: true,
    log: false,
    xLog: true,
    margin: {
      left: 60
    },
    xFormat: ',d',
    yFormat: '.2%',
    xAxisFormat: integerFormat,
    yAxisFormat: '.1%',
    legends: [],
    hideMarkers: true,
    pointSize: 10,
    pointBorderWidth: 2,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    xTickRotation: 0,
    xLegend: _i18n["default"].CONFIRMED,
    yLegend: _i18n["default"].FATALITY_RATE,
    yLegendOffset: -50,
    enablePointLabel: false,
    enableSlices: false,
    tooltip: fatalityTooltip(_i18n["default"].FATALITY_RATE, _i18n["default"].CONFIRMED)
  },
  subregion_fatality2_only: {
    type: 'line',
    subregions: true,
    log: false,
    xLog: true,
    yScale: {
      type: 'log',
      min: 'auto',
      max: 'auto'
    },
    margin: {
      left: 60
    },
    xFormat: ',d',
    yFormat: ',d',
    xAxisFormat: integerFormat,
    yAxisFormat: integerFormat,
    legends: [],
    hideMarkers: true,
    pointSize: 10,
    pointBorderWidth: 2,
    xTickValues: _toConsumableArray(Array(10).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    yTickValues: _toConsumableArray(Array(9).keys()).map(function (x) {
      return Math.pow(10, x);
    }),
    xTickRotation: 0,
    xLegend: _i18n["default"].CONFIRMED,
    yLegend: _i18n["default"].DEATHS,
    yLegendOffset: -50,
    enablePointLabel: false,
    enableSlices: false,
    tooltip: fatalityTooltip(_i18n["default"].DEATHS, _i18n["default"].CONFIRMED)
  },
  subregion_total_shifted_100: {
    type: 'line',
    margin: {
      right: 115
    },
    yAxisFormat: integerFormat,
    xAxisFormat: 'd',
    xFormat: 'd',
    yFormat: ',d',
    xScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto'
    },
    log: true,
    pointSize: 0,
    enableSlices: false,
    legends: [regionLegends],
    xLegend: _i18n["default"].DAYS_AFTER_100_CASES,
    tooltip: function tooltip(_ref8) {
      var point = _ref8.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip-bold",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 12,
          width: 12,
          backgroundColor: point.color,
          marginRight: 5
        }
      })), /*#__PURE__*/_react["default"].createElement("span", null, point.serieId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "".concat(_i18n["default"].DAY_0[point.data.lang].replace(0, point.data.x), " (").concat((0, _utils.formatDate)(point.data.date, point.data.lang), ")")), /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(point.data.yFormatted))));
    }
  },
  subregion_new_shifted_100: {
    type: 'line',
    margin: {
      right: 115
    },
    yAxisFormat: integerFormat,
    xAxisFormat: 'd',
    xFormat: 'd',
    yFormat: ',d',
    xScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto'
    },
    log: false,
    pointSize: 0,
    enableSlices: false,
    legends: [regionLegends],
    xLegend: _i18n["default"].DAYS_AFTER_100_CASES,
    tooltip: function tooltip(_ref9) {
      var point = _ref9.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip-bold",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 12,
          width: 12,
          backgroundColor: point.color,
          marginRight: 5
        }
      })), /*#__PURE__*/_react["default"].createElement("span", null, point.serieId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "".concat(_i18n["default"].DAY_0[point.data.lang].replace(0, point.data.x), " (").concat((0, _utils.formatDate)(point.data.date, point.data.lang), ")")), /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(point.data.yFormatted))));
    }
  },
  subregion_total_shifted_10: {
    type: 'line',
    margin: {
      right: 115
    },
    yAxisFormat: integerFormat,
    xAxisFormat: 'd',
    xFormat: 'd',
    yFormat: ',d',
    xScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto'
    },
    log: true,
    pointSize: 0,
    enableSlices: false,
    legends: [regionLegends],
    xLegend: _i18n["default"].DAYS_AFTER_10_CASES,
    tooltip: function tooltip(_ref10) {
      var point = _ref10.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip-bold",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 12,
          width: 12,
          backgroundColor: point.color,
          marginRight: 5
        }
      })), /*#__PURE__*/_react["default"].createElement("span", null, point.serieId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "".concat(_i18n["default"].DAY_0[point.data.lang].replace(0, point.data.x), " (").concat((0, _utils.formatDate)(point.data.date, point.data.lang), ")")), /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(point.data.yFormatted))));
    }
  },
  subregion_new_shifted_10: {
    type: 'line',
    margin: {
      right: 115
    },
    yAxisFormat: integerFormat,
    xAxisFormat: 'd',
    xFormat: 'd',
    yFormat: ',d',
    xScale: {
      type: 'linear',
      min: 'auto',
      max: 'auto'
    },
    log: false,
    pointSize: 0,
    enableSlices: false,
    legends: [regionLegends],
    xLegend: _i18n["default"].DAYS_AFTER_10_CASES,
    tooltip: function tooltip(_ref11) {
      var point = _ref11.point;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip plot-tooltip-line"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "plot-tooltip-bold",
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: 12,
          width: 12,
          backgroundColor: point.color,
          marginRight: 5
        }
      })), /*#__PURE__*/_react["default"].createElement("span", null, point.serieId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, "".concat(_i18n["default"].DAY_0[point.data.lang].replace(0, point.data.x), " (").concat((0, _utils.formatDate)(point.data.date, point.data.lang), ")")), /*#__PURE__*/_react["default"].createElement("span", {
        className: "plot-tooltip-bold"
      }, " ".concat(point.data.yFormatted))));
    }
  }
};
exports.plotSpecificTypes = plotSpecificTypes;