import React from "react";
import BodySection from "./BodySection";
import { shallow } from "enzyme";

/* Tests the BodySection.js */

describe("BodySection tests", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test the children node</p>
      </BodySection>
    );


    expect(wrapper.exists()).toBe(true);
    expect(wrapper.exists("h2")).toBe(true);
    expect(wrapper.find("h2")).html())toEqual("<h2>test title</h2>");
    expect(wrapper.exists("p")).toBe(true);
    expect(wrapper.find("p")).text())toEqual("test the children node");
  });
});

