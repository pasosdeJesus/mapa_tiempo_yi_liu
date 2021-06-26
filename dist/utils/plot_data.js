"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePlotData = void 0;

var _utils = require("./utils");

var str = _interopRequireWildcard(require("./strings"));

var _plot_types = require("./plot_types");

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

var _other_diseases_stats = _interopRequireDefault(require("js-yaml-loader!../../assets/data/other_diseases_stats.yml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generatePlotData = function generatePlotData(params) {
  return generatePlotDataFunc[params.plotSpecificType](params);
};

exports.generatePlotData = generatePlotData;
var metricColors = {
  confirmedCount: 'var(--primary-color-4)',
  deadCount: 'var(--primary-color-10)',
  curedCount: 'var(--primary-color-2)'
};
var metricColorsDark = {
  confirmedCount: 'var(--primary-color-4)',
  deadCount: 'var(--lighter-grey)',
  curedCount: 'var(--primary-color-2)'
};

var generatePlotDataTotal = function generatePlotDataTotal(_ref) {
  var data = _ref.data,
      date = _ref.date,
      currentRegion = _ref.currentRegion,
      lang = _ref.lang,
      darkMode = _ref.darkMode,
      playing = _ref.playing,
      scale = _ref.scale,
      plotSpecificType = _ref.plotSpecificType,
      plotDetails = _ref.plotDetails,
      plotDates = _ref.plotDates,
      fullPlot = _ref.fullPlot;
  var fullData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var maxValue = 0;
  var minValue = 100000;
  var plotData = ['confirmedCount'].map(function (metric) {
    var counts = (0, _utils.getDataFromRegion)(data, currentRegion)[metric];
    return {
      id: _utils.metricText[metric][lang],
      color: darkMode ? metricColorsDark[metric] : metricColors[metric],
      data: Object.keys(counts).sort(function (a, b) {
        return (0, _utils.parseDate)(a) > (0, _utils.parseDate)(b) ? 1 : -1;
      }).filter(function (d) {
        return !playing || (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
      }).map(function (d) {
        if (counts[d] > maxValue) maxValue = counts[d];
        if (counts[d] < minValue) minValue = counts[d];
        return scale === 'linear' || counts[d] > 0 ? {
          x: d,
          y: counts[d]
        } : null;
      }).filter(function (x) {
        return x != null;
      })
    };
  });
  plotData = calcMovingAverage(plotData, plotDetails.movingAverage);
  if (!fullData) plotData = applyDateRange(plotData, plotDates);
  return _objectSpread({
    plotData: plotData
  }, getTickValues(scale, plotSpecificType, fullPlot, minValue, maxValue));
};

var generatePlotDataNew = function generatePlotDataNew(params) {
  var fullData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _generatePlotDataTota = generatePlotDataTotal(params, true),
      plotData = _generatePlotDataTota.plotData;

  plotData = convertTotalToNew(plotData);
  if (!fullData) plotData = applyDateRange(plotData, params.plotDates);
  return {
    plotData: plotData
  };
};

var generatePlotDataGrowthRate = function generatePlotDataGrowthRate(params) {
  var _ref2 = params.plotSpecificType !== 'growth_new' ? generatePlotDataTotal(params, true) : generatePlotDataNew(params, true),
      plotData = _ref2.plotData;

  var metric = params.metric;
  plotData.forEach(function (metricData) {
    metricData.data = metricData.data.reduce(function (s, v, i) {
      return [].concat(_toConsumableArray(s), [metricData.data[i - 1] && metricData.data[i - 1].y > 0 ? _objectSpread(_objectSpread({}, v), {}, {
        y: (v.y - metricData.data[i - 1].y) / metricData.data[i - 1].y
      }) : _objectSpread(_objectSpread({}, v), {}, {
        y: 0
      })]);
    }, []);
  });
  if (metric === 'confirmedCount') plotData = [plotData[2]];
  if (metric === 'curedCount') plotData = [plotData[1]];
  if (metric === 'deadCount') plotData = [plotData[0]];
  plotData = applyDateRange(plotData, params.plotDates);
  return {
    plotData: plotData
  };
};

var generatePlotDataDoublingTime = function generatePlotDataDoublingTime(params) {
  // set scale to log: temporary hack to remove zeros
  var _generatePlotDataGrow = generatePlotDataGrowthRate(_objectSpread(_objectSpread({}, params), {}, {
    scale: 'log'
  })),
      plotData = _generatePlotDataGrow.plotData;

  plotData[0].data = plotData[0].data.map(function (point) {
    return _objectSpread(_objectSpread({}, point), {}, {
      y: point.y > 0 ? Math.log(2) / Math.log(point.y + 1) : null,
      lang: params.lang
    });
  }).filter(function (point) {
    return point.y != null && point.y < 1000;
  }); // remove outliers

  return {
    plotData: plotData
  };
};

var generatePlotDataR0 = function generatePlotDataR0(params) {
  // set scale to log: temporary hack to remove zeros
  var _generatePlotDataGrow2 = generatePlotDataGrowthRate(_objectSpread(_objectSpread({}, params), {}, {
    metric: 'confirmedCount',
    scale: 'log'
  })),
      plotData = _generatePlotDataGrow2.plotData;

  var t_incubation = 5;
  var t_infectious = 5; // based on SEIR model
  // R0 = (1 + lambda * t_incubation) * (1 + lambda * t_infectious)

  plotData[0].data = plotData[0].data.map(function (point) {
    return _objectSpread(_objectSpread({}, point), {}, {
      y: (1 + Math.log(point.y + 1) * t_incubation) * (1 + Math.log(point.y + 1) * t_infectious),
      lang: params.lang
    });
  }).filter(function (point) {
    return point.y < 20;
  }); // remove outliers

  return {
    plotData: plotData
  };
};

var generatePlotDataRate = function generatePlotDataRate(_ref3) {
  var data = _ref3.data,
      currentRegion = _ref3.currentRegion,
      darkMode = _ref3.darkMode,
      lang = _ref3.lang,
      date = _ref3.date,
      playing = _ref3.playing,
      plotDetails = _ref3.plotDetails,
      plotDates = _ref3.plotDates;
  var confirmedCounts = (0, _utils.getDataFromRegion)(data, currentRegion)['confirmedCount'];
  var metrics = plotDetails.recoveryRate === 'show' ? ['deadCount', 'curedCount'] : ['deadCount'];
  var plotData = metrics.map(function (metric) {
    var counts = (0, _utils.getDataFromRegion)(data, currentRegion)[metric];
    var newMetric = metric === 'deadCount' ? 'fatalityRate' : 'recoveryRate';
    return {
      id: _utils.metricText[newMetric][lang],
      color: darkMode ? metricColorsDark[metric] : metricColors[metric],
      data: Object.keys(counts).filter(function (d) {
        return !playing || (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
      }).map(function (d) {
        return {
          d: d,
          count: confirmedCounts[d] > 0 ? counts[d] / confirmedCounts[d] : 0
        };
      }).map(function (_ref4) {
        var d = _ref4.d,
            count = _ref4.count;
        return {
          x: d,
          y: count
        };
      })
    };
  });
  plotData = calcMovingAverage(plotData, plotDetails.movingAverage);
  plotData = applyDateRange(plotData, plotDates);
  return {
    plotData: plotData
  };
};

var generatePlotDataOneVsRest = function generatePlotDataOneVsRest(_ref5) {
  var data = _ref5.data,
      currentRegion = _ref5.currentRegion,
      metric = _ref5.metric,
      lang = _ref5.lang,
      date = _ref5.date,
      playing = _ref5.playing,
      scale = _ref5.scale,
      plotSpecificType = _ref5.plotSpecificType,
      plotDetails = _ref5.plotDetails,
      plotDates = _ref5.plotDates,
      fullPlot = _ref5.fullPlot;
  var maxValue = 0;
  var minValue = 100000;
  var currentData = (0, _utils.getDataFromRegion)(data, currentRegion);
  var counts = currentData[metric];
  var regionName = lang === 'zh' ? currentRegion[currentRegion.length - 1] : currentData.ENGLISH;
  regionName = (0, _utils.simplifyName)(regionName, lang);
  var parentRegion = currentRegion.length === 1 ? [str.GLOBAL_ZH] : currentRegion.slice(0, currentRegion.length - 1);
  var parentData = (0, _utils.getDataFromRegion)(data, parentRegion);
  var parentCounts = parentData[metric];
  var parentRegionName = lang === 'zh' ? parentRegion[parentRegion.length - 1] : parentData.ENGLISH;
  parentRegionName = (0, _utils.simplifyName)(parentRegionName, lang);
  var plotData = [];
  var parentPlotData = {
    id: lang === 'zh' ? "".concat(parentRegionName, " (").concat(_i18n["default"].REST[lang], ")") : "".concat(_i18n["default"].REST[lang], " of ").concat(parentRegionName),
    color: 'var(--primary-color-4)',
    data: Object.keys(parentCounts).filter(function (d) {
      return !playing || (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
    }).map(function (d) {
      if (counts[d] == null) return null;
      if (parentCounts[d] - counts[d] > maxValue) maxValue = parentCounts[d] - counts[d];
      if (parentCounts[d] - counts[d] < minValue) minValue = parentCounts[d] - counts[d];
      return scale === 'linear' || parentCounts[d] - counts[d] > 0 ? {
        x: d,
        y: parentCounts[d] - counts[d]
      } : null;
    }).filter(function (x) {
      return x != null;
    })
  };
  var currentPlotData = {
    id: regionName,
    color: 'var(--primary-color-2)',
    data: Object.keys(counts).filter(function (d) {
      return !playing || (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
    }).map(function (d) {
      if (parentCounts[d] == null) return null;
      if (counts[d] > maxValue) maxValue = counts[d];
      if (counts[d] < minValue) minValue = counts[d];
      return scale === 'linear' || counts[d] > 0 ? {
        x: d,
        y: counts[d]
      } : null;
    }).filter(function (x) {
      return x != null;
    })
  };
  plotData.push(parentPlotData);
  plotData.push(currentPlotData);

  if (plotSpecificType === 'one_vs_rest_new') {
    plotData = convertTotalToNew(plotData);
  }

  plotData = calcMovingAverage(plotData, plotDetails.movingAverage);
  plotData = applyDateRange(plotData, plotDates);
  return _objectSpread({
    plotData: plotData
  }, getTickValues(scale, plotSpecificType, fullPlot, minValue, maxValue));
};

var generatePlotDataSubregionRankings = function generatePlotDataSubregionRankings(_ref6) {
  var data = _ref6.data,
      currentRegion = _ref6.currentRegion,
      metric = _ref6.metric,
      lang = _ref6.lang,
      darkMode = _ref6.darkMode,
      playing = _ref6.playing,
      date = _ref6.date,
      plotDates = _ref6.plotDates,
      plotSpecificType = _ref6.plotSpecificType;
  var currentData = getCurrentData(data, currentRegion);
  var subregions = playing ? getSubregions(data, currentRegion, metric, 10) : getSubregions(data, currentRegion, metric, 10, date);
  var regionIndices = {};
  var dates = [];
  var plotData = subregions.map(function (region, i) {
    dates = [].concat(_toConsumableArray(dates), _toConsumableArray(Object.keys(currentData[region][metric])));
    dates = _toConsumableArray(new Set(dates));
    regionIndices[region] = i;
    return region;
  }).map(function (region, i) {
    var id = lang === 'zh' ? region : currentData[region].ENGLISH;
    var dd = Object.keys(currentData[region][metric]).sort(function (a, b) {
      return (0, _utils.parseDate)(a) > (0, _utils.parseDate)(b) ? 1 : -1;
    }).filter(function (d) {
      return (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
    }).filter(function (d) {
      return (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(plotDates[1]) && (0, _utils.parseDate)(d) >= (0, _utils.parseDate)(plotDates[0]);
    });
    var counts = dd.map(function (d) {
      return currentData[region][metric][d];
    });
    var count = counts[counts.length - 1];
    if (plotSpecificType === 'most_affected_subregions_new') count = counts.length >= 2 ? counts[counts.length - 1] - counts[counts.length - 2] : counts[counts.length - 1];
    return {
      id: (0, _utils.simplifyName)(id, lang),
      fullId: id,
      name: region,
      color: darkMode ? "var(--primary-color-".concat(i < 7 ? i : i + 1, ")") : "var(--primary-color-".concat(10 - i, ")"),
      count: count,
      data: []
    };
  });
  dates = dates.sort(function (a, b) {
    return (0, _utils.parseDate)(a) > (0, _utils.parseDate)(b) ? 1 : -1;
  });
  var regionSkipped = {};
  dates.filter(function (d) {
    return (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
  }).filter(function (d) {
    return (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(plotDates[1]) && (0, _utils.parseDate)(d) >= (0, _utils.parseDate)(plotDates[0]);
  }).forEach(function (d, i) {
    var regionCounts = [];
    plotData.forEach(function (region) {
      var counts = currentData[region.name][metric][d] ? currentData[region.name][metric][d] : 0;

      if (plotSpecificType === 'most_affected_subregions_new') {
        if (i > 0 && currentData[region.name][metric][dates[i - 1]]) counts = counts - currentData[region.name][metric][dates[i - 1]];
      }

      regionCounts.push({
        region: region.name,
        counts: counts
      });
    });
    regionCounts = regionCounts.sort(function (a, b) {
      return a.counts <= b.counts ? 1 : -1;
    });
    regionCounts.forEach(function (region, i) {
      if (region.counts === 0 && regionSkipped[region.region] == null) {
        plotData[regionIndices[region.region]].data.push({
          x: d,
          y: null
        });
      } else {
        regionSkipped[region.region] = true;
        plotData[regionIndices[region.region]].data.push({
          x: d,
          y: i + 1
        });
      }
    });
  });
  return {
    plotData: plotData,
    dates: dates
  };
};

var generatePlotDataSubregionStream = function generatePlotDataSubregionStream(_ref7) {
  var data = _ref7.data,
      currentRegion = _ref7.currentRegion,
      lang = _ref7.lang,
      playing = _ref7.playing,
      date = _ref7.date,
      plotDates = _ref7.plotDates,
      metric = _ref7.metric,
      plotSpecificType = _ref7.plotSpecificType,
      fullPlot = _ref7.fullPlot;
  var currentData = getCurrentData(data, currentRegion);
  var dates = [];
  var plotData = [];
  var sortBy = plotSpecificType === 'subregion_active_stream' ? 'confirmedCount' : metric;
  var numOfRegions = !fullPlot ? 5 : 9;
  var subregionsData = getSubregions(data, currentRegion, sortBy, numOfRegions).map(function (region) {
    dates = [].concat(_toConsumableArray(dates), _toConsumableArray(Object.keys(currentData[region]['confirmedCount'])));
    dates = _toConsumableArray(new Set(dates));
    return region;
  }).map(function (region) {
    var id = lang === 'zh' ? region : currentData[region].ENGLISH;
    return {
      id: (0, _utils.simplifyName)(id, lang),
      fullId: id,
      name: region
    };
  });
  var plotKeys = subregionsData.map(function (x) {
    return x.id;
  }); // at least (numOfRegions + 1) subregions

  if (Object.keys(currentData).length >= numOfRegions + 5) plotKeys = [].concat(_toConsumableArray(plotKeys), [_i18n["default"].OTHERS[lang]]);
  plotKeys = plotKeys.reverse();
  dates = dates.sort(function (a, b) {
    return (0, _utils.parseDate)(a) > (0, _utils.parseDate)(b) ? 1 : -1;
  });
  dates = dates.filter(function (d) {
    return (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(plotDates[1]) && (0, _utils.parseDate)(d) >= (0, _utils.parseDate)(plotDates[0]);
  }); // no subregions

  if (subregionsData.length === 0) {
    dates = Object.keys(currentData['confirmedCount']).sort(function (a, b) {
      return (0, _utils.parseDate)(a) > (0, _utils.parseDate)(b) ? 1 : -1;
    });
    var id = lang === 'zh' ? currentRegion[currentRegion.length - 1] : currentData.ENGLISH;
    id = (0, _utils.simplifyName)(id, lang);
    plotKeys = [id];
  }

  dates.filter(function (d) {
    return !playing || (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
  }).forEach(function (d, i) {
    var subregionCounts = {};
    subregionsData.forEach(function (region) {
      if (plotSpecificType === 'subregion_active_stream') {
        var confirmedCount = currentData[region.name]['confirmedCount'][d] ? currentData[region.name]['confirmedCount'][d] : 0;
        var deadCount = currentData[region.name]['deadCount'][d] ? currentData[region.name]['deadCount'][d] : 0;
        var curedCount = currentData[region.name]['curedCount'][d] ? currentData[region.name]['curedCount'][d] : 0;
        var remainingConfirmed = Math.max(confirmedCount - deadCount - curedCount, 0);
        subregionCounts[region.id] = remainingConfirmed;
      } else {
        var count = currentData[region.name][metric][d] ? currentData[region.name][metric][d] : 0;
        if (plotSpecificType === 'subregion_new_stream' && currentData[region.name][metric][dates[i - 1]]) count -= currentData[region.name][metric][dates[i - 1]];
        subregionCounts[region.id] = count;
      }
    });
    var otherConfirmedCount = 0;
    var otherDeadCount = 0;
    var otherCuredCount = 0; // compute number of remaining confirmed cases from non-top-5 subregions

    Object.keys(currentData).filter(function (region) {
      return !['confirmedCount', 'deadCount', 'curedCount', 'ENGLISH', str.GLOBAL_ZH].includes(region);
    }).filter(function (region) {
      return !subregionsData.map(function (x) {
        return x.name;
      }).includes(region);
    }).forEach(function (region) {
      var confirmedCount = currentData[region]['confirmedCount'][d] ? currentData[region]['confirmedCount'][d] : 0;
      var deadCount = currentData[region]['deadCount'][d] ? currentData[region]['deadCount'][d] : 0;
      var curedCount = currentData[region]['curedCount'][d] ? currentData[region]['curedCount'][d] : 0;
      otherConfirmedCount += confirmedCount;
      otherDeadCount += deadCount;
      otherCuredCount += curedCount;

      if (plotSpecificType === 'subregion_new_stream') {
        var confirmedCountPrevious = currentData[region]['confirmedCount'][dates[i - 1]] ? currentData[region]['confirmedCount'][dates[i - 1]] : 0;
        var deadCountPrevious = currentData[region]['deadCount'][dates[i - 1]] ? currentData[region]['deadCount'][dates[i - 1]] : 0;
        var curedCountPrevious = currentData[region]['curedCount'][dates[i - 1]] ? currentData[region]['curedCount'][dates[i - 1]] : 0;
        otherConfirmedCount -= confirmedCountPrevious;
        otherDeadCount -= deadCountPrevious;
        otherCuredCount -= curedCountPrevious;
      }
    });
    var otherCount = 0;
    if (metric === 'confirmedCount') otherCount = Math.max(otherConfirmedCount, 0);
    if (metric === 'deadCount') otherCount = Math.max(otherDeadCount, 0);
    if (metric === 'curedCount') otherCount = Math.max(otherCuredCount, 0);
    if (plotSpecificType === 'subregion_active_stream') otherCount = Math.max(otherConfirmedCount - otherDeadCount - otherCuredCount, 0);
    if (Object.keys(currentData).length >= 10) subregionCounts[_i18n["default"].OTHERS[lang]] = otherCount; // no subregions

    if (subregionsData.length === 0) {
      var confirmedCount = currentData['confirmedCount'][d] ? currentData['confirmedCount'][d] : 0;
      var deadCount = currentData['deadCount'][d] ? currentData['deadCount'][d] : 0;
      var curedCount = currentData['curedCount'][d] ? currentData['curedCount'][d] : 0;
      var remainingConfirmed = Math.max(confirmedCount - deadCount - curedCount, 0);

      var _id = lang === 'zh' ? currentRegion[currentRegion.length - 1] : currentData.ENGLISH;

      _id = (0, _utils.simplifyName)(_id, lang);
      subregionCounts[_id] = plotSpecificType === 'subregion_active_stream' ? remainingConfirmed : Math.max(currentData[metric][d] ? currentData[metric][d] : 0, 0);
    }

    plotData.push(subregionCounts);
  });
  return {
    plotData: plotData,
    dates: dates,
    plotKeys: plotKeys
  };
};

var generatePlotDataFatalityLine = function generatePlotDataFatalityLine(_ref8) {
  var data = _ref8.data,
      currentRegion = _ref8.currentRegion,
      date = _ref8.date,
      darkMode = _ref8.darkMode,
      lang = _ref8.lang,
      plotSpecificType = _ref8.plotSpecificType,
      plotDates = _ref8.plotDates;
  var confirmedCount = (0, _utils.getDataFromRegion)(data, currentRegion)['confirmedCount'];
  var deadCount = (0, _utils.getDataFromRegion)(data, currentRegion)['deadCount'];
  var plotData = [{
    id: 'fatality-line',
    color: darkMode ? 'var(--primary-color-2)' : 'var(--primary-color-5)',
    data: Object.keys(confirmedCount).filter(function (d) {
      return (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date) && confirmedCount[d] > 0 && (deadCount[d] > 0 || plotSpecificType === 'fatality_line' || plotSpecificType === 'fatality_line_only');
    }).filter(function (d) {
      return (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(plotDates[1]) && (0, _utils.parseDate)(d) >= (0, _utils.parseDate)(plotDates[0]);
    }).map(function (d) {
      return {
        d: d,
        cfr: deadCount[d] != null ? deadCount[d] / confirmedCount[d] : 0
      };
    }).map(function (_ref9) {
      var d = _ref9.d,
          cfr = _ref9.cfr;
      return {
        x: confirmedCount[d],
        y: plotSpecificType === 'fatality_line' || plotSpecificType === 'fatality_line_only' ? cfr : deadCount[d],
        date: d,
        lang: lang
      };
    })
  }];
  if (plotSpecificType === 'fatality_line' || plotSpecificType === 'fatality_line2') Object.keys(_other_diseases_stats["default"]).forEach(function (x) {
    plotData.push({
      id: x,
      color: 'var(--light-grey)',
      data: [{
        x: _other_diseases_stats["default"][x].confirmedCount,
        y: plotSpecificType === 'fatality_line' ? _other_diseases_stats["default"][x].deadCount / _other_diseases_stats["default"][x].confirmedCount : _other_diseases_stats["default"][x].deadCount,
        lang: lang,
        name: _other_diseases_stats["default"][x][lang],
        years: _other_diseases_stats["default"][x].years
      }]
    });
  });
  return {
    plotData: plotData
  };
};

var generatePlotDataSubregionFatality = function generatePlotDataSubregionFatality(_ref10) {
  var data = _ref10.data,
      currentRegion = _ref10.currentRegion,
      date = _ref10.date,
      lang = _ref10.lang,
      darkMode = _ref10.darkMode,
      plotSpecificType = _ref10.plotSpecificType;
  var currentData = getCurrentData(data, currentRegion);
  var plotData = [];
  var maxValue = 0;
  var minValue = 100000;
  getSubregions(data, currentRegion).reverse().filter(function (region) {
    return currentData[region]['confirmedCount'][date] > 0 && currentData[region]['deadCount'][date] >= 0 && (currentData[region]['deadCount'][date] > 0 || plotSpecificType === 'subregion_fatality' || plotSpecificType === 'subregion_fatality_only');
  }).forEach(function (region, i) {
    var confirmedCount = currentData[region].confirmedCount[date];
    var deadCount = currentData[region].deadCount[date];
    maxValue = Math.max(maxValue, confirmedCount);
    minValue = Math.min(minValue, confirmedCount);
    plotData.push({
      id: region,
      color: darkMode ? 'rgba(222,73,104,0.6)' : 'rgba(183,55,121,0.5)',
      data: [{
        x: confirmedCount,
        y: plotSpecificType === 'subregion_fatality' || plotSpecificType === 'subregion_fatality_only' ? deadCount / confirmedCount : deadCount,
        regionName: lang === 'zh' ? region : currentData[region].ENGLISH,
        lang: lang
      }]
    });
  });
  if (plotSpecificType === 'subregion_fatality' || plotSpecificType === 'subregion_fatality2') Object.keys(_other_diseases_stats["default"]).forEach(function (x) {
    plotData.push({
      id: x,
      color: 'rgba(0,0,0,0)',
      data: [{
        x: _other_diseases_stats["default"][x].confirmedCount,
        y: plotSpecificType === 'subregion_fatality' ? _other_diseases_stats["default"][x].deadCount / _other_diseases_stats["default"][x].confirmedCount : _other_diseases_stats["default"][x].deadCount,
        lang: lang,
        name: _other_diseases_stats["default"][x][lang],
        years: _other_diseases_stats["default"][x].years,
        noClick: true
      }]
    });
  });

  var _getLogTickValues = getLogTickValues(minValue, maxValue),
      logTickMin = _getLogTickValues.logTickMin,
      logTickMax = _getLogTickValues.logTickMax;

  return {
    plotData: plotData,
    logTickMin: logTickMin,
    logTickMax: logTickMax
  };
};

var generatePlotDataSubregion = function generatePlotDataSubregion(_ref11) {
  var data = _ref11.data,
      date = _ref11.date,
      currentRegion = _ref11.currentRegion,
      lang = _ref11.lang,
      darkMode = _ref11.darkMode,
      playing = _ref11.playing,
      scale = _ref11.scale,
      metric = _ref11.metric,
      plotSpecificType = _ref11.plotSpecificType,
      plotDetails = _ref11.plotDetails,
      plotDates = _ref11.plotDates,
      fullPlot = _ref11.fullPlot;
  var currentData = getCurrentData(data, currentRegion);
  var maxValue = 0;
  var minValue = 100000;
  var numOfRegions = !fullPlot ? 6 : 10;
  var subregions = playing ? getSubregions(data, currentRegion, metric, numOfRegions) : getSubregions(data, currentRegion, metric, numOfRegions, date);
  var plotData = subregions.map(function (region, i) {
    var counts = currentData[region][metric];
    var id = lang === 'zh' ? region : currentData[region].ENGLISH;
    return {
      id: (0, _utils.simplifyName)(id, lang),
      fullId: id,
      name: region,
      color: darkMode ? "var(--primary-color-".concat(i < 7 ? i : i + 1, ")") : "var(--primary-color-".concat(10 - i, ")"),
      data: Object.keys(counts).filter(function (d) {
        return !playing || (0, _utils.parseDate)(d) <= (0, _utils.parseDate)(date);
      }).map(function (d) {
        if (counts[d] > maxValue) maxValue = counts[d];
        if (counts[d] < minValue) minValue = counts[d];
        return scale === 'linear' || counts[d] > 0 ? {
          x: d,
          y: counts[d],
          lang: lang
        } : null;
      }).filter(function (x) {
        return x != null;
      })
    };
  }).reverse();
  if (['subregion_new', 'subregion_new_shifted_10', 'subregion_new_shifted_100'].includes(plotSpecificType)) plotData = convertTotalToNew(plotData);
  plotData = calcMovingAverage(plotData, plotDetails.movingAverage);
  plotData = applyDateRange(plotData, plotDates);
  return _objectSpread({
    plotData: plotData
  }, getTickValues(scale, plotSpecificType, fullPlot, minValue, maxValue));
};

var generatePlotDataSubregionShifted = function generatePlotDataSubregionShifted(params) {
  var scale = params.scale,
      plotSpecificType = params.plotSpecificType,
      plotDetails = params.plotDetails,
      fullPlot = params.fullPlot;

  var _generatePlotDataSubr = generatePlotDataSubregion(params),
      plotData = _generatePlotDataSubr.plotData;

  var shifted = parseInt(plotDetails.shifted, 10);
  var maxValue = 0;
  var minValue = 100000;
  plotData.forEach(function (x) {
    var firstIdx = x.data.findIndex(function (point) {
      return point.y >= shifted;
    });

    if (firstIdx === -1) {
      x.data = [];
    } else {
      x.data = x.data.slice(firstIdx).map(function (point, i) {
        return _objectSpread(_objectSpread({}, point), {}, {
          date: point.x,
          x: i
        });
      });
    }

    maxValue = x.data.reduce(function (s, point) {
      return Math.max(s, point.y);
    }, maxValue);
    minValue = x.data.reduce(function (s, point) {
      return Math.min(s, point.y);
    }, minValue);
  });
  plotData = plotData.filter(function (x) {
    return x.data.length > 0;
  });
  return _objectSpread({
    plotData: plotData
  }, getTickValues(scale, plotSpecificType, fullPlot, minValue, maxValue));
};

var getCurrentData = function getCurrentData(data, currentRegion) {
  var currentData = currentRegion.length === 1 && currentRegion[0] === str.GLOBAL_ZH ? data : (0, _utils.getDataFromRegion)(data, currentRegion);
  return currentData;
}; // convert cumulative dataset to daily increasement dataset


var convertTotalToNew = function convertTotalToNew(plotData) {
  plotData.forEach(function (metricData) {
    metricData.data = metricData.data.reduce(function (s, v, i) {
      return [].concat(_toConsumableArray(s), [metricData.data[i - 1] ? _objectSpread(_objectSpread({}, v), {}, {
        y: v.y - metricData.data[i - 1].y
      }) : v]);
    }, []);
  });
  return plotData;
}; // moving averages


var calcMovingAverage = function calcMovingAverage(plotData, days) {
  if (days === '3d') {
    plotData.forEach(function (metricData) {
      metricData.data = metricData.data.reduce(function (s, v, i) {
        var newY = v.y;

        if (metricData.data[i - 1] && metricData.data[i + 1]) {
          newY = (metricData.data[i - 1].y + v.y + metricData.data[i + 1].y) / 3;
        }

        return [].concat(_toConsumableArray(s), [_objectSpread(_objectSpread({}, v), {}, {
          y: newY
        })]);
      }, []);
    });
  } else if (days === '5d') {
    plotData.forEach(function (metricData) {
      metricData.data = metricData.data.reduce(function (s, v, i) {
        var newY = v.y;

        if (metricData.data[i - 1] && metricData.data[i - 2] && metricData.data[i + 1] && metricData.data[i + 2]) {
          newY = (metricData.data[i - 2].y + metricData.data[i - 1].y + v.y + metricData.data[i + 1].y + metricData.data[i + 2].y) / 5;
        } else if (metricData.data[i - 1] && metricData.data[i + 1]) {
          newY = (metricData.data[i - 1].y + v.y + metricData.data[i + 1].y) / 3;
        }

        return [].concat(_toConsumableArray(s), [_objectSpread(_objectSpread({}, v), {}, {
          y: newY
        })]);
      }, []);
    });
  }

  return plotData;
}; // apply date range


var applyDateRange = function applyDateRange(plotData, plotDates) {
  plotData.forEach(function (p) {
    p.data = p.data.filter(function (x) {
      return (0, _utils.parseDate)(x.x) <= (0, _utils.parseDate)(plotDates[1]) && (0, _utils.parseDate)(x.x) >= (0, _utils.parseDate)(plotDates[0]);
    });
  });
  return plotData;
}; // data from top N subregions


var getSubregions = function getSubregions(data, currentRegion) {
  var metric = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'confirmedCount';
  var topN = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var date = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var currentData = getCurrentData(data, currentRegion);
  var subregions = Object.keys(currentData).filter(function (region) {
    return !['confirmedCount', 'deadCount', 'curedCount', 'ENGLISH', str.GLOBAL_ZH].includes(region);
  }).sort(function (a, b) {
    var aCounts = Math.max.apply(Math, _toConsumableArray(Object.values(currentData[a][metric])));
    var bCounts = Math.max.apply(Math, _toConsumableArray(Object.values(currentData[b][metric])));

    if (date != null) {
      aCounts = currentData[a][metric][date] ? currentData[a][metric][date] : 0;
      bCounts = currentData[b][metric][date] ? currentData[b][metric][date] : 0;
    }

    return aCounts <= bCounts ? 1 : -1;
  }); // top affected subregions

  return topN != null ? subregions.filter(function (region, i) {
    return i <= topN - 1 && Math.max.apply(Math, _toConsumableArray(Object.values(currentData[region][metric]))) !== 0;
  }) : subregions;
};

var getLogTickValues = function getLogTickValues(minValue, maxValue) {
  var logTickMin = minValue <= maxValue ? Math.max(Math.pow(10, Math.floor(Math.log10(minValue))), 1) : 1;
  var logTickMax = minValue <= maxValue ? Math.max(Math.pow(10, Math.ceil(Math.log10(maxValue))), 10) : 1;

  var tickValues = _toConsumableArray(Array(Math.log10(logTickMax / logTickMin) + 1).keys()).map(function (x) {
    return Math.pow(10, x) * logTickMin;
  });

  return {
    tickValues: tickValues,
    logTickMin: logTickMin,
    logTickMax: logTickMax
  };
};

var getTickValues = function getTickValues(scale, plotSpecificType, fullPlot, minValue, maxValue) {
  return scale === 'log' && _plot_types.plotSpecificTypes[plotSpecificType].log ? getLogTickValues(minValue, maxValue) : {
    tickValues: fullPlot ? 10 : 5,
    logTickMin: 1,
    logTickMax: 1
  };
};

var generatePlotDataFunc = {
  total: generatePlotDataTotal,
  "new": generatePlotDataNew,
  growth_total: generatePlotDataGrowthRate,
  growth_new: generatePlotDataGrowthRate,
  fatality_recovery: generatePlotDataRate,
  one_vs_rest: generatePlotDataOneVsRest,
  one_vs_rest_new: generatePlotDataOneVsRest,
  most_affected_subregions: generatePlotDataSubregionRankings,
  most_affected_subregions_new: generatePlotDataSubregionRankings,
  subregion_active_stream: generatePlotDataSubregionStream,
  fatality_line: generatePlotDataFatalityLine,
  fatality_line2: generatePlotDataFatalityLine,
  fatality_line_only: generatePlotDataFatalityLine,
  fatality_line2_only: generatePlotDataFatalityLine,
  doubling_time: generatePlotDataDoublingTime,
  r0: generatePlotDataR0,
  subregion_fatality: generatePlotDataSubregionFatality,
  subregion_fatality2: generatePlotDataSubregionFatality,
  subregion_fatality_only: generatePlotDataSubregionFatality,
  subregion_fatality2_only: generatePlotDataSubregionFatality,
  subregion_total: generatePlotDataSubregion,
  subregion_new: generatePlotDataSubregion,
  subregion_total_stream: generatePlotDataSubregionStream,
  subregion_new_stream: generatePlotDataSubregionStream,
  subregion_total_shifted_100: generatePlotDataSubregionShifted,
  subregion_new_shifted_100: generatePlotDataSubregionShifted,
  subregion_total_shifted_10: generatePlotDataSubregionShifted,
  subregion_new_shifted_10: generatePlotDataSubregionShifted
};