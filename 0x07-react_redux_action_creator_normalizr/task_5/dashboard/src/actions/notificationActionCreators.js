import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Now we create the notfication action creators

export const markAsread = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

// Filter types

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};
