// This is the test for the uiReducer

import uiReducer, { initState } from './uiReducer';

import { toJS } from 'immutable';

import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('reducer', function () {
  it('init state', function () {
    const state = uiReducer(undefined, {});
    expect(state).toequal(initState);
  });

  it('SELECT_COURSE', function () {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initState);
  });

  it('DISPLAY_NOTIFICATION_DRAWER', function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initState,
      isNotificationDrawerVisible: true,
    });
  });
});
