import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
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
      </header>
    </div>
  );
}


// let changeName;
class name extends changeName{  
  constructor(props) {
    super(props)
    this.state = {name: 'señor desconocido'}
  }
  changeName() {
    let n = document.getElementsByClassName('input')[0].value
    this.setState({name: n})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit {gfm-js-extract-pre-1} and save to reload.
        </p>
        <Name />
      </div>
    );
  }
}


export default App;
