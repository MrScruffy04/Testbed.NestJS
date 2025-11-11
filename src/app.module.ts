import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { configValidationSchema } from './core/config/config.schema'
import { LoggerService } from './core/logger/logger.service'
import { LoggingInterceptor } from './core/logger/logging.interceptor'
import { OpenAdrModule } from './modules/openadr/openadr.module'

@Module({
  imports: [
    OpenAdrModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: configValidationSchema,
    }),
  ],
  controllers: [],
  providers: [
    ConfigService,
    LoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],
})
export class AppModule {}
