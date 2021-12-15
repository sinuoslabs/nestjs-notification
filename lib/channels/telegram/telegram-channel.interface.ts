import { NestJsNotify } from "../../interfaces";

/** Telegram channel model
 * @interface ITelegramChannel
 * @extends NestJsNotify
 */
export interface ITelegramChannel extends NestJsNotify {
  /**
   * Get the Http representation of the notification.
   * @property
   * @returns {any} http payload data
   */
  toTelegram?(): any;
}
