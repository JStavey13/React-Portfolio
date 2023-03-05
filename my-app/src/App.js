import React from 'react';
import './App.css';
import Nav from './Components/nav';
import Hero from './Components/hero';
import 'bulma/css/bulma.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
      </header>
    </div>
  );
}

export default App;
