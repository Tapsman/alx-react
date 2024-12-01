import * as notificationsData from '../../notifications.json';

// Notifications

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.default
    .filter((item) => item.author.id == userId)
    .map(({ context }) => context);
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
