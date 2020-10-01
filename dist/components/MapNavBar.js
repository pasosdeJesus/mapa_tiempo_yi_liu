"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _fi = require("react-icons/fi");

require("flag-icon-css/css/flag-icon.min.css");

var _utils = require("../utils/utils");

var _map_text = require("../utils/map_text");

var str = _interopRequireWildcard(require("../utils/strings"));

var _plot_types = require("../utils/plot_types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var MapNavBar = /*#__PURE__*/function (_Component) {
  _inherits(MapNavBar, _Component);

  var _super = _createSuper(MapNavBar);

  function MapNavBar() {
    var _this;

    _classCallCheck(this, MapNavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      dropdownOpen: false,
      height: -1
    };

    _this.updateHeight = function () {
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      _this.setState({
        height: height
      });
    };

    _this.mapToggle = function (map) {
      if (map !== _this.props.currentMap) {
        _this.props.mapToggle(map);

        if (map === str.CHINA_MAP1 || map === str.CHINA_MAP2) {
          if (_this.props.currentMap !== str.CHINA_MAP1 && _this.props.currentMap !== str.CHINA_MAP2) _this.props.regionToggle([str.CHINA_ZH], false);
        } else if (map === str.US_MAP || map === str.US_MAP2) {
          if (_this.props.currentMap !== str.US_MAP && _this.props.currentMap !== str.US_MAP2) _this.props.regionToggle([str.US_ZH], false);
        } else if (map === str.ITALY_MAP || map === str.ITALY_MAP2) {
          if (_this.props.currentMap !== str.ITALY_MAP && _this.props.currentMap !== str.ITALY_MAP2) _this.props.regionToggle([str.ITALY_ZH], false);
        } else if (map === str.HONGKONG_MAP) {
          _this.props.regionToggle([str.CHINA_ZH, str.HONGKONG_ZH], false);
        } else if (map !== str.TRANSMISSION) {
          _this.props.regionToggle([_map_text.mapText[map].regionName], false);
        }
      }

      _this.setState({
        dropdownOpen: !_this.state.dropdownOpen
      });
    };

    _this.metricToggle = function (event) {
      var newMetric = event.target.getAttribute('value');
      if (newMetric !== _this.props.metric) _this.props.metricToggle(newMetric);
    };

    return _this;
  }

  _createClass(MapNavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateHeight();
      window.addEventListener('resize', this.updateHeight);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          lang = _this$props.lang,
          metric = _this$props.metric,
          currentMap = _this$props.currentMap,
          fullPlot = _this$props.fullPlot,
          fullTree = _this$props.fullTree,
          plotType = _this$props.plotType;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "map-nav-bar-wrap ".concat(fullPlot && !_plot_types.plotTypes[plotType].metricChange ? 'grey-out' : '')
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "map-nav-bar"
      }, ['confirmedCount'].map(function (count) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: "map-nav-".concat(count),
          className: count === metric ? 'current' : ''
        }, /*#__PURE__*/_react["default"].createElement("div", {
          value: count,
          onClick: _this2.metricToggle
        }, _utils.metricText[count][lang]));
      })), !fullPlot && !fullTree && /*#__PURE__*/_react["default"].createElement(_reactstrap.UncontrolledDropdown, {
        className: "map-toggle"
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
        className: "map-toggle-button",
        tag: "span",
        "aria-expanded": this.state.dropdownOpen
      }, /*#__PURE__*/_react["default"].createElement(_fi.FiMap, {
        size: 14,
        style: {
          marginRight: 10
        }
      }), /*#__PURE__*/_react["default"].createElement("span", null, _map_text.mapText[currentMap].title[lang])), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, {
        modifiers: {
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: function fn(data) {
              return _objectSpread(_objectSpread({}, data), {}, {
                styles: _objectSpread(_objectSpread({}, data.styles), {}, {
                  overflowY: 'auto',
                  maxHeight: _this2.state.height * 0.5
                })
              });
            }
          }
        }
      }, ['South America', null].map(function (continent) {
        return Object.keys(_map_text.mapText).filter(function (map) {
          return _map_text.mapText[map].continent === continent || _map_text.mapText[map].continent && _map_text.mapText[map].continent['en'] === continent;
        }).map(function (map, idx) {
          return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
            key: "map-".concat(idx)
          }, map === str.TRANSMISSION ? /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            divider: true
          }) : /*#__PURE__*/_react["default"].createElement("div", null), idx === 0 && continent != null && continent !== 'Global' ? /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            divider: true
          }), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            header: true
          }, _map_text.mapText[map].continent[lang])) : /*#__PURE__*/_react["default"].createElement("div", null), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            className: currentMap === map ? 'current' : '',
            onClick: function onClick() {
              return _this2.mapToggle(map);
            }
          }, map !== str.TRANSMISSION && /*#__PURE__*/_react["default"].createElement("span", {
            className: "flag-icon ".concat(_map_text.mapText[map].flagCode ? 'flag-icon-' + _map_text.mapText[map].flagCode : '')
          }), _map_text.mapText[map].title[lang]));
        });
      }))));
    }
  }]);

  return MapNavBar;
}(_react.Component);

exports["default"] = MapNavBar;