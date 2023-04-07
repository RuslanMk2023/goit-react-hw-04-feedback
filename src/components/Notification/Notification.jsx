import { Component } from 'react';

export class Notification extends Component {
  render() {
    return <h2>{this.props.message}</h2>;
  }
}