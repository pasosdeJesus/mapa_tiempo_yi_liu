"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _circlePacking = require("@nivo/circle-packing");

var _d3ScaleChromatic = require("d3-scale-chromatic");

var _utils = require("../utils/utils");

var str = _interopRequireWildcard(require("../utils/strings"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var BubblePlot = /*#__PURE__*/function (_Component) {
  _inherits(BubblePlot, _Component);

  var _super = _createSuper(BubblePlot);

  function BubblePlot() {
    var _this;

    _classCallCheck(this, BubblePlot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      plotData: null,
      currentNodePath: null
    };

    _this.handleNodeClick = function (node) {
      var region = node.path === str.COLOMBIA_ZH ? [node.path] : node.path.split('.').reverse().slice(1);

      _this.props.regionToggle(region);
    };

    _this.bringTextsToTop = function () {
      setTimeout(function () {
        document.querySelectorAll('.bubble-plot-wrap text').forEach(function (elem) {
          var parentElem = elem.parentNode; // bring texts to top

          elem.parentNode.parentNode.appendChild(parentElem);
        });
      }, 100);
    };

    return _this;
  }

  _createClass(BubblePlot, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.bringTextsToTop();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bringTextsToTop();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          metric = _this$props.metric,
          currentRegion = _this$props.currentRegion,
          date = _this$props.date,
          playing = _this$props.playing,
          lang = _this$props.lang,
          darkMode = _this$props.darkMode,
          fullTree = _this$props.fullTree;
      if (data == null) return /*#__PURE__*/_react["default"].createElement("div", null);
      var plotData = {
        name: str.COLOMBIA_ZH,
        displayName: lang === 'en' ? str.GLOBAL_EN : str.COLOMBIA_ZH,
        confirmedCount: data[str.COLOMBIA_ZH].confirmedCount[date],
        children: (0, _utils.generateTreeData)(data, date, lang)
      };
      var currentNodePath = currentRegion[0] === str.COLOMBIA_ZH ? str.COLOMBIA_ZH : [str.COLOMBIA_ZH].concat(_toConsumableArray(currentRegion)).reverse().join('.'); // TODO: Node does not exist when count is 0. Need to find the parent node that has non-zero count.

      var currentData = (0, _utils.getDataFromRegion)(data, currentRegion);
      var count = currentData[metric][date];
      if (count == null || count === 0) currentNodePath = [str.COLOMBIA_ZH].concat(_toConsumableArray(currentRegion.slice(0, currentRegion.length - 1))).reverse().join('.');
      var displayNodePath = Object.keys(currentData).length > 4 ? currentNodePath : currentRegion[0] === str.COLOMBIA_ZH ? str.COLOMBIA_ZH : [str.COLOMBIA_ZH].concat(_toConsumableArray(currentRegion.slice(0, currentRegion.length - 1))).reverse().join('.');
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "bubble-plot-wrap"
      }, /*#__PURE__*/_react["default"].createElement(_circlePacking.ResponsiveBubble, {
        ref: this.bubble,
        root: plotData,
        theme: {
          fontFamily: 'Saira, sans-serif',
          fontSize: !fullTree ? 11 : 14,
          tooltip: {
            container: {
              background: darkMode ? 'var(--darkest-grey)' : 'white'
            }
          }
        },
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        },
        tooltip: function tooltip(_ref) {
          var color = _ref.color,
              value = _ref.value,
              data = _ref.data;
          return /*#__PURE__*/_react["default"].createElement("span", {
            className: "plot-tooltip",
            style: {
              color: color === '#fff' && !darkMode ? '#222' : color
            }
          }, data.displayName, /*#__PURE__*/_react["default"].createElement("span", {
            className: "plot-tooltip-bold"
          }, " ".concat(data[metric])));
        },
        identity: "name",
        value: metric,
        colors: [].concat(_toConsumableArray([0.3, 0.4, 0.15].map(function (x) {
          return (0, _d3ScaleChromatic.interpolateMagma)(1 - x);
        })), ['#fff']),
        padding: 3,
        enableLabel: true,
        label: function label(_ref2) {
          var data = _ref2.data;
          return data.displayName;
        },
        labelTextColor: '#222',
        labelSkipRadius: !fullTree ? 6 : 10,
        animate: !playing,
        motionStiffness: 50,
        motionDamping: 12,
        onClick: this.handleNodeClick,
        defs: [{
          id: 'bubbleLines',
          type: 'patternLines',
          background: 'none',
          color: 'inherit',
          rotation: -45,
          lineWidth: 4,
          spacing: 5
        }],
        fill: [{
          match: function match(d) {
            return d.path === currentNodePath;
          },
          id: 'bubbleLines'
        }],
        currentNodePath: displayNodePath
      }));
    }
  }]);

  return BubblePlot;
}(_react.Component);

exports["default"] = BubblePlot;