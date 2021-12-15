import { NestJsNotify } from "../../interfaces";

/**
 * Webhook channel model
 * @interface IWebhookChannel
 * @extends NestJsNotify
 */
export interface IWebhookChannel extends NestJsNotify {
  /**
   * Define the Http url to send the notification to
   * @property
   * @returns {string}
   */
  webhookUrl(): string;

  /**
   * Get the Http representation of the notification.
   * @property
   * @returns {any} http payload data
   */
  toWebhook?(): any;
}