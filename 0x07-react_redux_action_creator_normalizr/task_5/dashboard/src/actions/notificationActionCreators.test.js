import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationsTypeFilters,
} from './notificationActionTypes';

// Create actions for the notification list
 import {
   markAsread,
   setNotificationActionFilter,
 } from './notificationActionCreators';

describe('The action creators', () => {
  it('markAsread', () => {
    const data = {
      type: MARK_AS_READ,
      index: 1,
    };
    const res = markAsread(1);

    expect(res).toEqual(data);
  });

  it('setNotificationFilter', () => {
    const data {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };
    const res = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(res).toEqual(data);
  });
});
