import { DynamicModule, Module, Provider, ValueProvider } from '@nestjs/common';
import { NestjsNotifyService } from './nestjs-notify.service';
import {
  NestjsNotifyModuleAsyncOptions,
  NestjsNotifyModuleOptions,
  NestjsNotifyModuleOptionsFactory,
} from './interfaces';
import { NESTJS_NOTIFY_OPTIONS } from './constants';

@Module({})
export class NestjsNotifyModule {
  /**
   * Register module
   * @static
   * @param {NestjsNotifyModuleOptions} options
   * @return DynamicModule
   */
  static register(options: NestjsNotifyModuleOptions): DynamicModule {
    const notifyProvider: ValueProvider = {
      provide: NESTJS_NOTIFY_OPTIONS,
      useValue: options,
    };

    return {
      module: NestjsNotifyModule,
      providers: [NestjsNotifyService, notifyProvider],
      exports: [NestjsNotifyService, notifyProvider],
    };
  }

  /**
   * Register async
   * @static
   * @param {NestjsNotifyModuleAsyncOptions} options
   * @return DynamicModule
   */
  static registerAsync(options: NestjsNotifyModuleAsyncOptions): DynamicModule {
    const notifyProvider: ValueProvider = {
      provide: NESTJS_NOTIFY_OPTIONS,
      useValue: options,
    };

    return {
      module: NestjsNotifyModule,
      imports: options.imports || [],
      providers: [
        NestjsNotifyService,
        notifyProvider,
        ...this.createAsyncProviders(options),
      ],
      exports: [NestjsNotifyService, notifyProvider],
    };
  }

  /**
   * Create async providers
   * @private
   * @param {NestjsNotifyModuleAsyncOptions} options
   * @return Provider[]
   */
  private static createAsyncProviders(
    options: NestjsNotifyModuleAsyncOptions,
  ): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncConfigProvider(options)];
    } else if (!options.useClass) {
      return [
        {
          provide: NESTJS_NOTIFY_OPTIONS,
          useValue: {},
          inject: options.inject || [],
        },
      ];
    }

    return [
      this.createAsyncConfigProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  /**
   * Create async config provider
   * @private
   * @param {NestjsNotifyModuleAsyncOptions} options
   * @return Provider<any>
   */
  private static createAsyncConfigProvider(
    options: NestjsNotifyModuleAsyncOptions,
  ): Provider<any> {
    if (options.useFactory) {
      return {
        provide: NESTJS_NOTIFY_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    const inject = options.useClass || options.useExisting;

    if (!inject) {
      throw new Error(
        'Invalid configuration. Must provide useFactory, useClass or useExisting',
      );
    }

    return {
      provide: NESTJS_NOTIFY_OPTIONS,
      async useFactory(
        optionsFactory: NestjsNotifyModuleOptionsFactory,
      ): Promise<NestjsNotifyModuleOptions> {
        return optionsFactory.createNestjsNotifyOptions();
      },
      inject: [inject],
    };
  }
}
