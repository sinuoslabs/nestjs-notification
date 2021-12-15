/**
 * telegram message
 * @class TelegramMessage
 */
export class TelegramMessage {
  /**
   * @public
   * @property {string} channelId
   */
  public channelId: string;

  /**
   * @public
   * @property {string} content
   */
  public content: string;

  /**
   * @constructor
   * @param {string} content
   */
  construct(content: string) {
    this.content = content;
  }

  /**
   * Set the message channelId.
   * @param {string} channelId
   * @return this
   */
  setChannelId(channelId: string): TelegramMessage {
    this.channelId = channelId;

    return this;
  }

  /**
   * Set the message content.
   * @param {string} content
   * @return this
   */
  setContent(content: string): TelegramMessage {
    this.content = content;

    return this;
  }
}
