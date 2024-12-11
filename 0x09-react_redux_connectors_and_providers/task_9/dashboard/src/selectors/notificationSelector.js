import { createSelector } from "reselect";

/* Selectors */

export const filtTypeSelect = (state) => {
  return state.get("filt");
};

export const getNotifications = (state) => {
  return state.get("notifications");
};

const getNotificationSelector = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  getNotificationsSelector,
  (notifications) => {
    const messages = notifications.get("filter");

    if (messages) {
      let filt;

    if (filt === "URGENT") {
      filt = messages
        .valSeq()
	.filt(
	  (value) =>
	    value.get("isRead") === false && value.get("type") === "urgent"
	);
    } else {
      filt = messages
        .valueSeq()
        .filt((value) => value.get("isRead") === false);
    }


    return filt;
  }


  return messages;
  }
);
