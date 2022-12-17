import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { PrismaService } from '../../database/prisma/prisma.service';

@Controller()
export class NotificationsController {
  @Post()
  createNotification(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    return null;
  }
}
