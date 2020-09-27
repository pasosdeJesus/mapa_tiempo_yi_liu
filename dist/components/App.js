"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _ai = require("react-icons/ai");

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _reactMeasure = _interopRequireDefault(require("react-measure"));

require("./App.css");

var _Map = _interopRequireDefault(require("./Map"));

var _MapNavBar = _interopRequireDefault(require("./MapNavBar"));

var _DateSlider = _interopRequireDefault(require("./DateSlider"));

var _AnimationController = _interopRequireDefault(require("./AnimationController"));

var _MainCounts = _interopRequireDefault(require("./MainCounts"));

var _Plot = _interopRequireDefault(require("./Plot"));

var _Tree = _interopRequireDefault(require("./Tree"));

var _NavBar = _interopRequireDefault(require("./NavBar"));

var _Loading = _interopRequireDefault(require("./Loading"));

var _Footer = _interopRequireDefault(require("./Footer"));

var _Region = _interopRequireDefault(require("./Region"));

var _TransmissionNetwork = _interopRequireDefault(require("./TransmissionNetwork"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

var _us_map = _interopRequireDefault(require("js-yaml-loader!../../assets/data/us_map.yml"));

var str = _interopRequireWildcard(require("../utils/strings"));

var _utils = require("../utils/utils");

var _map_text = require("../utils/map_text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var defaultState = {
  currentMap: 'WORLD',
  metric: 'confirmedCount',
  currentRegion: [str.COLOMBIA_ZH],
  playing: false,
  scale: 'linear',
  mapZoom: 1,
  fullMap: false,
  fullPlot: false,
  fullTree: false
};

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = _objectSpread({
      startDate: '2020-01-24',
      endDate: '2020-02-14',
      date: '2020-02-14',
      tempDate: '2020-02-14',
      plotDates: ['2020-01-24', '2020-02-14'],
      data: null,
      dataLoaded: false,
      lang: 'es',
      darkMode: true,
      mapDimensions: {
        width: -1,
        height: -1
      },
      fullDimensions: {
        width: -1,
        height: -1
      },
      plotType: 'plot_basic'
    }, defaultState);

    _this.fetchData = function () {
      return fetch('/sivel2/casos/infomapa/datoscovid').then(function (res) {
        return res.json();
      }).then(function (res) {
        var latest = Object.keys(res[str.GLOBAL_ZH].confirmedCount).pop();

        _this.setState({
          data: res,
          dataLoaded: true,
          date: latest,
          tempDate: latest,
          endDate: latest,
          plotDates: [_this.state.plotDates[0], latest]
        });

        var data = _this.state.data;

        _this.getCases(data);

        _this.tooltipRebuild();
      });
    };

    _this.getCases = function (data) {
      var casesRefact = []; // var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      //      casosUrl = 'https://base.nocheyniebla.org/casos.json?filtro[q]=&filtro[fechaini]=2018-07-03&filtro[fechafin]=2020-06-30&filtro[disgenera]=reprevista.json&idplantilla=reprevista'
      //fetch(proxyUrl + casosUrl).then((res) => res.json()).then((res) => {

      fetch("/sivel2/casos.json?filtro[q]=&filtro[departamento_id]=&filtro[inc_ubicaciones]=2&filtro[inc_ubicaciones]=2&filtro[orden]=ubicacion&filtro[fechaini]=&filtro[fechafin]=&filtro[inc_fecha]=0&filtro[inc_fecha]=1&filtro[presponsable_id]=&filtro[inc_presponsables]=0&filtro[inc_presponsables]=1&filtro[inc_tipificacion]=0&filtro[inc_tipificacion]=1&filtro[nombres]=&filtro[apellidos]=&filtro[inc_victimas]=0&filtro[inc_victimas]=1&filtro[sexo]=&filtro[rangoedad_id]=&filtro[sectorsocial_id]=&filtro[organizacion_id]=&filtro[profesion_id]=&filtro[descripcion]=&filtro[inc_memo]=0&filtro[inc_memo]=1&filtro[conetiqueta1]=true&filtro[etiqueta1]=&filtro[conetiqueta2]=true&filtro[etiqueta2]=&filtro[usuario_id]=&filtro[fechaingini]=&filtro[fechaingfin]=&filtro[codigo]=&filtro[inc_casoid]=0&filtro[inc_casoid]=1&filtro[paginar]=0&filtro[paginar]=1&filtro[disgenera]=reprevista.json&idplantilla=reprevista").then(function (res) {
        return res.json();
      }).then(function (res) {
        console.log("casos: ", res);
        var cases = res;
        Object.entries(cases).map(function (data) {
          if (data[1].departamento) {
            //console.log("Casos: ", data[1])
            var obj = {
              id: data[0],
              departamento: data[1].departamento,
              fecha: data[1].fecha
            };
            casesRefact.push(obj);
          }
        });
        console.log("Arreglo de Casos: ", casesRefact);

        _this.changeData(data, casesRefact);
      });
    };

    _this.changeData = function (obj, cas) {
      var casesRefact = cas;
      console.log("Data Obj: ", obj);
      Object.entries(obj).map(function (data) {
        var country = data[0];

        if (country == "哥伦比亚") {
          var countryObj = data[1];
          Object.entries(countryObj).map(function (item) {
            if (_typeof(item[1]) == "object") {
              if (item[1].ENGLISH) {
                var depart = item[0];
                var dateszeros = {};
                obj[country][depart].confirmedCount = dateszeros;
                obj[country][depart].curedCount = dateszeros;
                obj[country][depart].deadCount = dateszeros;
                var count = 0;
                casesRefact.map(function (casos) {
                  //console.log("Casos: ", casos)
                  if (item[1].ENGLISH.toUpperCase() == casos.departamento) {
                    var dateCase = casos.fecha;
                    count++;
                    var dateNow = {
                      "2020-07-01": count
                    };

                    if (obj[country][depart].confirmedCount[dateCase]) {
                      var total = obj[country][depart].confirmedCount[dateCase] + 1;
                      obj[country][depart].confirmedCount[dateCase] = total;
                    } else {
                      obj[country][depart].confirmedCount[dateCase] = 1;
                    }

                    obj[country][depart].confirmedCount["2020-07-01"] = count;
                  }
                });
              }
            }
          });
        }
      });

      _this.setState({
        data: obj
      });

      console.log("Data Obj refact: ", obj);
    };

    _this.updateFullDimensions = function () {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

      if (height < 750 || width < 992) {
        if (_this.state.fullMap) _this.setState({
          fullMap: false
        });
        if (_this.state.fullPlot) _this.setState({
          fullPlot: false
        });
      }

      _this.setState({
        fullDimensions: {
          height: Math.min(height - 250, (width - 200) * 3 / 4),
          width: Math.min((height - 250) * 4 / 3, width - 200)
        }
      });
    };

    _this.reset = function () {
      return _this.setState(_objectSpread(_objectSpread({}, defaultState), {}, {
        date: _this.state.endDate,
        tempDate: _this.state.endDate,
        plotDates: [_this.state.startDate, _this.state.endDate]
      }));
    };

    _this.mapToggle = function (newMap) {
      return _this.setState({
        currentMap: newMap,
        // do not reset map zoom when switching between two China maps
        mapZoom: newMap === str.WORLD_MAP || _this.state.currentMap === str.WORLD_MAP ? 1 : _this.state.mapZoom
      });
    };

    _this.metricToggle = function (newMetric) {
      return _this.setState({
        metric: newMetric
      });
    };

    _this.regionToggle = function (newRegion) {
      var mapChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var currentMap = _this.state.currentMap;

      _this.setState({
        currentRegion: newRegion
      });

      if (!mapChange) return;
      if (currentMap === str.TRANSMISSION) return;

      if (newRegion[0] === str.CHINA_ZH) {
        if (newRegion.length >= 4) {
          _this.mapToggle(str.CHINA_MAP2);
        } else if (newRegion.length >= 2 && newRegion[1] === str.HONGKONG_ZH) {
          _this.mapToggle(str.HONGKONG_MAP);
        } else if (currentMap !== str.CHINA_MAP2) {
          _this.mapToggle(str.CHINA_MAP1);
        }
      } else if (newRegion[0] === str.US_ZH) {
        if (newRegion.length >= 2 && newRegion[1] in _us_map["default"]) {
          _this.mapToggle(str.US_MAP2);
        } else {
          _this.mapToggle(str.US_MAP);
        }
      } else if (newRegion[0] === str.ITALY_ZH) {
        if (newRegion.length >= 3) {
          _this.mapToggle(str.ITALY_MAP2);
        } else if (currentMap !== str.ITALY_MAP2) {
          _this.mapToggle(str.ITALY_MAP);
        }
      } else if (newRegion[0] === str.INTL_CONVEYANCE_ZH) {
        _this.mapToggle(str.JAPAN_MAP);
      } else {
        var map = Object.keys(_map_text.mapText).find(function (x) {
          return _map_text.mapText[x].regionName === newRegion[0];
        });
        map = map != null ? map : str.WORLD_MAP;
        if (map === str.WORLD_MAP && currentMap === str.EUROPE_MAP) map = str.EUROPE_MAP;

        _this.mapToggle(map);
      }
    };

    _this.playingToggle = function () {
      return _this.setState({
        playing: !_this.state.playing
      });
    };

    _this.scaleToggle = function (newScale) {
      return _this.setState({
        scale: newScale
      });
    };

    _this.languageToggle = function (lang) {
      return _this.setState({
        lang: lang
      });
    };

    _this.fullMapToggle = function () {
      _this.setState({
        fullMap: !_this.state.fullMap
      });
    };

    _this.fullPlotToggle = function () {
      _reactTooltip["default"].hide();

      _this.setState({
        fullPlot: !_this.state.fullPlot
      });
    };

    _this.fullTreeToggle = function () {
      _this.setState({
        fullTree: !_this.state.fullTree
      });
    };

    _this.darkModeToggle = function () {
      (0, _utils.updateDarkMode)(!_this.state.darkMode);

      _this.setState({
        darkMode: !_this.state.darkMode
      });
    };

    _this.handleMapZoomChange = function (newZoom) {
      return _this.setState({
        mapZoom: newZoom
      });
    };

    _this.handleDateChange = function (newDate) {
      return _this.setState({
        date: newDate,
        tempDate: newDate
      });
    };

    _this.handleTempDateChange = function (newDates) {
      var newDateStrings = newDates.map(function (x) {
        return (0, _utils.isoDate)(x, _this.state.endDate).slice(0, 10);
      });

      if (!_this.state.fullPlot) {
        _this.setState({
          tempDate: newDateStrings[0]
        });
      } else {
        _this.setState({
          plotDates: newDateStrings
        });
      }
    };

    _this.handlePlotTypeChange = function (newType) {
      return _this.setState({
        plotType: newType
      });
    };

    _this.tooltipRebuild = function () {
      return _reactTooltip["default"].rebuild();
    };

    _this.changeDataJSON = function (data) {
      console.log("Data Two: ", data);
    };

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _utils.updateDarkMode)(this.state.darkMode);
      this.fetchData();
      this.updateFullDimensions();
      window.addEventListener('resize', this.updateFullDimensions);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateFullDimensions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          data = _this$state.data,
          lang = _this$state.lang,
          dataLoaded = _this$state.dataLoaded,
          currentMap = _this$state.currentMap,
          fullMap = _this$state.fullMap,
          fullPlot = _this$state.fullPlot,
          fullTree = _this$state.fullTree,
          darkMode = _this$state.darkMode;
      var fullScreenMode = fullMap ? 'map-full' : fullPlot ? 'plot-full' : fullTree ? 'tree-full' : '';
      var FullScreenIcon = fullMap ? _ai.AiOutlineFullscreenExit : _ai.AiOutlineFullscreen;
      this.changeDataJSON(data);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "App ".concat(darkMode ? 'dark' : '')
      }, !dataLoaded ? /*#__PURE__*/_react["default"].createElement(_Loading["default"], null) : /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Container, {
        className: "app-container ".concat(fullScreenMode)
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
        lg: !fullMap ? 7 : 12
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "header"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "header-icon",
        style: {
          opacity: dataLoaded ? 1 : 0
        }
      }, /*#__PURE__*/_react["default"].createElement("p", null, " Aqui va el icono ")), /*#__PURE__*/_react["default"].createElement("span", {
        className: "header-title",
        style: {
          letterSpacing: lang === 'es' ? '1px' : 'normal'
        }
      }, _i18n["default"].COVID19[lang])), /*#__PURE__*/_react["default"].createElement(_NavBar["default"], _extends({}, this.state, {
        scaleToggle: this.scaleToggle,
        languageToggle: this.languageToggle,
        darkModeToggle: this.darkModeToggle,
        reset: this.reset
      })), !fullPlot && !fullTree && /*#__PURE__*/_react["default"].createElement(_reactMeasure["default"], {
        bounds: true,
        onResize: function onResize(contentRect) {
          _this2.setState({
            mapDimensions: contentRect.bounds
          });
        }
      }, function (_ref) {
        var measureRef = _ref.measureRef;
        return /*#__PURE__*/_react["default"].createElement("div", {
          ref: measureRef,
          className: "map",
          style: {
            height: !fullMap ? _this2.state.mapDimensions.width * 3 / 4 : _this2.state.fullDimensions.height,
            width: !fullMap ? '100%' : _this2.state.fullDimensions.width
          }
        }, currentMap === str.TRANSMISSION && /*#__PURE__*/_react["default"].createElement(_TransmissionNetwork["default"], _extends({}, _this2.state, {
          regionToggle: _this2.regionToggle,
          tooltipRebuild: _this2.tooltipRebuild
        })), currentMap !== str.TRANSMISSION && /*#__PURE__*/_react["default"].createElement(_Map["default"], _extends({}, _this2.state, {
          handleMapZoomChange: _this2.handleMapZoomChange,
          mapToggle: _this2.mapToggle,
          regionToggle: _this2.regionToggle,
          tooltipRebuild: _this2.tooltipRebuild
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "map-full-button"
        }, /*#__PURE__*/_react["default"].createElement(FullScreenIcon, {
          size: fullMap ? 30 : 20,
          onClick: _this2.fullMapToggle
        })));
      }), /*#__PURE__*/_react["default"].createElement(_MapNavBar["default"], _extends({}, this.state, {
        mapToggle: this.mapToggle,
        metricToggle: this.metricToggle,
        regionToggle: this.regionToggle
      })), /*#__PURE__*/_react["default"].createElement(_DateSlider["default"], _extends({}, this.state, {
        handleDateChange: this.handleDateChange,
        handleTempDateChange: this.handleTempDateChange
      })), /*#__PURE__*/_react["default"].createElement(_AnimationController["default"], _extends({}, this.state, {
        handleDateChange: this.handleDateChange,
        playingToggle: this.playingToggle
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer-white"
      })), !fullMap && /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
        lg: !fullPlot && !fullTree ? 5 : 12,
        className: "col-right"
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Row, {
        style: {
          display: 'flex',
          flexDirection: 'column',
          padding: 10
        }
      }, /*#__PURE__*/_react["default"].createElement(_Region["default"], _extends({}, this.state, {
        regionToggle: this.regionToggle,
        ReactTooltip: _reactTooltip["default"]
      })), /*#__PURE__*/_react["default"].createElement(_MainCounts["default"], this.state), /*#__PURE__*/_react["default"].createElement(_Plot["default"], _extends({}, this.state, {
        regionToggle: this.regionToggle,
        fullPlotToggle: this.fullPlotToggle,
        scaleToggle: this.scaleToggle,
        handlePlotTypeChange: this.handlePlotTypeChange
      })), /*#__PURE__*/_react["default"].createElement(_Tree["default"], _extends({}, this.state, {
        regionToggle: this.regionToggle,
        fullTreeToggle: this.fullTreeToggle
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer-placeholder"
      })))))), /*#__PURE__*/_react["default"].createElement(_reactTooltip["default"], {
        className: "plot-tooltip",
        type: darkMode ? 'dark' : 'light',
        html: true
      }));
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;