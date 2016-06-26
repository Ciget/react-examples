import React, { Component, PropTypes } from 'react';

export class App extends Component {
  ComponenWillMount() {
    console.log('sdsd');
    // this.props.Sample = '';
  }
  render() {
    return (
      <div> Hi
      </div>);
  }
}
App.propTypes = {
 // Sample: PropTypes.string.isRequired,
  // children: PropTypes.string,
};
