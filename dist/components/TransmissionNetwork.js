"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactD3Graph = require("react-d3-graph");

var _d3Scale = require("d3-scale");

var _d3ScaleChromatic = require("d3-scale-chromatic");

var _transmissions = _interopRequireDefault(require("js-yaml-loader!../../assets/data/transmissions.yml"));

var _maps = _interopRequireDefault(require("js-yaml-loader!../../assets/data/maps.yml"));

var _utils = require("../utils/utils");

var str = _interopRequireWildcard(require("../utils/strings"));

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

var CountryNode = function CountryNode(_ref) {
  var node = _ref.node,
      darkMode = _ref.darkMode;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "country-node ".concat(node.selected || node.highlighted ? 'selected' : ''),
    style: {
      backgroundColor: node.selected ? '#fff' : node.color ? node.color : darkMode ? 'var(--dark-grey)' : 'var(--lighter-grey)',
      fontSize: node.fontSize
    }
  }, /*#__PURE__*/_react["default"].createElement("style", null, node.selected ? "#".concat(node.id, " text {font-weight: bold; font-size: 14px; }") : node.highlighted ? "#".concat(node.id, " text {font-size: 9px; }") : "#".concat(node.id, " text {font-size: ").concat(node.labelFontSize, "px;}"), ".country-node.selected,.country-node:hover { border: solid ".concat(node.strokeWidth, "px ").concat(darkMode ? 'var(--primary-color-4)' : 'var(--primary-color-5)', ";}")));
};

var TransmissionNetwork = /*#__PURE__*/function (_Component) {
  _inherits(TransmissionNetwork, _Component);

  var _super = _createSuper(TransmissionNetwork);

  function TransmissionNetwork() {
    var _this;

    _classCallCheck(this, TransmissionNetwork);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getRegion = function (id) {
      var region = [str.MAINLAND_CHINA_ZH, str.HONGKONG_ZH, str.MACAO_ZH, str.TAIWAN_ZH].includes(id) ? [str.CHINA_ZH, id] : id === str.DIAMOND_PRINCESS_ZH ? [str.INTL_CONVEYANCE_ZH, str.DIAMOND_PRINCESS_ZH] : [id];
      return region;
    };

    _this.getCount = function (id) {
      var _this$props = _this.props,
          data = _this$props.data,
          date = _this$props.date,
          metric = _this$props.metric;
      var regionData = (0, _utils.getDataFromRegion)(data, _this.getRegion(id));
      var count = regionData[metric][date] ? regionData[metric][date] : 0;
      return count;
    };

    _this.getColor = function (id, darkMode) {
      var count = _this.getCount(id);

      var currentScale = _this.getScale();

      var colorConvert = function colorConvert(x) {
        return darkMode ? x * 0.95 + 0.05 : 0.95 - x * 0.95;
      };

      var colorScale = (0, _d3Scale.scaleSequential)(function (d) {
        return (0, _d3ScaleChromatic.interpolateMagma)(colorConvert(currentScale(d)));
      });
      return colorScale(count);
    };

    _this.getScale = function () {
      var _this$props2 = _this.props,
          scale = _this$props2.scale,
          metric = _this$props2.metric;
      var currentScale = scale === 'linear' ? _d3Scale.scaleLinear : _d3Scale.scaleLog;
      return currentScale().domain([1, _maps["default"][str.TRANSMISSION]["maxScale_".concat(metric)]]);
    };

    _this.getDisplayName = function (id) {
      var _this$props3 = _this.props,
          lang = _this$props3.lang,
          data = _this$props3.data;
      return lang === 'zh' ? id : (0, _utils.getDataFromRegion)(data, _this.getRegion(id)).ENGLISH;
    };

    return _this;
  }

  _createClass(TransmissionNetwork, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          mapDimensions = _this$props4.mapDimensions,
          date = _this$props4.date,
          regionToggle = _this$props4.regionToggle,
          currentRegion = _this$props4.currentRegion,
          currentMap = _this$props4.currentMap,
          darkMode = _this$props4.darkMode;
      if (currentMap !== str.TRANSMISSION) return /*#__PURE__*/_react["default"].createElement("div", null);
      var networkConfig = {
        directed: true,
        automaticRearrangeAfterDropNode: true,
        panAndZoom: true,
        minZoom: 0.75,
        maxZoom: 2,
        focusAnimationDuration: 0.5,
        nodeHighlightBehavior: true,
        width: mapDimensions.width,
        height: mapDimensions.height,
        highlightOpacity: 0.2,
        d3: {
          gravity: -20,
          linkLength: mapDimensions.width * 0.15
        },
        link: {
          color: darkMode ? 'var(--darkest-grey)' : 'var(--lighter-grey)',
          highlightColor: darkMode ? 'var(--primary-color-4)' : 'var(--primary-color-5)',
          strokeWidth: 1,
          mouseCursor: 'default'
        },
        node: {
          labelProperty: 'displayName',
          viewGenerator: function viewGenerator(node) {
            return /*#__PURE__*/_react["default"].createElement(CountryNode, {
              node: node,
              darkMode: darkMode
            });
          }
        }
      };
      var nodes = {};

      _transmissions["default"].forEach(function (trans) {
        if ((0, _utils.parseDate)(trans.date) > (0, _utils.parseDate)(date)) return;

        if (trans.from in nodes) {
          nodes[trans.from] += 1;
        } else {
          nodes[trans.from] = 1;
        }

        if (trans.to in nodes) {
          nodes[trans.to] += 0;
        } else {
          nodes[trans.to] = 0;
        }
      });

      var data = {
        nodes: Object.keys(nodes).map(function (x) {
          return {
            id: x,
            displayName: _this2.getDisplayName(x),
            size: Math.max(Math.min(nodes[x] * 20, 230), 150),
            count: _this2.getCount(x),
            color: _this2.getColor(x, darkMode),
            labelFontSize: nodes[x] > 6 ? 9 : 0,
            selected: currentRegion[currentRegion.length - 1] === x ? true : false
          };
        }),
        links: _transmissions["default"].filter(function (trans) {
          return (0, _utils.parseDate)(trans.date) <= (0, _utils.parseDate)(date);
        }).map(function (trans) {
          return {
            source: trans.from,
            target: trans.to
          };
        })
      };
      return /*#__PURE__*/_react["default"].createElement(_reactD3Graph.Graph, {
        id: "transmission-network" // id is mandatory, if no id is defined rd3g will throw an error
        ,
        data: data,
        config: networkConfig,
        onClickNode: function onClickNode(id) {
          return regionToggle(_this2.getRegion(id));
        }
      });
    }
  }]);

  return TransmissionNetwork;
}(_react.Component);

exports["default"] = TransmissionNetwork;