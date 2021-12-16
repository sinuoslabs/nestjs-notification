import { NestJsNotify } from './nestjs-notify.interface';

/**
 * @interface INestjsNotifyChannel
 * @property send()
 */
export interface INestjsNotifyChannel {
  /**
   * Send the given notification
   * @param {NestJsNotify} notification
   * @return Promise<any>
   */
  send(notification: NestJsNotify): Promise<any>;
}
