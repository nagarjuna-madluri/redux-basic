import * as React from 'react';
import './style.css';
import stores from './store.js';

export default function App() {
  var [counter, setCounter] = React.useState(stores.getState());
  let callDeposite = () => {
    stores.dispatch({ type: 'DEPOSITE' });
    setCounter(stores.getState());
  };
  let callWithdraw = () => {
    stores.dispatch({ type: 'WIDTHDRAW' });
    setCounter(stores.getState());
  };
  return (
    <div>
      <h1> Your Balance : Rs.{counter} </h1>
      <button
        onClick={() => {
          callDeposite();
        }}
      >
        DEPOSITE (+100)
      </button>
      &nbsp;
      <button
        onClick={() => {
          callWithdraw();
        }}
      >
        WIDTHDRAW (-10)
      </button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
