"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _go = require("react-icons/go");

var _RegionDropdown = _interopRequireDefault(require("./RegionDropdown"));

var _RegionSelectOption = _interopRequireDefault(require("./RegionSelectOption"));

var _utils = require("../utils/utils");

var str = _interopRequireWildcard(require("../utils/strings"));

var _i18n = _interopRequireDefault(require("js-yaml-loader!../../assets/data/i18n.yml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var selectStyles = {
  control: function control(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      minWidth: 240,
      marginBottom: 8,
      borderRadius: 30
    });
  },
  menu: function menu() {
    return {
      backgroundColor: 'white',
      boxShadow: '0 0 0 1px hsla(218, 50%, 10%, 0.1), 0 4px 11px hsla(218, 50%, 10%, 0.1)',
      cursor: 'pointer'
    };
  },
  option: function option(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      textAlign: 'left',
      fontSize: 12,
      backgroundColor: state.isFocused ? 'var(--primary-color-5)' : state.isSelected ? '#eee' : null,
      color: state.isFocused ? '#fff' : '#000',
      cursor: 'pointer'
    });
  }
};
var selectStylesDark = {
  control: function control(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      minWidth: 240,
      marginBottom: 8,
      borderRadius: 30
    });
  },
  menu: function menu() {
    return {
      backgroundColor: 'var(--dark-grey)',
      boxShadow: '0 0 0 1px hsla(218, 50%, 10%, 0.1), 0 4px 11px hsla(218, 50%, 10%, 0.1)',
      cursor: 'pointer'
    };
  },
  option: function option(provided, state) {
    return _objectSpread(_objectSpread({}, provided), {}, {
      textAlign: 'left',
      fontSize: 12,
      backgroundColor: state.isFocused ? 'var(--primary-color-4)' : state.isSelected ? '#777' : null,
      color: 'var(--lighter-grey)',
      cursor: 'pointer'
    });
  }
};

