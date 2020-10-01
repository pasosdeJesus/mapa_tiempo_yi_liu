"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ai = require("react-icons/ai");

var _RawTable = _interopRequireDefault(require("./RawTable"));

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

var Table = /*#__PURE__*/function (_Component) {
  _inherits(Table, _Component);

  var _super = _createSuper(Table);

  function Table() {
    var _this;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onRowClick = function (row) {
      _this.props.regionToggle(row.original.region.split('.'));
    };

    _this.highlightCurrentRegion = function () {
      document.querySelectorAll('.data-table tr').forEach(function (x) {
        return x.classList.remove('current');
      }); // hack

      setTimeout(function () {
        var elem = document.getElementById("table-".concat(_this.props.currentRegion.join('.')));
        var tbodyElem = document.querySelector('.data-table tbody'); // scroll into view if the row is not visible

        if (elem != null && tbodyElem != null) {
          elem.classList.add('current');
          var bounding = elem.getBoundingClientRect();
          var tableBounding = tbodyElem.getBoundingClientRect();
          var isInViewPort = bounding.top >= tableBounding.top && bounding.bottom <= tableBounding.bottom;
          if (!isInViewPort) tbodyElem.scrollTop = elem.offsetTop - tbodyElem.offsetTop;
        }
      }, 200);
    };

    _this.getInitialSate = function (tableData) {
      var _this$props = _this.props,
          currentRegion = _this$props.currentRegion,
          playing = _this$props.playing;
      if (currentRegion[0] === str.GLOBAL_ZH && playing) return {};
      var indices = [];
      currentRegion.slice(0, currentRegion.length - 1).forEach(function (r) {
        var regionData = indices.reduce(function (s, x) {
          return Array.isArray(s) ? s[x] : s.subRows[x];
        }, tableData);
        var subregions = Array.isArray(regionData) ? regionData : regionData.subRows;
        var newIdx = subregions.findIndex(function (x) {
          return x.name === r;
        });
        indices.push(newIdx);
      });
      var expanded = indices.map(function (x, i) {
        return indices.slice(0, i + 1).join('.');
      }).reduce(function (s, x) {
        s[x] = true;
        return s;
      }, {});
      return {
        expanded: expanded
      };
    };

    return _this;
  }

  _createClass(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.currentRegion.join('.') !== this.props.currentRegion.join('.')) this.highlightCurrentRegion();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.highlightCurrentRegion();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.lang !== this.props.lang || nextProps.date !== this.props.date || nextProps.currentRegion !== this.props.currentRegion || nextProps.fullTree !== this.props.fullTree;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          lang = _this$props2.lang,
          date = _this$props2.date,
          fullTree = _this$props2.fullTree;
      if (data == null) return /*#__PURE__*/_react["default"].createElement("div", null);
      var tableData = (0, _utils.generateTreeData)(data, date, lang, false, 'subRows', 'confirmedCount', str.GLOBAL_ZH, fullTree);
      var columns = [{
        // Build our expander column
        id: 'expander',
        // Make sure it has an ID
        Header: function Header(_ref) {
          var getToggleAllRowsExpandedProps = _ref.getToggleAllRowsExpandedProps,
              isAllRowsExpanded = _ref.isAllRowsExpanded;
          return /*#__PURE__*/_react["default"].createElement("span", getToggleAllRowsExpandedProps(), isAllRowsExpanded ? /*#__PURE__*/_react["default"].createElement(_ai.AiFillCaretDown, {
            size: 14
          }) : /*#__PURE__*/_react["default"].createElement(_ai.AiFillCaretRight, {
            size: 14
          }));
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;
          return (// Use the row.canExpand and row.getToggleRowExpandedProps prop getter
            // to build the toggle for expanding a row
            row.canExpand ? /*#__PURE__*/_react["default"].createElement("span", row.getToggleRowExpandedProps({
              style: {
                // We can even use the row.depth property
                // and paddingLeft to indicate the depth
                // of the row
                paddingLeft: 0
              }
            }), row.isExpanded ? /*#__PURE__*/_react["default"].createElement(_ai.AiFillCaretDown, {
              size: 14
            }) : /*#__PURE__*/_react["default"].createElement(_ai.AiFillCaretRight, {
              size: 14
            })) : null
          );
        }
      }, {
        id: 'table-region',
        Header: _i18n["default"].REGION[lang],
        Cell: function Cell(_ref3) {
          var row = _ref3.row;
          return /*#__PURE__*/_react["default"].createElement("span", null, "".concat(_toConsumableArray(Array(row.depth + 1).keys()).map(function (x) {
            return '　';
          }).join('')).concat(row.original.displayName, "\xA0\xA0"));
        },
        accessor: 'displayName'
      }, {
        id: 'table-confirmed',
        Header: _i18n["default"].CONFIRMED[lang],
        Cell: function Cell(_ref4) {
          var row = _ref4.row;
          return !isNaN(row.original.confirmedCount) ? row.original.confirmedCount : str.EMPTY;
        },
        accessor: 'confirmedCount'
      }];
      if (fullTree) columns = [].concat(_toConsumableArray(columns), [{
        id: 'table-active',
        Header: _i18n["default"].ACTIVE[lang],
        Cell: function Cell(_ref5) {
          var row = _ref5.row;
          return !isNaN(row.original.active) ? row.original.active : str.EMPTY;
        },
        accessor: 'active'
      }, {
        id: 'table-newConfirmed',
        Header: _i18n["default"].NEW_CONFIRMED[lang],
        Cell: function Cell(_ref6) {
          var row = _ref6.row;
          return !isNaN(row.original.newConfirmed) ? row.original.newConfirmed : str.EMPTY;
        },
        accessor: 'newConfirmed'
      }, {
        id: 'table-newDead',
        Header: _i18n["default"].NEW_DEATHS[lang],
        Cell: function Cell(_ref7) {
          var row = _ref7.row;
          return !isNaN(row.original.newDead) ? row.original.newDead : str.EMPTY;
        },
        accessor: 'newDead'
      }, {
        id: 'table-fatalityRate',
        Header: _i18n["default"].FATALITY_RATE[lang],
        Cell: function Cell(_ref8) {
          var row = _ref8.row;
          return !isNaN(row.original.fatalityRate) ? (row.original.fatalityRate * 100).toFixed(2) + '%' : str.EMPTY;
        },
        accessor: 'fatalityRate',
        sortType: 'basic'
      }, {
        id: 'table-recoveryRate',
        Header: _i18n["default"].RECOVERY_RATE[lang],
        Cell: function Cell(_ref9) {
          var row = _ref9.row;
          return !isNaN(row.original.recoveryRate) ? (row.original.recoveryRate * 100).toFixed(2) + '%' : str.EMPTY;
        },
        accessor: 'recoveryRate',
        sortType: 'basic'
      }]);
      var initialState = this.getInitialSate(tableData);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement(_RawTable["default"], {
        columns: columns,
        data: tableData,
        initialState: initialState,
        onRowClick: this.onRowClick,
        filterPlaceholder: "".concat(_i18n["default"].SEARCH[lang], " ...")
      }));
    }
  }]);

  return Table;
}(_react.Component);

exports["default"] = Table;