import { ModuleMetadata, Provider, Type } from '@nestjs/common';

/**
 * @interface NestjsNotificationModuleOptionsFactory
 * @property createNestjsNotificationOptions()
 */
export interface NestjsNotificationModuleOptionsFactory {
  createNestjsNotificationOptions():
    | Promise<NestjsNotificationModuleOptions>
    | NestjsNotificationModuleOptions;
}

/**
 * @interface NestjsNotificationModuleAsyncOptions
 * @extends {Pick<ModuleMetadata, 'imports'>}
 * @property useExisting
 * @property useClass
 * @property useFactory
 * @property inject
 * @property extraProviders
 */
export interface NestjsNotificationModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<NestjsNotificationModuleOptionsFactory>;
  useClass?: Type<NestjsNotificationModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NestjsNotificationModuleOptions> | NestjsNotificationModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}

/**
 * @interface NestjsNotificationModuleOptions
 */
export type NestjsNotificationModuleOptions = null;
