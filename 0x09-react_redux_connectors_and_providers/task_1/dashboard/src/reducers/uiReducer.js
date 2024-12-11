/ Basic reducer based on the previous project tasks
// Using some switch cases also

import { Map } from 'immunutable';
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
  user: {},
};

const uiReducer = (state = Map(iniState), action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

      case HIDE_NOTIFICATION_DRAWER:
        return state.set('isNotificationDrawerVisible', false);

        case LOGIN_SUCCESS:
          return state.set('isUserLoggedIn', true);

        case LOGIN_FAILURE:
          return state.set('isUserLoggedIn', false);
            
        case LOGOUT:
          return state.set('isUserLoggedIn', false);

        default:
          break;
  }
  return state;
};

export default uiReducer;
