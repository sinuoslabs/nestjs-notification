import { Injectable, Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { INestjsNotificationChannel, NestJsNotification } from './interfaces';

@Injectable()
export class NestjsNotificationService {
  /**
   * Resolve the channel needed to send the Notification
   * @param channel
   */
  private resolveChannel = (channel: Type<INestjsNotificationChannel>) =>
    this.moduleRef.create(channel);

  /**
   * @constructor
   * @param {ModuleRef} moduleRef
   */
  constructor(private moduleRef: ModuleRef) {}

  /**
   * Process a notification and send via designated channel
   * @param {NestJsNotification} notification
   */
  public send(notification: NestJsNotification): Promise<any> {
    const channels = notification.sendToChannels();

    return Promise.all(
      channels.map((channel: Type<INestjsNotificationChannel>) =>
        this.sendOnChannel(notification, channel),
      ),
    );
  }

  /**
   * Send notification on designated channel
   * @param {NestJsNotification} notification
   * @param {Type<INestjsNotificationChannel>} clientChannel
   */
  private async sendOnChannel(
    notification: NestJsNotification,
    clientChannel: Type<INestjsNotificationChannel>,
  ): Promise<any> {
    return (await this.resolveChannel(clientChannel)).send(notification);
  }
}
