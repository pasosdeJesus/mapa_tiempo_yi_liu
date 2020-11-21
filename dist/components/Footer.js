"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fa = require("react-icons/fa");

var _reactstrap = require("reactstrap");

var _reactDeviceDetect = require("react-device-detect");

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Footer = /*#__PURE__*/function (_Component) {
  _inherits(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer() {
    var _this;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      modal: false
    };

    _this.toggle = function () {
      return _this.setState({
        modal: !_this.state.modal
      });
    };

    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          lang = _this$props.lang,
          fullMap = _this$props.fullMap,
          fullPlot = _this$props.fullPlot,
          fullTree = _this$props.fullTree;
      if (fullMap || fullPlot || fullTree) return /*#__PURE__*/_react["default"].createElement("div", null);
      return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "footer"
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://yliu.io"
      }, "Steven Liu"), " 2020"), /*#__PURE__*/_react["default"].createElement(_fa.FaInfoCircle, {
        "data-tip": !(_reactDeviceDetect.isMobile || _reactDeviceDetect.isIPad13) ? _i18n["default"].ABOUT[lang] : null,
        size: 18,
        onClick: function onClick() {
          return _this2.setState({
            modal: true
          });
        }
      }), /*#__PURE__*/_react["default"].createElement(_fa.FaGithub, {
        "data-tip": !(_reactDeviceDetect.isMobile || _reactDeviceDetect.isIPad13) ? _i18n["default"].SOURCE_CODE[lang] : null,
        size: 18,
        onClick: function onClick() {
          return window.open('https://github.com/stevenliuyi/covid19');
        }
      })), /*#__PURE__*/_react["default"].createElement(_reactstrap.Modal, {
        isOpen: this.state.modal,
        centered: true,
        toggle: this.toggle
      }, /*#__PURE__*/_react["default"].createElement(_reactstrap.ModalHeader, {
        toggle: this.toggle
      }, _i18n["default"].ABOUT[lang]), /*#__PURE__*/_react["default"].createElement(_reactstrap.ModalBody, {
        className: "footer-about"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        dangerouslySetInnerHTML: {
          __html: _i18n["default"].ABOUT_TEXT[lang]
        }
      }), /*#__PURE__*/_react["default"].createElement("a", {
        className: "bmc-button",
        target: "_blank",
        href: "https://www.buymeacoffee.com/stevenliuyi",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",
        alt: "Buy me a coffee"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        style: {
          marginLeft: 15,
          fontSize: 19
        }
      }, "Buy me a coffee")))));
    }
  }]);

  return Footer;
}(_react.Component);

exports["default"] = Footer;