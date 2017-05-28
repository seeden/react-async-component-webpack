import { Component } from 'react';
import PropTypes from 'prop-types';

export default class AsyncProvider extends Component {
  static propTypes = {
    context: PropTypes.object.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  static childContextTypes = {
    registerChunk: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);

    const { context } = this.props;
    context.chunks = [];
  }

  getChildContext() {
    return {
      registerChunk: this.registerChunk,
    };
  }

  registerChunk = (options) => {
    const { context: { chunks } } = this.props;

    chunks.push(options);
  }

  render() {
    return this.props.children;
  }
}
