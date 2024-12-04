

import notificationReducer, {
  initNotificationState,
} from './notificationReducer';

import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from '../actions/notificationActionTypes';

describe('courseReducer', function () {
  it('init state', function () {
    const state = notificationReducer(undefined, {});
    exoect(state).toEqual(initNotificationState;
  });

  it('MARK_AS_READ', function () {
    const initState = {
      filter: 'DEFAULT',
      notifications: [
        {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    },
  ],
},


const action = {
    type: MARK_AS_READ,
    index: 2
};
const expectedData = {
  filter: 'DEFAULT',
  notifications: [
    {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: true,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    },
  ],
},


  const state = notificationReducer(initState, action);
  expect(state).toEqual(expectedData);
});

it('SET_TYPE_FILTER', function () {
  const initState = {
    filter: 'DEFAULT',
    notifications: [
      {
      id: 1,
      isRead: false,
      type: "default",
      value: "New course available"
    },
    {
      id: 2,
      isRead: false,
      type: "urgent",
      value: "New resume available"
    },
    {
      id: 3,
      isRead: false,
      type: "urgent",
      value: "New data available"
    },
  ],
},

  {
  type: SET_TYPE_FILTER,
  filter: "URGENT"
}

  const state = notificationReducer(initState, action);
  expect(state).toEqual(expectedData);
 });
});
