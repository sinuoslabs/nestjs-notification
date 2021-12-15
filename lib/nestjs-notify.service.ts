import { Injectable, Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { INestjsNotifyChannel, NestJsNotify } from './interfaces';

@Injectable()
export class NestjsNotifyService {
  /**
   * Resolve the channel needed to send the Notification
   * @param channel
   */
  private resolveChannel = (channel: Type<INestjsNotifyChannel>) =>
    this.moduleRef.create(channel);

  /**
   * @constructor
   * @param {ModuleRef} moduleRef
   */
  constructor(private moduleRef: ModuleRef) {}

  /**
   * Process a notification and send via designated channel
   * @param {NestJsNotify} notification
   */
  public send(notification: NestJsNotify): Promise<any> {
    const channels = notification.sendToChannels();

    return Promise.all(
      channels.map((channel: Type<INestjsNotifyChannel>) =>
        this.sendOnChannel(notification, channel),
      ),
    );
  }

  /**
   * Send notification on designated channel
   * @param {NestJsNotify} notification
   * @param {Type<INestjsNotifyChannel>} clientChannel
   */
  private async sendOnChannel(
    notification: NestJsNotify,
    clientChannel: Type<INestjsNotifyChannel>,
  ): Promise<any> {
    return (await this.resolveChannel(clientChannel)).send(notification);
  }
}
