import { NestJsNotification } from './nestjs-notification.interface';

/**
 * @interface INestjsNotificationChannel
 * @property send()
 */
export interface INestjsNotificationChannel {
  /**
   * Send the given notification
   * @param {NestJsNotification} notification
   * @return Promise<any>
   */
  send(notification: NestJsNotification): Promise<any>;
}
