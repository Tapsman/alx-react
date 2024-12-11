// Reducers

import {
    SELECT_COURSE,
    FETCH_COURSE_SUCCESS,
    UNSELECT_COURSE,
} from '../actions/courseActionTypes';

const courseReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map((course) => {
                return {
                    ...course,
                    isSelected: false,
                };
            });
        
        case SELECT_COURSE:
            return state.map((course, index) => {
                const curr = {
                    ...course
                };
                if (course.id == action.index) curr.isSelected = true;

                return curr;
            });
        case UNSELECT_COURSE:
            return state.map((course) => {
                const curr = {
                    ...course,
                };
                if (course.id == action.index) curr.isSelected = false;

                return curr;
            });
        
        default:
            break;
    };
    return state;
};

export default courseReducer;
