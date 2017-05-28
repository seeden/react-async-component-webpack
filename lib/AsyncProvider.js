'use strict';

exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncProvider = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(AsyncProvider, _Component);

  function AsyncProvider() {
    (0, _classCallCheck3.default)(this, AsyncProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args)));

    _this.registerChunk = function (options) {
      var chunks = _this.props.context.chunks;


      chunks.push(options);
    };

    var context = _this.props.context;

    context.chunks = [];
    return _this;
  }

  AsyncProvider.prototype.getChildContext = function getChildContext() {
    return {
      registerChunk: this.registerChunk
    };
  };

  AsyncProvider.prototype.render = function render() {
    return this.props.children;
  };

  return AsyncProvider;
}(_react.Component), _class.propTypes = {
  context: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node
}, _class.defaultProps = {
  children: undefined
}, _class.childContextTypes = {
  registerChunk: _propTypes2.default.func.isRequired
}, _temp);
exports.default = AsyncProvider;