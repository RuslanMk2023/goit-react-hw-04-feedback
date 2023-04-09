import { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
  render() {
    return <h2>{this.props.message}</h2>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
