import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Message } from './components/Message';
import Welcome from './components/classComponent';
import Hello from './components/WithoutJSX';

function App() {
  return (
    <div className="App">
    <Greet/>
    <Message/>
    <Welcome/>
    <Hello/>
    </div>
  );
}

export default App;
