import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Nav />
        </div>
      </div>
      );
  }
}

export default App;

