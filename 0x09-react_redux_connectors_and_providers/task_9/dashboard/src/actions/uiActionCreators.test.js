import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

// Creating the actions for the UI

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe ('action creators', () => {
  it('login', () => {
    const user = { email: 'tapiwaL@gmail.com', password: 678537003 };
    const data = { type: LOGIN, user };
    const res = login(user.email, user.password);

    expect(res).toEqual(data);
  });
  
  it('logout', () => {
    const data = { type: LOGOUT };
    const res = logout();

    expect(res).toEqual(data);
  });

  // Display the notification drawer
  it('displayNotificationDrawer', () => {
    const data = { type: DISPLAY_NOTIFICATION_DRAWER };
    const res = displayNotificationDrawer();

    expect(res).toEqual(data);
  });

  // Hide the notification drawer
  it('hideNotificationDrawer', () => {
    const data = { type: HIDE_NOTIFICATION_DRAWER };
    const res = hideNotificationDrawer();

    expect(res).toEqual(data);
  });
});
