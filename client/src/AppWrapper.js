import React from 'react';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./redux/reducers";
import {Provider} from "react-redux";
import AppContainer from "./components/AppContainer";
import {logger} from "redux-logger";

const store = createStore(reducer, applyMiddleware(thunk, logger));

function AppWrapper() {
  return (
    <div className="container">
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </div>
  );
}

export default AppWrapper;
