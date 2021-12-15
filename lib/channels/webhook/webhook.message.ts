/**
 * Webhook message
 * @class WebhookMessage
 */
export class WebhookMessage {
  /**
   * @public
   * @property {string} channelId
   */
  public url: string;

  /**
   * @public
   * @property {any} header
   */
  public header: any;

  /**
   * @public
   * @property {any} body
   */
  public body: any;

  /**
   * @constructor
   * @param {string} body
   */
  construct(body: any) {
    this.body = body;
  }

  /**
   * Set the message url.
   * @param {string} url
   * @return this
   */
  setUrl(url: string): WebhookMessage {
    this.url = url;

    return this;
  }

  /**
   * Set the message header.
   * @param {string} header
   * @return this
   */
  setHeader(header: string): WebhookMessage {
    this.header = header;

    return this;
  }

  /**
   * Set the message body.
   * @param {string} body
   * @return this
   */
  setBody(body: string): WebhookMessage {
    this.body = body;

    return this;
  }
}
