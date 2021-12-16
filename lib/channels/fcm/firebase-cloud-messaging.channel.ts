import { Injectable } from '@nestjs/common';
import { INestjsNotifyChannel } from '../../interfaces';
import { IFirebaseCloudMessagingChannel } from './firebase-cloud-messaging-channel.interface';

@Injectable()
export class FirebaseCloudMessagingChannel implements INestjsNotifyChannel {
  constructor() {
    //
  }

  public async send(
    notification: IFirebaseCloudMessagingChannel,
  ): Promise<any> {
    return Promise.resolve(undefined);
  }
}
