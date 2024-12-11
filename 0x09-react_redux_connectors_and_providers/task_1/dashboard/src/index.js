// This is the index .js

import React from "react";

import ReactDOM from "react-dom";

import { createStore } from "react";

import { provider } from "react-redux";

import App from "./App/App";

import uiReducer, { initState } from "./reducers/uiReducer";

import { Map } from from "immutable";

const store = createStore(uiReducer, Map(initState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
};
