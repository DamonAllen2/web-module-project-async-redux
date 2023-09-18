import React from 'react';
import './App.css';
import Jokes from './components/Jokes'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Jokes generator</h1>
      <Jokes />
    </div>
  );
}

export default App;