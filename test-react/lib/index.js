'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var draftJs = require('draft-js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _templateObject;
var EditorStyle = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color : red;\n  border: 1px solid black;\n  padding: 3px;\n\n  .tools {\n    padding: 5px;\n  }\n  .DraftEditor-root {\n    background-color : blue;\n  }\n"])));

var DraftEditor = function DraftEditor() {
  var _useState = React.useState(draftJs.EditorState.createEmpty()),
      _useState2 = _slicedToArray(_useState, 2),
      es = _useState2[0],
      setEs = _useState2[1];

  var editor = React.useRef();
  React.useEffect(function () {
    if (!editor.current) return;
    editor.current.focus();
  }, [editor]);
  return /*#__PURE__*/React__default["default"].createElement(EditorStyle, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React__default["default"].createElement("button", null, "a")), /*#__PURE__*/React__default["default"].createElement(draftJs.Editor, {
    ref: editor,
    editorState: es,
    onChange: setEs
  }));
};

exports.DraftEditor = DraftEditor;
