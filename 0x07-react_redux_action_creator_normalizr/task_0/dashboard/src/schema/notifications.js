import * as notificationsData from '../../notifications.json';

// Notifications

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.default
    .filter((item) => item.author.id == userId)
    .map(({ context }) => context);
};
