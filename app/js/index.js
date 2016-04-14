import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from './components/main.js';
import reducers from './reducers'; 

const store = createStore(reducers);

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
    document.getElementById('app')
);
