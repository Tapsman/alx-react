import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Course types

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export const UnSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

export const boundSelectCourse = (index) => dispatch(UnSelectCourse(index));