'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var AsyncProvider = (_temp = _class = function (_Component) {
  _inherits(AsyncProvider, _Component);

  function AsyncProvider() {
    _classCallCheck(this, AsyncProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args)));

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