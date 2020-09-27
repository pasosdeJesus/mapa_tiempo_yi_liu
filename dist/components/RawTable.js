"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RawTable;

var _react = _interopRequireDefault(require("react"));

var _reactTable = require("react-table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function textFilter(rows, ids, filterValue) {
  return rows.filter(function (r) {
    return ids.some(function (id) {
      var value = r.values[id];
      return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
    });
  });
} // flatten filter so that the filter can match subrows
// reference: https://github.com/uqix/reactkit-table/blob/master/src/filter/flatten.js


function flatten(filter) {
  return function (rows, ids, filterValue) {
    var flatRows = treeToFlat(rows).map(function (r) {
      return _objectSpread(_objectSpread({}, r), {}, {
        // or useFilters would recursively filter subRows
        subRows: [],
        depth: 0,
        xFlat: true
      });
    });
    return filter(flatRows, ids, filterValue);
  };
}

function treeToFlat(rows) {
  return [].concat(_toConsumableArray(rows), _toConsumableArray(rows.map(function (r) {
    return treeToFlat(r.subRows || []);
  }).reduce(function (pre, cur) {
    return [].concat(_toConsumableArray(pre), _toConsumableArray(cur));
  }, [])));
}

var RegionFilter = function RegionFilter(placeholderText) {
  return function (_ref) {
    var _ref$column = _ref.column,
        filterValue = _ref$column.filterValue,
        preFilteredRows = _ref$column.preFilteredRows,
        setFilter = _ref$column.setFilter;
    return /*#__PURE__*/_react["default"].createElement("input", {
      className: "data-table-input",
      value: filterValue || '',
      onChange: function onChange(e) {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      },
      placeholder: placeholderText
    });
  };
};

function RawTable(props) {
  var columns = props.columns,
      data = props.data,
      initialState = props.initialState,
      onRowClick = props.onRowClick,
      filterPlaceholder = props.filterPlaceholder;

  var _useTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data,
    defaultColumn: {
      Filter: RegionFilter(filterPlaceholder),
      filter: flatten(textFilter)
    },
    initialState: initialState,
    getResetExpandedDeps: false
  }, _reactTable.useFilters, _reactTable.useSortBy, _reactTable.useExpanded),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "data-table-wrap"
  }, headerGroups[0].headers[1].render('Filter'), /*#__PURE__*/_react["default"].createElement("table", _extends({
    className: "data-table"
  }, getTableProps()), /*#__PURE__*/_react["default"].createElement("thead", null, headerGroups.map(function (headerGroup, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column, j) {
      return /*#__PURE__*/_react["default"].createElement("th", column.getHeaderProps(column.getSortByToggleProps()), column.render('Header'));
    }));
  })), /*#__PURE__*/_react["default"].createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/_react["default"].createElement("tr", _extends({
      id: "table-".concat(row.original.region)
    }, row.getRowProps()), row.cells.map(function (cell, cellIdx) {
      return /*#__PURE__*/_react["default"].createElement("td", _extends({}, cell.getCellProps(), {
        onClick: cellIdx > 0 ? function () {
          return onRowClick(row);
        } : null
      }), cell.render('Cell'));
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'none'
    }
  }, rows.length, " regions"));
}