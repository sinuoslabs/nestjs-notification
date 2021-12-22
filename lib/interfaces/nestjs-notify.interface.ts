import { Type } from '@nestjs/common';
import { INestjsNotifyChannel } from './nestjs-notify-channel.interface';

/**
 * @interface NestJsNotify
 * @property sendToChannels()
 * @property toPayload?()
 */
export interface NestJsNotify {
  /**
   * Get the channels the notification should broadcast on.
   * @returns {Type<INestjsNotifyChannel>[]} array
   */
  sendToChannels(): Type<INestjsNotifyChannel>[];

  /**
   * Get the json representation of the notification.
   * @returns {Record<string, any>}
   */
  toPayload?(): Record<string, any>;
}
