import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';

const { remote }: any = window.electron || {};

class App extends Component {
  handleClick() {
    remote && remote.dialog.showMessageBox({
      type: 'info',
      title: 'Electron dialog',
      message: 'This is an electron dialog'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleClick}>
            Click me
          </button>
        </header>
      </div>
    );
  }
}

export default App;
