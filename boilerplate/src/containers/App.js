import React, { Component, PropTypes } from 'react';

export class App extends Component {
  constructor() {
    this.props.Sample = '';
  }

  render() {
    return (
      <div> Hi </div>);
  }
}
App.propTypes = {
  Sample: PropTypes.string.isRequired,
};
