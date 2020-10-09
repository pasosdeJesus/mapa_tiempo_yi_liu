"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _md = require("react-icons/md");

var _utils = require("../utils/utils");

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

var AminationController = /*#__PURE__*/function (_Component) {
  _inherits(AminationController, _Component);

  var _super = _createSuper(AminationController);

  function AminationController() {
    var _this;

    _classCallCheck(this, AminationController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.animationLoop = function () {
      return setTimeout(function () {
        if (_this.props.playing) {
          _this.dateForward();

          _this.animationLoop();
        }
      }, 500);
    };

    _this.dateForward = function () {
      var _this$props = _this.props,
          date = _this$props.date,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          plotDates = _this$props.plotDates,
          fullPlot = _this$props.fullPlot,
          handleDateChange = _this$props.handleDateChange;

      if (!fullPlot) {
        handleDateChange((0, _utils.nextDay)(date, startDate, endDate));
      } else {
        handleDateChange((0, _utils.nextDay)(date, plotDates[0], plotDates[1]));
      }
    };

    _this.dateBackward = function () {
      var _this$props2 = _this.props,
          date = _this$props2.date,
          startDate = _this$props2.startDate,
          endDate = _this$props2.endDate,
          plotDates = _this$props2.plotDates,
          fullPlot = _this$props2.fullPlot,
          handleDateChange = _this$props2.handleDateChange;

      if (!fullPlot) {
        handleDateChange((0, _utils.previousDay)(date, startDate, endDate));
      } else {
        handleDateChange((0, _utils.previousDay)(date, plotDates[0], plotDates[1]));
      }
    };

    _this.startAnimation = function () {
      return _this.props.playingToggle();
    };

    _this.stopAnimation = function () {
      _this.props.playingToggle();

      _this.forceUpdate();
    };

    return _this;
  }

  _createClass(AminationController, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.playing) this.animationLoop();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(prevProps, prevState) {
      return !this.props.playing;
    }
  }, {
    key: "render",
    value: function render() {
      var playing = this.props.playing;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "anime-ctrl"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "anime-ctrl-left-right ".concat(playing ? 'anime-ctrl-playing' : '')
      }, /*#__PURE__*/_react["default"].createElement(_md.MdChevronLeft, {
        size: 30,
        onClick: this.dateBackward
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "anime-ctrl-play"
      }, playing ? /*#__PURE__*/_react["default"].createElement(_md.MdPause, {
        size: 30,
        onClick: this.stopAnimation
      }) : /*#__PURE__*/_react["default"].createElement(_md.MdPlayArrow, {
        size: 30,
        onClick: this.startAnimation
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "anime-ctrl-left-right ".concat(playing ? 'anime-ctrl-playing' : '')
      }, /*#__PURE__*/_react["default"].createElement(_md.MdChevronRight, {
        size: 30,
        onClick: this.dateForward
      })));
    }
  }]);

  return AminationController;
}(_react.Component);

exports["default"] = AminationController;