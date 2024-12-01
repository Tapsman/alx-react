import { shallow, mount } from "enzyme";
import React from "react";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

describe("<App />, () => {
  beforeAll() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAnd ResumeStyleInjection();
  });

  it("Th eapp renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contain the notifications component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });
  it("contain the header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });
