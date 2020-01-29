import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { Message } from './components/Message';
import Welcome from './components/classComponent';
import Hello from './components/WithoutJSX';
import Counter from './components/stateComponent';
import EventHandlingFunctional from './components/eventHandlingFunctional';
import EventHandlingClass from './components/eventHandlingClass';
import EventBinding from './components/eventBinding';
import Parent from './components/parentComponent'

function App() {
  return (
    <div className="App">
    {/* <Greet />
    <Message greetMessage="Good Morning" name="Priyesha"/>
    <Message greetMessage="Good Evening" name="Ketan">
      <button>Reply</button>
      </Message>

      <Message greetMessage="Good afternoon" name="Everyone">
      <span>Text from children props</span>
      </Message>

    <Welcome greetMessage="Good Morning" name="Priyesha">
      <span>Text from children of classComponent</span>
      </Welcome> */}
    <Message greetMessage="Good Morning" name="Priyesha"/>
    {/* <Welcome greetMessage="Good afternoon" name="Everyone"/>  */}

    {/* <Hello/> */}
    {/* <Counter></Counter>
    <EventHandlingFunctional/>
    <EventHandlingClass/> */}
    {/* <EventBinding></EventBinding> */}
    <Parent/>

    </div>
  );
}

export default App;
