"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapText = void 0;

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

var str = _interopRequireWildcard(require("../utils/strings"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapText = {
  WORLD: {
    title: _i18n["default"].WORLD_MAP,
    regionName: str.GLOBAL_ZH,
    flagCode: 'un',
    continent: _i18n["default"].WORLD_MAP
  },
  CHN1: {
    title: _i18n["default"].CHINA_MAP1,
    regionName: str.CHINA_ZH,
    flagCode: 'cn',
    continent: _i18n["default"].ASIA
  },
  CHN2: {
    title: _i18n["default"].CHINA_MAP2,
    regionName: str.CHINA_ZH,
    flagCode: 'cn',
    continent: _i18n["default"].ASIA
  },
  IRN: {
    title: _i18n["default"].IRAN_MAP,
    regionName: str.IRAN_ZH,
    flagCode: 'ir',
    continent: _i18n["default"].ASIA
  },
  EUROPE: {
    title: _i18n["default"].EUROPE,
    regionName: str.GLOBAL_ZH,
    flagCode: 'eu',
    continent: _i18n["default"].EUROPE
  },
  ITA: {
    title: _i18n["default"].ITALY_MAP,
    regionName: str.ITALY_ZH,
    flagCode: 'it',
    continent: _i18n["default"].EUROPE
  },
  ITA2: {
    title: _i18n["default"].ITALY_MAP2,
    regionName: str.ITALY_ZH,
    flagCode: 'it',
    continent: _i18n["default"].EUROPE
  },
  ESP: {
    title: _i18n["default"].SPAIN_MAP,
    regionName: str.SPAIN_ZH,
    flagCode: 'es',
    continent: _i18n["default"].EUROPE
  },
  DEU: {
    title: _i18n["default"].GERMANY_MAP,
    regionName: str.GERMANY_ZH,
    flagCode: 'de',
    continent: _i18n["default"].EUROPE
  },
  FRA: {
    title: _i18n["default"].FRANCE_MAP,
    regionName: str.FRANCE_ZH,
    flagCode: 'fr',
    continent: _i18n["default"].EUROPE
  },
  US: {
    title: _i18n["default"].US_MAP,
    regionName: str.US_ZH,
    flagCode: 'us',
    continent: _i18n["default"].NORTH_AMERICA
  },
  US2: {
    title: _i18n["default"].US_MAP2,
    regionName: str.US_ZH,
    flagCode: 'us',
    continent: _i18n["default"].NORTH_AMERICA
  },
  KOR: {
    title: _i18n["default"].KOREA_MAP,
    regionName: str.KOREA_ZH,
    flagCode: 'kr',
    continent: _i18n["default"].ASIA
  },
  CHE: {
    title: _i18n["default"].SWITZERLAND_MAP,
    regionName: str.SWITZERLAND_ZH,
    flagCode: 'ch',
    continent: _i18n["default"].EUROPE
  },
  GBR: {
    title: _i18n["default"].UK_MAP,
    regionName: str.UK_ZH,
    flagCode: 'gb',
    continent: _i18n["default"].EUROPE
  },
  NLD: {
    title: _i18n["default"].NETHERLANDS_MAP,
    regionName: str.NETHERLANDS_ZH,
    flagCode: 'nl',
    continent: _i18n["default"].EUROPE
  },
  BEL: {
    title: _i18n["default"].BELGIUM_MAP,
    regionName: str.BELGIUM_ZH,
    flagCode: 'be',
    continent: _i18n["default"].EUROPE
  },
  IND: {
    title: _i18n["default"].INDIA_MAP,
    regionName: str.INDIA_ZH,
    flagCode: 'in',
    continent: _i18n["default"].ASIA
  },
  JPN: {
    title: _i18n["default"].JAPAN_MAP,
    regionName: str.JAPAN_ZH,
    flagCode: 'jp',
    continent: _i18n["default"].ASIA
  },
  PAK: {
    title: _i18n["default"].PAKISTAN_MAP,
    regionName: str.PAKISTAN_ZH,
    flagCode: 'pk',
    continent: _i18n["default"].ASIA
  },
  MYS: {
    title: _i18n["default"].MALAYSIA_MAP,
    regionName: str.MALAYSIA_ZH,
    flagCode: 'my',
    continent: _i18n["default"].ASIA
  },
  PHL: {
    title: _i18n["default"].PHILIPPINES_MAP,
    regionName: str.PHILIPPINES_ZH,
    flagCode: 'ph',
    continent: _i18n["default"].ASIA
  },
  SAU: {
    title: _i18n["default"].SAUDI_ARABIA_MAP,
    regionName: str.SAUDI_ARABIA_ZH,
    flagCode: 'sa',
    continent: _i18n["default"].ASIA
  },
  IDN: {
    title: _i18n["default"].INDONESIA_MAP,
    regionName: str.INDONESIA_ZH,
    flagCode: 'id',
    continent: _i18n["default"].ASIA
  },
  THA: {
    title: _i18n["default"].THAILAND_MAP,
    regionName: str.THAILAND_ZH,
    flagCode: 'th',
    continent: _i18n["default"].ASIA
  },
  AUT: {
    title: _i18n["default"].AUSTRIA_MAP,
    regionName: str.AUSTRIA_ZH,
    flagCode: 'at',
    continent: _i18n["default"].EUROPE
  },
  PRT: {
    title: _i18n["default"].PORTUGAL_MAP,
    regionName: str.PORTUGAL_ZH,
    flagCode: 'pt',
    continent: _i18n["default"].EUROPE
  },
  NOR: {
    title: _i18n["default"].NORWAY_MAP,
    regionName: str.NORWAY_ZH,
    flagCode: 'no',
    continent: _i18n["default"].EUROPE
  },
  AUS: {
    title: _i18n["default"].AUSTRALIA_MAP,
    regionName: str.AUSTRALIA_ZH,
    flagCode: 'au',
    continent: _i18n["default"].OCEANIA
  },
  CAN: {
    title: _i18n["default"].CANADA_MAP,
    regionName: str.CANADA_ZH,
    flagCode: 'ca',
    continent: _i18n["default"].NORTH_AMERICA
  },
  SWE: {
    title: _i18n["default"].SWEDEN_MAP,
    regionName: str.SWEDEN_ZH,
    flagCode: 'se',
    continent: _i18n["default"].EUROPE
  },
  RUS: {
    title: _i18n["default"].RUSSIA_MAP,
    regionName: str.RUSSIA_ZH,
    flagCode: 'ru',
    continent: _i18n["default"].EUROPE
  },
  IRL: {
    title: _i18n["default"].IRELAND_MAP,
    regionName: str.IRELAND_ZH,
    flagCode: 'ie',
    continent: _i18n["default"].EUROPE
  },
  CZE: {
    title: _i18n["default"].CZECHIA_MAP,
    regionName: str.CZECHIA_ZH,
    flagCode: 'cz',
    continent: _i18n["default"].EUROPE
  },
  ROU: {
    title: _i18n["default"].ROMANIA_MAP,
    regionName: str.ROMANIA_ZH,
    flagCode: 'ro',
    continent: _i18n["default"].EUROPE
  },
  POL: {
    title: _i18n["default"].POLAND_MAP,
    regionName: str.POLAND_ZH,
    flagCode: 'pl',
    continent: _i18n["default"].EUROPE
  },
  HRV: {
    title: _i18n["default"].CROATIA_MAP,
    regionName: str.CROATIA_ZH,
    flagCode: 'hr',
    continent: _i18n["default"].EUROPE
  },
  UKR: {
    title: _i18n["default"].UKRAINE_MAP,
    regionName: str.UKRAINE_ZH,
    flagCode: 'ua',
    continent: _i18n["default"].EUROPE
  },
  FIN: {
    title: _i18n["default"].FINLAND_MAP,
    regionName: str.FINLAND_ZH,
    flagCode: 'fi',
    continent: _i18n["default"].EUROPE
  },
  HUN: {
    title: _i18n["default"].HUNGARY_MAP,
    regionName: str.HUNGARY_ZH,
    flagCode: 'hu',
    continent: _i18n["default"].EUROPE
  },
  DNK: {
    title: _i18n["default"].DENMARK_MAP,
    regionName: str.DENMARK_ZH,
    flagCode: 'dk',
    continent: _i18n["default"].EUROPE
  },
  SVK: {
    title: _i18n["default"].SLOVAKIA_MAP,
    regionName: str.SLOVAKIA_ZH,
    flagCode: 'sk',
    continent: _i18n["default"].EUROPE
  },
  ALB: {
    title: _i18n["default"].ALBANIA_MAP,
    regionName: str.ALBANIA_ZH,
    flagCode: 'al',
    continent: _i18n["default"].EUROPE
  },
  LVA: {
    title: _i18n["default"].LATVIA_MAP,
    regionName: str.LATVIA_ZH,
    flagCode: 'lv',
    continent: _i18n["default"].EUROPE
  },
  GRC: {
    title: _i18n["default"].GREECE_MAP,
    regionName: str.GREECE_ZH,
    flagCode: 'gr',
    continent: _i18n["default"].EUROPE
  },
  EST: {
    title: _i18n["default"].ESTONIA_MAP,
    regionName: str.ESTONIA_ZH,
    flagCode: 'ee',
    continent: _i18n["default"].EUROPE
  },
  SVN: {
    title: _i18n["default"].SLOVENIA_MAP,
    regionName: str.SLOVENIA_ZH,
    flagCode: 'si',
    continent: _i18n["default"].EUROPE
  },
  BRA: {
    title: _i18n["default"].BRAZIL_MAP,
    regionName: str.BRAZIL_ZH,
    flagCode: 'br',
    continent: _i18n["default"].SOUTH_AMERICA
  },
  CHL: {
    title: _i18n["default"].CHILE_MAP,
    regionName: str.CHILE_ZH,
    flagCode: 'cl',
    continent: _i18n["default"].SOUTH_AMERICA
  },
  MEX: {
    title: _i18n["default"].MEXICO_MAP,
    regionName: str.MEXICO_ZH,
    flagCode: 'mx',
    continent: _i18n["default"].NORTH_AMERICA
  },
  ECU: {
    title: _i18n["default"].ECUADOR_MAP,
    regionName: str.ECUADOR_ZH,
    flagCode: 'ec',
    continent: _i18n["default"].SOUTH_AMERICA
  },
  PER: {
    title: _i18n["default"].PERU_MAP,
    regionName: str.PERU_ZH,
    flagCode: 'pe',
    continent: _i18n["default"].SOUTH_AMERICA
  },
  COL: {
    title: _i18n["default"].COLOMBIA_MAP,
    regionName: str.COLOMBIA_ZH,
    flagCode: 'co',
    continent: _i18n["default"].SOUTH_AMERICA
  },
  ARG: {
    title: _i18n["default"].ARGENTINA_MAP,
    regionName: str.ARGENTINA_ZH,
    flagCode: 'ar',
    continent: _i18n["default"].SOUTH_AMERICA
  },
  ZAF: {
    title: _i18n["default"].SOUTH_AFRICA_MAP,
    regionName: str.SOUTH_AFRICA_ZH,
    flagCode: 'za',
    continent: _i18n["default"].AFRICA
  },
  HKG: {
    title: _i18n["default"].HONGKONG_MAP,
    regionName: str.HONGKONG_ZH,
    flagCode: 'hk',
    continent: _i18n["default"].ASIA
  },
  HTI: {
    title: _i18n["default"].HAITI_MAP,
    regionName: str.HAITI_ZH,
    flagCode: 'ht',
    continent: _i18n["default"].NORTH_AMERICA
  },
  GHA: {
    title: _i18n["default"].GHANA_MAP,
    regionName: str.GHANA_ZH,
    flagCode: 'gh',
    continent: _i18n["default"].AFRICA
  },
  DZA: {
    title: _i18n["default"].ALGERIA_MAP,
    regionName: str.ALGERIA_ZH,
    flagCode: 'dz',
    continent: _i18n["default"].AFRICA
  },
  NGA: {
    title: _i18n["default"].NIGERIA_MAP,
    regionName: str.NIGERIA_ZH,
    flagCode: 'ng',
    continent: _i18n["default"].AFRICA
  },
  SEN: {
    title: _i18n["default"].SENEGAL_MAP,
    regionName: str.SENEGAL_ZH,
    flagCode: 'sn',
    continent: _i18n["default"].AFRICA
  },
  MAR: {
    title: _i18n["default"].MOROCCO_MAP,
    regionName: str.MOROCCO_ZH,
    flagCode: 'ma',
    continent: _i18n["default"].AFRICA
  },
  BGD: {
    title: _i18n["default"].BANGLADESH_MAP,
    regionName: str.BANGLADESH_ZH,
    flagCode: 'bd',
    continent: _i18n["default"].ASIA
  },
  TRANSMISSION: {
    title: _i18n["default"].TRANSMISSION_NETWORK,
    continent: null
  }
};
exports.mapText = mapText;