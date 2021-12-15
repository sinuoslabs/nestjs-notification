import { Injectable } from "@nestjs/common";
import { INestjsNotifyChannel } from "../../interfaces";

@Injectable()
export class TwilioChannel implements INestjsNotifyChannel {
  constructor() {
    //
  }

  send(): Promise<any> {
    return Promise.resolve(undefined);
  }
}
