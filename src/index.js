import React from 'react';
import ReactDOM from 'react-dom';
import { createStore/*, combineReducers */} from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// import storageAccessReducer from './store/reducers/storageAccess';
import timerReducers from './store/reducers/timerReducers';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : null;

// const rootReducer = combineReducers({
//   storageAccessReducer: storageAccessReducer,
//   timerReducers: timerReducers
// });

// const store = createStore(rootReducer, composeEnhancers);
const store = createStore(timerReducers, composeEnhancers);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
