import { ModuleMetadata, Provider, Type } from '@nestjs/common';

/**
 * @interface NestjsNotifyModuleOptionsFactory
 * @property createNestjsNotifyOptions()
 */
export interface NestjsNotifyModuleOptionsFactory {
  createNestjsNotifyOptions():
    | Promise<NestjsNotifyModuleOptions>
    | NestjsNotifyModuleOptions;
}

/**
 * @interface NestjsNotifyModuleAsyncOptions
 * @extends {Pick<ModuleMetadata, 'imports'>}
 * @property useExisting
 * @property useClass
 * @property useFactory
 * @property inject
 * @property extraProviders
 */
export interface NestjsNotifyModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<NestjsNotifyModuleOptionsFactory>;
  useClass?: Type<NestjsNotifyModuleOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<NestjsNotifyModuleOptions> | NestjsNotifyModuleOptions;
  inject?: any[];
  extraProviders?: Provider[];
}

/**
 * @interface NestjsNotifyModuleOptions
 */
export interface NestjsNotifyModuleOptions {
  queue?: any;
}
