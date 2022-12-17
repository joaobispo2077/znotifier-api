import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
      recipientId: '123',
    });

    expect(notification).toBeInstanceOf(Notification);
    expect(notification).toBeTruthy();
  });
});
