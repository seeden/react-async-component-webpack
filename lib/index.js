'use strict';

exports.__esModule = true;
exports.AsyncProvider = exports.AsyncBase = exports.default = undefined;

var _createAsyncComponent = require('./createAsyncComponent');

Object.defineProperty(exports, 'AsyncBase', {
  enumerable: true,
  get: function get() {
    return _createAsyncComponent.AsyncBase;
  }
});

var _createAsyncComponent2 = _interopRequireDefault(_createAsyncComponent);

var _AsyncProvider2 = require('./AsyncProvider');

var _AsyncProvider3 = _interopRequireDefault(_AsyncProvider2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _createAsyncComponent2.default;
exports.AsyncProvider = _AsyncProvider3.default;