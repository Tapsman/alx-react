// Basic reducer based on the previous project tasks

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../actions/uiActionTypes';

export const initState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},:wq
  
};

const uiReducer = (state = initState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };

    case HIDE_NOTIFICATION_DRAWER:
      return {
        ..state,
	isNotificationDrawerVisible: false,
      };

    // Login Success
    case LOGIN_SUCCESS:
      return {
        ...state,
	isUserLoggedIn: true,
      };

    // Returns false if user could not logg in
    case LOGIN_FAILURE:
      return {
        ...state,
	isUserLoggedIn: false,
      };

     case LOGOUT:
       return {
         ...state,
	 isUserLoggedIn: false,
       };

     default:
       break;
  }
  return state;
};

export default uiReducer;
