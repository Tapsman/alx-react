g/ Defining the FETCH_NOTIFICATIONS_SUCCESS

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';

export const initNotificationState = {
  notifications: [],
  filter: 'DEFAULT',
};

const notificationReducer = (state = initNotificationState, action) => {
  switch (action.type) {
    /*
      {
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data: [
    {
      id: 1,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      type: "urgent",
      value: "New data available"
    }
  ]
}
*/

  case MARK_AS_READ:
    return {
      ...state,
      notifications: state.notification.map((notification) => {
        const curr = {
	  ...notification,
	};
	if (notification.id == action.index) curr.isRead = true;

	return curr;
      });
    };

  case SET_TYPE_FILTER:
    return {
      ...state,
      filter: action.filter,
    }
    return state;
};

export default notificationReducer;
