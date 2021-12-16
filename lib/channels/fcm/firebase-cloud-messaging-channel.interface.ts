import { NestJsNotify } from '../../interfaces';

export interface IFirebaseCloudMessagingChannel extends NestJsNotify {
  /**
   * Define the FCM token to send the notification to
   * @property
   * @returns {string}
   */
  fcmToken(): string;

  /**
   * Get the FCM representation of the notification.
   * @property
   * @returns {any} http payload data
   */
  toFcm?(): any;
}
