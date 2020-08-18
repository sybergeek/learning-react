import React from 'react';

import './App.scss';

import Nav from './components/Nav';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
      </div>
      <div className="musicControls">
        music controls
      </div>
    </div>
  );
}

export default App;
