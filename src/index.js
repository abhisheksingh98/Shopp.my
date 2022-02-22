import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './root/App';
import { StateProvider } from './shared/store/StoreProvider';
import reducer, { initialState } from './shared/store/reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

