import {
  LOGIN,
  LOGOUT,
  DISPLAY,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

// Now export login

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};
export const boundlogin = email, password() => dispatch(login));

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const boundlogout = () => dispatch(logout));

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch('')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
};
