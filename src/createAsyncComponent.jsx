import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AsyncBase extends Component {
}

export { AsyncBase };

export default (options) => {
  const {
    resolve,
    preload,
    loading: Loading,
  } = options;
  let module = null;

  class Async extends AsyncBase {
    static propTypes = {
      children: PropTypes.func,
    };

    static defaultProps = {
      children: undefined,
    };

    static contextTypes = {
      registerChunk: PropTypes.func,
    };

    static async resolveModule() {
      if (module) {
        return module;
      }

      const resolvedModule = resolve();
      if (resolvedModule && typeof resolvedModule.then === 'function') {
        module = await resolvedModule;
      } else {
        module = resolvedModule;
      }

      if (module.default) {
        module = module.default;
      }

      return module;
    }

    componentWillMount() {
      if (typeof this.context.registerChunk === 'function') {
        this.context.registerChunk(options);
      }

      this.load();
    }

    componentDidMount() {
      if (preload) {
        resolve();
      }
    }

    async load() {
      this.setState({
        module: await Async.resolveModule(),
      });
    }

    render() {
      const { children, ...rest } = this.props;
      const ModuleComponent = module;
      if (typeof children === 'function') {
        return children(ModuleComponent, rest);
      }

      if (!ModuleComponent) {
        return Loading ? <Loading /> : null;
      }

      return <ModuleComponent {...rest} />;
    }
  }

  return Async;
};
