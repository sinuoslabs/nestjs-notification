import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { IWebhookChannel } from './webhook-channel.interface';
import { INestjsNotifyChannel } from '../../interfaces';

@Injectable()
export class WebhookChannel implements INestjsNotifyChannel {
  /**
   * @constructor
   * @param {HttpService} http
   */
  constructor(private readonly http: HttpService) {}

  /**
   * Send notify
   * @public
   * @param {IWebhookChannel} notification
   * @return Promise<AxiosResponse<any>>
   */
  public async send(
    notification: IWebhookChannel,
  ): Promise<AxiosResponse<any>> {
    return Promise.resolve(undefined);
  }
}
