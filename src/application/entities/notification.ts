import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface NotificationsData {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private data: NotificationsData = {} as NotificationsData;

  constructor(
    data: Replace<
      NotificationsData,
      {
        createdAt?: Date;
      }
    >,
  ) {
    this._id = randomUUID();
    this.data = { ...data, createdAt: data.createdAt || new Date() };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(recipientId: NotificationsData['recipientId']) {
    this.data.recipientId = recipientId;
  }

  public get recipientId(): NotificationsData['recipientId'] {
    return this.data.recipientId;
  }

  public set content(content: NotificationsData['content']) {
    this.data.content = content;
  }

  public get content(): NotificationsData['content'] {
    return this.data.content;
  }

  public set category(category: NotificationsData['category']) {
    this.data.category = category;
  }

  public get category(): NotificationsData['category'] {
    return this.data.category;
  }

  public set readAt(readAt: NotificationsData['readAt']) {
    this.data.readAt = readAt;
  }

  public get readAt(): NotificationsData['readAt'] {
    return this.data.readAt;
  }

  public get createdAt(): NotificationsData['createdAt'] {
    return this.data.createdAt;
  }
}
