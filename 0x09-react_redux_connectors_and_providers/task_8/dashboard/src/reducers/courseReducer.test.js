// The reducer for the courses

import courseReducer from './courseReducer';
import {
  SELECT_COURSE,
  FETCH_COURSE_SUCCESS,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('courseReducer', function () {
  it('Will check the state and returns an empty array', function () {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

// Now Fetches
it('FETCH_COURSE_SUCCESS, function () {
  const action = {
    {
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: "ES6",
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40
    }
  ],
},

// The expected data
 const expectedData = [
   {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  },
 ],

const state = courseReducer(undefined, action);
expect(state.toEqual(expectedData);
});

it('SELECT_COURSE', function () {
  const initState = [
    {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  },
],


const action = {
  type: SELSECT_COURSE,
  index: 2,
};

const expectedData = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: true,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  },
],
  const state = courseReducer(initState, action);
  expect(state.toEqual(expectedData);
});

it('UNSELECT_COURSE', function () {
  const initState = [
    {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  },
];


const action = {
  type: UNSELECT_COURSE,
  index: 2,
};

const expectedData = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  },
],

    const state = courseReducer(initState, action);
    expect(state).toEqual(expectedData);
  });
});
