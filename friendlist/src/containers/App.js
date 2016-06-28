import React, { Component, PropTypes } from 'react';
import FriendList from '../components/FriendList';
export class App extends Component {
  ComponenWillMount() {
  }
  render() {
    return (
      <div>
        <FriendList />
        {this.props.children}
      </div>);
  }
}
App.propTypes = {
  children: PropTypes.string,
};
