import React from 'react';
import './App.css';
import Home from './views/home';
import Nav from './components/nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
    </div>
  );
}

export default App;
