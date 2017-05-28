'use strict';

exports.__esModule = true;
exports.AsyncBase = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var AsyncBase = function (_Component) {
  _inherits(AsyncBase, _Component);

  function AsyncBase() {
    _classCallCheck(this, AsyncBase);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  return AsyncBase;
}(_react.Component);

exports.AsyncBase = AsyncBase;

exports.default = function (options) {
  var _class, _temp;

  var resolve = options.resolve,
      preload = options.preload,
      _options$loading = options.loading,
      Loading = _options$loading === undefined ? null : _options$loading;

  var module = null;

  var Async = (_temp = _class = function (_AsyncBase) {
    _inherits(Async, _AsyncBase);

    function Async() {
      _classCallCheck(this, Async);

      return _possibleConstructorReturn(this, _AsyncBase.apply(this, arguments));
    }

    Async.resolveModule = function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var resolvedModule;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
      if (this.context.registerChunk) {
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
      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
          rest = _objectWithoutProperties(_props, ['children']);

      var ModuleComponent = module;
      if (typeof children === 'function') {
        return children(ModuleComponent, rest);
      }

      if (!ModuleComponent) {
        return _react2.default.createElement(Loading, null);
      }

      return _react2.default.createElement(ModuleComponent, rest);
    };

    return Async;
  }(AsyncBase), _class.propTypes = {
    children: _propTypes2.default.func
  }, _class.defaultProps = {
    children: undefined
  }, _class.contextTypes = {
    registerChunk: _propTypes2.default.object
  }, _temp);


  return Async;
};