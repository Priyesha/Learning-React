import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Message } from './components/Message';
import Welcome from './components/classComponent';

function App() {
  return (
    <div className="App">
    <Greet/>
    <Message/>
    <Welcome/>
    </div>
  );
}

export default App;
