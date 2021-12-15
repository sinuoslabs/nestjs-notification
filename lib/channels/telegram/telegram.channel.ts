import { Injectable } from "@nestjs/common";
import { INestjsNotifyChannel } from "../../interfaces";
import { ITelegramChannel } from "./telegram-channel.interface";

@Injectable()
export class TelegramChannel implements INestjsNotifyChannel {
  constructor() {
    //
  }

  /**
   * Send notify
   * @public
   * @param {IWebhookChannel} notification
   * @return Promise<AxiosResponse<any>>
   */
  public async send(notification: ITelegramChannel): Promise<any> {
    return Promise.resolve(undefined);
  }
}
