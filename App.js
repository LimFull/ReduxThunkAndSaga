import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './component/Timer';
import reducer from './reducer';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

console.log("store.getstate() ", store.getState());

export default function App() {
  return(
    <Provider store = {store} >
      <Timer />
    </Provider>
  );
}


export const bind = (actions) => bindActionCreators(actions, store.dispatch);
