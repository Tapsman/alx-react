import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("Testing <CourseListRow />", () => {
    it("So when the isHeader is true, the test component renders one cell with colspan equals 2, when textSecondCell is not exist", () => {
        let wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first cell test"/>);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th')).toEqual('2');
        expect(wrapper.find('th').text()).toEqual('first cell test');
    });

    it("When the isHeader is true, test the component, render 2 cells when textScandal is present", () => {
        let wrapper = shallow(<CourseListRow isHEader={true} textFirstCell="first cell test" textsecondcell="second cell test"/>);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').at(0).text()).toEqual('second cell test');
        expect(wrapper.find('th').at(1).text()).toEqual('second cell test');
});

it("When the isHeader is false, test the component, render 2 td ele with tr element", () => {
    let wrapper = shallow(<CourseListRow isHEader={true} textFirstCell="first cell test" textsecondcell="second cell test"/>);
    expect(wrapper.find('td')).toHaveLength(2);
    expect(wrapper.find('td').at(0).text()).toEqual('second cell test');
    expect(wrapper.find('td').at(1).text()).toEqual('second cell test');
});
});
