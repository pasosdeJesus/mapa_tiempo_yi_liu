"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSimpleMaps = require("react-simple-maps");

var _d3Scale = require("d3-scale");

var _d3ScaleChromatic = require("d3-scale-chromatic");

var _pattern = require("@vx/pattern");

var _reactDeviceDetect = require("react-device-detect");

var _tinycolor = require("@ctrl/tinycolor");

var _fa = require("react-icons/fa");

var _reactToggle = _interopRequireDefault(require("react-toggle"));

require("react-toggle/style.css");

var _maps = _interopRequireDefault(require("js-yaml-loader!../../assets/data/maps.yml"));

var _utils = require("../utils/utils");

var str = _interopRequireWildcard(require("../utils/strings"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

var _WORLD = _interopRequireDefault(require("../../assets/maps/WORLD.json"));

var _gadm36_COL_ = _interopRequireDefault(require("../../assets/maps/gadm36_COL_1.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Map = /*#__PURE__*/function (_Component) {
  _inherits(Map, _Component);

  var _super = _createSuper(Map);

  function Map() {
    var _this;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      loaded: false,
      cursor: [0, 0],
      clicked: false,
      showTransmissions: false
    };

    _this.handleGeographyClick = function (region) {
      return function () {
        console.log(region); // no se sabe or que this es undefined 
        //if (!this.state.clicked || region == null) return 

        _this.props.regionToggle(region.split('.'));
      };
    };

    _this.onZoomEnd = function (event, state) {
      _this.props.handleMapZoomChange(state.zoom);
    };

    _this.getConfig = function (config, defaultConfig) {
      return config != null ? config.split(',').map(function (d) {
        return parseInt(d, 10);
      }) : defaultConfig;
    };

    _this.getColorScale = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          currentRegion = _this$props.currentRegion,
          scale = _this$props.scale,
          metric = _this$props.metric,
          darkMode = _this$props.darkMode;
      var currentMap = _maps["default"][_this.props.currentMap];
      var currentScale = scale === 'linear' ? _d3Scale.scaleLinear : _d3Scale.scaleLog;
      var maxCount = currentMap["maxScale_".concat(metric)];
      var mapScale = currentScale().domain([1, maxCount]).clamp(true);

      var colorConvert = function colorConvert(x) {
        return darkMode ? x * 0.95 + 0.05 : 0.95 - x * 0.95;
      };

      var colorScale = (0, _d3Scale.scaleSequential)(function (d) {
        if (!_this.state.showTransmissions || _this.props.currentMap !== str.WORLD_MAP) {
          var color = new _tinycolor.TinyColor((0, _d3ScaleChromatic.interpolateMagma)(colorConvert(mapScale(d))));
          if (!darkMode) return color.toRgbString();
          return color.desaturate(10).toRgbString();
        } else {
          var greyedColor = new _tinycolor.TinyColor((0, _d3ScaleChromatic.interpolateMagma)(colorConvert(mapScale(d)))).desaturate(100);
          if (!darkMode) return greyedColor.setAlpha(0.6).toRgbString(); // make the colors distinguishable from dark background

          return greyedColor.getLuminance() < 0.09 ? greyedColor.darken(5).setAlpha(0.9).toRgbString() : greyedColor.lighten(5).setAlpha(0.9).toRgbString();
        }
      });
      return {
        colorScale: colorScale,
        mapScale: mapScale
      };
    };

    _this.getStrokeColor = function (counts) {
      var _this$getColorScale = _this.getColorScale(),
          colorScale = _this$getColorScale.colorScale,
          mapScale = _this$getColorScale.mapScale;

      var darkMode = _this.props.darkMode;
      var tinyColor = new _tinycolor.TinyColor(colorScale(counts));

      if (!darkMode) {
        return tinyColor.isDark() ? colorScale(mapScale.invert(mapScale(counts) - 0.6)) : colorScale(mapScale.invert(mapScale(counts) + 0.3));
      } else {
        return tinyColor.isDark() ? colorScale(mapScale.invert(mapScale(counts) + 0.5)) : colorScale(mapScale.invert(mapScale(counts) - 0.5));
      }
    };

    return _this;
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var region = "哥伦比亚";
      this.props.regionToggle(region.split('.'));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.props.currentMap !== prevProps.currentMap) {
        this.setState({
          loaded: false
        });
        setTimeout(function () {
          _this2.props.tooltipRebuild();
        }, 100);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.currentMap === str.TRANSMISSION) return /*#__PURE__*/_react["default"].createElement("div", null);
      var currentMap = _maps["default"][this.props.currentMap];
      var _this$props2 = this.props,
          data = _this$props2.data,
          metric = _this$props2.metric,
          date = _this$props2.date,
          lang = _this$props2.lang,
          currentRegion = _this$props2.currentRegion,
          mapZoom = _this$props2.mapZoom,
          darkMode = _this$props2.darkMode;
      var lang_map = lang !== 'zh' ? 'en' : 'zh';
      var center = currentMap.center.split(',').map(function (d) {
        return parseFloat(d);
      });
      var scale = currentMap.scale;
      var projection = currentMap.projection;

      var _this$getColorScale2 = this.getColorScale(),
          colorScale = _this$getColorScale2.colorScale;

      var greyStrokeColor = darkMode ? 'var(--primary-color-10)' : 'var(--grey)';
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactSimpleMaps.ComposableMap, {
        projection: projection,
        projectionConfig: {
          scale: scale,
          rotate: currentMap.rotate ? currentMap.rotate.split(',').map(function (x) {
            return parseInt(x, 10);
          }) : [0, 0, 0],
          parallels: currentMap.parallels ? currentMap.parallels.split(',').map(function (x) {
            return parseInt(x, 10);
          }) : [0, 0]
        }
      }, /*#__PURE__*/_react["default"].createElement(_pattern.PatternLines, {
        id: "lines",
        height: 6,
        width: 6,
        stroke: greyStrokeColor,
        strokeWidth: 1,
        background: darkMode ? 'var(--darker-grey)' : '#fff',
        orientation: ['diagonal']
      }), /*#__PURE__*/_react["default"].createElement(_pattern.PatternLines, {
        id: "background-lines",
        height: 6,
        width: 6,
        stroke: darkMode ? '#333' : '#ddd',
        strokeWidth: 1,
        background: darkMode ? 'var(--darker-grey)' : '#fff',
        orientation: ['diagonal']
      }), /*#__PURE__*/_react["default"].createElement(_reactSimpleMaps.ZoomableGroup, {
        zoom: mapZoom,
        minZoom: 1,
        maxZoom: 1,
        onMoveStart: function onMoveStart(e, m) {
          return _this3.setState({
            cursor: [m.x, m.y],
            clicked: false
          });
        },
        onMoveEnd: function onMoveEnd(e, m) {
          // click on desktop
          if (Math.abs(m.x - _this3.state.cursor[0]) < 1 && Math.abs(m.y - _this3.state.cursor[1]) < 1) _this3.setState({
            clicked: true
          });
        },
        onTouchStart: // click on touch screens
        _reactDeviceDetect.isMobile || _reactDeviceDetect.isIPad13 ? function () {
          return _this3.setState({
            clicked: true
          });
        } : null,
        center: center
      }, ![str.WORLD_MAP].includes(this.props.currentMap) && /*#__PURE__*/_react["default"].createElement(_reactSimpleMaps.Geographies, {
        geography: _WORLD["default"] //{`/maps/WORLD.json`}  Aqui
        ,
        onMouseEnter: function onMouseEnter() {
          if (!_this3.state.loaded) {
            _this3.setState({
              loaded: true
            });

            _this3.props.tooltipRebuild();
          }
        }
      }, function (_ref) {
        var geographies = _ref.geographies;
        return geographies.map(function (geo) {
          var counts = 0;

          if (geo.properties.REGION != null) {
            var region = (0, _utils.getDataFromRegion)(data, geo.properties.REGION.split('.'));
            if (region && region[metric] && region[metric][date]) counts = region[metric][date];
          }

          var backgroundMap = str.WORLD_MAP;
          var name = geo.properties[_maps["default"][backgroundMap].name_key[lang_map]];
          var isCurrentCountryOrState = backgroundMap === str.WORLD_MAP ? geo.properties.CHINESE_NAME === currentRegion[0] : geo.properties.CHINESE_NAME === currentRegion[1];
          if (isCurrentCountryOrState) return /*#__PURE__*/_react["default"].createElement("div", null);
          return /*#__PURE__*/_react["default"].createElement(_reactSimpleMaps.Geography, {
            className: "map-geography",
            key: geo.rsmKey,
            geography: geo,
            "data-tip": "".concat(name, " <span class=\"plot-tooltip-bold\">").concat(counts, "</span>"),
            style: {
              "default": {
                fill: darkMode ? 'var(--darker-grey)' : '#fff',
                stroke: darkMode ? '#333' : '#ddd',
                strokeWidth: 2
              },
              hover: {
                fill: "url(\"#background-lines\") ".concat(darkMode ? '#333' : '#ddd'),
                stroke: darkMode ? '#333' : '#ddd',
                strokeWidth: 2,
                cursor: counts > 0 ? 'pointer' : 'default'
              },
              pressed: {
                fill: "url(\"#background-lines\") ".concat(darkMode ? '#333' : '#ddd'),
                stroke: darkMode ? '#333' : '#ddd',
                strokeWidth: 2,
                cursor: counts > 0 ? 'pointer' : 'default'
              }
            },
            onClick: _this3.handleGeographyClick(geo.properties.REGION)
          });
        });
      }), /*#__PURE__*/_react["default"].createElement(_reactSimpleMaps.Geographies, {
        geography: _gadm36_COL_["default"] //{`/maps/${currentMap.filename}`} Aqui
        ,
        onMouseEnter: function onMouseEnter() {
          if (!_this3.state.loaded) {
            _this3.setState({
              loaded: true
            });

            _this3.props.tooltipRebuild();
          }
        }
      }, function (_ref2) {
        var geographies = _ref2.geographies;
        return geographies.map(function (geo, i) {
          var counts = 0;

          if (geo.properties.REGION != null) {
            var region = (0, _utils.getDataFromRegion)(data, geo.properties.REGION.split('.'));
            if (region && region[metric] && region[metric][date]) counts = region[metric][date];
          }

          var name = geo.properties[currentMap.name_key[lang_map]];
          var isCurrentRegion = geo.properties[currentMap.name_key.zh] === currentRegion[currentRegion.length - 1];
          if (currentMap.parent_key) isCurrentRegion = isCurrentRegion && geo.properties[currentMap.parent_key] === currentRegion[currentRegion.length - 2]; // highlight all cities in the province

          var isParentRegion = false;

          if (currentMap.parent_key) {
            isParentRegion = geo.properties[currentMap.parent_key] === currentRegion[currentRegion.length - 1];
            if (currentRegion.length >= 3) isParentRegion = isParentRegion || geo.properties[currentMap.parent_key] === currentRegion[currentRegion.length - 2];
            if (currentRegion.length === 1 || currentRegion[currentRegion.length - 1] === str.MAINLAND_CHINA_ZH) isParentRegion = true;
            isParentRegion = isParentRegion || isCurrentRegion;
          } else {
            isParentRegion = true;
          }

          var strokeColor = counts === 0 ? greyStrokeColor : _this3.getStrokeColor(counts);
          return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
            key: "fragment-".concat(geo.rsmKey)
          }, /*#__PURE__*/_react["default"].createElement(_reactSimpleMaps.Geography, {
            key: geo.rsmKey,
            className: "map-geography",
            geography: geo,
            "data-tip": "".concat(name, " <span class=\"plot-tooltip-bold\">").concat(counts, "</span>"),
            style: {
              "default": {
                fill: isCurrentRegion ? "url(\"#highlightLines-".concat(i, "\") ").concat(greyStrokeColor) : counts > 0 ? colorScale(counts) : 'url("#lines")',
                stroke: strokeColor,
                strokeWidth: isCurrentRegion ? 1 : 0,
                opacity: isParentRegion ? 1 : 0.2
              },
              hover: {
                fill: "url(\"#highlightLines-".concat(i, "\") ").concat(greyStrokeColor),
                strokeWidth: 1,
                stroke: strokeColor,
                cursor: counts > 0 ? 'pointer' : 'default'
              },
              pressed: {
                fill: "url(\"#highlightLines-".concat(i, "\") ").concat(greyStrokeColor),
                strokeWidth: 1,
                stroke: strokeColor,
                cursor: counts > 0 ? 'pointer' : 'default'
              }
            },
            onClick: _this3.handleGeographyClick(geo.properties.REGION)
          }), /*#__PURE__*/_react["default"].createElement(_pattern.PatternLines, {
            id: "highlightLines-".concat(i),
            height: 6,
            width: 6,
            stroke: strokeColor,
            strokeWidth: 1,
            background: counts !== 0 ? colorScale(counts) : darkMode ? 'var(--darker-grey)' : '#fff',
            orientation: ['diagonal']
          }));
        });
      }), ")")));
    }
  }]);

  return Map;
}(_react.Component);

var _default = Map;
exports["default"] = _default;