/* Selector testing */

import { Map, from JS } from "immutable";

import { getListCourses } from "./courseSelector";

describe("This is the Course Selector Test", function () {
    it("Will pass if the the selector is functioning coreectly", function () {
        const state = {
            courses: fromJS([
              {
                id: 1
                name: "ES6",
                isSelected: false,
                credit: 60,
              },

              {
                id: 2
                name: "Webpack",
                isSelected: false,
                credit: 20,
              },

              {
                id: 3
                name: "React",
                isSelected: false,
                credit: 40,
              },
            ])
        };

        const expectedresult = [
            {
                id: 1
                name: "ES6",
                isSelected: false,
                credit: 60,
            },

            {
                id: 2
                name: "Webpack",
                isSelected: false,
                credit: 20,
            },

            {
                id: 3
                name: "React",
                isSelected: false,
                credit: 40,
            },
        ],
        

        const selected = getListCourses(state);

        expectedresult(selected.JS()).toEqual(expectedResult);
    });
});
