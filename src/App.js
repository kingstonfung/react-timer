import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import TimerWidget from './containers/TimerWidget/TimerWidget';
import { readLocalStorageTimeData } from './store/actions/storageAccess';

class App extends Component {
  componentDidMount() {
    this.props.getLocalStorageTimeRecord();
  }

  render() {
    return (
      <TimerWidget />
    )
    /*
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    */
  }
}

const mapStateToProps = state => {
  return {
    time: state.time
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLocalStorageTimeRecord: () => dispatch(readLocalStorageTimeData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
