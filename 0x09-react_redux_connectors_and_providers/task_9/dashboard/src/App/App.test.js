import { shallow, mount } from "enzyme";

import React from "react";

import App, { listNotificationInitState, mapStateToProps } from "./App";

import { StyleSheetTestUtils } from "aphrodite";

import AppContext, { user, logOut } from "./AppContext";

import { fromJS } from "immutable";

import { createStore } from "redux";

import {Provider } from "react-redux";

import uiReducer, { initState } from "../reducers/uiReducer";

// Now to create the store

const store = createStore(uiReducer, initState);

describe("<App />", () => {
  it("mapStateToProps returns right obj from the user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
});