var Region = /*#__PURE__*/function (_Component) {
  _inherits(Region, _Component);

  var _super = _createSuper(Region);

  function Region() {
    var _this;

    _classCallCheck(this, Region);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      isOpen: false,
      //value: undefined,
      value: 'en',
      options: [],
      countryOnly: true
    };

    _this.toggleOpen = function () {
      _this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    };

    _this.toggleCountryOnly = function () {
      _this.props.ReactTooltip.hide(_this.regionSelectMore);

      _this.setState({
        countryOnly: !_this.state.countryOnly
      });
    };

    _this.onSelectChange = function (selected) {
      _this.toggleOpen();

      _this.setState({
        value: selected
      });

      _this.props.regionToggle(selected.region);
    };

    _this.generateOptions = function (root) {
      var _this$props = _this.props,
          data = _this$props.data,
          lang = _this$props.lang,
          date = _this$props.date,
          metric = _this$props.metric;

      var englishRoot = _toConsumableArray(Array(root.length).keys()).map(function (i) {
        return root.slice(0, i + 1);
      }).map(function (regionList) {
        return (0, _utils.getDataFromRegion)(data, regionList).ENGLISH;
      });

      var options = [];
      var regionData = (0, _utils.getDataFromRegion)(data, root);
      Object.keys(regionData).filter(function (d) {
        return !['confirmedCount', 'deadCount', 'curedCount', 'ENGLISH'].includes(d);
      }).sort(function (a, b) {
        var aCount = regionData[a][metric][date] ? regionData[a][metric][date] : 0;
        var bCount = regionData[b][metric][date] ? regionData[b][metric][date] : 0;
        return aCount > bCount ? -1 : 1;
      }).forEach(function (d) {
        options.push({
          value: lang === 'zh' ? [].concat(_toConsumableArray(root), [d]).join('') : [].concat(_toConsumableArray(englishRoot), [regionData[d].ENGLISH]).join(''),
          region: [].concat(_toConsumableArray(root), [d]),
          label: /*#__PURE__*/_react["default"].createElement(_RegionSelectOption["default"], {
            region: lang === 'zh' ? [].concat(_toConsumableArray(root), [d]) : [].concat(_toConsumableArray(englishRoot), [regionData[d].ENGLISH]),
            data: regionData[d],
            date: date,
            metric: metric
          })
        });
        var childData = (0, _utils.getDataFromRegion)(data, [].concat(_toConsumableArray(root), [d]));
        var showSubRegions = [str.CHINA_ZH, str.FRANCE_ZH, str.UK_ZH, str.NETHERLANDS_ZH, str.DENMARK_ZH];
        if (Object.keys(childData).length > 4 && (!_this.state.countryOnly || root.length === 0 && showSubRegions.includes(d))) options = [].concat(_toConsumableArray(options), _toConsumableArray(_this.generateOptions([].concat(_toConsumableArray(root), [d]))));
      });
      return options;
    };

    _this.displayRegionName = function () {
      var _this$props2 = _this.props,
          currentRegion = _this$props2.currentRegion,
          data = _this$props2.data,
          lang = _this$props2.lang; // remove duplicates in case same region occurs at different level (e.g. Japan)

      var region = _toConsumableArray(new Set(currentRegion));

      if (lang === 'zh') {
        region = region.join(''); // China

        region = region !== str.CHINA_ZH ? region.replace(str.CHINA_ZH, '') : str.CHINA_ZH;
        region = region !== str.INTL_CONVEYANCE_ZH ? region.replace(str.INTL_CONVEYANCE_ZH, '') : str.INTL_CONVEYANCE_ZH;
        region = region !== str.MAINLAND_CHINA_ZH ? region.replace(str.MAINLAND_CHINA_ZH, '') : str.MAINLAND_CHINA_ZH; // France

        region = region !== "".concat(str.FRANCE_ZH).concat(str.METRO_FRANCE_ZH) ? region.replace(str.METRO_FRANCE_ZH, '') : str.METRO_FRANCE_ZH;
        region = region !== "".concat(str.FRANCE_ZH).concat(str.OVERSEAS_FRANCE_ZH) ? region.replace("".concat(str.FRANCE_ZH).concat(str.OVERSEAS_FRANCE_ZH), '') : "".concat(str.FRANCE_ZH).concat(str.OVERSEAS_FRANCE_ZH); // UK

        region = region !== "".concat(str.UK_ZH).concat(str.OVERSEAS_TERRITORIES_ZH) ? region.replace("".concat(str.UK_ZH).concat(str.OVERSEAS_TERRITORIES_ZH), '') : "".concat(str.UK_ZH).concat(str.OVERSEAS_TERRITORIES_ZH);
        region = region !== "".concat(str.UK_ZH).concat(str.CROWN_DEPENDENCIES_ZH) ? region.replace("".concat(str.UK_ZH).concat(str.CROWN_DEPENDENCIES_ZH), '') : "".concat(str.UK_ZH).concat(str.CROWN_DEPENDENCIES_ZH);
        return region;
      } else {
        if (data == null) return;

        var englishRegion = _toConsumableArray(Array(currentRegion.length).keys()).map(function (i) {
          return currentRegion.slice(0, i + 1);
        }).map(function (regionList) {
          return (0, _utils.getDataFromRegion)(data, regionList).ENGLISH;
        });

        englishRegion = _toConsumableArray(new Set(englishRegion));
        region = englishRegion.reverse().join(', '); // China

        region = region !== str.CHINA_EN ? region.replace(", ".concat(str.CHINA_EN), '') : str.CHINA_EN;
        region = region !== str.MAINLAND_CHINA_EN ? region.replace(", ".concat(str.MAINLAND_CHINA_EN), '') : str.MAINLAND_CHINA_EN; // France

        region = region !== "".concat(str.METRO_FRANCE_EN, ", ").concat(str.FRANCE_EN) ? region.replace(", ".concat(str.METRO_FRANCE_EN), '') : str.METRO_FRANCE_EN;
        region = region !== "".concat(str.OVERSEAS_FRANCE_EN, ", ").concat(str.FRANCE_EN) ? region.replace(", ".concat(str.OVERSEAS_FRANCE_EN, ", ").concat(str.FRANCE_EN), '') : str.OVERSEAS_FRANCE_EN; // Cruise ship

        region = region !== str.INTL_CONVEYANCE_EN ? region.replace(", ".concat(str.INTL_CONVEYANCE_EN), '') : str.INTL_CONVEYANCE_EN; // USA

        region = region !== str.US_EN ? region.replace(str.US_EN, 'US') : str.US_EN; // UK

        region = region !== str.UK_EN ? region.replace(str.UK_EN, 'UK') : str.UK_EN;
        region = region !== "".concat(str.OVERSEAS_TERRITORIES_EN, ", ").concat(str.UK_ABBR_EN) ? region.replace(", ".concat(str.OVERSEAS_TERRITORIES_EN, ", ").concat(str.UK_ABBR_EN), '') : str.OVERSEAS_TERRITORIES_EN;
        region = region !== "".concat(str.CROWN_DEPENDENCIES_EN, ", ").concat(str.UK_ABBR_EN) ? region.replace(", ".concat(str.CROWN_DEPENDENCIES_EN, ", ").concat(str.UK_ABBR_EN), '') : str.CROWN_DEPENDENCIES_EN;
        return region;
      }
    };

    _this.displayDate = function () {
      var _this$props3 = _this.props,
          lang = _this$props3.lang,
          date = _this$props3.date;
      return (0, _utils.formatDate)(date, lang);
    };

    _this.showTooltip = function () {
      // show tooltip only when text is overflow
      var elem = document.querySelector(".current-region div");
      if (elem == null) return true;
      return elem.offsetWidth === elem.scrollWidth;
    };

    return _this;
  }

  _createClass(Region, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.generateOptions([]);
      this.setState({
        options: options,
        value: {
          value: this.props.lang === 'zh' ? str.GLOBAL_ZH : str.GLOBAL_EN
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.lang !== this.props.lang || prevProps.metric !== this.props.metric || prevProps.date !== this.props.date || prevState.countryOnly !== this.state.countryOnly) {
        var options = this.generateOptions([]);
        this.setState({
          options: options
        });
      }

      if (prevState.isOpen !== this.state.isOpen || prevState.countryOnly !== this.state.countryOnly) {
        this.props.ReactTooltip.rebuild();
      }

      if (prevProps.currentRegion !== this.props.currentRegion) {
        var _this$props4 = this.props,
            data = _this$props4.data,
            currentRegion = _this$props4.currentRegion,
            lang = _this$props4.lang;

        var englishRegion = _toConsumableArray(Array(currentRegion.length).keys()).map(function (i) {
          return currentRegion.slice(0, i + 1);
        }).map(function (regionList) {
          return (0, _utils.getDataFromRegion)(data, regionList).ENGLISH;
        });

        this.setState({
          value: {
            value: lang === 'zh' ? currentRegion.join('') : englishRegion.join('')
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          value = _this$state.value,
          countryOnly = _this$state.countryOnly;
      if (this.props.data == null) return;
      var MoreIcon = countryOnly ? _go.GoUnfold : _go.GoFold;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "current-region-wrap"
      }, /*#__PURE__*/_react["default"].createElement(_RegionDropdown["default"], {
        isOpen: isOpen,
        onClose: this.toggleOpen,
        target: /*#__PURE__*/_react["default"].createElement("div", {
          className: "current-region",
          onClick: this.toggleOpen
        }, /*#__PURE__*/_react["default"].createElement("div", {
          "data-tip": this.displayRegionName(),
          "data-tip-disable": this.showTooltip(),
          "data-place": 'bottom'
        }, this.displayRegionName()), /*#__PURE__*/_react["default"].createElement(_go.GoSearch, {
          size: 18,
          className: "dropdown-arrow",
          style: {
            transform: 'translateY(1px)'
          }
        }))
      }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
        classNamePrefix: 'region-select',
        autoFocus: true,
        backspaceRemovesValue: false,
        components: {
          DropdownIndicator: function DropdownIndicator() {
            return /*#__PURE__*/_react["default"].createElement("span", {
              className: "region-select-more",
              onMouseUp: _this2.toggleCountryOnly,
              onTouchEnd: _this2.toggleCountryOnly,
              onMouseEnter: function onMouseEnter() {
                return _this2.props.ReactTooltip.show(_this2.regionSelectMore);
              },
              onMouseLeave: function onMouseLeave() {
                return _this2.props.ReactTooltip.hide(_this2.regionSelectMore);
              },
              ref: function ref(_ref) {
                return _this2.regionSelectMore = _ref;
              },
              "data-tip": countryOnly ? _i18n["default"].MORE_REGIONS_HELP_TEXT[_this2.props.lang] : _i18n["default"].LESS_REGIONS_HELP_TEXT[_this2.props.lang]
            }, /*#__PURE__*/_react["default"].createElement(MoreIcon, {
              size: 16,
              color: _this2.props.darkMode ? 'var(--primary-color-4)' : 'var(--primary-color-5)'
            }));
          },
          IndicatorSeparator: null
        },
        controlShouldRenderValue: false,
        hideSelectedOptions: false,
        isClearable: false,
        menuIsOpen: true,
        onChange: this.onSelectChange,
        options: this.state.options,
        placeholder: "".concat(_i18n["default"].SEARCH[this.props.lang], " ...... "),
        styles: this.props.darkMode ? selectStylesDark : selectStyles,
        tabSelectsValue: false,
        value: value,
        noOptionsMessage: function noOptionsMessage() {
          return _i18n["default"].NO_RESULT[_this2.props.lang];
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "current-date"
      }, this.displayDate()));
    }
  }]);

  return Region;
}(_react.Component);

exports["default"] = Region;