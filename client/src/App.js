import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form method="POST" enctype="multipart/form-data" action="/upload">
          <label>
            <input type="file" name="filename" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
