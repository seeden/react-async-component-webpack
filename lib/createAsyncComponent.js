'use strict';

exports.__esModule = true;
exports.AsyncBase = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AsyncBase = function (_Component) {
  (0, _inherits3.default)(AsyncBase, _Component);

  function AsyncBase() {
    (0, _classCallCheck3.default)(this, AsyncBase);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  return AsyncBase;
}(_react.Component);

exports.AsyncBase = AsyncBase;

exports.default = function (options) {
  var _class, _temp;

  var resolve = options.resolve,
      preload = options.preload,
      Loading = options.loading;

  var module = null;

  var Async = (_temp = _class = function (_AsyncBase) {
    (0, _inherits3.default)(Async, _AsyncBase);

    function Async() {
      (0, _classCallCheck3.default)(this, Async);
      return (0, _possibleConstructorReturn3.default)(this, _AsyncBase.apply(this, arguments));
    }

    Async.resolveModule = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var resolvedModule;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!module) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', module);

              case 2:
                resolvedModule = resolve();

                if (!(resolvedModule && typeof resolvedModule.then === 'function')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 6;
                return resolvedModule;

              case 6:
                module = _context.sent;
                _context.next = 10;
                break;

              case 9:
                module = resolvedModule;

              case 10:

                if (module.default) {
                  module = module.default;
                }

                return _context.abrupt('return', module);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function resolveModule() {
        return _ref.apply(this, arguments);
      }

      return resolveModule;
    }();

    Async.prototype.componentWillMount = function componentWillMount() {
      if (typeof this.context.registerChunk === 'function') {
        this.context.registerChunk(options);
      }

      this.load();
    };

    Async.prototype.componentDidMount = function componentDidMount() {
      if (preload) {
        resolve();
      }
    };

    Async.prototype.load = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.t0 = this;
                _context2.next = 3;
                return Async.resolveModule();

              case 3:
                _context2.t1 = _context2.sent;
                _context2.t2 = {
                  module: _context2.t1
                };

                _context2.t0.setState.call(_context2.t0, _context2.t2);

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load() {
        return _ref2.apply(this, arguments);
      }

      return load;
    }();

    Async.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          rest = (0, _objectWithoutProperties3.default)(_props, ['children']);

      var ModuleComponent = module;
      if (typeof children === 'function') {
        return children(ModuleComponent, rest);
      }

      if (!ModuleComponent) {
        return Loading ? _react2.default.createElement(Loading, null) : null;
      }

      return _react2.default.createElement(ModuleComponent, rest);
    };

    return Async;
  }(AsyncBase), _class.propTypes = {
    children: _propTypes2.default.func
  }, _class.defaultProps = {
    children: undefined
  }, _class.contextTypes = {
    registerChunk: _propTypes2.default.func
  }, _temp);


  return Async;
};