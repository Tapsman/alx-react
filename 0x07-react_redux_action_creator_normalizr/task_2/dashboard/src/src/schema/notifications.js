import * as notificationsData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Notifications

export const getAllNotificationsByUser = (userId) => {
  const notifications = normalize.entities.notifications;
  const messages = normalize.entities.messages;
  const notificationsByyUser = [];

  for (const prop in notifications) {
    if (notifications[prop].author === userId) {
      notificationsByUser.push(messages[notifications[prop].context]);
    }
  }

  return notificationsByUser;
};

// Normalizing a nested json

const user =  schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications'), {
  author: user;
  context: message;
});

const normalize = Normalizing(notificationsData.default, [notification]);

export { normalize}
