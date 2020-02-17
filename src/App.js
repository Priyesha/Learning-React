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
import ConditionalRendering from './components/conditionalRendering';
import ListRendering from './components/ListRendering';
import ListRenderingComplex from './components/ListRenderingComplex';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
import './commonStyles.css';
import styles from './styles.module.css';
import Form from './components/Form';
import LifeCycleParent from './components/LifeCycleParent';

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
    {/* <Message greetMessage="Good Morning" name="Priyesha"/> */}
    {/* <Welcome greetMessage="Good afternoon" name="Everyone"/>  */}

    {/* <Hello/> */}
    {/* <Counter></Counter>
    <EventHandlingFunctional/>
    <EventHandlingClass/> */}
    {/* <EventBinding></EventBinding> */}
    {/* <Parent/> */}
    {/* <ConditionalRendering/>*/}
    {/* <ListRendering/>  */}
    {/* <ListRenderingComplex/> */}
    {/* <Stylesheets isPrimary={true}/> */}
    {/* <h2 className="success">Success</h2>
    <h3 className={styles.error}>Error</h3>
    <Inline styles={styles}/> */}
    {/* <Form></Form> */}
    <LifeCycleParent/>
    </div>
  );
}

export default App;
