import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Message } from './components/Message';
import Welcome from './components/classComponent';
import Hello from './components/WithoutJSX';

function App() {
  return (
    <div className="App">
    <Greet />
    <Message greetMessage="Good Morning" name="Priyesha"/>
    <Message greetMessage="Good Evening" name="Ketan">
      <button>Reply</button>
      </Message>

      <Message greetMessage="Good afternoon" name="Everyone">
      <span>Text from children props</span>
      </Message>

    <Welcome/>
    <Hello/>
    </div>
  );
}

export default App;
