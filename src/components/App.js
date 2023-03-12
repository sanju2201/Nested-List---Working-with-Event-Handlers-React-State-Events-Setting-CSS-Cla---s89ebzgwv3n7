import React, { useState } from 'react';
import './../styles/App.css';
import { states } from './Data';
import State from './State';

// Do not alter the states const and values inside it.

function App() {
  return (
    <div id="main">
      {states.map((state, idx) => (
        <ul key={Math.random()}>
          <State
            id={'state' + (idx + 1)}
            name={state.name}
            cities={state.cities}
          />
        </ul>
      ))}
    </div>
  );
}

export default App;