import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Message } from './components/Message';

function App() {
  return (
    <div className="App">
    <Greet/>
    <Message/>
    </div>
  );
}

export default App;
