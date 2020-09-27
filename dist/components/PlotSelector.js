"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _md = require("react-icons/md");

var _reactstrap = require("reactstrap");

var _plot_types = require("../utils/plot_types");

var _utils = require("../utils/utils");

var str = _interopRequireWildcard(require("../utils/strings"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var PlotSelector = /*#__PURE__*/function (_Component) {
  _inherits(PlotSelector, _Component);

  var _super = _createSuper(PlotSelector);

  function PlotSelector() {
    var _this;

    _classCallCheck(this, PlotSelector);

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

    return _this;
  }

  _createClass(PlotSelector, [{
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
          currentPlotType = _this$props.currentPlotType,
          currentRegion = _this$props.currentRegion,
          lang = _this$props.lang,
          data = _this$props.data,
          onPlotTypeChange = _this$props.onPlotTypeChange;
      var plotParameters = _plot_types.plotTypes[currentPlotType];
      var currentRegionIsGlobal = currentRegion.length === 1 && currentRegion[0] === str.GLOBAL_ZH;
      var hasSubregions = Object.keys((0, _utils.getDataFromRegion)(data, currentRegion)).length > 4 || currentRegionIsGlobal;
      return /*#__PURE__*/_react["default"].createElement(_reactstrap.UncontrolledDropdown, {
        className: ""
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
        tag: "span",
        className: "line-plot-title",
        "data-toggle": "dropdown",
        "aria-expanded": this.state.dropdownOpen
      }, /*#__PURE__*/_react["default"].createElement("span", null, plotParameters.text[lang]), /*#__PURE__*/_react["default"].createElement(_md.MdArrowDropDownCircle, {
        size: 20,
        className: "dropdown-arrow"
      })), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, {
        modifiers: {
          setMaxHeight: {
            enabled: true,
            order: 890,
            fn: function fn(data) {
              return _objectSpread(_objectSpread({}, data), {}, {
                styles: _objectSpread(_objectSpread({}, data.styles), {}, {
                  overflowY: 'auto',
                  maxHeight: _this2.state.height * 0.6
                })
              });
            }
          }
        }
      }, Object.keys(_plot_types.plotTypes).map(function (plotType) {
        return (// no One-vs-Rest comparison plot when current region is Global
          plotType === 'plot_one_vs_rest' && currentRegionIsGlobal ? /*#__PURE__*/_react["default"].createElement("div", {
            key: "dropdown-".concat(plotType)
          }) : _plot_types.plotTypes[plotType].subregions && !hasSubregions ? /*#__PURE__*/_react["default"].createElement("div", {
            key: "dropdown-".concat(plotType)
          }) : /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
            key: "dropdown-".concat(plotType)
          }, plotType === 'plot_basic' && hasSubregions && /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            header: true
          }, _i18n["default"].OVERALL[lang]), plotType === 'plot_ranking' && hasSubregions && /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            divider: true
          }), plotType === 'plot_ranking' && hasSubregions && /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            header: true
          }, _i18n["default"].SUBREGIONS[lang]), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
            className: currentPlotType === plotType ? 'current' : '',
            onClick: function onClick() {
              onPlotTypeChange(plotType);

              _this2.setState({
                dropdownOpen: !_this2.state.dropdownOpen
              });
            }
          }, _plot_types.plotTypes[plotType].text[lang]))
        );
      })));
    }
  }]);

  return PlotSelector;
}(_react.Component);

exports["default"] = PlotSelector;