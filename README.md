# NestJS Notification

![issues](https://img.shields.io/github/issues/sinuoslabs/nestjs-notification)
[![npm version](https://badge.fury.io/js/@sinuos%2Fnestjs-notification.svg)](https://badge.fury.io/js/@sinuos%2Fnestjs-notification)
![license](https://img.shields.io/github/license/sinuoslabs/nestjs-notification)

## Description

NestJs Notifications is a flexible multi-channel notification service inspired by [Laravel Notifications](https://github.com/illuminate/notifications).

Notifications are short, informative messages that inform users of an event that occurred in your application.
For example, if you are writing a billing application, you can send a **"Bill Paid"** notification to your users via email and SMS channels.

This module works with existing channels that you can find here: https://github.com/nestjs-notification-channels. You have the possibility to create your own custom channels.

## Installation

```bash
$ npm i @sinuos/nestjs-notification
```

## Usage

### Declare module

```typescript
import { NestjsNotificationModule } from '@sinuos/nestjs-notification.module';

@Module({
  imports: [NestjsNotificationModule.register()],
})
export class AppModule {}
```

### Channel

```typescript
import { Injectable } from '@nestjs/common';
import { INestjsNotificationChannel } from '@sinuos/nestjs-notification.service';

@Injectable()
export class NexmoChannel implements INestjsNotificationChannel {
  constructor() {}

  send(): Promise<any> {
    return Promise.resolve(undefined);
  }
}
```

### Notification

```typescript
import { NestJsNotification } from '@sinuos/nestjs-notification.service';

export class InvoicPaidNotification implements NestJsNotification {
  public sendToChannels() {
    return [NexmoChannel];
  }

  toNexmo() {
    return new NexmoMessage();
  }
}
```

### Send notification

```typescript
import { Injectable } from '@nestjs/common';
import { NestjsNotificationService } from '@sinuos/nestjs-notification.service';

@Injectable()
export class AppService {
  constructor(private notification: NestjsNotificationService) {}

  notification() {
    const notification = new InvoicePaidNotification();
    this.notification.send(notification);
  }
}
```

## Based on

[Nestjs notification](https://github.com/edstevo/nestjs-notifications) by [edstevo](https://github.com/edstevo)

## License

NestJS's notification is [MIT licensed](LICENSE).
