import { Type } from '@nestjs/common';
import { INestjsNotifyChannel } from './nestjs-notify-channel.interface';

/**
 * @interface NestJsNotify
 */
export interface NestJsNotify {
  /**
   * Get the channels the notification should broadcast on.
   * @returns {Type<INestjsNotifyChannel>[]} array
   */
  sendToChannels(): Type<INestjsNotifyChannel>[];

  /**
   * Get the json representation of the notification.
   * @returns json
   */
  toPayload?(): Record<string, any>;
}
