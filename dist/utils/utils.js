"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTreeData = exports.updateDarkMode = exports.simplifyName = exports.getDataFromRegion = exports.metricText = exports.isoDate = exports.formatDate = exports.previousDay = exports.nextDay = exports.parseDate = void 0;

var _addDays = _interopRequireDefault(require("date-fns/addDays"));

var _subDays = _interopRequireDefault(require("date-fns/subDays"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

var str = _interopRequireWildcard(require("./strings"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var parseDate = function parseDate(date) {
  var _date$substr$split = date.substr(0, 10).split('-'),
      _date$substr$split2 = _slicedToArray(_date$substr$split, 3),
      year = _date$substr$split2[0],
      month = _date$substr$split2[1],
      day = _date$substr$split2[2];

  return new Date(year, month - 1, day);
};

exports.parseDate = parseDate;

var nextDay = function nextDay(date, startDate, endDate) {
  var newDay = (0, _addDays["default"])(parseDate(date), 1);
  var lastDay = parseDate(endDate);
  return newDay <= lastDay ? (0, _format["default"])(newDay, 'yyyy-MM-dd') : startDate;
};

exports.nextDay = nextDay;

var previousDay = function previousDay(date, startDate, endDate) {
  var newDay = (0, _subDays["default"])(parseDate(date), 1);
  var firstDay = parseDate(startDate);
  return newDay >= firstDay ? (0, _format["default"])(newDay, 'yyyy-MM-dd') : endDate;
};

exports.previousDay = previousDay;

var formatDate = function formatDate(date, lang) {
  return (0, _format["default"])(parseDate(date), _i18n["default"].DATE_FORMAT_2[lang]);
};

exports.formatDate = formatDate;

var isoDate = function isoDate(date, endDate) {
  var d = new Date(date);
  return new Date(d.getTime() - parseDate(endDate).getTimezoneOffset() * 60000).toISOString();
};

exports.isoDate = isoDate;
var metricText = {
  totalcasos: _i18n["default"].TOTAL,
  confirmedCount: _i18n["default"].CONFIRMED,
  deadCount: _i18n["default"].DEATHS,
  curedCount: _i18n["default"].RECOVERED,
  fatalityRate: _i18n["default"].FATALITY_RATE,
  recoveryRate: _i18n["default"].RECOVERY_RATE
};
exports.metricText = metricText;

var getDataFromRegion = function getDataFromRegion(data, region) {
  return [data].concat(_toConsumableArray(region)).reduce(function (s, x) {
    return s[x];
  });
};

exports.getDataFromRegion = getDataFromRegion;

var simplifyName = function simplifyName(name, lang) {
  var simplified = name; // remove parenthesis to save space for legend

  if (lang === 'en') simplified = name.split('(')[0].trim();
  if (lang === 'en') simplified = simplified.replace('United States of America', 'USA');
  if (lang === 'en') simplified = simplified.replace('United Kingdom', 'UK');
  if (lang === 'en') simplified = simplified.replace('International Conveyance', "Int'l Conveyance");
  if (lang === 'en') simplified = simplified.replace(' District', '');
  if (lang === 'en') simplified = simplified.replace(' County', '');
  if (lang === 'zh') simplified = simplified.replace('（来自钻石公主号）', '').trim();
  return simplified;
};

exports.simplifyName = simplifyName;

var updateDarkMode = function updateDarkMode(isDarkMode) {
  document.body.style.background = !isDarkMode ? '#fff' : 'var(--darker-grey)';

  if (isDarkMode) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};

exports.updateDarkMode = updateDarkMode;

var generateTreeData = function generateTreeData(obj, date, lang) {
  var simplified = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var childrenLabel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'children';
  var sortBy = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var rootRegion = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : str.GLOBAL_ZH;
  var moreCounts = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var preDate = previousDay(date, '2019-09-01', '2050-01-01');
  var data = Object.entries(obj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];

    return !['confirmedCount', 'deadCount', 'curedCount', 'ENGLISH', str.GLOBAL_ZH].includes(k);
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    var currentRegion = rootRegion === str.GLOBAL_ZH ? k : "".concat(rootRegion, ".").concat(k);
    var newdata = {
      name: k,
      displayName: lang === 'zh' ? k : v.ENGLISH,
      region: currentRegion,
      confirmedCount: Object.keys(v.confirmedCount).length === 0 ? NaN : v.confirmedCount[date] ? v.confirmedCount[date] : 0,
      deadCount: Object.keys(v.deadCount).length === 0 ? NaN : v.deadCount[date] ? v.deadCount[date] : 0,
      curedCount: Object.keys(v.curedCount).length === 0 ? NaN : v.curedCount[date] ? v.curedCount[date] : 0
    };

    if (moreCounts) {
      var preConfirmedCount = preDate in v.confirmedCount ? v.confirmedCount[preDate] : newdata.confirmedCount;
      var preDeadCount = preDate in v.deadCount ? v.deadCount[preDate] : newdata.deadCount;
      newdata = _objectSpread(_objectSpread({}, newdata), {}, {
        active: newdata.confirmedCount - newdata.deadCount - newdata.curedCount,
        newConfirmed: newdata.confirmedCount - preConfirmedCount,
        newDead: newdata.deadCount - preDeadCount,
        fatalityRate: newdata.deadCount / newdata.confirmedCount,
        recoveryRate: newdata.curedCount / newdata.confirmedCount
      });
    }

    if (Object.keys(v).length > 4) {
      newdata[childrenLabel] = generateTreeData(v, date, lang, simplified, childrenLabel, sortBy, currentRegion, moreCounts);
    }

    return newdata;
  });
  return sortBy ? data.sort(function (a, b) {
    return a[sortBy] > b[sortBy] || isNaN(b[sortBy]) ? -1 : 1;
  }) : data;
};

exports.generateTreeData = generateTreeData;