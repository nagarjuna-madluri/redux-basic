import React from 'react';
import { createStore } from 'redux';

// Stores
let initialDeposite = 0;

// Reducers
let defaultReduces = (state = initialDeposite, actions) => {
  switch (actions.type) {
    case 'DEPOSITE':
      return (state = state + 100);
    case 'WIDTHDRAW':
      return (state = state - 10);
    default:
      return state;
  }
};

// Stores
let stores = createStore(defaultReduces);

export default stores;
