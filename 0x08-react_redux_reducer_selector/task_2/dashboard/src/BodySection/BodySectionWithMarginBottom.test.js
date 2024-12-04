import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from "aphrodite";

/* Before */

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

/* After */
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

/* Describe */
describe("BodySectionWithMarginBottom test", () => {
  it("Should apply th margin to child component", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).html())toEqual('<div class="BodySection"><h2>test title</h2></div>');
  });
});
