"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ai = require("react-icons/ai");

var _BubblePlot = _interopRequireDefault(require("./BubblePlot"));

var _Table = _interopRequireDefault(require("./Table"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

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

var Tree = /*#__PURE__*/function (_Component) {
  _inherits(Tree, _Component);

  var _super = _createSuper(Tree);

  function Tree() {
    var _this;

    _classCallCheck(this, Tree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      height: 280,
      type: 'bubble'
    };

    _this.updateHight = function () {
      var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

      _this.setState({
        height: vh < 850 && vw >= 992 ? 240 : 280
      });
    };

    return _this;
  }

  _createClass(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateHight();
      window.addEventListener('resize', this.updateHight);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateHight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fullPlot = _this$props.fullPlot,
          fullTree = _this$props.fullTree,
          fullTreeToggle = _this$props.fullTreeToggle,
          fullDimensions = _this$props.fullDimensions,
          lang = _this$props.lang;
      if (fullPlot) return /*#__PURE__*/_react["default"].createElement("div", null);
      var FullScreenIcon = fullTree ? _ai.AiOutlineFullscreenExit : _ai.AiOutlineFullscreen;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "tree-wrap",
        style: {
          height: !fullTree ? this.state.height : fullDimensions.height - 100,
          width: !fullTree ? '100%' : fullDimensions.width + 100
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "tree-full-button"
      }, /*#__PURE__*/_react["default"].createElement(FullScreenIcon, {
        size: fullTree ? 30 : 20,
        onClick: fullTreeToggle
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bubble-table-toggle-btn"
      }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
        texts: {
          bubble: _i18n["default"].BUBBLES[lang],
          table: _i18n["default"].TABLE[lang]
        },
        selected: this.state.type,
        onSelect: function onSelect(s) {
          return _this2.setState({
            type: s
          });
        },
        alwaysShow: true
      })), this.state.type === 'bubble' && /*#__PURE__*/_react["default"].createElement(_BubblePlot["default"], this.props), this.state.type === 'table' && /*#__PURE__*/_react["default"].createElement(_Table["default"], this.props));
    }
  }]);

  return Tree;
}(_react.Component);

exports["default"] = Tree;