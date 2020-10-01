"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _reactDeviceDetect = require("react-device-detect");

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

var NavBar = /*#__PURE__*/function (_Component) {
  _inherits(NavBar, _Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    var _this;

    _classCallCheck(this, NavBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      langText: 'English',
      scaleText: _i18n["default"].LINEAR_SCALE.en,
      darkModeText: _i18n["default"].DARK.en
    };

    _this.setTexts = function () {
      var _this$props = _this.props,
          scale = _this$props.scale,
          lang = _this$props.lang,
          darkMode = _this$props.darkMode;

      _this.setState({
        langText: _i18n["default"].LANGUAGE[lang],
        scaleText: scale === 'linear' ? _i18n["default"].LINEAR_SCALE[lang] : _i18n["default"].LOG_SCALE[lang],
        darkModeText: darkMode ? _i18n["default"].DARK[lang] : _i18n["default"].LIGHT[lang]
      });
    };

    _this.onScaleChange = function () {
      var newScale = _this.props.scale === 'linear' ? 'log' : 'linear';

      _this.props.scaleToggle(newScale);
    };

    return _this;
  }

  _createClass(NavBar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.scale !== this.props.scale || prevProps.lang !== this.props.lang || prevProps.darkMode !== this.props.darkMode) this.setTexts();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          scale = _this$props2.scale,
          lang = _this$props2.lang,
          darkMode = _this$props2.darkMode,
          languageToggle = _this$props2.languageToggle;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "nav-bar"
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.UncontrolledDropdown, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
        tag: "span",
        className: "nav-bar-icon",
        "data-tip": _i18n["default"].LANGUAGE_HELP_TEXT[lang]
      }, _i18n["default"].LANGUAGE[lang]), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, null, Object.keys(_i18n["default"].LANGUAGE).map(function (x) {
        return /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
          key: x,
          className: x === lang ? 'current' : '',
          onClick: function onClick() {
            return languageToggle(x);
          }
        }, _i18n["default"].LANGUAGE[x]);
      }))), _reactDeviceDetect.isMobile || _reactDeviceDetect.isIPad13 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "nav-bar-icon",
        onTouchStart: this.props.darkModeToggle
      }, darkMode ? _i18n["default"].DARK[lang] : _i18n["default"].LIGHT[lang]) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "nav-bar-icon",
        "data-tip": darkMode ? _i18n["default"].LIGHT_MODE_HELP_TEXT[lang] : _i18n["default"].DARK_MODE_HELP_TEXT[lang],
        onClick: this.props.darkModeToggle,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            darkModeText: darkMode ? _i18n["default"].LIGHT[lang] : _i18n["default"].DARK[lang]
          });
        },
        onMouseLeave: this.setTexts
      }, this.state.darkModeText), _reactDeviceDetect.isMobile || _reactDeviceDetect.isIPad13 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "nav-bar-icon",
        onTouchStart: this.onScaleChange
      }, scale === 'linear' ? _i18n["default"].LINEAR_SCALE[lang] : _i18n["default"].LOG_SCALE[lang]) : /*#__PURE__*/_react["default"].createElement("div", {
        className: "nav-bar-icon",
        "data-tip": scale === 'linear' ? _i18n["default"].LOG_SCALE_HELP_TEXT[lang] : _i18n["default"].LINEAR_SCALE_HELP_TEXT[lang],
        onClick: this.onScaleChange,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            scaleText: scale === 'linear' ? _i18n["default"].LOG_SCALE[lang] : _i18n["default"].LINEAR_SCALE[lang]
          });
        },
        onMouseLeave: this.setTexts
      }, this.state.scaleText), /*#__PURE__*/_react["default"].createElement("div", {
        className: "nav-bar-icon",
        "data-tip": _i18n["default"].RESET_HELP_TEXT[lang],
        onClick: this.props.reset
      }, _i18n["default"].RESET[lang]));
    }
  }]);

  return NavBar;
}(_react.Component);

exports["default"] = NavBar;