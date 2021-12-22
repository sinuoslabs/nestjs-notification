import { Type } from '@nestjs/common';
import { INestjsNotificationChannel } from './nestjs-notification-channel.interface';

/**
 * @interface NestJsNotification
 * @property sendToChannels()
 * @property toPayload?()
 */
export interface NestJsNotification {
  /**
   * Get the channels the notification should broadcast on.
   * @returns {Type<INestjsNotificationChannel>[]} array
   */
  sendToChannels(): Type<INestjsNotificationChannel>[];

  /**
   * Get the json representation of the notification.
   * @returns {Record<string, any>}
   */
  toPayload?(): Record<string, any>;
}
