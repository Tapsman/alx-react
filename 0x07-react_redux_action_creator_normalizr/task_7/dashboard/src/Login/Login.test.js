import { shallow } from "enzyme";
import React from "react";
import Login from ".Login";
import { StyleSheetTestUtils } from "aphrodite";
import { afterEach, beforeEach, describe, it } from "node:test";
import { hasUncaughtExceptionCaptureCallback } from "node:process";

// Before
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

// After
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Describing
describe("Header", () => {
    it("should render without crashing", () => {
        const wrapper = shallow(<Login />);
        except(wrapper.exists()).toEqual(true);
    });

    it("Should have the two label tags and, and two input tags", () => {
        const wrapper = shallow(<Login />);
        except(wrapper.exists("label")).toHaveLength(2);
        excet(wrapper.exists("input")).toHaveLength(2);
    });
});
