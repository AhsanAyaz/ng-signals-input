export type Notification = {
  text: string;
  read: boolean;
  uuid: string;
};

class DummyNotifications {
  notifications: Notification[] = [
    { text: 'New message received', read: false, uuid: '' },
    {
      text: 'Reminder: Meeting at 2 PM',
      read: false,
      uuid: '',
    },
    { text: 'You have a new follower', read: false, uuid: '' },
    {
      text: 'Weather update: Sunny day ahead',
      read: false,
      uuid: '',
    },
    {
      text: 'Payment received for your subscription',
      read: false,
      uuid: '',
    },
    {
      text: 'Product added to your shopping cart',
      read: false,
      uuid: '',
    },
    {
      text: 'Friend request from John Doe',
      read: false,
      uuid: '',
    },
    {
      text: 'Your post received 10 likes',
      read: false,
      uuid: '',
    },
    {
      text: "Don't forget to complete your profile",
      read: false,
      uuid: '',
    },
  ];

  selectRandom() {
    return {
      ...this.notifications[
        Math.floor(Math.random() * this.notifications.length)
      ],
      uuid: self.crypto.randomUUID(),
    };
  }
}

export default new DummyNotifications();
